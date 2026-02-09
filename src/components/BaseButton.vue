<template>
  <button
    :type="type"
    class="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  }
});
</script>
