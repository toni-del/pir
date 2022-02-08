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