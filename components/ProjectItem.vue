<template>
    <div class="project-item">
        <figure class="mockup">
            <!-- Sqaure -->
            <!-- <img src="screen.png" alt=""> -->
             <img src="screen.png" />
        </figure>
        <div class="caption">
            <!-- Free -->
            <p class="title">Project title</p>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['number']
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
    font-size: 0.9em;
    margin-top: 1em;
    .title {
        font-weight: 600;
        font-size: 1em;
        margin-bottom: 4px;
    }
    .description {
        font-weight: 400;
        color: grey;
    }
}
</style>