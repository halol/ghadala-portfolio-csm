<template>
    <picture>
        <source v-for="(size, index) in sizes" v-bind:key="index"
            v-bind:srcset="originalImage(size)" v-bind:media="formatMedia(size)" />
        <img 
            v-bind:src="originalImage(1280)" v-bind:alt="title" />
    </picture>
</template>

<script>

export default {

// https://res.cloudinary.com/decakckik/image/upload/v1575217538/renders/kite01_jin6sh.png
// https://res.cloudinary.com/decakckik/image/upload/v1575146711/art/IMG_20191030_102710_qrf5sh.jpg

//https://res.cloudinary.com/decakckik/image/upload/v1575223607/renders/golf2_h53dlt.png

    props: {
        image: String,
        title: {
            type: String,
            default: 'Original'
        }
    },
    data: function() {
        return {
            sizes: [480, 960, 1280],
            host: "https://res.cloudinary.com/decakckik/image/upload/c_scale%2Cw_",
            v: "/v1575134125/",
            urls: [],
            folder: ""
        }
    },
    methods: {
        buildLinks: function() {
            let sizesThis = this.sizes;
            for (let i = 0; i < sizesThis.length; i++) {
                let urlFormat = this.host + sizesThis[i] + this.v + this.image;
                let sizeItem = sizesThis[i];
                this.urls.push({urlFormat, sizeItem })
            }
        },
        formatMedia: function(size) {
            return "(max-width:" + size + "px)";
        },
        originalImage: function(size) {
            return  this.host + size + this.v + this.image;
        }
    },
    beforeMount() {
        this.buildLinks()
    }
}
</script>

<style lang="scss">
    
</style>