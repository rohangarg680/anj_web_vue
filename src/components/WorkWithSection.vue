<template>
  <section id="work" class="section-spacing">
    <div class="container-grid">
      <div class="text-center">
        <span class="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs text-white/70">
          Our Core Services
        </span>
        <h2 class="mt-6 text-3xl font-semibold text-white sm:text-4xl">
          <span class="text-white/60">Who We</span> Work With
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm text-white/60">
          We create and manage high-impact social media ecosystems designed to support real business goals.
        </p>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <article v-for="card in cards" :key="card.name" class="group rounded-[28px] border border-white/10 bg-white/5 p-4">
          <img :src="card.thumb" :alt="card.name" class="h-72 w-full rounded-2xl object-cover" loading="lazy" />
          <div class="mt-4 flex items-center justify-between gap-3 rounded-full border border-white/10 bg-ink-900/60 px-4 py-2">
            <div class="flex items-center gap-2 text-xs text-white">
              <span class="flex h-6 w-6 items-center justify-center rounded-full border border-accent-500 text-accent-500">●</span>
              {{ card.name }}
            </div>
            <span class="text-[10px] text-white/60">{{ card.views }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import thumbOne from '../assets/thumb-1.svg';
import thumbTwo from '../assets/thumb-2.svg';
import thumbThree from '../assets/thumb-3.svg';
import thumbFour from '../assets/thumb-4.svg';

const cards = [
  { name: 'Sagnik Ghosh', views: '2M+ Views in 4 post', thumb: thumbOne },
  { name: 'Sagnik Ghosh', views: '2M+ Views in 4 post', thumb: thumbTwo },
  { name: 'Sagnik Ghosh', views: '2M+ Views in 4 post', thumb: thumbThree },
  { name: 'Sagnik Ghosh', views: '2M+ Views in 4 post', thumb: thumbFour }
];
</script>
