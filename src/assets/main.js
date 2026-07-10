import $ from 'jquery';
window.$ = window.jQuery = $;

$(document).ready(function() {
  // Expose switchTab globally so inline onclick events can find it
  window.switchTab = function(type) {
    const btnGuru = $('#tab-guru');
    const btnSiswa = $('#tab-siswa');
    const contentGuru = $('#content-guru');
    const contentSiswa = $('#content-siswa');

    if (type === 'guru') {
      btnGuru.addClass('bg-white border-r border-black').removeClass('text-gray-500 hover:bg-gray-100');
      btnSiswa.removeClass('bg-white border-r border-black').addClass('text-gray-500 hover:bg-gray-100');
      contentGuru.removeClass('hidden').addClass('row');
      contentSiswa.addClass('hidden').removeClass('row');
    } else {
      btnSiswa.addClass('bg-white border-l border-black').removeClass('text-gray-500 hover:bg-gray-100');
      btnGuru.removeClass('bg-white border-r border-black').addClass('text-gray-500 hover:bg-gray-100');
      contentSiswa.removeClass('hidden').addClass('row');
      contentGuru.addClass('hidden').removeClass('row');
    }
  };

  // Dropdown Toggle Logic
  $(document).on('click', '.dropdown-toggle', function(e) {
    e.preventDefault();
    const dropdownMenu = $(this).siblings('.dropdown-menu');
    $('.dropdown-menu').not(dropdownMenu).removeClass('show');
    dropdownMenu.toggleClass('show');
  });

  // Close dropdown menu when clicking outside
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.dropdown').length) {
      $('.dropdown-menu').removeClass('show');
    }
  });

  // Generic Tab Toggle Logic
  $(document).on('click', '[data-tab-target]', function(e) {
    e.preventDefault();
    const btn = $(this);
    const targetSelector = btn.attr('data-tab-target');
    const tabPane = $(targetSelector);

    if (tabPane.length) {
      const tabContentContainer = tabPane.parent();
      const navContainer = btn.closest('.nav-tabs, .nav-pills, .nav-pills-brutalist, .nav-underline, .nav-underline-bold');

      navContainer.find('[data-tab-target]').removeClass('active');
      btn.addClass('active');

      tabContentContainer.children('.tab-pane').removeClass('active');
      tabPane.addClass('active');
    }
  });

  // Toast Notification Engine
  window.showToast = function({ title, message, type = 'primary', duration = 4000, fullBg = false }) {
    let container = $('.toast-container');
    if (!container.length) {
      container = $('<div class="toast-container"></div>').appendTo('body');
    }

    let icon = 'info';
    if (type === 'success') icon = 'check_circle';
    if (type === 'danger') icon = 'error';
    if (type === 'warning') icon = 'warning';

    const themeClass = fullBg ? `toast-bg-${type}` : `toast-${type}`;

    const toast = $(`
      <div class="toast ${themeClass}">
        <div class="toast-header">
          <span class="toast-title">
            <span class="material-symbols-outlined fs-6">${icon}</span>
            ${title}
          </span>
          <button class="toast-close">
            <span class="material-symbols-outlined fs-6">close</span>
          </button>
        </div>
        <div class="toast-body">${message}</div>
        <div class="toast-progress-bar" style="animation: toast-progress ${duration}ms linear forwards;"></div>
      </div>
    `);

    container.append(toast);

    setTimeout(() => {
      toast.addClass('show');
    }, 10);

    const closeToast = () => {
      toast.removeClass('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    };

    toast.find('.toast-close').on('click', closeToast);

    if (duration > 0) {
      setTimeout(closeToast, duration);
    }
  };

  // Close alert click handler
  $(document).on('click', '.alert-close', function(e) {
    e.preventDefault();
    $(this).closest('.alert').fadeOut(250, function() {
      $(this).remove();
    });
  });

  // ── Sidebar Toggle Engine ────────────────────────────────
  $(document).on('click', '#sidebar-toggle', function() {
    if (window.innerWidth >= 768) {
      // Desktop: collapse/hide sidebar
      $('.sidebar').toggleClass('collapsed');
    } else {
      // Mobile: open sidebar drawer
      $('.sidebar').toggleClass('show');
      const backdrop = $('#sidebar-backdrop');
      if (backdrop.hasClass('hidden')) {
        backdrop.removeClass('hidden');
        setTimeout(() => backdrop.removeClass('opacity-0').addClass('opacity-100'), 10);
      } else {
        backdrop.removeClass('opacity-100').addClass('opacity-0');
        setTimeout(() => backdrop.addClass('hidden'), 300);
      }
    }
  });

  $(document).on('click', '#sidebar-backdrop', function() {
    $('.sidebar').removeClass('show');
    const backdrop = $('#sidebar-backdrop');
    backdrop.removeClass('opacity-100').addClass('opacity-0');
    setTimeout(() => backdrop.addClass('hidden'), 300);
  });

  // ── Sidebar Submenu Engine ───────────────────────────────
  // Initialize active submenus on load
  $('.sidebar-item.active').each(function() {
    $(this).find('.sidebar-submenu').show();
    $(this).find('.expand-icon').css('transform', 'rotate(180deg)');
  });

  $(document).on('click', '.sidebar-menu-toggle', function(e) {
    e.preventDefault();
    const parent = $(this).closest('.sidebar-item');
    const submenu = parent.find('.sidebar-submenu');
    const icon = $(this).find('.expand-icon');
    
    // Toggle active state
    parent.toggleClass('active');
    
    // Slide toggle
    submenu.slideToggle(200);
    
    // Rotate icon
    if (parent.hasClass('active')) {
      icon.css('transform', 'rotate(180deg)');
    } else {
      icon.css('transform', 'rotate(0deg)');
    }
  });

  // ── Responsive Badge Relocation ──────────────────────────
  const checkMobileBadge = () => {
    if (window.innerWidth < 768) {
      if ($('#navbar-badge-container #academic-year-badge').length) {
        $('#academic-year-badge').detach().appendTo('#sidebar-badge-container');
      }
    } else {
      if ($('#sidebar-badge-container #academic-year-badge').length) {
        $('#academic-year-badge').detach().appendTo('#navbar-badge-container');
      }
    }
  };
  
  $(window).on('resize', checkMobileBadge);
  // Initial check on load
  checkMobileBadge();

  // ── Modal Engine ─────────────────────────────────────────
  window.openModal = function(id) {
    const $backdrop = $('#' + id);
    $backdrop.addClass('open');
    $('body').css('overflow', 'hidden');
    // Focus first focusable element inside dialog
    setTimeout(function() {
      $backdrop.find('.modal-dialog').find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').first().trigger('focus');
    }, 210);
  };

  window.closeModal = function(id) {
    const $backdrop = $('#' + id);
    $backdrop.removeClass('open');
    $('body').css('overflow', '');
  };

  // Close when clicking outside dialog (unless .modal-static)
  $(document).on('click', '.modal-backdrop', function(e) {
    if ($(e.target).hasClass('modal-backdrop') && !$(this).hasClass('modal-static')) {
      const id = $(this).attr('id');
      if (id) window.closeModal(id);
    }
  });

  // Close via .modal-close button
  $(document).on('click', '.modal-close', function() {
    const $backdrop = $(this).closest('.modal-backdrop');
    if ($backdrop.hasClass('modal-static')) {
      // Shake effect for static modal
      $backdrop.find('.modal-dialog').css('animation', 'modalShake 0.3s ease');
      setTimeout(function() {
        $backdrop.find('.modal-dialog').css('animation', '');
      }, 320);
      return;
    }
    const id = $backdrop.attr('id');
    if (id) window.closeModal(id);
  });

  // Close on [data-modal-close]
  $(document).on('click', '[data-modal-close]', function() {
    const id = $(this).data('modal-close');
    if (id) window.closeModal(id);
  });

  // Escape key closes topmost open modal
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      const $open = $('.modal-backdrop.open:not(.modal-static)').last();
      if ($open.length) {
        window.closeModal($open.attr('id'));
      }
    }
  });
  // ── Sweet Alert Engine ───────────────────────────────────
  let $currentSwal = null;
  let swalCloseTimeout = null;

  window.showSweetAlert = function(options) {
    return new Promise((resolve) => {
      const {
        title = '',
        text = '',
        icon = 'info', // success, error, warning, info, question, loading
        showCancelButton = false,
        confirmText = 'OK',
        cancelText = 'Cancel',
        confirmColor = 'primary', // primary, success, danger, warning
        allowOutsideClick = true
      } = options;

      // Map icons
      let materialIcon = 'info';
      let isSpinning = false;
      if (icon === 'success') materialIcon = 'check_circle';
      if (icon === 'error') materialIcon = 'error';
      if (icon === 'warning') materialIcon = 'warning';
      if (icon === 'question') materialIcon = 'help';
      if (icon === 'loading') {
        materialIcon = 'progress_activity';
        isSpinning = true;
      }

      // Map confirm button class
      let btnConfirmClass = 'swal-btn-confirm';
      if (confirmColor === 'success') btnConfirmClass = 'swal-btn-success';
      if (confirmColor === 'danger') btnConfirmClass = 'swal-btn-danger';
      if (confirmColor === 'warning') btnConfirmClass = 'swal-btn-warning';

      const contentHtml = `
        <div class="swal-icon swal-icon-${icon}">
          <span class="material-symbols-outlined ${isSpinning ? 'animate-spin' : ''}">${materialIcon}</span>
        </div>
        <h3 class="swal-title">${title}</h3>
        ${text ? `<p class="swal-text">${text}</p>` : ''}
        ${icon !== 'loading' ? `
        <div class="swal-actions">
          ${showCancelButton ? `<button class="swal-btn swal-btn-cancel">${cancelText}</button>` : ''}
          <button class="swal-btn ${btnConfirmClass}">${confirmText}</button>
        </div>` : ''}
      `;

      if ($currentSwal) {
        // Reuse existing popup
        clearTimeout(swalCloseTimeout);
        $currentSwal.addClass('open'); // in case it started closing
        $currentSwal.find('.swal-dialog').html(contentHtml);
        
        // Pop effect
        $currentSwal.find('.swal-dialog').css('transform', 'scale(0.95)');
        setTimeout(() => {
          $currentSwal.find('.swal-dialog').css('transform', 'scale(1)');
          if (icon === 'error') {
            $currentSwal.find('.swal-dialog').css('animation', 'none');
            $currentSwal.find('.swal-dialog')[0].offsetHeight;
            $currentSwal.find('.swal-dialog').css('animation', 'swalShake 0.4s ease');
          } else {
            $currentSwal.find('.swal-dialog').css('animation', 'none');
          }
        }, 10);
      } else {
        // Create new popup
        const swalHtml = `
          <div class="swal-backdrop">
            <div class="swal-dialog">
              ${contentHtml}
            </div>
          </div>
        `;
        $currentSwal = $(swalHtml).appendTo('body');

        // Trigger show animation
        setTimeout(() => {
          $currentSwal.addClass('open');
          if (icon === 'error') {
            $currentSwal.find('.swal-dialog').css('animation', 'swalShake 0.4s ease');
          }
        }, 10);
      }

      const closeSwal = (result) => {
        $currentSwal.removeClass('open');
        swalCloseTimeout = setTimeout(() => {
          if ($currentSwal) {
            $currentSwal.remove();
            $currentSwal = null;
          }
        }, 200); // Wait for transition
        resolve(result); // Resolving immediately allows chaining before timeout finishes
      };

      // Re-bind events
      $currentSwal.off('click');
      $currentSwal.find(`.${btnConfirmClass}`).on('click', () => closeSwal(true));
      $currentSwal.find('.swal-btn-cancel').on('click', () => closeSwal(false));

      // Outside click
      $currentSwal.on('click', function(e) {
        if ($(e.target).hasClass('swal-backdrop') && allowOutsideClick && icon !== 'loading') {
          closeSwal(false);
        } else if ($(e.target).hasClass('swal-backdrop') && (!allowOutsideClick || icon === 'loading')) {
          // Shake to indicate it can't be closed outside
          $currentSwal.find('.swal-dialog').css('animation', 'none');
          $currentSwal.find('.swal-dialog')[0].offsetHeight; // trigger reflow
          $currentSwal.find('.swal-dialog').css('animation', 'swalShake 0.4s ease');
        }
      });
    });
  };
});

