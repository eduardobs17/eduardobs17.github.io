let main;

function startApplication() {
    main = document.getElementById("main_container");
    document.getElementById("start_button").disabled = true;
    addUserTextBlock("Sí");

    setTimeout(() => {
        addSystemTextBlock("...", true);
        setTimeout(() => {
            document.getElementById("loading_container").remove();
            this.displayAppOptions("Dale mi amor. Para comenzar, escoge cualquiera de las siguientes opciones:");
        }, (2 * timeoutValue));
    }, timeoutValue);
}

function displayAppOptions(text) {
    addSystemTextBlock(text);

    const appOptions = ["Recordar un momento juntos", "Te extraño", "Momentos donde me siento yo mismo", "Canciones que me recuerdan a ti",
        "Lo que me sale del corazón decirte", "A veces, sólo a veces, soy un buen fotógrafo", "Mandame un mensaje por Whats"



        // "Nuestros momentos especiales", "Throwback day", "Nuestra primera vez ...", "Razones por las que te amo", "Throwback day"
    ];
    let options = document.createElement("div");
    options.className = "options";

    appOptions.forEach((arrayOption, index) => {
        let option = document.createElement("button");
        option.className = "option_button";
        option.innerHTML = arrayOption;

        option.addEventListener("click", () => {
            options.style.cssText = disabledStyleCss;

            switch (index) {
                case 0:
                    this.momentsTogether();
                    break;
                case 1:
                    sendWAMessageFunction();
                    break;
                case 2:
                    this.option_2();
                    break;
                case 3:
                    songs();
                    break;
                case 4:
                    this.option_4();
                    break;
                case 5:
                    this.option_5();
                    break;
                case 6:
                    sendDefaultWAMessage();
                    break;
            }
        });


        options.appendChild(option);
    });

    setTimeout(() => {
        main.appendChild(options);
    }, (0.25 * timeoutValue));
}

function option_2() {
    addUserTextBlock("Momentos donde me siento yo mismo");

    setTimeout(() => {
        addSystemTextBlock("...", true);
        setTimeout(() => {
            document.getElementById("loading_container").remove();
            addSystemTextBlock("Hay muchos momentos amor, estar contigo me hace sentir muy bien, cómodo y feliz ❤️ Aquí te muestro algunos de mis momentos favoritos");
            addSystemTextBlock("...", true);

            setTimeout(() => {
                document.getElementById("loading_container").remove();

                let divElement = document.createElement("div");
                divElement.className = "images_container";
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/20220320_152648.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/20220920_192150.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/20221014_173059.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/20221029_193211.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/20221112_192442.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/20221211_185035.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/20230117_183036.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/IMG-20211128-WA0051.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/IMG-20221120-WA0026.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/IMG-20221206-WA0024.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/IMG_20220312_193310_926.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/IMG_20220327_165359_002.jpeg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/IMG_20220327_165359_002.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/IMG_20220714_191921_139.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/Snapchat-642904780.jpg", divElement);
                divElement = setImage("resources/images/momentos_donde_me_siento_yo_mismo/Snapchat-802139152.jpg", divElement);
                main.appendChild(divElement);

                setTimeout(() => {
                    addSystemTextBlock("Que nuestro amor dure por siempre ❤️");
                    displayAppOptions("Adonde quieres ir ahora?");
                }, timeoutValue);
            }, timeoutValue);
        }, (2 * timeoutValue));
    }, timeoutValue);
}

