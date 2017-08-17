var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();

function checkAnnounce(){
    //returns dates for which the ready to announce marker has changed
    //NOTE: Won't work for two gigs in same day unless I add another level of checking
    
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
        var key = i;
        obj[key] = {
            announced: announced[i],
            column: i
        };
    }
    
    // Check against Properties
    
    var properties = PropertiesService.getScriptProperties();
    
    var previous = properties.getProperty('previous');
    Logger.log(previous);
    var prevObj = JSON.parse(previous);
    Logger.log(prevObj);
    var different = [];

    for(key in prevObj){
        
        Logger.log(prevObj[key].announced);
        
        if(prevObj[key].announced !== obj[key].announced && obj[key].announced === 'Yes'){
            
            //Something's weird with this: it's returning null from previous[key].announced, but not when I call the specific key by string name
            
            //The properties are being stored as strings, which means I need to reconvert it to object somehow before I can access the data
            
            //Gotta figure out JSON.parse () and why it's throwing these exceptions
            
            different.push(obj[key].column);
        }
    }

    Logger.log("Different: " + different);
    
    //Call email function - nevermind - do this in control
    
    //Set as new properties
    
    var jsonObj = JSON.stringify(obj);
    properties.setProperty('previous', jsonObj);
    Logger.log('JSON: ' + jsonObj);
    
    //return differences and terminate
    return different;
}