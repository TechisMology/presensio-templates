<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Accordion Components' }}</h3></div>

  <div class="row">
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Basic Accordion</span></div>
        <div class="card-body">
          <div class="accordion" id="accordionBasic">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" data-collapse-toggle="#collapseOne" data-parent="#accordionBasic">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse show">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-collapse-toggle="#collapseTwo" data-parent="#accordionBasic">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Flush Accordion</span></div>
        <div class="card-body">
          <div class="accordion accordion-flush" id="accordionFlush">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-collapse-toggle="#flushOne" data-parent="#accordionFlush">
                  Flush Item #1
                </button>
              </h2>
              <div id="flushOne" class="accordion-collapse">
                <div class="accordion-body">
                  Edge-to-edge flush accordion without rounded borders.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-collapse-toggle="#flushTwo" data-parent="#accordionFlush">
                  Flush Item #2
                </button>
              </h2>
              <div id="flushTwo" class="accordion-collapse">
                <div class="accordion-body">
                  Another item.
                </div>
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
