window.addEventListener("load", init)
let canvas;
let ineterval
let word
let hint
let dict
function init (e) {
	dict = JSON.parse(data)

	interval = setInterval(checkHint, 1000)

}

function checkHint() {
	let canvas = document.getElementById("canvas")
	console.clear()
	console.log("check")
	// console.log(canvas)
	let words;
	let hint;
	if (canvas) {
		for (node of canvas.childNodes) {
			if (node.id == "hint") {
				hint = document.getElementById("hint")
				words = hint.getElementsByClassName("word")
				// console.log(hint)
				getWords(words)
			}
		}

	}
}
function checkHint() {
	let canvas = document.getElementById("canvas")
	console.clear()
	console.log("check")
	// console.log(canvas)
	let words;
	let hint;
	if (canvas) {
		for (node of canvas.childNodes) {
			if (node.id == "hint") {
				hint = document.getElementById("hint")
				words = hint.getElementsByClassName("word")
				// console.log(hint)
				getWords(words)
			} 
		}

	}
}
