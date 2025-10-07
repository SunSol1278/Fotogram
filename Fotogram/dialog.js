const images = [
    // Pfade zu den Bildern im Array
    "./img/greece/Akrotiri.jpg",
    "./img/greece/Amphora.jpg",
    "./img/greece/Beach.jpg",
    "./img/greece/Kloster.jpg",
    "./img/greece/Crete_Beach.jpg",
    "./img/greece/Imbros_George.jpg",
    "./img/greece/Santorini.jpg",
    "./img/greece/Little_Town.jpg",
    "./img/greece/Chapel.jpg",
    "./img/greece/Taverne.jpg",
    "./img/greece/Matala.jpg",
    "./img/greece/Mykonos.jpg",
];
const imageNames = [
    // Die zugehörigen Namen zu den Bilder. ACHTUNG ! Gleiche reinfolge beachten.
    "Akrotiri",
    "Amphora",
    "Corfu Beach",
    "Corfu Monastery",
    "Crete Beach",
    "Imbros George",
    "Santorini Church",
    "Santorini Town",
    "Crete Chapel",
    "Crete Taverna",
    "Matala",
    "Mykonos Town",
];
const imageAlts = [
    "Weiße, terrassenförmige Häuser mit blauen Zäunen und kleinen Kirchenkuppeln vor strahlend blauem Himmel auf einer griechischen Insel.",
    "Große antike Amphore auf einer sonnigen Terrasse mit Blick auf das blaue Meer, im Hintergrund stehen gedeckte Tische und weiße Säulen",
    "Atemberaubende Aussicht auf eine von steilen Felsen umgebene Bucht mit türkisblauem Wasser, Sandstrand und mehreren Booten vor der Küste einer griechischen Insel",
    "Weiße Klosterkirche auf einer kleinen Landzunge im Meer, umgeben von Booten und mit einer bewaldeten Insel im Hintergrund",
    "Felsige Küste mit klaren, türkisfarbenen Wasser und verstreuten Felsen im Meer, im Hintergrund zwei kleine Inseln unter einem teils bewölkten Himmel",
    "Schmale, steinige Schlucht mit hohen Felswänden und üppigem Grün, unter blauem Himmel auf einer griechischen Insel",
    "Weiße Kirche mit blauer Kuppel und Kreuz, im Vordergrund bunte Blumen, im Hintergrund das tiefblaue Meer und klarer Himmel auf einer griechischen Insel",
    "Weiße und pastellfarbene Häuser mit Windmühlen auf einer Klippe über dem Meer in Santorini, Griechenland, bei klarem Himmel",
    "Weiße, verwinkelte Kirche mit roten Türen und kleinen Glockentürmen vor tiefblauem Himmel und Meer auf einer griechischen Insel.",
    "Schmale, weiß getünchte Gasse mit gepflastertem Boden und einer gemütlichen Taverne im Freien, dekoriert mit bunten Lampenschirmen und Blumen",
    "Blick durch eine felsige Schlucht auf das Meer und gestufte, helle Felsformationen, umgeben von grüner Vegetation und Bergen im Hintergrund",
    "Weiße Häuser einer griechischen Küstenstadt am türkisblauen Meer, mit Booten im Hafen und Felsen im Vordergrund unter klarem Himmel",
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", renderImages);

function renderImages() {
    const container = document.getElementById("rowImages");
    container.innerHTML = "";
    for (let i = 0; i < images.length; i++) {
        const img = document.createElement("img");
        const figure = document.createElement("figure");
        img.src = images[i]; //
        img.nameRef = imageNames[i];
        img.alt = imageAlts[i];
        img.title = imageNames[i];
        img.onclick = function () {
            openDialog(this);
        };
        figure.appendChild(img);
        container.appendChild(figure);
    }
}
function openDialog(imgElement) {
    currentIndex = images.indexOf(imgElement.getAttribute("src"));
    updateDialog();
    document.getElementById("picturesDialog").showModal();
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateDialog();
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateDialog();
}

function updateDialog() {
    document.getElementById("dialogImage").src = images[currentIndex];
    document.getElementById("dialogImage").alt = imageAlts[currentIndex];
    document.getElementById("imageName").textContent = imageNames[currentIndex];
    document.getElementById("counter").textContent =
        currentIndex + 1 + " / " + images.length;
}

function closeDialog() {
    document.getElementById("picturesDialog").close();
}
