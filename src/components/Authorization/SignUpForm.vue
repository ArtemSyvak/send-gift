<template>
    <div class="authorization-form-container">
        <form class="sign-up-form">
            <md-card>
                <md-card-header>
                    <div class="md-title">Send Gift</div>
                </md-card-header>

                <md-card-content>
                    <md-field>
                        <label>First Name</label>
                        <md-input v-model="firstname"></md-input>
                    </md-field>
                    <md-field>
                        <label>Last Name</label>
                        <md-input v-model="lastname"></md-input>
                    </md-field>
                    <md-field>
                        <label>Email</label>
                        <md-input v-model="email"></md-input>
                    </md-field>
                    <md-field>
                        <label>Password</label>
                        <md-input v-model="password" type="password"></md-input>
                    </md-field>
                </md-card-content>
            </md-card>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SignUpForm",
        data(){
            return{
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/authorization.scss";
    .sign-up-form{
        align-self: center;
    }
</style>