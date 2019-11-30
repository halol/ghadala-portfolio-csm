<template>
    <div class="item">
        <figure class="artwork">
            <img :src="artwork.cover" :alt="artwork.title">
            <figcaption>
                <p class="artwork-title">{{artwork.title}}<span v-if="artwork.year">, {{artwork.year}}</span></p>
                <p v-if="artwork.medium" class="artwork-medium">{{artwork.medium}}</p>
                <a v-if="artwork.buy_url" :href="artwork.buy_url" class="artwork-buy_url">Buy</a>
            </figcaption>   
        </figure>
    </div>
</template>

<script>
export default {
    props: {
        artwork: Object
    }
}
</script>
<style lang="scss">
@import "~/assets/variables.scss";
.artwork {
    background: $light-gray;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    img {
        width: 100%;
        height: auto;
        vertical-align: bottom;
    }
    > figcaption {
        .artwork-title {
            font-style: italic;
        }
        padding: 1em;
        > * {
            margin: 0;
        }
        .artwork-medium {
            opacity: 0.7;
        }
    }
}
.item {
//     display: flex;
//   flex: 1 1 auto;
//   width: 33.3%;
//     //width: 25%;
//     margin-bottom: 2em;
//     break-inside: avoid;
    display: flex;
    //align-items: center;
    &:nth-of-type(1) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
}

</style>