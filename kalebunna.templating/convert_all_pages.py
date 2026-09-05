import os
import glob
import re

src_dir = 'src'
dest_dir = 'kalebunna.templating/pages/presensio'

os.makedirs(dest_dir, exist_ok=True)

html_files = glob.glob(os.path.join(src_dir, '*.html'))

for file_path in html_files:
    filename = os.path.basename(file_path)
    page_name = filename.replace('.html', '')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Check layout
    layout_name = 'presensio'
    if 'layouts/auth.html' in content:
        layout_name = 'auth'
        
    # Extract content
    match = re.search(r'{%\s*block\s+content\s*%}(.*?){%\s*endblock\s*%}', content, re.DOTALL)
    if not match:
        print(f"Skipping {filename}: No block content found")
        continue
        
    html_content = match.group(1).strip()
    
    vue_content = f"""<template>
{html_content}
</template>

<script setup>
definePageMeta({{
  layout: '{layout_name}'
}})
</script>
"""
    
    vue_file_path = os.path.join(dest_dir, f"{page_name}.vue")
    with open(vue_file_path, 'w', encoding='utf-8') as f:
        f.write(vue_content)
    
    print(f"Converted {filename} -> {page_name}.vue with layout '{layout_name}'")

