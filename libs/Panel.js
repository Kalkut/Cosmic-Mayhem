sand.define('Cosmic/Panel', function () {
  return Seed.extend({
    '+init' : function (panel) {
      this.el = toDOM({
        tag : '.panel'
      })
    }
  })
})