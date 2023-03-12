function sendWAMessageFunction() {
    addUserTextBlock("Te extraño");

    setTimeout(() => {
        addSystemTextBlock("...", true);
        setTimeout(() => {
            document.getElementById("loading_container").remove();
            addSystemTextBlock("Yo también te extraño mucho, y siempre quiero estar en contacto con el amor de mi vida. Así que mira esto, escribe lo que quieras y me llegará un mensaje de Whats con eso 🥺");
            this.showInput();
        }, (2 * timeoutValue));
    }, timeoutValue);
}

function showInput() {
    let inputElement = document.createElement("div");
    inputElement.className = "input_container";
    inputElement.id = "WA_input_container";

    let input = document.createElement("input");
    input.id = "send_WA_message_button"
    inputElement.appendChild(input);

    let button = document.createElement("button");
    button.className = "send_button";
    button.textContent = "Send";
    button.addEventListener("click", () => this.sendMessage());
    inputElement.appendChild(button);

    main.style.cssText = "height:calc(100vh - 86px - 55px)";
    main.appendChild(inputElement);
}

function sendMessage() {
    let message = document.getElementById("send_WA_message_button").value;
    window.open("https://api.whatsapp.com/send?phone=+50661324942&text=" + message, "_blank");
    console.log("WA message sent");

    document.getElementById("WA_input_container").remove();
    main.style.cssText = "";

    addUserTextBlock(message);
    addSystemTextBlock("Yo te amo mucho, y cada día te agradezco por estar en mi vida ❤️");
    addSystemTextBlock("Ya me llegó tu mensaje, ya te voy a contestar 🥺️");
    displayAppOptions("Por mientras, cual opción te gustaría ver?");
}

function sendDefaultWAMessage() {
    addUserTextBlock("Mandame un mensaje por Whats");
    window.open("https://api.whatsapp.com/send?phone=+50661324942&text=Hola, te amo", "_blank");

    addSystemTextBlock("Mensaje enviado.");
    displayAppOptions("Cual opción te gustaría?");
}