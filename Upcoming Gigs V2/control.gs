function control() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    var data = {
        ss: ss,
        sheet: sheet
    };
    
    var cols = checkAnnounce(data);
    Logger.log(cols);
    
    if(cols.length > 0){
        data.cols = cols;
        sendEmail(data);
    }
}