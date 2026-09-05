<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Charts (Chart.js)' }}</h3></div>

  <div class="row">
    <!-- SECTION: BAR CHART -->
    <div class="col-12 col-lg-8 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">Monthly Revenue & Expenses (Bar Chart)</span>
        </div>
        <div class="card-body">
          <canvas id="modernBarChart"></canvas>
        </div>
      </div>
    </div>

    <!-- SECTION: DOUGHNUT CHART -->
    <div class="col-12 col-lg-4 mb-md">
      <div class="card card-shadow h-full">
        <div class="card-header">
          <span class="h6 mb-0">Traffic Sources (Doughnut)</span>
        </div>
        <div class="card-body flex items-center justify-center p-md">
          <div class="w-full max-w-[280px]">
            <canvas id="modernDoughnutChart"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION: LINE CHART -->
    <div class="col-12 mb-md">
      <div class="card card-shadow">
        <div class="card-header">
          <span class="h6 mb-0">User Activity Trend (Smooth Line Chart)</span>
        </div>
        <div class="card-body">
          <canvas id="modernLineChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Initialize Charts -->

</template>

<script setup>import { onMounted } from 'vue'
import { useHead } from '#imports'
useHead({ script: [{ src: '/assets/charts-demo.js', tagPosition: 'bodyClose' }] })

definePageMeta({
  layout: 'presensio'
})
</script>
