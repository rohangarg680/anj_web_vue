<template>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-ink-950/70 backdrop-blur">
    <div class="container-grid flex items-center justify-between py-4">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-full bg-accent-500 text-ink-950">
          <span class="text-xl font-bold">▶</span>
        </div>
      </div>
      <nav class="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex" aria-label="Primary">
        <a href="#work" class="transition hover:text-white">Work</a>
        <a href="#services" class="transition hover:text-white">Services</a>
        <a href="#testimonials" class="transition hover:text-white">Testimonials</a>
        <a href="#about" class="transition hover:text-white">Who we are</a>
      </nav>
      <div class="flex items-center gap-3">
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer"
          class="hidden rounded-full border border-accent-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-500 transition hover:bg-accent-500 hover:text-ink-950 md:inline-flex"
        >
          Send us an email
        </a>
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
