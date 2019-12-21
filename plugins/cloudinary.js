// import Vue from 'vue'
// import Cloudinary from 'cloudinary-vue';
// Vue.use(Cloudinary, {
//   configuration: {
//     cloudName: "decakckik"
//   }
// });

import Vue from 'vue';
import cloudinary from 'cloudinary-core';

export default ({ app }) => {
    const clCore = new cloudinary.Cloudinary({ cloud_name: "decakckik"});

    Vue.prototype.$cl = clCore;
    app.$cl = clCore;
};