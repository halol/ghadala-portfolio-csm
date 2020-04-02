<template>
  <div>
    <h3>Sandbox</h3>
    <show-image title="Custom title" image="erke-rysdauletov-1360520-unsplash_mk8sp7.jpg" />
    <info-chip color="default" label="E-commerce" />
    <info-chip color="primary" label="E-commerce" />
  </div>
</template>

<script>
import ShowImage from "~/components/ShowImage.vue";
import InfoChip from "~/components/InfoChip.vue";

//let bucket = "decakckik";

export default {
  components: {
    ShowImage,
    InfoChip
  }
};
</script>