function option_4() {
    addUserTextBlock("Lo que me sale del corazón decirte");

    setTimeout(() => {
        addSystemTextBlock("...", true);
        setTimeout(() => {
            document.getElementById("loading_container").remove();
            addSystemTextBlock("En este año (y desde antes) me has enseñado muchas cosas: Me has enseñado a vivir mi vida, a amar al máximo y disfrutar siempre toda tu compañía. Me has ayudado a crecer, a mejorar. Me has motivado y he avanzado mucho en todas las áreas de mi vida.");
            addSystemTextBlock("...", true);
            setTimeout(() => {
                document.getElementById("loading_container").remove();
                addSystemTextBlock("Te quiero agradecer por todo lo que has hecho y lo que le has aportado a mi vida. Eres una bendición, eres lo más bello que me ha pasado y estaré eternamente agradecido por elegirme como tu pareja, tu novio, y tu compañero de vida ❤️");
                addSystemTextBlock("...", true);
                setTimeout(() => {
                    document.getElementById("loading_container").remove();
                    addSystemTextBlock("Todos los días pienso en ti, en como alegras mi vida y mis días. Te amo mucho y de verdad gracias por estar en mi vida. Todo en ti es bello, todo en ti es perfecto, y solo sueño en toda la vida que nos espera juntos, tú y yo, como el equipo que siempre seremos.");
                    addSystemTextBlock("Nunca olvides lo mucho que te amo, y lo afortunado que soy de tener a alguien como tú en mi vida. TE AMO HASTA EL INFINITO ❤️");
                    addSystemTextBlock("Que nuestro amor dure por siempre ❤️");

                    setTimeout(() => {
                        displayAppOptions("Qué quieres ver ahora?");
                    }, timeoutValue);
                }, timeoutValue);
            }, timeoutValue);
        }, (2 * timeoutValue));
    }, timeoutValue);
}

function option_5() {
    addUserTextBlock("A veces, sólo a veces, eres un buen fotógrafo");

    setTimeout(() => {
        addSystemTextBlock("...", true);
        setTimeout(() => {
            document.getElementById("loading_container").remove();
            addSystemTextBlock("AMO TOMARTE FOTOOOOSSSS, eres una modelo excelente ❤️");
            addSystemTextBlock("...", true);

            setTimeout(() => {
                document.getElementById("loading_container").remove();

                let divElement = document.createElement("div");
                divElement.className = "images_container";
                divElement = setImage("resources/images/fotos_lindas/20220320_152716.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20220703_162032.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20220703_162257.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20220723_162855.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20220723_162902.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20220723_162924.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20220726_190536.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20220819_195845.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20221006_193814.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20221227_130706.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/20230128_211636.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/IMG_20211224_163038_367.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/IMG_20220226_181916_304.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/IMG_20220327_171036_122.jpg", divElement);
                divElement = setImage("resources/images/fotos_lindas/IMG_20220714_192858_829.jpg", divElement);
                main.appendChild(divElement);

                setTimeout(() => {
                    addSystemTextBlock("Que nuestro amor dure por siempre ❤️");
                    displayAppOptions("Adonde quieres ir ahora?");
                }, timeoutValue);
            }, timeoutValue);
        }, (2 * timeoutValue));
    }, timeoutValue);
}

function momentsTogether() {
    addUserTextBlock("Recordar un momento juntos");

    setTimeout(() => {
        addSystemTextBlock("...", true);
        setTimeout(() => {
            document.getElementById("loading_container").remove();
            addSystemTextBlock("Esta es una de mis opciones favoritas. Siempre es bonito recordar nuestros momentos juntos, los momentos que más nos marcaron, los que mejor conservamos o esos momentos inesperados que quedan grabados por siempre en nuestros corazones. Hice una preselección de fotos jiji, elije cómo quieres verla:");
            this.showMomentsTogetherOptions();
        }, (2 * timeoutValue));
    }, timeoutValue);
}

