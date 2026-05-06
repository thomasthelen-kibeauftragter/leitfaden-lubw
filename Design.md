# Designvorgaben basierend auf Screenshot der LUBW-Webseite

## 1. Farben

*   **Primäre Akzentfarbe (LUBW Gelb):**
    *   Hex: `#FFE600` (oder ein ähnliches leuchtendes Gelb)
    *   RGB: `rgb(255, 230, 0)`
    *   **Verwendung:** Header-Hintergrund, Akzente, Logo-Elemente.

*   **Hintergrundfarbe (Standard):**
    *   Hex: `#FFFFFF` (Reinweiß)
    *   RGB: `rgb(255, 255, 255)`
    *   **Verwendung:** Hauptinhaltsbereich.

*   **Textfarbe (Dunkelgrau/Schwarz):**
    *   Hex: `#333333` (Dunkles Grau für gute Lesbarkeit)
    *   RGB: `rgb(51, 51, 51)`
    *   **Verwendung:** Haupttext, Überschriften, Navigationspunkte (Standard).

*   **Linkfarbe (Standard Blau):**
    *   Hex: `#0066CC`
    *   RGB: `rgb(0, 102, 204)`
    *   **Verwendung:** Hyperlinks, Breadcrumb-Navigation.

*   **Navigations-Hintergrund (Active/Hover):**
    *   Hex: `#333333`
    *   RGB: `rgb(51, 51, 51)`
    *   **Verwendung:** Hintergrund für aktive/gehoverte Navigationspunkte im Hauptmenü (Textfarbe dann Weiß).

*   **Suchfeld-Hintergrund:**
    *   Hex: `#F0F0F0` (Sehr helles Grau)
    *   RGB: `rgb(240, 240, 240)`
    *   **Verwendung:** Hintergrund des Suchfeldes.

*   **LUBW Logo Grün:**
    *   Hex: `#008000` (Standard Grün)
    *   RGB: `rgb(0, 128, 0)`
    *   **Verwendung:** Im LUBW-Logo.

## 2. Schriftarten (Font Family)

Für eine Demo werden gängige, lizenzfreie Webfonts empfohlen, die den visuellen Eindruck der Originalseite gut treffen.

*   **Überschriften (H1, H2, H3):**
    *   **Empfehlung:** Eine moderne, serifenlose Schrift mit guter Lesbarkeit und Prägnanz.
    *   **Beispiele:** `'Roboto', 'Open Sans', 'Arial', sans-serif`.
    *   Die Hauptüberschrift "Innovationszentrum Zirkuläres Bauen" scheint eine spezifischere, kräftigere Display-Schrift zu sein. Für die Demo kann eine `font-weight: 700` oder `800` einer der oben genannten Schriften ausreichend sein, oder eine ähnliche, frei verfügbare Display-Schriftart, falls eine genaue Entsprechung gewünscht wird (z.B. 'Montserrat' oder 'Oswald' könnten eine ähnliche Wirkung erzielen).

*   **Fließtext und Navigation:**
    *   **Empfehlung:** Eine gut lesbare, serifenlose Schrift.
    *   **Beispiele:** `'Roboto', 'Open Sans', 'Arial', sans-serif`.

## 3. Schriftgrößen (geschätzte Werte für Desktop-Ansicht, in Pixel)

*   **H1 (Hauptüberschrift "Innovationszentrum Zirkuläres Bauen"):** `40px` - `48px` (sehr groß und prominent)
*   **H2 ("Aktuelles"):** `30px` - `36px`
*   **Linke Seitenleiste (Hauptpunkte wie "Abfall- und Kreislaufwirtschaft"):** `20px` - `24px`
*   **Navigationsleiste oben (Hauptmenüpunkte wie "Themen"):** `16px` - `18px`
*   **Fließtext (Absätze, Listenpunkte):** `14px` - `16px`
*   **Breadcrumb-Navigation ("Themen > Abfall..."):** `12px` - `14px`
*   **Kleine Texte (z.B. Copyright, Metadaten):** `10px` - `12px`

**Hinweis:** Für responsive Designs sollten diese Schriftgrößen für kleinere Bildschirme entsprechend angepasst werden (z.B. mit `rem` oder `em` Einheiten und Media Queries).
