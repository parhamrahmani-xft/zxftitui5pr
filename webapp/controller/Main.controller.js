sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], (Controller, MessageToast) => {
  "use strict";
 
  return Controller.extend("zxftitui5pr.controller.Main", {
    onInit() {
    },
 
    onSayHello() {
      const sName = this.byId("inpName").getValue().trim();
      MessageToast.show(sName ? `Hello ${sName}!` : "Please enter a name");
    }
  });
});