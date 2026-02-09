<template>
  <section class="section-spacing">
    <div class="container-grid">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div
          v-for="brand in brands"
          :key="brand"
          class="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
        >
          {{ brand }}
        </div>
      </div>
      <div class="mt-14">
        <span class="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs text-white/70">
          Our Core Services
        </span>
        <h2 class="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          <span class="text-white/60">Our</span> Framework
        </h2>
        <p class="mt-3 max-w-2xl text-sm text-white/60">
          We create and manage high-impact social media ecosystems designed to support real business goals.
        </p>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <article v-for="card in framework" :key="card.title" class="glass-panel p-6">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-semibold text-accent-500">{{ card.title }}</h3>
            <span class="text-4xl font-light text-white/10">{{ card.step }}</span>
          </div>
          <ul class="mt-4 space-y-2 text-sm text-white/60">
            <li v-for="item in card.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = ['Startup', 'Startup', 'Startup', 'Startup', 'Startup'];
const framework = [
  {
    title: 'Create',
    step: '01',
    items: [
      'Brand voice & content pillars',
      'Visual direction & storytelling frameworks',
      'Platform-specific content strategies'
    ]
  },
  {
    title: 'Connect',
    step: '02',
    items: [
      'Audience psychology & positioning',
      'Relatable, value-driven storytelling',
      'Engagement-focused content'
    ]
  },
  {
    title: 'Convert',
    step: '03',
    items: [
      'Funnel-based content planning',
      'CTA & DM strategies',
      'Offer positioning & lead optimization'
    ]
  }
];
</script>
