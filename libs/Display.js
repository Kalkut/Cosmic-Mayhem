sand.define('Cosmic/Display', function  () {
  return Seed.extend({
    '+init' : function (display) {
      this.type = display.type;
      this.frame = display.frame;
      this.panel = display.panel;

      if(this.type === 'figure:legend') {
        this.el = toDOM({
          tag : '.display',
          children : [this.frame.el,this.panel.el]
        })
      }
    },

    stick : function (DOMObject)  {
      this.el.appendChild(DOMObject.el);
    },

    load : function (DOMObject) {
      DOMObject ? DOMObject.appendChild(this.el) : document.body.appendChild(this.el);
    }
  })
})