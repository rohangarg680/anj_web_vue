<template>
  <div class="relative min-h-screen overflow-hidden bg-[#080511] text-amber-50">
    <transition name="fade">
      <section
        v-if="!isOpened"
        class="invite-cover relative flex min-h-screen items-center justify-center"
        :style="coverBackgroundStyle"
      >
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="cover-envelope relative z-10 mx-4 flex w-full max-w-4xl flex-col items-center rounded-[3rem] border border-blue-100/50 bg-[#d7e4fb]/85 px-6 py-14 text-center text-[#0c3f85] shadow-2xl md:px-10">
          <p class="mt-3 font-serif text-5xl md:text-6xl">Rohan & Gunika</p>
          <p class="mt-4 text-xl tracking-[0.15em] text-[#0c3f85]/80">#RohanWedGunika</p>

          <button class="wax-seal mt-10" type="button" @click="isOpened = true">
            <span>Tap to Open</span>
          </button>
        </div>
      </section>
    </transition>

    <transition name="rise">
      <div v-if="isOpened" class="relative">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.2),transparent_60%)]"></div>

        <section class="container-grid relative py-14 md:py-20">
          <div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.2fr_1fr]">
            <div class="photo-panel">
              <img
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1100&q=80"
                alt="Bride and groom"
                class="h-full w-full object-cover"
              />
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7 text-center">
                <p class="font-serif text-5xl text-white">Rohan & Gunika</p>
                <p class="mt-2 text-lg tracking-[0.18em] text-amber-100">26 APRIL 2026</p>
                <p class="mt-2 text-xl text-amber-200">#RohanWedGunika</p>
              </div>
            </div>

            <div class="royal-card p-8 md:p-10">
              <p class="royal-kicker">A SPECIAL DAY AWAITS</p>
              <h2 class="mt-4 font-serif text-4xl text-amber-200">Two Hearts, One Journey</h2>
              <p class="mt-5 leading-relaxed text-amber-50/85">
                With the heartfelt blessings of our families, we invite you to join us in celebrating the joyous union.
              </p>
              <div class="mt-6 space-y-2 text-amber-100/85">
                <p><strong>Venue:</strong> Grand Palace Ballroom, New Delhi</p>
                <p><strong>Date:</strong> Sunday, 26 April 2026</p>
                <p><strong>Time:</strong> 7:30 PM onwards</p>
              </div>
            </div>
          </div>
        </section>

        <section class="container-grid relative pb-10 md:pb-14">
          <div class="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <article class="profile-card">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80" alt="Groom portrait" class="profile-image" />
              <h3 class="mt-5 text-center font-serif text-3xl text-[#1b3052]">Rohan Garg</h3>
              <p class="mt-2 text-center text-[#1b3052]/80">S/o Renu & Ramesh Garg</p>
            </article>

            <div class="text-center text-6xl text-amber-300">&</div>

            <article class="profile-card">
              <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80" alt="Bride portrait" class="profile-image" />
              <h3 class="mt-5 text-center font-serif text-3xl text-[#1b3052]">Gunika Gupta</h3>
              <p class="mt-2 text-center text-[#1b3052]/80">D/o Rashmi & Anay Gupta</p>
            </article>
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
