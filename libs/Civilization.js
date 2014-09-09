sand.define('Cosmic/Civilization',['Cosmic/Species'], function (r) {
  return r.Species.extend({
    '+init' : function (civilization) {
      this.wonders = civilization.wonders;
      this.technology = civilization.technology;
      this.art = civilization.art;
      this.religion = civilization.religion;
      this.philosophy = civilization.philosophy;
      this.policies = this.policies;
    },

    develop : function () {

    },

    
  })
})