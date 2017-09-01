function control(column) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    var data = {
        ss: ss,
        sheet: sheet,
        lastRow: sheet.getLastRow(),
        column: column,
        headers: mapHeaders()
    };
    
    getGigData(data);
    
    Browser.msgBox("Column = " + data.column);
    Logger.log("Run at " + new Date());
    Logger.log(data.gig);
}