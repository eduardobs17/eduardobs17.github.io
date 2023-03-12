const disabledStyleCss = "pointer-events:none; opacity:0.5"
const timeoutValue = 1000;

function addUserTextBlock(text) {
    let userInput = document.createElement("article");
    userInput.className = "user_text_container";
    userInput.innerHTML = text;
    main.appendChild(userInput);
}

function addSystemTextBlock(text, loading = false) {
    let systemInput = document.createElement("article");
    systemInput.className = "system_text_container";
    systemInput.innerHTML = text;

    if (loading) {
        systemInput.id = "loading_container";
    }

    main.appendChild(systemInput);
}

function restartAll() {
    location.reload();
}