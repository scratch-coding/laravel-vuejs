<template>
    <div class="page">
        <Header></Header>
        <Content></Content>
    </div>
</template>

<script>
    import Header from './layouts/Header.vue';
    import Content from './layouts/Content.vue';
    export default {
        components: {
            Header,
            Content
        }
    }
</script>
