var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();

function checkAnnounce(){
    var row = mapHeaders("Ready to Announce?");
    var lastCol = sheet.getLastColumn();
    var range = sheet.getRange(row, 1, 1, lastCol);
}