var script1 = document.createElement('script');
script1.src = 'js/script1.js';
var script4 = document.createElement('script');
script4.src = 'js/script4.js';
var script6 = document.createElement('script');
script6.src = 'js/script6.js';


window.addEventListener('load', startApp);

function startApp() {
    var slide = document.getElementById('slide');
    var slide2 = document.getElementById('slide2');
    var slide3 = document.getElementById('slide3');
    var slide4 = document.getElementById('slide4');
    var slide5 = document.getElementById('slide5');
    var counter = 0;
    var array = ["images/voorkant.png","images/zijkant.png", "images/robot.png", "images/robot.png", "images/robot.png", "images/robot.png"]



    forwardbutton.addEventListener('click', goForward);
    backbutton.addEventListener('click', goBack);

    setInterval(goForward, 500);



    function goForward() {
        console.log("ga vooruit")
        counter = counter + 1
        if (counter > 5) {
            counter = 0;
        }


        slide.src = array[counter];
        slide2.src = array[counter];
        slide3.src = array[counter];
        slide4.src = array[counter];
        slide5.src = array[counter];
    }


    function goBack() {
        counter = counter - 1;
        if (counter < 0) {
            counter = 2;
        }
        slide.src = array[counter];
        slide2.src = array[counter];
        slide3.src = array[counter];
        slide4.src = array[counter];
        slide5.src = array[counter];
        console.log("ga achteruit")
    }

}


    
 var interval = self.setInterval(function(){LoopForever()},100);
   

function LoopForever() {
    if ($('#1').hasClass('swiper-slide swiper-slide-active')){
    document.head.appendChild(script1);
    }
    if ($('#4').hasClass('swiper-slide swiper-slide-active')){
        document.head.appendChild(script4);
    }
    else if ($('#6').hasClass('swiper-slide swiper-slide-active')){
    document.head.appendChild(script6);
    }
    else if ($('#8').hasClass('swiper-slide swiper-slide-active')){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/slide8.css">');
    }
    else if ($('#11').hasClass('swiper-slide swiper-slide-active')){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/slide11.css">');

    }
    else if ($('#12').hasClass('swiper-slide swiper-slide-active')){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/slide12.css">');
    }
}