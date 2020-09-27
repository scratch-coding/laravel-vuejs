<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Header</div>

                    <div class="card-body">
                        <router-link :to="{ name: 'ExampleComponent'}">ExampleComponent</router-link>
                        <router-link :to="{ name: 'Home'}">Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
