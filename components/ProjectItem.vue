<template>
    <div class="work-item">
       <div class="description">
            <nuxt-link :to=work._path><h3>{{work.description}}</h3></nuxt-link>
            <p class="short">{{work.title}}</p>
            <p class="year">{{work.year}}</p>
       </div>
       <div class="mockup">
           <nuxt-link :to=work._path class="image-link">
                <show-image :image="work.cover" height="800" :folder="folder" :title="work.title"></show-image>
           </nuxt-link>
       </div>
    </div>
</template>

<script>
import ShowImage from "~/components/ShowImage.vue";
export default {
    props: ['work'],
    components: {
        ShowImage
    },
    data: function() {
        return {
            folder: "renders"
        }
    },
    beforeMount() {
        console.log(this.work)
    },
    computed: {
        
    },
    //
}
</script>


<style lang="scss" scoped>
@import "~assets/variables.scss";

.work-item {
    //width: 100%;
    // display: grid;
    // grid-template-columns: 1fr minmax(65%, 65%);
    // grid-template-rows: 460px;
    // grid-template-areas: "description mockup";
    // grid-column-gap: 48px;
    display: flex;
    &:not(:last-child) {
        margin-bottom: 4em;
    }
}

.description { 
    grid-area: description;
    width: 40%;
    margin-right: 4%;
}

.mockup { 
    grid-area: mockup;
    background: $light-gray;
    width: 56%;
    //height: 460px;
    
}
.image-link {
    width: 100%;
    height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
    //overflow: hidden;
    padding: 2em;
    
    &:hover {
        .image {
            transform: scale(1.025);
        }
    }
}

.year {
    font-family: $bold-font;
    color: $grey;
}
</style>