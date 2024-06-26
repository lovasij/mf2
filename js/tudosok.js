let nyelv = localStorage.getItem('nyelv')
        let alaptudos = localStorage.getItem("valasztott_tudos")
        function nyelvmentes() {
            localStorage.clear();
            if (nyelv === "en") {
                localStorage.setItem('nyelv', "hu");}
            else{
                localStorage.setItem('nyelv', "en");
            }
            
        }
        function nyelvvalt() {
        if (nyelv === "hu") {
            nyelv = "en"
        }
        else if (nyelv ==="en") {
            nyelv = "hu"
        }
        szovegvalt()}
    function tudosvalt(az) {
        alaptudos = az;
        szovegvalt();
    }
    function szovegvalt() {
            if (nyelv === "en") {
                document.getElementById("k1").src = "../images/0_1.jpeg";
                document.getElementById("alap").textContent = "Főoldal";
                document.getElementById("lang").lang = "hu";
                document.getElementById("hu-en").title = "nyelv váltás";
                document.getElementById("hu-en").alt = "nyelv váltás";
            } else {
                document.getElementById("k1").src = "../images/0_1_en.jpeg";
                document.getElementById("alap").textContent = "Home";
                document.getElementById("lang").lang = "en";
                document.getElementById("hu-en").title = "language change";
                document.getElementById("hu-en").alt = "language change";
            }
            if (alaptudos === "Paul") {
            if (nyelv === "en") {
                document.getElementById("h1").textContent = "Paul Baran (1926. április 29. - 2011. március 26.)";
                document.getElementById("p1").textContent = '1959-ben csatlakozott a RAND Corporation-hez , Baran egy „túlélhető” kommunikációs rendszer megtervezésére vállalkozott';
                document.getElementById("p2").textContent = "A korabeli miniszámítógépes technológiát használva Baran és csapata kifejlesztett egy szimulációs csomagot, amellyel különböző fokú kapcsolódási fokú csomópontok tömbjének alapvető csatlakoztathatóságát tesztelték.";
                document.getElementById("p3").textContent = "Miután bebizonyította a túlélést, Barannak és csapatának be kellett mutatnia a terv koncepciójának bizonyítékát, hogy meg lehessen építeni. Ez magas szintű kapcsolási rajzokat tartalmazott, amelyek részletezik a hálózat felépítéséhez szükséges összes összetevő működését, felépítését és költségét, amely kihasználja a redundáns kapcsolatok új betekintését. Az eredmény az egyik első tárolási és továbbítási adatréteg-kapcsolási protokoll, egy kapcsolatállapot/távolságvektor-útválasztó protokoll és egy nem bizonyított kapcsolatorientált szállítási protokoll. A tervek részletes részletei megtalálhatók a RAND által 1964-ben kiadott On Distributed Communications jelentéssorozatban.";
                document.getElementById("p4").textContent = "Az On Distributed Communications megjelenése után csapata eredményeit számos közönségnek bemutatta, köztük az AT&T mérnökeit. A későbbi interjúkban Baran megemlítette, hogy az AT&T mérnökei gúnyolódtak a hangkommunikációhoz nem dedikált fizikai áramkörökről szóló ötletén, időnként azt állítva, hogy Baran egyszerűen nem érti, hogyan működik a beszédtávközlés.";
                document.getElementById("p5").textContent = "1969-ben, amikor az US Advanced Research Projects Agency (ARPA) elkezdte kidolgozni a számítási erőforrások megosztására szolgáló, hálózatba kapcsolt terminálkészlet ötletét, a referenciaanyagok között szerepelt Baran és a RAND Corporation „On Distributed Communications” című kötete. [3] Az interneten használt link-state routing protokollokat használó csomagkapcsolt hálózatok rugalmassága részben abból a kutatásból ered, hogy olyan hálózatot fejlesztenek ki, amely túlélhet egy nukleáris támadást.";
                document.getElementById("p6").textContent = "1968-ban Baran a Jövő Intézetének alapítója volt , majd más, a Szilícium-völgyben kifejlesztett hálózati technológiákban is részt vett. A számítógépes rendszerek és a magánélet témájában írt. Baran részt vett az NBS adattitkosítási szabványra vonatkozó javaslatának felülvizsgálatában 1976-ban.";
                document.getElementById("p7").textContent = 'Az 1980-as évek elején Baran megalapította a PacketCable, Inc-t, "hogy támogassa az impulzusos fizetős televíziós csatornákat, a helyileg generált videotex-et és a csomagos hangátvitelt". A PacketCable, más néven Packet Technologies, kivált a StrataComból , hogy a telefonpiacon kereskedelmi forgalomba hozza csomagolt hangtechnológiáját. Ez a technológia vezetett az első kereskedelmi forgalomban kapható, szabvány előtti aszinkron átviteli módú termékhez.';
                document.getElementById("p8").textContent = "Ő alapította meg a Telebitet , miután az 1980-as évek közepén megalkotta diszkrét többtónusú modemtechnológiáját . Ez volt az egyik első olyan kereskedelmi termék, amely ortogonális frekvenciaosztásos multiplexelést használt , amelyet később széles körben alkalmaztak a DSL modemekben és a Wi-Fi vezeték nélküli modemekben.";
                document.getElementById("p9").textContent = "1985-ben Baran megalapította a Metricom-ot , az első vezeték nélküli internetes céget, amely bevezette a Ricochet, az első nyilvános vezeték nélküli mesh hálózati rendszert. 1992-ben megalapította a Com21 nevű korai kábelmodem céget is. A Com21 után Baran megalapította és elnöke volt a GoBackTV-nek, amely a televíziós szolgáltatók személyes televíziós és kábeles IPTV infrastruktúra-berendezéseire szakosodott. Később megalapította a Plaster Networks céget, amely fejlett megoldást kínál az otthoni vagy kisirodai hálózati eszközök csatlakoztatására a meglévő vezetékeken keresztül.";
                document.getElementById("link").textContent = "Forrás: https://en.wikipedia.org/wiki/Paul_Baran"
                document.getElementById("klink").textContent = "Kép forrás: https://www.hte.hu/documents/10180/4688533/PB_message_block_structure.jpg/28e58edc-692b-a50b-c0dd-11be4bfdb805?t=1619545048435"
                let link = document.getElementById("link");
                link.href = "https://en.wikipedia.org/wiki/Paul_Baran";
                let klink = document.getElementById("klink");
                klink.href = "https://www.hte.hu/documents/10180/4688533/PB_message_block_structure.jpg/28e58edc-692b-a50b-c0dd-11be4bfdb805?t=1619545048435";
            }
            else if (nyelv === "hu") {
                document.getElementById('h1').textContent = "Paul Baran (April 29, 1926 - March 26, 2011)";
                document.getElementById("p1").textContent = 'Joining the RAND Corporation in 1959, Baran set out to design a "survivable" communications system';
                document.getElementById("p2").textContent = "Using computing technology of the day, Baran and his team developed a simulation simulation to test the appropriate connectivity of an array of nodes with varying degrees of connectivity.";
                document.getElementById("p3").textContent = "After proving survivability, Baran and his team had to show proof of concept for the design so it could be built. It includes high-level schematics detailing the operation, construction, and cost of all the components needed to build a network that uses new insights into redundant connections. The result is one of the first storage and transport data layer switching protocols, a contact face/distance vector routing protocol, and an unproven connection-oriented transport protocol. The plans are detailed in the On Distributed Communications series of reports published by RAND in 1964.";
                document.getElementById("p4").textContent = "After On Distributed Communications was published, he presented his team's findings to a variety of audiences, including AT&T engineers. In later interviews, Baran mentioned that AT&T engineers scoffed at his idea of ​​non-dedicated physical circuits for voice communications, at times claiming that Baran simply did not understand how voice communications worked.";
                document.getElementById("p5").textContent = "In 1969, when the US Advanced Research Projects Agency (ARPA) began developing the idea of ​​a networked set of terminals for sharing computing resources, reference materials included Baran and the RAND Corporation's On Distributed Communications. [3] The resiliency of packet-switched networks using link-state routing protocols used on the Internet stems in part from research into developing a network that can survive a nuclear attack.";
                document.getElementById("p6").textContent = "In 1968, Baran was the founder of the Future Institute, and later participated in other networking technologies developed in Silicon Valley. He has written on the subject of computer systems and privacy. Baran participated in the revision of the NBS data encryption standard proposal in 1976.";
                document.getElementById("p7").textContent = 'In the early 1980s, Baran founded PacketCable, Inc "to support pulsed pay television, locally generated videotex and packet voice". PacketCable, also known as Packet Technologies, spun off from StrataCom to commercialize its packaged voice technology in the telephone market. This technology led to the first commercially available pre-standard asynchronous transfer mode product.';
                document.getElementById("p8").textContent = "He founded Telebit after creating its discrete multitone modem technology in the mid-1980s. It was one of the first commercial products to use orthogonal frequency division multiplexing, which was later widely used in DSL modems and Wi-Fi wireless modems.";
                document.getElementById("p9").textContent = "In 1985, Baran founded Metricom, the first wireless Internet company, which introduced Ricochet, the first public wireless mesh network system. In 1992, he also founded an early cable modem company called Com21. After Com21, Baran founded and chaired GoBackTV, which specializes in personal television and cable IPTV infrastructure equipment for television providers. He later founded Plaster Networks, which offers an advanced solution for connecting home or small office network devices over existing wiring.";
                document.getElementById("link").textContent = "Source: https://en.wikipedia.org/wiki/Paul_Baran";
                document.getElementById("klink").textContent = "Image Source: https://www.hte.hu/documents/10180/4688533/PB_message_block_structure.jpg/28e58edc-692b-a50b-c0dd-11be4bfdb805?t=1619545048435";
                 let link = document.getElementById("link");
                link.href = "https://en.wikipedia.org/wiki/Paul_Baran";
                let klink = document.getElementById("klink");
                klink.href = "https://www.hte.hu/documents/10180/4688533/PB_message_block_structure.jpg/28e58edc-692b-a50b-c0dd-11be4bfdb805?t=1619545048435";
            }document.getElementById("tudoskep").src = "../images/Paul_Baran.jpg";
            document.getElementById("tudoskep").title = "Paul Baran";
            document.getElementById("tudosmunka").src = "../images/munkassag/paul.jpg";
            document.getElementById("title").textContent = "Paul Baran";
        }
        if (alaptudos === "Vannevar") {
            if (nyelv === "en") {
                document.getElementById("h1").textContent = "Vannevar Bush (1890. március 11. – 1974. június 28)";
                document.getElementById("p1").textContent = 'Amerikai tudós és közigazgatási tisztviselő volt, aki jelentős hatást gyakorolt a XX. századi tudományos és technológiai fejlődésre. Leginkább az "As We May Think" című esszéje által vált ismertté, amelyet 1945-ben írt és az "Atlantic Monthly" című folyóiratban jelentetett meg.';
                document.getElementById("p2").textContent = "Bush egyike volt azoknak az embereknek, akik kiemelkedő szerepet játszottak az amerikai haditechnológia fejlesztésében az első és a második világháborúban. A Massachusetts Institute of Technology (MIT) elektromos mérnökként kezdte pályafutását, majd később a haditechnikai kutatások irányába fordult.";
                document.getElementById("p3").textContent = 'Az "As We May Think" esszéjében Bush olyan elképzeléseket vetett fel, amelyek az információfeldolgozás és az emberi gondolkodás fejlődésére irányultak. Az esszében bemutatta a memex nevű készüléket, amely egyfajta asztali információs rendszer volt, amely lehetővé tette volna az ember számára, hogy tárolja, rendezze és hozzáférjen az információhoz. Bush előre látta az információs robbanást, és a memex koncepciója előre mutatott az internet, a hipertext és a személyes számítógépek korszakába.';
                document.getElementById("p4").textContent = "Bush számos fontos tisztséget töltött be az amerikai kormányban, köztük a Tudományos Kutatási és Fejlesztési Tanács (Office of Scientific Research and Development) elnöki tisztségét, ahol a haditechnikai kutatások irányításáért volt felelős. Később az atomenergia-fejlesztésben is kulcsszerepet játszott.";
                document.getElementById("p5").textContent = "Vannevar Bush hagyatéka hatalmas hatást gyakorolt a későbbi generációk tudományos és technológiai gondolkodására. A memex koncepciója inspirálta azokat a kutatókat és mérnököket, akik később az internet, a személyes számítógépek és az információs technológia más területein forradalmi változásokat hoztak létre. Bushot gyakran az információs korszak előfutáraként tartják számon.";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Forrás: https://en.wikipedia.org/wiki/Vannevar_Bush";
                document.getElementById("klink").textContent = "Kép forrás: https://slideplayer.hu/slide/2210849/8/images/3/Vannevar+Bush+Ted+Nelson+Tim+Berners-Lee+MEMEX+XANADU+WWW.jpg";
                let link = document.getElementById("link");
                link.href = "https://en.wikipedia.org/wiki/Vannevar_Bush";
                let klink = document.getElementById("klink");
                klink.href = "https://slideplayer.hu/slide/2210849/8/images/3/Vannevar+Bush+Ted+Nelson+Tim+Berners-Lee+MEMEX+XANADU+WWW.jpg";
                
            } else if (nyelv === "hu") {
                document.getElementById("h1").textContent = "Vannevar Bush (March 11, 1890 - June 28, 1974)";
                document.getElementById("p1").textContent = 'Was an American scientist and public administration official who had a significant impact on the 20th century. century scientific and technological development. He is best known for his essay "As We May Think", written in 1945 and published in the magazine "Atlantic Monthly".';
                document.getElementById("p2").textContent = "Bush was one of the people who played a prominent role in the development of American military technology in World War I and World War II. He began his career as an electrical engineer at the Massachusetts Institute of Technology (MIT), and later turned to military research.";
                document.getElementById("p3").textContent = 'In his essay "As We May Think," Bush proposed ideas that focused on the development of information processing and human thought. In the essay, he introduced a device called a memex, which was a type of desktop information system that would have allowed humans to store, organize, and access information. Bush foresaw the information explosion, and the memex concept ushered in the age of the Internet, hypertext, and personal computers.';
                document.getElementById("p4").textContent = "Bush held a number of important positions in the US government, including the presidency of the Office of Scientific Research and Development, where he was responsible for directing military research. Later, he also played a key role in the development of nuclear power.";
                document.getElementById("p5").textContent = "Vannevar Bush's legacy had a huge impact on the scientific and technological thinking of later generations. The memex concept inspired researchers and engineers who later revolutionized the Internet, personal computers, and other areas of information technology. Bush is often considered a forerunner of the information age.";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Source: https://en.wikipedia.org/wiki/Vannevar_Bush";
                document.getElementById("klink").textContent = "Image Source: https://slideplayer.hu/slide/2210849/8/images/3/Vannevar+Bush+Ted+Nelson+Tim+Berners-Lee+MEMEX+XANADU+WWW.jpg";
                let link = document.getElementById("link");
                link.href = "https://en.wikipedia.org/wiki/Vannevar_Bush";
                let klink = document.getElementById("klink");
                klink.href = "https://slideplayer.hu/slide/2210849/8/images/3/Vannevar+Bush+Ted+Nelson+Tim+Berners-Lee+MEMEX+XANADU+WWW.jpg";
            }document.getElementById("tudoskep").src = "../images/Vannevar_Bush.jpg";
            document.getElementById("tudosmunka").src = "../images/munkassag/vannevar.jpg";
            document.getElementById("title").textContent = "Vannevar Bush";
            document.getElementById("tudoskep").title = "Vannevar Bush";
        }
        if (alaptudos === "Vinton") {
            if (nyelv === "en") {
                document.getElementById("h1").textContent = "Vinton Cerf (1943. június 23. - napjainkig)";
                document.getElementById("p1").textContent = "Az internet egyik legfontosabb alakja, aki hatalmas hatást gyakorolt a modern kommunikációs technológiák fejlődésére és elterjedésére. Cerf szorosan együttműködött Robert Kahn-nal az internet protokolljainak (TCP/IP) kifejlesztésében, amelyek alapvető szerepet játszanak az internet működésében.";
                document.getElementById("p2").textContent = "Cerf szakmai pályafutása során számos fontos pozíciót töltött be az informatikai iparban és a kutatásban. A legismertebb az, hogy az ARPANET (az internet elődje) kifejlesztésénél és kialakításánál kulcsszerepet vállalt. A TCP/IP protokollt Cerf és Kahn fejlesztette ki, amely lehetővé tette az adatok hatékony átvitelét és kommunikációját az interneten keresztül. Ez az alapvető protokollrendszer az internet működésének alapját képezi mind a mai napig.";
                document.getElementById("p3").textContent = "Cerf később az internet széleskörűbb elfogadását és elterjedését támogatta és elősegítette. Dolgozott az MCI Communications és a Google számára is, és elnöke volt az Internet Corporation for Assigned Names and Numbers (ICANN) igazgatótanácsának. Jelenleg a Google alelnökeként dolgozik, az internetes technológiák továbbfejlesztésére és újításaira összpontosítva.";
                document.getElementById("p4").textContent = "Vinton Cerf sok elismerést és díjat kapott munkájáért az internet fejlesztésében. 2004-ben, együtt Robert Kahn-nal, megkapta a Nemzeti Technológiai Érdemrendet az internet protokolljainak kifejlesztéséért és terjesztéséért. A Cerf által végzett munka az interneten alapuló világunk alapvető részét képezi, és hatalmas hatással van mindennapi életünkre és gazdaságunkra.";
                document.getElementById("p5").textContent = "";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Forrás: https://hu.wikipedia.org/wiki/Vint_Cerf";
                let link = document.getElementById("link");
                link.href = "https://hu.wikipedia.org/wiki/Vint_Cerf";
                let klink = document.getElementById("klink");
                klink.href = "https://www.hte.hu/documents/10180/4847359/VC_Arpanet_1977.png/135513b1-4aa3-0165-c6b6-4169e0612edb?t=1687343951325";
            } else if (nyelv === "hu") {
                document.getElementById("h1").textContent = "Vinton Cerf (June 23, 1943 - to the present day)";
                document.getElementById("p1").textContent = "He is one of the most important figures of the Internet, who had a huge impact on the development and spread of modern communication technologies. Cerf worked closely with Robert Kahn to develop the Internet Protocols (TCP/IP), which play a fundamental role in how the Internet works.";
                document.getElementById("p2").textContent = "During his professional career, Cerf held several important positions in the IT industry and research. He is best known for playing a key role in the development and creation of ARPANET (the predecessor of the Internet). The TCP/IP protocol was developed by Cerf and Kahn, which enabled the efficient transfer and communication of data over the Internet. This basic protocol system forms the basis of the functioning of the Internet to this day.";
                document.getElementById("p3").textContent = "Cerf later supported and facilitated the wider adoption and spread of the Internet. He also worked for MCI Communications and Google, and served as chairman of the board of the Internet Corporation for Assigned Names and Numbers (ICANN). He currently serves as a vice president at Google, focusing on the advancement and innovation of Internet technologies.";
                document.getElementById("p4").textContent = "Vinton Cerf has received many recognitions and awards for his work in the development of the Internet. In 2004, together with Robert Kahn, he received the National Order of Merit in Technology for the development and dissemination of Internet protocols. The work done by Cerf is a fundamental part of our internet-based world and has a huge impact on our daily lives and economy.";
                document.getElementById("p5").textContent = "";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Source: https://hu.wikipedia.org/wiki/Vint_Cerf";
                document.getElementById("klink").textContent = "Image Source: https://www.hte.hu/documents/10180/4847359/VC_Arpanet_1977.png/135513b1-4aa3-0165-c6b6-4169e0612edb?t=1687343951325";
            }document.getElementById("tudoskep").src = "../images/Dr_Vint_Cerf.jpg";
            document.getElementById("tudosmunka").src = "../images/munkassag/vint.png";
            document.getElementById("title").textContent = "Vinton Cerf";
            document.getElementById("tudoskep").title = "Vinton Cerf";
            let link = document.getElementById("link");
                link.href = "https://hu.wikipedia.org/wiki/Vint_Cerf";
            let klink = document.getElementById("klink");
            klink.href = "https://www.hte.hu/documents/10180/4847359/VC_Arpanet_1977.png/135513b1-4aa3-0165-c6b6-4169e0612edb?t=1687343951325";
        }
        if (alaptudos === "Douglas") {
            if (nyelv === "en") {
                document.getElementById("h1").textContent = "Douglas Engelbart (1925. január 30 -  2013. július 2)";
                document.getElementById("p1").textContent = "Amerikai mérnök és informatikai szakember, aki a számítógépes interakció és az ember-gép interfész területén végzett úttörő munkájáról ismert. Legjelentősebb hozzájárulása a számítógépes világban az az innováció, amely a számítógépes egér és az olyan alapvető koncepciók, mint a grafikus felhasználói felület (GUI), az azonnali üzenetküldés és a hipertext, mögött állt.";
                document.getElementById("p2").textContent = 'Az 1960-as évek elején Engelbart a Stanford Research Institute (ma SRI International) munkatársa volt, ahol 1963-ban meghatározó előadást tartott a "Készségmérnöki eljárás" (Augmenting Human Intellect) című konferencián. Ebben az előadásban bemutatta a koncepciókat és az eszközöket, amelyek alapvetően megváltoztatták a számítógépek és az emberi felhasználók interakcióját.';
                document.getElementById("p3").textContent = "Engelbart nevéhez köthető az egér feltalálása is, amelyet először 1964-ben mutatott be. Az egér egy olyan eszköz, amely lehetővé teszi a felhasználók számára, hogy a számítógép képernyőjén lévő kurzort mozgassák és interakcióba lépjenek a digitális környezettel. Ez az egyszerű, de hatékony eszköz alapvető fontosságú volt a grafikus felhasználói felületek (GUI) fejlődésében és elterjedésében.";
                document.getElementById("p4").textContent = "Engelbart továbbá a hipertext fogalmát is előrevitte. A hipertext lehetővé teszi a felhasználók számára, hogy nem lineáris módon navigáljanak az információk között, és hivatkozzanak más dokumentumokra vagy helyekre az adott dokumentumban. Ez a fogalom később alapvető fontosságúvá vált az internetes böngészés és az információkeresés szempontjából.";
                document.getElementById("p5").textContent = "Engelbart munkássága nagy hatással volt a számítástechnika és az információtechnológia fejlődésére. A számítógépes egér és az általa inspirált felhasználói interfész-koncepciók forradalmasították a számítógépes technológiákat, és lehetővé tették az emberek számára, hogy könnyebben és hatékonyabban kommunikáljanak és dolgozzanak a digitális környezetben. Engelbartot gyakran az informatikai világ egyik legnagyobb visionáriusaként emlegetik.";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Forrás: https://hu.wikipedia.org/wiki/Douglas_Engelbart";
                document.getElementById("klink").textContent = "Kép Forrás: https://media.icdn.hu/content/entity/2018/04/25545/5d23bc29dc8dfdouglas-engelbart.jpg";
                let link = document.getElementById("link");
                link.href = "https://hu.wikipedia.org/wiki/Douglas_Engelbart";
                let klink = document.getElementById("klink");
                klink.href = "https://media.icdn.hu/content/entity/2018/04/25545/5d23bc29dc8dfdouglas-engelbart.jpg";
                
            } else if (nyelv === "hu") {
                document.getElementById("h1").textContent = "Douglas Engelbart (January 30, 1925 - July 2, 2013)";
                document.getElementById("p1").textContent = "American engineer and IT specialist known for his pioneering work in the field of computer interaction and human-machine interface. His most significant contribution to the computer world was the innovation behind the computer mouse and basic concepts such as the graphical user interface (GUI), instant messaging, and hypertext.";
                document.getElementById("p2").textContent = 'In the early 1960s, Engelbart was an employee of the Stanford Research Institute (now SRI International), where in 1963 he gave a key lecture at the conference entitled "Augmenting Human Intellect". In this presentation, he introduced the concepts and tools that have fundamentally changed the way computers and human users interact.';
                document.getElementById("p3").textContent = "The invention of the mouse, which he presented for the first time in 1964, can also be linked to Engelbart's name. A mouse is a device that allows users to move a cursor on a computer screen and interact with the digital environment. This simple but powerful tool was fundamental to the development and spread of graphical user interfaces (GUIs).";
                document.getElementById("p4").textContent = "Engelbart also advanced the concept of hypertext. Hypertext allows users to navigate through information in a non-linear manner and to link to other documents or locations within that document. This concept later became essential for Internet browsing and information retrieval.";
                document.getElementById("p5").textContent = "Engelbart's work had a great impact on the development of computing and information technology. The computer mouse and the user interface concepts it inspired revolutionized computer technologies and allowed people to communicate and work in the digital environment more easily and efficiently. Engelbart is often referred to as one of the greatest visionaries of the IT world.";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Source: https://hu.wikipedia.org/wiki/Douglas_Engelbart";
                document.getElementById("klink").textContent = "Image Source:https://media.icdn.hu/content/entity/2018/04/25545/5d23bc29dc8dfdouglas-engelbart.jpg";
            }document.getElementById("tudoskep").src = "../images/Douglas_Engelbart.jpg";
            document.getElementById("tudosmunka").src = "../images/munkassag/engelbart.jpg";
            document.getElementById("title").textContent = "Douglas Engelbart";
            document.getElementById("tudoskep").title = "Douglas Engelbart";
            let link = document.getElementById("link");
                link.href = "https://hu.wikipedia.org/wiki/Douglas_Engelbart";
                let klink = document.getElementById("klink");
                klink.href = "https://media.icdn.hu/content/entity/2018/04/25545/5d23bc29dc8dfdouglas-engelbart.jpg";
        }
        if (alaptudos === "Robert E.") {
            if (nyelv === "en") {
                document.getElementById("h1").textContent = "Robert E. Kahn (1938. december 23 - napjainkig)";
                document.getElementById("p1").textContent = "Amerikai informatikus, aki szorosan együttműködött Vinton Cerf-fel az internet protokolljainak (TCP/IP) kifejlesztésében. Kahn munkássága nagyban hozzájárult az internet kialakításához és terjesztéséhez, ami az emberiség számára az egyik legjelentősebb kommunikációs és információfeldolgozási eszköz lett.";
                document.getElementById("p2").textContent = "Kahnnek és Cerfnek sikerült létrehozniuk az internet működéséhez szükséges protokollt, amely az adatok hatékony átvitelét és kommunikációját teszi lehetővé a hálózaton keresztül. Ez a TCP/IP protokollrendszer az internet alapvető működési elve, és a mai napig alapját képezi az online kommunikáció és az adatátvitel számára.";
                document.getElementById("p3").textContent = "Kahn számos más fontos tisztséget is betöltött az informatikai iparban és a kutatásban. Dolgozott az ARPA (Advanced Research Projects Agency) munkatársaként, ahol az internet kialakításában játszott szerepét kezdetben megkezdte. Később az Elektronikus Közösségi Hálózatok Intézetének (Corporation for National Research Initiatives) elnökeként és az Internet Society társalapítójaként is tevékenykedett.";
                document.getElementById("p4").textContent = "Kahn hatalmas elismerést kapott munkájáért az internet terjesztésében és fejlesztésében. 2004-ben, együtt Vinton Cerf-fel, megkapta a Nemzeti Technológiai Érdemrendet az internet protokolljainak kifejlesztéséért és terjesztéséért. Kahn továbbra is aktív szereplője az informatikai világnak, és továbbra is támogatja az internetes technológiák fejlődését és terjesztését.";
                document.getElementById("p5").textContent = "";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Forrás: https://hu.wikipedia.org/wiki/Bob_Kahn";
                document.getElementById("klink").textContent = "Kép Forrás: https://hu.wikipedia.org/wiki/Bob_Kahn";
                let link = document.getElementById("link");
                link.href = "https://hu.wikipedia.org/wiki/Bob_Kahn";
                let klink = document.getElementById("klink");
                klink.href = "https://hu.wikipedia.org/wiki/Bob_Kahn";

            } else if (nyelv === "hu") {
                document.getElementById("h1").textContent = "Robert E. Kahn (December 23, 1938 - to the present day)";
                document.getElementById("p1").textContent = "American computer scientist who worked closely with Vinton Cerf in the development of Internet protocols (TCP/IP). Kahn's work greatly contributed to the development and spread of the Internet, which has become one of the most important means of communication and information processing for mankind.";
                document.getElementById("p2").textContent = "Kahn and Cerf succeeded in creating the protocol necessary for the Internet to function, which enables the efficient transfer and communication of data over the network. This TCP/IP protocol system is the basic operating principle of the Internet and still forms the basis for online communication and data transfer.";
                document.getElementById("p3").textContent = "Kahn has also held several other important positions in the IT industry and research. He worked as an employee of ARPA (Advanced Research Projects Agency), where he first started his role in the development of the Internet. He later served as president of the Corporation for National Research Initiatives and co-founded the Internet Society.";
                document.getElementById("p4").textContent = "Kahn has been widely recognized for his work in the spread and development of the Internet. In 2004, together with Vinton Cerf, he received the National Order of Technological Merit for the development and dissemination of Internet protocols. Kahn remains an active player in the IT world and continues to support the development and dissemination of Internet technologies.";
                document.getElementById("p5").textContent = "";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Source: https://hu.wikipedia.org/wiki/Bob_Kahn";
                document.getElementById("klink").textContent = "Image Source: https://hu.wikipedia.org/wiki/Bob_Kahn";
            }document.getElementById("tudoskep").src = "../images/Bob_Kahn.jpg";
            document.getElementById("tudosmunka").src = "../images/munkassag/robert_e_munkassaga.png";
            document.getElementById("title").textContent = "Robert E. Kahn";
            document.getElementById("tudoskep").title = "Robert E. Kahn";
            let link = document.getElementById("link");
                link.href = "https://hu.wikipedia.org/wiki/Bob_Kahn";
            let klink = document.getElementById("klink");
            klink.href = "https://hu.wikipedia.org/wiki/Bob_Kahn";
                
        }
        if (alaptudos === "J.C.R.") {
            if (nyelv === "en") {
                document.getElementById("h1").textContent = "J.C.R. Licklider (1915. március 11 - 1990. június 26.)";
                document.getElementById("p1").textContent = 'Amerikai pszichológus és informatikus volt, aki kulcsszerepet játszott az informatika és a számítástechnika korai fejlődésében. Licklider jelentős hozzájárulást tett az interaktív számítógépes rendszerek, valamint az ember-gép interfészek kutatásához és fejlesztéséhez. A legjelentősebb munkái közé tartozik az "Intergalactic Computer Network" című esszéje, amelyben előrevetítette az internet kialakulásának alapjait.';
                document.getElementById("p2").textContent = "Licklider számos fontos pozíciót töltött be az Egyesült Államokban az információtechnológia területén. Dolgozott az ARPA (Advanced Research Projects Agency) munkatársaként, ahol fontos szerepet játszott az ARPANET (az internet elődje) koncepciójának kidolgozásában. Licklider megértette a számítógépek és az emberi felhasználók közötti hatékony kommunikáció és együttműködés fontosságát, és hozzájárult az interaktív számítógépes rendszerek kialakításához és fejlesztéséhez.";
                document.getElementById("p3").textContent = 'Az "Intergalactic Computer Network" esszéjében Licklider olyan elképzeléseket vetített előre, amelyek alapján a számítógépek hálózatba kapcsolódva interaktív módon tudnak kommunikálni és együttműködni egymással és az emberekkel. Ez az esszé kulcsfontosságú inspirációt nyújtott későbbi kutatóknak és fejlesztőknek az internet létrehozásában és fejlesztésében.Az "Intergalactic Computer Network" esszéjében Licklider olyan elképzeléseket vetített előre, amelyek alapján a számítógépek hálózatba kapcsolódva interaktív módon tudnak kommunikálni és együttműködni egymással és az emberekkel. Ez az esszé kulcsfontosságú inspirációt nyújtott későbbi kutatóknak és fejlesztőknek az internet létrehozásában és fejlesztésében.';
                document.getElementById("p4").textContent = "Licklider életében számos elismerést kapott munkásságáért az informatika és a számítástechnika területén. A jelenlegi internetes környezet alapvetően épül Licklider elképzeléseire és javaslataira, és hatalmas hatást gyakorol az emberiség mindennapi életére és kommunikációjára.";
                document.getElementById("p5").textContent = "";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Forrás: https://en.wikipedia.org/wiki/J._C._R._Licklider";
                document.getElementById("klink").textContent = "Kép Forrás: https://en.wikipedia.org/wiki/J._C._R._Licklider";
                let link = document.getElementById("link");
                link.href = "https://en.wikipedia.org/wiki/J._C._R._Licklider";
                let klink = document.getElementById("klink");
                klink.href = "https://en.wikipedia.org/wiki/J._C._R._Licklider";


            } else if (nyelv === "hu") {
                document.getElementById("h1").textContent = "J.C.R. Licklider (March 11, 1915 - June 26, 1990)";
                document.getElementById("p1").textContent = 'He was an American psychologist and computer scientist who played a key role in the early development of information technology and computing. Licklider has made significant contributions to the research and development of interactive computer systems and human-machine interfaces. Among his most significant works is his essay "Intergalactic Computer Network", in which he predicted the foundations of the Internet.';
                document.getElementById("p2").textContent = "Licklider has held a number of important positions in information technology in the United States. He worked at ARPA (Advanced Research Projects Agency), where he played an important role in developing the concept of ARPANET (the predecessor of the Internet). Licklider understood the importance of effective communication and collaboration between computers and human users and contributed to the design and development of interactive computer systems.";
                document.getElementById("p3").textContent = 'In his essay "Intergalactic Computer Network", Licklider envisioned a way for computers to interact and interact with each other and with humans when connected to a network. This essay provided key inspiration for later researchers and developers in the creation and development of the Internet.';
                document.getElementById("p4").textContent = "During Licklider's lifetime, he received numerous awards for his work in the field of information technology and computer technology. The current Internet environment is fundamentally based on Licklider's ideas and suggestions, and has a huge impact on humanity's daily life and communication.";
                document.getElementById("p5").textContent = "";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Source: https://en.wikipedia.org/wiki/J._C._R._Licklider";
                document.getElementById("klink").textContent = "Image Source: https://en.wikipedia.org/wiki/J._C._R._Licklider";             
            }document.getElementById("tudoskep").src = "../images/J._C._R._Licklider.jpg";
            document.getElementById("tudosmunka").src = "../images/munkassag/jcr_munkassaga.jpeg";
            document.getElementById("title").textContent = "J. C. R. Licklider";
            document.getElementById("tudoskep").title = "J. C. R. Licklider";
            let link = document.getElementById("link");
                link.href = "https://en.wikipedia.org/wiki/J._C._R._Licklider";
            let klink = document.getElementById("klink");
            klink.href = "https://en.wikipedia.org/wiki/J._C._R._Licklider";

        }
        if (alaptudos === "Robert M.") {
            if (nyelv === "en") {
                document.getElementById("h1").textContent = "Robert Metcalfe (1946. április 7 -napjainkig.)";
                document.getElementById("p1").textContent = "Amerikai informatikus és vállalkozó, aki az Ethernet hálózati technológia megalkotója. Metcalfe munkássága nagyban hozzájárult az adatok gyors és hatékony átviteléhez a helyi hálózatokon keresztül, ami alapvető fontosságúvá vált a modern informatikai rendszerekben.";
                document.getElementById("p2").textContent = "Metcalfe az Xerox PARC (Xerox Palo Alto Research Center) munkatársaként dolgozott az 1970-es évek elején, ahol az Ethernetet fejlesztette ki, egy olyan helyi hálózati technológiát, amely lehetővé teszi a számítógépek közötti kommunikációt. Az Ethernet protokollrendszer létrehozása forradalmasította a helyi hálózatokat, és az alapját képezte a modern számítógépes hálózatoknak.";
                document.getElementById("p3").textContent = "Metcalfe később elhagyta az Xeroxot, hogy megalapítsa az 3Com Corporation nevű vállalatot, amely a számítógépes hálózati eszközök gyártására és értékesítésére specializálódott. Az Ethernet szabványosítása és elterjesztése hatalmas siker volt, és a 3Com jelentős szerepet játszott ebben a folyamatban.";
                document.getElementById("p4").textContent = "Metcalfe vállalkozóként és technológiai tanácsadóként is tevékenykedett. A számítógépes hálózatok terén elért eredményeiért számos elismerést és díjat kapott. Metcalfe életpályája és munkássága jelentős hatást gyakorolt az informatikai iparra és a modern technológia fejlődésére, különösen a hálózati kommunikáció terén.";
                document.getElementById("p5").textContent = "";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Forrás: https://en.wikipedia.org/wiki/Robert_Metcalfe";
                document.getElementById("klink").textContent = "Kép Forrás: https://en.wikipedia.org/wiki/Robert_Metcalfe";
                let link = document.getElementById("link");
                link.href = "https://en.wikipedia.org/wiki/Robert_Metcalfe";
                let klink = document.getElementById("klink");
                klink.href = "https://en.wikipedia.org/wiki/Robert_Metcalfe";
            } else if (nyelv === "hu") {
                document.getElementById("h1").textContent = "Robert Metcalfe (April 7, 1946 to the present day.)";
                document.getElementById("p1").textContent = "American computer scientist and entrepreneur who is the creator of Ethernet network technology. Metcalfe's work greatly contributed to the fast and efficient transfer of data over local area networks, which has become essential in modern IT systems.";
                document.getElementById("p2").textContent = "Metcalfe worked at Xerox PARC (Xerox Palo Alto Research Center) in the early 1970s, where he developed Ethernet, a local area network technology that enables communication between computers. The creation of the Ethernet protocol system revolutionized local area networks and formed the basis of modern computer networks.";
                document.getElementById("p3").textContent = "Metcalfe later left Xerox to found the 3Com Corporation, which specialized in the manufacture and sale of computer networking equipment. The standardization and spread of Ethernet was a huge success, and 3Com played a major role in that process.";
                document.getElementById("p4").textContent = "Metcalfe has also worked as an entrepreneur and technology consultant. He has received numerous recognitions and awards for his achievements in the field of computer networks. Metcalfe's career and work had a significant impact on the IT industry and the development of modern technology, especially in the field of network communication.";
                document.getElementById("p5").textContent = "";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Source: https://en.wikipedia.org/wiki/Robert_Metcalfe";
                document.getElementById("klink").textContent = "Image Source: https://en.wikipedia.org/wiki/Robert_Metcalfe";
            }document.getElementById("tudoskep").src = "../images/With_Bob_Metcalfe_(cropped).jpg";
            document.getElementById("tudosmunka").src = "../images/munkassag/robert_munkassaga.png";
            document.getElementById("title").textContent = "Robert Metcalfe";
            document.getElementById("tudoskep").title = "Robert Metcalfe";
            let link = document.getElementById("link");
            link.href = "https://en.wikipedia.org/wiki/Robert_Metcalfe";
                let klink = document.getElementById("klink");
                klink.href = "https://en.wikipedia.org/wiki/Robert_Metcalfe";
            
            
        }
        if (alaptudos === "Lawrence") {
            if (nyelv === "en") {
                document.getElementById("h1").textContent = "Lawrence Roberts (1937. december 21 - 2018. december 26.)";
                document.getElementById("p1").textContent = "Amerikai informatikus és mérnök volt, aki kiemelkedő szerepet játszott az ARPANET létrehozásában, amely az internet elődje volt. Roberts számos fontos technológiai innovációban vett részt, amelyek meghatározóak voltak az internetes kommunikáció és adatátvitel fejlődésében.";
                document.getElementById("p2").textContent = "Roberts az ARPANET projekt vezetője volt az ARPA (Advanced Research Projects Agency) munkatársaként az 1960-as évek végén és az 1970-es évek elején. Az ARPANET az első kísérleti számítógépes hálózat volt, amelyet a katonai kutatás finanszírozott az Egyesült Államokban. Roberts irányítása alatt a kutatócsoport megalkotta az ARPANET alapvető protokolljait és technológiáit, amelyek lehetővé tették a számítógépek közötti kommunikációt és adatcsere folyamatát.";
                document.getElementById("p3").textContent = "A legfontosabb hozzájárulása a hálózatok területén az volt, hogy felismerte az adatok címzésének és útvonalválasztásának fontosságát. Elkészítette az ARPANET hálózatához szükséges protokollokat és algoritmusokat, amelyek lehetővé tették az adatok csomagokba szervezését és továbbítását a hálózaton keresztül.";
                document.getElementById("p4").textContent = "Roberts később más fontos szerepet is vállalt az informatikai iparban. Alapította a Telenet nevű vállalatot, amely az első kereskedelmi számítógépes hálózatot hozta létre az Egyesült Államokban. Továbbá tanácsadóként és technológiai vezetőként tevékenykedett különböző informatikai vállalatoknál.";
                document.getElementById("p5").textContent = "Lawrence Roberts hagyatéka az internet és a modern hálózati technológiák terén maradandó. Munkája hozzájárult az internetes kommunikáció forradalmi fejlődéséhez és az információ világméretű elérhetőségének lehetővé tételéhez.";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Forrás: https://en.wikipedia.org/wiki/Lawrence_Roberts_(scientist)";
                document.getElementById("klink").textContent = "Kép Forrás: https://jelenbolajovobe.blog.hu/2018/09/06/muholdas_kommunikacios_rendszerek_biztonsagi_resei";
                let link = document.getElementById("link");
                link.href = "https://en.wikipedia.org/wiki/Lawrence_Roberts_(scientist)";
                let klink = document.getElementById("klink");
                klink.href = "https://jelenbolajovobe.blog.hu/2018/09/06/muholdas_kommunikacios_rendszerek_biztonsagi_resei";
            } else if (nyelv === "hu") {
                document.getElementById("h1").textContent = "Lawrence Roberts (December 21, 1937 - December 26th, 2018)";
                document.getElementById("p1").textContent = "He was an American computer scientist and engineer who played a prominent role in the creation of the ARPANET, the precursor to the Internet. Roberts was involved in many important technological innovations that were decisive in the development of Internet communication and data transfer.";
                document.getElementById("p2").textContent = "Roberts was the head of the ARPANET project as an employee of ARPA (Advanced Research Projects Agency) in the late 1960s and early 1970s. ARPANET was the first experimental computer network funded by military research in the United States. Under Roberts' direction, the research team created the basic protocols and technologies of the ARPANET, which enabled the communication and data exchange process between computers.";
                document.getElementById("p3").textContent = "His most important contribution to the field of networks was his recognition of the importance of addressing and routing data. He created the protocols and algorithms needed for the ARPANET network, which allowed data to be organized into packets and transmitted over the network.";
                document.getElementById("p4").textContent = "Roberts later took on other important roles in the IT industry. He founded a company called Telenet, which created the first commercial computer network in the United States. He also worked as a consultant and technology manager at various IT companies.";
                document.getElementById("p5").textContent = "Lawrence Roberts' legacy on the Internet and modern networking technologies is enduring. His work contributed to the revolutionary development of Internet communication and the worldwide availability of information.";
                document.getElementById("p6").textContent = "";
                document.getElementById("p7").textContent = "";
                document.getElementById("p8").textContent = "";
                document.getElementById("p9").textContent = "";
                document.getElementById("link").textContent = "Source: https://en.wikipedia.org/wiki/Lawrence_Roberts_(scientist)";
                document.getElementById("klink").textContent = "Image Source: https://jelenbolajovobe.blog.hu/2018/09/06/muholdas_kommunikacios_rendszerek_biztonsagi_resei";               
            }document.getElementById("tudoskep").src = "../images/larry_roberts.jpg";
            document.getElementById("tudosmunka").src = "../images/munkassag/lawrence_munkassaga.jpg";
            document.getElementById("title").textContent = "Lawrence Roberts";
            document.getElementById("tudoskep").title = "Lawrence Roberts"; 
            let link = document.getElementById("link");
                link.href = "https://en.wikipedia.org/wiki/Lawrence_Roberts_(scientist)";
            let klink = document.getElementById("klink");
            klink.href = "https://jelenbolajovobe.blog.hu/2018/09/06/muholdas_kommunikacios_rendszerek_biztonsagi_resei";
        }
    }
    szovegvalt()
    document.getElementById("hu-en").addEventListener("click", nyelvvalt);