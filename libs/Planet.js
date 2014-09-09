sand.define('Cosmic/Planet',['Cosmic/Species'],function (r) {
  return Seed.extend({
    '+init' : function (planet) {
      if(!planet) var planet = {};
      var numberOfSpecies = planet.numberOfSpecies || 5
      this.civilizations  = planet.civilizations || [];
      if(planet.species) this.species = planet.species;
      else {
        this.species = [];
        for (var i = 0; i < numberOfSpecies; i++) {
          this.species.push(new r.Species());
        }
      }
      this.creations = planet.creations || [];

      this.size = planet.size || 0;
      this.distance = planet.distance || 0;
      this.temperature = planet.temperature || null;
      this.mass = planet.mass || null;

      this.ressources = planet.ressources || null;
      this.polution = planet.polution || null;
      this.age = planet.age || 0;

      this.el = toDOM({
        tag : '.planet',
      })
    },

    categorize : function () {

    },

    randomize : function () {

    },
  })
})