<template>
  <section class="section-spacing">
    <div class="container-grid grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-8">
        <p class="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Creative & Digital Studio</p>
        <h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Build distinctive digital experiences that feel effortless.
        </h1>
        <p class="max-w-xl text-base leading-relaxed text-white/70">
          We partner with ambitious teams to design, launch, and optimize digital products with a
          calm, refined, and measurable approach.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <BaseButton>Schedule a strategy call</BaseButton>
          <button
            class="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            View our work
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <div class="grid gap-6 sm:grid-cols-3">
          <div>
            <p class="text-2xl font-semibold">15+</p>
            <p class="text-xs uppercase tracking-[0.2em] text-white/60">Launches</p>
          </div>
          <div>
            <p class="text-2xl font-semibold">98%</p>
            <p class="text-xs uppercase tracking-[0.2em] text-white/60">Retention</p>
          </div>
          <div>
            <p class="text-2xl font-semibold">5 weeks</p>
            <p class="text-xs uppercase tracking-[0.2em] text-white/60">Avg. delivery</p>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="absolute -top-10 right-10 hidden h-32 w-32 rounded-full bg-accent-500/30 blur-3xl lg:block"></div>
        <div class="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-soft">
          <img
            :src="heroIllustration"
            alt="Abstract product visualization"
            class="w-full"
            loading="lazy"
          />
          <div class="mt-6 grid gap-4">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-sm font-semibold">Product strategy sprint</p>
              <p class="text-xs text-white/60">Discovery · Positioning · Roadmap</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-sm font-semibold">Design system refresh</p>
              <p class="text-xs text-white/60">Components · Tokens · Accessibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import heroIllustration from '../assets/hero-illustration.svg';
</script>
