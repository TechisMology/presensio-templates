<template>
<div class="content-canvas">
  <div class="flex justify-between items-center mb-md">
    <div class="welcome-section mb-0">
      <h3 class="welcome-title font-bold">Dashboard Overview</h3>
      <p class="welcome-subtitle">
        Here's what's happening with your system today.
      </p>
    </div>
    <div class="flex gap-sm">
      <button class="btn btn-md btn-light">
        <span class="material-symbols-outlined fs-6">calendar_today</span>
        Today
      </button>
      <button class="btn btn-md btn-primary">
        <span class="material-symbols-outlined fs-6">download</span>
        Export Report
      </button>
    </div>
  </div>

  <!-- ROW 1: STAT CARDS -->
  <div class="row">
    <!-- Card 1 -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card card-border-left-success h-full">
        <div class="card-body flex justify-between items-start">
          <div>
            <h5 class="fs-7 text-secondary font-bold mb-xs">Total Users</h5>
            <div
              class="fs-3 lh-sm text-dark font-extrabold mb-0 tabular-nums text-balance"
            >
              2,847
            </div>
            <div class="fs-8 mt-sm font-medium flex items-center gap-1">
              <span class="text-success flex items-center"
                ><span class="material-symbols-outlined fs-7"
                  >arrow_drop_up</span
                >
                12.5%</span
              >
              <span class="text-muted">from last month</span>
            </div>
          </div>
          <div class="stat-card-icon stat-card-icon-green shrink-0">
            <span class="material-symbols-outlined text-success fs-4"
              >group</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card card-border-left-info h-full">
        <div class="card-body flex justify-between items-start">
          <div>
            <h5 class="fs-7 text-secondary font-semibold mb-xs">
              Total Revenue
            </h5>
            <div
              class="fs-3 font-bold text-dark mb-0 tabular-nums text-balance"
            >
              $24,780
            </div>
            <div class="fs-8 mt-sm font-medium flex items-center gap-1">
              <span class="text-success flex items-center"
                ><span class="material-symbols-outlined fs-7"
                  >arrow_drop_up</span
                >
                8.6%</span
              >
              <span class="text-muted">from last month</span>
            </div>
          </div>
          <div class="stat-card-icon stat-card-icon-blue shrink-0">
            <span class="material-symbols-outlined text-info fs-4"
              >account_balance_wallet</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card card-border-left-warning h-full">
        <div class="card-body flex justify-between items-start">
          <div>
            <h5 class="fs-7 text-secondary font-semibold mb-xs">
              Total Orders
            </h5>
            <div
              class="fs-3 font-bold text-dark mb-0 tabular-nums text-balance"
            >
              1,642
            </div>
            <div class="fs-8 mt-sm font-medium flex items-center gap-1">
              <span class="text-success flex items-center"
                ><span class="material-symbols-outlined fs-7"
                  >arrow_drop_up</span
                >
                15.3%</span
              >
              <span class="text-muted">from last month</span>
            </div>
          </div>
          <div class="stat-card-icon stat-card-icon-amber shrink-0">
            <span class="material-symbols-outlined text-warning fs-4"
              >shopping_cart</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Card 4 -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card card-border-left-purple h-full">
        <div class="card-body flex justify-between items-start">
          <div>
            <h5 class="fs-7 text-secondary font-semibold mb-xs">
              Active Sessions
            </h5>
            <div
              class="fs-3 font-bold text-dark mb-0 tabular-nums text-balance"
            >
              573
            </div>
            <div class="fs-8 mt-sm font-medium flex items-center gap-1">
              <span class="text-success flex items-center"
                ><span class="material-symbols-outlined fs-7"
                  >arrow_drop_up</span
                >
                5.2%</span
              >
              <span class="text-muted">from last hour</span>
            </div>
          </div>
          <div class="stat-card-icon stat-card-icon-purple shrink-0">
            <span class="material-symbols-outlined text-purple-600 fs-4"
              >stacked_line_chart</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ROW 2: CHARTS -->
  <div class="row">
    <!-- Line Chart -->
    <div class="col-12 col-xl-8">
      <div class="card h-full">
        <div
          class="card-header border-b-0 pb-0 flex justify-between items-center"
        >
          <span class="h6 mb-0 text-balance">Analytics Overview</span>
          <select class="form-control form-control-sm w-auto">
            <option>This Year</option>
            <option>Last Year</option>
          </select>
        </div>
        <div class="card-body flex flex-col justify-end min-h-25 max-h-78">
          <canvas id="chart-analytics-overview"></canvas>
        </div>
      </div>
    </div>

    <!-- Doughnut Chart -->
    <div class="col-12 col-xl-4">
      <div class="card h-full">
        <div
          class="card-header border-b-0 pb-0 flex justify-between items-center"
        >
          <span class="h6 mb-0 text-balance">Traffic Sources</span>
          <button class="btn btn-sm btn-light">View Report</button>
        </div>
        <div
          class="card-body flex flex-col xl:flex-row items-center justify-between gap-md min-h-[220px]"
        >
          <div class="relative w-48 h-48 shrink-0 mx-auto xl:mx-0">
            <canvas id="chart-traffic-sources"></canvas>
            <div
              class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <span class="fs-7 text-secondary">Total</span>
              <span class="fs-4 lh-sm font-bold text-dark mb-0 tabular-nums"
                >28,847</span
              >
            </div>
          </div>
          <div class="flex-1 w-full">
            <div
              class="flex items-center justify-between py-sm border-b border-gray-100"
            >
              <div class="flex items-center gap-xs">
                <span class="w-3 h-3 rounded-full bg-primary"></span>
                <span class="fs-7 fw-semibold text-dark">Direct</span>
              </div>
              <div class="flex items-center gap-sm">
                <span class="fs-7 fw-bold text-dark">40%</span>
                <span class="fs-7 text-secondary text-right w-12">11,539</span>
              </div>
            </div>
            <div
              class="flex items-center justify-between py-sm border-b border-gray-100"
            >
              <div class="flex items-center gap-xs">
                <span class="w-3 h-3 rounded-full bg-info"></span>
                <span class="fs-7 fw-semibold text-dark">Organic Search</span>
              </div>
              <div class="flex items-center gap-sm">
                <span class="fs-7 fw-bold text-dark">30%</span>
                <span class="fs-7 text-secondary text-right w-12">8,654</span>
              </div>
            </div>
            <div
              class="flex items-center justify-between py-sm border-b border-gray-100"
            >
              <div class="flex items-center gap-xs">
                <span class="w-3 h-3 rounded-full bg-warning"></span>
                <span class="fs-7 fw-semibold text-dark">Social Media</span>
              </div>
              <div class="flex items-center gap-sm">
                <span class="fs-7 fw-bold text-dark">20%</span>
                <span class="fs-7 text-secondary text-right w-12">5,769</span>
              </div>
            </div>
            <div class="flex items-center justify-between py-sm">
              <div class="flex items-center gap-xs">
                <span class="w-3 h-3 rounded-full bg-purple-600"></span>
                <span class="fs-7 fw-semibold text-dark">Referral</span>
              </div>
              <div class="flex items-center gap-sm">
                <span class="fs-7 fw-bold text-dark">10%</span>
                <span class="fs-7 text-secondary text-right w-12">2,885</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ROW 3: LISTS & BARS -->
  <div class="row">
    <!-- Recent Activities -->
    <div class="col-12 col-md-6 col-xl-4">
      <div class="card h-full">
        <div class="card-header border-b-0">
          <span class="h6 mb-0 text-balance">Recent Activities</span>
        </div>
        <div class="card-body p-0">
          <div class="list-group list-group-flush">
            <div
              class="list-group-item border-0 px-md py-sm flex justify-between items-start gap-sm"
            >
              <div class="avatar-wrapper shrink-0">
                <img
                  src="/AVATAR/AVATAR1.png"
                  alt="User"
                  class="avatar rounded-full h-10 w-10 object-cover"
                />
              </div>
              <div class="flex-1">
                <div class="fw-semibold text-dark fs-7">John Doe</div>
                <div class="fs-8 text-secondary">Added new user account</div>
              </div>
              <div class="text-end">
                <div class="fs-8 text-muted mb-1">2 min ago</div>
                <span
                  class="badge badge-sm badge-success rounded-full w-2 h-2 p-0 inline-block"
                ></span>
              </div>
            </div>

            <div
              class="list-group-item border-0 px-md py-sm flex justify-between items-start gap-sm"
            >
              <div class="avatar-wrapper shrink-0">
                <img
                  src="/AVATAR/AVATAR1.png"
                  alt="User"
                  class="avatar rounded-full h-10 w-10 object-cover"
                />
              </div>
              <div class="flex-1">
                <div class="fw-semibold text-dark fs-7">Sarah Wilson</div>
                <div class="fs-8 text-secondary">Updated system settings</div>
              </div>
              <div class="text-end">
                <div class="fs-8 text-muted mb-1">15 min ago</div>
                <span
                  class="badge badge-sm badge-success rounded-full w-2 h-2 p-0 inline-block"
                ></span>
              </div>
            </div>

            <div
              class="list-group-item border-0 px-md py-sm flex justify-between items-start gap-sm"
            >
              <div class="avatar-wrapper shrink-0">
                <img
                  src="/AVATAR/AVATAR1.png"
                  alt="User"
                  class="avatar rounded-full h-10 w-10 object-cover"
                />
              </div>
              <div class="flex-1">
                <div class="fw-semibold text-dark fs-7">Michael Brown</div>
                <div class="fs-8 text-secondary">Created new report</div>
              </div>
              <div class="text-end">
                <div class="fs-8 text-muted mb-1">1 hour ago</div>
                <span
                  class="badge badge-sm badge-success rounded-full w-2 h-2 p-0 inline-block"
                ></span>
              </div>
            </div>

            <div
              class="list-group-item border-0 px-md py-sm flex justify-between items-start gap-sm"
            >
              <div class="avatar-wrapper shrink-0">
                <img
                  src="/AVATAR/AVATAR1.png"
                  alt="User"
                  class="avatar rounded-full h-10 w-10 object-cover"
                />
              </div>
              <div class="flex-1">
                <div class="fw-semibold text-dark fs-7">Emily Johnson</div>
                <div class="fs-8 text-secondary">Exported user data</div>
              </div>
              <div class="text-end">
                <div class="fs-8 text-muted mb-1">2 hour ago</div>
                <span
                  class="badge badge-sm badge-success rounded-full w-2 h-2 p-0 inline-block"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer bg-white border-t-0 pt-0">
          <button
            class="btn btn-light w-full text-success bg-green-50 hover:bg-green-100 border-0"
          >
            View All Activities &rarr;
          </button>
        </div>
      </div>
    </div>

    <!-- User Growth (Bar Chart) -->
    <div class="col-12 col-md-6 col-xl-4">
      <div class="card h-full">
        <div class="card-header border-b-0 flex justify-between items-center">
          <span class="h6 mb-0 text-balance">User Growth</span>
          <select class="form-control form-control-sm w-auto">
            <option>This Month</option>
          </select>
        </div>
        <div class="card-body flex flex-col justify-end min-h-[220px]">
          <canvas id="chart-user-growth"></canvas>
        </div>
      </div>
    </div>

    <!-- Top Users (Progress Bars) -->
    <div class="col-12 col-md-12 col-xl-4">
      <div class="card h-full">
        <div class="card-header border-b-0 flex justify-between items-center">
          <span class="h6 mb-0 text-balance">Top Users</span>
          <a href="#" class="fs-7 text-success text-decoration-none fw-semibold"
            >View All</a
          >
        </div>
        <div class="card-body flex flex-col justify-center space-y-md">
          <div class="flex items-center gap-sm">
            <div
              class="badge badge-light text-muted w-6 h-6 flex items-center justify-center rounded-sm"
            >
              1
            </div>
            <div class="avatar-wrapper shrink-0">
              <img
                src="/AVATAR/AVATAR1.png"
                class="avatar rounded-full h-8 w-8 object-cover"
              />
            </div>
            <div class="flex-1">
              <div class="fw-semibold text-dark fs-7">John Doe</div>
              <div class="fs-8 text-secondary">Super Admin</div>
            </div>
            <div class="w-1/3 flex flex-col items-end gap-1">
              <span class="fs-8 fw-semibold text-dark">98%</span>
              <div class="progress progress-sm w-full">
                <div class="progress-bar progress-bar-success w-[98%]"></div>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-sm">
            <div
              class="badge badge-light text-muted w-6 h-6 flex items-center justify-center rounded-sm"
            >
              2
            </div>
            <div class="avatar-wrapper shrink-0">
              <img
                src="/AVATAR/AVATAR1.png"
                class="avatar rounded-full h-8 w-8 object-cover"
              />
            </div>
            <div class="flex-1">
              <div class="fw-semibold text-dark fs-7">Sarah Wilson</div>
              <div class="fs-8 text-secondary">Manager</div>
            </div>
            <div class="w-1/3 flex flex-col items-end gap-1">
              <span class="fs-8 fw-semibold text-dark">85%</span>
              <div class="progress progress-sm w-full">
                <div class="progress-bar progress-bar-success w-[85%]"></div>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-sm">
            <div
              class="badge badge-light text-muted w-6 h-6 flex items-center justify-center rounded-sm"
            >
              3
            </div>
            <div class="avatar-wrapper shrink-0">
              <img
                src="/AVATAR/AVATAR1.png"
                class="avatar rounded-full h-8 w-8 object-cover"
              />
            </div>
            <div class="flex-1">
              <div class="fw-semibold text-dark fs-7">Michael Brown</div>
              <div class="fs-8 text-secondary">Editor</div>
            </div>
            <div class="w-1/3 flex flex-col items-end gap-1">
              <span class="fs-8 fw-semibold text-dark">72%</span>
              <div class="progress progress-sm w-full">
                <div class="progress-bar progress-bar-success w-[72%]"></div>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-sm">
            <div
              class="badge badge-light text-muted w-6 h-6 flex items-center justify-center rounded-sm"
            >
              4
            </div>
            <div class="avatar-wrapper shrink-0">
              <img
                src="/AVATAR/AVATAR1.png"
                class="avatar rounded-full h-8 w-8 object-cover"
              />
            </div>
            <div class="flex-1">
              <div class="fw-semibold text-dark fs-7">Emily Johnson</div>
              <div class="fs-8 text-secondary">Viewer</div>
            </div>
            <div class="w-1/3 flex flex-col items-end gap-1">
              <span class="fs-8 fw-semibold text-dark">60%</span>
              <div class="progress progress-sm w-full">
                <div class="progress-bar progress-bar-success w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ROW 4: BOTTOM WIDGETS -->
  <div class="row">
    <!-- Secure Banner -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card card-primary h-full relative overflow-hidden">
        <div class="card-body flex flex-col justify-center z-10">
          <h4 class="h5 text-white mb-xs">System Secure</h4>
          <p class="fs-7 text-white opacity-90 mb-md">
            All systems are running smoothly and securely.
          </p>
          <div>
            <button
              class="btn btn-sm border border-white text-white hover:bg-white hover:text-primary rounded-full px-4"
            >
              View Status &rarr;
            </button>
          </div>
        </div>
        <!-- Decorative bg icon -->
        <div class="absolute -right-4 -bottom-4 opacity-20 pointer-events-none">
          <span
            class="material-symbols-outlined text-white"
            style="font-size: 140px; line-height: 1"
            >security</span
          >
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card h-full">
        <div class="card-header border-b-0 pb-0">
          <span class="h6 mb-0 text-balance">Quick Actions</span>
        </div>
        <div class="card-body flex items-center justify-center">
          <div class="grid grid-cols-4 gap-sm text-center w-full">
            <a
              href="#"
              class="flex flex-col items-center gap-xs text-decoration-none group"
            >
              <div
                class="w-12 h-12 rounded-lg bg-blue-50 text-info flex items-center justify-center group-hover:bg-blue-100 transition-colors"
              >
                <span class="material-symbols-outlined">person_add</span>
              </div>
              <span class="fs-8 fw-semibold text-dark">Add User</span>
            </a>

            <a
              href="#"
              class="flex flex-col items-center gap-xs text-decoration-none group"
            >
              <div
                class="w-12 h-12 rounded-lg bg-amber-50 text-warning flex items-center justify-center group-hover:bg-amber-100 transition-colors"
              >
                <span class="material-symbols-outlined">description</span>
              </div>
              <span class="fs-8 fw-semibold text-dark">Report</span>
            </a>

            <a
              href="#"
              class="flex flex-col items-center gap-xs text-decoration-none group"
            >
              <div
                class="w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-100 transition-colors"
              >
                <span class="material-symbols-outlined">settings</span>
              </div>
              <span class="fs-8 fw-semibold text-dark">Settings</span>
            </a>

            <a
              href="#"
              class="flex flex-col items-center gap-xs text-decoration-none group"
            >
              <div
                class="w-12 h-12 rounded-lg bg-green-50 text-success flex items-center justify-center group-hover:bg-green-100 transition-colors"
              >
                <span class="material-symbols-outlined">download</span>
              </div>
              <span class="fs-8 fw-semibold text-dark">Export</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Calendar Widget Placeholder -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card h-full">
        <div
          class="card-header border-b-0 pb-0 flex justify-between items-center"
        >
          <span class="h6 mb-0 text-balance">Calendar</span>
        </div>
        <div class="card-body">
          <div class="flex justify-between items-center mb-sm">
            <button class="btn btn-sm btn-light p-1">
              <span class="material-symbols-outlined fs-7">chevron_left</span>
            </button>
            <span class="fs-7 fw-bold text-dark">May 2026</span>
            <button class="btn btn-sm btn-light p-1">
              <span class="material-symbols-outlined fs-7">chevron_right</span>
            </button>
          </div>
          <!-- Basic static calendar grid -->
          <div
            class="grid grid-cols-7 gap-1 text-center fs-8 text-secondary mb-2"
          >
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div
            class="grid grid-cols-7 gap-1 text-center fs-7 text-dark fw-medium"
          >
            <div class="text-muted">27</div>
            <div class="text-muted">28</div>
            <div class="text-muted">29</div>
            <div class="text-muted">30</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div class="bg-success text-white rounded-md">14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notifications -->
    <div class="col-12 col-md-6 col-xl-3">
      <div class="card h-full">
        <div
          class="card-header border-b-0 pb-0 flex justify-between items-center"
        >
          <span class="h6 mb-0 text-balance">Notifications</span>
          <a href="#" class="fs-7 text-success text-decoration-none fw-semibold"
            >View All</a
          >
        </div>
        <div class="card-body p-0">
          <div class="list-group list-group-flush">
            <div class="list-group-item border-0 px-md py-xs flex gap-sm">
              <div
                class="w-8 h-8 rounded-lg bg-green-50 text-success flex items-center justify-center shrink-0"
              >
                <span class="material-symbols-outlined fs-7">sync</span>
              </div>
              <div class="flex-1">
                <div class="flex justify-between">
                  <div class="fw-semibold text-dark fs-7">System Update</div>
                  <div class="fs-8 text-muted flex items-center">
                    10m
                    <span
                      class="badge badge-sm badge-success rounded-full w-2 h-2 p-0 inline-block ml-1"
                    ></span>
                  </div>
                </div>
                <div class="fs-8 text-secondary">
                  The system will be updated
                </div>
              </div>
            </div>

            <div class="list-group-item border-0 px-md py-xs flex gap-sm">
              <div
                class="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0"
              >
                <span class="material-symbols-outlined fs-7">person_add</span>
              </div>
              <div class="flex-1">
                <div class="flex justify-between">
                  <div class="fw-semibold text-dark fs-7">New User</div>
                  <div class="fs-8 text-muted flex items-center">
                    25m
                    <span
                      class="badge badge-sm badge-success rounded-full w-2 h-2 p-0 inline-block ml-1"
                    ></span>
                  </div>
                </div>
                <div class="fs-8 text-secondary">A new user has registered</div>
              </div>
            </div>

            <div class="list-group-item border-0 px-md py-xs flex gap-sm">
              <div
                class="w-8 h-8 rounded-lg bg-amber-50 text-warning flex items-center justify-center shrink-0"
              >
                <span class="material-symbols-outlined fs-7">description</span>
              </div>
              <div class="flex-1">
                <div class="flex justify-between">
                  <div class="fw-semibold text-dark fs-7">Report Ready</div>
                  <div class="fs-8 text-muted flex items-center">
                    1h
                    <span
                      class="badge badge-sm badge-success rounded-full w-2 h-2 p-0 inline-block ml-1"
                    ></span>
                  </div>
                </div>
                <div class="fs-8 text-secondary">Monthly report is ready</div>
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
