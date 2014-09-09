sand.define('Cosmic/Species', function () {
  return Seed.extend({
    '+init' : function (species) {
      if(!species) var species = {};
      this.statsNorm = species.statsNorm || 6;
      var basePopulation = species.basePopulation || 2
      var dietArray = species.dietArray || ["carnivore","herbivore","Children of Sun"];
      var baseInfluence = species.influence || 2;
      
      this.strength = species.strength || Math.floor(Math.random()*this.statsNorm + 1);
      this.intelligence = species.intelligence || Math.floor(Math.random()*this.statsNorm + 1);
      this.speed = species.speed || Math.floor(Math.random()*this.statsNorm + 1);
      this.endurence = species.endurence || Math.floor(Math.random()*this.statsNorm + 1);
      this.diet = species.diet || dietArray[Math.floor(Math.random()*dietArray.length)];
      this.aggro = species.aggro || Math.floor(Math.random()*this.statsNorm + 1);
      this.influence = species.influence || baseInfluence;
      
      
      this.population = species.population || basePopulation;
      this.hunger = species.hunger;
    },

    fight : function () {

    },

    feed : function () {

    },

    evolve : function () {

    },

    spread : function () {

    },
    
  })
})