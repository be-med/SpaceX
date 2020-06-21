var header = document.querySelector('header');
	var body = document.querySelector('body');
	var a=document.getElementsByClassName('nav-link');
	var firsta =document.getElementById('firsta');
	var searchbtn=document.getElementById('searchbtn');
	var boxsearch = document.getElementById('boxsearch'),
  gotop = document.getElementById('gotop');
  gotop.onclick = function(){
    body.scrollTop = 0;
  }
	window.onscroll = function(){
		if(body.scrollTop>1){
    header.setAttribute("style","background:white!important;");
    gotop.setAttribute('style','display:flex;');
a[1].setAttribute("style","color:#7f8c8d");
a[2].setAttribute("style","color:#7f8c8d");
a[3].setAttribute("style","color:#7f8c8d");
a[4].setAttribute("style","color:#7f8c8d");
a[5].setAttribute("style","color:#7f8c8d");
firsta.setAttribute("style","background:#16263d;color:white;border-radius:15px;");
firsta.onmouseover=function(){
	firsta.setAttribute("style","background:white;color:#7f8c8d;");

}
firsta.onmouseout=function(){
	firsta.removeAttribute("style");
	firsta.setAttribute("style","background:#16263d;color:white;border-radius:15px;");


}
searchbtn.setAttribute("style","background:#16263d;color:white");
boxsearch.setAttribute("style","border-bottom-color:16263d;")

		}
	else{
    header.removeAttribute("style");
    gotop.removeAttribute('style');

a[1].removeAttribute("style");
a[2].removeAttribute("style");
a[3].removeAttribute("style");
a[4].removeAttribute("style");
a[5].removeAttribute("style");
firsta.removeAttribute("style");
searchbtn.removeAttribute("style");
boxsearch.removeAttribute("style");
firsta.onmouseover=function(){
	firsta.removeAttribute("style");

}
	
	}
}
/*#################################################################
###################################################################
###################################################################*/
var projects = document.getElementById('projects'),
descov = document.getElementById('descov'),i=0,txt1="Projects",txt2="Discoveries";
window.onload = function(){
  var int1 = setInterval(function(){
projects.textContent+=txt1[i];
i++;
if(i>=txt1.length){
clearInterval(int1);
}

  },200);
   var int2 = setInterval(function(){
descov.textContent+=txt2[i];
i++;
if(i>=txt2.length){
clearInterval(int2);
}

  },200)
}
// ######### loading page #################

