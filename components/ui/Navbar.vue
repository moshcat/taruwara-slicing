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
        <div class="offcanvas-body  ">
          <ul class="navbar-nav navbar__nav justify-content-end flex-grow-1 ">
            <li class="nav-item navbar__item  ">
              <a class="nav-link navbar__link navbar__link--active" aria-current="page" href="#">Home</a>
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
            </li>
            <li class="nav-item navbar__item ">
              <a class="nav-link navbar__link" href="#">contact</a>
            </li>
          </ul>
          <ul class=" navbar-nav navbar__nav language-switcher-desktop">
            <li class="dropdown navbar__item nav-item">
              <a class=" dropdown-toggle nav-link navbar__link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="~assets/images/icon/united-kingdom.png" alt="English">
              </a>
              <ul class="dropdown-menu">
                <li class="navbar__item nav-item lang-item">
                  <a class="dropdown-item p-1" href="#">
                  <img src="~assets/images/icon/indonesia.png" alt="Indonesia">
                </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
</template>

<style scoped lang="scss">

* {
  //border: 1px solid red;
}
.navbar {
  padding: 0;

  .container-fluid {
    padding-right: 60px;
    padding-left: 60px;

  }

  &__image-container {
    max-width: 140px;
    object-fit: contain;

  }

  .preschool-menu {
    position: relative;
    margin-right: 20px;

    .navbar__link:hover{
      &::before{
        transform: translateY(-55%) rotate(45deg);
      }
    }
  }



  .language-switcher-desktop{
    .dropdown-menu{
      min-width: unset;
      width: 2.5em;
      border-radius: 0px;
    }

    .lang-item {
      img {
        width: 28px;
        height: 24px;
      }
    }

    .navbar__link {
      //padding-right: 0;
      //border-bottom: none;

      img {
        width: 24px;
        height: 24px;
      }

    }
    .navbar__link::after{
      opacity: 0;
    }
  }



  &__nav {
    position: relative;
    justify-content: space-between;
  }
  &__item {
    height: 100%;
  }

  &__link {
    text-transform: uppercase;
    font-size: 10px;
    position: relative;
    transition: width 1s;
    letter-spacing: 0.05em;
    padding: 2.2vw 1.0416666667vw;
    display: inline-flex;


    &::after {
      content: "";
      opacity: 0;
      transition: all 0.2s;
      position: absolute;
      background-color: $primary;
      height: 1px;
      width: 100%;
      left: 0;
      bottom: -10px;
    }
    &:hover::after, &--active::after{
      opacity: 1;
    }
    &:hover {
      color: $primary;
    }
    &--active{
      color: $primary;
    }
  }


  @media (max-width: 991px){
    padding: 24px 0px;

    .language-switcher-desktop{
      display: none;
    }

    .preschool-menu{
      margin-right: 0;

      .navbar__link::before {
        display: none;
      }
      .navbar__link::after{
        position: relative;
        display: inline-block;
        top: 5px;
        left: 8px;
        width: 10px;
        height: 10px;
      }
    }

    &__image-container {
      max-width: 140px;
    }

    &__item {
      width: 100%;

      .dropdown-menu {
        margin-top: 0;
        padding: 0;
        border-radius: 0;
        border: none;
      }

      .dropdown-item {
        padding: 18px 14px;
        font-size: 16px;
      }
    }

    &__link {
      width: 100%;
      padding: 18px 0px !important;
      font-size: 16px;
      line-height: initial;
      border-bottom: 1px solid grey;

      &--active {
        border-bottom: 1px solid $primary;
      }
    }
  }

  @media(max-width: 575px){
    &__offcanvas {
      width: 100% !important;
    }
  }



}
</style>