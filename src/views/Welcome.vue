<template>
    <main class="full-page flex flex-col content-center">
        <h1>Welcome, {{ email }}</h1>
        <button
            @click="logout"
            type="button"
            class="mt-10 input-padding input-border text-white bg-blue"
        >
            Log out
        </button>
    </main>
</template>

<script>
export default {
    data() {
        return {
            email: '',
        }
    },
    mounted() {
        this.email = JSON.parse(localStorage.getItem('user')).email
    },
    methods: {
        logout: function () {
            localStorage.removeItem('user')
            this.$router.push('/')
        },
    },
}
</script>

<style>
</style>