<template>
    <div class="work-item">
       <div class="description">
            <h3>Project name</h3>
            <p class="short">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi porro eum accusantium repellendus et doloribus ullam assumenda quisquam voluptas nisi iste dicta ab, molestias provident dolorum corporis esse vel?</p>
            <p class="year">2018</p>
       </div>
       <div class="mockup">
           <show-image></show-image>
       </div>
    </div>
</template>

<script>
import ShowImage from "~/components/ShowImage.vue";
export default {
    components: {
        ShowImage
    }
    //
}
</script>


<style lang="scss" scoped>
@import "~assets/variables.scss";

.work-item {
    width: 100%;
    display: grid;
    grid-template-columns: 380px 1fr;
    grid-template-rows: 460px;
    grid-template-areas: "description mockup";
    grid-column-gap: 48px;
    &:not(:last-child) {
        margin-bottom: 4em;
    }
}

.description { grid-area: description; }

.mockup { 
    grid-area: mockup;
    background: $light-gray;
}

.year {
    font-family: $bold-font;
    color: $grey;
}
</style>