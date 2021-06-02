<template>
    <SVG name="Instabug" />
    <h1>Log in to Instabug</h1>
    <ul>
        <li>
            <SVG name="Google" />
            <span>Google</span>
        </li>
        <li>
            <SVG name="GitHub" />
            <span>Google</span>
        </li>
        <li>
            <SVG name="Microsoft" />
            <span>Google</span>
        </li>
    </ul>
    <div>
        <hr />
        <span>OR</span>
        <hr />
    </div>
    <form action="#" method="post">
        <!-- Login Form -->
        <!-- Email -->
        <label for="email">Work Email</label>
        <input
            type="email"
            name="email"
            id="email"
            placeholder="you@company.com"
        />
        <!-- Password -->
        <label for="password">
            <span>Password</span>
            <span>Forgot Password?</span>
        </label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Submit" />
        <ul>
            <li>Don't have an account? Sign up</li>
            <li>Login via SSO</li>
        </ul>
    </form>
    <!-- Used By -->
    <section>
      <h3>Trusted by the top companies.</h3>
      <div>
        <SVG name="house" />
        <SVG name="house" />
        <SVG name="house" />
        <SVG name="house" />
        <SVG name="house" />
      </div>
    </section>
</template>

<script>
export default {}
</script>
