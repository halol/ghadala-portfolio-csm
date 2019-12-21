<template>
    <div class="image" :style="parseStyle"></div>
</template>

<script>
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'decakckik'});

export default {

// https://res.cloudinary.com/decakckik/image/upload/v1575217538/renders/kite01_jin6sh.png
// https://res.cloudinary.com/decakckik/image/upload/v1575146711/art/IMG_20191030_102710_qrf5sh.jpg

//https://res.cloudinary.com/decakckik/image/upload/v1575223607/renders/golf2_h53dlt.png

    props: {
        image: {
            type: String
        },
        height: String,
        folder: String,
        title: String
    },
    data: function() {
        return {
            sizes: [480, 960, 1280],
            // host: "https://res.cloudinary.com/decakckik/image/upload/c_scale%2Cw_",
            // v: "/v1575134125/",
            urls: [],
            // cloudUrls: [],
            // folder: ""
        }
    },
    // methods: {
    //     formatMedia: function(size) {
    //         return "(max-width:" + size + "px)";
    //     },
    //     buildUrls: function() {
    //         let sizes = this.sizes;
    //         let path = this.folder + '/' + this.image;
    //         for (let i = 0; i < sizes.length; i++) {
    //             let url = cloudinaryCore.url(path, {width: size, crop: 'scale', secure: true});
    //             let size = sizes[i];
    //             this.urls.push({url, size})
    //         }
    //     }
        
    // },
    computed: {
        parseStyle: function() {
            let path = this.folder + '/' + this.image;
            let cloud = cloudinaryCore.url(path, {height: this.parseHeight, crop: 'scale'});
            return 'background-image: url('+cloud+'); background-repeat: no-repeat; background-size: contain; background-position: center center;';
        },
        getTitle: function() {
            return this.title;
        },
        parseHeight: function(height) {
            return parseInt(this.height, 10);
        },
        getImage: function() {
            let path = this.folder + '/' + this.image;
            return cloudinaryCore.url(path, {height: this.parseHeight, crop: 'scale'});
        }
    },
    beforeMount() {
        // this.buildUrls()
    }
}
</script>

<style lang="scss">
    .image {
        height: inherit;
        width: 100%;
        transition: all 0.25s ease;
    }
</style>