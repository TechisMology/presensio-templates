<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Form Components' }}</h3></div>

  <div class="row">
    <!-- 1. Text Inputs -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Text Inputs</span></div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Standard text inputs with label, required asterisk, focus effects,
            and error state.
          </p>

          <div class="form-group">
            <label class="form-label required" for="input-name"
              >Full Name</label
            >
            <input
              type="text"
              id="input-name"
              class="form-control"
              placeholder="e.g. John Doe"
            />
          </div>

          <div class="form-group">
            <label class="form-label required" for="input-email"
              >Email Address</label
            >
            <input
              type="email"
              id="input-email"
              class="form-control is-invalid"
              value="bad-email"
              placeholder="e.g. user@school.id"
            />
            <span class="invalid-feedback"
              >Please enter a valid email address.</span
            >
          </div>

          <div class="form-group">
            <label class="form-label" for="input-phone">Phone Number</label>
            <input
              type="tel"
              id="input-phone"
              class="form-control"
              placeholder="e.g. +62 812 3456 7890"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="input-password">Password</label>
            <input
              type="password"
              id="input-password"
              class="form-control"
              placeholder="Minimum 8 characters"
            />
          </div>

          <div class="form-group mb-0">
            <label class="form-label" for="input-disabled"
              >Disabled Input</label
            >
            <input
              type="text"
              id="input-disabled"
              class="form-control"
              value="Cannot edit this"
              disabled
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Input Sizing -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Input Sizing</span></div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Small, default, and large input field sizes.
          </p>

          <div class="form-group">
            <label class="form-label" for="input-sm">Small Input</label>
            <input
              type="text"
              id="input-sm"
              class="form-control form-control-sm"
              placeholder="Small field..."
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="input-md">Default Input</label>
            <input
              type="text"
              id="input-md"
              class="form-control"
              placeholder="Default field..."
            />
          </div>

          <div class="form-group mb-0">
            <label class="form-label" for="input-lg">Large Input</label>
            <input
              type="text"
              id="input-lg"
              class="form-control form-control-lg"
              placeholder="Large field..."
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 2.5 Input Groups -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow h-full">
        <div class="card-header"><span class="h6 mb-0">Input Groups</span></div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Extend form controls by adding text, buttons, or icons on either
            side.
          </p>

          <div class="form-group">
            <label class="form-label" for="ig-username">Username</label>
            <div class="input-group">
              <span class="input-group-text">@</span>
              <input
                type="text"
                class="form-control"
                id="ig-username"
                placeholder="Username"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="ig-email">Email Address</label>
            <div class="input-group">
              <span class="input-group-text px-sm text-muted">
                <i class="icon-mail"></i>
              </span>
              <input
                type="email"
                class="form-control"
                id="ig-email"
                placeholder="email@kemenag.go.id"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="ig-url">Vanity URL / Web</label>
            <div class="input-group">
              <span class="input-group-text px-sm text-muted">
                <i class="icon-globe"></i>
              </span>
              <span
                class="input-group-text bg-white border-l-0 border-r-0 px-xs"
                >https://</span
              >
              <input
                type="text"
                class="form-control"
                id="ig-url"
                placeholder="kemenag.go.id"
              />
            </div>
          </div>

          <div class="form-group mb-0">
            <label class="form-label" for="ig-search">Search with Button</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="ig-search"
                placeholder="Search data..."
              />
              <button class="btn btn-primary m-0 rounded-l-none" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Date, Time, and Number Inputs -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Date, Time & Number</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Specialized inputs for dates, times, months, weeks, and numbers.
          </p>

          <div class="form-group">
            <label class="form-label required" for="input-date">Date</label>
            <input type="date" id="input-date" class="form-control" />
          </div>

          <div class="form-group">
            <label class="form-label required" for="input-time">Time</label>
            <input type="time" id="input-time" class="form-control" />
          </div>

          <div class="form-group">
            <label class="form-label" for="input-datetime"
              >Date & Time (Local)</label
            >
            <input
              type="datetime-local"
              id="input-datetime"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="input-month">Month</label>
            <input type="month" id="input-month" class="form-control" />
          </div>

          <div class="form-group">
            <label class="form-label" for="input-week">Week</label>
            <input type="week" id="input-week" class="form-control" />
          </div>

          <div class="form-group mb-0">
            <label class="form-label" for="input-number">Number</label>
            <input
              type="number"
              id="input-number"
              class="form-control"
              min="0"
              max="100"
              placeholder="e.g. 45"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 4. Select, Textarea & Range -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Select, Textarea & Range</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Select dropdowns, multi-select, textarea, and range sliders.
          </p>

          <div class="form-group">
            <label class="form-label required" for="select-role">Role</label>
            <select id="select-role" class="form-control">
              <option value="">-- Select a role --</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="select-invalid"
              >Invalid Select</label
            >
            <select id="select-invalid" class="form-control is-invalid">
              <option value="">-- Nothing selected --</option>
            </select>
            <span class="invalid-feedback">Please select a valid option.</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="textarea-notes"
              >Notes / Description</label
            >
            <textarea
              id="textarea-notes"
              class="form-control"
              rows="3"
              placeholder="Enter detailed notes here..."
            ></textarea>
          </div>

          <div class="form-group mb-0">
            <label class="form-label" for="input-range">Range Slider</label>
            <input
              type="range"
              id="input-range"
              class="w-full accent-primary cursor-pointer"
              min="0"
              max="100"
              value="50"
            />
            <div class="flex justify-between text-muted fs-7 mt-xs">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4.5 Advanced Select (Select2) -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Advanced Select (Select2)</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Rich select dropdowns with search, tagging, and multiple selection
            using Select2.
          </p>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-group mb-0">
                <label class="form-label" for="select2-single"
                  >Single Select with Search</label
                >
                <select
                  id="select2-single"
                  class="form-control select2-init"
                  style="width: 100%"
                >
                  <option value="">Select a province...</option>
                  <option value="dki">DKI Jakarta</option>
                  <option value="jabar">Jawa Barat</option>
                  <option value="jateng">Jawa Tengah</option>
                  <option value="jatim">Jawa Timur</option>
                  <option value="diy">DI Yogyakarta</option>
                  <option value="banten">Banten</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-6 mt-md mt-md-0">
              <div class="form-group mb-0">
                <label class="form-label" for="select2-multiple"
                  >Multiple Select</label
                >
                <select
                  id="select2-multiple"
                  class="form-control select2-init"
                  multiple="multiple"
                  style="width: 100%"
                >
                  <option value="math">Mathematics</option>
                  <option value="science" selected>Science</option>
                  <option value="history" selected>History</option>
                  <option value="english">English</option>
                  <option value="geography">Geography</option>
                  <option value="art">Art</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. Checkboxes & Radios -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Checkboxes & Radios</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            Custom styled checkbox and radio input components.
          </p>

          <p class="fs-7 fw-bold text-muted text-uppercase tracking-wide mb-xs">
            Checkboxes
          </p>
          <div class="form-check">
            <input
              type="checkbox"
              id="chk-admin"
              class="form-check-input"
              checked
            />
            <label for="chk-admin" class="form-check-label">Admin Access</label>
          </div>
          <div class="form-check">
            <input type="checkbox" id="chk-notify" class="form-check-input" />
            <label for="chk-notify" class="form-check-label"
              >Enable Email Notifications</label
            >
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              id="chk-err"
              class="form-check-input is-invalid"
            />
            <label for="chk-err" class="form-check-label text-error"
              >Accept Terms (Required)</label
            >
          </div>

          <hr class="border-gray-200 my-sm" />

          <p class="fs-7 fw-bold text-muted text-uppercase tracking-wide mb-xs">
            Radio Buttons
          </p>
          <div class="form-check">
            <input
              type="radio"
              name="gender"
              id="radio-male"
              class="form-check-input"
              value="male"
              checked
            />
            <label for="radio-male" class="form-check-label">Male</label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              name="gender"
              id="radio-female"
              class="form-check-input"
              value="female"
            />
            <label for="radio-female" class="form-check-label">Female</label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              name="gender"
              id="radio-other"
              class="form-check-input"
              value="other"
            />
            <label for="radio-other" class="form-check-label">Other</label>
          </div>
        </div>
      </div>
    </div>

    <!-- 6. File Upload -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">File Upload & Color</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">
            File input and drag-and-drop file area, plus color picker.
          </p>

          <div class="form-group">
            <label class="form-label required" for="input-file"
              >Upload Document</label
            >
            <input
              type="file"
              id="input-file"
              class="form-control"
              accept=".pdf,.docx,.xlsx"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="drop-zone">Drag & Drop Area</label>
            <div
              class="form-file-drop"
              id="drop-zone"
              onclick="document.getElementById('hidden-file').click()"
            >
              <span
                class="material-symbols-outlined text-gray-400"
                style="font-size: 32px"
                >cloud_upload</span
              >
              <span class="fs-7 fw-bold text-gray-500"
                >Click or drag files here to upload</span
              >
              <span class="fs-7 text-muted"
                >Supports: PDF, DOCX, PNG, JPG (max 5MB)</span
              >
              <input type="file" id="hidden-file" class="hidden" multiple />
            </div>
          </div>

          <div class="form-group mb-0">
            <label class="form-label" for="input-color"
              >Brand / Theme Color</label
            >
            <div class="flex items-center gap-sm">
              <input
                type="color"
                id="input-color"
                class="form-control"
                value="#004ac6"
                style="padding: 2px; height: 36px; cursor: pointer"
              />
              <span class="fs-7 text-secondary">Click to pick a color</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7. Complete Form Example -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Sample: Teacher Attendance Form</span>
        </div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-md">
            Full example form using all field types. Fields marked with
            <span class="text-error fw-bold">*</span> are required.
          </p>

          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="form-label required" for="ex-fullname"
                  >Full Name</label
                >
                <input
                  type="text"
                  id="ex-fullname"
                  class="form-control"
                  placeholder="Enter full name"
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="form-label required" for="ex-nip"
                  >NIP / Employee ID</label
                >
                <input
                  type="text"
                  id="ex-nip"
                  class="form-control is-invalid"
                  placeholder="e.g. 19800101 200312 1 001"
                />
                <span class="invalid-feedback"
                  >NIP is required and must be a valid format.</span
                >
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="form-group">
                <label class="form-label required" for="ex-class">Class</label>
                <select id="ex-class" class="form-control">
                  <option value="">-- Select --</option>
                  <option>X-IPA-1</option>
                  <option>XI-IPA-2</option>
                  <option>XII-IPS-3</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="form-group">
                <label class="form-label required" for="ex-date">Date</label>
                <input type="date" id="ex-date" class="form-control" />
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="form-group">
                <label class="form-label required" for="ex-time">Time</label>
                <input type="time" id="ex-time" class="form-control" />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="form-label required" for="ex-status"
                  >Attendance Status</label
                >
                <div class="flex gap-md">
                  <div class="form-check">
                    <input
                      type="radio"
                      name="ex-status"
                      id="ex-hadir"
                      class="form-check-input"
                      value="hadir"
                      checked
                    />
                    <label for="ex-hadir" class="form-check-label">Hadir</label>
                  </div>
                  <div class="form-check">
                    <input
                      type="radio"
                      name="ex-status"
                      id="ex-izin"
                      class="form-check-input"
                      value="izin"
                    />
                    <label for="ex-izin" class="form-check-label">Izin</label>
                  </div>
                  <div class="form-check">
                    <input
                      type="radio"
                      name="ex-status"
                      id="ex-sakit"
                      class="form-check-input"
                      value="sakit"
                    />
                    <label for="ex-sakit" class="form-check-label">Sakit</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="form-label" for="ex-notes">Notes</label>
                <input
                  type="text"
                  id="ex-notes"
                  class="form-control"
                  placeholder="Optional attendance notes..."
                />
              </div>
            </div>
          </div>

          <div class="flex gap-xs">
            <button class="btn btn-md btn-primary btn-shadow">
              <span class="material-symbols-outlined fs-6">save</span>
              Save Record
            </button>
            <button class="btn btn-md btn-light btn-shadow">
              <span class="material-symbols-outlined fs-6">clear</span>
              Reset
            </button>
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
