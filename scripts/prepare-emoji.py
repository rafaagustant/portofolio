from pathlib import Path

import cv2
import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "Asset Project" / "emoji rafa.png"
DESTINATION = ROOT / "portofolio" / "public" / "emoji-rafa.png"
OUTPUT_SIZE = 512


def largest_component(mask: np.ndarray) -> np.ndarray:
    count, labels, stats, _ = cv2.connectedComponentsWithStats(mask, connectivity=8)
    if count <= 1:
        raise RuntimeError("No foreground component found in emoji asset.")
    largest = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
    return (labels == largest).astype(np.uint8)


def premultiplied_resize(rgb: np.ndarray, alpha: np.ndarray) -> np.ndarray:
    target = (OUTPUT_SIZE, OUTPUT_SIZE)
    alpha_float = alpha.astype(np.float32) / 255.0
    premultiplied = rgb.astype(np.float32) * alpha_float[..., None]
    resized_alpha = cv2.resize(alpha_float, target, interpolation=cv2.INTER_AREA)
    resized_rgb = cv2.resize(premultiplied, target, interpolation=cv2.INTER_AREA)
    safe_alpha = np.maximum(resized_alpha[..., None], 1 / 255)
    straight_rgb = np.where(resized_alpha[..., None] > 0, resized_rgb / safe_alpha, 0)
    return np.dstack((np.clip(straight_rgb, 0, 255), np.clip(resized_alpha * 255, 0, 255))).astype(np.uint8)


def main() -> None:
    bgr = cv2.imread(str(SOURCE), cv2.IMREAD_COLOR)
    if bgr is None:
        raise FileNotFoundError(SOURCE)

    height, width = bgr.shape[:2]
    grabcut_mask = np.zeros((height, width), dtype=np.uint8)
    rect = (int(width * 0.09), int(height * 0.055), int(width * 0.82), int(height * 0.88))
    background_model = np.zeros((1, 65), np.float64)
    foreground_model = np.zeros((1, 65), np.float64)
    cv2.grabCut(bgr, grabcut_mask, rect, background_model, foreground_model, 8, cv2.GC_INIT_WITH_RECT)

    foreground = np.where(
        (grabcut_mask == cv2.GC_FGD) | (grabcut_mask == cv2.GC_PR_FGD),
        1,
        0,
    ).astype(np.uint8)
    foreground = largest_component(foreground)
    foreground = cv2.morphologyEx(foreground, cv2.MORPH_CLOSE, np.ones((3, 3), np.uint8))
    foreground = cv2.erode(foreground, np.ones((5, 5), np.uint8), iterations=1)

    # Feather inward only. This preserves natural antialiasing without retaining
    # pixels from the original pale background around hair and glasses.
    inside_distance = cv2.distanceTransform(foreground, cv2.DIST_L2, 5)
    alpha = np.clip(inside_distance / 2.2, 0, 1)
    alpha = np.where(foreground == 1, alpha, 0)
    alpha = np.round(alpha * 255).astype(np.uint8)

    rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)
    rgba = premultiplied_resize(rgb, alpha)
    DESTINATION.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(rgba, mode="RGBA").save(DESTINATION, optimize=True)

    output = Image.open(DESTINATION)
    alpha_extrema = output.getchannel("A").getextrema()
    if alpha_extrema != (0, 255):
        raise RuntimeError(f"Unexpected alpha range: {alpha_extrema}")
    print(f"Created {DESTINATION} at {output.size} with alpha range {alpha_extrema}.")


if __name__ == "__main__":
    main()
