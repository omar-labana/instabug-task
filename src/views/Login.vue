<template>
    <main class="full-page flex">
        <Slider />
        <LoginForm />
    </main>
</template>

<script>
import Slider from '../components/login/Slider.vue'
import LoginForm from '../components/login/LoginForm.vue'
export default {
    components: {
        Slider,
        LoginForm,
    },
}
</script>

<style>
</style>