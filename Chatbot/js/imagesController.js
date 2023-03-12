function setImage(src, element) {
    let image = document.createElement("img");
    image.className = "image";
    image.src = src;
    image.addEventListener("click", () => this.showImageOnFullscreen(src));
    element.appendChild(image);

    return element;
}

function showImageOnFullscreen(src) {
    let divElement = document.createElement("div");
    divElement.className = "fs_background";
    divElement.addEventListener("click", () => divElement.remove());

    let image = document.createElement("img");
    image.className = "image_on_fs";
    image.src = src;
    divElement.appendChild(image);

    main.appendChild(divElement);
}