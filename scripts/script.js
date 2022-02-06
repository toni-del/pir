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