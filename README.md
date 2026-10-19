# CompassMitte · Gestaltungsvorschau

Eigenständiger Entwurf zur Abstimmung. Die bestehende Website https://www.compassmitte.net/ bleibt unverändert.

## Vorschau

Nach Aktivierung von GitHub Pages: https://mpusceddu.github.io/compass-mitte-vorschau/

Acht Hauptbereiche, das vollständige Grundsatzpapier mit allen 14 Punkten als lesbarer Urtext und Original-PDF, vier vollständige Originalbeiträge, Original-Logo und das Original-PDF von Ruprecht Polenz. Das Video von Dieter Breymann ist zur Originalseite verlinkt. Ein zusätzlicher Beitrag von Marco Pusceddu ist ausdrücklich als neuer Textentwurf gekennzeichnet.

Formulare sind Ansichten ohne Versand oder Speicherung. Keine Newsletter-Anmeldung und keine echte Unterzeichnung. Die Vorschau ist ohne Anmeldung erreichbar; Suchmaschinen werden mit `noindex` und `robots.txt` vom Indexieren abgehalten. Das ist kein Zugangsschutz.

## Inhalte bearbeiten

`build.py` erzeugt die HTML-Seiten aus `content/` und den Archivdaten in `dist/assets/`. Ausführen mit Python 3:

```sh
python3 build.py
```

CSS, JavaScript und Medien liegen in `dist/assets/`. GitHub Pages veröffentlicht den separaten Zweig `gh-pages` aus dessen Wurzelverzeichnis. Dieser Zweig enthält ausschließlich die geprüften Dateien aus `dist/`. Änderungen zunächst in `main` bearbeiten, mit `python3 build.py` erzeugen und anschließend den Inhalt von `dist/` auf `gh-pages` bereitstellen. Der frühere eigene Actions-Workflow ist deaktiviert; die Bereitstellung übernimmt GitHubs integrierter Pages-Ablauf. Keine eigene Domain und keine Änderungen an compassmitte.net.

## Rechte

Texte, Logo und Medien bleiben bei ihren jeweiligen Rechteinhabern. Die Bereitstellung in diesem Repository erteilt keine allgemeine Nutzungslizenz.
