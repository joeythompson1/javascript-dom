let table = document.querySelector('#table');
let list = document.createElement("ul");
let topic = document.querySelectorAll("h3");

for (i = 0; i < topic.length; i++){
    let iteams = document.createElement("li");
    let links = document.createElement("a");
    links.setAttribute("href","#");
    links.innerText=topic[i].innerText;
    iteams.appendChild(links);
    list.appendChild(iteams);
}
table.appendChild(list);