<template>
  <div class="site-shell min-h-screen overflow-x-hidden">
    <transition name="fade">
      <section
        v-if="!isOpened"
        class="hero-cover relative flex min-h-screen items-center justify-center px-6"
        :style="heroBackgroundStyle"
      >
        <div class="hero-overlay absolute inset-0"></div>
        <div class="petal-layer absolute inset-0" aria-hidden="true">
          <span v-for="petal in petals" :key="petal" class="petal"></span>
        </div>

        <div class="hero-content relative z-10 max-w-3xl text-center">
          <p class="hero-subtitle">Together With Their Families</p>
          <h1 class="hero-title mt-4">Rohan <span>&</span> Gunika</h1>
          <p class="hero-invite mt-4">Invite You To Celebrate Their Wedding</p>
          <p class="hero-hashtag mt-3">#RohanWedGunika</p>
          <button type="button" class="open-btn mt-9" @click="isOpened = true">Open Invitation</button>
        </div>
      </section>
    </transition>

    <transition name="rise">
      <main v-if="isOpened" class="pb-20">
        <section class="container-grid pt-14 md:pt-20">
          <div class="glass-card grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-10">
            <div class="rounded-[2rem] overflow-hidden border border-white/30">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80"
                alt="Bride and groom at royal fort"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="self-center">
              <p class="section-kicker">A Special Day Awaits</p>
              <h2 class="section-title mt-3">Two Hearts, One Journey</h2>
              <p class="mt-4 text-[#5f4f45]">
                With the heartfelt blessings of our families, we invite you to celebrate our union in love, laughter, and timeless tradition.
              </p>
              <div class="mt-6 space-y-2 text-[#5f4f45]">
                <p><strong>Date:</strong> 26 April 2026</p>
                <p><strong>Time:</strong> 7:30 PM onwards</p>
                <p><strong>Venue:</strong> The Heritage Fort Palace, Jaipur</p>
              </div>
            </div>
          </div>
        </section>

        <section class="container-grid section-spacing">
          <h3 class="section-title text-center">Couple Story</h3>
          <div class="mt-8 grid gap-6 md:grid-cols-2">
            <article class="info-card">
              <h4 class="font-serif text-3xl text-[#6f4a33]">Rohan Garg</h4>
              <p class="mt-2 text-[#5f4f45]">A gentle soul with a joyful heart, grounded in family values and big dreams.</p>
              <p class="mt-4 text-sm text-[#7a6a5f]">S/o Renu & Ramesh Garg</p>
            </article>
            <article class="info-card">
              <h4 class="font-serif text-3xl text-[#6f4a33]">Gunika Gupta</h4>
              <p class="mt-2 text-[#5f4f45]">Graceful, compassionate, and radiant — she brings warmth wherever she goes.</p>
              <p class="mt-4 text-sm text-[#7a6a5f]">D/o Rashmi & Anay Gupta</p>
            </article>
          </div>
        </section>

        <section class="container-grid section-spacing">
          <h3 class="section-title text-center">Wedding Events</h3>
          <div class="mt-8 grid gap-5 md:grid-cols-3">
            <article class="info-card">
              <p class="text-3xl">💛</p>
              <h4 class="mt-3 font-serif text-2xl text-[#6f4a33]">Haldi</h4>
              <p class="mt-1 text-[#5f4f45]">24 April 2026 · 11:00 AM</p>
            </article>
            <article class="info-card">
              <p class="text-3xl">🎶</p>
              <h4 class="mt-3 font-serif text-2xl text-[#6f4a33]">Sangeet</h4>
              <p class="mt-1 text-[#5f4f45]">25 April 2026 · 7:00 PM</p>
            </article>
            <article class="info-card">
              <p class="text-3xl">💍</p>
              <h4 class="mt-3 font-serif text-2xl text-[#6f4a33]">Wedding</h4>
              <p class="mt-1 text-[#5f4f45]">26 April 2026 · 7:30 PM</p>
            </article>
          </div>
        </section>

        <section class="container-grid section-spacing">
          <div class="glass-card p-6 md:p-10">
            <h3 class="section-title text-center">Venue</h3>
            <p class="mt-3 text-center text-[#5f4f45]">The Heritage Fort Palace, Jaipur, Rajasthan</p>
            <div class="mt-6 overflow-hidden rounded-3xl border border-[#d9b38c]/60">
              <iframe
                title="Venue map"
                class="h-72 w-full"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Jaipur%20City%20Palace&output=embed"
              ></iframe>
            </div>
          </div>
        </section>

        <section class="container-grid section-spacing">
          <h3 class="section-title text-center">Gallery</h3>
          <div class="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <img class="gallery-img" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" alt="Wedding moment 1" />
            <img class="gallery-img" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80" alt="Wedding moment 2" />
            <img class="gallery-img" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80" alt="Wedding moment 3" />
          </div>
        </section>

        <section class="container-grid section-spacing">
          <div class="glass-card p-8 text-center md:p-12">
            <h3 class="section-title">RSVP</h3>
            <p class="mt-3 text-[#5f4f45]">Kindly confirm your presence by 10 April 2026.</p>
            <p class="mt-2 text-[#6f4a33]">+91 98765 43210 · +91 98765 43211</p>
          </div>
        </section>
      </main>
    </transition>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const isOpened = ref(false);
const petals = Array.from({ length: 14 }, (_, index) => index + 1);

const heroBackgroundStyle = computed(() => ({
  backgroundImage:
    "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1800&q=80')"
}));
</script>
