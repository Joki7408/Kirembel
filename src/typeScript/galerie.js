"use strict";
document.body.onload = createPage;
/**
 * Creates the galerie page
 */
function createPage() {
    let scriptEle = document.createElement("div");
    scriptEle.setAttribute("async", "false");
    scriptEle = createRow(scriptEle);
    document.body.appendChild(scriptEle);
}
/**
 * Creates the rows of the galerie with the images inside and calls the createImage function
 * @param scriptEle the element to what the rest is declared to
 * @returns scriptEle
 */
function createRow(scriptEle) {
    //createImage();
    let counter = 0;
    let current = document.createElement("div");
    let row = document.createElement("div");
    ;
    images.forEach((source) => {
        if (counter % 4 === 0) {
            row = document.createElement("div");
            row.setAttribute("class", "row galerieRow");
        }
        let frame = createImage(source, counter);
        row.appendChild(frame);
        current.appendChild(row);
        counter++;
    });
    scriptEle.appendChild(current);
    return scriptEle;
}
/**
 * Create an image element
 * @param source String of the image src
 * @param counter number which part the img is in the imgText
 * @returns the imgFrame as an img HTML element
 */
function createImage(source, counter) {
    const imgFrame = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", source);
    img.setAttribute("class", "defaultImg");
    img.setAttribute('onClick', "clickImg(" + "'" + source + "'," + "'" + imgTexts[counter] + "'" + ")");
    imgFrame.setAttribute("class", "frame column");
    imgFrame.appendChild(img);
    return imgFrame;
}
/**
 * Funcion that shows the image in big with a description text
 * @param source String of the image src
 * @param text text that describes the image
 * @returns
 */
