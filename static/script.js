$( document ).ready( showNextText(1) );

function showNextText(fadeInText) {
    $('#about-main--text-'+fadeInText).fadeIn(3000);
    $('#about-main--image-'+fadeInText).fadeIn(3000);

    var fadeOutText=fadeInText-1;
    console.log("fade in text:"+fadeInText);
    console.log("fade out text:"+fadeOutText)
    if(fadeOutText==0) {
        fadeOutText=4;
    }
    $('#about-main--text-'+fadeOutText).fadeOut(2000);
    $('#about-main--image-'+fadeOutText).fadeOut(3000);
    fadeInText++;
    if(fadeInText==5) { fadeInText=1; }
    setTimeout(function() { showNextText(fadeInText); },10000);

}