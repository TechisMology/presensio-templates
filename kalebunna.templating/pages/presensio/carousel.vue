<template>
<div class="content-canvas">
  <div class="mb-md"><h3 class="font-bold text-xl">{{ 'Carousel Components' }}</h3></div>

  <div class="row">
    <!-- Slides Only -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Slides Only</span></div>
        <div class="card-body">
          <div class="carousel">
            <div class="carousel-inner h-64 bg-gray-200">
              <div class="carousel-item active h-full bg-blue-500 flex justify-center items-center text-white h1">Slide 1</div>
              <div class="carousel-item h-full bg-green-500 flex justify-center items-center text-white h1">Slide 2</div>
              <div class="carousel-item h-full bg-red-500 flex justify-center items-center text-white h1">Slide 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- With Controls -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">With Controls</span></div>
        <div class="card-body">
          <div class="carousel">
            <div class="carousel-inner h-64 bg-gray-200">
              <div class="carousel-item active h-full bg-blue-600 flex justify-center items-center text-white h1">Slide 1</div>
              <div class="carousel-item h-full bg-green-600 flex justify-center items-center text-white h1">Slide 2</div>
            </div>
            <button class="carousel-control-prev" data-carousel-slide="prev">
              <span class="carousel-control-icon carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" data-carousel-slide="next">
              <span class="carousel-control-icon carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- With Captions & Indicators -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">With Indicators & Captions</span></div>
        <div class="card-body">
          <div class="carousel">
            <div class="carousel-indicators">
              <button data-carousel-target="0" class="active"></button>
              <button data-carousel-target="1"></button>
            </div>
            <div class="carousel-inner h-64 bg-gray-200">
              <div class="carousel-item active h-full bg-indigo-500">
                <div class="flex justify-center items-center h-full text-white h1">Slide 1</div>
                <div class="carousel-caption">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item h-full bg-purple-500">
                <div class="flex justify-center items-center h-full text-white h1">Slide 2</div>
                <div class="carousel-caption">
                  <h5>Second slide label</h5>
                  <p>Some placeholder content for the second slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" data-carousel-slide="prev">
              <span class="carousel-control-icon carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" data-carousel-slide="next">
              <span class="carousel-control-icon carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Crossfade Transition -->
    <div class="col-12 col-md-6 mb-md">
      <div class="card card-shadow">
        <div class="card-header"><span class="h6 mb-0">Crossfade Transition</span></div>
        <div class="card-body">
          <div class="carousel carousel-fade">
            <div class="carousel-inner h-64 bg-gray-200">
              <div class="carousel-item active h-full bg-orange-500 flex justify-center items-center text-white h1">Fade 1</div>
              <div class="carousel-item h-full bg-teal-500 flex justify-center items-center text-white h1">Fade 2</div>
            </div>
            <button class="carousel-control-prev" data-carousel-slide="prev">
              <span class="carousel-control-icon carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" data-carousel-slide="next">
              <span class="carousel-control-icon carousel-control-next-icon"></span>
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
