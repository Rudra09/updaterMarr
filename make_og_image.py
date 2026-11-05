"""
Makes the picture that WhatsApp shows when the link is shared.

Run from this folder (the one that contains index.html and assets/):

    pip install pillow
    python make_og_image.py

It takes your hero photo, crops it to the 1200x630 shape WhatsApp likes,
and saves assets/og-preview.jpg (kept under 300 KB).
To use a different photo, change SOURCE below.
"""
import os
from PIL import Image

SOURCE = "assets/0M2A4299.webp"       # the photo to show in the preview
OUTPUT = "assets/og-preview.jpg"
WIDTH, HEIGHT = 1200, 630
FOCUS = 0.35                           # 0 = keep the top of the photo, 1 = keep the bottom (0.35 keeps faces)

img = Image.open(SOURCE).convert("RGB")
scale = max(WIDTH / img.width, HEIGHT / img.height)
img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
left = (img.width - WIDTH) // 2
top = round((img.height - HEIGHT) * FOCUS)
img = img.crop((left, top, left + WIDTH, top + HEIGHT))

for quality in (85, 80, 75, 70, 65, 60):
    img.save(OUTPUT, "JPEG", quality=quality, optimize=True, progressive=True)
    if os.path.getsize(OUTPUT) <= 300 * 1024:
        break
print(f"Saved {OUTPUT}: {WIDTH}x{HEIGHT}, {os.path.getsize(OUTPUT) // 1024} KB (quality {quality})")