function showMomentsTogetherOptions() {
    let options = document.createElement("div");
    options.className = "options";

    const months = ["Marzo 2022", "Abril 2022", "Mayo 2022", "Junio 2022", "Julio 2022", "Agosto 2022", "Setiembre 2022", "Octubre 2022", "Noviembre 2022", "Diciembre 2022", "Enero 2023", "Febrero 2023", "Marzo 2023", "Back", "GTT"];
    months.forEach((arrayOption, index) => {
        let option = document.createElement("button");
        option.className = "option_button";
        option.innerHTML = arrayOption;
        option.addEventListener("click", () => {
            options.style.cssText = disabledStyleCss;

            switch (index) {
                case 0:
                    show_marzo_2022_pics();
                    break;
                case 1:
                    show_abril_2022_pics();
                    break;
                case 2:
                    show_mayo_2022_pics();
                    break;
                case 3:
                    show_junio_2022_pics();
                    break;
                case 4:
                    show_julio_2022_pics();
                    break;
                case 5:
                    show_agosto_2022_pics();
                    break;
                case 6:
                    show_setiembre_2022_pics();
                    break;
                case 7:
                    show_octubre_2022_pics();
                    break;
                case 8:
                    show_noviembre_2022_pics();
                    break;
                case 9:
                    show_diciembre_2022_pics();
                    break;
                case 10:
                    show_enero_2023_pics();
                    break;
                case 11:
                    show_febrero_2023_pics();
                    break;
                case 12:
                    show_marzo_2023_pics();
                    break;
                case 13:
                    displayAppOptions("Elige cualquiera de las siguientes opciones:");
                    break;
                case 14:
                    restartAll();
                    break;
            }

            if (index !== 13) {
                showMomentsTogetherOptions();
            }
        });

        options.appendChild(option);
    });

    setTimeout(() => {
        main.appendChild(options);
    }, (0.25 * timeoutValue));
}

function show_marzo_2022_pics() {
    addUserTextBlock("El mes donde comenzó todo ❤️");
    addSystemTextBlock("Uno de mis meses favoritos");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/marzo_2022/20220304_192639.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2022/IMG_20220312_193310_926.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2022/IMG_20220312_193518_489.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2022/IMG_20220312_193700_168.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2022/IMG_20220327_165359_002.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2022/IMG_20220327_165632_859.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2022/IMG_20220331_191647_868.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2022/Snapchat-496868082.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2022/Snapchat-1872109543.jpg", divElement);

    main.appendChild(divElement);
}

function show_abril_2022_pics() {
    addUserTextBlock("Abril 2022");
    addSystemTextBlock("Un mes donde poco a poco ibamos aprendiendo, mejorando y creciendo");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/abril_2022/IMG_20220401_182611_077.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/abril_2022/Snapchat-258924184.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/abril_2022/Snapchat-525364900.jpg", divElement);

    main.appendChild(divElement);
}

function show_mayo_2022_pics() {
    addUserTextBlock("Mayo 2022");
    addSystemTextBlock("Ya estabamos cumpliendo 2 meses juntos 😍");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/mayo_2022/IMG-20220514-WA0027.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/mayo_2022/IMG-20220515-WA0005.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/mayo_2022/IMG-20220520-WA0021.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/mayo_2022/IMG-20220530-WA0038.jpeg", divElement);

    main.appendChild(divElement);
}

function show_junio_2022_pics() {
    addUserTextBlock("Junio 2022");
    addSystemTextBlock("Cada vez colleccionando más momentos juntos");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/junio_2022/GridArt_20220612_013929187.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/junio_2022/Snapchat-610746041.jpg", divElement);

    main.appendChild(divElement);
}

function show_julio_2022_pics() {
    addUserTextBlock("Julio 2022");
    addSystemTextBlock("TU CUMPLEAÑOS 🙈");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/julio_2022/20220701_175141.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/20220701_175205.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/20220714_191643.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/20220723_152541.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/20220723_163006.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/20220723_163630.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/20220725_195711.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/20220728_192947.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/IMG_20220714_191921_139.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/IMG_20220714_192023_593.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/IMG_20220714_192142_875.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/julio_2022/IMG_20220714_192528_383.jpg", divElement);

    main.appendChild(divElement);
}

