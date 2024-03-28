const images =  ["../resources/images/image_single_img/001_zugang_zum_ich_2.png",
                "../resources/images/image_single_img/002_das_selbst_1.png",
                "../resources/images/image_single_img/003_das_selbst_2.png",
                "../resources/images/image_single_img/004_koerper_und_bewusstsein.png",
                "../resources/images/image_single_img/005_innerer_kern.png",
                "../resources/images/image_single_img/006a_freiheit_des_geistes.png",
                "../resources/images/image_single_img/006b_wahrnehmung.png",
                "../resources/images/image_single_img/007_optimale_lebensform.png",
                "../resources/images/image_single_img/008_schleier_der_wahrnehmung.png",
                "../resources/images/image_single_img/009_frau_ohne_titel.png",
                "../resources/images/image_single_img/010_seroquel_prolong.png",
                "../resources/images/image_single_img/011_wut_und_verwirrniss.png",
                "../resources/images/image_single_img/013_abgruende_des_selbst.png",
                "../resources/images/image_single_img/014_angst.png",
                "../resources/images/image_single_img/015_selbstaufloesung.png",
                "../resources/images/image_single_img/012_bogendynamik_small.png",
                "../resources/images/image_single_img/017_grenzen_der_wahrnehmung.png",
                "../resources/images/image_single_img/085_AmSchaufenster_small.JPG",
                "../resources/images/image_single_img/285_sehnsuchtsvoller_blick_zu_den_sternen_small.JPG",
                "../resources/images/image_single_img/231_huenengrab.png",
                "../resources/images/image_single_img/241a_UrsuppeI.png",
                "../resources/images/image_single_img/241b_UrsuppeII.png",
                "../resources/images/image_single_img/241c_UrsuppeIII.png",
                "../resources/images/image_single_img/242a_Urzeitperle.png",
                "../resources/images/image_single_img/242b_Urzeitfelsen.png",
                "../resources/images/image_single_img/243_kontamination2.png",
                "../resources/images/image_single_img/245_lustig_plaetschernder_lavabach.png",
                "../resources/images/image_single_img/018a_gefangen_skizze.png",
                "../resources/images/image_single_img/023_maitaenzerin.png",
                "../resources/images/image_single_img/024_strandläuferin.png",
                "../resources/images/image_single_img/025_herkules_ von_koeln.png",
                "../resources/images/image_single_img/026_missverständniss.png",
                "../resources/images/image_single_img/027_infosmog.png",
                "../resources/images/image_single_img/028_schleichender_alltag.png",
                "../resources/images/image_single_img/250_Aufbruch_small.png",
                "../resources/images/image_single_img/251_Absorbtion._small.png",
                "../resources/images/image_single_img/252_Reproduktion_small.png",
                "../resources/images/image_single_img/280_Aequatorialbalance.JPG",
                "../resources/images/image_single_img/490_FreundlicherHerr.JPG",
                "../resources/images/image_single_img/500_stillleben_zur_guten_nacht.png"
            ]


document.body.onload = createPage;


function createPage() {
    createRow();
}

function createRow() {
    //createImage();
    counter = 0;
    const current = document.getElementById("test");
    images.forEach((source) => {
            if (counter % 4 === 0) {
                row = document.createElement("div");
                row.setAttribute("class", "row");
            }
            frame = createImage(source)
            row.appendChild(frame);
            
            document.body.insertBefore(row,current)

            counter++;
        }
    )
}

function createImage(source) {
    const imgFrame = document.createElement("div");
    const img = document.createElement("img");

    img.setAttribute("src",source)
    img.setAttribute("class","defaultImg")
    img.setAttribute('onClick', "clickImg('source')")
    imgFrame.setAttribute("class", "frame column")
    imgFrame.appendChild(img)

    return imgFrame;
}


function clickImg() {
    //const bigFrame = document.createElement("div");
    const docFrame = document.getElementById("bigFrame")
    const biggerImg = document.createElement("img");

    biggerImg.setAttribute("src",source);
    biggerImg.setAttribute("class","biggerImg");

    docFrame.style.display = "block"
    docFrame.appendChild(biggerImg);

    //const docFrame = document.getElementById("bigFrame")

    docFrame.style.display = "block"
   // document.body.insertBefore(test,bigFrame);

}