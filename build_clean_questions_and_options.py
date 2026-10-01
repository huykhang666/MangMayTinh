import json
import re

with open('mtt_raw_questions_split.json', 'r', encoding='utf-8') as f:
    raw_qs = json.load(f)

with open('mtt_pages_parsed.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Build map of question number to page images
page_images_map = {}
for p in pages:
    page_num = p["page"]
    imgs = p["images"]
    if imgs:
        page_images_map[page_num] = imgs

cleaned_qs = []

for item in raw_qs:
    q_id = item["id"]
    raw = item["raw"]
    
    # Extract options A. B. C. D. E. F.
    # Look for lines starting with A. B. C. D. E. F. or inline options
    opt_matches = list(re.finditer(r'(?:^|\n|\s{2,})([A-F])[\.\:\-\)]\s*', raw))
    
    if opt_matches:
        q_text = raw[:opt_matches[0].start()].strip()
        q_text = re.sub(r'\s+', ' ', q_text)
        
        opts = []
        for i in range(len(opt_matches)):
            o_letter = opt_matches[i].group(1)
            o_start = opt_matches[i].start()
            o_end = opt_matches[i+1].start() if i + 1 < len(opt_matches) else len(raw)
            
            o_str = raw[o_start:o_end].strip()
            o_clean = re.sub(r'^(?:^|\n|\s{2,})[A-F][\.\:\-\)]\s*', '', o_str)
            o_clean = re.sub(r'\s+', ' ', o_clean).strip()
            opts.append(o_clean)
    else:
        q_text = re.sub(r'\s+', ' ', raw)
        opts = []
        
    cleaned_qs.append({
        "id": q_id,
        "q": q_text,
        "opts": opts
    })

print(f"Cleaned options for {len(cleaned_qs)} questions.")

with open('mtt_cleaned_qs.json', 'w', encoding='utf-8') as f:
    json.dump(cleaned_qs, f, ensure_ascii=False, indent=2)
