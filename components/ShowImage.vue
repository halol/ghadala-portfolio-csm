<template>
    <div>
      <img :src="getImage" :alt="title">
       
    </div>
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
        height: Number,
        title: {
            type: String,
            default: 'Original'
        }
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
    methods: {
        formatMedia: function(size) {
            return "(max-width:" + size + "px)";
        },
        buildUrls: function() {
            let sizes = this.sizes;
            for (let i = 0; i < sizes.length; i++) {
                let url = cloudinaryCore.url('renders/golf2_h53dlt.png', {width: size, crop: 'scale'});
                let size = sizes[i];
                this.urls.push({url, size})
            }
        }
        
    },
    computed: {
        // cloudinary: function() {
        //     return cloudinaryCore.url(this.image, {width: 300, crop: 'scale'});
        // }
        getImage: function() {
            return cloudinaryCore.url(this.image, {height: this.height, crop: 'scale'});
        }
    },
    beforeMount() {
        this.buildUrls()
        
    }
}
</script>

<style lang="scss">
    
</style>