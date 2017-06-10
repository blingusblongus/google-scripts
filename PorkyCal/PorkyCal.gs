function calendarUpdate(){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Upcoming Gigs");
    var data = sheet.getRange("C1:25").getValues();
    var transposedData = transpose(data);
    var calendar = CalendarApp.getCalendarById( "8pe9q3ppnot3bfjsuqe060erss@group.calendar.google.com");
    
    //Delete all current events
    deleteEvents(calendar);
    
    for(i=0; i<transposedData.length; i++){
        var gig = transposedData[i];
        var event = {
            date: new Date(gig[0]),
            confirmed: testForValue(gig[2], "Confirmed"),
            title: "Porky's @ " + gig[13] + " - " + gig[2],
            city: gig[14],
            contact: gig[4],
            payment: gig[15],
            showTime: gig[5]
        }
        
        calendar.createAllDayEvent(event.title, new Date(event.date), {
            location: event.city,
            description: "Time: " + event.showTime + 
            "\n" + "Contact: " + event.contact + 
            "\n" + "Payment: " + event.payment +
            "\n" + "Confirmed: " + event.confirmed
        });
        Logger.log(event);
    }   
}

function transpose(a){
  return Object.keys(a[0]).map(function (c) { return a.map(function (r) { return r[c]; }); });
}

function deleteEvents(calendar){
    var calendarEvents = calendar.getEvents(new Date(2010,0,1,0,0,0),new Date(2050,0,1,0,0,0));
    
    for(i=0; i<calendarEvents.length; i++){
        calendarEvents[i].deleteEvent();
    }
}
    
function testForValue(value, criteria){
    if(value == criteria) return true;
    return false;
}