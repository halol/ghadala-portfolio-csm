<template>
    <div class="page-info">
        <h1 :if="title">{{title}}</h1>
        <p :if="lead" class="lead">{{lead}}</p>
        <p :if="description">{{description}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Page title'
        },
        lead: {
            type: String
        },
        description: {
            type: String,
            default: 'Lorem ipsum sranie w banie...'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/variables.scss";
    .page-info {
        //margin-top: 6em;
        @media screen and (max-width: $max-mobile) {
            position: relative;
            margin-top: 0;
            top: 0;
        }
    }
</style>