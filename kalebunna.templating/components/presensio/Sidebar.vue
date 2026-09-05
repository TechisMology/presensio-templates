<template>
<!-- SIDEBAR -->
<aside class="sidebar">
  <!-- Sidebar Header -->
  <div class="sidebar-header">
    <a href="/presensio" class="sidebar-logo">
      <div class="sidebar-logo-mark">
        <img src="/presensio.png" alt="Logo" />
      </div>
      <div class="sidebar-logo-text">
        <div class="sidebar-logo-name">PRESENSIO</div>
        <div class="sidebar-logo-label">Admin Panel</div>
      </div>
    </a>
    <button class="sidebar-close" type="button" aria-label="Close Sidebar">
      <i class="icon-x" style="font-size: 16px"></i>
    </button>
  </div>

  <!-- Mobile badge container -->
  <div id="sidebar-badge-container" class="px-md mb-sm md:hidden"></div>

  <!-- Sidebar Navigation -->
  <nav class="sidebar-nav">
    <ul class="nav-menu">
      <!-- MENU -->

      <li
        class="nav-item has-submenu open active"
      >
        <a class="nav-link sidebar-menu-toggle" href="#">
          <i class="icon-layout-dashboard"></i>
          <span>Dashboard</span>
          <i class="icon-chevron-down nav-arrow"></i>
        </a>
        <ul class="nav-submenu">
          <li>
            <a
              class="nav-link active"
              href="/presensio"
              >Main Dashboard</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/presensio/education-dashboard"
              >Education</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/presensio/sales-dashboard"
              >Sales</a
            >
          </li>
        </ul>
      </li>

      <!-- PAGES -->
      <li class="nav-heading"><span>Pages</span></li>

      <li class="nav-item">
        <a
          class="nav-link active"
          href="/calendar.html"
        >
          <i class="icon-calendar"></i>
          <span>Calendar</span>
        </a>
      </li>

      <li class="nav-item has-submenu">
        <a class="nav-link sidebar-menu-toggle" href="#">
          <i class="icon-lock"></i>
          <span>Authentication</span>
          <i class="icon-chevron-down nav-arrow"></i>
        </a>
        <ul class="nav-submenu">
          <li><a class="nav-link" href="/login.html">Login</a></li>
          <li><a class="nav-link" href="#">Register</a></li>
        </ul>
      </li>

      <li
        class="nav-item has-submenu open active"
      >
        <a class="nav-link sidebar-menu-toggle" href="#">
          <i class="icon-wrench"></i>
          <span>Utility</span>
          <i class="icon-chevron-down nav-arrow"></i>
        </a>
        <ul class="nav-submenu">
          <li>
            <a
              class="nav-link active"
              href="/pos-cafe.html"
              >POS Cafe</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/pos-retail.html"
              >POS Retail</a
            >
          </li>
        </ul>
      </li>

      <!-- COMPONENTS -->
      <li class="nav-heading"><span>Components</span></li>

      <li
        class="nav-item has-submenu open active"
      >
        <a class="nav-link sidebar-menu-toggle" href="#">
          <i class="icon-shapes"></i>
          <span>Basic Element</span>
          <i class="icon-chevron-down nav-arrow"></i>
        </a>
        <ul class="nav-submenu">
          <li>
            <a
              class="nav-link active"
              href="/avatars.html"
              >Avatar</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/badges.html"
              >Badge</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/buttons.html"
              >Button</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/cards.html"
              >Card</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/dropdowns.html"
              >Dropdown</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/list-groups.html"
              >List Group</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/progress.html"
              >Progress</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/tabs.html"
              >Tab</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/accordion.html"
              >Accordion</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/carousel.html"
              >Carousel</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/collapse.html"
              >Collapse</a
            >
          </li>

          <li>
            <a
              class="nav-link active"
              href="/texts.html"
              >Typography</a
            >
          </li>
        </ul>
      </li>

      <li
        class="nav-item has-submenu open active"
      >
        <a class="nav-link sidebar-menu-toggle" href="#">
          <i class="icon-file-text"></i>
          <span>Forms</span>
          <i class="icon-chevron-down nav-arrow"></i>
        </a>
        <ul class="nav-submenu">
          <li>
            <a
              class="nav-link active"
              href="/forms.html"
              >Form</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/wizard.html"
              >Form Wizard</a
            >
          </li>
        </ul>
      </li>

      <li
        class="nav-item has-submenu open active"
      >
        <a class="nav-link sidebar-menu-toggle" href="#">
          <i class="icon-table"></i>
          <span>Tables</span>
          <i class="icon-chevron-down nav-arrow"></i>
        </a>
        <ul class="nav-submenu">
          <li>
            <a
              class="nav-link active"
              href="/tables.html"
              >Table</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/datatables.html"
              >DataTables</a
            >
          </li>
        </ul>
      </li>

      <li
        class="nav-item has-submenu open active"
      >
        <a class="nav-link sidebar-menu-toggle" href="#">
          <i class="icon-bell"></i>
          <span>Notifications</span>
          <i class="icon-chevron-down nav-arrow"></i>
        </a>
        <ul class="nav-submenu">
          <li>
            <a
              class="nav-link active"
              href="/alerts.html"
              >Alert</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/modals.html"
              >Modals</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/sweetalerts.html"
              >Sweet Alerts</a
            >
          </li>
          <li>
            <a
              class="nav-link active"
              href="/toasts.html"
              >Toast</a
            >
          </li>
        </ul>
      </li>

      <li
        class="nav-item has-submenu open active"
      >
        <a class="nav-link sidebar-menu-toggle" href="#">
          <i class="icon-bar-chart-3"></i>
          <span>Charts</span>
          <i class="icon-chevron-down nav-arrow"></i>
        </a>
        <ul class="nav-submenu">
          <li>
            <a
              class="nav-link active"
              href="/charts.html"
              >Charts</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>

  <!-- Footer info -->
  <div class="sidebar-footer">
    <div class="flex items-center gap-sm">
      <div
        class="w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-gray-200"
        style="background: #f3f4f6"
      >
        <img
          src="/presensio.png"
          alt="Logo"
          class="w-full h-full object-contain p-1"
        />
      </div>
      <div>
        <div class="sidebar-footer-title">Presensio</div>
        <div class="sidebar-footer-sub">Versi 1.0.0 · © 2026</div>
      </div>
    </div>
  </div>
</aside>

</template>
