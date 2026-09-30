import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("mtt_marked_pages.json", "r", encoding="utf-8") as f:
    pages = json.load(f)

full_text = ""
page_map = []

for p in pages:
    page_num = p["page"]
    imgs = p["images"]
    txt = p["marked_text"]
    
    start_pos = len(full_text)
    full_text += txt + "\n"
    end_pos = len(full_text)
    
    page_map.append({
        "page": page_num,
        "start": start_pos,
        "end": end_pos,
        "images": imgs
    })

full_text = re.sub(r'\[\[ENDRED\]\]\s*\[\[RED\]\]', '', full_text)

q_pattern = re.compile(r'Câu\s+(\d+)[\.\:]\s*', re.IGNORECASE)
matches = list(q_pattern.finditer(full_text))

questions = []

for i in range(len(matches)):
    q_num = int(matches[i].group(1))
    start_idx = matches[i].start()
    end_idx = matches[i+1].start() if i + 1 < len(matches) else len(full_text)
    
    block = full_text[start_idx:end_idx].strip()
    
    q_images = []
    for pm in page_map:
        if pm["start"] <= start_idx <= pm["end"]:
            q_images.extend(pm["images"])
            
    opt_pattern = re.compile(r'(?:^|\n|\s+)([A-F])[\.\:\-\s]\s*')
    opt_matches = list(opt_pattern.finditer(block))
    
    if not opt_matches:
        q_text = block
        options = []
        ans_indices = []
    else:
        q_text = block[:opt_matches[0].start()].strip()
        q_text = re.sub(r'^Câu\s+\d+[\.\:]\s*', '', q_text, flags=re.IGNORECASE).strip()
        
        options = []
        ans_indices = []
        
        for opt_i in range(len(opt_matches)):
            opt_letter = opt_matches[opt_i].group(1)
            o_start = opt_matches[opt_i].start()
            o_end = opt_matches[opt_i+1].start() if opt_i + 1 < len(opt_matches) else len(block)
            
            opt_block = block[o_start:o_end].strip()
            
            is_correct = "[[RED]]" in opt_block
            
            clean_opt = re.sub(r'^([A-F])[\.\:\-\s]\s*', '', opt_block, flags=re.IGNORECASE)
            clean_opt = clean_opt.replace("[[RED]]", "").replace("[[ENDRED]]", "").strip()
            clean_opt = re.sub(r'\s+', ' ', clean_opt)
            
            options.append(clean_opt)
            if is_correct:
                ans_indices.append(opt_i)

    chapter = 1 if q_num <= 40 else (2 if q_num <= 90 else 3)
    
    questions.append({
        "id": q_num,
        "ch": chapter,
        "q": re.sub(r'\[\[RED\]\]|\[\[ENDRED\]\]', '', q_text).strip(),
        "opts": options,
        "ans": ans_indices[0] if len(ans_indices) == 1 else (ans_indices if ans_indices else 0),
        "ansList": ans_indices,
        "images": q_images,
        "exp": f"Đáp án đúng: {', '.join([chr(65+idx) for idx in ans_indices]) if ans_indices else 'A (Đáp án mặc định)'}"
    })

print(f"Parsed {len(questions)} questions successfully!")
print("Sample Question 13:")
print(json.dumps(questions[12], ensure_ascii=False, indent=2))
print("Sample Question 136:")
print(json.dumps(questions[135], ensure_ascii=False, indent=2))

with open("mtt_parsed_questions_bank.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)
