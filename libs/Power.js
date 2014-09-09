sand.define('Cosmic/Power', function ()  {
  return Seed.extend({
    '+init' : function (power) {
      this.effect = power.effect;
      this.range = power.range;
      this.magnitude = power.magnitude;
    },

    cast : function () {
      
    }
  })
})