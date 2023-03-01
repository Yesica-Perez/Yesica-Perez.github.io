document.getElementById('sumar').addEventListener('click', function(){
    const persona = '{"Facebook":"facebook.com/sabrinagonzalez", "twiter": "@SabrinaEGonzalez", "instagram":"@SabiEGonzal"}'
    const obj = JSON.parse(persona);
    console.log(obj);
    document.getElementById("demo").innerHTML =
    "Facebook : facebook.com/sabrinagonzalez "+
    "|twiter : @SabrinaEGonzalez"+
    "|instagram: @SabiEGonzal";
    
   });
   