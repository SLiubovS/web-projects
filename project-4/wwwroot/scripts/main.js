
for (let root of document.querySelectorAll("ul > li")) {

    let children = root.getElementsByTagName("li");
    let text = root.childNodes[0].textContent.trim();
    alert(`${text}: ${children.length}`);
}


