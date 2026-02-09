<template>
  <section id="services" class="section-spacing">
    <div class="container-grid">
      <div class="text-center">
        <span class="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs text-white/70">
          Our Core Services
        </span>
        <h2 class="mt-6 text-3xl font-semibold text-white sm:text-4xl">
          <span class="text-white/60">What We</span> Do
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-sm text-white/60">
          We create and manage high-impact social media ecosystems designed to support real business goals.
        </p>
      </div>
      <div class="mt-12 grid gap-4 md:grid-cols-2">
        <div
          v-for="service in services"
          :key="service.label"
          class="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/80"
          :class="service.highlight ? 'border-accent-500/60 bg-accent-500/10 text-white' : ''"
        >
          <span>{{ service.label }}</span>
          <span class="text-white/40">✕</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { label: 'Social Media Strategy & Positioning' },
  { label: 'Content Planning & Monthly Calendars' },
  { label: 'Reels & Short-Form Video Strategy' },
  { label: 'Personal Brand Growth & Authority Building', highlight: true },
  { label: 'Business Account Management' },
  { label: 'Campaigns, Launches & Promotions' },
  { label: 'Community Engagement & Growth' },
  { label: 'Performance Tracking & Optimization' }
];
</script>
