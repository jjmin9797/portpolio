<template>
  <!-- Header
                ============================================================ -->
  <header class="header-section header-section-layout-2 header-section-fixed">
    <!-- Header section container -->
    <div class="header-section-container">
      <!-- Header menu section -->
      <div class="header-menu-section">
        <!-- Header menu section container -->
        <div class="header-menu-section-container">
          <!-- Navbar -->
          <nav class="navbar navbar-expand-lg">
            <!-- container -->
            <div class="container gx-4">
              <!-- Logo -->
              <a class="navbar-brand" href="/" title="COMOYOON">
                <h5 class="font-weight-900">ShinJungMin's Portfolio</h5> </a
              ><!-- /End Logo -->

              <!-- Toggler button -->
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobile-menu"
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-wd">MENU</span>
                <span class="navbar-toggler-lines-wrapper">
                  <i class="navbar-toggler-line navbar-toggler-line-top"></i>
                  <i class="navbar-toggler-line navbar-toggler-line-middle"></i>
                  <i class="navbar-toggler-line navbar-toggler-line-bottom"></i>
                </span></button
              ><!-- /End Toggler button -->

              <!-- Header menu (Desktop) -->
              <div class="header-menu desktop-menu navbar-collapse">
                <!-- Header menu links -->
                <ul class="navbar-nav ms-auto">
                  <!-- 대쉬보드 -->
                  <li class="nav-item">
                    <!-- <a class="nav-link" href="/"><span>Home</span></a> -->
                    <router-link
                      class="nav-link"
                      :to="{ name: 'PortfolioMain' }"
                      ><span>HOME</span></router-link
                    >
                  </li>

                  <!-- 직원 관리 -->
                  <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'AboutMe' }"
                      ><span>ABOUT ME</span></router-link
                    >
                  </li>

                  <!-- 상품 관리 -->
                  <li class="nav-item">
                    <a class="nav-link" href="#"><span>PROJECTS</span></a>
                    <ul>
                      <li class="nav-item">
                        <a class="nav-link" href="portfolio-layout-1.html"
                          ><span>DESSERT</span></a
                        >
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="portfolio-layout-2.html"
                          ><span>FLOWER</span></a
                        >
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="portfolio-layout-3.html"
                          ><span>PROMOTION</span></a
                        >
                      </li>
                    </ul>
                  </li>

                  <!-- 예약 관리 -->
                  <li class="nav-item">
                    <a class="nav-link" href="index.html"><span>BLOG</span></a>
                  </li>

                  <!-- 커뮤니티 -->
                  <li class="nav-item">
                    <a class="nav-link" href="index.html"
                      ><span>CONTACT</span></a
                    >
                  </li>
                </ul>
                <!-- /End Header menu links -->

                <!-- Header menu buttons -->
                <ul class="header-menu-buttons"></ul>
                <!-- /End Header buttons -->
              </div>
              <!-- /End Header menu (Desktop) -->
            </div>
            <!-- /End container -->

            <!-- Header menu (Mobile) -->
            <div
              class="header-menu mobile-menu collapse"
              id="mobile-menu"
            ></div>
            <!-- /End Header menu (Mobile) -->
          </nav>
          <!-- /End Navbar -->
        </div>
        <!-- /End Header menu section container -->
      </div>
      <!-- /End Header menu section -->
    </div>
    <!-- /End Header section container -->
  </header>
  <!-- /End Header section -->
</template>

<script>
export default {};
</script>

<style>
</style>