<script setup lang="ts">

</script>

<template>
<header>
  <nav class="navbar navbar-expand-lg fixed-top border-bottom ">
    <div class="container-fluid">
      <a class="navbar-brand navbar__image-container" href="#" >
        <img src="~assets/images/cropped-taruwara-logo.webp" class="navbar__image w-100" alt="Taruwara"  loading="eager" decoding="async">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6" width="28" height="3" rx="1.5" fill="#2B6837"/>
          <rect y="14" width="28" height="3" rx="1.5" fill="#2B6837"/>
          <rect x="15" y="22" width="15" height="3" rx="1.5" fill="#2B6837"/>
        </svg>
      </button>
      <div class="offcanvas offcanvas-start justify-content-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header ">
          <a class="navbar-brand navbar__image-container" href="#">
            <img src="~assets/images/cropped-taruwara-logo.webp" alt="">
          </a>
          <button type="button" class="btn-close navbar__toggler" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav navbar__nav justify-content-end flex-grow-1 pe-3 gap-2">
            <li class="nav-item navbar__item navbar__item--active ">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item navbar__item ">
              <a class="nav-link navbar__link" href="#">About Us</a>
            </li><li class="nav-item nav__item ">
              <a class="nav-link navbar__link" href="#">programme</a>
            </li><li class="nav-item navbar__item ">
              <a class="nav-link navbar__link" href="#">preschool & kindergraten</a>
            </li>
            <li class="nav-item navbar__item ">
              <a class="nav-link navbar__link" href="#">blog</a>
            </li><li class="nav-item navbar__item ">
              <a class="nav-link navbar__link" href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
</template>

<style scoped lang="scss">

.navbar {
  background-color: #ffffff;

  .container-fluid {
    padding-right: 60px;
    padding-left: 60px;
  }

  .btn-close{
  font-size: 24px;
  }



  &__image-container{
    padding: 0 0;
    margin-right: 0;
    max-width: 140px;
  }


  &__nav {
    align-items: center;

    > .navbar__item {
      height: 100%;

      > .navbar-link {
        height: 100%;
        display: inline-flex;
        align-items: center;
      }
    }
  }

  &__link{
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    line-height: 21.82px;
    color: $dark;

    &::after {
      display: none;
    }

    &:hover {
      color: $primary;
      border-bottom: 2px solid $primary;
    }

    &--active {
      color: $primary !important;
      border-bottom: 2px solid $primary;
    }
  }
}






</style>