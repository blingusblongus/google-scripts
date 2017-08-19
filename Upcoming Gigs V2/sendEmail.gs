function sendEmail(data){
    var sheet = data.sheet;
    data.gigs = [];
    
    for(i=0; i<data.cols.length; i++){
        var range = sheet.getRange(1, data.cols[i], data.lastRow, 1);
        Logger.log("column: " + data.cols[i])
        Logger.log(range.getValues());
    }
}