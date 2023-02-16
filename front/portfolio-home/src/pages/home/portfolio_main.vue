<template>
  <Header />
  <PortfolioMain />
  <Footer />
</template>

<script>
import Header from "@/components/basic/portfolio_header.vue";
import Footer from "@/components/basic/portfolio_footer.vue";
import PortfolioMain from "@/components/home/portfolio_home.vue";
export default {
  components: {
    Header,
    Footer,
    PortfolioMain,
  },
};
</script>

<style>
</style>