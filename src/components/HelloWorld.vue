<template>
  <div>
    <h1>Hello World!</h1>
  </div>
</template>

<script>
  import UserService from '../services/UserService'
export default {
  name: 'HelloWorld',
    mounted(){
      UserService
          .getAllUsers()
          .then(res=>console.log(res))
          .catch(err=>console.log(err));
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
