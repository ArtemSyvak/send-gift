<template>
    <div class="authorization-form-container">

        <form class="animated fadeIn sign-up-form md-layout-item md-size-20">
            <md-card>
                <md-card-header>
                    <div class="md-title md-layout md-gutter md-alignment-center-center ">
                        <Logo/>
                    </div>
                </md-card-header>

                <md-card-content>
                    <md-field>
                        <label>First Name</label>
                        <md-input placeholder="First name"
                                  v-model="firstname">
                        </md-input>
                    </md-field>
                    <md-field>
                        <label>Last Name</label>
                        <md-input placeholder="Last name"
                                  v-model="lastname">
                        </md-input>
                    </md-field>
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
                    <router-link
                            :to="{path: 'login'}"
                            tag="md-button"
                            class="md-primary">Sign In
                    </router-link>
                    <md-button class="md-primary" @click="signUp">Create User</md-button>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>

<script>
import UserService from '../../services/UserService'
import Logo from '../Layout/Logo'
export default {
    name: "SignUpForm",
    data(){
        return{
            firstname: '',
            lastname: ''
        }
    },
    components:{Logo},
    computed:{
      user: {
          get(){
              return this.$store.state.user
          },
          set(user){
              this.$store.commit('setState',['user',user])
          }
      },
        email: {
            get(){
                return this.$store.state.email
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
        }
    },
    methods:{
       signUp(){
            UserService
                .signUp(this.firstname,this.lastname,this.email,this.password)
                .then(res=>{
                    if(res.data.user){
                       this.user = res.data.user;
                       this.$router.push('/login');
                    }
                    else return false
                })
                .catch(error => console.log(error));
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../scss/authorization.scss";
    .sign-up-form{
        align-self: center;
        .card-actions{
            justify-content: space-between;
        }
    }
</style>