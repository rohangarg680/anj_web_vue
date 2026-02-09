<template>
  <section class="section-spacing">
    <div class="container-grid grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div class="space-y-5">
        <span class="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs text-white/70">
          Our Core Services
        </span>
        <h2 class="text-3xl font-semibold text-white sm:text-4xl">
          <span class="text-white/60">Looking For A One Time</span> Strategy Call Instead?
        </h2>
        <p class="max-w-xl text-sm text-white/60">
          We create and manage high-impact social media ecosystems designed to support real business goals.
        </p>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-accent-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-500 transition hover:bg-accent-500 hover:text-ink-950"
        >
          Book a discovery call
        </a>
      </div>
      <div class="relative">
        <div class="absolute right-6 top-6 h-64 w-64 rounded-full bg-accent-500/80 blur-3xl"></div>
        <div class="relative z-10 flex justify-center">
          <img :src="person" alt="Strategy lead" class="w-72 rounded-[36px] border border-white/10" loading="lazy" />
        </div>
        <div class="absolute left-4 top-16 rounded-2xl border border-white/10 bg-ink-900/80 px-4 py-3 text-xs text-white/70">
          <p class="text-sm font-semibold text-white">120+</p>
          Total Projects
        </div>
        <div class="absolute right-2 top-40 rounded-2xl border border-white/10 bg-ink-900/80 px-4 py-3 text-xs text-white/70">
          <p class="text-sm font-semibold text-white">150+</p>
          Total Client calls
        </div>
        <div class="absolute left-10 bottom-10 rounded-2xl border border-white/10 bg-ink-900/80 px-4 py-3 text-xs text-white/70">
          <p class="text-sm font-semibold text-white">150+</p>
          Total Client calls
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import person from '../assets/person-placeholder.svg';
</script>
