/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.core.LocalBusyIndicator");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.core.LocalBusyIndicator",{metadata:{deprecated:true,library:"sap.ui.core",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'100px'},"height":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'100px'}}}});jQuery.sap.require("sap.ui.core.theming.Parameters");jQuery.sap.require("sap.ui.core.LocalBusyIndicatorRenderer");(function(){sap.ui.core.LocalBusyIndicator.prototype.init=function(){var r="sap.ui.core.LocalBusyIndicator:";var p="sapUiLocalBusyIndicatorBoxSize";p=sap.ui.core.theming.Parameters.get(r+p);this._iBoxSize=8;p="sapUiLocalBusyIndicatorBoxColor";this._sBoxColor=sap.ui.core.theming.Parameters.get(r+p);p="sapUiLocalBusyIndicatorBoxColorActive";this._sBoxColorActive=sap.ui.core.theming.Parameters.get(r+p);this._animateProxy=jQuery.proxy(a,this)};sap.ui.core.LocalBusyIndicator.prototype.exit=function(){jQuery.sap.clearDelayedCall(this._delayedCallId);delete this._delayedCallId};sap.ui.core.LocalBusyIndicator.prototype.onThemeChanged=function(e){if(this.getDomRef()){this.invalidate()}};sap.ui.core.LocalBusyIndicator.prototype.onAfterRendering=function(){var w=parseInt(this.getWidth(),10);var h=parseInt(this.getHeight(),10);var $=this.$();$.css("width",w+"px");$.css("height",h+"px");var i=this.getId();var b=jQuery.sap.byId(i+"-animation");var l=Math.floor(w/2);l-=Math.floor((5*this._iBoxSize)/2);var t=Math.floor(h/2)-Math.floor(this._iBoxSize/2);b.css("left",l+"px");b.css("top",t+"px");if(!this._$left){this._$left=jQuery.sap.byId(i+"-leftBox")}if(!this._$middle){this._$middle=jQuery.sap.byId(i+"-middleBox")}if(!this._$right){this._$right=jQuery.sap.byId(i+"-rightBox")}this._delayedCallId=jQuery.sap.delayedCall(0,this,this._animateProxy)};var a=function(){if(this.getDomRef()){var t=this;var $,b,c;var d="",e="";if(t._$left){$=t._$left}else{return}if(t._$middle){b=t._$middle}else{return}if(t._$right){c=t._$right}else{return}if(t._sBoxColor){d=t._sBoxColor}else{return}if(t._sBoxColorActive){e=t._sBoxColorActive}else{return}$.css("background-color",e);setTimeout(function(){$.css("background-color",d);b.css("background-color",e);setTimeout(function(){b.css("background-color",d);c.css("background-color",e);setTimeout(function(){c.css("background-color",d)},150)},150)},150);this._delayedCallId=jQuery.sap.delayedCall(1200,this,this._animateProxy)}}}());
