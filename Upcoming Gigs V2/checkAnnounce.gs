var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();

function checkAnnounce(){
    //returns dates for which the ready to announce marker has changed
    
    //map relevant rows
    var announcedRow = mapHeaders("Ready to Announce?");
    var dateRow = mapHeaders("Date");
    var lastCol = sheet.getLastColumn();
    
    //get ranges
    var dateRange = sheet.getRange(dateRow, 2, 1, lastCol - 1);
    var announcedRange = sheet.getRange(announcedRow, 2, 1, lastCol - 1);
    
    //get values
    var dates = dateRange.getValues()[0];
    var announced = announcedRange.getValues()[0];
    
    //init properties object
    var obj = {};
    
    //fill properties object
    for(i=0; i<dates.length - 1; i++){
        var key = dates[i];
        obj[key] = announced[i];
    }
    
    Logger.log(obj);
    
    /*
    
    // Check against Properties
    
    var properties = PropertiesService.getScriptProperties();
    
    //Set as new properties
    
    var previous = properties.getProperty("previous");
    
    //return differences and terminate
    
    
    */  
}