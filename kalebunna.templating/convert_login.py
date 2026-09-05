import re

with open('src/login.html', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'<body[^>]*>(.*?)<script', content, re.DOTALL)
if match:
    body_content = match.group(1).strip()
    vue_content = f"""<template>
  <div class="bg-gray-50 text-black min-h-screen overflow-x-hidden">
{body_content}
  </div>
</template>

<script setup>
definePageMeta({{
  layout: false
}})
</script>
"""
    with open('kalebunna.templating/pages/presensio/login.vue', 'w', encoding='utf-8') as f:
        f.write(vue_content)
    print("Converted login.vue")
