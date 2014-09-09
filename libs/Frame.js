sand.define('Cosmic/Frame', function () {
  return Seed.extend({
    '+init' : function (frame) {
      this.type = frame.type
      this.el = toDOM({
        tag : '.frame.' + this.type
      })
    },

    stick : function (DOMObject)  {
      this.el.appendChild(DOMObject.el);
    }
  })
})