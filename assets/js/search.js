function site(names, link) {
    this.names = names;
    this.link = link;
}
var websites = [
    new site(["Lebenslauf", "CV", "Karriere"], "cv.html"),
    new site(["Impressum", "Info"], "impressum.html"),
    new site(["Home", "Index", "Startseite"], "index.html"),
    new site(["Projekte", "Projects"], "projects.html"),
    new site(["Noblesse", "Pyrenäenberghund", "Hund", "Hündin"], "https://colline-du-lion.de"),
    new site(["Mathematik", "Mathematics"], "mathematics.html"),
    new site(["Mathicle", "Latex-Klasse", "Matheklasse"], "mathicle.html"),
    new site(["Mehr"], "further.html"),
    new site(["Familie", "Freundin"], "family.html"),
    new site(["Alte Webseite"], "oldwebpage.html"),
    new site(["Tutorium", "Lernmaterialien", "Lehrinformationen"], "tut.html")
];
var searchres = document.getElementById("searchres");

function showResult(str) {
    input = str.value.toUpperCase();

    searchres.innerHTML = "";
    if (input.length == 0) {
        return;
    } else {
        for (var i = 0; i < websites.length; i++) {
            var names = websites[i].names;
            for (var j = 0; j < names.length; j++) {
                name = names[j].toUpperCase();
                if (name.includes(input)) {
                    var ind = name.indexOf(input);
                    searchres.innerHTML += '<li><a href="' + websites[i].link + '">'
                        + names[j].slice(0, ind) + '<b>'
                        + names[j].slice(ind, ind + input.length)
                        + "</b>" + names[j].slice(ind + input.length) + '</a></li>';
                    break;
                }
            }
        }
        if (searchres.innerHTML == "") {
            searchres.innerHTML =
                'keine Ergebnisse gefunden';
        }
    }
}

/*
    function tab(head, body) {
        this.head = head;
        this.body = body;
    }
    tabs = [
        ["de", "Deutsch",
            "Willkommen auf meiner privaten Webseite. Sie können hier meinen Lebenslauf oder meine Kontaktdaten, aber auch meine Projekte einsehen. Achtung! Diese Seite ist noch in ihrer Entwicklungsphase und weißt noch viele Fehler auf und enthält Elemente welche später sicherlich noch geändert werden.",
            new tab("Seiteninterne Suche", null), new tab("Bildergalerie", null), new tab("News", "<b>Hauptseite:</b> Support mehrerer Sprachen<br><b>Game:</b> Snake Python Game available<br><b>Lebenslauf:</b> Führerschein, LaTeX, ...<br><b>NEWS</b> hinzugefügt.")
        ],
        ["en", "English",
            "Welcome to my private homepage. Unfortunately I have not translated this website yet, also is it still in development.",
            new tab("Intern Search", null), new tab("Gallery", null), new tab("News", "Python Game in Projekte/Spiel")
        ],
        ["it", "Italiano",
            "Benvenuto allo mio sito web. Purtroppo, non ho ancora tradutto la pagina o finito programmarla.",
            new tab("Ricerca interna", null), new tab("Galeria", null), new tab("News", "Gioco in Python: Projekte/Spiel")
        ]
    ];
    var lang = 0;
    for (var i = 1; i < 3; i++) {
        if (tabs[i][0] == location.search.split('lang=')[1]) {
            lang = i;
            break
        }
    }
    document.getElementById("toptab").innerText = tabs[lang][2];
    doc_tab = document.getElementsByClassName("tab");
    for (var i = 0; i < 3; i++) {
        doc_tab[i].getElementsByClassName("head")[0].innerHTML = tabs[lang][i + 3].head +
            '<img class="icon expand" onclick="expand(this)" src="pictures/feather/chevron-up.svg">';
        if (tabs[lang][i + 3].body) {
            doc_tab[i].getElementsByClassName("body")[0].innerHTML = tabs[lang][i + 3].body;
        }
    }
    if (lang + 1 == tabs.length) {
        document.getElementsByClassName("info")[0].innerHTML =
            '<img class="icon_left" onclick="change_lang(0)" src="pictures/feather/type.svg"> ' + tabs[lang][1] + '<img class="icon" style="width:15;position:relative;right:-10px;top:-10px;" onclick="close_info(this)" src="pictures/feather/x.svg">';
    } else {
        document.getElementsByClassName("info")[0].innerHTML = '<img class="icon_left" onclick="change_lang(' + (lang + 1) + ')" src="pictures/feather/type.svg"> ' + tabs[lang][1] + '<img class="icon" style="width:15;position:relative;right:-10px;top:-10px;" onclick="close_info(this)" src="pictures/feather/x.svg">';
    }

    function change_lang(l) {
        location.href = "index.html?lang=" + tabs[l][0];
    }
    function close_info(element) {
        element.parentElement.style.display = "none";
    }
*/