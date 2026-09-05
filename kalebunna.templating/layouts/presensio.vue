<template>
  <div class="main-wrapper antialiased">
    <div class="flex h-screen overflow-hidden">
      <!-- SIDEBAR COMPONENT -->
      <PresensioSidebar />
      
      <!-- Sidebar Backdrop -->
      <div
        id="sidebar-backdrop"
        class="fixed inset-0 bg-black/50 z-40 hidden opacity-0 transition-opacity duration-300"
      ></div>
      
      <!-- RIGHT SIDE CONTAINER -->
      <div class="flex-1 flex flex-col h-full overflow-hidden">
        <!-- NAVBAR COMPONENT -->
        <PresensioNavbar />

        <!-- SCROLLABLE CONTENT -->
        <main class="main-content">
          <slot />
        </main>
      </div>
    </div>

    <!-- FAB -->
    <button
      class="fixed bottom-lg right-lg w-12 h-12 bg-primary shadow-lg rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-all z-50 cursor-pointer border-0 hover:scale-105"
      aria-label="Tambah Baru"
    >
      <span class="material-symbols-outlined font-bold text-white text-xl"
        >add</span
      >
    </button>
  </div>
</template>

<script setup>
// Layout specific logic here
</script>
