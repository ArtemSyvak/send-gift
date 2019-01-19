<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
          primary: #3fffbe, // The primary color of your brand
          accent: #1a11e8 // The secondary color of your brand
  ));

  @import "~vue-material/dist/theme/all";
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
