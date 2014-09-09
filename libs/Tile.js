sand.define('Cosmic/Tile', function () {
  return Seed.extend({
    '+init' : function (tile) {
      this.type = tile.type;

      this.el = toDOM({
        tag '.tile.' + this.type;
      })
    },

    moveInDOM : function (here) {
      this.el.parentNode.removeChild(this.el);
      if(here) here.appendChild(this.el);
    }
  })
})