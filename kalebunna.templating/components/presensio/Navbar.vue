<template>
<!-- TOP APP BAR -->
<header class="app-header">
  <div class="flex items-center gap-sm flex-1" id="navbar-badge-container">
    <button class="header-btn" id="sidebar-toggle" aria-label="Toggle Sidebar">
      <span class="material-symbols-outlined">menu</span>
    </button>
    <!-- Date display -->
    <div class="hidden md:flex items-center gap-xs text-secondary text-xs">
      <span class="material-symbols-outlined text-muted text-base"
        >calendar_today</span
      >
      <span id="header-date">{{ currentDate }}</span>
    </div>
  </div>

  <div class="header-actions">
    <!-- Notification -->
    <button class="header-btn relative" aria-label="Notifikasi">
      <span class="material-symbols-outlined">notifications</span>
      <span class="header-badge">3</span>
    </button>
    <!-- User Profile Dropdown -->
    <div class="dropdown">
      <button
        class="dropdown-profile-toggle dropdown-toggle"
        type="button"
        id="profileDropdown"
        aria-expanded="false"
      >
        <div class="header-avatar m-0">
          <img
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTxW-SCaflPUu4H3RECGfkedzcsDUB9rh1rL0GOvCHLfi1RhU9z10Big4Cr14T8cMhgc6PYv-8kDUZsZU-XxCanQHYCQFL4cUf0VhUe1Aq--yTqxPPZQ5xARa4O9PQBR0ZubUdRIvnoTRSWKk3KYzp-esBnkeUv4VsiJtet4TDju69z6opAfqWO55Yfw4uw-uW5d-FwUSusVWpdPyH8UaOwwnvzp0bcE-n7HZCgsUMy62ukNEmHlUGKzylXL4EO6N2v1ss22aVaz8"
            alt="Avatar"
          />
        </div>
        <div class="dropdown-profile-info">
          <span class="dropdown-profile-name">Ahmad Fauzi</span>
          <span class="dropdown-profile-role">Admin Madrasah</span>
        </div>
      </button>

      <!-- Profile Menu -->
      <div
        class="dropdown-menu dropdown-menu-end dropdown-profile-menu"
        aria-labelledby="profileDropdown"
      >
        <!-- Profile Header Card -->
        <div class="dropdown-profile-header">
          <div class="avatar avatar-md rounded-lg overflow-hidden shrink-0">
            <img
              class="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTxW-SCaflPUu4H3RECGfkedzcsDUB9rh1rL0GOvCHLfi1RhU9z10Big4Cr14T8cMhgc6PYv-8kDUZsZU-XxCanQHYCQFL4cUf0VhUe1Aq--yTqxPPZQ5xARa4O9PQBR0ZubUdRIvnoTRSWKk3KYzp-esBnkeUv4VsiJtet4TDju69z6opAfqWO55Yfw4uw-uW5d-FwUSusVWpdPyH8UaOwwnvzp0bcE-n7HZCgsUMy62ukNEmHlUGKzylXL4EO6N2v1ss22aVaz8"
              alt="Avatar"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-gray-900 truncate mb-0.5">
              H. Ahmad Fauzi, M.Pd
            </p>
            <p class="text-[11px] text-gray-500 truncate mb-1">
              ahmad.fauzi@kemenag.go.id
            </p>
            <span class="badge badge-sm badge-primary">Super Admin</span>
          </div>
        </div>

        <!-- Menu Links -->
        <a href="#" class="dropdown-item">
          <i class="icon-user"></i>
          <span>Profil Saya</span>
        </a>
        <a href="#" class="dropdown-item">
          <i class="icon-settings"></i>
          <span>Pengaturan Akun</span>
        </a>
        <a href="#" class="dropdown-item">
          <i class="icon-shield-check"></i>
          <span>Keamanan & Sandi</span>
        </a>
        <a href="#" class="dropdown-item">
          <i class="icon-help-circle"></i>
          <span>Bantuan & Dukungan</span>
        </a>

        <div class="dropdown-divider"></div>

        <!-- Logout Action -->
        <a href="/login.html" class="dropdown-item dropdown-item-danger">
          <i class="icon-log-out"></i>
          <span>Keluar (Logout)</span>
        </a>
      </div>
    </div>
  </div>
</header>



</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentDate = ref('')

onMounted(() => {
  const now = new Date()
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
  currentDate.value = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`
})
</script>
