<template>
  <div>
    <!-- =========== footer Section start =========== -->
    <footer class="bg-gray-100">
      <slot />

      <div class="container">
        <div class="grid xl:grid-cols-5 gap-6 py-12">
          <div class="xl:col-span-2">
            <NuxtLink to="/">
              <img src="~/assets/images/logo-dark.png" class="h-8" alt="logo" />
            </NuxtLink>
            <p class="text-gray-500/80 mt-5 lg:w-4/5">
              Make your web application stand out with high-quality landing page
            </p>
          </div>
          <div class="xl:col-span-3 col-span-4">
            <div class="flex flex-col sm:flex-row gap-6 flex-wrap justify-between">
              <div>
                <div class="flex flex-col gap-3">
                  <h5 class="mb-3 uppercase">Platform</h5>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Demo</a></div>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Pricing</a></div>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Integrations</a></div>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Status</a></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-3">
                  <h5 class="mb-3 uppercase">Knowledge Base</h5>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Blog</a></div>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Help Center</a></div>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Sales Tools catalog</a></div>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">API</a></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-3">
                  <h5 class="mb-3 uppercase">Company</h5>
                  <div class="text-gray-500/80"><nuxt-link href="/about">About us</nuxt-link></div>
                  <div class="text-gray-500/80"><nuxt-link href="/career">Career</nuxt-link></div>
                  <div class="text-gray-500/80"><nuxt-link href="/contact">Contact Us</nuxt-link></div>
                </div>
              </div>
              <div>
                <div class="flex flex-col gap-3">
                  <h5 class="mb-3 uppercase">Legal</h5>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Usage Policy</a></div>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Privacy Policy</a></div>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Terms of Service</a></div>
                  <div class="text-gray-500/80"><a href="javascript:void(0);">Trust</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t py-6">
          <div class="grid sm:grid-cols-2 text-center sm:text-start gap-6">
            <div>
              <p class="text-gray-500/80 text-sm">
                {{ new Date().getFullYear() }}© TripBox. All rights reserved. A concern of
                <a href="https://ackotrip.com" target="_blank" class="text-gray-800 hover:text-primary transition-all"
                  >AckoTrip Limited</a
                >
              </p>
            </div>
            <div class="flex justify-center sm:justify-end gap-7">
              <div>
                <a href="#">
                  <svg
                    class="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
              <div>
                <a href="#">
                  <svg
                    class="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a href="#">
                  <svg
                    class="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- =========== footer Section end =========== -->
  </div>
</template>

<script setup lang="ts">
//
</script>
