// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/query","dijit/_WidgetBase"],function(k,g,d,h,l){return k([l],{baseClass:"jimu-tile-container",constructor:function(){this.items=[];this.vmargin=this.hmargin=15;this.itemSize={width:-1,height:-1}},startup:function(){this.inherited(arguments);this.containerDom=this.domNode;d.create("div",{src:this.img},this.box);this.items.forEach(g.hitch(this,function(a){this._placeItem(a)}));this.resize()},_placeItem:function(a){a.domNode&&d.place(a.domNode,
this.containerDom)},addItem:function(a){this.items.push(a);this._placeItem(a);this.resize()},addItems:function(a){this.items=this.items.concat(a);this.items.forEach(g.hitch(this,function(a){this._placeItem(a)}));this.resize()},removeItem:function(a){var b;for(b=0;b<this.items.length;b++)if(this.items[b].label===a){this.items[b].domNode?this.items[b].destroy():d.destroy(this.items[b]);this.items.splice(b,1);this.resize();break}},empty:function(){var a;for(a=0;a<this.items.length;a++)this.items[a].domNode?
this.items[a].destroy():d.destroy(this.items[a]);this.items=[]},resize:function(){var a=this.containerDom.parentElement||this.containerDom.parentNode,b=d.getMarginBox(a),c=this.containerDom;if(279<=b.w&&329>b.w)this._setNodeWidths(c,130);else if(1>=Math.abs(b.w-330))this._setNodeWidths(c,104);else{var e=d.getMarginBox(c).w-20,f=parseInt(e/104,10);0<f&&(e=parseInt(e%104/f,10),this._setNodeWidths(c,104+e))}this.setContainerHeight(b,a)},_setNodeWidths:function(a,b){h(".jimu-img-node",a).forEach(function(a){d.setStyle(a,
"width",b+"px")})},getItemSize:function(){var a={};a.width=this.itemSize.width;a.height=this.itemSize.height;return a},setContainerWidth:function(a,b){d.setStyle(this.containerDom,{width:(b.width+2*this.hmargin)*Math.floor(a.w/(b.width+2*this.hmargin))+20+"px",margin:"0px auto"})},setContainerHeight:function(a,b){var c=this._getDomHeight(".header",b),e=this._getDomHeight(".error",b),f=this._getDomHeight(".footer",b);d.setStyle(this.containerDom,{height:a.h-(c+e+f)+"px"})},setItemPosition:function(a,
b){var c={position:"relative",margin:this.vmargin+"px "+this.hmargin+"px"};0<=b.width&&(c.width=b.width+"px");0<=b.height&&(c.height=b.height+"px");d.setStyle(a.domNode,c);d.addClass(a.domNode,"jimu-float-leading")},_getDomHeight:function(a,b){var c=0,e=h(a,b)[0];e&&(e=d.getMarginBox(e))&&e.h&&(c=e.h);return c}})});