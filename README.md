# 3D Website Project

Nowoczesna strona internetowa z elementami 3D zbudowana przy użyciu Vite i Three.js.
Link do projektu: https://69656d8793489e048f210cc6--magnificent-veranstaltungen.netlify.app

## Technologie

- **Vite** - szybki bundler i serwer deweloperski
- **Three.js** - biblioteka do tworzenia grafiki 3D w przeglądarce
- **JavaScript (ES6+)** - nowoczesny JavaScript

## Funkcje

- Interaktywna scena 3D
- Obracające się bloby w tle
- Responsywny design
- Hot Module Replacement (HMR)

## Struktura projektu

```
3DProjekt/
├── index.html          # Główny plik HTML
├── main.js             # Główna logika aplikacji i scena Three.js
├── style.css           # Style CSS
├── vite.config.js      # Konfiguracja Vite
├── package.json        # Zależności projektu
└── .github/
    └── copilot-instructions.md
```

## Instalacja

```bash
npm install
```

## Uruchamianie

Serwer deweloperski (z hot reload):
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: http://localhost:3000

## Build produkcyjny

```bash
npm run build
```

Pliki produkcyjne zostaną wygenerowane w folderze `dist/`.

## Podgląd build'u

```bash
npm run preview
```

## Możliwości rozwoju

- Dodaj więcej obiektów 3D
- Zaimplementuj kontrolki kamery (OrbitControls)
- Dodaj textury i materiały
- Zaimplementuj animacje i interakcje
- Dodaj shadery niestandardowe
- Optymalizacja wydajności
