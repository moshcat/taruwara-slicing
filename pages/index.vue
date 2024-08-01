<script setup lang="ts"></script>

<template>
  <div>
    <main class="home">
      <section class="overview">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-5 order-1">
              <h2 class="overview__title">Welcome to Taruwara</h2>
              <div class="overview__content">
                <p>
                  <span style="font-weight: 400"
                    >Taruwara means “the best tree” in Sanskrit. Hence the tree
                    logo in our building. We are a sustainable school and we
                    encourage our children to engage the environment by allowing
                    them to actively protect it. It starts in the classroom and
                    through these small actions, the students will experience a
                    sense of responsibility for the future generations.</span
                  >
                </p>
              </div>
              <NuxtLink class="overview__button btn btn-primary" to="/"
                >About our school</NuxtLink
              >
            </div>
            <div class="col-12 col-lg-6 offset-lg-1 order-lg-1">
              <div class="overview__image-wrapper">
                <div class="overview__image-container">
                  <img
                    src="~/assets/images/intro.webp"
                    alt=""
                    class="overview__image"
                  />
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: $primary;
}

.overview {
  padding-bottom: 0;

  &__content {
    margin-bottom: 30px;
  }

  &__image-wrapper {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: -4%;
      left: 7%;
      background-image: url("/assets/images/blob/overview-shape-bg.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  &__image-container {
    z-index: 1;
    -webkit-mask-image: url("/assets/images/blob/overview-shape.svg");
    mask-image: url("/assets/images/blob/overview-shape.svg");
    -webkit-mask-size: 100%;
    mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  &__image {
    object-position: center;
  }
}
</style>
