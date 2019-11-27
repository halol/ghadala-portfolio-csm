<template>
    <div class="columns">
        <div class="column is-one-third">
            <div class="sticky-info">
                <h1 class="sty">Work</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis vitae quam porro deserunt minus sequi et eius obcaecati non sapiente quae nam necessitatibus, placeat exercitationem qui cum. Nesciunt, deserunt?</p>
            </div>
        </div>

        <div class="column is-two-thirds">
            <div class="columns is-multiline">
                <div class="column is-half" v-for="work in allWork" v-bind:key="work.id">
                    
                        <div class="project-item">
                            <n-link :to=work._path class="title">
                            <figure class="mockup">
                                <!-- Sqaure -->
                                <!-- <img src="screen.png" alt=""> -->
                                <img src="screen.png" />
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

export default {
  computed: {
    allWork() {
      return this.$store.state.allWork;
    },
  },
  transition: 'bounce'
}
</script>

<style lang="scss">
.project-item {
    display: flex;
    flex-direction: column;
}

.mockup {
    background: #F7F7F7;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    &:after {
        content: "";
        padding-bottom: 100%;
        display: block;
    }
    img {
        position: absolute;
        //top: 64px;
        top: 4em;
        width: 70%;
        height: autol
    }
}

.caption {
    //font-size: 0.9em;
    margin-top: 1em;
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