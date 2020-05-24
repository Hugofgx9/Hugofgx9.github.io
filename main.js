gsap.to('.loading-screen', 2, {
	delay: 1,
	top: "-100%",
	ease: Expo.easeInOut,
})
gsap.from(".middle-column h1", 1, {
	delay: 2, 
	y: 100, 
	opacity: 0,
	ease: Power1.easeOut,
});

var tl = gsap.timeline({repeat: 2, repeatDelay: 1});

tl.from(".round", 2, {
	top: "50%",
	scale: 10,
	transformOrigin: "center",
});


tl.to(".round", 3, {
	rotation: '+=360',
	ease: Power0.easeNone,
});

tl.to(".round", 3, {
	rotation: '+=360',
	repeat: -1,
	ease: Power0.easeNone,
});


//a faire, le if ne fonctionne pas 
$( "body" ).click(function() {
	if ($( ".round" ).css( "scale" ) > 0.4 ) {
  		gsap.to( ".round" , 1, {
  			scale: "-=.5",
	  	});
	}
});