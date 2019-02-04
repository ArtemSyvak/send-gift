<template>
    <div class="authorization-form-container">
        <form class="animated fadeIn login-form md-layout-item md-size-20">

            <md-card>
                <md-card-header>
                    <div class="md-title md-layout md-gutter md-alignment-center-center ">
                        <Logo/>
                    </div>
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
                                  type="password"
                                  v-model="password">
                        </md-input>
                    </md-field>
                </md-card-content>

                <md-card-actions class="card-actions">
                    <md-button class="md-primary"
                               @click="login"
                               @keyup.enter="login">
                        Login
                    </md-button>
                    <router-link
                            :to="{path: 'sign-up'}"
                             tag="md-button"
                            class="md-primary">
                        Sign Up
                    </router-link>
                </md-card-actions>
            </md-card>

        </form>
    </div>
</template>

<script>
    import UserService from '../../services/UserService'
    import Logo from '../Layout/Logo'
    export default {
        name: "LoginForm",
        components:{Logo},
        computed: {
            user:{
                get(){
                    return this.$store.state.user
                },
                set(user){
                    this.$store.commit('setState', ['user',user]);
                }
            },
            token:{
                get(){
                    return this.$store.state.token
                },
                set(token){
                    this.$store.commit('setState',['token', token])
                }
            },
            email: {
                get(){
                    return this.$store.state.email;
                },
                set(email){
                    this.$store.commit('setState', ['email',email]);
                }
            },
            password: {
                get(){
                    return this.$store.state.password
                },
                set(password){
                    this.$store.commit('setState', ['password',password]);
                }
            },
            isLogged:{
                get(){
                    return this.$store.state.isLogged
                },
                set(isLogged){
                    this.$store.commit('setState', ['isLogged', isLogged])
                }
            }
        },
        methods:{
            login(){
                UserService
                    .login(this.email,this.password)
                    .then(res => {
                        if(res.data){
                            localStorage.setItem('user', JSON.stringify(res.data.user));
                            localStorage.setItem('token', res.data.token);
                            this.user = res.data.user;
                            this.token = res.data.token;
                            this.isLogged = true;
                            this.$router.push('/dashboard');
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