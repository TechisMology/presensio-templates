<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Table Components' }}</h3></div>

  <div class="row">
    <!-- 1. Standard Striped & Hover Table -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Standard Striped & Hover Table</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Standard table with bottom row borders, alternating row colors,
            hover highlight effects, and action buttons.
          </p>
          <div class="table-container">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email Address</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>alex_dev</td>
                  <td>alex@company.com</td>
                  <td>Administrator</td>
                  <td>
                    <span class="badge badge-sm badge-success">Active</span>
                  </td>
                  <td class="text-right">
                    <div class="flex items-center justify-end gap-xs">
                      <button
                        class="btn-action btn-action-primary"
                        title="Edit Data"
                      >
                        <i class="icon-pencil"></i>
                      </button>
                      <button
                        class="btn-action btn-action-danger"
                        title="Hapus"
                      >
                        <i class="icon-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>jane_smith</td>
                  <td>jane.s@company.com</td>
                  <td>Editor</td>
                  <td>
                    <span class="badge badge-sm badge-success">Active</span>
                  </td>
                  <td class="text-right">
                    <div class="flex items-center justify-end gap-xs">
                      <button
                        class="btn-action btn-action-primary"
                        title="Edit Data"
                      >
                        <i class="icon-pencil"></i>
                      </button>
                      <button
                        class="btn-action btn-action-danger"
                        title="Hapus"
                      >
                        <i class="icon-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>bobby_k</td>
                  <td>bobby@company.com</td>
                  <td>Viewer</td>
                  <td>
                    <span class="badge badge-sm badge-secondary"
                      >Suspended</span
                    >
                  </td>
                  <td class="text-right">
                    <div class="flex items-center justify-end gap-xs">
                      <button
                        class="btn-action btn-action-primary"
                        title="Edit Data"
                      >
                        <i class="icon-pencil"></i>
                      </button>
                      <button
                        class="btn-action btn-action-danger"
                        title="Hapus"
                      >
                        <i class="icon-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Full Bordered Grid Table & Dark Header -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Full Bordered & Dark Header</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            A full bordered grid layout table utilizing the dark header
            configuration.
          </p>
          <div class="table-container">
            <table class="table table-bordered table-thead-dark">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Item Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PRD-01</td>
                  <td>Brutalist Mug</td>
                  <td>$12.50</td>
                </tr>
                <tr>
                  <td>PRD-02</td>
                  <td>Yellow Notebook</td>
                  <td>$8.99</td>
                </tr>
                <tr>
                  <td>PRD-03</td>
                  <td>Black Pencil Pack</td>
                  <td>$4.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Outer/Horizontal Bordered Only & Alert Header -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Row-Borders Only & Alert Header</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Table with horizontal dividers only (no vertical lines) and alert
            accent header.
          </p>
          <div class="table-container">
            <table class="table table-border-y table-thead-alert">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Uptime</th>
                  <th>Latency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Auth API</td>
                  <td class="fw-bold text-success">99.98%</td>
                  <td>45ms</td>
                </tr>
                <tr>
                  <td>Database</td>
                  <td class="fw-bold text-success">100%</td>
                  <td>8ms</td>
                </tr>
                <tr>
                  <td>CDN Storage</td>
                  <td class="fw-bold text-danger">92.40%</td>
                  <td>450ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. Card Integration: Teacher Schedule Table -->
    <div class="col-12 col-lg-8 mb-md">
      <div class="card card-shadow h-full">
        <div class="card-header">
          <h4 class="fs-6 fw-bold flex items-center gap-xs">
            <span class="material-symbols-outlined text-secondary fs-6"
              >calendar_today</span
            >
            Jadwal Guru Hari Ini
          </h4>
          <span class="fs-7 fw-bold text-secondary">Senin, 12 Juli 2026</span>
        </div>
        <div class="overflow-x-auto">
          <table class="table table-hover">
            <thead>
              <tr class="bg-white">
                <th class="text-secondary bg-white w-1/3">Guru</th>
                <th class="text-secondary bg-white">Mata Pelajaran</th>
                <th class="text-secondary bg-white">Kelas</th>
                <th class="text-secondary bg-white">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-md py-sm fw-bold flex items-center gap-sm">
                  <div class="avatar-wrapper">
                    <img
                      class="avatar avatar-sm rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeXB4QTtnxza5GADZns-cYweKLqInz52a_EgtZ2FgAFxSdldtWmeU9zUnFByt0z4CYF9PEzBeONcC2EqdxiTHiedmVQ9KfNzaLQObRgGP-mt7WkGdomUYLSYDe3qfMeaM1GSyhaCc-VCZPK-i5v_CVpTtHtJY-zsS1F4GVXSE6HQfIsuSUMtXy6NXopJPQxctzhUgSzI9XfZ5Yo6wZsh-9GDTTSTbFczdww2hbfJsckjI7FVLRn-neVO17NPsLYElUpXt0-9L0GKE"
                    />
                  </div>
                  <span>Drs. Bambang H.</span>
                </td>
                <td class="px-md py-sm text-secondary">Matematika Wajib</td>
                <td class="px-md py-sm fw-bold text-primary">XII-IPA-1</td>
                <td class="px-md py-sm">
                  <span class="badge badge-sm badge-success-bright">
                    HADIR
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-md py-sm fw-bold flex items-center gap-sm">
                  <div class="avatar-wrapper">
                    <img
                      class="avatar avatar-sm rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuALQ2NK1DKRPoFiruoVHN4vlENjW8NXIYkQl6ri7uCihZVHubjhUVoJlfGSbAdv_11Rwz7Z0kflgRpcqLJUULoktPd_8xMGGL9PGT08-6DOTfZeHGkRS8Sj2vN04u3mQefnbHac-AyUSGZ3FtTxkgdaGAl_uQHPJ6WBPGR0fcTRcp7iZ7dShvrYcEqWP29KWH5Q7DfLQ495ZOuBWJX5mlNAsW_FySMtbHoqTfSlqTl9A8rnRq3muDXDWMQiR_0VLHOO-MKfHBt7WAg"
                    />
                  </div>
                  <span>Siti Aminah, M.Pd</span>
                </td>
                <td class="px-md py-sm text-secondary">Bahasa Indonesia</td>
                <td class="px-md py-sm fw-bold text-primary">X-IPS-3</td>
                <td class="px-md py-sm">
                  <span class="badge badge-sm badge-warning">
                    BELUM ABSEN
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-md py-sm fw-bold flex items-center gap-sm">
                  <div class="avatar-wrapper">
                    <img
                      class="avatar avatar-sm rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTGajvUgmpf5TLHspqLMAmQB1X4TRDCdz0XUZPJ7xIfIzgc2Jf5JJxcRvh7VDNrIDeDRhn8aNBDJmJUaOx3-EZ1VNcYqSb7YsHtBu6tQc3lgCeGGs6dz8o6sylTUwfd5NhK7_SiISE6F5tk0NDqlJh11TBdEXpMilDUJq9FsB9uX4HdBUaqj8IWtydcOk6kHH9PPaiKh1kiQJnXikgKtwg_n4afTHV2UVbSr8SBhe6TfBffJ8Vv84E4PQ5Q9t6BswZ5NgB4-e6jfY"
                    />
                  </div>
                  <span>Eko Prasetyo, S.Or</span>
                </td>
                <td class="px-md py-sm text-secondary">Penjaskes</td>
                <td class="px-md py-sm fw-bold text-primary">XI-IPA-4</td>
                <td class="px-md py-sm">
                  <span class="badge badge-sm badge-success-bright">
                    HADIR
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-md py-sm fw-bold flex items-center gap-sm">
                  <div class="avatar-wrapper">
                    <img
                      class="avatar avatar-sm rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWO_GiLwx2TL9Pi0vlsU0KrMQjbn75csf_MNs00qVjOITFxe6w9XWGdwbMNnc8ApeLuiI0XbT_zIJ03QkaKBJw5NYKgrN0XoLjqv6UndSIQmodmUEelRlYLgsFTaNL-tR9x7DOZGlEnYbUfc4V4wIpiIL9SLhw5dO848NTSgWEhv-vuq1qps82IoKsdgTF7RsodZ7tD-ycLoeiC5hyMqFsnYvTpPK4Y9E4WiVmLmnRg7Ray5OMtTMmz-snf2vuVBet884g3XmydQk"
                    />
                  </div>
                  <span>Hj. Ratna Sari</span>
                </td>
                <td class="px-md py-sm text-secondary">Biologi</td>
                <td class="px-md py-sm fw-bold text-primary">XII-IPA-2</td>
                <td class="px-md py-sm">
                  <span class="badge badge-sm badge-warning">
                    BELUM ABSEN
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
          <button
            class="fs-7 fw-bold text-uppercase tracking-wider text-secondary hover:text-dark hover:underline"
          >
            View All Schedule →
          </button>
        </div>
      </div>
    </div>

    <!-- 5. Contextual Row Highlights & Pagination -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0"
            >Contextual Highlights & Pagination Showcase</span
          >
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Demonstrating row-level alert highlights and a clean Neo-Brutalist
            pagination bar.
          </p>

          <div class="table-container mb-md">
            <table class="table table-bordered">
              <thead class="table-thead-primary">
                <tr>
                  <th>Job ID</th>
                  <th>Task Description</th>
                  <th>Priority</th>
                  <th>System Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row-success">
                  <td>#8024</td>
                  <td>
                    Daily automated database backup and replication completed
                    successfully
                  </td>
                  <td>High</td>
                  <td>Success</td>
                </tr>
                <tr>
                  <td>#8025</td>
                  <td>Standard log clearance scheduler execution</td>
                  <td>Low</td>
                  <td>Idle</td>
                </tr>
                <tr class="table-row-danger">
                  <td>#8026</td>
                  <td>
                    System disk volume space exceeded 95% critical warning limit
                  </td>
                  <td>Critical</td>
                  <td>Warning</td>
                </tr>
                <tr>
                  <td>#8027</td>
                  <td>Sync email verification server queue dispatch</td>
                  <td>Medium</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- PAGINATION -->
          <div
            class="flex flex-col sm:flex-row justify-between items-center gap-sm pt-xs"
          >
            <span class="fs-7 text-secondary"
              >Showing 1 to 4 of 24 entries</span
            >

            <nav class="pagination">
              <a href="#" class="page-link disabled" aria-label="Previous">
                <span class="material-symbols-outlined fs-6">chevron_left</span>
              </a>
              <a href="#" class="page-link active">1</a>
              <a href="#" class="page-link">2</a>
              <a href="#" class="page-link">3</a>
              <span class="fs-7 text-secondary px-xs">...</span>
              <a href="#" class="page-link">6</a>
              <a href="#" class="page-link" aria-label="Next">
                <span class="material-symbols-outlined fs-6"
                  >chevron_right</span
                >
              </a>
            </nav>
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
