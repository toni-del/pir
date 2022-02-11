function blacker( x) {
	e = document.getElementById("gr"+x)
	e.className ="i, bg-fon"
}
function antiblacker(x) {
	e = document.getElementById("gr"+x)
	e.className ="i"
}
b = true
function start(x, y) {
	e = document.getElementById(x)
	a = document.getElementById(y)
	if (b) {
		b = false
	e.play()
	a.className = "non"
	} else {
	a.className = ""
	e.pause()
	b = true
}
}
act = 2
function changeSlide(x) {
	e = document.getElementById("o"+x)
	a = document.getElementById("o"+act)
	er = document.getElementById("r"+x)
	ar = document.getElementById("r"+act)
	e.className = "outst a"
	a.className = "outst na"
	er.className = "act"
	ar.className = "nonact"
	act = x
}
pra = 0
function changecol(x) {
	// for (i = -1; i < x; i++) {
	e = document.querySelectorAll('.a1f')
	e[pra].id = ""
	e[x].id = "chos"
	pra = x
}
window.onscroll = function() {
	scrolled = window.pageYOffset || document.documentElement.scrollTop;
	 if(scrolled < 904) changecol(0)
	 if(scrolled > 904 && scrolled < 2233)changecol(1)
	 if(scrolled > 2233 && scrolled < 3082)changecol(2)
	 if(scrolled > 3082 && scrolled < 3859)changecol(3)
	 if(scrolled > 3859 && scrolled < 4444)changecol(4)
	 if(scrolled > 4444 && scrolled < 5093)changecol(5)
	 if(scrolled > 5093)changecol(6)
}