p=0,q=0,s=0,image=0,v=360;

function functie1() {
	if (p%2==0) { p = 1;
	v=v+115;
	var visota = v + "px";
	document.getElementById("button1").innerHTML = "-";
	document.getElementById("none").style.display = "block";
    document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0s";}
	else { 	p = 0;
	v=v-115;
	var visota = v + "px";
	document.getElementById("button1").innerHTML = "+";
	document.getElementById("none").style.display = "none"; 
    document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0.1s ease";}
} 

function functie2() {
	if (q%2==0) { q = 1;
	v=v+60;
	var visota = v + "px";
	document.getElementById("button2").innerHTML = "-";
	document.getElementById("none2").style.display = "block";
	document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0s";}
	else { 	q = 0;
	v=v-60;
	var visota = v + "px";
	document.getElementById("button2").innerHTML = "+";
	document.getElementById("none2").style.display = "none"; 
	document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0.1s ease";}
} 

function functie3() {
	if (s%2==0) { s = 1;
	v=v+95;
	var visota = v + "px";
	document.getElementById("button3").innerHTML = "-";
	document.getElementById("none3").style.display = "block";
	document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0s";}
	else { 	s = 0;
	v=v-95;
	var visota = v + "px";
	document.getElementById("button3").innerHTML = "+";
	document.getElementById("none3").style.display = "none"; 
	document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0.1s ease";}
} 


function left(){

if (image==5) {image=0}
if (image==-1) {image=4}
image=image+1;

if (image==1||image==-4) {
	document.getElementById('warhammer').style.zIndex = '1';
	document.getElementById('resident').style.zIndex = '5';
	document.getElementById('automata').style.zIndex = '4';
	document.getElementById('solid').style.zIndex = '3';
	document.getElementById('souls').style.zIndex = '2';

	document.getElementById('d1').style.backgroundColor = "#A3ACB8";
	document.getElementById('d2').style.backgroundColor = "#A3ACB8";
	document.getElementById('d3').style.backgroundColor = "#A3ACB8";
	document.getElementById('d4').style.backgroundColor = "#A3ACB8";
	document.getElementById('d5').style.backgroundColor = "#677689";
	}

if (image==2||image==-3) {
	document.getElementById('resident').style.zIndex = '1';
	document.getElementById('warhammer').style.zIndex = '2';
	document.getElementById('automata').style.zIndex = '5';
	document.getElementById('solid').style.zIndex = '4';
	document.getElementById('souls').style.zIndex = '3';

	document.getElementById('d1').style.backgroundColor = "#A3ACB8";
	document.getElementById('d2').style.backgroundColor = "#A3ACB8";
	document.getElementById('d3').style.backgroundColor = "#A3ACB8";
	document.getElementById('d4').style.backgroundColor = "#677689";
	document.getElementById('d5').style.backgroundColor = "#A3ACB8";
	}

if (image==3||image==-2) {
	document.getElementById('automata').style.zIndex = '1';
	document.getElementById('warhammer').style.zIndex = '3';
	document.getElementById('resident').style.zIndex = '2';
	document.getElementById('solid').style.zIndex = '5';
	document.getElementById('souls').style.zIndex = '4';

	document.getElementById('d1').style.backgroundColor = "#A3ACB8";
	document.getElementById('d2').style.backgroundColor = "#A3ACB8";
	document.getElementById('d3').style.backgroundColor = "#677689";
	document.getElementById('d4').style.backgroundColor = "#A3ACB8";
	document.getElementById('d5').style.backgroundColor = "#A3ACB8";
	}

if (image==4||image==-1) {
	document.getElementById('solid').style.zIndex = '1';
	document.getElementById('warhammer').style.zIndex = '4';
	document.getElementById('resident').style.zIndex = '3';
	document.getElementById('automata').style.zIndex = '2';
	document.getElementById('souls').style.zIndex = '5';

	document.getElementById('d1').style.backgroundColor = "#A3ACB8";
	document.getElementById('d2').style.backgroundColor = "#677689";
	document.getElementById('d3').style.backgroundColor = "#A3ACB8";
	document.getElementById('d4').style.backgroundColor = "#A3ACB8";
	document.getElementById('d5').style.backgroundColor = "#A3ACB8";
	}

if (image==5||image==-5) {
	document.getElementById('souls').style.zIndex = '1';
	document.getElementById('warhammer').style.zIndex = '5';
	document.getElementById('resident').style.zIndex = '4';
	document.getElementById('automata').style.zIndex = '3';
	document.getElementById('solid').style.zIndex = '2';

	document.getElementById('d1').style.backgroundColor = "#677689";
	document.getElementById('d2').style.backgroundColor = "#A3ACB8";
	document.getElementById('d3').style.backgroundColor = "#A3ACB8";
	document.getElementById('d4').style.backgroundColor = "#A3ACB8";
	document.getElementById('d5').style.backgroundColor = "#A3ACB8";
	}
}

function right(){

if (image==-5) {image=0}
if (image==1) {image=-4}
image=image-1;

if (image==-1||image==4) {
	document.getElementById('warhammer').style.zIndex = '4';
	document.getElementById('resident').style.zIndex = '3';
	document.getElementById('automata').style.zIndex = '2';
	document.getElementById('solid').style.zIndex = '1';
	document.getElementById('souls').style.zIndex = '5';

	document.getElementById('d1').style.backgroundColor = "#A3ACB8";
	document.getElementById('d2').style.backgroundColor = "#677689";
	document.getElementById('d3').style.backgroundColor = "#A3ACB8";
	document.getElementById('d4').style.backgroundColor = "#A3ACB8";
	document.getElementById('d5').style.backgroundColor = "#A3ACB8";
	}

if (image==-2||image==3) {
	document.getElementById('souls').style.zIndex = '4';
	document.getElementById('warhammer').style.zIndex = '3';
	document.getElementById('resident').style.zIndex = '2';
	document.getElementById('automata').style.zIndex = '1';
	document.getElementById('solid').style.zIndex = '5';

	document.getElementById('d1').style.backgroundColor = "#A3ACB8";
	document.getElementById('d2').style.backgroundColor = "#A3ACB8";
	document.getElementById('d3').style.backgroundColor = "#677689";
	document.getElementById('d4').style.backgroundColor = "#A3ACB8";
	document.getElementById('d5').style.backgroundColor = "#A3ACB8";
	}

if (image==-3||image==2) {
	document.getElementById('solid').style.zIndex = '4';
	document.getElementById('warhammer').style.zIndex = '2';
	document.getElementById('resident').style.zIndex = '1';
	document.getElementById('automata').style.zIndex = '5';
	document.getElementById('souls').style.zIndex = '3';

	document.getElementById('d1').style.backgroundColor = "#A3ACB8";
	document.getElementById('d2').style.backgroundColor = "#A3ACB8";
	document.getElementById('d3').style.backgroundColor = "#A3ACB8";
	document.getElementById('d4').style.backgroundColor = "#677689";
	document.getElementById('d5').style.backgroundColor = "#A3ACB8";
	}

if (image==-4||image==1) {
	document.getElementById('automata').style.zIndex = '4';
	document.getElementById('warhammer').style.zIndex = '1';
	document.getElementById('resident').style.zIndex = '5';
	document.getElementById('solid').style.zIndex = '3';
	document.getElementById('souls').style.zIndex = '2';

	document.getElementById('d1').style.backgroundColor = "#A3ACB8";
	document.getElementById('d2').style.backgroundColor = "#A3ACB8";
	document.getElementById('d3').style.backgroundColor = "#A3ACB8";
	document.getElementById('d4').style.backgroundColor = "#A3ACB8";
	document.getElementById('d5').style.backgroundColor = "#677689";
	}

if (image==-5||image==5) {
	document.getElementById('resident').style.zIndex = '4';
	document.getElementById('warhammer').style.zIndex = '5';
	document.getElementById('automata').style.zIndex = '3';
	document.getElementById('solid').style.zIndex = '2';
	document.getElementById('souls').style.zIndex = '1';

	document.getElementById('d1').style.backgroundColor = "#677689";
	document.getElementById('d2').style.backgroundColor = "#A3ACB8";
	document.getElementById('d3').style.backgroundColor = "#A3ACB8";
	document.getElementById('d4').style.backgroundColor = "#A3ACB8";
	document.getElementById('d5').style.backgroundColor = "#A3ACB8";
	}
}

function perebor(m){
if (m==1) {
		document.getElementById('warhammer').style.zIndex = '5';
		document.getElementById('automata').style.zIndex = '3';
		document.getElementById('solid').style.zIndex = '2';
		document.getElementById('souls').style.zIndex = '1';
		document.getElementById('resident').style.zIndex = '4';

		document.getElementById('d1').style.backgroundColor = "#677689";
		document.getElementById('d2').style.backgroundColor = "#A3ACB8";
		document.getElementById('d3').style.backgroundColor = "#A3ACB8";
		document.getElementById('d4').style.backgroundColor = "#A3ACB8";
		document.getElementById('d5').style.backgroundColor = "#A3ACB8";

		image=5;
	}

if (m==2) {
		document.getElementById('warhammer').style.zIndex = '4';
		document.getElementById('automata').style.zIndex = '2';
		document.getElementById('solid').style.zIndex = '1';
		document.getElementById('souls').style.zIndex = '5';
		document.getElementById('resident').style.zIndex = '3';

		document.getElementById('d1').style.backgroundColor = "#A3ACB8";
		document.getElementById('d2').style.backgroundColor = "#677689";
		document.getElementById('d3').style.backgroundColor = "#A3ACB8";
		document.getElementById('d4').style.backgroundColor = "#A3ACB8";
		document.getElementById('d5').style.backgroundColor = "#A3ACB8";

		image=4;
	}

if (m==3) {
		document.getElementById('warhammer').style.zIndex = '3';
		document.getElementById('automata').style.zIndex = '1';
		document.getElementById('solid').style.zIndex = '5';
		document.getElementById('souls').style.zIndex = '4';
		document.getElementById('resident').style.zIndex = '2';

		document.getElementById('d1').style.backgroundColor = "#A3ACB8";
		document.getElementById('d2').style.backgroundColor = "#A3ACB8";
		document.getElementById('d3').style.backgroundColor = "#677689";
		document.getElementById('d4').style.backgroundColor = "#A3ACB8";
		document.getElementById('d5').style.backgroundColor = "#A3ACB8";

		image=3;
	}

if (m==4) {
		document.getElementById('warhammer').style.zIndex = '2';
		document.getElementById('automata').style.zIndex = '5';
		document.getElementById('solid').style.zIndex = '4';
		document.getElementById('souls').style.zIndex = '3';
		document.getElementById('resident').style.zIndex = '1';

		document.getElementById('d1').style.backgroundColor = "#A3ACB8";
		document.getElementById('d2').style.backgroundColor = "#A3ACB8";
		document.getElementById('d3').style.backgroundColor = "#A3ACB8";
		document.getElementById('d4').style.backgroundColor = "#677689";
		document.getElementById('d5').style.backgroundColor = "#A3ACB8";

		image=2;
	}

if (m==5) {
		document.getElementById('warhammer').style.zIndex = '1';
		document.getElementById('automata').style.zIndex = '4';
		document.getElementById('solid').style.zIndex = '3';
		document.getElementById('souls').style.zIndex = '2';
		document.getElementById('resident').style.zIndex = '5';

		document.getElementById('d1').style.backgroundColor = "#A3ACB8";
		document.getElementById('d2').style.backgroundColor = "#A3ACB8";
		document.getElementById('d3').style.backgroundColor = "#A3ACB8";
		document.getElementById('d4').style.backgroundColor = "#A3ACB8";
		document.getElementById('d5').style.backgroundColor = "#677689";

		image=1;
	}

}

function mouse(m){
	if (m==1) {
	    document.getElementById('otenca').style.transform = 'translate(0px,80px)';
	    document.getElementById('otenca').style.transition = 'all 0.4s';
	    document.getElementById('imea1').style.transform = 'translate(440px,0px)';
	    document.getElementById('imea1').style.transition = 'all 0.4s';
	    document.getElementById('image1').style.transform = 'scale(1.2,1.2)';
	    document.getElementById('image1').style.transition = 'all 1s';

	}

	if (m==2) {
	    document.getElementById('otenca2').style.transform = 'translate(0px,80px)';
	    document.getElementById('otenca2').style.transition = 'all 0.4s';
	    document.getElementById('imea2').style.transform = 'translate(440px,0px)';
	    document.getElementById('imea2').style.transition = 'all 0.4s';
		document.getElementById('image2').style.transform = 'scale(1.2,1.2)';
	    document.getElementById('image2').style.transition = 'all 1s';}

	if (m==3) {
	    document.getElementById('otenca3').style.transform = 'translate(0px,80px)';
	    document.getElementById('otenca3').style.transition = 'all 0.4s';
	    document.getElementById('imea3').style.transform = 'translate(440px,0px)';
	    document.getElementById('imea3').style.transition = 'all 0.4s';
		document.getElementById('image3').style.transform = 'scale(1.2,1.2)';
	    document.getElementById('image3').style.transition = 'all 1s';}

	if (m==4) {
	    document.getElementById('otenca4').style.transform = 'translate(0px,80px)';
	    document.getElementById('otenca4').style.transition = 'all 0.4s';
	    document.getElementById('imea4').style.transform = 'translate(440px,0px)';
	    document.getElementById('imea4').style.transition = 'all 0.4s';
		document.getElementById('image4').style.transform = 'scale(1.2,1.2)';
	    document.getElementById('image4').style.transition = 'all 1s';}

	if (m==5) {
	    document.getElementById('otenca5').style.transform = 'translate(0px,80px)';
	    document.getElementById('otenca5').style.transition = 'all 0.4s';
	    document.getElementById('imea5').style.transform = 'translate(440px,0px)';
	    document.getElementById('imea5').style.transition = 'all 0.4s';
		document.getElementById('image5').style.transform = 'scale(1.2,1.2)';
	    document.getElementById('image5').style.transition = 'all 1s';}
}

function mouseleave(m){
	if (m==1) {
		document.getElementById('otenca').style.transform = 'translate(0px,0px)';
		document.getElementById('otenca').style.transition = 'all 0.4s';
		document.getElementById('imea1').style.transform = 'translate(0px,0px)';
	    document.getElementById('imea1').style.transition = 'all 0.4s';
		document.getElementById('image1').style.transform = 'scale(1,1)';}

	if (m==2) {
		document.getElementById('otenca2').style.transform = 'translate(0px,0px)';
	    document.getElementById('otenca2').style.transition = 'all 0.4s';
		document.getElementById('imea2').style.transform = 'translate(0px,0px)';
	    document.getElementById('imea2').style.transition = 'all 0.4s';
		document.getElementById('image2').style.transform = 'scale(1,1)';}

	if (m==3) {
	    document.getElementById('otenca3').style.transform = 'translate(0px,0px)';
	    document.getElementById('otenca3').style.transition = 'all 0.4s';
		document.getElementById('imea3').style.transform = 'translate(0px,0px)';
	    document.getElementById('imea3').style.transition = 'all 0.4s';
		document.getElementById('image3').style.transform = 'scale(1,1)';}

	if (m==4) {
	    document.getElementById('otenca4').style.transform = 'translate(0px,0px)';
	    document.getElementById('otenca4').style.transition = 'all 0.4s';
		document.getElementById('imea4').style.transform = 'translate(0px,0px)';
	    document.getElementById('imea4').style.transition = 'all 0.4s';
		document.getElementById('image4').style.transform = 'scale(1,1)';}

	if (m==5) {
	    document.getElementById('otenca5').style.transform = 'translate(0px,0px)';
	    document.getElementById('otenca5').style.transition = 'all 0.4s';
		document.getElementById('imea5').style.transform = 'translate(0px,0px)';
	    document.getElementById('imea5').style.transition = 'all 0.4s';
		document.getElementById('image5').style.transform = 'scale(1,1)';}
}
