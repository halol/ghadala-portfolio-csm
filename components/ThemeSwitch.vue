<template>
    <div>
        <input type="checkbox" name="theme-toggle" id="theme-toggle">
        <label for="theme-toggle"><span></span></label>
        <!-- <div class="track">
            <div class="dot">
                <div class="moon-off"><img src="moon-off.svg" alt=""></div>
                <div class="moon-on"></div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #theme-toggle {
        display: none;
        & + label {
            background-image: url('../static/moon-off.svg');
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
        }
        &:checked {
            & + label {
                background-image: url('../static/moon-on.svg');
            }
        }
    }
</style>