function control() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    var data = {
        ss: ss,
        sheet: sheet,
        lastRow: sheet.getLastRow(),
        lastColumn: sheet.getLastColumn(),
        headers: mapHeaders()
    };
    
    var cols = checkAnnounce(data);
    Logger.log(cols);
    
    //
    cols = [2]  //Testing ONLY = SHOULD BE data.cols = cols;
    //
    
    if(cols.length > 0){
        data.cols = cols;
        getNewGigData(data);
        sendEmail(data);
    }
    
    Logger.log(data);
}