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
});

