/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.unified.library");jQuery.sap.require("sap.ui.core.Core");jQuery.sap.require("sap.ui.core.library");sap.ui.getCore().initLibrary({name:"sap.ui.unified",dependencies:["sap.ui.core"],types:["sap.ui.unified.ContentSwitcherAnimation"],interfaces:[],controls:["sap.ui.unified.ContentSwitcher","sap.ui.unified.Shell","sap.ui.unified.ShellOverlay","sap.ui.unified.SplitContainer"],elements:["sap.ui.unified.ShellHeadItem"],version:"1.18.10"});jQuery.sap.declare("sap.ui.unified.ContentSwitcherAnimation");sap.ui.unified.ContentSwitcherAnimation={None:"None",Fade:"Fade",ZoomIn:"ZoomIn",ZoomOut:"ZoomOut",Rotate:"Rotate",SlideRight:"SlideRight",SlideOver:"SlideOver"};sap.ui.base.Object.extend("sap.ui.unified._ContentRenderer",{constructor:function(c,C,o,a){sap.ui.base.Object.apply(this);this._id=C;this._cntnt=o;this._ctrl=c;this._rm=sap.ui.getCore().createRenderManager();this._cb=a||function(){}},destroy:function(){this._rm.destroy();delete this._rm;delete this._id;delete this._cntnt;delete this._cb;delete this._ctrl;if(this._rerenderTimer){jQuery.sap.clearDelayedCall(this._rerenderTimer);delete this._rerenderTimer}sap.ui.base.Object.prototype.destroy.apply(this,arguments)},render:function(){if(!this._rm){return}if(this._rerenderTimer){jQuery.sap.clearDelayedCall(this._rerenderTimer)}this._rerenderTimer=jQuery.sap.delayedCall(0,this,function(){var $=jQuery.sap.byId(this._id);var d=$.length>0;if(d){if(typeof(this._cntnt)==="string"){var c=this._ctrl.getAggregation(this._cntnt,[]);for(var i=0;i<c.length;i++){this._rm.renderControl(c[i])}}else{this._cntnt(this._rm)}this._rm.flush($[0])}this._cb(d)})}});sap.ui.unified._iNumberOfOpenedShellOverlays=0;
