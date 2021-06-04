<template>
    <div class="flex-1 flex flex-col content-center flex-wrap">
        <SVG name="Instabug" class="logo" />
        <h1>Log in to Instabug</h1>
        <div class="max-w-65 w-full flex flex-col">
            <a href="#" class="bg-google flex-1 flex items-center auth-link">
                <SVG name="Google" class="icon" />
                <span class="text-white flex-1 text-center">Google</span>
            </a>
            <a href="#" class="bg-github flex-1 flex items-center auth-link">
                <SVG name="GitHub" class="icon" />
                <span class="text-white flex-1 text-center">GitHub</span>
            </a>
            <a href="#" class="flex-1 flex items-center auth-link border">
                <SVG name="Microsoft" class="icon" />
                <span class="flex-1 text-center text-grey">Microsoft</span>
            </a>
        </div>
        <div class="max-w-65 w-full flex items-center mt-15">
            <hr class="flex-1 bg-github" />
            <span class="mx-5 font-semibold">OR</span>
            <hr class="flex-1 bg-github" />
        </div>
        <form
            action=""
            method="post"
            class="mt-10 flex flex-col max-w-65 w-full font-size-14"
            id="login-form"
            @submit.prevent="checkForm"
        >
            <!-- Login Form -->
            <!-- Email -->
            <span
                v-if="loginError"
                class="input-border bg-red-light mt-5 input-padding"
                >Your email and/or password are incorrect</span
            >
            <label for="email" class="label-text mt-10">Work Email</label>
            <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                @keyup="alpha"
                class="input-padding mt-5 border"
                :class="emailError ? 'border-red' : ' input-border'"
                placeholder="you@company.com"
                required
            />
            <span v-if="emailError" class="text-red mt-5"
                >Enter a valid email address</span
            >
            <!-- Password -->
            <label for="password" class="flex mt-10 justify-between">
                <span class="label-text">Password</span>
                <a href="#" class="text-grey">Forgot Password?</a>
            </label>
            <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                @keyup="beta"
                placeholder="+8 Characters"
                class="input-padding mt-5 border"
                :class="passError ? 'border-red' : ' input-border'"
                minlength="8"
                required
            />
            <span v-if="passError" class="text-red mt-5"
                >Password must be 8 characters or more.</span
            >
            <input
                type="submit"
                value="Log in"
                class="mt-10 input-padding input-border text-white"
                :disabled="!isValid"
                :class="isValid ? 'bg-blue' : ' bg-sec'"
            />
            <ul class="flex mt-10 justify-between">
                <li class="label-text">
                    Don't have an account?
                    <a href="" class="text-blue">Sign up</a>
                </li>
                <li class="text-blue">Login via SSO</li>
            </ul>
        </form>
        <!-- Used By -->
        <section class="mt-15 max-w-65 w-full text-center">
            <h3 class="sec-text font-light">Trusted by the top companies.</h3>
            <div
                class="flex justify-between items-center w-full mt-15 trusted-svgs"
            >
                <SVG name="lyft" />
                <SVG name="buzzfeed" />
                <SVG name="asana" />
                <SVG name="one" />
                <SVG name="house" />
            </div>
        </section>
    </div>
</template>

<script>
const users = [
    { email: 'mohamed@instabug.com', password: '12345678' },
    { email: 'mohamed1@instabug.com', password: '12345678' },
    { email: 'mohamed2@instabug.com', password: '12345678' },
    { email: 'mohamed3@instabug.com', password: '12345678' },
    { email: 'mohamed4@instabug.com', password: '12345678' },
    { email: 'mohamed5@instabug.com', password: '12345678' },
    { email: 'mohamed6@instabug.com', password: '12345678' },
    { email: 'mohamed7@instabug.com', password: '12345678' },
]

export default {
    data() {
        return {
            email: '',
            password: '',
            isValid: false,
            emailError: false,
            passError: false,
            loginError: false,
            timeout: null,
        }
    },
    methods: {
        checkForm: function (e) {
            let pivot = users.find(({ email, password }) => {
                return email === this.email && password === this.password
            })
            if (pivot) {
                localStorage.setItem('user', JSON.stringify(pivot))
                this.$router.push('/welcome')
                this.loginError = false
            } else {
                this.loginError = true
            }
        },
        validateEmail: function (e) {
            const emailInput = document.getElementById('email')
            if (!emailInput.checkValidity()) {
                this.emailError = true
            } else {
                this.emailError = false
            }
            e.preventDefault()
        },
        validatePass: function (e) {
            const passwordInput = document.getElementById('password')
            if (!passwordInput.checkValidity()) {
                this.passError = true
                this.validateInputs()
            } else {
                this.passError = false
                this.validateInputs()
            }
            e.preventDefault()
        },
        validateInputs: function () {
            const emailInput = document.getElementById('email')
            const passwordInput = document.getElementById('password')
            this.isValid =
                passwordInput.checkValidity() && emailInput.checkValidity()
                    ? true
                    : false
        },
        alpha: function (e) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.validateEmail(e)
            }, 1000)
        },
        beta: function (e) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.validatePass(e)
            }, 1000)
        },
    },
}
</script>
