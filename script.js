const search = document.querySelector(".search-box input"),
    images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        let searcValue = search.value,
            value = searcValue.toLowerCase();

        images.forEach((image) => {
            if (value === image.dataset.name) {
                //valor coincidente con el atributo de obtención de imágenes

                document.getElementById("msg").innerHTML = "Imagenes encontradas:";

                return (image.style.display = "block");
            }

            return (image.style.display = "none");
        });
    }
});

search.addEventListener("keyup", () => {
    if (search.value != "") return;

    images.forEach((image) => {
        image.style.display = "block";

        document.getElementById("msg").innerHTML = "";
    });
});

window.addEventListener("load", () => {
    // crea el elemento padre <div id="modal">
    let modal = document.createElement("div");
    modal.setAttribute("id", "modal");
    modal.setAttribute("class", "modal");

    // crea el elemento hijo <div id="modalClose">
    let modalClose = document.createElement("div");
    modalClose.setAttribute("id", "modalClose");
    modalClose.innerHTML = "&times;";

    // crea el elemento secundario <img>
    let modalImg = document.createElement("img");
    modalImg.setAttribute("id", "modalImg");

    // crea el elemento hijo <div id="modalText"
    let modalText = document.createElement("div");
    modalText.setAttribute("id", "modalText");

    // elementos de nodo abierto
    document.body.append(modal);
    modal.appendChild(modalClose);
    modal.appendChild(modalImg);
    modal.appendChild(modalText);

    // encontrar todos los elementos con la clase modalImg
    let imgList = document.querySelectorAll(".modalImg"),
        i;
    for (const img of imgList) {
        // agregar evento haga clic para mostrar modal y agregar atributo src
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            modalText.innerHTML = img.alt;
        });
    }

    // evento, ocultar modal si el usuario hace clic en el modal
    modal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});