$(window).on('load',function(){

$('#loading').css('display','none');
$('body').css('overflow','visible');

})
// ########### loading page ###########
var pl1 = document.getElementById('pl1'), pl3 = document.getElementById('pl3'),
   pl4 = document.getElementById('pl4'), pl5 = document.getElementById('pl5'),
    pl6 = document.getElementById('pl6'), pl7 = document.getElementById('pl7'),
     pl8 = document.getElementById('pl8'), pl9 = document.getElementById('pl9'),
      pl2 = document.getElementById('pl2'),neptune = document.getElementById('neptune'),
   uranus = document.getElementById('uranus'),saturn = document.getElementById('saturn'),
    jupiter= document.getElementById('jupiter'),mars = document.getElementById('mars'),
    earth = document.getElementById('earth'),venus = document.getElementById('venus'),
    mercury = document.getElementById('mercury'),sun = document.getElementById('sun'),
    tl1 = document.getElementById('tl1'),tl6 = document.getElementById('tl6'),
    tl2 = document.getElementById('tl2'),tl7 = document.getElementById('tl7'),
    tl3 = document.getElementById('tl3'),tl8 = document.getElementById('tl8'),
    tl4 = document.getElementById('tl4'),tl9 = document.getElementById('tl9'),
    tl5 = document.getElementById('tl5'),img1 = document.getElementById('neptunepng'),
    img1 = document.getElementById('neptunepng'),img6 = document.getElementById('earthpng'),
    img2 = document.getElementById('uranuspng'),img7 = document.getElementById('venuspng'),
    img3 = document.getElementById('saturnpng'),img8 = document.getElementById('mercurypng'),
    img4 = document.getElementById('jupiterpng'),img9 = document.getElementById('sunpng'),
    img5 = document.getElementById('marspng');
      pl1.onclick = function(){
        neptune.setAttribute('style','border:2px solid white;box-shadow: 0 0 35px white;');
        tl1.setAttribute('style','visibility:visible;');
        img1.setAttribute('style','animation:planetloop 15s infinite;');
sun.removeAttribute('style');
 mercury.removeAttribute('style');
  venus.removeAttribute('style');
   earth.removeAttribute('style');
    mars.removeAttribute('style');
     jupiter.removeAttribute('style');
      saturn.removeAttribute('style');
       uranus.removeAttribute('style');
                tl2.removeAttribute('style');
                tl3.removeAttribute('style');
                tl4.removeAttribute('style');
                tl5.removeAttribute('style');
                tl6.removeAttribute('style');
                tl7.removeAttribute('style');
                tl8.removeAttribute('style');
                tl9.removeAttribute('style');
img2.removeAttribute('style');
img3.removeAttribute('style');
img4.removeAttribute('style');
img5.removeAttribute('style');
img6.removeAttribute('style');
img7.removeAttribute('style');
img8.removeAttribute('style');
img9.removeAttribute('style');

      }
      pl2.onclick = function(){
  uranus.setAttribute('style','border:2px solid white;box-shadow: 0 0 35px white;');
          tl2.setAttribute('style','visibility:visible;');
          img2.setAttribute('style','animation:planetloop 15s infinite;');

sun.removeAttribute('style');
 mercury.removeAttribute('style');
  venus.removeAttribute('style');
   earth.removeAttribute('style');
    mars.removeAttribute('style');
     jupiter.removeAttribute('style');
      saturn.removeAttribute('style');
        neptune.removeAttribute('style');
     tl1.removeAttribute('style');
                tl3.removeAttribute('style');
                tl4.removeAttribute('style');
                tl5.removeAttribute('style');
                tl6.removeAttribute('style');
                tl7.removeAttribute('style');
                tl8.removeAttribute('style');
                tl9.removeAttribute('style');
img1.removeAttribute('style');
img3.removeAttribute('style');
img4.removeAttribute('style');
img5.removeAttribute('style');
img6.removeAttribute('style');
img7.removeAttribute('style');
img8.removeAttribute('style');
img9.removeAttribute('style');
      }
      pl3.onclick = function(){
                saturn.setAttribute('style','border:2px solid white;box-shadow: 0 0 35px white;');
                   img3.setAttribute('style','animation:planetloop 15s infinite;');

                        tl3.setAttribute('style','visibility:visible;');
img1.removeAttribute('style');
img2.removeAttribute('style');
img4.removeAttribute('style');
img5.removeAttribute('style');
img6.removeAttribute('style');
img7.removeAttribute('style');
img8.removeAttribute('style');
img9.removeAttribute('style');
sun.removeAttribute('style');
 mercury.removeAttribute('style');
  venus.removeAttribute('style');
   earth.removeAttribute('style');
    mars.removeAttribute('style');
     jupiter.removeAttribute('style');
       uranus.removeAttribute('style');
        neptune.removeAttribute('style');
             tl1.removeAttribute('style');
                tl2.removeAttribute('style');
                tl4.removeAttribute('style');
                tl5.removeAttribute('style');
                tl6.removeAttribute('style');
                tl7.removeAttribute('style');
                tl8.removeAttribute('style');
                tl9.removeAttribute('style');
      }
      pl4.onclick = function(){
                jupiter.setAttribute('style','border:2px solid white;box-shadow: 0 0 35px white;');
                       img4.setAttribute('style','animation:planetloop 15s infinite;');

                        tl4.setAttribute('style','visibility:visible;');
img1.removeAttribute('style');
img2.removeAttribute('style');
img3.removeAttribute('style');
img5.removeAttribute('style');
img6.removeAttribute('style');
img7.removeAttribute('style');
img8.removeAttribute('style');
img9.removeAttribute('style');
sun.removeAttribute('style');
 mercury.removeAttribute('style');
  venus.removeAttribute('style');
   earth.removeAttribute('style');
    mars.removeAttribute('style');
      saturn.removeAttribute('style');
       uranus.removeAttribute('style');
        neptune.removeAttribute('style');
             tl1.removeAttribute('style');
                tl2.removeAttribute('style');
                tl3.removeAttribute('style');
                tl5.removeAttribute('style');
                tl6.removeAttribute('style');
                tl7.removeAttribute('style');
                tl8.removeAttribute('style');
                tl9.removeAttribute('style');
      }
      pl5.onclick = function(){
                mars.setAttribute('style','border:2px solid white;box-shadow: 0 0 35px white;');
                        tl5.setAttribute('style','visibility:visible;');
                       img5.setAttribute('style','animation:planetloop 15s infinite;');

img1.removeAttribute('style');
img2.removeAttribute('style');
img3.removeAttribute('style');
img4.removeAttribute('style');
img6.removeAttribute('style');
img7.removeAttribute('style');
img8.removeAttribute('style');
img9.removeAttribute('style');
sun.removeAttribute('style');
 mercury.removeAttribute('style');
  venus.removeAttribute('style');
   earth.removeAttribute('style');
     jupiter.removeAttribute('style');
      saturn.removeAttribute('style');
       uranus.removeAttribute('style');
        neptune.removeAttribute('style');
         tl1.removeAttribute('style');
                tl2.removeAttribute('style');
                tl3.removeAttribute('style');
                tl4.removeAttribute('style');
                tl6.removeAttribute('style');
                tl7.removeAttribute('style');
                tl8.removeAttribute('style');
                tl9.removeAttribute('style');

      }
      pl6.onclick = function(){
                earth.setAttribute('style','border:2px solid white;box-shadow: 0 0 35px white;');
                        tl6.setAttribute('style','visibility:visible;');
                 img6.setAttribute('style','animation:planetloop 15s infinite;');

img1.removeAttribute('style');
img2.removeAttribute('style');
img3.removeAttribute('style');
img4.removeAttribute('style');
img5.removeAttribute('style');
img7.removeAttribute('style');
img8.removeAttribute('style');
img9.removeAttribute('style');
sun.removeAttribute('style');
 mercury.removeAttribute('style');
  venus.removeAttribute('style');
    mars.removeAttribute('style');
     jupiter.removeAttribute('style');
      saturn.removeAttribute('style');
       uranus.removeAttribute('style');
        neptune.removeAttribute('style');
         tl1.removeAttribute('style');
                tl2.removeAttribute('style');
                tl3.removeAttribute('style');
                tl4.removeAttribute('style');
                tl5.removeAttribute('style');
                tl7.removeAttribute('style');
                tl8.removeAttribute('style');
                tl9.removeAttribute('style');
      }
      pl7.onclick = function(){
                venus.setAttribute('style','border:2px solid white;box-shadow: 0 0 35px white;');
                        tl7.setAttribute('style','visibility:visible;');
                        img7.setAttribute('style','animation:planetloop 15s infinite;');
img1.removeAttribute('style');
img2.removeAttribute('style');
img3.removeAttribute('style');
img4.removeAttribute('style');
img5.removeAttribute('style');
img6.removeAttribute('style');
img8.removeAttribute('style');
img9.removeAttribute('style');
sun.removeAttribute('style');
 mercury.removeAttribute('style');
   earth.removeAttribute('style');
    mars.removeAttribute('style');
     jupiter.removeAttribute('style');
      saturn.removeAttribute('style');
       uranus.removeAttribute('style');
        neptune.removeAttribute('style');
       tl1.removeAttribute('style');
                tl2.removeAttribute('style');
                tl3.removeAttribute('style');
                tl4.removeAttribute('style');
                tl5.removeAttribute('style');
                tl6.removeAttribute('style');
                tl8.removeAttribute('style');
                tl9.removeAttribute('style');
      }
      pl8.onclick = function(){
                mercury.setAttribute('style','border:2px solid white;box-shadow: 0 0 35px white;');
                img8.setAttribute('style','animation:planetloop 15s infinite;');
                        tl8.setAttribute('style','visibility:visible;');
img1.removeAttribute('style');
img2.removeAttribute('style');
img3.removeAttribute('style');
img4.removeAttribute('style');
img5.removeAttribute('style');
img6.removeAttribute('style');
img7.removeAttribute('style');
img9.removeAttribute('style');
sun.removeAttribute('style');
  venus.removeAttribute('style');
   earth.removeAttribute('style');
    mars.removeAttribute('style');
     jupiter.removeAttribute('style');
      saturn.removeAttribute('style');
       uranus.removeAttribute('style');
        neptune.removeAttribute('style');
         tl1.removeAttribute('style');
                tl2.removeAttribute('style');
                tl3.removeAttribute('style');
                tl4.removeAttribute('style');
                tl5.removeAttribute('style');
                tl6.removeAttribute('style');
                tl7.removeAttribute('style');
                tl9.removeAttribute('style');
      }
      pl9.onclick = function(){
        sun.setAttribute('style','animation:sunanimation 5s infinite alternate;');
                tl9.setAttribute('style','visibility:visible;');
                img9.setAttribute('style','animation:planetloop 15s infinite;');
img1.removeAttribute('style');
img2.removeAttribute('style');
img3.removeAttribute('style');
img4.removeAttribute('style');
img5.removeAttribute('style');
img6.removeAttribute('style');
img7.removeAttribute('style');
img8.removeAttribute('style');
 mercury.removeAttribute('style');
  venus.removeAttribute('style');
   earth.removeAttribute('style');
    mars.removeAttribute('style');
     jupiter.removeAttribute('style');
      saturn.removeAttribute('style');
       uranus.removeAttribute('style');
        neptune.removeAttribute('style');
         tl1.removeAttribute('style');
                tl2.removeAttribute('style');
                tl3.removeAttribute('style');
                tl4.removeAttribute('style');
                tl5.removeAttribute('style');
                tl6.removeAttribute('style');
                tl7.removeAttribute('style');
                tl8.removeAttribute('style');
      }


// ########### solar system #########
// #############go top ################

