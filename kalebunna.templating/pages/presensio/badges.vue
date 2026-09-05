<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Badge Components' }}</h3></div>

  <div class="row">
    <!-- Badge Themes -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Badge Themes</span></div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Standard flat-colored badge variants with sharp/default borders.
          </p>
          <div class="flex flex-wrap gap-xs">
            <span class="badge badge-md badge-primary">Primary</span>
            <span class="badge badge-md badge-secondary">Secondary</span>
            <span class="badge badge-md badge-success">Success</span>
            <span class="badge badge-md badge-success-bright"
              >Success Bright</span
            >
            <span class="badge badge-md badge-danger">Danger</span>
            <span class="badge badge-md badge-warning">Warning</span>
            <span class="badge badge-md badge-dark">Dark</span>
            <span class="badge badge-md badge-light">Light</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pill Badges -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Pill Badges</span></div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Fully rounded badges commonly used for counts, tags, and status
            states.
          </p>
          <div class="flex flex-wrap gap-xs">
            <span class="badge badge-md badge-pill badge-primary"
              >Primary Pill</span
            >
            <span class="badge badge-md badge-pill badge-secondary"
              >Secondary Pill</span
            >
            <span class="badge badge-md badge-pill badge-success"
              >Success Pill</span
            >
            <span class="badge badge-md badge-pill badge-success-bright"
              >Success Bright Pill</span
            >
            <span class="badge badge-md badge-pill badge-danger"
              >Danger Pill</span
            >
            <span class="badge badge-md badge-pill badge-warning"
              >Warning Pill</span
            >
            <span class="badge badge-md badge-pill badge-dark">Dark Pill</span>
            <span class="badge badge-md badge-pill badge-light"
              >Light Pill</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Badge Sizes -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Badge Sizes</span></div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Comparative sizes for small, medium, and large labels.
          </p>
          <div class="flex items-center flex-wrap gap-xs">
            <span class="badge badge-sm badge-primary">Small (badge-sm)</span>
            <span class="badge badge-md badge-primary">Medium (badge-md)</span>
            <span class="badge badge-lg badge-primary">Large (badge-lg)</span>
          </div>
          <div class="flex items-center flex-wrap gap-xs mt-sm">
            <span class="badge badge-sm badge-pill badge-success"
              >Small Pill</span
            >
            <span class="badge badge-md badge-pill badge-success"
              >Medium Pill</span
            >
            <span class="badge badge-lg badge-pill badge-success"
              >Large Pill</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Badges with Shadows -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Neo-Brutalist Shadow Badges</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Badges styled with the `.badge-shadow` class for signature hard
            offset border shadows.
          </p>
          <div class="flex flex-wrap gap-xs">
            <span class="badge badge-md badge-primary badge-shadow"
              >Primary Shadow</span
            >
            <span class="badge badge-md badge-secondary badge-shadow"
              >Secondary Shadow</span
            >
            <span class="badge badge-md badge-success badge-shadow"
              >Success Shadow</span
            >
            <span class="badge badge-md badge-success-bright badge-shadow"
              >Success Bright Shadow</span
            >
            <span class="badge badge-md badge-danger badge-shadow"
              >Danger Shadow</span
            >
            <span class="badge badge-md badge-warning badge-shadow"
              >Warning Shadow</span
            >
            <span class="badge badge-md badge-dark badge-shadow"
              >Dark Shadow</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Badges in Context -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Badges in Layout Contexts</span>
        </div>
        <div class="card-body">
          <div class="row">
            <!-- Headers -->
            <div class="col-12 col-md-4 mb-sm">
              <span class="text-muted fs-7 text-uppercase fw-bold block mb-xs"
                >Within Text Headers</span
              >
              <div class="space-y-xs">
                <h1 class="h3 flex items-center gap-xs">
                  Inbox
                  <span
                    class="badge badge-sm badge-pill badge-danger badge-shadow"
                    >12</span
                  >
                </h1>
                <h2 class="h5 flex items-center gap-xs text-secondary">
                  Completed Tasks
                  <span class="badge badge-sm badge-pill badge-success"
                    >99+</span
                  >
                </h2>
              </div>
            </div>

            <!-- Buttons -->
            <div class="col-12 col-md-4 mb-sm">
              <span class="text-muted fs-7 text-uppercase fw-bold block mb-xs"
                >Inside Active Buttons</span
              >
              <div class="flex flex-wrap gap-xs">
                <button class="btn btn-md btn-primary btn-shadow">
                  Notifications
                  <span class="badge badge-sm badge-pill badge-light ml-xs"
                    >5</span
                  >
                </button>
                <button class="btn btn-md btn-secondary btn-shadow">
                  Pending Updates
                  <span class="badge badge-sm badge-pill badge-dark ml-xs"
                    >3</span
                  >
                </button>
              </div>
            </div>

            <!-- Inline Lists -->
            <div class="col-12 col-md-4 mb-sm">
              <span class="text-muted fs-7 text-uppercase fw-bold block mb-xs"
                >List Groups with Badges</span
              >
              <ul class="space-y-xs fs-7 fw-bold">
                <li
                  class="flex justify-between items-center p-xs border-b border-gray-100"
                >
                  <span>Server Status</span>
                  <span class="badge badge-sm badge-success">ONLINE</span>
                </li>
                <li
                  class="flex justify-between items-center p-xs border-b border-gray-100"
                >
                  <span>CPU Load</span>
                  <span class="badge badge-sm badge-warning">84%</span>
                </li>
                <li
                  class="flex justify-between items-center p-xs border-b border-gray-100"
                >
                  <span>Disk Warning</span>
                  <span class="badge badge-sm badge-danger">CRITICAL</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Date / Calendar Square Badges -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0"
            >Date & Calendar Badges (`.badge-date` / `.badge-square`)</span
          >
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Compact square / date badges for event lists, calendar dates, and
            schedule cards.
          </p>
          <div class="flex items-center flex-wrap gap-md">
            <!-- Small -->
            <div class="flex items-center gap-xs">
              <div class="badge-date-sm" style="background-color: #dcfce7">
                <span
                  class="text-[10px] font-bold leading-none"
                  style="color: #16a34a"
                  >15</span
                >
                <span
                  class="text-[8px] leading-none font-semibold"
                  style="color: #16a34a"
                  >JUL</span
                >
              </div>
              <span class="text-xs text-muted">.badge-date-sm (32px)</span>
            </div>

            <!-- Standard -->
            <div class="flex items-center gap-xs">
              <div class="badge-date" style="background-color: #dcfce7">
                <span
                  class="text-xs font-bold leading-none"
                  style="color: #16a34a"
                  >15</span
                >
                <span
                  class="text-[9px] leading-none font-semibold"
                  style="color: #16a34a"
                  >JUL</span
                >
              </div>
              <span class="text-xs text-muted">.badge-date (40px)</span>
            </div>

            <!-- Info Variant -->
            <div class="flex items-center gap-xs">
              <div class="badge-date" style="background-color: #dbeafe">
                <span
                  class="text-xs font-bold leading-none"
                  style="color: #2563eb"
                  >22</span
                >
                <span
                  class="text-[9px] leading-none font-semibold"
                  style="color: #2563eb"
                  >JUL</span
                >
              </div>
              <span class="text-xs text-muted">Info Variant</span>
            </div>

            <!-- Danger Variant -->
            <div class="flex items-center gap-xs">
              <div class="badge-date" style="background-color: #fee2e2">
                <span
                  class="text-xs font-bold leading-none"
                  style="color: #dc2626"
                  >05</span
                >
                <span
                  class="text-[9px] leading-none font-semibold"
                  style="color: #dc2626"
                  >AGU</span
                >
              </div>
              <span class="text-xs text-muted">Danger Variant</span>
            </div>

            <!-- Large -->
            <div class="flex items-center gap-xs">
              <div class="badge-date-lg" style="background-color: #fef9c3">
                <span
                  class="text-sm font-bold leading-none"
                  style="color: #ca8a04"
                  >18</span
                >
                <span
                  class="text-[10px] leading-none font-semibold"
                  style="color: #ca8a04"
                  >SEP</span
                >
              </div>
              <span class="text-xs text-muted">.badge-date-lg (48px)</span>
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
