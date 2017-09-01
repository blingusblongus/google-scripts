var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();

function mapHeaders(query){
    //Returns row number of query, else returns object with all row number
    
    var lastRow = sheet.getLastRow();
    var range = sheet.getRange(1, 1, lastRow);
    var values = range.getValues();
    
    var map = {};
    
    for(i=0; i<values.length; i++){
        var header = values[i][0];
        var row = i + 1;
        
        map[header] = row;
    }
    
    if(query){
        return map[query];
    }else{
        return map;
    }
}