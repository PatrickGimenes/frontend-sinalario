<template>
  <NavBar />
  <FooterBar />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "HomePage",
  components: { NavBar, FooterBar },
};
</script>
