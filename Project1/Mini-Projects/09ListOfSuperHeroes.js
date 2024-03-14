let close = document.getElementsByClassName("close");

function addHero() {
    let input = document.getElementById("heroName").value;
    let item = document.createElement("li");
    let content = document.createTextNode(input); // Iron Man

    let span = document.createElement("span");
    span.className = "close";
    let t = document.createTextNode("\u00D7");
    span.appendChild(t);

    item.appendChild(content); // <li>Iron Man</li>
    item.appendChild(span);

    let superHeroList = document.querySelector(".myHeroList"); // <ul></ul>
    superHeroList.appendChild(item); // <ul><li>Iron Man</li></ul>
    document.getElementById("heroName").value = "";

    for(let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            this.parentElement.style.display = "none";
        }
    }
}