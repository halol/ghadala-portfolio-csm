<template>
    <div class="page">
        <div class="columns">
            <div class="column is-one-third">
                <page-info></page-info>
                <!-- <div class="page-info">
                    <h1>Title</h1>
                    <p class="lead">Some lead here</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt voluptas aperiam illo beatae fuga maiores qui magnam sed, perferendis nobis temporibus, quo explicabo quibusdam ullam provident quae rem mollitia. Error?</p>
                </div> -->
            </div>
            <div class="column is-one-third">
                content goes here
            </div>
        </div>
        
    </div>
</template>
<script>

import TimeLine from '~/components/TimeLine.vue';
import PageInfo from '~/components/PageInfo.vue'

export default {
    components: {
        TimeLine,
        PageInfo
    },
    transition: 'fade'
}
</script>