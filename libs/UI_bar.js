sand.define('Cosmic/UI_bar', function () {
  return Seed.extend({
    '+init' : function (ui_bar) {
      this.elements = ui_bar.elements;
      this.size = this.elements.length;
      this.elementsIcons = [];
      this.elementsHTML = [];

      for(var i = 0; i < this.size ; i++) {
        //this.elementsIcons.push(this.elements[i].icon);
        this.elementsHTML.push(toDOM({tag : '.UI_element.' + this.elements[i].name}));
      }

      this.el = toDOM({
        tag : '.UI_bar',
        children : this.elementsHTML,
      })
    }
  })
})