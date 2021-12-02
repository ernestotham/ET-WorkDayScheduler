
var today = moment();
//today.add(1,'hours').format('hA')
// var starttime = today.add(-5,'hours').format('hhA')
// var endtime = today.add(10,'hours').format('hhA')
// let starttime = moment().add(-5,'hours').format('hhA')
// let now = moment().format('hhA')
// let endtime = moment().add(5,'hours').format('hhA')

$("#currentDay").text(today.format("MMMM Do YYYY"))


//eventlistener
$( "#table tbody" ).on( "click", "button", function() {
    var buttonid = $( this ).attr('id')
  

    console.log( buttonid );
    console.log("textarea#".concat(buttonid))
    console.log( $("textarea#".concat(buttonid)).val())
    // console.log( $('\'textarea#'+buttonid+'\'' ).val())
    appendToLocalStorage(buttonid,$("textarea#".concat(buttonid)).val())

  });


$(function () {
    $("#sortable1, #sortable2, #sortable3").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});


function notify() {
    alert( "clicked" );
  }
  $( "button" ).on( "click", notify );


function loadtableOld() {
    var day = today.format()
    var future = ""
    let counter = -5
    let starttime = moment().add(counter, 'hours').format('HHA') //time format
    let starttime2 = parseInt(starttime.substring(0, 2)) //number format
    // let now = moment().format('hhA')
    // let endtime = moment().add(5,'hours').format('hhA')

    count = 0
    for (var i = 0; i < 14; i++) {


        var day = starttime
        future = "future"
        console.log("i: " + i)
        console.log("starttime: " + parseInt(starttime.substring(0, 2)))
        console.log("day : " + day)
        console.log("starttime2 : " + starttime2)
        console.log("current: " + moment().format('HH'))

        if (parseInt(starttime.substring(0, 2)) === parseInt(moment().format('HH'))) {
            future = "present"
        }

        else if (parseInt(starttime.substring(0, 2)) < parseInt(moment().format('HH'))) {

            future = "past"
        }

        else {

            future = "future"
        }

        $("#tbody").append('<tr class="row justify-content-center"> <th scope="row" class="hour">' + day + '</th> <th scope="row" class="note w-75' + future +  '"><textarea name="event" id="event"></textarea></th> <th scope="row" class="saveBtn"><button class=".saveBtn">💾</button></th> </tr>')

        counter++
        starttime = moment().add(counter, 'hours').format('hhA')
        console.log("loop: " + starttime)
        starttime2++
        if (starttime2 === 13) {
            starttime2 = 1
        }

    }//end of for loop
}//end of loadtable function


//loadtable()

function loadtable(){
    var currentTime = moment().add(0, 'hours')
    var fiveHrsBefore = moment().add(-5, 'hours')
    var fiveHrsAfter = moment().add(5, 'hours')

    var CalRowCounter = -7
    var future = ""
    var hrs = ""
    var row = ""

    while(CalRowCounter < 11){


        row = moment().add(CalRowCounter, 'hours')
        hrs = row.format('hhA')
    
    if(row.format('hhA') === moment().format('hhA') ) {

        console.log("display Red")
        future = "present"
        

    }
    
    else if (moment().diff(row) > 0){

        console.log("display Gray")
        future = "past"
    }

    else if(moment().diff(row) < 0){

        console.log("display Green")
        future = "future"

    }

    //append row on table
    $("#tbody").append('<tr class="row justify-content-center"> <th scope="row" class="hour">' + hrs + '</th> <th scope="row" class="note w-75 ' + future + '"><textarea class="area w-100" name="event" id='+hrs+'></textarea></th> <th scope="row" class="saveBtn"><button class=".saveBtn px-2 py-3" id='+hrs+'>💾</button></th> </tr>')
    
    //load textare with local storage data
    $("textarea#".concat(hrs)).val(getLocalStorage(hrs))
    CalRowCounter++
   

    }//end of while loop

    


}


//check to see if local storage key already contains data and append to it. if it does not contain data, then appends/adds data
function appendToLocalStorage(hr,data){
  
        localStorage.setItem(hr,data)
  
    return 0;
}

//returns local storage data on array from 
function getLocalStorage(hr){

    return localStorage.getItem(hr) || []

}

function clearLocalStorage(hr){
    localStorage.removeItem(hr)
    return "cleared"
}

loadtable()