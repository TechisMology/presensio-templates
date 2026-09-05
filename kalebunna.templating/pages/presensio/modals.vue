<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Modals' }}</h3></div>

  <div class="row">
    <!-- Modal Triggers -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="card-title">Basic Modals</span>
        </div>
        <div class="card-body">
          <div class="flex flex-wrap gap-sm">
            <button
              class="btn btn-primary btn-shadow"
              onclick="openModal('modalBasic')"
            >
              Basic Modal
            </button>
            <button
              class="btn btn-md btn-secondary btn-shadow"
              onclick="openModal('modalCentered')"
            >
              Vertically
            </button>
            <button
              class="btn btn-dark btn-shadow"
              onclick="openModal('modalScrollable')"
            >
              Scrollable Content
            </button>
            <button
              class="btn btn-danger btn-shadow"
              onclick="openModal('modalStatic')"
            >
              Static Backdrop
            </button>
            <button
              class="btn btn-light btn-shadow"
              onclick="openModal('modalBorderless')"
            >
              Borderless Modal
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Sizes -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="card-title">Modal Sizes</span>
        </div>
        <div class="card-body">
          <div class="flex flex-wrap gap-sm">
            <button
              class="btn btn-primary btn-shadow"
              onclick="openModal('modalSm')"
            >
              Small (sm)
            </button>
            <button
              class="btn btn-primary btn-shadow"
              onclick="openModal('modalMd')"
            >
              Default (md)
            </button>
            <button
              class="btn btn-primary btn-shadow"
              onclick="openModal('modalLg')"
            >
              Large (lg)
            </button>
            <button
              class="btn btn-primary btn-shadow"
              onclick="openModal('modalXl')"
            >
              Extra Large (xl)
            </button>
            <button
              class="btn btn-primary btn-shadow"
              onclick="openModal('modalFull')"
            >
              Full Screen
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Themes -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="card-title">Themed Modals (.bg-*)</span>
        </div>
        <div class="card-body">
          <div class="flex flex-wrap gap-sm">
            <button
              class="btn btn-primary btn-shadow"
              onclick="openModal('modalThemePrimary')"
            >
              Primary Header
            </button>
            <button
              class="btn btn-success btn-shadow"
              onclick="openModal('modalThemeSuccess')"
            >
              Success Header
            </button>
            <button
              class="btn btn-danger btn-shadow"
              onclick="openModal('modalThemeDanger')"
            >
              Danger Header
            </button>
            <button
              class="btn btn-warning btn-shadow"
              onclick="openModal('modalThemeWarning')"
            >
              Warning Header
            </button>
            <button
              class="btn btn-dark btn-shadow"
              onclick="openModal('modalThemeDark')"
            >
              Dark Header
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ======================= MODAL DEFINITIONS ======================= -->

<!-- 1. Basic Modal -->
<div class="modal-backdrop" id="modalBasic">
  <div class="modal-dialog">
    <div class="modal-header">
      <span class="modal-title">Basic Modal</span>
      <button class="modal-close" data-modal-close="modalBasic">&times;</button>
    </div>
    <div class="modal-body">
      <p>
        This is a basic neo-brutalist modal. It has a standard header, body, and
        footer. The background overlay obscures the page, and you can close it
        by clicking outside or pressing Escape.
      </p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-light btn-shadow" data-modal-close="modalBasic">
        Close
      </button>
      <button class="btn btn-primary btn-shadow" data-modal-close="modalBasic">
        Save Changes
      </button>
    </div>
  </div>
</div>

<!-- 2. Vertically Centered -->
<div class="modal-backdrop modal-centered" id="modalCentered">
  <div class="modal-dialog">
    <div class="modal-header">
      <span class="modal-title">Vertically Centered Modal</span>
      <button class="modal-close" data-modal-close="modalCentered">
        &times;
      </button>
    </div>
    <div class="modal-body">
      <p>
        By adding <code>.modal-centered</code> to the
        <code>.modal-backdrop</code>, this modal appears exactly in the middle
        of the screen instead of sliding down from the top.
      </p>
    </div>
    <div class="modal-footer">
      <button
        class="btn btn-primary btn-shadow"
        data-modal-close="modalCentered"
      >
        Got It
      </button>
    </div>
  </div>
</div>

<!-- 3. Scrollable Modal -->
<div class="modal-backdrop modal-scrollable" id="modalScrollable">
  <div class="modal-dialog">
    <div class="modal-header">
      <span class="modal-title">Scrollable Content</span>
      <button class="modal-close" data-modal-close="modalScrollable">
        &times;
      </button>
    </div>
    <div class="modal-body">
      <p>
        When you have a lot of content, the modal will eventually grow taller
        than the viewport. Adding <code>.modal-scrollable</code> to the backdrop
        restricts the height and adds an internal scrollbar to the body area.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
      <p>
        Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </p>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit.
      </p>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit.
      </p>
    </div>
    <div class="modal-footer">
      <button
        class="btn btn-dark btn-shadow"
        data-modal-close="modalScrollable"
      >
        Acknowledge
      </button>
    </div>
  </div>
</div>

