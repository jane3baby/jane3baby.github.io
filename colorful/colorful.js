
window.onload=function(){
function color(){
var r =parseInt(Math.random()*255);
var g =parseInt(Math.random()*255);
var b =parseInt(Math.random()*255);
      return "rgb"+"("+r+","+g+","+b+")";

}
console.log(color());
var d=["Wise men learn by other men's mistakes; fools by their own.",
    "Good company on the road is the shortest cut.",
      "If a thing is worth doing it is worth worth doing well.",
      "Nothing great was ever achieved without enthusiasm.",
      "What we acquire without sweat we give away without regret.",
      "The secret of success is constancy of purpose.",
];

var o=0;
$("#new-quote").click(function(){
    $(".left-button,body,#but2,#new-quote").css("background-color",color())
    
    $("#quote-content-text").text(d[o])
    o=o+1;
    if(o>d.length){
        o=0;
    }

    $(".quote-author").text("- Ningshu")
});

}
  
    
//     var newQuote = document.getElementById('new-quote');
//     newQuote.onclick = function(e){
     
//        write(content);
//        e.preventDefault();
//     }
    
// }
