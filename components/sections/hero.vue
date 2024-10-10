  <template>
  <div>
    <!-- =========== Hero Section Start =========== -->
    <section class="bg-gradient-to-t from-slate-500/10 relative">
      <section class="relative pt-44 pb-36">
        <div class="container">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            <div class="order-2 lg:order-1">
              <div class="text-center sm:text-start">
                <h1 class="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                  The best way to
                  <span
                    class="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0"
                    >showcase</span
                  >
                  your saas
                </h1>
                <p class="sm:text-lg text-gray-500">
                  Make your saas application stand out with high-quality landing page designed and developed by
                  professional
                </p>
                <div class="flex gap-3 mt-16">
                  <input
                    type="email"
                    class="inline-block text-sm border border-slate-300 focus:ring-0 rounded shadow-lg sm:shadow-none bg-white w-full py-3"
                    id="Email"
                    aria-describedby="emailHelp"
                    placeholder="Your Email"
                  />
                  <button
                    for="Email"
                    class="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3"
                  >
                    Sign Up
                  </button>
                </div>
                <div class="flex flex-wrap items-center gap-5 mt-5">
                  <div class="flex items-center gap-2">
                    <svg
                      class="stroke-green-500 stroke-2 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p class="text-sm text-gray-700">Free 14-day Demo</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg
                      class="stroke-green-500 stroke-2 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p class="text-sm text-gray-700">No credit card needed</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="relative">
                <div class="hidden sm:block">
                  <div
                    class="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('../images/pattern/dot2.svg')]"
                  ></div>
                  <div
                    class="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45 after:bg-[url('../images/pattern/dot5.svg')]"
                  ></div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000">
                  <Swiper
                    :modules="[Navigation, Autoplay]"
                    :slides-per-view="1"
                    :space-between="0"
                    :loop="true"
                    :autoplay="{ delay: 2500, disableOnInteraction: false }"
                    :navigation="{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }"
                    class="border-[6px] border-white bg-white 2xl:w-[140%]"
                  >
                    <SwiperSlide>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <a
                          href="#"
                          class="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <svg
                            class="h-5 w-5 fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z"
                            />
                          </svg>
                        </a>
                      </div>
                      <img :src="Saas1" alt="saas1" class="w-full h-full rounded-md" />
                    </SwiperSlide>

                    <SwiperSlide>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <a
                          href="#"
                          class="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <svg
                            class="h-5 w-5 fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z"
                            />
                          </svg>
                        </a>
                      </div>
                      <img :src="Saas2" alt="saas2" class="w-full h-full rounded-md" />
                    </SwiperSlide>

                    <SwiperSlide>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <a
                          href="#"
                          class="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <svg
                            class="h-5 w-5 fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z"
                            />
                          </svg>
                        </a>
                      </div>
                      <img :src="Saas3" alt="saas3" class="w-full h-full rounded-md" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="absolute bottom-0 inset-x-0 hidden sm:block">
        <img :src="Whitewave" alt="white-wave-svg" class="w-full -scale-x-100 -scale-y-100" />
      </div>
    </section>
    <!-- =========== Hero Section End =========== -->
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import Saas1 from '~/assets/images/hero/saas1.png';
import Saas2 from '~/assets/images/hero/saas2.png';
import Saas3 from '~/assets/images/hero/saas3.png';
import Whitewave from '~/assets/images/shapes/white-wave.svg';
</script>
