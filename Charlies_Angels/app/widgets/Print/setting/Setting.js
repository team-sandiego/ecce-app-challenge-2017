// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"dijit/form/SimpleTextarea":function(){define(["dojo/_base/declare","dojo/dom-class","dojo/sniff","./TextBox"],function(l,n,m,b){return l("dijit.form.SimpleTextarea",b,{baseClass:"dijitTextBox dijitTextArea",rows:"3",cols:"20",templateString:"\x3ctextarea ${!nameAttrSetting} data-dojo-attach-point\x3d'focusNode,containerNode,textbox' autocomplete\x3d'off'\x3e\x3c/textarea\x3e",postMixInProperties:function(){!this.value&&this.srcNodeRef&&(this.value=this.srcNodeRef.value);this.inherited(arguments)},
buildRendering:function(){this.inherited(arguments);m("ie")&&this.cols&&n.add(this.textbox,"dijitTextAreaCols")},filter:function(b){b&&(b=b.replace(/\r/g,""));return this.inherited(arguments)},_onInput:function(b){if(this.maxLength){var e=parseInt(this.maxLength),d=this.textbox.value.replace(/\r/g,""),e=d.length-e;if(0<e){var k=this.textbox;if(k.selectionStart){var f=k.selectionStart,h=0;m("opera")&&(h=(this.textbox.value.substring(0,f).match(/\r/g)||[]).length);this.textbox.value=d.substring(0,f-
e-h)+d.substring(f-h);k.setSelectionRange(f-e,f-e)}else this.ownerDocument.selection&&(k.focus(),d=this.ownerDocument.selection.createRange(),d.moveStart("character",-e),d.text="",d.select())}}this.inherited(arguments)}})})},"widgets/Print/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Print/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n\r\n        \x3ctd class\x3d"first"\x3e*${nls.serviceURL}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n            data-dojo-attach-point\x3d"serviceURL"\r\n            required\x3d"true" data-dojo-props\x3d"style:{width:\'100%\'}"/\x3e\r\n          \x3c/td\x3e\r\n\r\n          \x3ctd\x3e\x3cdiv data-dojo-attach-point\x3d"checkProcessDiv" style\x3d"display:none"\x3e\r\n            \x26nbsp;\x26nbsp;\x3cimg data-dojo-attach-point\x3d"checkImg" width\x3d"20px" height\x3d"20px" src\x3d""\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultTitle}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n            data-dojo-attach-point\x3d"defaultTitle" data-dojo-attach-event\x3d"Blur:_onTitleBlur" placeHolder\x3d"ArcGIS WebMap"\r\n            data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultAuthor}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" placeHolder\x3d"Web AppBuilder for ArcGIS"\r\n            data-dojo-attach-point\x3d"defaultAuthor" data-dojo-attach-event\x3d"Blur:_onAuthorBlur" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultCopyright}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3ctextarea data-dojo-attach-point\x3d"defaultCopyright" name\x3d"copyright"\r\n                      data-dojo-attach-event\x3d"Blur:_onCopyrightBlur"\r\n                      data-dojo-type\x3d"dijit/form/SimpleTextarea"\r\n                      style\x3d"width:100%;height:60px;resize:none;"\x3e\x3c/textarea\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr style\x3d"display: none"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultFormat}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"defaultFormat"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr style\x3d"display: none"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultLayout}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"defaultLayout"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr style\x3d"display: none"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.advancedOption}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"showAdvancedOptionChk"\r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n                data-dojo-props\x3d"checked:true"\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Print/setting/css/style.css":".jimu-widget-print-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-print-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-print-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-print-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-print-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px; min-width: 200px;}.jimu-widget-print-setting .input-table \x3e tbody \x3e tr \x3e .second{width:650px;}",
"*now":function(l){l(['dojo/i18n!*preload*widgets/Print/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/Deferred dojo/dom-style dojo/dom-attr esri/request jimu/dijit/Message jimu/portalUtils jimu/portalUrlUtils jimu/utils dojo/store/Memory dijit/form/ValidationTextBox dijit/form/ComboBox jimu/dijit/CheckBox dijit/form/SimpleTextarea".split(" "),function(l,n,m,b,r,e,d,k,f,h,t,p,g,q){return l([n,m],{baseClass:"jimu-widget-print-setting",memoryFormat:new q,memoryLayout:new q,_portalPrintTaskURL:null,
validUrl:!0,startup:function(){this.inherited(arguments);this.setConfig(this.config);k.set(this.checkImg,"src",require.toUrl("jimu")+"/images/loading.gif");this.serviceURL.validator=b.hitch(this,this.validator);this.own(r(this.serviceURL,"Change",b.hitch(this,this.onUrlChange)))},validator:function(a){if(!this.validUrl)return this.serviceURL.invalidMessage=this.nls.urlNotAvailable,!1;var c=p.getNewPrintUrl(this.appConfig.portalUrl);if(a===c||/^https?:\/\/.+sharing\/tools\/newPrint$/.test(a)||/^https?:\/\/.+\/GPServer\//.test(a))return!0;
this.serviceURL.invalidMessage=this.nls.notPrintTask;return!1},onUrlChange:function(){this.validUrl=!0;if(this.serviceURL.validate()){var a=this.serviceURL.get("value");if(a){d.set(this.checkProcessDiv,"display","");this.memoryFormat.data={};this.memoryLayout.data={};this.defaultFormat.set("store",this.memoryFormat);this.defaultLayout.set("store",this.memoryLayout);this.defaultFormat.set("value","");this.defaultLayout.set("value","");d.set(this.defaultFormat.domNode.parentNode.parentNode,"display",
"none");d.set(this.defaultLayout.domNode.parentNode.parentNode,"display","none");var c=p.setHttpProtocol(this.serviceURL.get("value")),b=p.getNewPrintUrl(this.appConfig.portalUrl);c===b||/sharing\/tools\/newPrint$/.test(c)?d.set(this.checkProcessDiv,"display","none"):this._getPrintTaskInfo(a)}}},_getPrintTaskInfo:function(a){f({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback",timeout:6E4,load:b.hitch(this,this._handlePrintInfo),error:b.hitch(this,this._handleError)})},_handleError:function(){d.set(this.checkProcessDiv,
"display","none");this.validUrl=!1;this.serviceURL.validate()},_handlePrintInfo:function(a){d.set(this.checkProcessDiv,"display","none");d.set(this.defaultFormat.domNode.parentNode.parentNode,"display","");d.set(this.defaultLayout.domNode.parentNode.parentNode,"display","");var c=!1;if(a&&a.parameters)for(var b=a.parameters.length,e=0;e<b;e++){var g=a.parameters[e];if("Format"===g.name||"Layout_Template"===g.name){for(var f=a.parameters[e].choiceList,k=f.length,c=[],h=0;h<k;h++)c.push({name:f[h],
id:f[h]});f=a.parameters[e].defaultValue;"Format"===g.name?(this.memoryFormat.data=c,this.defaultFormat.set("store",this.memoryFormat),this.config.serviceURL===this.serviceURL.get("value")&&this.config.defaultFormat?this.defaultFormat.set("value",this.config.defaultFormat):this.defaultFormat.set("value",f)):(this.memoryLayout.data=c,this.defaultLayout.set("store",this.memoryLayout),this.config.serviceURL===this.serviceURL.get("value")&&this.config.defaultLayout?this.defaultLayout.set("value",this.config.defaultLayout):
this.defaultLayout.set("value",f));c=!0}}c||(this.validUrl=!1,this.serviceURL.validate())},setConfig:function(a){this.config=a;this.loadPrintURL(a);a.defaultTitle?this.defaultTitle.set("value",g.stripHTML(a.defaultTitle)):this.defaultTitle.set("value","ArcGIS WebMap");a.defaultAuthor?this.defaultAuthor.set("value",g.stripHTML(a.defaultAuthor)):this.defaultTitle.set("value","Web AppBuilder for ArcGIS");a.defaultCopyright&&this.defaultCopyright.set("value",g.stripHTML(a.defaultCopyright))},_onTitleBlur:function(){this.defaultTitle.set("value",
g.stripHTML(this.defaultTitle.get("value")))},_onAuthorBlur:function(){this.defaultAuthor.set("value",g.stripHTML(this.defaultAuthor.get("value")))},_onCopyrightBlur:function(){this.defaultCopyright.set("value",g.stripHTML(this.defaultCopyright.get("value")))},getConfig:function(){if(!this.serviceURL.validate()){var a=new h({message:this.nls.warning,buttons:[{label:this.nls.ok,onClick:b.hitch(this,function(){a.close()})}]});return!1}this.config.serviceURL=this.serviceURL.get("value");this.config.defaultTitle=
g.stripHTML(this.defaultTitle.get("value"));this.config.defaultAuthor=g.stripHTML(this.defaultAuthor.get("value"));this.config.defaultCopyright=g.stripHTML(this.defaultCopyright.get("value"));this.config.defaultFormat=this.defaultFormat.get("value");this.config.defaultLayout=this.defaultLayout.get("value");return this.config},loadPrintURL:function(){this._getPrintTaskURL(this.appConfig.portalUrl).then(b.hitch(this,function(a){this.serviceURL.set("value",a)}))},_getPrintTaskURL:function(a){var c=new e;
if(this.config&&this.config.serviceURL)return c.resolve(this.config.serviceURL),c;t.getPortalSelfInfo(a).then(b.hitch(this,function(a){(a=a&&a.helperServices&&a.helperServices.printTask&&a.helperServices.printTask.url)?c.resolve(a):c.reject("error")}),b.hitch(this,function(a){new h({message:this.nls.portalConnectionError||a&&a.message||"portal connection error"});c.reject("error");console.error(a)}));return c}})});