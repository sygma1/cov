function agee() 
{
  let Bdate = document.getElementById("wa9et").value;
  let Bday = +new Date(Bdate);
  age = Math.round((Date.now() - Bday) / 31557600000);
}
function isalphabetic(x) 
{
  var x=x.toLowerCase()
  alph="azertyuiopqsdfghjklmwxcvbn"
  i=0
  f=true
  if (x.length<3) {
    f=false
  }
  while ((f)&&i<(x.length)) 
  {
    if (alph.indexOf(x[i])<0) 
    {
      f=false
    }
    i=i+1
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
  i=0
  f=true
  if (x.length<8 || int(x[0])<=1) {

  }
  while ((f)&&i<(x.length)) 
  {
    if (num.indexOf(x[i])<0) 
    {
      f=false
    }
    i=i+1
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
  i=0
  f=true
  if (x.length<0||x.length>50) 
  {
    f=true
  }
  while ((f)&&i<(x.length)) 
  {
    if (stuff.indexOf(x[i])<0) 
    {
      f=false
    }
  }
  if (f==false) 
  {
    alert("pas stuff");
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
  ch1=x[0,(x.indexOf("@"))]
  ch2=x[((x.indexOf("@"))+1),(indexOf("."))]
  ch3=x[((indexOf("."))+1),(x.length)]
  if (ch1.length) {

  }
}
function count() 
{
  chec()
  if ((verif)) 
  {
    v=0
    if (document.getElementById('aaa1').checked == true) 
    {
      v=v+1
    }
    if (document.getElementById('aaa2').checked == true) {
      v=v+1
    }
    if (document.getElementById('aaa3').checked == true) 
    {
      v=v+1
    }
    if (document.getElementById('aaa4').checked == true) 
    {
      v=v+1
    }
    if (document.getElementById('g').checked == true) {
      v=v+3
    }
    if (document.getElementById('h').checked == true) {
      v=v+2
    }
    if (document.getElementById('i1').checked == true) {
      v=v+3
    }
    if (document.getElementById('i2').checked == true) {
      v=v+2
    }
    if (document.getElementById('j').checked == true) {
      v=v+5
    }
    if (document.getElementById('k').checked == true) {
      v=v+5
    }
    if (document.getElementById('l').checked == true) {
      v=v+5;
    }
    if (document.getElementById('m').checked == true) {
      v=v+2;
    }
    if (document.getElementById('n').checked == true) {
      v=v+2;
    }
    if (document.getElementById('o').checked == true) {
      v=v+1;
    }
    if (v<=7 && age>=65) 
    {
      alert("Vous devirez aller bien, mais faites attention à vous, et n’oubliez pas de respecter les gestes barrières")
    }
    if (v<=7 && age<=65) 
    {
      alert("Vous devirez aller bien, mais vous devriez rester confiné chez vous")
    }
    if (8<=v<=18 && alergie==true) 
    {
      alert("Vous avez des majeurs symptômes du COVID-19. Vous devriez vous confiner au plus vite, et faire un test de dépistage.")
    }
    if (8<=v<=18 && alergie==false) 
    {
      alert("Précipitez-vous au centre COVID le plus proche pour être pris en charge.")
    }
    if (v>18) 
    {
      alert("Précipitez-vous au centre COVID le plus proche pour être pris en charge.")
    }
    document.getElementById("form").remove();
    for (let i = 0; i < 22; i++) 
    {
      document.getElementsByTagName("input")[i].disabled = true;
      if (document.getElementsByTagName("input")[i].checked==false) 
      {
        document.getElementsByTagName("input")[i].style.opacity = "0.5";
      }
    }
  }
}