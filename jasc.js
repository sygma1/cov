function check() {
  verif=true
  isalphabetic(document.getElementById("name").value)
  isalphabetic(document.getElementById("prename").value)
  agee(document.getElementById("wa9et").value)
  isnumeric(document.getElementById("numero").value)
  isalphanumeric(document.getElementById("mail").value)
  return verif
}
function agee(x) 
{
  if (x.length<=0) {
    alert("pas de 'age'")
    verif=false
  }
  age=x
}
function isalphabetic(x) 
{
  var x=x.toLowerCase()
  alph="azertyuiopqsdfghjklmwxcvbn"
  var i=0
  var f=true
  if (x.length<3) {
    var f=false
  }
  while ((f)&&i<(x.length)) 
  {
    if ((alph.indexOf(x[i]))<0) 
    {
      var f=false
    }
    var i=i+1
  }
  if (f==false) 
  {
    alert("pas alphebetic")
    verif=false
  }
}
function isnumeric(x) 
{
  num="1234567890"
  var i=0
  var f=true
  while ((f) && i<(x.length)) 
  {
    if (x.length!=8 || x[0]==1) 
    {
      var f=false
    }
    if ((num.indexOf(x[i]))<0) 
    {
      var f=false
    }
    var i=i+1
  }
  if (f==false) 
  {
    alert("pas numeric")
    verif=false
  }
}
function isalphanumeric(x) {
  var x=x.toLowerCase()
  stuff="1234567890azertyuiopqsdfghjklmwxcvbn.@"
  var i=0
  var f=true
  if (x.length<0||x.length>50) 
  {
    var f=false
  }
  while ((f)&&i<(x.length)) 
  {
    if ((stuff.indexOf(x[i]))<0) 
    {
      var f=false
    }
    var i=i+1
  }
  if (f==false) 
  {
    alert("pas alphanumeric");
    verif=false
  }
  if (x.indexOf("@") != x.lastIndexOf("@")) 
  {
    alert("il y a deux '@'");
    verif=false
  }
  c=0
  for (let i = (x.indexOf("@")); i < x.length; i++) 
  {
    if (x[i]==".") 
    {
      c=c+1;
    }
  }
  if (c!=1) 
  {
    alert("pas de '.'");
    verif=false
  }
  for (let i = (x.indexOf("@")+1); i < (x.indexOf(".")-1); i++) 
  {
    if (i<3) {
      verif = false
      alert("ch2")
    }
  }
  s=true
  while ((s)) 
  {
    for (let i = ((x.indexOf("."))+1); i < x.length; i++) 
    {
      if (i<2 || i>4) 
      {
        verif = false
        alert("ch3")
        var s =false
      }
      
    }
    s=false
  }
}
function count() 
{
  
  if ((check())) 
  {
    score=0
    alergie=false
    if (document.getElementById('aaa1').checked == true) 
    {
      score=score+1
      alergie=true
    }
    if (document.getElementById('aaa2').checked == true) {
      score=score+1
      alergie=true
    }
    if (document.getElementById('aaa3').checked == true) 
    {
      score=score+1
      alergie=true
    }
    if (document.getElementById('aaa4').checked == true) 
    {
      score=score+1
      alergie=true
    }
    if (document.getElementById('g').checked == true) {
      score=score+3
    }
    if (document.getElementById('h').checked == true) {
      score=score+2
    }
    if (document.getElementById('i1').checked == true) {
      score=score+3
    }
    if (document.getElementById('i2').checked == true) {
      score=score+2
    }
    if (document.getElementById('j').checked == true) {
      score=score+5
    }
    if (document.getElementById('k').checked == true) {
      score=score+5
    }
    if (document.getElementById('l').checked == true) {
      score=score+5;
    }
    if (document.getElementById('m').checked == true) {
      score=score+2;
    }
    if (document.getElementById('n').checked == true) {
      score=score+2;
    }
    if (document.getElementById('o').checked == true) {
      score=score+1;
    }
    if (score<=7 && age>=65) 
    {
      anser='Vous devirez aller bien, mais faites attention à vous, et n’oubliez pas de respecter les gestes barrières'
      document.getElementById("form").innerHTML = ('<div style="background-color:yellow;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+anser+'</h4></br>');
    }
    if (score<=7 && age<=65) 
    {
      anser='Vous devirez aller bien, mais vous devriez rester confiné chez vous'
      document.getElementById("form").innerHTML = ('<div style="background-color:green;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+anser+'</h4></br>');
    }
    if (8<=score && score<=18 && alergie==true) 
    {
      anser='Vous avez des majeurs symptômes du COVID-19. Vous devriez vous confiner au plus vite, et faire un test de dépistage.'
      document.getElementById("form").innerHTML = ('<div style="background-color:red;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+anser+'</h4></br>');
    }
    if (8<=score && score<=18 && alergie==false) 
    {
      anser='Précipitez-vous au centre COVID le plus proche pour être pris en charge.'
      document.getElementById("form").innerHTML = ('<div style="background-color::yellow;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+anser+'</h4></br>');
    }
    if (score>18) 
    {
      anser='Précipitez-vous au centre COVID le plus proche pour être pris en charge.'
      document.getElementById("form").innerHTML = ('<div style="background-color:red;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+anser+'</h4></br>');
    }
    for (let inde = 0; inde < 23; inde++) 
    {
      document.getElementsByTagName("input")[inde].disabled = true;
    }
    for (let inf = 4; inf < 22; inf++) 
    {
      if (document.getElementsByTagName("input")[inf].checked==false) 
      {
        document.getElementsByTagName("input")[inf].style.opacity = "0.6";
      }
    } 
  }
}
