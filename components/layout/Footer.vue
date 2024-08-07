<script setup lang="ts"></script>

<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row footer__info">
          <div class="col-12 col-lg-4 col-xl-3">
            <NuxtLink to="/">
              <img
                class="footer__logo-image"
                src="~/assets/images/cropped-taruwara-logo.webp"
                alt="Taruwara"
              />
            </NuxtLink>
          </div>
          <div class="col-12 col-lg-4 col-xl-4 offset-lg-1 offset-xl-2">
            <div class="footer__location">
              <h4 class="footer__title">Location</h4>
              <div class="footer__locationInfo">
                <p>
                  Jalan Tirta Akasa No 60 Sanur, Denpasar Selatan, Kota
                  Denpasar, Bali 80228
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 col-xl-2 offset-xl-1">
            <div class="footer__hour">
              <h4 class="footer__title">Bussiness Hour</h4>
              <div class="footer__hourInfo">
                <p>
                  Monday - Friday
                  <br />
                  08:00 - 16:00
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--        <div class="row footer__contact">-->
        <!--          <div class="col-12 col-lg-6 footer__contact-item">-->
        <!--            <span class="footer__title mb-0">Email</span>-->
        <!--            <a-->
        <!--              href="mailto:info@taruwara.net"-->
        <!--              class="footer__title footer__contact-info mb-0"-->
        <!--            >-->
        <!--              info@taruwara.net-->
        <!--            </a>-->
        <!--          </div>-->
        <!--          <div class="col-12 col-lg-6 footer__contact-item">-->
        <!--            <span class="footer__title mb-0">Phone</span>-->
        <!--            <a-->
        <!--              href="tel:+6281238687863"-->
        <!--              class="footer__title footer__contact-info mb-0"-->
        <!--            >-->
        <!--              081238687863-->
        <!--            </a>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="footer__others">-->
        <!--          <div class="footer__partner">-->
        <!--            <NuxtLink to="https://rumahkecil.net/" class="footer__partner-link">-->
        <!--              <img-->
        <!--                src="~/assets/images/icon/rumah-kecil-logo.webp"-->
        <!--                alt="Rumah kecil"-->
        <!--                class="footer__partner-image"-->
        <!--              /> </NuxtLink-->
        <!--            ><NuxtLink-->
        <!--              to="https://www.siki-bali.com/indo/"-->
        <!--              class="footer__partner-link"-->
        <!--            >-->
        <!--              <img-->
        <!--                src="~/assets/images/icon/logo_siki_white.webp"-->
        <!--                alt="Siki Bali"-->
        <!--                class="footer__partner-image"-->
        <!--              /> </NuxtLink-->
        <!--            ><NuxtLink to="https://timedoor.net/" class="footer__partner-link">-->
        <!--              <img-->
        <!--                src="~/assets/images/icon/timedoor-2022-white.webp"-->
        <!--                alt="Timedoor Indonesia"-->
        <!--                class="footer__partner-image"-->
        <!--              />-->
        <!--            </NuxtLink>-->
        <!--          </div>-->
        <!--          <div class="footer__menu">-->
        <!--            <ul class="footer__list d-flex">-->
        <!--              <li><NuxtLink to="/">Home</NuxtLink></li>-->
        <!--              <li><NuxtLink to="/">About Us</NuxtLink></li>-->
        <!--              <li><NuxtLink to="/">programme</NuxtLink></li>-->
        <!--              <li><NuxtLink to="/">preschool & kindergraten</NuxtLink></li>-->
        <!--              <li><NuxtLink to="/">blog</NuxtLink></li>-->
        <!--              <li><NuxtLink to="/">contact</NuxtLink></li>-->
        <!--            </ul>-->
        <!--          </div>-->
        <!--          <div class="footer__copyright-recaptcha">-->
        <!--            <p>-->
        <!--              Copyright © 2024 Rumah Kecil Kids Learning Center. All Rights-->
        <!--              Reserved. Powered by-->
        <!--              <a href="https://timedoor.net/" target="_blank"-->
        <!--                >PT Timedoor Indonesia</a-->
        <!--              >-->
        <!--            </p>-->

        <!--            <p>-->
        <!--              This site is protected by reCAPTCHA and the Google-->
        <!--              <a href="https://policies.google.com/privacy">Privacy Policy</a>-->
        <!--              and-->
        <!--              <a href="https://policies.google.com/terms">Terms of Service</a>-->
        <!--              apply.-->
        <!--            </p>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
* {
  border: 1px solid red;
}
.footer {
  background: $primary;
  padding-top: 7.5rem;
  padding-bottom: 1.875rem;
  border-radius: 40px 40px 0 0;
  color: white;
  margin-top: -38px;
  position: relative;
  z-index: 1;

  &__title {
    margin-top: 20px;
    font-size: 24px;
  }

  // info

  &__logo-image {
    max-width: 345px;
  }
  &__info {
    padding-bottom: 60px;
    align-items: center;
    font-size: 12px;
  }
}
</style>
