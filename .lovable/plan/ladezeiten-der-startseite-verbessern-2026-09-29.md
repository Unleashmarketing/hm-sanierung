# Ladezeiten der Startseite verbessern

## Ziel
Die auffälligen Lighthouse-Werte, besonders den Largest Contentful Paint von 57 Sekunden und den Speed Index, deutlich reduzieren, ohne die sichtbare Gestaltung zu verändern.

## Umsetzung
- Das erste sichtbare Projektbild früh und mit hoher Priorität laden.
- Die weiteren Bilder des Projektwechsels zunächst nicht übertragen und erst nach dem ersten Seitenaufbau nachladen.
- Für Bilder unterhalb des sichtbaren Bereichs konsequentes verzögertes Laden und passende Browser-Hinweise sicherstellen.
- Externe Schriftarten so laden, dass sie den ersten Seitenaufbau nicht unnötig blockieren.
- Animationen und Skripte erst starten, wenn die dafür nötigen Inhalte bereit sind.
- Die Startseite anschließend auf Desktop und Mobil prüfen und die Ladewerte erneut messen.

## Technische Details
Die bestehende Optik, Navigation, Texte, Analytics und Conversion-Messung bleiben unverändert. Schwerpunkt sind Bildpriorisierung, Netzwerkgewicht und blockierende Ressourcen.
