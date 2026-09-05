import os
import glob
import re

dest_dir = 'kalebunna.templating/pages/presensio'
vue_files = glob.glob(os.path.join(dest_dir, '*.vue'))

def fix_sfc(content):
    # 1. Handle {{ pageHeader(...) }}
    # We will replace it with a placeholder div so we don't lose the title
    # Regex to capture the title string inside pageHeader('Title', ...)
    def replacer(match):
        title = match.group(1)
        return f'<div class="mb-md"><h3 class="font-bold text-xl">{{{{ \'{title}\' }}}}</h3></div>'
    
    # Matches {{ pageHeader('Title', ... ) }} even across multiple lines
    content = re.sub(r'\{\{\s*pageHeader\(\s*[\'"]([^\'"]+)[\'"].*?\}\}', replacer, content, flags=re.DOTALL)
    
    # 2. Handle <script> inside <template>
    # We will extract them
    scripts_src = []
    scripts_inline = []
    
    # Regex to find all <script>...</script> inside the file
    # But wait, we already have a <script setup> at the bottom.
    # So we only want to extract scripts that are BEFORE the final <script setup>
    
    template_match = re.search(r'<template>(.*?)</template>', content, re.DOTALL)
    if template_match:
        template_content = template_match.group(1)
        
        # Find all scripts inside template
        for script_match in re.finditer(r'<script([^>]*)>(.*?)</script>', template_content, re.DOTALL | re.IGNORECASE):
            attrs = script_match.group(1)
            body = script_match.group(2)
            
            src_match = re.search(r'src=["\']([^"\']+)["\']', attrs, re.IGNORECASE)
            if src_match:
                scripts_src.append(src_match.group(1))
            else:
                scripts_inline.append(body)
                
        # Remove scripts from template
        template_content = re.sub(r'<script[^>]*>.*?</script>', '', template_content, flags=re.DOTALL | re.IGNORECASE)
        content = content[:template_match.start(1)] + template_content + content[template_match.end(1):]
        
    # Now inject the extracted scripts into <script setup>
    if scripts_src or scripts_inline:
        setup_match = re.search(r'<script setup>(.*?)</script>', content, re.DOTALL)
        if setup_match:
            setup_content = setup_match.group(1)
            
            imports = "import { onMounted } from 'vue'\nimport { useHead } from '#imports'\n"
            
            use_head_str = ""
            if scripts_src:
                head_scripts = ", ".join([f"{{ src: '{s}', tagPosition: 'bodyClose' }}" for s in scripts_src])
                use_head_str = f"useHead({{ script: [{head_scripts}] }})\n"
                
            on_mounted_str = ""
            if scripts_inline:
                inline_code = "\n".join(scripts_inline)
                on_mounted_str = f"onMounted(() => {{\n{inline_code}\n}})\n"
                
            new_setup = imports + use_head_str + setup_content + on_mounted_str
            content = content[:setup_match.start(1)] + new_setup + content[setup_match.end(1):]
            
    return content

for file_path in vue_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_content = fix_sfc(content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed {os.path.basename(file_path)}")

print("Done fixing Vue SFCs")
