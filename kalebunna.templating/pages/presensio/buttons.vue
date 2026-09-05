<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Button Components' }}</h3></div>

  <div class="row">
    <!-- Button Themes -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Button Themes</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Standard button variations with flat borders.
          </p>
          <div class="flex flex-wrap gap-xs">
            <button class="btn btn-md btn-primary">Primary</button>
            <button class="btn btn-md btn-secondary">Secondary</button>
            <button class="btn btn-md btn-success">Success</button>
            <button class="btn btn-md btn-danger">Danger</button>
            <button class="btn btn-md btn-warning">Warning</button>
            <button class="btn btn-md btn-dark">Dark</button>
            <button class="btn btn-md btn-light">Light</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Neo-Brutalist Shadow Buttons -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Neo-Brutalist Shadow (Interactive)</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Buttons with hard shadows and interactive hover/active translation
            offset effects.
          </p>
          <div class="flex flex-wrap gap-xs">
            <button class="btn btn-md btn-primary btn-shadow">Primary</button>
            <button class="btn btn-md btn-secondary btn-shadow">
              Secondary
            </button>
            <button class="btn btn-md btn-success btn-shadow">Success</button>
            <button class="btn btn-md btn-danger btn-shadow">Danger</button>
            <button class="btn btn-md btn-warning btn-shadow">Warning</button>
            <button class="btn btn-md btn-dark btn-shadow">Dark</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Button Sizes -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Button Sizes</span></div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Small, Medium, and Large padding and font sizes.
          </p>
          <div class="flex items-center flex-wrap gap-xs">
            <button class="btn btn-sm btn-primary">Small Button</button>
            <button class="btn btn-md btn-primary">Medium Button</button>
            <button class="btn btn-lg btn-primary">Large Button</button>
          </div>
          <div class="flex items-center flex-wrap gap-xs mt-sm">
            <button class="btn btn-sm btn-secondary btn-shadow">
              Small Shadow
            </button>
            <button class="btn btn-md btn-secondary btn-shadow">
              Medium Shadow
            </button>
            <button class="btn btn-lg btn-secondary btn-shadow">
              Large Shadow
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons with Icons -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Buttons with Icons</span>
        </div>
        <div class="card-body">
          <!-- Text with Icon -->
          <div class="mb-sm">
            <span class="text-muted fs-7 text-uppercase fw-bold block mb-xs"
              >Text with Icon</span
            >
            <div class="flex flex-wrap gap-xs">
              <button class="btn btn-md btn-primary btn-shadow">
                <span class="material-symbols-outlined fs-6">mail</span>
                Send Message
              </button>
              <button class="btn btn-md btn-secondary btn-shadow">
                <span class="material-symbols-outlined fs-6">download</span>
                Download CSV
              </button>
              <button class="btn btn-md btn-danger btn-shadow">
                <span class="material-symbols-outlined fs-6">delete</span>
                Delete Row
              </button>
            </div>
          </div>
          <hr class="border-gray-200 my-sm" />
          <!-- Icon Only -->
          <div>
            <span class="text-muted fs-7 text-uppercase fw-bold block mb-xs"
              >Solid Icon Only</span
            >
            <div class="flex items-center flex-wrap gap-xs">
              <!-- Small -->
              <button
                class="btn btn-sm btn-icon-only btn-icon-sm btn-primary"
                title="Search"
              >
                <span class="material-symbols-outlined fs-6">search</span>
              </button>
              <!-- Medium -->
              <button
                class="btn btn-md btn-icon-only btn-icon-md btn-secondary"
                title="Notifications"
              >
                <span class="material-symbols-outlined fs-5"
                  >notifications</span
                >
              </button>
              <!-- Large -->
              <button
                class="btn btn-lg btn-icon-only btn-icon-lg btn-warning"
                title="Add User"
              >
                <span class="material-symbols-outlined fs-4">add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Icon Buttons (Zero Border, Zero Shadow) -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0"
            >Action Icon Buttons (Tanpa Border, Tanpa Shadow)</span
          >
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-md">
            Tombol ikon minimalis tanpa border dan tanpa shadow, sangat cocok
            untuk aksi tabel (edit/hapus/detail), header toolbar, kartu, atau
            menu ringkas.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-md">
            <!-- Ghost / Transparent with Contextual Hover -->
            <div class="p-sm bg-gray-50 rounded-lg border border-gray-200">
              <span class="text-muted fs-8 text-uppercase fw-bold block mb-sm"
                >1. Ghost (Hover Tint)</span
              >
              <div class="flex items-center gap-xs flex-wrap">
                <button class="btn-action btn-action-primary" title="Edit Data">
                  <i class="icon-pencil"></i>
                </button>
                <button class="btn-action btn-action-info" title="Lihat Detail">
                  <i class="icon-eye"></i>
                </button>
                <button class="btn-action btn-action-success" title="Download">
                  <i class="icon-download"></i>
                </button>
                <button
                  class="btn-action btn-action-warning"
                  title="Bookmark / Star"
                >
                  <i class="icon-star"></i>
                </button>
                <button class="btn-action btn-action-danger" title="Hapus Data">
                  <i class="icon-trash-2"></i>
                </button>
                <button class="btn-action" title="Menu Opsi">
                  <i class="icon-more-vertical"></i>
                </button>
              </div>
            </div>

            <!-- Soft Background Tinted (Always Soft BG) -->
            <div class="p-sm bg-gray-50 rounded-lg border border-gray-200">
              <span class="text-muted fs-8 text-uppercase fw-bold block mb-sm"
                >2. Soft Tint (Always Light BG)</span
              >
              <div class="flex items-center gap-xs flex-wrap">
                <button class="btn-action btn-action-soft-primary" title="Edit">
                  <i class="icon-pencil"></i>
                </button>
                <button class="btn-action btn-action-soft-info" title="Info">
                  <i class="icon-info"></i>
                </button>
                <button
                  class="btn-action btn-action-soft-warning"
                  title="Warning"
                >
                  <i class="icon-alert-triangle"></i>
                </button>
                <button
                  class="btn-action btn-action-soft-danger"
                  title="Delete"
                >
                  <i class="icon-trash-2"></i>
                </button>
                <button
                  class="btn-action btn-action-soft-secondary"
                  title="Settings"
                >
                  <i class="icon-settings"></i>
                </button>
              </div>
            </div>

            <!-- Sizes & Rounded Shapes -->
            <div class="p-sm bg-gray-50 rounded-lg border border-gray-200">
              <span class="text-muted fs-8 text-uppercase fw-bold block mb-sm"
                >3. Ukuran & Bentuk Bulat</span
              >
              <div class="flex items-center gap-xs flex-wrap">
                <!-- XS -->
                <button
                  class="btn-action btn-action-xs btn-action-soft-primary"
                  title="Size XS (24px)"
                >
                  <i class="icon-check"></i>
                </button>
                <!-- SM -->
                <button
                  class="btn-action btn-action-sm btn-action-soft-primary"
                  title="Size SM (28px)"
                >
                  <i class="icon-edit"></i>
                </button>
                <!-- MD -->
                <button
                  class="btn-action btn-action-md btn-action-soft-primary"
                  title="Size MD (34px)"
                >
                  <i class="icon-edit-3"></i>
                </button>
                <!-- LG -->
                <button
                  class="btn-action btn-action-lg btn-action-soft-primary"
                  title="Size LG (40px)"
                >
                  <i class="icon-plus"></i>
                </button>
                <!-- Rounded Full -->
                <button
                  class="btn-action btn-action-rounded btn-action-soft-danger"
                  title="Rounded Full"
                >
                  <i class="icon-x"></i>
                </button>
              </div>
            </div>
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
