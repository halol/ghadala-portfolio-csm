<template>
  <div>
    <h3>Sandbox</h3>
    <info-chip color="default" label="E-commerce" />
    <info-chip color="primary" label="E-commerce" />

    <hr />

    <remote-ready></remote-ready>

    <hr />

    <my-button variant="dark">Buy for €500</my-button>
    <my-button variant="light">Buy for €500</my-button>
  </div>
</template>

<script>
import ShowImage from "~/components/ShowImage.vue";
import InfoChip from "~/components/InfoChip.vue";
import RemoteReady from "~/components/RemoteReady.vue";

import MyButton from "~/components/MyButton";

//let bucket = "decakckik";

export default {
  components: {
    ShowImage,
    InfoChip,
    RemoteReady,
    MyButton
  }
};
</script>
