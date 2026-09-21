import pypdf
import json
import re

pdf_path = r"C:\Users\Huy Khang\Downloads\[studocu.com] - Ngân hàng câu hỏi trắc nghiệm môn Mạng máy tính - Chương 1.pdf"

reader = pypdf.PdfReader(pdf_path)
full_text = ""
for page in reader.pages:
    t = page.extract_text()
    if t:
        full_text += t + "\n"

print("Total extracted text length:", len(full_text))

# Let's save the text to a temporary file to inspect
with open("extracted_pdf_text.txt", "w", encoding="utf-8") as f:
    f.write(full_text)

print("Saved extracted_pdf_text.txt")
