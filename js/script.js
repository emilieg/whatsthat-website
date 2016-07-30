$(document).ready(function(){
  $("#demosMenu").change(function(){
    window.location.href = $(this).find("option:selected").attr("id") + '.html';
  });

var words = ['Monosodium glutamate', 'Carmine', 'Maltodextrin', 'Casein', 'Maltose'],
currentWord = 0;


function loop(){
  $('h2').delay(4000).fadeTo(400,0,function(){
     $(this).text( words[++currentWord%words.length] + '?').fadeTo(400,1,loop);
  });
}

loop();


});




/*SCRAPS*/

//   var words = ['Monosodium glutamate', 'Carmine', 'Maltodextrin', 'Casein', 'Maltose'],
//     element = document.getElementById("ingredient"),
//     currentWord = 0;

// window.setInterval(function(){
//    currentWord++;
//    if(currentWord >= words.length) currentWord = 0;
//    element.textContent = words[currentWord];
// }, 4000);
