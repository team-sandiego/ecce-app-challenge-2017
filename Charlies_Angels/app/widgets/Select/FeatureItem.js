// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Select/FeatureItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"feature-item-row"\x3e\r\n    \x3cdiv class\x3d"feature-icon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"light-label label-node jimu-ellipsis" data-dojo-attach-point\x3d"nameNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"action-btn popup-menu-button" title\x3d"${nls.showActions}"\r\n     data-dojo-attach-point\x3d"actionBtn"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/event dojo/on dojo/dom-geometry dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./FeatureItem.html jimu/utils jimu/symbolUtils jimu/dijit/FeatureActionPopupMenu jimu/featureActions/PanTo jimu/featureActions/ShowPopup".split(" "),function(e,b,f,g,c,h,k,l,m,d,n,p,q,r){return e([k,l],{baseClass:"graphic-item",templateString:m,allowExport:!1,postCreate:function(){this.inherited(arguments);var a;this.featureLayer&&this.featureLayer.renderer&&
this.featureLayer.renderer.getSymbol?a=this.featureLayer.renderer.getSymbol(this.graphic):this.graphic.symbol&&(a=this.graphic.symbol);a&&(a=n.createSymbolNode(a,{width:36,height:36}),f.place(a,this.iconNode));this.popupMenu=p.getInstance();this.nameNode.innerHTML=this.graphic.attributes[this.displayField]||this.graphic.attributes[this.objectIdField];this.nameNode.title=this.graphic.attributes[this.displayField]||this.graphic.attributes[this.objectIdField];this.own(c(this.actionBtn,"click",b.hitch(this,
this._showActions)));this.own(c(this.iconNode,"click",b.hitch(this,this._highlight)));this.own(c(this.nameNode,"click",b.hitch(this,this._highlight)))},_highlight:function(){var a=d.toFeatureSet([this.graphic]),b=new q({map:this.map});(new r({map:this.map})).onExecute(a);b.onExecute(a)},_showActions:function(a){g.stop(a);var c=d.toFeatureSet([this.graphic]);this.popupMenu.prepareActions(c,this.allowExport).then(b.hitch(this,function(){var b=h.position(a.target);this.popupMenu.show(b)}))}})});