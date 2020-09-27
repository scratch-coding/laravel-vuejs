<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .fade-enter-active,
    .fade-leave-active{
        transition-property: opacity;
        transition-duration: .15s;
    }

    .fade-enter-active{
        transition-delay: .15s;
    }

    .fade-enter,
    .fade-leave-active{
        opacity: 0;
    }
</style>
