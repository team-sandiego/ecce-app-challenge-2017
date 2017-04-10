// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Geoprocessing/resultrenderers/FeatureSetRenderer.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"output-label" data-dojo-attach-point\x3d"labelNode"\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"labelContent"\x3e${nls.drawnOnMap}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"clear-node" data-dojo-attach-point\x3d"clearNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"popup-menu-button" data-dojo-attach-point\x3d"exportNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-style dojo/dom-attr dojo/on dojo/dom-geometry dijit/_TemplatedMixin esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/graphicsUtils esri/renderers/SimpleRenderer esri/renderers/jsonUtils esri/InfoTemplate jimu/dijit/FeatureActionPopupMenu dojo/text!./FeatureSetRenderer.html ../BaseResultRenderer ../LayerOrderUtil ./defaultSymbol".split(" "),function(m,e,h,d,k,l,n,p,q,r,t,f,u,v,w,x,y,z,g){return m([y,p],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-draw-feature",
templateString:x,postCreate:function(){this.inherited(arguments);this.popupMenu=w.getInstance();this.value.features&&0<this.value.features.length?(this._displayText(),this._drawResultFeature(this.param,this.value)):(d.set(this.clearNode,"display","none"),d.set(this.exportNode,"display","none"),this.labelContent.innerHTML=this.nls.emptyResult)},destroy:function(){this.resultLayer&&this.map.removeLayer(this.resultLayer);this.inherited(arguments)},_displayText:function(){d.set(this.clearNode,"display",
"");k.set(this.clearNode,"title",this.nls.clear);this.own(l(this.clearNode,"click",e.hitch(this,function(){this.resultLayer&&(this.map.infoWindow.isShowing&&this.map.infoWindow.hide(),this.resultLayer.clear(),this.map.removeLayer(this.resultLayer));d.set(this.exportNode,"display","none");d.set(this.clearNode,"display","none");this.labelContent.innerHTML=this.nls.cleared})));d.set(this.exportNode,"display","");k.set(this.exportNode,"title",this.nls.exportOutput);this.own(l(this.exportNode,"click",
e.hitch(this,this._showActions)))},_showActions:function(a){this.popupMenu.prepareActions(this.value,this.config.showExportButton).then(e.hitch(this,function(){var b=n.position(a.target);this.popupMenu.show(b)}))},_drawResultFeature:function(a,b){var c;a.popup||(a.popup={enablePopup:!0,title:"",fields:[]});a.popup.enablePopup&&(c=new v(a.popup.title||"${Non-Exist-Field}",this._generatePopupContent(b)));if(this.config.shareResults&&!this.config.useDynamicSchema){if(!a.defaultValue||!a.defaultValue.geometryType)throw Error("Output parameter default value does not provide enough information to draw feature layer.");
a.defaultValue.name=a.name;this.resultLayer=new r({layerDefinition:a.defaultValue,featureSet:null},{id:this.widgetUID+a.name,infoTemplate:c})}else this.resultLayer=new q({id:this.widgetUID+a.name,infoTemplate:c});h.forEach(b.features,function(a){this.resultLayer.add(a)},this);this.resultLayer.title=a.label||a.name;this._addResultLayer(a.name);c=a.renderer;this.config.useDynamicSchema||!c?"esriGeometryPoint"===b.geometryType||"esriGeometryMultipoint"===b.geometryType?c=new f(g.pointSymbol):"esriGeometryPolyline"===
b.geometryType?c=new f(g.lineSymbol):"esriGeometryPolygon"===b.geometryType&&(c=new f(g.polygonSymbol)):c=u.fromJson(c);this.resultLayer.setRenderer(c);try{var d=t.graphicsExtent(b.features);d&&(this.resultLayer.fullExtent=d.expand(1.4),this.map.setExtent(this.resultLayer.fullExtent))}catch(A){console.error(A)}},_addResultLayer:function(a){var b=new z(this.config,this.map);try{b.calculateLayerIndex(a,this.widgetUID).then(e.hitch(this,function(a){-1!==a?this.map.addLayer(this.resultLayer,a):this.map.addLayer(this.resultLayer)}))}catch(c){console.error(c.message),
console.warn("Draw result feature set on the top of map"),this.map.addLayer(this.resultLayer)}},_generatePopupContent:function(a){var b="";h.forEach(!this.config.useDynamicSchema&&this.param.popup.fields&&0<this.param.popup.fields.length?this.param.popup.fields:a.fields,function(a){b+='\x3ctr valign\x3d"top"\x3e\x3ctd class\x3d"attr-name"\x3e'+a.alias+'\x3c/td\x3e\x3ctd class\x3d"attr-value"\x3e${'+a.name+"}\x3c/td\x3e\x3c/tr\x3e"});return'\x3cdiv class\x3d"geoprocessing-popup"\x3e\x3ctable class\x3d"geoprocessing-popup-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3ctbody\x3e'+
b+"\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e"}})});