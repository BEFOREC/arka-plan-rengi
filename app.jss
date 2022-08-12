const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "yellow", "green", "purple", "blue", "#669aed", "#ed431c", "#f0d507" ];

button.addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
    //rastgele bir renk
    //const rastgeleSayi = Math.floor(Math.random() * colors.length);
    //const secilenRenk = colors[rastgeleSayi];
    //console.log(rastgeleSayi, secilenRenk);
    //body.style.backgroundColor = secilenRenk;

    //sırayla arka plan rengi sec

    console.log(sıra);
    if (sıra==8) sıra=0;
    const secilenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenRenk;
}
