/*==================================
  =            RESPONSIVE            =
  ==================================*/

  function parallaxScrollEl(){

    $('#section-screens .wrapper-4 .ftr.ftr-founders').attr('data-parallax', '{"y": -80, "smoothness": 20}');
    $('#section-screens .wrapper-4 .ftr.ftr-freelancer').attr('data-parallax', '{"y": -40, "smoothness": 40}');
    $('#section-screens .wrapper-4 .ftr.ftr-small-team').attr('data-parallax', '{"y": -90, "smoothness": 20}');
    $('#section-screens .wrapper-4 .ftr.ftr-growth').attr('data-parallax', '{"y": -120, "smoothness": 80}');

  }

  function initResponsive(){

    if (window.matchMedia("(max-width: 970px)").matches) {
      
    } else {
      parallaxScrollEl();
    }

  }

  /*=====  End of RESPONSIVE  ======*/

$(document).ready(function() {
  initResponsive()
});

$(window).on('load', function() {

  /* WAVE SVG */

  svg = document.getElementById("Layer_1");
  s = Snap(svg);

  var path = Snap.select('#line');


  animatePath1(); // start loop

  function animatePath1() {
    path.animate({
      d: "M1010.1,64C1137.4,64,1350,0,1350,0H0C0,0,839.3,64,1010.1,64z"
    }, 8000, mina.easeinout, resetPath1);
  }

  function resetPath1() {
    path.animate({
      d: "M287,64C414.3,64,1350,0,1350,0H0C0,0,116.2,64,287,64z"
    }, 8000, mina.easeinout, animatePath1);
  }


  svg2 = document.getElementById("Layer_2");
  s2 = Snap(svg2);

  var path2 = Snap.select('#line2');


  animatePath2(); // start loop

  function animatePath2() {
    path2.animate({
      d: "M1076.6,118.4C1247.4,118.4,1350,0.2,1350,0.2H0C0,0.2,908.6,118.4,1076.6,118.4z"
    }, 12000, mina.easeinout, resetPath2);
  }

  function resetPath2() {
    path2.animate({
      d: "M307.1,118.4C477.8,118.4,1350,0.2,1350,0.2H0C0,0.2,139.5,118.4,307.1,118.4z"
    }, 12000, mina.easeinout, animatePath2);
  }

  svg3 = document.getElementById("Layer_3");
  s3 = Snap(svg3);

  var path3 = Snap.select('#line3');


  animatePath3(); // start loop

  function animatePath3() {
    path3.animate({
      d: "M317.9,76C467,76,1350,0.2,1350,0.2H0C0,0.2,1,76,317.9,76z"
    }, 9000, mina.easeinout, resetPath3);
  }

  function resetPath3() {
    path3.animate({
      d: "M954,76c149,0,396-75.8,396-75.8H0C0,0.2,637,76,954,76z"
    }, 9000, mina.easeinout, animatePath3);
  }



  svg4 = document.getElementById("Layer_4");
  s4 = Snap(svg4);

  var path4 = Snap.select('#line4');


  animatePath4(); // start loop

  function animatePath4() {
    path4.animate({
      d: "M474,67c168,0,876-66.8,876-66.8H0C0,0.2,168.1,67,474,67z"
    }, 11000, mina.easeinout, resetPath4);
  }

  function resetPath4() {
    path4.animate({
      d: "M904,67c168,0,446-66.8,446-66.8H0C0,0.2,598.2,67,904,67z"
    }, 11000, mina.easeinout, animatePath4);
  }


  svg5 = document.getElementById("Layer_5");
  s5 = Snap(svg5);

  var path5 = Snap.select('#line5');


  animatePath5(); // start loop

  function animatePath5() {
    path5.animate({
      d: "M327,38C478.3,38,1350,0.1,1350,0.1H0C0,0.1,0,38,327,38z"
    }, 14000, mina.easeinout, resetPath5);
  }

  function resetPath5() {
    path5.animate({
      d: "M857,38c151.3,0,493-37.9,493-37.9H0C0,0.1,530,38,857,38z"
    }, 14000, mina.easeinout, animatePath5);
  }


  svg6 = document.getElementById("Layer_6");
  s6 = Snap(svg6);

  var path6 = Snap.select('#line6');


  animatePath6(); // start loop

  function animatePath6() {
    path6.animate({
      d: "M1175,103c169,0,175-102.9,175-102.9H0C0,0.1,1007,103,1175,103z"
    }, 8000, mina.easeinout, resetPath6);
  }

  function resetPath6() {
    path6.animate({
      d: "M688,103c169,0,662-102.9,662-102.9H0C0,0.1,520,103,688,103z"
    }, 8000, mina.easeinout, animatePath6);
  }


});
