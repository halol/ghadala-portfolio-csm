<template>
    <div class="work">
        <project-item 
            v-for="(work, index) in orderedWorks" 
            v-bind:key="index"
            v-if="work.show"
            :work="work"
            />
    </div>
</template>

<script>
import ProjectItem from "~/components/ProjectItem";
import _ from 'lodash';  

export default {
  computed: {
    allWork() {
      return this.$store.state.allWork;
    },
    orderedWorks: function () {
        return _.orderBy(this.allWork, 'year', ['desc'])
    }
  },
  components: {
      ProjectItem
  },
  transition: 'fade'
}
</script>

<style lang="scss">
@import "~/assets/variables.scss";

.work-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    //grid-gap: 4em;
    grid-auto-flow: dense;
    .grid-item {
        //background: $light-gray;
        display: flex;
        justify-content: stretch;
        flex-flow: column nowrap;
        //background: orange;
    }
    &:first-child {
        grid-column-end: span 2;
    }
    .is-half {
        //grid-column-end: span 1;
        //grid-row-end: span 2;
    }
    *.is-full {
        //grid-column-end: span 2;
        //grid-row-end: span 1;
        .mockup {
            //background: $light-gray;
            //padding: .5em;
        }
    }
    @media screen and (max-width: $max-mobile) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em;
    }
    @media screen and (max-width: 414px) {
        display: block;
        .grid-item {
            &:not(:last-child) {
                margin-bottom: 2em;
            }
        }
    }
}



.tiles {
    .column {
        // &:nth-child(even) {
        //     .project-item {
        //         margin-top: 8em;
        //     }
        // }
        width: calc(33% - 4em)!important;
    }
}

.mockup {
    //max-width: 80%;
    width: 50%;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    position: relative;
    //max-height: 90vh;
    overflow: hidden;
    //padding: 2vw;
    //padding: 2em 0;
    &:hover {
        img {
            //transform: scale(1.025);
        }
    }
    img {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        //top: 4em;
        width: 100%;
        height: 100%;
        vertical-align: bottom;
        //transform: scale(1);
    }
}

.caption {
    //display: none;
    //font-size: 0.9em;
    //margin-top: 1em;
    width: 50%;
    padding: 1em;
    //background: $light-gray;
    .title {
        font-weight: 600;
        //font-size: 1em;
        //margin-bottom: 4px;
        margin-bottom: 0;
    }
    .description {
        font-weight: 400;
        color:$dimmed-color;
        margin-bottom: 0;
    }
}

@media screen and (max-width: $max-mobile) {
    .caption {
        margin-left: 0em;
    }
    .tiles {
        .column {
            &:first-child {
                margin-top: 4em;
            }
            &:not(:last-child) {
                margin-bottom: 4em;
            }
            &:nth-child(even) {
                .project-item {
                    margin-top: 0em;
                }
            }
            &.is-half {
                .project-item {
                    > * {
                        width: 50%;
                    }
                    .caption {
                        margin-left: 2em;
                    }
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
            }
        }
    }
}
</style>