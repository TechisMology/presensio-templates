<template>
<div class="content-canvas h-full flex flex-col">
  <div class="flex justify-between items-center mb-md">
    <div class="flex items-center gap-sm">
      <span class="material-symbols-outlined fs-2">storefront</span>
      <h2 class="h3 mb-0">POS - Retail Mode</h2>
    </div>
    <!-- Pending Orders Button -->
    <button class="btn btn-warning btn-shadow flex items-center gap-xs border-black text-black fw-bold" onclick="openModal('modalPending')">
      <span class="material-symbols-outlined">pending_actions</span>
      Pending Orders <span class="badge badge-sm badge-danger rounded-full px-2 ml-1">1</span>
    </button>
  </div>

  <div class="row flex-1">
    <!-- LEFT: Scanner / Product List -->
    <div class="col-12 col-lg-8 mb-md flex flex-col">
      <!-- Actions Bar (Card with no shadow) -->
      <div class="card border border-black mb-md bg-white">
        <div class="card-body p-sm flex gap-sm items-center">
          <button class="btn btn-primary btn-shadow border-black flex-1 py-3" onclick="openModal('modalScan')">
            <span class="material-symbols-outlined align-middle fs-4 mr-2">barcode_scanner</span>
            <span class="fw-bolder fs-6">Scan Barcode (F2)</span>
          </button>
          <div class="flex-1 relative">
            <span class="material-symbols-outlined absolute left-3 top-3 text-secondary">search</span>
            <input type="text" class="form-control border-black h-full pl-10" placeholder="Search product name or SKU... (F3)">
          </div>
        </div>
      </div>
      
      <!-- Scanned Items Table (Card with Shadow) -->
      <div class="card card-shadow flex-1 flex flex-col bg-white">
        <div class="card-header bg-gray-50 flex justify-between items-center border-b border-black">
          <span class="fw-bold h6 mb-0 text-uppercase">Scanned Items</span>
          <span class="badge badge-md badge-primary border-black">4 Items</span>
        </div>
        <div class="card-body p-0 flex-1 overflow-y-auto">
          <table class="table table-striped table-hover mb-0">
            <thead class="bg-gray-100 sticky top-0 border-b border-black z-10">
              <tr>
                <th class="w-16 text-center">#</th>
                <th>SKU</th>
                <th>Product Name</th>
                <th class="text-right">Price</th>
                <th class="text-center w-32">Qty</th>
                <th class="text-right">Subtotal</th>
                <th class="w-16"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center align-middle">1</td>
                <td class="align-middle fs-7 text-secondary">89999990001</td>
                <td class="fw-bold align-middle">Indomie Goreng Special</td>
                <td class="text-right align-middle">Rp 3.500</td>
                <td class="align-middle">
                  <div class="flex justify-center items-center gap-xs">
                    <button class="btn btn-sm btn-outline-dark px-2 py-0 border-black">-</button>
                    <span class="fw-bold mx-1 w-4 text-center">5</span>
                    <button class="btn btn-sm btn-outline-dark px-2 py-0 border-black">+</button>
                  </div>
                </td>
                <td class="text-right fw-bold text-success align-middle">Rp 17.500</td>
                <td class="text-center align-middle">
                  <button class="btn btn-sm btn-danger border-black px-2"><span class="material-symbols-outlined fs-6">delete</span></button>
                </td>
              </tr>
              <tr>
                <td class="text-center align-middle">2</td>
                <td class="align-middle fs-7 text-secondary">89999990002</td>
                <td class="fw-bold align-middle">Beras Maknyus 5kg</td>
                <td class="text-right align-middle">Rp 65.000</td>
                <td class="align-middle">
                  <div class="flex justify-center items-center gap-xs">
                    <button class="btn btn-sm btn-outline-dark px-2 py-0 border-black">-</button>
                    <span class="fw-bold mx-1 w-4 text-center">1</span>
                    <button class="btn btn-sm btn-outline-dark px-2 py-0 border-black">+</button>
                  </div>
                </td>
                <td class="text-right fw-bold text-success align-middle">Rp 65.000</td>
                <td class="text-center align-middle">
                  <button class="btn btn-sm btn-danger border-black px-2"><span class="material-symbols-outlined fs-6">delete</span></button>
                </td>
              </tr>
              <tr>
                <td class="text-center align-middle">3</td>
                <td class="align-middle fs-7 text-secondary">89999990003</td>
                <td class="fw-bold align-middle">Minyak Goreng Sunco 2L</td>
                <td class="text-right align-middle">Rp 35.000</td>
                <td class="align-middle">
                  <div class="flex justify-center items-center gap-xs">
                    <button class="btn btn-sm btn-outline-dark px-2 py-0 border-black">-</button>
                    <span class="fw-bold mx-1 w-4 text-center">2</span>
                    <button class="btn btn-sm btn-outline-dark px-2 py-0 border-black">+</button>
                  </div>
                </td>
                <td class="text-right fw-bold text-success align-middle">Rp 70.000</td>
                <td class="text-center align-middle">
                  <button class="btn btn-sm btn-danger border-black px-2"><span class="material-symbols-outlined fs-6">delete</span></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- RIGHT: Cart Summary Panel (Card with shadow) -->
    <div class="col-12 col-lg-4 flex flex-col h-[calc(100vh-140px)] sticky top-4">
      <div class="card card-shadow h-full flex flex-col bg-white">
        <!-- Header -->
        <div class="card-header bg-[#bbf7d0]">
          <span class="h6 mb-0 text-uppercase tracking-wider text-black fw-bolder">Payment Details</span>
          <button class="btn btn-sm btn-danger border-black">Void All</button>
        </div>
        
        <!-- Customer Info -->
        <div class="card-body p-md border-b border-dashed border-gray-300">
           <div class="flex justify-between items-center mb-xs">
              <span class="fs-7 fw-bold text-secondary">Customer</span>
              <button class="badge badge-sm bg-gray-200 text-black border border-black cursor-pointer">Select</button>
           </div>
           <div class="flex items-center gap-2">
              <span class="material-symbols-outlined">person</span>
              <span class="fw-bold">Walk-in Customer</span>
           </div>
        </div>

        <!-- Order Summary -->
        <div class="card-footer flex-1 bg-gray-50 p-md text-left flex flex-col justify-end gap-sm">
          <!-- Discount Input -->
          <div class="flex gap-sm mb-xs">
            <input type="text" class="form-control border-black" placeholder="Voucher Code">
            <button class="btn btn-dark btn-shadow">Apply</button>
          </div>
          
          <div class="flex justify-between items-center">
            <span class="fs-7 text-secondary">Subtotal (8 items)</span>
            <span class="fs-7 fw-bold text-black">Rp 152.500</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="fs-7 text-secondary">Tax (11%)</span>
            <span class="fs-7 fw-bold text-black">Rp 16.775</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="fs-7 fw-bold text-black">Discount</span>
            <span class="fs-7 fw-bold text-danger">- Rp 0</span>
          </div>
          <hr class="border-black border-dashed my-xs opacity-30">
          <div class="flex justify-between items-center mb-md">
            <span class="fs-6 fw-bold text-uppercase text-black">Total</span>
            <span class="display-5 fw-bolder text-primary">Rp 169.275</span>
          </div>
          
          <!-- Actions -->
          <div class="row mt-xs g-sm">
            <div class="col-6">
              <button class="btn btn-warning w-full btn-shadow text-black fw-bold border-black" onclick="alert('Order Saved to Pending!')">
                <span class="material-symbols-outlined align-middle fs-6 mr-1">pause_circle</span>
                Hold
              </button>
            </div>
            <div class="col-6">
              <button class="btn btn-info w-full btn-shadow text-black fw-bold border-black">
                <span class="material-symbols-outlined align-middle fs-6 mr-1">print</span>
                Nota
              </button>
            </div>
            <div class="col-12 mt-sm">
              <button class="btn btn-success w-full btn-shadow fs-5 py-3 fw-bolder text-white border-black flex items-center justify-center gap-2">
                <span class="material-symbols-outlined fs-3">point_of_sale</span>
                PAYMENT (F12)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal Scan Barcode -->
