sand.define('Cosmic/View', function  () {
  return Seed.extend({
    '+init' : function (cosmic) {
      this.el({
        tag : '.cosmic'
      })
    }
  }),

  stick : function (DOMObject)  {
    this.el.appendChild(DOMObject.el);
  },

  load : function (DOMObject) {
    DOMObject ? DOMObject.appendChild(this.el) : document.body.appendChild(this.el);
  },
})