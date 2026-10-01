import pdfplumber
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\Huy Khang\Documents\trắc nghiệm MTT (C1,C2,C3) - Đap an.pdf"

def is_ans_char(c):
    # Red text color
    col = c.get('non_stroking_color')
    if col and isinstance(col, (list, tuple)) and len(col) == 3:
        r, g, b = col
        if r > 0.5 and g < 0.3 and b < 0.3:
            return True
    # Bold font
    font = str(c.get('fontname', '')).lower()
    if 'bold' in font:
        return True
    return False

pdf_questions = {}

with pdfplumber.open(pdf_path) as pdf:
    for page_idx, page in enumerate(pdf.pages, 1):
        chars = page.chars
        
        # Build text string with [[ANS]] tags
        marked = ""
        for c in chars:
            txt = c['text']
            if is_ans_char(c):
                marked += f"[[ANS]]{txt}[[ENDANS]]"
            else:
                marked += txt
        
        marked = re.sub(r'\[\[ENDANS\]\]\s*\[\[ANS\]\]', '', marked)
        
        # Find all question blocks on this page
        q_matches = list(re.finditer(r'Câu\s+(\d+)[\.\:]', marked, re.IGNORECASE))
        for i, m in enumerate(q_matches):
            q_num = int(m.group(1))
            start_pos = m.start()
            end_pos = q_matches[i+1].start() if i + 1 < len(q_matches) else len(marked)
            
            block = marked[start_pos:end_pos]
            
            # Find options A, B, C, D, E, F
            opt_matches = list(re.finditer(r'(?:^|\n|\s+)([A-F])[\.\:\-\s]\s*', block))
            
            ans_letters = []
            options_text = []
            
            for o_i, o_m in enumerate(opt_matches):
                o_letter = o_m.group(1)
                o_start = o_m.start()
                o_end = opt_matches[o_i+1].start() if o_i + 1 < len(opt_matches) else len(block)
                o_block = block[o_start:o_end]
                
                clean_text = re.sub(r'\[\[ANS\]\]|\[\[ENDANS\]\]', '', o_block).strip()
                clean_text = re.sub(r'^([A-F])[\.\:\-\s]\s*', '', clean_text, flags=re.IGNORECASE).strip()
                options_text.append(re.sub(r'\s+', ' ', clean_text))
                
                # If [[ANS]] is in option block, check if it's the option text or just "Câu X"
                if "[[ANS]]" in o_block:
                    ans_letters.append(o_letter)
            
            if q_num not in pdf_questions:
                pdf_questions[q_num] = {
                    "page": page_idx,
                    "ans_letters": ans_letters,
                    "options": options_text
                }

print(f"Successfully extracted {len(pdf_questions)} questions from PDF!")

# Compare against data_mtt_pdf.js
js_path = r"C:\Users\Huy Khang\Downloads\AstraAI_GiaSu_MangMayTinh\data_mtt_pdf.js"
with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

start_idx = js_content.find("[")
end_idx = js_content.rfind("]") + 1
js_questions = json.loads(js_content[start_idx:end_idx])

mismatches = []
correct = 0

for q in js_questions:
    q_id = q["id"]
    pdf_q = pdf_questions.get(q_id)
    
    if not pdf_q:
        mismatches.append({"id": q_id, "reason": "Missing from PDF extraction"})
        continue
    
    # PDF answers
    pdf_ans = pdf_q["ans_letters"]
    
    # JS answers
    js_ans_indices = q.get("ansList", [])
    if not js_ans_indices and "ans" in q:
        js_ans_indices = [q["ans"]] if isinstance(q["ans"], int) else q["ans"]
    
    js_ans_letters = [chr(65 + i) for i in js_ans_indices]
    
    # Check match
    if set(pdf_ans) == set(js_ans_letters) and len(pdf_ans) > 0:
        correct += 1
    else:
        mismatches.append({
            "id": q_id,
            "page": pdf_q["page"],
            "pdf_ans": pdf_ans,
            "js_ans": js_ans_letters,
            "q": q["q"][:60],
            "opts": q["opts"]
        })

print(f"\n==========================================")
print(f"VERIFICATION RESULTS:")
print(f"Total questions verified: {len(js_questions)}")
print(f"Exact Answer Matches: {correct} / {len(js_questions)}")
print(f"Discrepancies / Fixes needed: {len(mismatches)}")
print(f"==========================================")

if mismatches:
    print("\nDETAILS OF DISCREPANCIES:")
    for m in mismatches:
        print(f"Q{m['id']} (Page {m.get('page', '?')}): PDF Answer Key = {m.get('pdf_ans')} vs Current JS = {m.get('js_ans')}")
        print(f"  Question: {m.get('q')}")

# Save full comparison report
with open("mtt_verification_report.json", "w", encoding="utf-8") as f:
    json.dump({
        "total": len(js_questions),
        "correct": correct,
        "discrepancies": mismatches,
        "pdf_extracted": pdf_questions
    }, f, ensure_ascii=False, indent=2)