<div class="modal-backdrop modal-centered" id="modalScan">
  <div class="modal-dialog w-full max-w-md">
    <div class="modal-header bg-primary border-b border-black">
      <div class="flex items-center gap-xs">
        <span class="material-symbols-outlined text-white fs-4">barcode_scanner</span>
        <span class="modal-title text-white">Scan Barcode</span>
      </div>
      <button class="modal-close text-white hover:bg-white/10" data-modal-close="modalScan">
        &times;
      </button>
    </div>
    <div class="modal-body text-center py-xl">
      <div class="w-64 h-32 border-4 border-dashed border-primary mx-auto mb-md relative flex items-center justify-center">
         <div class="absolute w-full h-1 bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.8)] animate-pulse"></div>
         <span class="text-gray-400 opacity-50">Camera View Here</span>
      </div>
      <h6 class="fw-bold mb-xs">Awaiting Scan...</h6>
      <p class="fs-7 text-secondary">Please present the product barcode to the scanner.</p>
    </div>
    <div class="modal-footer border-t border-black bg-gray-50 flex justify-center">
      <button class="btn btn-dark btn-shadow border-black px-md" data-modal-close="modalScan">Cancel (Esc)</button>
    </div>
  </div>
</div>

<!-- Modal Pending Orders -->
<div class="modal-backdrop modal-centered" id="modalPending">
  <div class="modal-dialog w-full max-w-2xl">
    <div class="modal-header bg-warning border-b border-black">
      <div class="flex items-center gap-xs">
        <span class="material-symbols-outlined text-black fs-4">pending_actions</span>
        <span class="modal-title text-black">Pending Orders</span>
      </div>
      <button class="modal-close text-black hover:bg-black/10" data-modal-close="modalPending">
        &times;
      </button>
    </div>
    <div class="modal-body p-0">
      <table class="table table-striped table-hover mb-0">
        <thead class="bg-gray-100">
          <tr>
            <th class="border-b border-black">Order ID</th>
            <th class="border-b border-black">Customer</th>
            <th class="border-b border-black">Time</th>
            <th class="border-b border-black text-center">Items</th>
            <th class="border-b border-black text-right">Total</th>
            <th class="border-b border-black text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-black">
            <td class="fw-bold align-middle">#R-1004</td>
            <td class="align-middle">Ibu Siti</td>
            <td class="align-middle">09:30 AM</td>
            <td class="text-center align-middle">12 items</td>
            <td class="text-right fw-bolder text-success align-middle">Rp 340.500</td>
            <td class="text-center align-middle">
              <button class="btn btn-sm btn-primary border-black fw-bold" data-modal-close="modalPending">Load</button>
              <button class="btn btn-sm btn-danger border-black fw-bold ml-xs">Close</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-footer border-t border-black bg-gray-50">
      <button class="btn btn-dark btn-shadow border-black" data-modal-close="modalPending">Close Window</button>
    </div>
  </div>
</div>
</template>

<script setup>
definePageMeta({
  layout: 'presensio'
})
</script>
