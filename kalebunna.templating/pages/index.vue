<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
    <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Kalebunna Templating</h1>
    <p class="text-lg text-gray-600 mb-8">Pusat Portofolio Template Premium</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
      <!-- Presensio Template Card -->
      <NuxtLink to="/presensio" class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
        <div class="h-48 bg-green-50 flex items-center justify-center p-6">
          <img src="/presensio.png" alt="Presensio Logo" class="h-16 group-hover:scale-110 transition-transform duration-300 object-contain" onerror="this.src='https://via.placeholder.com/150?text=Presensio'"/>
        </div>
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-2">Presensio Theme</h2>
          <p class="text-sm text-gray-500 mb-4">Sistem Admin & Dashboard Modern dengan warna segar untuk Kemenag / Pemerintahan.</p>
          <div class="flex items-center text-primary font-semibold text-sm">
            Lihat Demo
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </div>
      </NuxtLink>

      <!-- Placeholder for Adminio -->
      <div class="group bg-gray-50 rounded-2xl shadow-sm border border-dashed border-gray-300 overflow-hidden flex flex-col opacity-75 cursor-not-allowed">
        <div class="h-48 flex items-center justify-center p-6">
          <span class="material-symbols-outlined text-4xl text-gray-400">dashboard_customize</span>
        </div>
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-500 mb-2">Adminio Theme</h2>
          <p class="text-sm text-gray-400 mb-4">Coming Soon. Template dashboard e-commerce dan analitik profesional.</p>
          <div class="flex items-center text-gray-400 font-semibold text-sm">
            Tahap Pengembangan
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Use default empty layout or no layout for landing page
definePageMeta({
  layout: false
})
</script>
