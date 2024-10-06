<template>
  <header class="bg-blue-500 text-white">
    <div class="container mx-auto flex justify-between items-center py-4">
      <div>
        <nuxt-link to="/" class="text-xl font-bold">My App</nuxt-link>
      </div>
      <nav>
        <nuxt-link to="/" class="mr-4">Home</nuxt-link>
        <nuxt-link to="/about" class="mr-4">About</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </nav>
    </div>
  </header>
</template>
