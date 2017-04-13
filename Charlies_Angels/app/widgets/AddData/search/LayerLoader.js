// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/promise/all dojo/Deferred dojo/json dojo/i18n!../nls/strings ./util esri/lang esri/request esri/arcgis/utils esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/layers/ArcGISTiledMapServiceLayer esri/layers/DynamicLayerInfo esri/layers/FeatureLayer esri/layers/ImageParameters esri/layers/ImageServiceParameters esri/layers/KMLLayer esri/layers/LayerDrawingOptions esri/layers/MosaicRule esri/layers/RasterFunction esri/layers/VectorTileLayer esri/layers/WMSLayer esri/dijit/PopupTemplate esri/InfoTemplate esri/renderers/jsonUtils jimu/utils".split(" "),
function(w,r,m,x,h,p,t,y,e,n,z,A,B,C,D,u,E,F,G,H,I,J,K,L,v,M,N,O){return w(null,{item:null,itemUrl:null,map:null,serviceUrl:null,constructor:function(a){r.mixin(this,a)},addItem:function(a,b){var c=new h;this.map=b;this.item=a;this.itemUrl=this._checkMixedContent(a.itemUrl);this.serviceUrl=this._checkMixedContent(a.url);if("Feature Service"===a.type)return this._addFeatureService();if("Image Service"===a.type)return this._addImageService();if("KML"===a.type)return this._addKML();if("Map Service"===
a.type)return this._addMapService();if("Vector Tile Service"===a.type)return this._addVectorTileService();if("WMS"===a.type)return this._addWMS();console.warn("Unsupported item type: ",a.type);c.resolve(null);return c},_addFeatureService:function(){var a=this,b=new h,c=this.serviceUrl,f=this.item,d={},k=null,l=[],g=[];a._readItemJsonData().then(function(b){(d=b||{},d.layers)&&0<d.layers.length&&m.forEach(d.layers,function(a){"undefined"!==typeof a.id&&null!==a.id&&(null===k&&(k=[]),k.push(a.id))});
return a._readRestInfo(c)}).then(function(b){b&&"string"===typeof b.type&&"Feature Layer"===b.type?(b=new u(c,{id:a._generateLayerId(),outFields:["*"]}),l.push(a._waitForLayer(b))):b&&b.layers&&0<b.layers.length&&m.forEach(b.layers,function(b){var d=!0;null!==k&&0<k.length&&(d=m.some(k,function(a){return a===b.id}));d&&(d=new u(c+"/"+b.id,{id:a._generateLayerId(),outFields:["*"]}),l.push(a._waitForLayer(d)))});return x(l)}).then(function(a){m.forEach(a,function(a){g.push(a)});g.reverse();return g}).then(function(){m.forEach(g,
function(b){var c=a._processFeatureLayer(b,f,d);b.arcgisProps={title:c.title};b._titleForLegend=c.title;e.isDefined(b.title)||(b.title=c.title);a._addLayer(b)})}).then(function(){b.resolve(g)}).otherwise(function(a){b.reject(a)});return b},_addImageService:function(){var a=this,b=new h;a._readItemJsonData().then(function(b){return a._newImageServiceLayer(b||{})}).then(function(c){a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addKML:function(){var a=this,b=new h;a._newKMLLayer().then(function(c){c&&
(c.title=a.item.title);a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addMapService:function(){var a=this,b=new h;a._readItemJsonData().then(function(b){return a._newMapServiceLayer(b||{})}).then(function(c){a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addVectorTileService:function(){var a=this,b=new h;a._newVectorTileLayer().then(function(c){a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addWMS:function(){var a=
this,b=new h;a._readItemJsonData().then(function(b){return a._newWMSLayer(b||{})}).then(function(c){c&&(c.title=a.item.title);a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addLayer:function(a){var b=this.item;a&&(a.xtnItemId=b.id,a.xtnAddData=!0,!a.arcgisProps&&b&&(a.arcgisProps={title:b.title},a._titleForLegend=b.title),e.isDefined(a.title)||(a.title=b.title),a._wabProperties={itemLayerInfo:{itemId:b.id,itemUrl:this.itemUrl,portalUrl:b.portalUrl}},this.map.addLayer(a))},
_checkMixedContent:function(a){return y.checkMixedContent(a)},_checkUrl:function(a){return z._checkUrl(a)},_checkVectorTileUrl:function(a,b){var c=new h;if(function(a,b){return-1!==a.indexOf(b,a.length-b.length)}(a,".json"))return b.styleUrl=a,c.resolve(a),c;var f={url:null,content:{},handleAs:"json",callbackParamName:"callback"};this.itemUrl?(f.url=this.itemUrl+"/resources/styles/root.json",n(f,{}).then(function(){b.styleUrl=f.url;c.resolve(f.url)}).otherwise(function(){f.url=a+"/resources/styles/root.json";
n(f,{}).then(function(){b.styleUrl=f.url;c.resolve(f.url)}).otherwise(function(){b.url=a;c.resolve(a)})})):(f.url=a+"/resources/styles/root.json",n(f,{}).then(function(){b.styleUrl=f.url;c.resolve(f.url)}).otherwise(function(){b.url=a;c.resolve(a)}));return c},_generateLayerId:function(){return this._generateLayerIds(1)[0]},_generateLayerIds:function(a){var b,c=[];for(b=0;b<a;b++)c.push(this._generateRandomId());return c},_generateRandomId:function(){var a=null,a="function"===typeof Date.now?Date.now():
(new Date).getTime(),b=(""+Math.random()).replace("0.","r");return(a+""+b).replace(/-/g,"")},_makeFeatureLayerTitle:function(a,b,c){var f,d,k;try{if(b&&c&&b===c||b&&c&&(f=c.indexOf(b),0===f&&(d=c.substring(f+b.length+1),13<=d.length&&(k=/^\d+$/,k.test(d)))))return b}catch(l){}return a.replace("{serviceName}",b).replace("{layerName}",c)},_newImageServiceLayer:function(a){var b=new h,c=this._generateLayerId(),f=this.serviceUrl,d={mapLayerId:c,bandIds:null,format:null,compressionQuality:null,opacity:1,
visibility:!0};e.isDefined(a.visibility)&&!1===a.visibility&&(d.visibility=!1);e.isDefined(a.opacity)&&(d.opacity=a.opacity);e.isDefined(a.minScale)&&!e.isDefined(d.minScale)&&(d.minScale=a.minScale);e.isDefined(a.maxScale)&&!e.isDefined(d.maxScale)&&(d.maxScale=a.maxScale);e.isDefined(a.refreshInterval)&&!e.isDefined(d.refreshInterval)&&(d.refreshInterval=a.refreshInterval);!a.popupInfo||d.popupInfo||d.disablePopup||(d.popupInfo=a.popupInfo);a.renderingRule&&!d.renderingRule&&(d.renderingRule=a.renderingRule,
a.renderingRule.functionName&&(d.renderingRule.rasterFunction=a.renderingRule.functionName));a.bandIds&&!d.bandIds&&(d.bandIds=a.bandIds);a.mosaicRule&&!d.mosaicRule&&(d.mosaicRule=a.mosaicRule);a.format&&!d.format&&(d.format=a.format);e.isDefined(a.compressionQuality)&&!e.isDefined(d.compressionQuality)&&(d.compressionQuality=a.compressionQuality);!a.layerDefinition||!a.layerDefinition.definitionExpression||e.isDefined(d.layerDefinition)&&e.isDefined(d.layerDefinition.definitionExpression)||(d.layerDefinition=
d.layerDefinition||{},d.layerDefinition.definitionExpression=a.layerDefinition.definitionExpression);a=new F;null!==d.bandIds&&(a.bandIds=d.bandIds);null!==d.format&&(a.format=d.format,null!==d.compressionQuality&&(a.compressionQuality=d.compressionQuality));d.renderingRule&&d.renderingRule.rasterFunction&&(c=new J(d.renderingRule),a.renderingRule=c);d.mosaicRule&&(c=new I(d.mosaicRule),a.mosaicRule=c);e.isDefined(d.noData)&&(a.noData=d.noData);e.isDefined(d.noDataInterpretation)&&(a.noDataInterpretation=
d.noDataInterpretation);e.isDefined(d.interpolation)&&(a.interpolation=d.interpolation);a={imageServiceParameters:a,opacity:d.opacity,visible:d.visibility};e.isDefined(d.mapLayerId)&&(a.id=d.mapLayerId);e.isDefined(d.minScale)&&(a.minScale=d.minScale);e.isDefined(d.maxScale)&&(a.maxScale=d.maxScale);e.isDefined(d.refreshInterval)&&(a.refreshInterval=d.refreshInterval);e.isDefined(d.resourceInfo)&&(a.resourceInfo=d.resourceInfo);f=new B(this._checkUrl(f),a);this._waitForLayer(f).then(function(a){d.layerDefinition&&
d.layerDefinition.definitionExpression&&a.setDefinitionExpression(d.layerDefinition.definitionExpression,!0);b.resolve(a)},function(a){b.reject(a)});return b},_newInfoTemplate:function(a,b){if(a)try{return new v({description:a.description,title:a.title,showAttachments:a.showAttachments,fieldInfos:a.fieldInfos,mediaInfos:a.mediaInfos})}catch(f){console.error(f)}var c=new M;e.isDefined(b)&&c.setTitle(b);return c},_newKMLLayer:function(){var a={id:this._generateLayerId()},a=new G(this.serviceUrl,a);
return this._waitForLayer(a)},_newMapServiceLayer:function(a){var b=this,c=new h,f=this.serviceUrl,d=this._generateLayerId();n({url:f,content:{f:"json"},handleAs:"json",callbackParamName:"callback"},{}).then(function(k){var l=null,l={id:d};if(k.tileInfo)l=new C(f,l);else if(k&&k.supportedImageFormatTypes&&-1!==k.supportedImageFormatTypes.indexOf("PNG32")&&(l.imageParameters=new E,l.imageParameters.format="png32"),l=new A(f,l),a&&a.layers&&0<a.layers.length){var g=[],e,h=[],n,p=[],q;m.forEach(a.layers,
function(b){b.layerDefinition&&b.layerDefinition.definitionExpression&&(g[b.id]=b.layerDefinition.definitionExpression);if(b.layerDefinition&&b.layerDefinition.source){e=null;q=b.layerDefinition.source;if("mapLayer"===q.type){var d=m.filter(k.layers,function(a){return a.id===q.mapLayerId});d.length&&(e=r.mixin(d[0],b))}else e=r.mixin({},b);e&&(e.source=q,delete e.popupInfo,e=new D(e),a.visibleLayers&&(d="string"===typeof a.visibleLayers?a.visibleLayers.split(","):a.visibleLayers,-1<m.indexOf(d,b.id)?
e.defaultVisibility=!0:e.defaultVisibility=!1),h.push(e))}b.layerDefinition&&b.layerDefinition.source&&b.layerDefinition.drawingInfo&&(n=new H(b.layerDefinition.drawingInfo),p[b.id]=n)});0<g.length&&l.setLayerDefinitions(g);0<h.length&&(l.setDynamicLayerInfos(h,!0),0<p.length&&l.setLayerDrawingOptions(p,!0))}b._waitForLayer(l).then(function(d){var f=null;m.forEach(d.layerInfos,function(d){var c=null;a&&m.some(a.layers,function(a){if(d.id===a.id)return c=a,!0});var e=null;c&&c.popupInfo&&(e=c.popupInfo);
e&&(null===f&&(f={}),f[d.id]={infoTemplate:b._newInfoTemplate(e,d.name)})});null===d.infoTemplates&&f&&(d.infoTemplates=f);c.resolve(d)},function(a){c.reject(a)})},function(a){c.reject(a)});return c},_getVisibleFeatureLayers:function(a,b){if(!a||!b||0===b.length)return[];var c=","+b+",",f=[],d,e=",";for(d=0;d<a.length;d++)if(null!==a[d].subLayerIds){if(-1===c.indexOf(","+a[d].id+",")||-1<e.indexOf(","+a[d].id+","))e+=a[d].subLayerIds.toString()+","}else-1<c.indexOf(","+a[d].id+",")&&-1===e.indexOf(","+
a[d].id+",")&&f.push(a[d].id);return f},_newPopupInfo:function(a,b){if(a&&a.fields){var c={title:a.name,fieldInfos:[],description:null,showAttachments:!0,mediaInfos:[]};"string"===typeof b&&0<b.length&&(c.title=b);m.forEach(a.fields,function(a){var b=O.getDefaultPortalFieldInfo(a);b.visible=!0;b.isEditable=a.editable;c.fieldInfos.push(b)});return c}return null},_newVectorTileLayer:function(){var a=this,b=new h,c={},e=this.serviceUrl,d=this._generateLayerId();"string"===typeof e&&0<e.length?this._checkVectorTileUrl(e,
c).then(function(c){"string"===typeof c&&0<c.length?(c=a._checkMixedContent(c),c=new K(c,{id:d,opacity:1,visible:!0}),a._waitForLayer(c).then(function(a){b.resolve(a)},function(a){b.reject(a)})):b.resolve(null)},function(a){b.reject(a)}):b.resolve(null);return b},_newWMSLayer:function(){var a={id:this._generateLayerId()},a=new L(this.serviceUrl,a),b=this,a=this._waitForLayer(a);a.then(function(a){b._setWMSVisibleLayers(a)});return a},_processFeatureLayer:function(a,b,c){var f=this,d=t.search.featureLayerTitlePattern,
k=null;c&&c.layers&&0<c.layers.length?m.some(c.layers,function(c){var g,h,l,m=!1;if(c.id===a.layerId){c.popupInfo&&(g=c.popupInfo,g=p.parse(p.stringify(g)),g=new v(g),a.setInfoTemplate(g),m=!0);e.isDefined(c.showLabels)&&a.setShowLabels(c.showLabels);e.isDefined(c.refreshInterval)&&a.setRefreshInterval(c.refreshInterval);e.isDefined(c.showLegend)&&console.log("");e.isDefined(c.timeAnimation)&&!1===c.timeAnimation&&console.log("");if(g=c.layerDefinition)g.definitionExpression&&a.setDefinitionExpression(g.definitionExpression),
g.displayField&&a.displayField(g.displayField),g.drawingInfo&&(g.drawingInfo.renderer&&(h=p.parse(p.stringify(g.drawingInfo.renderer)),l=N.fromJson(h),h.type&&"classBreaks"===h.type&&(l.isMaxInclusive=!0),a.setRenderer(l)),e.isDefined(g.drawingInfo.transparency)&&a.setOpacity(1-g.drawingInfo.transparency/100)),e.isDefined(g.minScale)&&a.setMinScale(g.minScale),e.isDefined(g.maxScale)&&a.setMaxScale(g.maxScale),e.isDefined(g.defaultVisibility)&&!1===g.defaultVisibility&&a.setVisibility(!1);m||f._setFeatureLayerInfoTemplate(a,
c.popupInfo);k={url:a.url,id:a.id,itemId:b.id,title:f._makeFeatureLayerTitle(d,b.title,a.name)};return!0}}):(k={url:a.url,id:a.id,itemId:b.id,title:f._makeFeatureLayerTitle(d,b.title,a.name)},f._setFeatureLayerInfoTemplate(a,null,k.title));return k},_readItemJsonData:function(){return n({url:this.itemUrl+"/data",content:{f:"json"},handleAs:"json"},{})},_readRestInfo:function(a){return n({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"},{})},_setFeatureLayerInfoTemplate:function(a,
b,c){b||(b=this._newPopupInfo(a,c));b=this._newInfoTemplate(b,c);a.setInfoTemplate(b)},_setWMSVisibleLayers:function(a){var b=[];a&&(m.some(a.layerInfos,function(a){if("string"===typeof a.name&&0<a.name.length)if(10>b.length)b.push(a.name);else return!0}),10>=b.length&&a.setVisibleLayers(b))},_waitForLayer:function(a){var b=new h,c=[];if(a.loaded)return b.resolve(a),b;if(a.loadError)return b.reject(a.loadError),b;var e=function(){m.forEach(c,function(a){a.remove()})};c.push(a.on("load",function(a){e();
b.resolve(a.layer)}));c.push(a.on("error",function(a){e();a=a.error;try{a.message&&-1!==a.message.indexOf("Unable to complete")?(console.warn("layerAccessError",a),b.reject(Error(t.search.layerInaccessible))):b.reject(a)}catch(k){b.reject(a)}}));return b}})});