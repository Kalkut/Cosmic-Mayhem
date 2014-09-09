sand.define('Cosmic/Star', function () {
  return Seed.extend({
    '+init' : function (star) {
      this.size = star.size;
      this.temperature = star.size;
      this.power = star.power;
      this.energy = star.energy;
      this.mass = star.mass;
      this.age;

      this.el = toDOM({
        tag : '.planet',
        style : {
          /*height :
          width : */
        }
      })

    },

    heat : function () {

    },

    fr
  })
})