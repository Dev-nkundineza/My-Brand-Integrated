'use strict';
const post = JSON.parse(localStorage.getItem("posts"));


//truncate the paragraph
function truncateParagraph(str) {
    if (str.length > 150) {
        return (str.substring(0, 150) + "....");
    } else {
        return str;
    }
}



function displayArticle() {
    const post = JSON.parse(localStorage.getItem("posts"));

    for (let index = 0; index < post.length; index++) {

        console.log(post[index].body);

        const blogCard = document.querySelector(".blog-card");

        const card = document.createElement("div")
        card.setAttribute('class', 'card');
        const img = document.createElement("div")
        img.setAttribute('class', 'photo img-1');
        img.style.backgroundImage = "url(../)"

        img.textContent = post[index].thumbnail;
        const description = document.createElement("div")
        description.setAttribute('class', 'description');
        const thumbs = document.createElement("div")
        const icon1 = document.createElement("i")
        icon1.setAttribute('class', 'icon-thumbs-up');
        const span = document.createElement("span");
        const span1 = document.createElement("span")
        span1.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;`

        const icon2 = document.createElement("i")
        icon2.setAttribute('class', 'icon-thumbs-down');
        const span2 = document.createElement("span");
        thumbs.appendChild(icon1);
        thumbs.appendChild(span);
        thumbs.appendChild(span1);
        thumbs.appendChild(icon2);

        thumbs.appendChild(span2);

        const title = document.createElement("h1");
        title.textContent = post[index].title;
        console.log(title);
        const body = document.createElement("p");
        body.textContent = truncateParagraph(post[index].body);
        const link = document.createElement("a")
        link.setAttribute('href', 'details.html');
        const btn = document.createElement("button");
        btn.textContent = "Read More";

        link.appendChild(btn);
        description.appendChild(thumbs);
        description.appendChild(title);
        description.appendChild(body);
        description.appendChild(link);

        card.appendChild(img);
        card.appendChild(description);
        blogCard.appendChild(card);

        console.log(card);
    }


}

displayArticle();


// READING FILES FROM LOCALSTORAGE

// function readFile(inputFile) {
//     let file = inputFile.files[0];
//     let fileReader = new FileReader();

//     fileReader.readAsDataURL(file);
//     fileReader.onload = function() {
//         return fileReader.results;
//     };
// }

// console.log(readFile(post.thumbnail));