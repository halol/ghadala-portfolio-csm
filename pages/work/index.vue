<template>
    <div class="columns">
        <div class="column is-one-third">
            <div class="sticky-info">
                <h1 class="sty">Work</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis vitae quam porro deserunt minus sequi et eius obcaecati non sapiente quae nam necessitatibus, placeat exercitationem qui cum. Nesciunt, deserunt?</p>
            </div>
        </div>

        <div class="column is-two-thirds">
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

// import ProjectItem from '~/components/ProjectItem.vue'
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
  transition: 'fade'
}
</script>

<style lang="scss">
.project-item {
    display: flex;
    flex-direction: column;
    margin-top: 3em;
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
    //background: #F7F7F7;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    //overflow: hidden;
    position: relative;
    padding: 2em 0;
    
    &:hover {
        img {
            transform: scale(1);
        }
    }
    &:after {
        //content: "";
        //padding-bottom: 100%;
        //display: block;
    }
    img {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        //position: absolute;
        //top: 64px;
        top: 4em;
        width: 100%;
        height: auto;
        transform: scale(.9);
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
</style>