var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();

function mapHeaders(){
    var lastRow = sheet.getLastRow();
    var range = sheet.getRange(1, 1, lastRow);
    var values = range.getValues();
    
    var obj = {};
    
    for(i=0; i<values.length; i++){
        var header = values[i][0];
        var index = i;
        
        obj[header] = index;
    }
    
    Logger.log(obj);
}