<template>
    <div class="columnsz">
        <!-- <div class="column is-one-third">
            <page-info 
                title="Work"
                description="Some description about work">
            </page-info>
            <div class="sticky">
                <ul>
                    <li>Something 1</li>
                    <li>Something 2</li>
                    <li>Something 3</li>
                    <li>Something 4</li>
                    <li>Something 5</li>
                </ul>
            </div>
        </div> -->
        <div class="columnz is-two-thirdsz">
            <page-info 
                title="Work"
                description="Some description about work">
            </page-info>
            <div class="columns is-multiline tiles">
                <div class="column" 
                    v-for="work in orderedWorks" 
                    v-bind:key="work.name"
                    v-bind:class="[work.layout ? 'is-full' : 'is-half']"
                    >
                    
                        <div class="project-item">
                            <n-link :to=work._path class="title">
                            <figure class="mockup">
                                <!-- Sqaure -->
                                <!-- <img src="screen.png" alt=""> -->
                                <img v-bind:src="work.cover" />
                            </figure>
                            </n-link>
                            <div class="caption">
                                <!-- Free -->
                                <n-link :to=work._path class="title">{{work.title}} &rarr;</n-link>
                                <p class="description">{{work.description}}</p>
                                
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import PageInfo from '~/components/PageInfo.vue'
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
      PageInfo
  },
  transition: 'fade'
}
</script>

<style lang="scss">
@import "~/assets/variables.scss";

.project-item {
    display: flex;
    flex-direction: column;
    //margin-top: 3em;
}

.tiles {
    .column {
        &:nth-child(even) {
            .project-item {
                margin-top: 8em;
            }
        }
    }
}

.mockup {
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    position: relative;
    //padding: 2em 0;
    &:hover {
        img {
            transform: scale(1);
        }
    }
    img {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        top: 4em;
        width: 100%;
        height: auto;
        transform: scale(.95);
    }
}

.caption {
    //font-size: 0.9em;
    margin-top: 1em;
    margin-left: 2em;
    .title {
        font-weight: 600;
        //font-size: 1em;
        margin-bottom: 4px;
    }
    .description {
        font-weight: 400;
        color: grey;
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