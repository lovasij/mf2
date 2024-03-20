let nyelv = NaN

function nyelvvalt() {
    if (nyelv === "hu") {
        document.getElementById("k1").src = "images/0_1_en.jpeg";
        document.getElementById("h1").textContent = "Legends of the Internet";
        document.getElementById("p1").textContent = "Nowadays, when we don't understand something, we seek relaxation, look for recipes, or want to talk to our friends, family members. We just go to the internet. But have we ever  thinked about,who can we thank for all this?";        
        document.getElementById("p2").textContent = "The internet has become an everyday tool, but back in the 1800s and 1900s, when it was still being made, people could only dream of such a tool.";    
        document.getElementById("p3").textContent = "During the development of the internet, numerous people have played important roles, including governmental agencies, researchers, universities, corporations, and scientists. ";
        document.getElementById("p4").textContent = "This page is about eight of the most important scientists who contributed to the development of the internet! ";
        document.getElementById("p5").textContent = "These eight scientists are:";
        document.getElementById("p6").textContent = "We write about their work separately.";
        document.getElementById("title").textContent = "Legends of the internet";
        document.getElementById("lang").lang = "en";
        document.getElementById("hu-en").title = "language change";
        document.getElementById("hu-en").alt = "language change";
        nyelv = "en";
    } else if (nyelv === "en") {
        document.getElementById("k1").src = "images/0_1.jpeg";
        document.getElementById("h1").textContent = "Internet legendái";
        document.getElementById("p1").textContent = "Manapság, ha nem értünk, kikapcsolódni szeretnék, recepteket keresünk, vagy beszélni szeretnénk barátainkal, család tagjainkal, abban nagy szerepet játszik az internet. De valaha belegondultunk,hogy kiknek köszönthetjük mind ezt.";        
        document.getElementById("p2").textContent = "Az internet mára egy mindenapi eszköz lett, de a az 1800-as 1900-es években mikor még csak készítették akkor csak álmodozhattak egy ilyen eszközről.";    
        document.getElementById("p3").textContent = "Az internet kialakítása és fejlődése során számos szereplő játszott fontos szerepet, beleértve a kormányzati ügynökségeket, kutatókat, egyetemeket, vállalatokat és tudósokat is.";   
        document.getElementById("p4").textContent = "Ez az oldal a 8 egyik legfontosabb  tudósról szól akik részt vettek az internet fejlődésében!";
        document.getElementById("p5").textContent = "Ez a nyolc tudós:";
        document.getElementById("p6").textContent = "Az ő munkásságukról írunk külön-külön is.";
        document.getElementById("title").textContent = "Internet legendái";
        document.getElementById("lang").lang = "hu";
        document.getElementById("hu-en").title = "nyelv váltás";
        document.getElementById("hu-en").alt = "nyelv váltás";
        nyelv = "hu";}}
        
        if (localStorage.length === 1) {
            nyelv = localStorage.getItem('nyelv');
            nyelvvalt()
        } else{
            nyelv = "hu";
            localStorage.setItem('nyelv', nyelv);
            nyelvvalt()
        }
    
        document.getElementById("hu-en").addEventListener("click", nyelvvalt);

        function alaptudos(tudos) {
    localStorage.setItem('valasztott_tudos', tudos);
    localStorage.setItem('nyelv', nyelv);
    }