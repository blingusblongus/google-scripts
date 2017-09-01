function splitDate(date){
    return date.toString().split(" 00")[0];
}

function onEdit(){
    // Initialized with triggers
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var cell = sheet.getActiveCell();
    var cellValue = cell.getValue();
    var row = cell.getRow();
    var checkValue = sheet.getRange(row, 1).getValue();
    
    if(checkValue === 'Confirmed?' && cellValue === 'Yes')
    {
        var col = cell.getColumn();
        control(col);
    }
}