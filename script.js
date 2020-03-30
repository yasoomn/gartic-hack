window.addEventListener("load", init)
let input
let list
let dict
function init() {
	input = document.getElementById("input")
	list = document.getElementById("list")
	dict = JSON.parse(data)
	input.addEventListener("input", e=> {
		match(input.value.toLowerCase())
		showInfo(input.value.toLowerCase())
	})
}

function match(rawtext) {
	if (!rawtext || rawtext === " ") {return false}
	let text = rawtext.replace(/-/g, "\\S")
	let reg = new RegExp("\\b"+text+"\\b", "g")
	//let reg = /\bteste\b/g
	console.log(reg)
	let iterator = dict.words.matchAll(reg)
	log(iterator)
}

function log(matches) {
	list.innerHTML = ""
	for (const match of matches) {
	console.log(match[0]);
	let node = document.createTextNode(match[0])
	list.appendChild(document.createElement("p").appendChild(node))
	list.appendChild(document.createElement("br"))	
	}
}

function showInfo(string) {
	let l = string.length
	let info = document.getElementById("info")
	info.innerHTML = l + " Letras"
}
