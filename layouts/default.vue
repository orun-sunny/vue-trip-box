<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>
<script setup lang="ts">
import Footer from '~/components/default-layout/footer.vue';
import Header from '~/components/default-layout/header.vue';

useHead({
  titleTemplate: '%s %separator %siteName',
  templateParams: {
    separator: '|',
    siteName: 'TripBox',
  },
});
</script>
