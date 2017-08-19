function sendEmail(data){
    var sheet = data.sheet;
    data.gigs = [];
    
    for(i=0; i<data.cols.length; i++){
        var range = sheet.getRange(1, data.cols[i], data.lastRow, 1);
        var values = range.getValues();
        Logger.log("column: " + data.cols[i])
        Logger.log(range.getValues());
        
        var item = {
            date: values[data.headers["Date"] - 1],
            loadIn: values[data.headers["Load In"]]
            showTime: values[data.headers["Show Time"]],
            city: values[data.headers["City"] - 1],
            venue: values[data.headers["Venue"] - 1]
        }
        Logger.log(item);
    }
}