🌦️ Weather App – React Projekt

Eine moderne, minimalistische und reaktionsschnelle Wetter-Applikation zur Anzeige der aktuellen Wetterdaten verschiedener deutscher Städte.
Das Projekt wurde mit React, TailwindCSS und einer komponentenbasierten Architektur entwickelt und bietet eine intelligente Suchfunktion, Temperaturanzeige, Wetterbeschreibung sowie ein animiertes Fehlermodalfenster für ungültige Stadteingaben.

⸻

🚀 Hauptfunktionen

✅ Stadtsuche

Benutzer können den Namen einer Stadt eingeben und sofort die entsprechenden Wetterdaten sehen.

☁️ Detaillierte Wetterinformationen
 • Temperatur
 • Wetterbeschreibung (Sonnig, Bewölkt, Regen, Schnee usw.)
 • Stündliche Vorschau
 • Tägliche Vorschau

⚠️ Professionelles Fehlermodal (mit Animation)

Falls eine Stadt nicht gefunden wird, erscheint ein modernes Modal mit folgender Meldung:
„Leider wurde die gesuchte Stadt nicht gefunden.“

🎨 Modernes und elegantes Design
 • Benutzerdefinierte Schriften
 • Halbtransparente Wetterkarten
 • Dunkles Design (Dark Mode)
 • Attraktive Wetter-Icons

💨 Sauberer und übersichtlicher Code
 • Leichtgewichtiges State-Management mit useState
 • Erweiterbare Struktur
 • Separater Komponentenaufbau für bessere Wartbarkeit

⸻

🔧 Verwendete Technologien
 • React.js
 • TailwindCSS
 • JavaScript ES6
 • Modernes CSS
 • Font Awesome Icons

📁 Projektstruktur

src/
│── components/
│     └── NoCity.jsx
│── App.jsx
│── App.css
│── assets/
│     └── images/


🧠 Funktionsweise der Stadtsuche

const cityTemp = cities.find((item) => item.name === city);

if (cityTemp) {
  setCityTempData(cityTemp);
  setNoCity(false);
} else {
  setCityTempData(null);
  setNoCity(true);
}


Das System vergleicht die Eingabe des Nutzers mit der vordefinierten Städte-Liste und zeigt entweder die entsprechenden Daten an oder aktiviert das Fehlermodal.

⸻

🌍 Warum dieses Projekt wertvoll ist
 • Praxisnahes Beispiel für State-Handling in React
 • Sauber strukturierte, wiederverwendbare Komponenten
 • Attraktives UI-Design für Portfolio und Präsentationen
 • Ideal als Übung für React, CSS und modernes Frontend-Design
 • Perfekte Grundlage, um später echte APIs wie OpenWeatherMap zu integrieren
