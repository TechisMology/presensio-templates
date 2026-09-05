<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Collapse Components' }}</h3></div>

  <div class="row">
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Basic Collapse</span></div>
        <div class="card-body">
          <p class="fs-7 text-secondary mb-sm">Click the button to toggle the visibility of the content below.</p>
          <button class="btn btn-primary" data-collapse-toggle="#collapseExample">
            Toggle Element
          </button>
          
          <div class="collapse mt-sm" id="collapseExample">
            <div class="card card-shadow card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
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
