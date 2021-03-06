/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.core.CustomData");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.core.CustomData",{metadata:{library:"sap.ui.core",properties:{"key":{type:"string",group:"Data",defaultValue:null},"value":{type:"any",group:"Data",defaultValue:null},"writeToDom":{type:"boolean",group:"Data",defaultValue:false}}}});
sap.ui.core.CustomData.prototype.setValue=function(v){this.setProperty("value",v,true);var c=this.getParent();if(c&&c.getDomRef()&&this.getWriteToDom()){var k=this.getKey();if(typeof v==="string"){if((sap.ui.core.ID.isValid(k))&&(k.indexOf(":")==-1)&&(k.indexOf("sap-ui")!==0)){c.$().attr("data-"+k,v)}else{jQuery.sap.log.error("CustomData with key "+k+" should be written to HTML of "+c+" but the key is not valid (must be a valid sap.ui.core.ID without any colon and may not start with 'sap-ui').")}}else{jQuery.sap.log.error("CustomData with key "+k+" should be written to HTML of "+c+" but the value is not a string.")}}return this};