<!-- 4. Static Backdrop Modal -->
<div class="modal-backdrop modal-static modal-centered" id="modalStatic">
  <div class="modal-dialog">
    <div class="modal-header bg-danger">
      <span class="modal-title">Static Backdrop</span>
      <button class="modal-close" data-modal-close="modalStatic">
        &times;
      </button>
    </div>
    <div class="modal-body">
      <p>
        This modal has <code>.modal-static</code> applied to the backdrop.
        Clicking outside of the modal will <strong>not</strong> close it, and
        pressing the Escape key will also be ignored. It plays a shake animation
        to indicate the user must interact with it directly.
      </p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-shadow" data-modal-close="modalStatic">
        Cancel
      </button>
      <button class="btn btn-danger btn-shadow" data-modal-close="modalStatic">
        Understood
      </button>
    </div>
  </div>
</div>

<!-- 5. Borderless Modal -->
<div class="modal-backdrop modal-borderless" id="modalBorderless">
  <div class="modal-dialog">
    <div class="modal-header">
      <span class="modal-title">Borderless Modal</span>
      <button class="modal-close" data-modal-close="modalBorderless">
        &times;
      </button>
    </div>
    <div class="modal-body">
      <p>
        Adding <code>.modal-borderless</code> to the backdrop removes the header
        and footer borders, creating a unified block of content. It also
        increases the shadow depth slightly for a more prominent floating
        effect.
      </p>
    </div>
    <div class="modal-footer">
      <button
        class="btn btn-primary btn-shadow"
        data-modal-close="modalBorderless"
      >
        Confirm
      </button>
    </div>
  </div>
</div>

<!-- SIZES -->
<div class="modal-backdrop modal-sm" id="modalSm">
  <div class="modal-dialog">
    <div class="modal-header">
      <span class="modal-title">Small Modal</span>
      <button class="modal-close" data-modal-close="modalSm">&times;</button>
    </div>
    <div class="modal-body">max-width: 340px</div>
  </div>
</div>
<div class="modal-backdrop modal-md" id="modalMd">
  <div class="modal-dialog">
    <div class="modal-header">
      <span class="modal-title">Medium Modal (Default)</span>
      <button class="modal-close" data-modal-close="modalMd">&times;</button>
    </div>
    <div class="modal-body">max-width: 560px</div>
  </div>
</div>
<div class="modal-backdrop modal-lg" id="modalLg">
  <div class="modal-dialog">
    <div class="modal-header">
      <span class="modal-title">Large Modal</span>
      <button class="modal-close" data-modal-close="modalLg">&times;</button>
    </div>
    <div class="modal-body">max-width: 760px</div>
  </div>
</div>
<div class="modal-backdrop modal-xl" id="modalXl">
  <div class="modal-dialog">
    <div class="modal-header">
      <span class="modal-title">Extra Large Modal</span>
      <button class="modal-close" data-modal-close="modalXl">&times;</button>
    </div>
    <div class="modal-body">max-width: 1000px</div>
  </div>
</div>
<div class="modal-backdrop modal-full" id="modalFull">
  <div class="modal-dialog">
    <div class="modal-header">
      <span class="modal-title">Full Screen Modal</span>
      <button class="modal-close" data-modal-close="modalFull">&times;</button>
    </div>
    <div class="modal-body">
      max-width/max-height cover almost the entire viewport.
    </div>
  </div>
</div>

<!-- THEMES -->
<div class="modal-backdrop" id="modalThemePrimary">
  <div class="modal-dialog">
    <div class="modal-header bg-primary">
      <span class="modal-title">Primary Header</span>
      <button class="modal-close" data-modal-close="modalThemePrimary">
        &times;
      </button>
    </div>
    <div class="modal-body">
      Add <code>.bg-primary</code> to the <code>.modal-header</code>.
    </div>
  </div>
</div>
<div class="modal-backdrop" id="modalThemeSuccess">
  <div class="modal-dialog">
    <div class="modal-header bg-success">
      <span class="modal-title">Success Header</span>
      <button class="modal-close" data-modal-close="modalThemeSuccess">
        &times;
      </button>
    </div>
    <div class="modal-body">
      Add <code>.bg-success</code> to the <code>.modal-header</code>.
    </div>
  </div>
</div>
<div class="modal-backdrop" id="modalThemeDanger">
  <div class="modal-dialog">
    <div class="modal-header bg-danger">
      <span class="modal-title">Danger Header</span>
      <button class="modal-close" data-modal-close="modalThemeDanger">
        &times;
      </button>
    </div>
    <div class="modal-body">
      Add <code>.bg-danger</code> to the <code>.modal-header</code>.
    </div>
  </div>
</div>
<div class="modal-backdrop" id="modalThemeWarning">
  <div class="modal-dialog">
    <div class="modal-header bg-warning">
      <span class="modal-title">Warning Header</span>
      <button class="modal-close" data-modal-close="modalThemeWarning">
        &times;
      </button>
    </div>
    <div class="modal-body">
      Add <code>.bg-warning</code> to the <code>.modal-header</code>.
    </div>
  </div>
</div>
<div class="modal-backdrop" id="modalThemeDark">
  <div class="modal-dialog">
    <div class="modal-header bg-dark">
      <span class="modal-title">Dark Header</span>
      <button class="modal-close" data-modal-close="modalThemeDark">
        &times;
      </button>
    </div>
    <div class="modal-body">
      Add <code>.bg-dark</code> to the <code>.modal-header</code>.
    </div>
  </div>
</div>
</template>

<script setup>
definePageMeta({
  layout: 'presensio'
})
</script>
