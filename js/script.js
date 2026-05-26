// LOCAL STORAGE

localStorage.setItem(
    "browser",
    navigator.userAgent
);

localStorage.setItem(
    "platform",
    navigator.platform
);

localStorage.setItem(
    "language",
    navigator.language
);

// FOOTER

const footer = document.createElement("footer");

footer.style.padding = "20px";

footer.style.textAlign = "center";

footer.innerHTML = `

<h3>Local Storage</h3>

<p>Browser: ${localStorage.getItem("browser")}</p>

<p>Platform: ${localStorage.getItem("platform")}</p>

<p>Language: ${localStorage.getItem("language")}</p>

`;

document.body.appendChild(footer);

// COMMENTS API 2 VARIANT

fetch(
    "https://jsonplaceholder.typicode.com/posts/2/comments"
)

.then(response => response.json())

.then(data => {

    const comments =
        document.getElementById("comments");

    data.forEach(comment => {

        const div =
            document.createElement("div");

        div.classList.add("comment");

        div.innerHTML = `

        <h4>${comment.name}</h4>

        <p>${comment.body}</p>

        `;

        comments.appendChild(div);

    });

});

// THEME

const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark-theme"
        );

    }
);

// AUTO THEME

const hour =
    new Date().getHours();

if(hour >= 21 || hour < 7){

    document.body.classList.add(
        "dark-theme"
    );
}

// MODAL

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const modalForm =
    document.getElementById("modalForm");

// SHOW MODAL AFTER 1 MINUTE

setTimeout(() => {

    modal.style.display = "flex";

}, 60000);

// CLOSE BUTTON

closeModal.addEventListener(
    "click",
    () => {

        modal.style.display = "none";

    }
);

// CLOSE WHEN CLICK OUTSIDE

window.addEventListener(
    "click",
    (event) => {

        if(event.target === modal){

            modal.style.display = "none";
        }

    }
);

// HIDE AFTER SUBMIT

modalForm.addEventListener(
    "submit",
    () => {

        modal.style.display = "none";

    }
);