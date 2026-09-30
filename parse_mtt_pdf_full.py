import pypdf
import os
import json
import re

pdf_path = r"C:\Users\Huy Khang\Documents\trắc nghiệm MTT (C1,C2,C3) - Đap an.pdf"
img_dir = r"C:\Users\Huy Khang\Downloads\AstraAI_GiaSu_MangMayTinh\mtt_page_images"

os.makedirs(img_dir, exist_ok=True)

reader = pypdf.PdfReader(pdf_path)
print(f"Total pages: {len(reader.pages)}")

page_data = []

for idx, page in enumerate(reader.pages):
    page_num = idx + 1
    text = page.extract_text() or ""
    
    saved_images = []
    for count, image_file_object in enumerate(page.images):
        img_name = f"page_{page_num}_img_{count+1}_{image_file_object.name}"
        img_path = os.path.join(img_dir, img_name)
        with open(img_path, "wb") as fp:
            fp.write(image_file_object.data)
        saved_images.append(img_name)
        print(f"Page {page_num}: Saved {img_name}")
        
    page_data.append({
        "page": page_num,
        "text": text,
        "images": saved_images
    })

with open("mtt_pages_parsed.json", "w", encoding="utf-8") as f:
    json.dump(page_data, f, ensure_ascii=False, indent=2)

print("Saved mtt_pages_parsed.json successfully!")
