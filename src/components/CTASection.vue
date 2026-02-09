<template>
  <section id="contact" class="section-spacing">
    <div class="container-grid">
      <div class="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-accent-500/30 via-ink-900 to-ink-900 p-10 md:p-16">
        <div class="absolute -right-16 -top-24 h-56 w-56 rounded-full bg-accent-500/30 blur-3xl"></div>
        <div class="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div class="space-y-4">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Next steps</p>
            <h2 class="text-3xl font-semibold sm:text-4xl">Ready to shape your next release?</h2>
            <p class="text-sm text-white/70">
              Tell us about the product you are building and we will respond within two business
              days with next steps.
            </p>
          </div>
          <form class="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <label class="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" for="email">
              Work email
            </label>
            <input
              id="email"
              type="email"
              placeholder="hello@company.com"
              class="w-full rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-400"
            />
            <label class="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" for="details">
              Project details
            </label>
            <textarea
              id="details"
              rows="3"
              placeholder="Share timeline, goals, and links"
              class="w-full rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-400"
            ></textarea>
            <button
              type="submit"
              class="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-900"
            >
              Submit inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
