const main = document.getElementById("main")
main.remove()

const body = document.getElementsByTagName("body")
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.textContent = "TJ is the champion"
document.body.append(newHeader)
