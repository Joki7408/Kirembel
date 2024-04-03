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
    const biggerImg = document.createElement("img");
    const textFrame = document.createElement("div");
    const header = document.createElement("div");
    const descriptionText = document.createElement("div");
    biggerImg.setAttribute("src", source);
    biggerImg.setAttribute("class", "biggerImg");
    textFrame.setAttribute("class", "descriptionText");
    header.setAttribute("class", "hl03");
    descriptionText.setAttribute("class", "txt04 imageText");
    header.innerHTML = text.split(';')[0];
    descriptionText.innerHTML = text.split(';')[1];
    textFrame.appendChild(header);
    textFrame.appendChild(descriptionText);
    docFrame.appendChild(biggerImg);
    docFrame.appendChild(textFrame);
    docFrame.style.display = "inline-block";
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
    "Körper und Bewusstsein;Ist das Gehirn der zentrale Sitz unseres Selbstbewußtseins und des kognitiven Denkens, so folgt daraus, dass ausnahmslos alle von uns gemachten Erfahrungen und Informationen durch den Filter unserer Sinnesorgane zur Wahrnehmung gelangen. Wenig Beachtung wird aber gemeinhin der Tatsache geschuldet, dass unsere Sinnesorgane zur Überlebensfähigkeit in der urzeitlichen, gefährlichen, freien Natur konzipiert sind, nicht aber zum höheren Erkenntnisgewinn über das Wesen der Natur selbst. Die Art der Wahrnehmung bestimmt aber essentiell unser Denken und hat gleichfalls Einfluss auf kognitive Schlüsse zu denen unser Gehirn in der Lage ist. Unter Kenntnisnahme dieser Vorabinformation bilden wir uns also ein die Zusammenhänge der Welt zu verstehen - oder verstehen wir eher, was wir in der Lage sind zu verstehen? Was sind die wahren Zusammenhänge in der Welt?"
];
