<script setup lang="ts">

</script>

<template>
<header>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="~assets/images/cropped-taruwara-logo.webp" alt="" width="230" height="54">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6" width="28" height="3" rx="1.5" fill="#2B6837"/>
          <rect y="14" width="28" height="3" rx="1.5" fill="#2B6837"/>
          <rect x="15" y="22" width="15" height="3" rx="1.5" fill="#2B6837"/>
        </svg>
      </button>
      <div class="offcanvas offcanvas-start justify-content-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <a class="navbar-brand" href="#"><img src="~assets/images/cropped-taruwara-logo.webp" alt=""></a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item nav__item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item nav__item">
              <a class="nav-link" href="#">About Us</a>
            </li><li class="nav-item nav__item">
              <a class="nav-link" href="#">About Us</a>
            </li><li class="nav-item nav__item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
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

.nav__item {
  &:hover{
    border-bottom:1px solid $primary;
  }
}



</style>