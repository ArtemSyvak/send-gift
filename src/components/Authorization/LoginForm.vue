<template>
    <div class="authorization-form-container">
        <form class="login-form">
            <md-card>
                <md-card-header>
                    <div class="md-title">Send Gift</div>
                </md-card-header>
                <md-card-content>
                    <md-field>
                        <label>Email</label>
                        <md-input v-model="email"></md-input>
                    </md-field>
                    <md-field>
                        <label>Password</label>
                        <md-input v-model="password" type="password"></md-input>
                    </md-field>
                </md-card-content>
                <md-card-actions class="login-card-actions">
                    <md-button class="md-primary">Login</md-button>
                    <router-link
                            :to="{path: 'sign-up'}"
                             tag="md-button"
                            class="md-primary">Sign Up
                    </router-link>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        data(){
            return{
                email: '',
                password: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/authorization.scss";
    .login-form{
        align-self: center;
        .login-card-actions{
            justify-content: space-between;
        }
    }

</style>