function clickImg(source, text) {
    //const bigFrame = document.createElement("div");
    const docFrame = document.getElementById("bigFrame");
    if (docFrame === null) {
        return;
    }
    const backgroundOverlay = document.createElement("div"); //Element that is in the background so the user cant click anywhere else
    const biggerImg = document.createElement("img"); //big image shown on the left
    const textFrame = document.createElement("div"); //frame for the text and header
    const header = document.createElement("div"); //headline of the image text/name of the image
    const descriptionText = document.createElement("div"); //text that describes the image
    backgroundOverlay.setAttribute("class", "backgroundOverlay");
    biggerImg.setAttribute("src", source);
    biggerImg.setAttribute("class", "biggerImg");
    textFrame.setAttribute("class", "textFrame");
    header.setAttribute("class", "hl03");
    descriptionText.setAttribute("class", "txt04 imageText");
    header.innerHTML = text.split(';')[0];
    descriptionText.innerHTML = text.split(';')[1];
    document.body.appendChild(backgroundOverlay);
    textFrame.appendChild(header);
    textFrame.appendChild(descriptionText);
    docFrame.appendChild(biggerImg);
    docFrame.appendChild(textFrame);
    docFrame.style.display = "inline-block";
    backgroundOverlay.onclick = function () {
        hide(docFrame);
        hide(backgroundOverlay);
        biggerImg.remove();
        textFrame.remove();
    };
    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
            hide(docFrame);
            hide(backgroundOverlay);
            biggerImg.remove();
            textFrame.remove();
        }
    });
}
function hide(element) {
    element.style.display = "none";
}
const images = ["../../resources/images/image_single_img/001_zugang_zum_ich_2.png",
    "../../resources/images/image_single_img/002_das_selbst_1.png",
    "../../resources/images/image_single_img/003_das_selbst_2.png",
    "../../resources/images/image_single_img/004_koerper_und_bewusstsein.png",
    "../../resources/images/image_single_img/005_innerer_kern.png",
    "../../resources/images/image_single_img/006a_freiheit_des_geistes.png",
    "../../resources/images/image_single_img/006b_wahrnehmung.png",
    "../../resources/images/image_single_img/007_optimale_lebensform.png",
    "../../resources/images/image_single_img/008_schleier_der_wahrnehmung.png",
    "../../resources/images/image_single_img/009_frau_ohne_titel.png",
    "../../resources/images/image_single_img/010_seroquel_prolong.png",
    "../../resources/images/image_single_img/011_wut_und_verwirrniss.png",
    "../../resources/images/image_single_img/013_abgruende_des_selbst.png",
    "../../resources/images/image_single_img/014_angst.png",
    "../../resources/images/image_single_img/015_selbstaufloesung.png",
    "../../resources/images/image_single_img/012_bogendynamik_small.png",
    "../../resources/images/image_single_img/017_grenzen_der_wahrnehmung.png",
    "../../resources/images/image_single_img/085_AmSchaufenster_small.JPG",
    "../../resources/images/image_single_img/285_sehnsuchtsvoller_blick_zu_den_sternen_small.JPG",
    "../../resources/images/image_single_img/231_huenengrab.png",
    "../../resources/images/image_single_img/241a_UrsuppeI.png",
    "../../resources/images/image_single_img/241b_UrsuppeII.png",
    "../../resources/images/image_single_img/241c_UrsuppeIII.png",
    "../../resources/images/image_single_img/242a_Urzeitperle.png",
    "../../resources/images/image_single_img/242b_Urzeitfelsen.png",
    "../../resources/images/image_single_img/243_kontamination2.png",
    "../../resources/images/image_single_img/245_lustig_plaetschernder_lavabach.png",
    "../../resources/images/image_single_img/018a_gefangen_skizze.png",
    "../../resources/images/image_single_img/023_maitaenzerin.png",
    "../../resources/images/image_single_img/024_strandläuferin.png",
    "../../resources/images/image_single_img/025_herkules_ von_koeln.png",
    "../../resources/images/image_single_img/026_missverständniss.png",
    "../../resources/images/image_single_img/027_infosmog.png",
    "../../resources/images/image_single_img/028_schleichender_alltag.png",
    "../../resources/images/image_single_img/250_Aufbruch_small.png",
    "../../resources/images/image_single_img/251_Absorbtion._small.png",
    "../../resources/images/image_single_img/252_Reproduktion_small.png",
    "../../resources/images/image_single_img/280_Aequatorialbalance.JPG",
    "../../resources/images/image_single_img/490_FreundlicherHerr.JPG",
    "../../resources/images/image_single_img/500_stillleben_zur_guten_nacht.png"
];
const imgTexts = [
    "Zugang zum ich 2;Versucht man innere Beweggründe in einem selbst zu erkennen, verweigert sich das Gehirn der Selbstanalyse. Es ist nicht zu ergründen, warum man bestimmte Vorlieben, Hobbys aber auch schlechte Züge oder Marotten hat.Schnell finden sich zwar ein paar oberflächliche Motive, werden dieseaber weiter hinterfragt bleibt oft nur der Blick in eine finstere Höhle, deren Zugang versperrt ist. Tief in dieser Höhle sitz unser wahres ich,gut geschützt und verborgen vor allen Anderen und uns selbst. Die hier gezeigte Darstellung ist eine sehr ähnliche Kopie des ursprünglichen Bildes gleichen Namens von 2003. Die neue Darstellung ist lediglich ein wenig größer und mit qualitativ hochwertigen Materialen erstellt.",
    "Das Selbst 1;Wenn man versucht sich selbst zu beschreiben, das eigene Wesen mit Worten zu definieren, wird selten mehr heraus kommen als eine wage Beschreibung, eine schwammige Formulierung die niemandem den wahren Kern des eigenen Wesens nahe bringen wird. Adäquat dazu verhält es sich mit bildlichen Darstellungen. Aus diesem Grund ist in der nebenstehenden Zeichnung das Wesen auch als ein unförmiger, kaum beschreibbarer Körper dargestellt. Der Körper steht aufrecht, verwachsen auf mit einer groben Kugel, der Stand ist äußerst filigran und instabil, ein Sinnbild für die Unsicherheit unser Existenz. Gestützt wird es durch wahllos gespannte Sehnen, einwirres Netz, das aber zugleich schmerzhaft in den Körper einschneidet. Mit diesem Netz sind die physischen und gesellschaftlichen Zwänge symbolisiert, die uns in unserer persönlichen Freiheit stark eingrenzen, uns aber zum anderen auch Halt in unserer labilen Existenz geben. Diese erste Darstellung des Selbst von 2007 habe ich 2018 noch einmal aufgegriffen und plakativer in Aquarell wiederholt. (siehe folgendes Bild) Sie sind einige meiner persönlich bedeutendsten Bilder, die ich im Laufe der Zeit gemalt habe.",
    "Das Selbst 2;Wenn man versucht sich selbst zu beschreiben, das eigene Wesen mit Worten zu definieren, wird selten mehr heraus kommen als eine wage Beschreibung, eine schwammige Formulierung dieniemandem den wahren Kern des eigenen Wesens nahe bringen wird. <br>Adäquat dazu verhält es sich mit bildlichen Darstellungen. Aus diesem Grund ist in der nebenstehenden Zeichnung das Wesen auch als ein unförmiger, kaum beschreibbarer Körper dargestellt. Der Körper steht aufrecht auf mit einer groben Kugel, der Stand ist äußerst filigran und instabil, ein Sinnbild für die Unsicherheit unser Existenz. Gestützt wird es durch wahllos gespannte Sehnen, ein wirres Netz, das aber zugleich schmerzhaft in den Körper einschneidet. Mit diesem Netz sind die physischen und gesellschaftlichen Zwänge symbolisiert, die uns in unserer persönlichen Freiheit stark eingrenzen, uns aber zum anderen auch Halt in unserer labilen Existenz geben. In dieser zweite Darstellung des Selbst von 2018 habe ich die ursprüngliche Iddee von 2007 (siehe vorheriges Bild) noch einmal aufgegriffen und plakativer in Aquarell wiederholt. Sie sind einige meiner persönlich bedeutendsten Bilder, die ich im Laufe der Zeit gemalt habe.",
    "Körper und Bewusstsein;Ist das Gehirn der zentrale Sitz unseres Selbstbewußtseins und des kognitiven Denkens, so folgt daraus, dass ausnahmslos alle von uns gemachten Erfahrungen und Informationen durch den Filter unserer Sinnesorgane zur Wahrnehmung gelangen. Wenig Beachtung wird aber gemeinhin der Tatsache geschuldet, dass unsere Sinnesorgane zur Überlebensfähigkeit in der urzeitlichen, gefährlichen, freien Natur konzipiert sind, nicht aber zum höheren Erkenntnisgewinn über das Wesen der Natur selbst. Die Art der Wahrnehmung bestimmt aber essentiell unser Denken und hat gleichfalls Einfluss auf kognitive Schlüsse zu denen unser Gehirn in der Lage ist. Unter Kenntnisnahme dieser Vorabinformation bilden wir uns also ein die Zusammenhänge der Welt zu verstehen - oder verstehen wir eher, was wir in der Lage sind zu verstehen? Was sind die wahren Zusammenhänge in der Welt?",
    "Der innere Kern;Tief im inneren, verborgen und geschützt bewahrt ein jeder seinen inneren Kern, wunderschön und sehr verletzlich. Aus diesem Grund ist der Kern, in einem dunklen Raum, unberührbar und weich in einem Netz aufgehangen, über das er nach außen mit der Umwelt kommuniziert. Aber ist unser innerer Kern wirklich so verletzlich oder verfügt der Kern womöglich über eine sehr harte und robuste Schale? Vielleicht schützen und verbergen wir unseren inneren Kern eher vor uns selbst um nicht zu sehen wer wir wirklich sind. ",
    "Freihet des Geistes;Frei stehend befindet sich ein menschliches Gehirn auf seinem Gehirnstamm. Das Gehirn ist durch scharfkantige Blechstreifen netzartig eingeschnürt. Es findet kein Austausch mit der Umgebung statt. Durch die Umklammerung des Gehirns wird die Begrenztheit des Denkens ausgedrückt. Selbst ein freier Geist in einem weiten Raum ist nicht in der Lage, seine eigenen Begrenzungen ab zu werfen und frei zu denken. Einen Monat nach der Erstellung dieses Bildes habe ich das Thema noch einmal aufgegriffen und in der Zeichnung `Wahrnehmung` ein weiteres mal ausgearbeitet.",
    "Der innere Kern;Frei stehend befindet sich ein menschliches Gehirn auf seinem Gehirnstamm. Das Gehirn ist durch scharfkantige Blechstreifen netzartig eingeschnürt. Kommunikation mit der Umwelt findet nur über gut gekapselte Leitungen statt. Durch die Umklammerung des Gehirns wird die Begrenztheit des Denkens ausgedrückt. Selbst ein freier Geist in einem weiten Raum ist nicht in der Lage, seine eigenen Begrenzungen ab zu werfen und frei zu denken, zumal alle Informationen und Wahrnehmungen über die Zuleitungen zugeführt werden. Woher oder womit die Zuleitungen versorgt werden bleibt dem Gehirn wie auch dem Betrachter des Bildes verborgen. Es lassen sich keine Rückschlüsse auf die Qualität ziehen. Einen Monat vor der Erstellung dieses Bildes hatte ich das Thema bereits schon einmal aufgegriffen, in der Zeichnung `Freiheit des Geistes`, diesmal hier aber um die zweifelhafte Qualität unserer Fähigkeit, unsere Umwelt wahr zu nehmen, erweitert.",
    "Optimale Lebensform;Nimmt man sich die essentiellen Grundbausteine der Natur, einfach gebaute Einzeller zum Anschauungsobjekt, kann man als wesentliche Grundfunktion die Nährstoffaufnahme, deren Verstoffwechselung und die anschließende Ausscheidung unbrauchbarer Endprodukte beobachten. Das ändert sich grundsätzlich auch nicht bei den sogenannten höheren Lebensformen. Eine optimierte Basisform könnte also wie im nebenstehenden Bild aussehen, was weitergehend zu der Frage führt, was die eigentliche Motivation in unserem Leben ist, bestimmte Ziele zu erreichen.",
    "Schleier der Wahrnehmung;Wir sind umgeben von einem atemberaubenden, gigantischen Kosmos, voll mit Mystik und Wunderbarem, in dem faszinierende physikalische, chemische und biologische Abläufe stattfinden. Gigantische Energien wechseln ihre Zustände und es gibt unverständlicher Weise auch noch das Leben. All dies findet permanent um uns herum statt, immer und in diesem Augenblick – wenn es denn die Zeit überhaupt gibt – und wir können nur einen bescheidenen Bruchteil all dessen wahrnehmen und begreifen. Schade eigentlich, es würde aber vermutlich sicher unseren Geist sprengen, kämen alle Eindrücke auf einmal und ungehindert auf uns zu. Der Schleier der Wahrnehmung ist daher unerlässlich für unsere Existenz, auch wenn durch ihn vieles im Verborgenen bleibt. Andererseits verbirgt der Schleier aber auch unser wahres Selbst vor dem gewaltigen Äußeren.",
    "Frau ohne Titel;Um unsere empfindliche Seele vor den Verletzungen und Grausamkeiten der Welt zu schützen, verbergen wir diese gerne durch die Verhüllung unserer Wahrnehmungsmöglichkeiten. Eine nicht wahrgenommene Bedrohung erzeugt auch keine Angst. Mit dieser Strategie ist das Überleben in unserer Gesellschaft durchaus gut möglich – wenn man etwas Glück hat.",
    "Seroquel Prolong;Oft gibt es eine Diskrepanz zwischen unseren Wünschen und den Möglichkeiten diese umzusetzen. Dabei spielt es keine Rolle, ob es sich um materielle, emotionale oder intellektuelle Wünsche handelt. Die vermeidliche Unerreichbarkeit deckelt uns und begrenzt uns in unserem Tun.",
    "Voll Wut und Verwirrnis;Dieses Bild ist aus der verzweifelten Wut über die Unfähigkeit entstanden, die inneren Zwänge nicht einfach abwerfen zu können um sich frei entfalten zu können. Unter einem drückenden, schweren Panzer ist der Mensch eingeklemmt und versucht sich selbst mit dürren, kraftlosen Armen davon zu befreien. Dabei schafft er es schon kaum, auf ebenso dürren Beinen stehen zu bleiben.",
    "Bogendynamik;Eine Anordnung von Bögen verschiedener Radien, schattiert mit plakativen Farben. Dreht man gedanklich das Bild um 90° nach rechts, kann man in den Bögen die untere Hälfte eines Gesichts erkennen. Es ist immer wieder faszinierend, auf welch einfache Geometrien sich hochkomplexe Gebilde der Natur reduzieren lassen.",
    "Abgründe des Selbst;Es ist nicht nur so, dass uns selbst der direkte Blick auf unser Inneres, auf Gemüt und Seele verborgen ist, zuweilen finden sich in unserem Inneren auch tiefe, dunkle Abgründe und Spalten von furchterregenden Ausmaßen. Wie so häufig bei Abgründen, kann man auch hier den Sog der Tiefe spüren, tritt man nur nahe genug an einen solchen Abgrund heran. ",
    "Angst;Reitet und kontrolliert man ein derart kraftvolles und mächtiges Tier, sollte man annehmen, dass es nicht mehr vieles gibt, vor dem man sich fürchten muss. Dennoch schaut der Reiter angstvoll und besorgt zurück, als erwarte er eine Gefahr, die ihm von hinten folgt. Er scheint abzuwägen ob die gefährliche Flucht über den steilen Abgrund ein Ausweg aus seiner Situation sein kann. Weder physische noch mentale Kraft kann uns vor subtilen Ängsten bewahren, kann aber helfen, Auswege zu finden. Das Original ist leider nicht verkäuflich, da beschädigt. Ein hochwertiger Druck ist aber möglich.",
    "Selbstauflösung;Möglicherweise inspiriert durch aufsteigende Luftblasen im Wasser ist diese skizzenhafte Zeichnung entstanden. Umgekehrt wie bei Luftblasen aber, löst sich die dargestellte, gerade eben erst entstandene Kugel bereits wieder nach unten auf – ein Sinnbild der Vergänglichkeit oder wie Goethe seinen Mephisto im Faust sagen lässt: `[...] Alles was entsteht ist wert, dass es zu Grunde geht. [...]`",
    "Grenzen der Wahrnehmung;Die Fähigkeit neues Wissen aufzunehmen, neue Erkenntnisse zu gewinnen ist begrenzt. Es kommt einem festgefahrenen Schiffsrumpf gleich. Das Schiff sitzt unbeweglich im Untergrund fest, von Deck aus kann man bis zu einer gewissen Entfernung noch die Umgebung erfassen, aber irgendwann kommt nur noch Ungewissheit. Um das Schiff weiter zu bewegen, werden Leinen ausgeworfen. Mit jeder Leine erfahre ich ein wenig mehr über meine Umgebung - sind irgendwann genügend Leinen ausgeworfen, sind sie in der Summe tragfähig genug, um das Schiff ein Stückchen weiter zu ziehen. Ein sehr langsamer und anstrengender Prozess, ein Prozess zudem, der noch weiter ins Unbekannte führt, ein Prozess der kein Ziel kennt ...",
    "Gefangen;In dieser Skizze habe ich ein Traumbild fest gehalten, in dem die Verzweiflung zum Ausdruck kommt sich innerer Fesseln nicht befreien zu können und so an der freien Entwicklung gehindert zu sein.",
    "Maitänzerin;Unsere Paradigmen bezüglich gesellschaftlicher Erwartungen bis hin zu Schönheitsidealen lässt die Entfaltung des eigenen oft nicht perfekten nur im Verborgenen zu. Das Original ist teilweise beschädigt.",
    "Strandläuferin;Einem inneren Idealbild folgend läuft eine dicke Frau plump und ausgelassen über den Strand. Der Körper löst sich aber bereits an ihrer rechten Schulter auf. Nicht mehr lange und der Glücksmoment wird sich aufgelöst haben und sie wird zurück in Alltag und Realität sein.",
    "Herkules von Köln;In meinen Studienjahren in Köln fiel mir ein Typus Mann auf, der sich, in der Regel in den mittleren Jahren befindet, körperlich aufgeschwemmt und feist ist, aber mit einem sehr gesunden Selbstvertrauen ausgestattet ist. Er trägt immer noch das Idealbild jenes jungen Mannes in sich, der er einst war. Er hält sich für attraktiv, charmant aber auch charakterlich gefestigt. Kurz gesagt, eine Persönlichkeit von Format, ein Fels der Beständigkeit – ein Held eben. Für den außenstehenden Beobachter ist dieser Typus aber bereits erkennbar dem körperlichen Verfall preisgegeben, jahrelanger, übermäßiger Konsum von Bier, Fleisch und Fett, mangelnde ausgeglichene Bewegung, fehlende Anerkennung in seinem sozialen Umfeld haben ihn teigik und zu einem degenerierten Epigonen seiner selbst geschrumpft, der allenfalls eine Maske von Selbstsicherheit zur Schau trägt.",
    "Missverständnis;Gäbe es, wie im Bild dargestellt, Wesen, deren einziges Sinnesorgan ein Auge oder ein Ohr ist, würden sie sich ihre Welt und Gesellschaft ihren Ansprüchen, ihren Fähigkeiten gemäß einrichten. Rein visuelle Wesen würden ihr äußeres durch Form und Farbe gestalten, auditive Wesen dagegen würden sich durch eine klangliche Untermalung kleiden. Träfen solche Wesen dann aufeinander, wären sie wohl in der Lage einander wahr zunehmen, ob aber eine Verständigung untereinander möglich wäre ist zweifelhaft.",
    "Infosmog;In Folge der Digitalisierung und sozialer Medien ist der, den modernen Medien hin aufgeschlossene Mensch, einer fast permanent auf ihn einwirkenden Informationsflut ausgesetzt. Einigen Menschen – z. B. mir – kommt dies zuweilen wie eine aufprallende Stoßwelle vor, deren Impuls zur gegenüberliegenden Seite des Kopfes wieder hinausplatzt. Das Bild ist eine digital nachkollorierte Bleistiftskizze, es existiert also kein original im eigentlichen Sinne. ",
    "Schleichender Alltag;Eine Eigenschaft des Menschen ist es, sich seinen äußeren Einflüssen anzupassen. Das erklärt vielleicht auch die Ausbreitung des Menschen über den ganzen Globus. Die Kehrseite dieser Fähigkeit ist aber dass ein schönes und gut eingerichtetes Leben für den Betreffenden schnell gewöhnlich und grau wird. Das Glück lässt sich nicht fest halten oder besser, es lässt sich nicht dauerhaft empfinden - ein Problem für eine auf Selbstverwirklichung verkrampfte Gesellschaft. Der Text unten links im Bild lautet: `Die Bedrohung weiter Teile der Bevölkerung durch den schleichenden Alltag wird oft von dieser nicht wahr genommen.`",
    "Am Schaufenster;Stielaugen starren den Betrachter an, wie Ware, die in einem Schaufenster liegt. Die schauenden Augen wirken dabei teilnahmslos, emotionslos und auch ein wenig heruntergekommen. Ähnlich mag es uns ergehen bei der permanenten Anpreisung von Waren und Dienstleistungen, die wir gerne hätten, sie uns aber nicht leisten können und eigentlich auch nicht brauchen.",
    "Hünengrab für einen Helden;Einst stand hier ein hoffnungsvoller, aufstrebender Baum. Seine Lebenskraft wurde ihm zum Verhängnis, sie missfiel den Humanoiden. Würdevoll türmen nun Destruenten ein Ehrenmal über den verstümmelten Resten des Leichnams. Die Organisation geschieht dabei gänzlich ohne regelnde Eingriffe von Menschen.",
    "Ursuppe I;Bild 1 von 3 Anfänglich entwickelten sich in den Urmeeren Einzeller. Mit dem Entstehen eines ökologischen Gleichgewichts entwickelten sich Stämme, mit besonderen Fähigkeiten. Die Individuen schwammen gut durchmischt in ihrem Medium umher. Das Bild befindet sich in Privatbesitz.",
    "Ursuppe II;Bild 2 von 3 Mit steigendem Konkurrenzdruck schließen sich Einzeller mit besonderen Fähigkeiten zu symbiotischen Gemeinschaften zusammen. Effizienz und Konkurrenzdruck auf die Umwelt steigt. Das Bild befindet sich in Privatbesitz.",
    "Ursuppe III;Bild 3 von 3 Aus den Einzellern ist ein hochkomplexer, vielzelliger Organismus geworden. Die einzelnen Zellen sind hoch spezialisiert und nur noch in der Gemeinschaft lebensfähig. Das Bild befindet sich in Privatbesitz.",
    "Urzeitperle;In der Frühzeit der Entstehung des Lebens war der Wert von Dingen nicht nach unseren heutigen Maßstäben zu bewerten sondern nach der Stufe seiner evolutionären Entwicklung.",
    "Urzeitfelsen;In einem urzeitlichen Meer wärmt sich Urgestein in den frühen Stahlen der jungen Sonne.",
    "Kontamination II;Eine einmal in die Welt gebrachte, wie auch immer geartete Kontamination ist quasi nicht mehr rückgängig zu machen.",
    "Lustig plätschernder Lavabach;Heute genießen wir frisch plätscherndes Quellwasser, dass zwischen Steinen zu Tale strebt, in der Frühzeit dagegen genossen die ersten Lebewesen den Anblick eines kleinen Lavabaches, der sich seinen Weg durch das Gestein schmilzt.",
    "Aufbruch;Kraftvoll bricht neues leben aus der organisch toten Welt aus und erhebt sich.",
    "Absorbtion;Das gerade entstandene Wesen behauptet sich in der lebensfeindlichen Umwelt. Es überlebt durch Zerstörung anderen Lebens.",
    "Reproduktion;Das einst so starke Wesen ist am Ende den harten Anforderungen der Umwelt erlegen. Der tote Kadaver dient nun als Nahrung für anderes Leben.",
    "Äquatorialbalance;Auf einem scharfen Grat ruht eine Kugel in scheinbarem Gleichgewicht. Bei genauerer Betrachtung kann in der Kugel aber auch ein menschlicher Schädel erkannt werden. Das Gleichgewicht wird zudem nur durch eine klammernde Wirkung des Grates erreicht.<br> Der durch den Grat geteilte Schädel symbolisiert die ambivalenz unseres Geistes in einen rationalen, intellektuellen Teil und einen emotionalen Teil. Zwei Seiten unseres Wesens, die oft im Wiederspruch zueinander stehen. ",
    "Sehnsuchtsvoller Blick zu den Sternen;In einer dunklen Nacht blickt jemand sehnsuchtsvoll zu den Sternen auf. Er sucht dort seine Wünsche, Hoffnungen und Träume, die er aber nie erreichen wird, denn er blickt schon vie zu lange dort hinauf und hat gar nicht bemerkt, dass er mittlerweile bereits tot ist.<br> So wird es vielen Menschen gehen, die Lebensträumen nachhängen und ihr Ziel niemals erreichen oder, die ihr Lebensziel gar nicht kennen und sich im Leben verrenen, während tief in ihrem Inneren eine ausgehungerte Seele zu den Sternen blickt.<br> ",
    "Der freundliche Herr;Formvollendet, mit allen Regeln des Anstandes grüßt der im Bild dargestellte Herr ein, dem Betrachter verborgense Gegenüber. Trotz der, den Konventionen entsprechenden Geste, wäre ich bei einer Begegnung mit dem Herrn eher misstrauisch. Der äußere Schein ist eben nicht immer das, was er vorgibt zu sein. Zu Anfang war ich versucht, das Bild auch `Das freundliche grüne Männchen von der Ampel` zu nennen.",
    "Stillleben zur guten Nacht;Zum friedvollen Ausklang am Ende des Lebens, am Ende des Tages oder am Ende dieser Galerie ein Stillleben, mit dem Potenzial zur Generalbefriedung aller menschlichen Konflikte.",
];
