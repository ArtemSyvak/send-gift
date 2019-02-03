<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default({
      name: 'App',
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
      mounted(){
          if(localStorage.getItem('user') !== null){
            this.isLogged = true;
            this.user  = localStorage.getItem('user');
            this.token = localStorage.getItem('token');
          }
          else {
              this.$router.push('/login');
          }
      }
  })
</script>

<style lang="scss">
@import './scss/app.scss';
</style>
