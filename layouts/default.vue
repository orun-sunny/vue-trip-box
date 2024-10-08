<template>
  <NavBar />
  <NuxtPage />
  <Footer />
</template>
<script setup lang="ts">
import Footer from '~/components/default-layout/footer.vue';
import NavBar from '~/components/default-layout/nav-bar.vue';

useHead({
  titleTemplate: '%s %separator %siteName',
  templateParams: {
    separator: '|',
    siteName: 'TripBox',
  },
});
</script>
