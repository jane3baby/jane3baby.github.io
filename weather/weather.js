function getGeolocation(fun){
    $.getJSON('http://freegeoip.net/json/?callback=?',function (position){
        //  console.log(position);
         var latitude = position.latitude;
         var longitude = position.longitude;
         fun && fun({latitude:latitude,longitude:longitude})
     })
 }

 function getweather(){
     $(document).ready(function(o){
            
            getGeolocation(function(g){
                console.log(g)
                var x="lat="+g["latitude"].toString();
                var y="lon="+g["longitude"].toString();
                var api = "https://fcc-weather-api.glitch.me/api/current?";
                var url=api+x+"&"+y;
                console.log(url);
                $.getJSON(url,function(i){
                    console.log(i);
                  var address=i["name"];
                  $("#ad").text(address+",");
                  $("#country").text(i["sys"]["country"]);
                  $(".ss").text(i["main"]["temp"]+"°");
                  var weat=i["weather"][0]["main"];
                  $(".cc").text(weat);
                  $(".turn").click(function(){
                      
                      var q=$(".turn").text();
                      if(q==="C"){
                        var t =(9*i["main"]["temp"]/5+32).toFixed(1);
                        $(".ss").text(t+"°");
                        $(".turn").text("F");
                      }
                      if(q==="F"){
                          var h=(i["main"]["temp"]).toFixed(1);
                          $(".ss").text(h+"°");
                            $(".turn").text("C");
                      }
                      
                  });




                });
            });

     })
 }
 getweather()

