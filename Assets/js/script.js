
var today = moment();
//today.add(1,'hours').format('hA')

  $("#currentDay").text(today.format("MMMM Do YYYY"))



$( function() {
    $( "#sortable1, #sortable2, #sortable3" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );



function loadtable(){
var day = today.format()
var future = "future"


for(var i = 6; i < 20 ; i++){
    var day= ""
    if(i <12){
        day = i.toString() +" AM"
    }

    else{

        day = i.toString() + " PM"
    }

    
$("#tbody").append('<tr class="row"> <th scope="row" class="hour">'+day+'</th> <th scope="row" class="note '+future+'"><textarea name="event" id="event"></textarea></th> <th scope="row" class="saveBtn"><button class=".saveBtn">💾</button></th> </tr>')
}

}


loadtable()