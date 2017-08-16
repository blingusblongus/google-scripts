var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();

function checkAnnounce(){
    //returns dates for which the ready to announce marker has changed
    
    //map relevant rows
    var announcedRow = mapHeaders("Ready to Announce?");
    var dateRow = mapHeaders("Date");
    var lastCol = sheet.getLastColumn();
    
    //get ranges
    var dateRange = sheet.getRange(dateRow, 1, 1, lastCol);
    var announcedRange = sheet.getRange(announcedRow, 1, 1, lastCol);
    
    //get values
    var dates = dateRange.getValues()[0];
    var announced = announcedRange.getValues()[0];
    
    //init properties object
    var obj = {};
    
    //fill properties object
    for(i=1; i<dates.length; i++){
        var key = dates[i];
        obj[key] = announced[i];
    }
    
    Logger.log(obj);
    
    // Check against Properties
    
    var properties = PropertiesService.getScriptProperties();
    
    var previous = properties.getProperties();
    var different = {};
    
    for(key in previous){
        if(previous[key] !== obj[key]){
            //Can I do this better?
            different[key] = key;
        }
    }
    
    Logger.log(different);
    
    //Set as new properties
    
    properties.setProperties(obj, true);
    
    //return differences and terminate

}