function show_agosto_2022_pics() {
    addUserTextBlock("Agosto 2022");
    addSystemTextBlock("Nuestra primera actividad formal juntos 🥺");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/agosto_2022/20220812_181539.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/agosto_2022/20220812_181559.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/agosto_2022/20220812_181630.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/agosto_2022/20220819_195945.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/agosto_2022/20220819_223727.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/agosto_2022/20220819_223803.jpg", divElement);

    main.appendChild(divElement);
}

function show_setiembre_2022_pics() {
    addUserTextBlock("Nuestros primeros 6 meses ❤️");
    addSystemTextBlock("6 meses de mucho amor");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/setiembre_2022/20220910_125254-COLLAGE.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/setiembre_2022/20220910_125341.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/setiembre_2022/20220910_125350.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/setiembre_2022/20220910_171348.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/setiembre_2022/20220920_192150.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/setiembre_2022/20220922_180430.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/setiembre_2022/20220923_143652.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/setiembre_2022/20220925_080822.jpg", divElement);

    main.appendChild(divElement);
}

function show_octubre_2022_pics() {
    addUserTextBlock("Halloween");
    addSystemTextBlock("👻");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/octubre_2022/20221001_143656.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/octubre_2022/20221001_143715.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/octubre_2022/20221007_214246.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/octubre_2022/20221014_173059.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/octubre_2022/20221027_183139.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/octubre_2022/20221029_193211.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/octubre_2022/20221029_194734.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/octubre_2022/20221030_115253.jpg", divElement);

    main.appendChild(divElement);
}

function show_noviembre_2022_pics() {
    addUserTextBlock("Noviembre, bonito mes");
    addSystemTextBlock("Nuestro aniversario no oficial 🌚");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/noviembre_2022/20221105_155552.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/noviembre_2022/20221108_135719.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/noviembre_2022/20221112_192442.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/noviembre_2022/20221119_090857-COLLAGE.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/noviembre_2022/20221119_090858.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/noviembre_2022/de76ec0c-76fc-4945-96bb-d2d6a0540aea.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/noviembre_2022/IMG-20221120-WA0026.jpg", divElement);

    main.appendChild(divElement);
}

function show_diciembre_2022_pics() {
    addUserTextBlock("Navidad, navidad");
    addSystemTextBlock("Ho, ho, ho! el mes más bonito");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221204_162847.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221204_174423.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221204_175534.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221211_185035.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221214_181841.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221218_172558.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221224_182117.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221224_182119.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221224_182252.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221224_182729.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221227_112149.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221227_124509.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/20221230_213432.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/diciembre_2022/IMG-20221206-WA0024.jpg", divElement);

    main.appendChild(divElement);
}

function show_enero_2023_pics() {
    addUserTextBlock("Enero 2023");
    addSystemTextBlock("Año nuevo, a tu lado, amandote más");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/enero_2023/20230113_173121.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/enero_2023/20230113_173154.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/enero_2023/20230117_182951.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/enero_2023/20230117_183036.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/enero_2023/20230119_195307.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/enero_2023/20230128_180858.jpg", divElement);

    main.appendChild(divElement);
}

function show_febrero_2023_pics() {
    addUserTextBlock("Febrero 2023");
    addSystemTextBlock("Acercandonos a nuestro aniversario 🙈");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/febrero_2023/06b00967f86a412085111473440fdc75.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/febrero_2023/20230211_200248.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/febrero_2023/20230224_164801.jpg", divElement);

    main.appendChild(divElement);
}

function show_marzo_2023_pics() {
    addUserTextBlock("Marzo 2023");
    addSystemTextBlock("NUESTRO ANIVERSARIO ESTÁ AQUIIIIIII");

    let divElement = document.createElement("div");
    divElement.className = "images_container";
    divElement = setImage("resources/images/momentos_juntos/marzo_2023/20230304_151404.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2023/20230304_152136.jpg", divElement);
    divElement = setImage("resources/images/momentos_juntos/marzo_2023/WhatsApp Image 2023-03-10 at 8.06.18 PM.jpeg", divElement);

    main.appendChild(divElement);
}