sap.ui.define([
    "sap/ui/core/format/DateFormat"
], function(DateFormat) {
    "use strict";

    return {
        // formatTime: function (sValue) {
        //     if (sValue) {
        //         var oTimeFormat = DateFormat.getTimeInstance({
        //             pattern: "HH:mm:ss"
        //         });
        //         var oDate = new Date(sValue);
        //         return oTimeFormat.format(oDate);
        //     }
        //     return sValue;
        // },
        

        formatCreationDate: function(value) {
            if (value) {
                var oDateFormat = DateFormat.getDateTimeInstance({
                    pattern: "dd/MM/yyyy"
                });
                return oDateFormat.format(new Date(value));
            }
            return value;
        }
    };
});
