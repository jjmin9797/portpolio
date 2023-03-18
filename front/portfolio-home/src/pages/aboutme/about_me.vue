<template>
  <Header />
  <AboutMeContent />
  <Footer />
</template>

<script>
import Header from "@/components/basic/portfolio_header.vue";
import Footer from "@/components/basic/portfolio_footer.vue";
import AboutMeContent from "@/components/aboutme/about_me_content.vue";
export default {
  components: { Header, Footer, AboutMeContent },
};
</script>

<style>
</style>