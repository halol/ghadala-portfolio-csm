<template>
    <div class="work-item" data-scroll>
       <div class="description">
            <nuxt-link :to=work._path><h4>{{work.description}}</h4></nuxt-link>
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
    display: flex;
    flex-direction: row;
    &:not(:last-child) {
        margin-bottom: 4em;
    }
    @media screen and (max-width: 720px) {
        flex-direction: column;
        .description, .mockup {
            width: 100%;
        }
        .description {
            display: none;
        }
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
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    
}
.image-link {
    width: 100%;
    height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
    //overflow: hidden;
    padding: 2em;
    .image {
        transform: scale(1.025);
    }
    &:hover {
        .image {
            transform: scale(1.1);
        }
    }
}

.year {
    font-family: $bold-font;
    color: $grey;
}
</style>