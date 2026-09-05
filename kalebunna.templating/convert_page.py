import re

def convert():
    with open('src/index.html', 'r') as f:
        content = f.read()

    # Extract block content
    match = re.search(r'{%\s*block\s+content\s*%}(.*?){%\s*endblock\s*%}', content, re.DOTALL)
    if not match:
        print("Block content not found")
        return
    
    html_content = match.group(1).strip()
    
    vue_content = f"""<template>
{html_content}
</template>

<script setup>
definePageMeta({{
  layout: 'presensio'
}})
</script>
"""
    with open('kalebunna.templating/pages/presensio/index.vue', 'w') as f:
        f.write(vue_content)

convert()
