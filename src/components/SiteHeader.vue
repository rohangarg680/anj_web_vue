<template>
  <header class="border-b border-white/10 bg-ink-900/80 backdrop-blur">
    <div class="container-grid flex items-center justify-between py-5">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-500 text-lg font-bold">
          A
        </div>
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Agency</p>
          <p class="text-lg font-semibold">ANJ Studio</p>
        </div>
      </div>
      <nav class="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex" aria-label="Primary">
        <a href="#services" class="transition hover:text-white">Services</a>
        <a href="#workflow" class="transition hover:text-white">Workflow</a>
        <a href="#metrics" class="transition hover:text-white">Results</a>
        <a href="#contact" class="transition hover:text-white">Contact</a>
      </nav>
      <div class="flex items-center gap-3">
        <button
          class="hidden rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:border-white/50 hover:text-white md:inline-flex"
        >
          Book a call
        </button>
        <button
          class="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 md:hidden"
          aria-label="Open navigation"
        >
          Menu
        </button>
      </div>
    </div>
  </header>
</template>
