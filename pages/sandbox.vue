<template>
  <div>
    <h3>Sandbox</h3>
    <info-chip color="default" label="E-commerce" />
    <info-chip color="primary" label="E-commerce" />

    <hr />

    <remote-ready></remote-ready>
  </div>
</template>

<script>
import ShowImage from "~/components/ShowImage.vue";
import InfoChip from "~/components/InfoChip.vue";
import RemoteReady from "~/components/RemoteReady.vue";

//let bucket = "decakckik";

export default {
  components: {
    ShowImage,
    InfoChip,
    RemoteReady
  }
};
</script>