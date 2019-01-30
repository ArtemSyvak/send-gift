<template>
    <div class="authorization-form-container">
        <form class="animated fadeIn login-form">

            <md-card>
                <md-card-header>
                    <div class="md-title">Send Gift</div>
                </md-card-header>

                <md-card-content>
                    <md-field>
                        <label>Email</label>
                        <md-input placeholder="Email"
                                  v-model="email">
                        </md-input>
                    </md-field>

                    <md-field>
                        <label>Password</label>
                        <md-input placeholder="Password"
                                  v-model="password"
                                  type="password">
                        </md-input>
                    </md-field>
                </md-card-content>

                <md-card-actions class="card-actions">
                    <md-button class="md-primary" @click="login">Login</md-button>
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
    import UserService from '../../services/UserService'
    export default {
        name: "LoginForm",
        data(){
            return{
                email: '',
                password: ''
            }
        },
        computed: {
            user: {
                get(){
                    return this.$store.user
                },
                set(user){
                    this.$store.commit('setUser', user)
                }
            },
            token: {
                get(){
                    return this.$store.token
                },
                set(token){
                    this.$store.commit('setToken',token)
                }
            }
        },
        methods:{
            login(){
                UserService
                    .login(this.email,this.password)
                    .then(res => {
                        if(res){
                            console.log(res);
                            this.user = res.data.user;
                            this.token = res.data.token;
                        }
                        else return false
                    })
                    .catch(err => {console.log(err)})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/authorization.scss";
    .login-form{
        align-self: center;
        .card-actions{
            justify-content: space-between;
        }
    }

</style>