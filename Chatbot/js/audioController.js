function songs() {
    addUserTextBlock("Canciones que me recuerdan a ti");

    setTimeout(() => {
        addSystemTextBlock("...", true);
        setTimeout(() => {
            document.getElementById("loading_container").remove();
            addSystemTextBlock("Una de mis cosas preferidas en la vida es la música, lo sabes. Hay muchas canciones hermosas que me recuerdan a ti, ya sea por su letra, su melodía, o un significado especial que tenga para nosotros. Miralas aquí, cuentame después cual de todas es tu favorita:");
            addSystemTextBlock("...", true);
            setTimeout(() => {
                document.getElementById("loading_container").remove();
                this.displaySongs();
            }, timeoutValue);
        }, (2 * timeoutValue));
    }, timeoutValue);
}

function displaySongs() {
    let songsDiv = document.createElement("div");
    songsDiv.className = "songs_div";

    let songs = ["Photograph - Ed Sheeran", "Perfect - Ed Sheeran", "Can't Help Falling in Love - Elvis Presley", "Until I Found You - Stephen Sanchez", "Dandelions - Ruth B", "Just the Way You Are - Bruno Mars", "Yellow - Coldplay", "The One - Kodaline", "Love You Still - Tyler Shaw", "Tu jardīn con enanitos - Melendi"];

    songs.forEach(song => {
        let audioRow = document.createElement("div");
        audioRow.className = "audio_row";

        let div = document.createElement("p");
        div.innerText = song;

        let audioBlock = document.createElement("audio");
        audioBlock.controls = true;

        let sourceBlock = document.createElement("source");
        sourceBlock.src = "resources/music/" + song + ".mp3";
        sourceBlock.type = "audio/mpeg";

        audioBlock.appendChild(sourceBlock);
        audioRow.appendChild(div);
        audioRow.appendChild(audioBlock);
        songsDiv.appendChild(audioRow);
    });

    main.appendChild(songsDiv);

    setTimeout(() => {
        displayAppOptions("Mientras escuchas nuestras canciones favoritas, qué opción te gustaría ver?");
    }, (3 * timeoutValue));
}