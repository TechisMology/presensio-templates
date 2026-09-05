import os
import re

def convert_sidebar():
    with open('src/partials/sidebar.html', 'r') as f:
        content = f.read()
    
    # Remove nunjucks logic like {% if page == '...' %}active{% endif %}
    content = re.sub(r'\{%[^%]+%\}', '', content)
    
    # Replace href="/..." with href="/presensio/..."
    # Note: index.html -> /presensio
    content = content.replace('href="/index.html"', 'href="/presensio"')
    content = content.replace('href="/sales-dashboard.html"', 'href="/presensio/sales-dashboard"')
    content = content.replace('href="/education-dashboard.html"', 'href="/presensio/education-dashboard"')
    
    # Wrap in <template>
    vue_content = f"<template>\n{content}\n</template>\n"
    
    os.makedirs('kalebunna.templating/components/presensio', exist_ok=True)
    with open('kalebunna.templating/components/presensio/Sidebar.vue', 'w') as f:
        f.write(vue_content)

def convert_navbar():
    with open('src/partials/navbar.html', 'r') as f:
        content = f.read()
    
    # Remove script tags at the bottom, we'll use Vue setup
    content = re.sub(r'<script>.*?</script>', '', content, flags=re.DOTALL)
    
    vue_content = f"""<template>
{content}
</template>

<script setup>
import {{ ref, onMounted }} from 'vue'

const currentDate = ref('')

onMounted(() => {{
  const now = new Date()
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
  currentDate.value = `${{days[now.getDay()]}}, ${{now.getDate()}} ${{months[now.getMonth()]}} ${{now.getFullYear()}}`
}})
</script>
"""
    # Replace static date span with reactive var
    vue_content = vue_content.replace('<span id="header-date">Jumat, 15 Agustus 2026</span>', '<span id="header-date">{{ currentDate }}</span>')
    
    with open('kalebunna.templating/components/presensio/Navbar.vue', 'w') as f:
        f.write(vue_content)

convert_sidebar()
convert_navbar()
