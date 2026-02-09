<template>
  <section id="testimonials" class="section-spacing">
    <div class="container-grid">
      <div class="text-center">
        <span class="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs text-white/70">
          Our Core Services
        </span>
        <h2 class="mt-6 text-3xl font-semibold text-white sm:text-4xl">
          <span class="text-white/60">What our clients say</span> Testimonials
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm text-white/60">
          Watch highlights from the teams we have partnered with to accelerate social growth.
        </p>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="video in videos"
          :key="video.title"
          :href="video.link"
          target="_blank"
          rel="noreferrer"
          class="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
        >
          <img :src="video.thumb" :alt="video.title" class="h-64 w-full object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
          <div class="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-accent-500 text-accent-500">
            ▶
          </div>
          <div class="absolute bottom-5 left-5">
            <p class="text-sm font-semibold text-white">{{ video.title }}</p>
            <p class="text-xs text-white/60">{{ video.subtitle }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import thumbOne from '../assets/thumb-1.svg';
import thumbTwo from '../assets/thumb-2.svg';
import thumbThree from '../assets/thumb-3.svg';

const videos = [
  {
    title: 'Launch Storytelling',
    subtitle: 'Client testimonial spotlight',
    link: 'https://www.youtube.com',
    thumb: thumbOne
  },
  {
    title: 'Growth Strategy Recap',
    subtitle: 'Organic + paid blend',
    link: 'https://www.youtube.com',
    thumb: thumbTwo
  },
  {
    title: 'Creator Collab',
    subtitle: 'Reels performance',
    link: 'https://www.youtube.com',
    thumb: thumbThree
  }
];
</script>
