<template>
    <div class="page-container">
        <md-app md-waterfall md-mode="fixed">
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuIsVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Dashboard</span>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuIsVisible" md-persistent="full">
                <md-toolbar class="md-transparent md-layout md-alignment-center-center" md-elevation="0">
                    <!--<Logo/>-->
                    <span>Hi {{user.firstname}}</span>
                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                    </div>
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
    import VuexHelper from '../helpers/VuexHelper';

    const properties = ['user', 'token', 'isLogged'];
    const storeProperties = VuexHelper.initComputed(...properties);

    export default {
        name: "Dashboard",
        data: () => ({
           menuIsVisible: true
        }),
        components:{DashboardView,Logo},
        computed:{...storeProperties},
        methods: {
            toggleMenu () {
                this.menuIsVisible = !this.menuIsVisible
            }
        },
        beforeCreate(){
            if(localStorage.getItem('user') !== null){
                this.isLogged = true;
                const localStorageUser = JSON.parse(localStorage.getItem('user'));
                const localStorageToken = localStorage.getItem('token');
                this.user  = localStorageUser;
                this.token = localStorageToken;
            }
            else {
                this.$router.push('/login');
            }
        }
    }
</script>


<style lang="scss" scoped>
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>