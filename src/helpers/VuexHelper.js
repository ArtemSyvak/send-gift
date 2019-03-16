
class VuexHelper {
  //  create getters, setters to any property
  //  return object for computed properties in component
  initComputed = (...properties) => {
      const computedProperties = {};
      properties.map(property => {
          computedProperties[property] = {
              get(){
                  return this.$store.state[property]
              },
              set(value){
                  this.$store.commit('setState', [property, value])
              }
          }
      });
      return computedProperties;
  }
}
export default new VuexHelper();