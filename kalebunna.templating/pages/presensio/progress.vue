<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Progress Components' }}</h3></div>

  <div class="row">
    <!-- 1. Basic Example & Themes -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Basic Progress & Themes</span></div>
        <div class="card-body space-y-md">
          <p class="fs-7 text-secondary">Simple flat progress bars with borders and default height.</p>
          
          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Primary (Default) - 60%</span>
            <div class="progress">
              <div class="progress-bar" style="width: 60%"></div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Success Theme - 45%</span>
            <div class="progress">
              <div class="progress-bar progress-bar-success" style="width: 45%"></div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Danger Theme - 90%</span>
            <div class="progress">
              <div class="progress-bar progress-bar-danger" style="width: 90%"></div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Warning Theme - 25%</span>
            <div class="progress">
              <div class="progress-bar progress-bar-warning" style="width: 25%"></div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Dark Theme - 75%</span>
            <div class="progress">
              <div class="progress-bar progress-bar-dark" style="width: 75%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Interactive Shadow & Sizing -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Sizes & Shadow Effects</span></div>
        <div class="card-body space-y-md">
          <p class="fs-7 text-secondary">Showing different height options and Neo-Brutalist shadow variations (`progress-shadow`).</p>
          
          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Small (progress-sm) - 50%</span>
            <div class="progress progress-sm">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Medium (progress-md) - 50%</span>
            <div class="progress progress-md">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Large (progress-lg) - 50%</span>
            <div class="progress progress-lg">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>
          
          <hr class="border-gray-200" />
          
          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Shadow Progress Container (`progress-shadow`)</span>
            <div class="progress progress-md progress-shadow">
              <div class="progress-bar progress-bar-success" style="width: 70%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Striped & Animated -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Striped & Animated Progress</span></div>
        <div class="card-body space-y-md">
          <p class="fs-7 text-secondary">Progress bars with repeating background stripes and CSS movement animations.</p>
          
          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Striped Progress Bar - 65%</span>
            <div class="progress progress-md">
              <div class="progress-bar progress-bar-striped" style="width: 65%"></div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Success Striped - 80%</span>
            <div class="progress progress-md">
              <div class="progress-bar progress-bar-success progress-bar-striped" style="width: 80%"></div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Animated Striped (Active Loading) - 50%</span>
            <div class="progress progress-md progress-shadow">
              <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 50%"></div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Danger Animated Striped - 35%</span>
            <div class="progress progress-md progress-shadow">
              <div class="progress-bar progress-bar-danger progress-bar-striped progress-bar-animated" style="width: 35%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. Stacked & Inner Labels -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Stacked & Inner Labels</span></div>
        <div class="card-body space-y-md">
          <p class="fs-7 text-secondary">Progress bars displaying inner text labels, and stacked multiple bars inside a single container.</p>
          
          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Large Bar with Inner Label</span>
            <div class="progress progress-lg progress-shadow">
              <div class="progress-bar progress-bar-success" style="width: 75%">75% Completed</div>
            </div>
          </div>

          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Medium Bar with Percentage</span>
            <div class="progress progress-md">
              <div class="progress-bar progress-bar-danger" style="width: 40%">40%</div>
            </div>
          </div>

          <hr class="border-gray-200" />
          
          <div class="space-y-xs">
            <span class="fs-7 text-secondary fw-bold">Stacked Progress (Multiple Segments)</span>
            <p class="fs-7 text-muted">A single progress wrapper nesting multiple progress-bar children segments.</p>
            <div class="progress progress-lg progress-shadow">
              <div class="progress-bar" style="width: 30%">30% Admin</div>
              <div class="progress-bar progress-bar-success" style="width: 20%">20% Teacher</div>
              <div class="progress-bar progress-bar-warning" style="width: 25%">25% Student</div>
              <div class="progress-bar progress-bar-danger" style="width: 15%">15% System</div>
            </div>
          </div>
      </div>
    </div>

    <!-- 5. Spinners & Growing Loaders -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Spinners & Growing Loaders</span></div>
        <div class="card-body space-y-md">
          <!-- Border Spinners -->
          <div>
            <span class="text-muted fs-7 text-uppercase fw-bold block mb-xs">Border Spinners</span>
            <div class="flex items-center gap-sm flex-wrap">
              <div class="spinner-border spinner-sm text-primary"></div>
              <div class="spinner-border spinner-md text-success"></div>
              <div class="spinner-border spinner-lg text-danger"></div>
              <div class="spinner-border spinner-md text-warning"></div>
              <div class="spinner-border spinner-md text-dark"></div>
            </div>
          </div>

          <hr class="border-gray-200" />

          <!-- Growing Spinners -->
          <div>
            <span class="text-muted fs-7 text-uppercase fw-bold block mb-xs">Growing Spinners</span>
            <div class="flex items-center gap-sm flex-wrap">
              <div class="spinner-grow spinner-grow-sm text-primary"></div>
              <div class="spinner-grow spinner-grow-md text-success"></div>
              <div class="spinner-grow spinner-grow-lg text-danger"></div>
              <div class="spinner-grow spinner-grow-md text-warning"></div>
              <div class="spinner-grow spinner-grow-md text-dark"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6. Neo-Brutalist Logo Spinner & Loading Buttons -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Neo-Brutalist Rotating Logo & Buttons</span></div>
        <div class="card-body space-y-md">
          <!-- Logo Spinner -->
          <div>
            <span class="text-muted fs-7 text-uppercase fw-bold block mb-xs">Rotating Square Logo Spinner</span>
            <div class="flex items-center gap-md flex-wrap pt-xs">
              <div class="spinner-logo spinner-logo-sm bg-[#fed01b]">B</div>
              <div class="spinner-logo bg-[#fed01b]">B</div>
              <div class="spinner-logo spinner-logo-lg bg-[#fed01b]">B</div>
            </div>
          </div>

          <hr class="border-gray-200" />

          <!-- Loading Buttons -->
          <div>
            <span class="text-muted fs-7 text-uppercase fw-bold block mb-xs">Buttons with Spinners</span>
            <div class="flex items-center gap-xs flex-wrap">
              <button class="btn btn-md btn-primary btn-shadow disabled">
                <div class="spinner-border spinner-sm"></div>
                Please wait...
              </button>
              <button class="btn btn-md btn-secondary btn-shadow disabled">
                <div class="spinner-grow spinner-grow-sm"></div>
                Loading data...
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
