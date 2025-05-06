document.addEventListener("DOMContentLoaded", () => {
    // Erstelle eine Plane mit dem ersten Bild
    const marker = document.querySelector("marker");

    // Funktion, um zufällige Positionen zu generieren
    function getRandomPosition() {
        const x = (Math.random() * 6) - 3; // Bereich: -3 bis 3
        const y = (Math.random() * 5.5) + 1.5; // Bereich: 1.5 bis 7
        const z = (Math.random() * -1) - 1; // Bereich: -1 bis -2
        return `${x.toFixed(2)} ${y.toFixed(2)} ${z.toFixed(2)}`;
    }

    // Erstelle eine Plane mit Bild (Happy Birthday)
    const imagePlaneHB = document.createElement("a-plane");
    imagePlaneHB.setAttribute("position", "0 3 -0.9"); // Position der ersten Plane
    imagePlaneHB.setAttribute("rotation", "0 0 0"); // Rotation der ersten Plane
    imagePlaneHB.setAttribute("width", "6"); // Breite der ersten Plane
    imagePlaneHB.setAttribute("height", "1"); // Höhe der ersten Plane
    imagePlaneHB.setAttribute("src", "./Bilddateien/Happy_Birthday.png"); // Pfad zum ersten Bild
    imagePlaneHB.setAttribute("material", "transparent: true"); // Transparenz und Opazität
    marker.appendChild(imagePlaneHB);

    // Erstelle die Planes mit zufälligen Positionen
    for (let i = 1; i <= 23; i++) {
        const imagePlane = document.createElement("a-plane");
        imagePlane.setAttribute("position", getRandomPosition()); // Zufällige Position
        imagePlane.setAttribute("rotation", "0 0 0"); // Rotation
        imagePlane.setAttribute("width", "0.5"); // Breite
        imagePlane.setAttribute("height", "0.5"); // Höhe
        imagePlane.setAttribute("src", `./Bilddateien/${i}.png`); // Pfad zum Bild
        imagePlane.setAttribute("material", "transparent: true"); // Transparenz und Opazität
        marker.appendChild(imagePlane);
    }

    // Erstelle eine Plane mit Bild (Konfettikanone)
    const imagePlaneK = document.createElement("a-plane");
    imagePlaneK.setAttribute("position", "-2 1 -2.1"); // Position der dritten Plane (weiter hinter der zweiten)
    imagePlaneK.setAttribute("rotation", "0 0 0"); // Rotation der dritten Plane
    imagePlaneK.setAttribute("width", "1.8"); // Breite der dritten Plane
    imagePlaneK.setAttribute("height", "2"); // Höhe der dritten Plane
    imagePlaneK.setAttribute("src", "./Bilddateien/Konfettikanone.png"); // Pfad zum dritten Bild
    imagePlaneK.setAttribute("material", "transparent: true"); // Transparenz und Opazität
    marker.appendChild(imagePlaneK);
});