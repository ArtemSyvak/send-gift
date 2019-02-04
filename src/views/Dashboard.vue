<template>
    <div class="page-container">
        <md-app md-waterfall md-mode="fixed">
            <md-app-toolbar class="md-primary">
                <span class="md-title">Dashboard</span>
            </md-app-toolbar>

            <md-app-drawer md-permanent="full">
                <md-toolbar class="md-transparent md-layout md-gutter md-alignment-center-center" md-elevation="0">
                    <Logo/>
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Inbox</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Sent Mail</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Trash</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Spam</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <DashboardView/>
            </md-app-content>
        </md-app>
    </div>
</template>
<script>
    import Logo from '../components/Layout/Logo';
    import DashboardView from '../components/DashboardView';

    export default {
        name: "Dashboard",
        components:{DashboardView,Logo},
        computed:{
            user:{
                get(){
                    return this.$store.user
                },
                set(user){
                    this.$store.commit('setState', ['user', user])
                }
            },
            token:{
                get(){
                    return this.$store.token
                },
                set(token){
                    this.$store.commit('setState', ['token', token])
                }
            },
            isLogged:{
                get(){
                    return this.$store.isLogged
                },
                set(isLogged){
                    this.$store.commit('setState', ['isLogged', isLogged])
                }
            }
        },
        beforeCreate(){
            if(localStorage.getItem('user') !== null){
                this.isLogged = true;
                this.user  = localStorage.getItem('user');
                this.token = localStorage.getItem('token');
            }
            else {
                this.$router.push('/login');
            }
        }
    }
</script>


<style scoped>

</style>