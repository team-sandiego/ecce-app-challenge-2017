// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Splash/setting/BackgroundSelector.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"titles"\x3e${nls.background}\x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"unit-item"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-attach-point\x3d"colorFillBtn" data-dojo-props\x3d"group:\'background\'"\x3e\x3c/div\x3e\r\n    \x3clabel class\x3d""\x3e${nls.colorFill}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"hide indent" data-dojo-attach-point\x3d"colorFillOptions"\x3e\r\n    \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"backgroundColorPickerEditor"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"unit-item"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-attach-point\x3d"imageFillBtn" data-dojo-props\x3d"group:\'background\'"\x3e\x3c/div\x3e\r\n    \x3clabel class\x3d""\x3e${nls.imageFill}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"hide indent" data-dojo-attach-point\x3d"imageFillOptions"\x3e\r\n    \x3cdiv class\x3d"clearFix"\x3e\r\n      \x3cdiv class\x3d"jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"image-chooser-base" data-dojo-attach-point\x3d"imageChooser"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"file-name jimu-float-leading" data-dojo-attach-point\x3d"fileName"\x3e${nls.noFileChosen}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"hide clearFix types" data-dojo-attach-point\x3d"fillsType"\x3e\r\n      \x3cdiv class\x3d"unit-item fillstype jimu-float-leading" data-dojo-attach-point\x3d"sizeFill"\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-attach-point\x3d"fill" data-dojo-props\x3d"group:\'fillStyle\'"\x3e\x3c/div\x3e\r\n        \x3clabel class\x3d""\x3e${nls.sizeFill}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"unit-item fillstype jimu-float-leading hide" data-dojo-attach-point\x3d"sizeFit"\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-attach-point\x3d"fit" data-dojo-props\x3d"group:\'fillStyle\'"\x3e\x3c/div\x3e\r\n        \x3clabel class\x3d""\x3e${nls.sizeFit}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"unit-item fillstype jimu-float-leading" data-dojo-attach-point\x3d"sizeStretch"\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-attach-point\x3d"stretch" data-dojo-props\x3d"group:\'fillStyle\'"\x3e\x3c/div\x3e\r\n        \x3clabel class\x3d""\x3e${nls.sizeStretch}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"unit-item fillstype jimu-float-leading hide" data-dojo-attach-point\x3d"sizeCenter"\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-attach-point\x3d"center" data-dojo-props\x3d"group:\'fillStyle\'"\x3e\x3c/div\x3e\r\n        \x3clabel class\x3d""\x3e${nls.sizeCenter}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"unit-item fillstype jimu-float-leading" data-dojo-attach-point\x3d"sizeTile"\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-attach-point\x3d"tile" data-dojo-props\x3d"group:\'fillStyle\'"\x3e\x3c/div\x3e\r\n        \x3clabel class\x3d""\x3e${nls.sizeTile}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html ./ColorPickerEditor jimu/dijit/ImageChooser dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./BackgroundSelector.html jimu/dijit/RadioBtn".split(" "),function(f,b,c,d,g,e,h,k,l,m){return f([h,k,l],{templateString:m,nls:null,_defaultColor:"#485566",_defaultTransparency:0,_defaultFillType:"fill",_imageMaxSize:1024,postCreate:function(){this.backgroundColorPicker=new g({nls:this.nls},this.backgroundColorPickerEditor);
this.backgroundColorPicker.startup();this.imageChooser=new e({cropImage:!1,showSelfImg:!0,format:[e.GIF,e.JPEG,e.PNG],goldenWidth:160,goldenHeight:90,maxSize:this._imageMaxSize,label:this.nls.chooseFile},this.imageChooser);this.inherited(arguments)},startup:function(){this._initBgEvent();this._selectItem(this._defaultFillType);this.sizeType=this._defaultFillType;this.inherited(arguments)},_initBgEvent:function(){this.own(c(this.colorFillBtn,"click",b.hitch(this,function(){this._clickColorFillBtn()})));
this.own(c(this.imageFillBtn,"click",b.hitch(this,function(){this._clickImageFillBtnBtn()})));this.own(c(this.imageChooser,"imageChange",b.hitch(this,function(a,b){this._showFillsType();b&&this._setFileName(b.fileName)})));this.own(c(this.fill,"click",b.hitch(this,function(){this.sizeType="fill"})));this.own(c(this.fit,"click",b.hitch(this,function(){this.sizeType="fit"})));this.own(c(this.stretch,"click",b.hitch(this,function(){this.sizeType="stretch"})));this.own(c(this.center,"click",b.hitch(this,
function(){this.sizeType="center"})));this.own(c(this.tile,"click",b.hitch(this,function(){this.sizeType="tile"})))},getValues:function(){var a={};a.mode=this.mode;a.image=this.imageChooser.imageData;a.type=this.sizeType;a.fileName=encodeURIComponent(this.fileName.innerHTML);var b=this.backgroundColorPicker.getValues();a.color=b.color;a.transparency=b.transparency;return a},_setColorPicker:function(a){var b=this._defaultColor,c=this._defaultTransparency;a&&(b=a.color,c=a.transparency);this.backgroundColorPicker.setValues({color:b,
transparency:c})},setValues:function(a){"undefined"!==typeof a.splash&&"undefined"!==typeof a.splash.background&&(a=a.splash.background,this._setColorPicker(a),a.image&&(this.imageChooser.setDefaultSelfSrc(a.image),this._showFillsType()),a.fileName&&(this.fileName.innerHTML=decodeURIComponent(a.fileName)),a.type&&(this._selectItem(a.type),this.sizeType=a.type),"image"===a.mode?(this._selectItem("imageFillBtn"),this._clickImageFillBtnBtn()):(this._selectItem("colorFillBtn"),this._clickColorFillBtn()))},
_selectItem:function(a){(a=this[a])&&a.check&&a.check(!0)},_clickColorFillBtn:function(){d.addClass(this.colorFillOptions,"hide");d.addClass(this.imageFillOptions,"hide");d.removeClass(this.colorFillOptions,"hide");this.mode="color"},_clickImageFillBtnBtn:function(){d.addClass(this.colorFillOptions,"hide");d.addClass(this.imageFillOptions,"hide");d.removeClass(this.imageFillOptions,"hide");this.mode="image"},_hideFillsType:function(){d.addClass(this.fillsType,"hide")},_showFillsType:function(){d.removeClass(this.fillsType,
"hide")},_setFileName:function(a){this.fileName.innerHTML=a}})});