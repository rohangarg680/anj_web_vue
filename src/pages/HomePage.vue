<template>
  <div class="relative min-h-screen overflow-hidden bg-[#080511] text-amber-50">
    <transition name="fade">
      <section
        v-if="!isOpened"
        class="invite-cover relative flex min-h-screen items-center justify-center"
        :style="coverBackgroundStyle"
      >
        <div class="absolute inset-0 bg-black/45"></div>
        <div class="cover-envelope relative z-10 mx-4 flex w-full max-w-4xl flex-col items-center rounded-[3rem] border border-blue-100/50 bg-[#d7e4fb]/85 px-6 py-14 text-center text-[#0c3f85] shadow-2xl md:px-10">
          <div class="h-20 w-20 rounded-full border-2 border-[#0c3f85]/50"></div>
          <p class="mt-5 text-4xl">💍</p>
          <h1 class="mt-3 font-serif text-4xl md:text-5xl">A Special Day Awaits</h1>
          <p class="mt-4 text-lg text-[#0c3f85]/80">You are warmly invited to celebrate the royal wedding.</p>

          <button class="wax-seal mt-10" type="button" @click="isOpened = true">
            <span>Tap to Open</span>
          </button>

          <p class="mt-16 text-lg italic text-[#0c3f85]/85">An Invite Crafted By Aamantran</p>
        </div>
      </section>
    </transition>

    <transition name="rise">
      <div v-if="isOpened" class="relative">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.2),transparent_60%)]"></div>

        <section class="container-grid relative py-24 text-center md:py-32">
          <p class="mb-4 tracking-[0.4em] text-amber-200/80">ROYAL WEDDING INVITATION</p>
          <h2 class="font-serif text-5xl text-amber-300 md:text-7xl">Aarav <span class="text-amber-100">&</span> Siya</h2>
          <p class="mx-auto mt-6 max-w-2xl text-lg text-amber-100/90 md:text-xl">
            With grace and joy, we invite you to celebrate the sacred union of our hearts in a timeless evening of love, blessings, and royal elegance.
          </p>

          <div class="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <div class="royal-stat"><span>18</span><small>Days</small></div>
            <div class="royal-stat"><span>08</span><small>Hours</small></div>
            <div class="royal-stat"><span>44</span><small>Minutes</small></div>
            <div class="royal-stat"><span>12</span><small>Seconds</small></div>
          </div>

          <div class="mt-12 inline-flex flex-col gap-1 rounded-full border border-amber-300/40 bg-amber-100/5 px-8 py-4 text-sm tracking-[0.25em] text-amber-100 md:text-base">
            <span>SUNDAY, 21 JUNE 2026</span>
            <span>AT 7:30 PM ONWARDS</span>
          </div>
        </section>

        <section class="container-grid relative section-spacing">
          <div class="royal-card grid gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <p class="royal-kicker">THE CEREMONY</p>
              <h3 class="mt-3 font-serif text-3xl text-amber-200 md:text-4xl">Grand Palace Ballroom</h3>
              <p class="mt-4 leading-relaxed text-amber-50/85">
                The Imperial Grand Palace,<br />
                Rajpath Avenue, New Delhi, India.
              </p>
              <p class="mt-6 text-amber-100/80">Join us for the varmala, wedding rituals, dinner, and musical celebration.</p>
            </div>
            <div class="rounded-3xl border border-amber-200/30 bg-[#140d24] p-6">
              <p class="royal-kicker">EVENT TIMELINE</p>
              <ul class="mt-4 space-y-4 text-amber-50/90">
                <li><strong class="text-amber-300">7:30 PM</strong> - Guest Welcome & Mocktails</li>
                <li><strong class="text-amber-300">8:15 PM</strong> - Varmala Ceremony</li>
                <li><strong class="text-amber-300">9:00 PM</strong> - Sacred Wedding Rituals</li>
                <li><strong class="text-amber-300">10:30 PM</strong> - Royal Dinner & Blessings</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="container-grid relative pb-24">
          <div class="grid gap-6 md:grid-cols-3">
            <article class="royal-card p-7">
              <p class="royal-kicker">DRESS CODE</p>
              <h4 class="mt-3 font-serif text-2xl text-amber-200">Regal Elegance</h4>
              <p class="mt-3 text-amber-50/85">Indian traditional / Indo-western attire in jewel or pastel tones.</p>
            </article>
            <article class="royal-card p-7">
              <p class="royal-kicker">BLESSINGS</p>
              <h4 class="mt-3 font-serif text-2xl text-amber-200">With Your Presence</h4>
              <p class="mt-3 text-amber-50/85">Your graceful presence and heartfelt blessings are the greatest gift for us.</p>
            </article>
            <article class="royal-card p-7">
              <p class="royal-kicker">RSVP</p>
              <h4 class="mt-3 font-serif text-2xl text-amber-200">Kindly Confirm</h4>
              <p class="mt-3 text-amber-50/85">Please RSVP by 10 June 2026</p>
              <p class="mt-2 text-amber-300">+1 (555) 123-4567</p>
            </article>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const isOpened = ref(false);

const coverBackgroundStyle = computed(() => ({
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://upload.wikimedia.org/wikipedia/commons/c/cb/Maharaja_Hari_Singh_Palace%2C_Gulmarg_01.jpg')"
}));
</script>
