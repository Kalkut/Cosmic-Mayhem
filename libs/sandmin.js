if(typeof window!="undefined")var sand=window.sand={};else var sand=global.sand={};(function(a){a.env=typeof window=="undefined"?"node":"browser",Array.prototype.last=String.prototype.last=function(){return this[this.length-1]},Array.prototype.each=function(a){for(var b=-1,c=this.length;++b<c;)a(this[b],b);return this};var b=function(a){var b=[];for(var c in a)b.push(c);return b};a.grains={};var c=function(a,b,c,d){this._grains={},this.exports={},this.name=a,this.innerName=a.split("/").last(),this.requires=b,this.fn=c;if(d)for(var e in d)this[e]=d[e]};c.prototype={require:function(b){return a.getGrain(b).use(this,this)},use:function(b,c,d,e){b||(b=this),c||(c=b);if(!c._grains[this.name]){c._grains[this.name]=this;for(var f=this.requires.length;f--;){var g=this.requires[f].split("->");a.getGrain(g[0]).use(this,c,d,g[1]||null)}this.fn&&(this.exports=this.fn(this.exports)||this.exports)}return b.exports[e||this.innerName]=this.exports,this.exports}},a.getGrain=function(c){if(a.grains[c])return a.grains[c];if(c.last()==="*"){var d=c.split("/").length,e={},f=c.length-2,g=c.slice(0,f);if(a.grains[c.slice(0,c.length-2)])return a.grains[c.slice(0,c.length-2)];for(var h in this.grains)if(h.slice(0,f)===g){var i=h.split("/").slice(0,d).join("/");this.grains[i]?e[i]=!0:e[i+"/*"]=!0}return a.define(c.slice(0,c.length-2),b(e))}return a.define(c)},a.define=function(a,b,d,e){return typeof b=="function"?(d=b,b=[]):typeof b=="undefined"&&(b=[]),this.grains[a]=new c(a,b,d,e)};var d=0;a.require=function(){var b=Array.prototype.slice.call(arguments);if(b.length===1){var e=new c("require-"+ ++d);return a.grains[b[0]].use(e,e,null)}var f,g=b.last();typeof g!="function"?(f=b,g=null):f=b.slice(0,b.length-1);var e=new c("require-"+ ++d);f.each(function(b){var c=b.split("->");a.getGrain(c[0]).use(e,e,null,c[1]||null)});if(g)return g(e.exports)},a.define("sand",function(){return a}),a.global=function(b,c){if(a.env==="node")return global[b]=c;window[b]=c}})(sand)