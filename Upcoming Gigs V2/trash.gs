// CheckAnnounce - works with script properties to check whether things have changed in a specific row to the last sheet

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();

function checkAnnounce(){
    //returns dates for which the ready to announce marker has changed
    //NOTE: Won't work for two gigs in same day unless I add another level of checking
    
    //map relevant rows
    var announcedRow = mapHeaders("Confirmed?");
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
    var prevObj = JSON.parse(previous);
    var different = [];

    for(key in prevObj){
        
        if(prevObj[key].announced !== obj[key].announced && obj[key].announced === 'Yes'){            
            different.push(obj[key].column + 1);
        }
    }
    
    //Set as new properties
    
    var jsonObj = JSON.stringify(obj);
    properties.setProperty('previous', jsonObj);
    
    //return differences
    return different;
}