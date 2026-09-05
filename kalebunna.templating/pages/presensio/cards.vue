<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Card Components' }}</h3></div>

  <!-- SECTION 1: STANDARD STRUCTURES -->
  <div>
    <h3 class="fs-6 fw-bold text-secondary text-uppercase tracking-wider mb-sm">
      1. Card Structures
    </h3>
    <div class="row">
      <!-- Basic Card (No Shadow) -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic Card</h4>
            <h5 class="card-subtitle mb-xs">No Shadow</h5>
            <p class="fs-7 text-secondary">
              This is a standard card component with a simple body wrapper,
              borders, and default border-radius, without any shadow.
            </p>
          </div>
        </div>
      </div>

      <!-- Card with Header and Footer (With Shadow) -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-shadow">
          <div class="card-header">
            <span class="fs-7 fw-bold">Header Content</span>
            <div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Header & Footer Card</h4>
            <h5 class="card-subtitle mb-xs">With Shadow</h5>
            <p class="fs-7 text-secondary">
              A structured card component utilizing header and footer sections,
              styled with the `card-shadow` class.
            </p>
          </div>
          <div class="card-footer">
            <button
              class="fs-7 fw-bold text-uppercase tracking-wider text-secondary hover:text-dark"
            >
              Action Button →
            </button>
          </div>
        </div>
      </div>

      <!-- Card with Interactive Buttons (With Shadow) -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-shadow">
          <div class="card-body">
            <h4 class="card-title">Interactive Card</h4>
            <h5 class="card-subtitle mb-xs">With Shadow</h5>
            <p class="fs-7 text-secondary mb-sm">
              Cards can contain actionable buttons, custom icons, or image
              previews inside the main body.
            </p>
            <div class="flex gap-xs">
              <button class="btn btn-sm btn-warning">Confirm</button>
              <button class="btn btn-sm btn-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 2: COLOR VARIATIONS -->
  <div class="pt-sm">
    <h3 class="fs-6 fw-bold text-secondary text-uppercase tracking-wider mb-sm">
      2. Color Variations
    </h3>
    <div class="row">
      <!-- Primary Card (No Shadow) -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-primary">
          <div class="card-body">
            <h4 class="card-title">Primary Theme</h4>
            <h5 class="card-subtitle mb-xs">No Shadow</h5>
            <p class="fs-7 opacity-90">
              Card wrapper styled using the primary branding background color,
              without shadow.
            </p>
          </div>
        </div>
      </div>

      <!-- Danger Card (With Shadow) -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-danger card-shadow">
          <div class="card-body">
            <h4 class="card-title">Danger Theme</h4>
            <h5 class="card-subtitle mb-xs">With Shadow</h5>
            <p class="fs-7 opacity-90">
              Card wrapper styled using the danger color, with the `card-shadow`
              class applied.
            </p>
          </div>
        </div>
      </div>

      <!-- Warning Card (No Shadow) -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-warning">
          <div class="card-body">
            <h4 class="card-title">Warning Theme</h4>
            <h5 class="card-subtitle mb-xs">Solid Color</h5>
            <p class="fs-7 opacity-90">
              Card wrapper styled using the solid amber warning color with white
              text.
            </p>
          </div>
        </div>
      </div>

      <!-- Dark Card (With Shadow) -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-dark card-shadow">
          <div class="card-body">
            <h4 class="card-title">Dark Theme</h4>
            <h5 class="card-subtitle mb-xs">With Shadow</h5>
            <p class="fs-7 opacity-90">
              Card wrapper using dark text and inverse background, with the
              `card-shadow` class.
            </p>
          </div>
        </div>
      </div>

      <!-- Success Card (No Shadow) -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-success">
          <div class="card-body">
            <h4 class="card-title">Success Theme</h4>
            <h5 class="card-subtitle mb-xs">Solid Color</h5>
            <p class="fs-7 opacity-90">
              Card wrapper using solid success green background with white text.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 3: LIGHT / SOFT BACKGROUNDS (TANPA SHADOW) -->
  <div class="pt-sm">
    <h3 class="fs-6 fw-bold text-secondary text-uppercase tracking-wider mb-sm">
      3. Light Background Cards (Tanpa Shadow)
    </h3>
    <div class="row">
      <!-- Light Primary Card -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-light-primary">
          <div class="card-body">
            <h4 class="card-title">Primary Soft</h4>
            <h5 class="card-subtitle mb-xs">.card-light-primary</h5>
            <p class="fs-7">
              Background hijau lembut Kemenag dengan border pastel dan teks
              kontras, tanpa bayangan (flat).
            </p>
          </div>
        </div>
      </div>

      <!-- Light Danger Card -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-light-danger">
          <div class="card-body">
            <h4 class="card-title">Danger Soft</h4>
            <h5 class="card-subtitle mb-xs">.card-light-danger</h5>
            <p class="fs-7">
              Background merah lembut untuk peringatan pembatalan, error, atau
              penolakan status.
            </p>
          </div>
        </div>
      </div>

      <!-- Light Warning Card -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-light-warning">
          <div class="card-body">
            <h4 class="card-title">Warning Soft</h4>
            <h5 class="card-subtitle mb-xs">.card-light-warning</h5>
            <p class="fs-7">
              Background kuning/amber pastel untuk notifikasi pending,
              perhatian, atau instruksi penting.
            </p>
          </div>
        </div>
      </div>

      <!-- Light Info Card -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-light-info">
          <div class="card-body">
            <h4 class="card-title">Info Soft</h4>
            <h5 class="card-subtitle mb-xs">.card-light-info</h5>
            <p class="fs-7">
              Background biru lembut untuk petunjuk sistem, info pengumuman,
              atau panduan pengguna.
            </p>
          </div>
        </div>
      </div>

      <!-- Light Neutral Card -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-light">
          <div class="card-body">
            <h4 class="card-title">Neutral Light</h4>
            <h5 class="card-subtitle mb-xs">.card-light</h5>
            <p class="fs-7">
              Background abu-abu terang bersih (#F9FAFB) untuk pemisah konten
              netral.
            </p>
          </div>
        </div>
      </div>

      <!-- Light Dark Card -->
      <div class="col-12 col-md-4 mb-md">
        <div class="card card-light-dark">
          <div class="card-body">
            <h4 class="card-title">Dark Soft</h4>
            <h5 class="card-subtitle mb-xs">.card-light-dark</h5>
            <p class="fs-7">
              Background slate sejuk (#F3F4F6) dengan border abu kontras tanpa
              efek shadow.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Left Border Accent Cards -->
  <div class="mb-md">
    <h3 class="h5 mb-sm text-gray-800">Left Border Accent Cards</h3>
    <p class="fs-7 text-secondary mb-md">Cards featuring a solid colored accent line on the left edge, useful for highlighting metrics or statuses.</p>
    <div class="row">
      <div class="col-12 col-md-3 mb-md">
        <div class="card card-shadow card-border-left-primary h-full">
          <div class="card-body">
            <h5 class="fs-7 text-secondary font-semibold uppercase tracking-wide mb-1">Total Users</h5>
            <div class="h3 font-bold text-gray-900 mb-0">2,854</div>
            <div class="fs-7 text-primary mt-1 font-medium">▲ 12.5% since last month</div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-md-3 mb-md">
        <div class="card card-shadow card-border-left-success h-full">
          <div class="card-body">
            <h5 class="fs-7 text-secondary font-semibold uppercase tracking-wide mb-1">Revenue</h5>
            <div class="h3 font-bold text-gray-900 mb-0">$45,000</div>
            <div class="fs-7 text-success mt-1 font-medium">▲ 8.2% since last month</div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-md-3 mb-md">
        <div class="card card-shadow card-border-left-danger h-full">
          <div class="card-body">
            <h5 class="fs-7 text-secondary font-semibold uppercase tracking-wide mb-1">Bounce Rate</h5>
            <div class="h3 font-bold text-gray-900 mb-0">42.3%</div>
            <div class="fs-7 text-danger mt-1 font-medium">▼ 1.5% since last month</div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-md-3 mb-md">
        <div class="card card-shadow card-border-left-warning h-full">
          <div class="card-body">
            <h5 class="fs-7 text-secondary font-semibold uppercase tracking-wide mb-1">Pending Issues</h5>
            <div class="h3 font-bold text-gray-900 mb-0">14</div>
            <div class="fs-7 text-warning mt-1 font-medium">Needs attention</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
definePageMeta({
  layout: 'presensio'
})
</script>
