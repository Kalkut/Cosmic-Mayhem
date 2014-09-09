sand.define('Cosmos/System', function () {
  return Seed.extend({
    '+init' : function (system) {
      this.planets = system.planets;
      this.stars = system.stars;
      this.asteroidBelts = system.asteroidBelts;

    }
  })
})