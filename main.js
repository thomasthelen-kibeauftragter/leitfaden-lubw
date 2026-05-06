// Data for the HOAI Navigator
const phases = [
    { id: 0, title: "LP 0: Bedarfsplanung", focus: "In dieser Phase werden die Weichen gestellt. Ohne klare Zirkularitäts-Ziele in LP 0 ist eine spätere Umsetzung oft kaum noch möglich." },
    { id: 1, title: "LP 1: Grundlagen", focus: "Die Grundlagenermittlung definiert den Materialrahmen. Hier identifizieren wir Re-Use-Quellen und Planungsleitlinien." },
    { id: 2, title: "LP 2: Vorplanung", focus: "In der Vorplanung entscheidet sich die Flexibilität des Gebäudes. Materialsparen und Low-Tech stehen im Fokus." },
    { id: 3, title: "LP 3: Entwurf", focus: "Design for Disassembly! Wir planen mechanische Verbindungen, um Bauteile später schadfrei trennen zu können." },
    { id: 4, title: "LP 4: Genehmigung", focus: "Genehmigungshürden überwinden: Wir sichern Fördermittel und klären rechtliche Aspekte des Bestandserhalts." },
    { id: 5, title: "LP 5: Ausführung", focus: "Jetzt wird es konkret: Der Rückbauplan für die Zukunft wird erstellt und Re-Use-Bauteile werden eingekauft." },
    { id: 6, title: "LP 6: Vergabe-Vorb.", focus: "Die Ausschreibung ist das rechtliche Bindeglied. Zirkuläre Kriterien müssen hier unmissverständlich verankert werden." },
    { id: 7, title: "LP 7: Vergabe-Mitw.", focus: "Vertragsprüfung: Wir stellen sicher, dass die ausführenden Firmen die Zirkularitätsvorgaben rechtlich verbindlich akzeptieren." },
    { id: 8, title: "LP 8: Überwachung", focus: "Dokumentation ist alles. Wir sammeln Daten für den Ressourcenpass und prüfen die kreislaufgerechte Ausführung." },
    { id: 9, title: "LP 9: Betreuung", focus: "Zirkularität im Betrieb bedeutet Werterhalt. Der Gebäuderessourcenpass wird zum zentralen Management-Tool." },
    { id: 10, title: "LP 10: Rückbau", focus: "Der Kreis schließt sich. Wir deklarieren Bauteile zur Wiederverwendung statt sie als Abfall zu betrachten." }
];

const checklistData = {
    0: [
        { role: 'bauverantwortliche', text: 'Bedarfs- und Suffizienzanalyse durchgeführt (Flächenbedarf prüfen)?' },
        { role: 'bauverantwortliche', text: 'Bestandspotenzialanalyse (Erhalt vs. Abriss mit CO₂-Schattenpreis) erfolgt?' },
        { role: 'bauverantwortliche', text: 'Zirkularitäts-Strategie und Ziele für das Gesamtprojekt definiert?' },
        { role: 'architektur', text: 'ZB-Anforderungen in Wettbewerbsauslobung integriert?' },
        { role: 'bauverantwortliche', text: 'Fördermöglichkeiten (QNG, R-Beton) frühzeitig identifiziert?' },
        { role: 'vergabestelle', text: 'Bauteilinventar (Wiederverwendungspotenzial, Schadstoffuntersuchung) erstellt?' }
    ],
    1: [
        { role: 'architektur', text: 'Zirkuläres Planungsleitbild/Konzept erstellt?' },
        { role: 'vergabestelle', text: 'Wiederverwendungskonzept (Demontage, Aufbereitung, Lagerung) erstellt?' },
        { role: 'vergabestelle', text: 'Marktanalyse für wiederverwendbare Bauteile (Baustoffbörsen) erfolgt?' },
        { role: 'all', text: 'Austauschprozesse für ZB-relevante Daten eingerichtet?' }
    ],
    2: [
        { role: 'architektur', text: 'Konzept zu Flexibilität und Umnutzungsfähigkeit (Grundrisse) erstellt?' },
        { role: 'architektur', text: 'Low-Tech-Ansatz zur Reduktion von TGA-Komplexität geprüft?' },
        { role: 'tragwerksplanung', text: 'Ressourceneffiziente Planung und Optimierung der Tragstruktur?' },
        { role: 'tragwerksplanung', text: 'Minderung des Bodenaushubs und priorisierter Einsatz auf dem Grundstück?' },
        { role: 'architektur', text: 'Materialkonzept mit ökobilanziellen Indikatoren erstellt?' }
    ],
    3: [
        { role: 'architektur', text: 'Design for Disassembly: Mechanische & lösbare Verbindungen geplant?' },
        { role: 'architektur', text: 'Bauteilkatalog für Re-Use Komponenten als Grundlage für Ressourcenpass erstellt?' },
        { role: 'tragwerksplanung', text: 'Tragstruktur auf sortenreine Rückbaubarkeit optimiert?' },
        { role: 'all', text: 'Zirkularitäts-Index auf Basis von LCC und Ökobilanz abgeschätzt?' },
        { role: 'architektur', text: 'Konzept zur Wartungs- und Instandhaltungsfreundlichkeit vorliegend?' }
    ],
    4: [
        { role: 'bauverantwortliche', text: 'Fördermittel für zirkuläres Bauen unter Beachtung der Fristen beantragt?' },
        { role: 'bauverantwortliche', text: 'Rückbaugenehmigung für Teilrückbau/Bestandserhalt eingeholt?' },
        { role: 'tragwerksplanung', text: 'Statische Dimensionierung auf Basis des Materialkonzepts erfolgt?' }
    ],
    5: [
        { role: 'architektur', text: 'Detailliertes Rückbaukonzept inkl. Rückbauplänen erstellt?' },
        { role: 'vergabestelle', text: 'Einkauf und Logistik für Re-Use-Bauteile (Verpackung/Transport) gesichert?' },
        { role: 'architektur', text: 'Bauteilkatalog in BIM-Modell integriert?' },
        { role: 'all', text: 'Daten für Gebäuderessourcenpass (Datenblätter) finalisiert?' }
    ],
    6: [
        { role: 'vergabestelle', text: 'ZB-spezifische Anforderungen (Schadstoffarmut, Rücknahme) in LV integriert?' },
        { role: 'vergabestelle', text: 'Eventualpositionen für zirkuläre Materialien aufgenommen?' },
        { role: 'bauverantwortliche', text: 'Abfallvermeidung und Sortentrennung als Vertragsbestandteil definiert?' }
    ],
    7: [
        { role: 'vergabestelle', text: 'Angebote auf Einhaltung der Zirkularitätsvorgaben geprüft?' },
        { role: 'vergabestelle', text: 'Vertragsgestaltung mit ZB-Bedingungen (ggf. Risikoübernahme) erfolgt?' },
        { role: 'bauverantwortliche', text: 'Ausführende Firmen mit spezifischen ZB-Qualifikationen identifiziert?' }
    ],
    8: [
        { role: 'all', text: 'Bauzeitenplan für zirkuläres Bauen inkl. Meilensteinen erstellt?' },
        { role: 'all', text: 'Einbauprüfungen (insbes. rückbaubare Verbindungen) durchgeführt?' },
        { role: 'bauverantwortliche', text: 'Schulung des Bauteams zu ZB-spezifischen Belangen erfolgt?' },
        { role: 'all', text: 'Produktdaten und Zertifikate für finalen Ressourcenpass gesammelt?' }
    ],
    9: [
        { role: 'bauverantwortliche', text: 'Wartungskonzept (Reparaturanleitungen, Austauschzyklen) erstellt?' },
        { role: 'all', text: 'Gebäuderessourcenpass auf Basis real verbauter Produkte finalisiert?' },
        { role: 'bauverantwortliche', text: 'Nutzungskonzept (Sharing, Belüftung, Beheizung) im Betrieb etabliert?' }
    ],
    10: [
        { role: 'bauverantwortliche', text: 'Deklaration der Bauteile zur Wiederverwendung ("kein Entledigungswille")?' },
        { role: 'architektur', text: 'Wiederverwendungs- und Rückbaukonzept auf Basis des Ressourcenpasses?' },
        { role: 'bauverantwortliche', text: 'Umnutzungs- und Erneuerungsprozesse fachlich begleitet?' },
        { role: 'all', text: 'Symbiosen mit anderen Inhouse-Projekten für Materialabnahme geprüft?' }
    ]
};

const appState = {
    currentRole: 'all',
    currentPhase: 0,
    checklists: {} // phase -> [checkedIndices]
};

// Component templates
const templates = {
    knowledge: () => `
        <section id="knowledge-page" class="container py-80">
            <div class="section-header">
                <h3>Wissensbereich</h3>
                <p>Die wichtigsten Daten und Regulierungen auf einen Blick.</p>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card" style="--color: #ff4d4d">
                    <div class="stat-value">40%</div>
                    <div class="stat-label">der THG-Emissionen</div>
                    <p>werden durch den Bausektor verursacht.</p>
                </div>
                <div class="stat-card" style="--color: #33cc33">
                    <div class="stat-value">38%</div>
                    <div class="stat-label">des Rohstoffkonsums</div>
                    <p>entfallen auf das Bauwesen.</p>
                </div>
                <div class="stat-card" style="--color: #3399ff">
                    <div class="stat-value">50%</div>
                    <div class="stat-label">des Abfallaufkommens</div>
                    <p>stammen aus Bau und Abbruch.</p>
                </div>
            </div>

            <div class="timeline-section mt-60">
                <h4>Regulierungs-Timeline</h4>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="year">2024</div>
                        <div class="content">
                            <h5>EU Green Deal & Taxonomie</h5>
                            <p>Vorgaben für nachhaltige Investitionen und Kreislaufwirtschaft.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="year">2025</div>
                        <div class="content">
                            <h5>KlimaG BW Verschärfung</h5>
                            <p>Einführung verbindlicher CO₂-Schattenpreise.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="year">2028</div>
                        <div class="content">
                            <h5>EPBD Ökobilanz-Pflicht</h5>
                            <p>Verpflichtende Ökobilanzierung für neue Gebäude ab 1000m².</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    toolbox: () => `
        <section id="toolbox-page" class="container py-80">
            <div class="section-header">
                <h3>Praxis-Toolbox</h3>
                <p>Navigieren Sie durch die Leistungsphasen und nutzen Sie die interaktiven Checklisten.</p>
            </div>

            <div class="toolbox-layout">
                <aside class="phase-sidebar">
                    ${phases.map(p => `
                        <div class="phase-item ${appState.currentPhase === p.id ? 'active' : ''}" data-phase="${p.id}">
                            <span class="phase-number">${p.id}</span>
                            <span class="phase-title">${p.title.split(': ')[1]}</span>
                        </div>
                    `).join('')}
                </aside>

                <div class="phase-content">
                    <div class="phase-header">
                        <h4>${phases[appState.currentPhase].title}</h4>
                        <p class="phase-focus">${phases[appState.currentPhase].focus}</p>
                    </div>

                    <div class="role-filter">
                        <span>Filter nach Rolle:</span>
                        <div class="filter-buttons">
                            <button class="filter-btn ${appState.currentRole === 'all' ? 'active' : ''}" data-role="all">Alle</button>
                            <button class="filter-btn ${appState.currentRole === 'bauverantwortliche' ? 'active' : ''}" data-role="bauverantwortliche">Bauverantwortliche</button>
                            <button class="filter-btn ${appState.currentRole === 'architektur' ? 'active' : ''}" data-role="architektur">Architektur</button>
                            <button class="filter-btn ${appState.currentRole === 'tragwerksplanung' ? 'active' : ''}" data-role="tragwerksplanung">Tragwerksplanung</button>
                            <button class="filter-btn ${appState.currentRole === 'vergabestelle' ? 'active' : ''}" data-role="vergabestelle">Vergabestelle</button>
                        </div>
                    </div>

                    <div class="checklist-section">
                        <h5>Checkliste</h5>
                        <ul class="checklist">
                            ${renderChecklist()}
                        </ul>
                    </div>
                </div>
            </div>

            <div class="material-explorer mt-60">
                <div class="section-header">
                    <h4>Material- & Konstruktions-Explorer</h4>
                    <p>Beispiele für zirkuläre Baustoffe.</p>
                </div>
                <div class="material-grid">
                    <div class="material-card">
                        <h5>Lehmbau</h5>
                        <p>Ohne Wertverlust recycelbar, schadstofffrei, energiearm und regional.</p>
                        <span class="tag">Regional</span>
                    </div>
                    <div class="material-card">
                        <h5>Massivholz</h5>
                        <p>Leimfreie Verbindungen ermöglichen einfache Demontage und Wiederverwendung.</p>
                        <span class="tag">CO2-Speicher</span>
                    </div>
                    <div class="material-card">
                        <h5>R-Beton</h5>
                        <p>Einsatz von Recycling-Gesteinskörnungen zur Ressourcenschonung.</p>
                        <span class="tag">Ressourcen</span>
                    </div>
                </div>
            </div>

            <div class="best-practices mt-60">
                <div class="section-header">
                    <h4>Best Practice Beispiele</h4>
                </div>
                <div class="practice-grid">
                    <div class="practice-card">
                        <div class="practice-img" style="background-color: #f0f0f0; height: 150px; border-radius: 8px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; font-size: 40px;">🚒</div>
                        <h5>Feuerwehrhaus Straubenhardt</h5>
                        <p>Cradle-to-Cradle Prinzip, Materiallager, Verzicht auf Klebstoffe.</p>
                    </div>
                    <div class="practice-card">
                        <div class="practice-img" style="background-color: #f0f0f0; height: 150px; border-radius: 8px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; font-size: 40px;">🏠</div>
                        <h5>Recyclinghaus Hannover</h5>
                        <p>Maximale Nutzung vorhandener Materialien und Upcycling.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    assistant: () => `
        <section id="assistant-page" class="container py-80">
            <div class="section-header">
                <h3>Ausschreibungs-Assistent</h3>
                <p>Generieren Sie Textbausteine für Ihre zirkuläre Ausschreibung.</p>
            </div>

            <div class="assistant-container">
                <div class="generator-box">
                    <div class="options">
                        <label>Zielgruppe:</label>
                        <select id="target-select" class="form-select">
                            <option value="planende">Textbausteine für Planende</option>
                            <option value="ausfuehrende">Textbausteine für Ausführende Firmen</option>
                        </select>
                    </div>
                    <div class="blocks mt-40">
                        <label>Wählen Sie Bausteine:</label>
                        <div class="block-list">
                            <div class="block-item">
                                <input type="checkbox" id="block1" checked>
                                <label for="block1">Grundsatz des zirkulären Bauens</label>
                            </div>
                            <div class="block-item">
                                <input type="checkbox" id="block2" checked>
                                <label for="block2">Abfallvermeidung und Sortentrennung</label>
                            </div>
                            <div class="block-item">
                                <input type="checkbox" id="block3">
                                <label for="block3">Gebäuderessourcenpass</label>
                            </div>
                        </div>
                    </div>
                    <div class="preview-box mt-40">
                        <label>Vorschau & Anpassung:</label>
                        <textarea id="output-text" rows="10" class="form-control">Die Leistungen sind im Sinne des zirkulären Bauens zu erbringen. Ziel ist die Minimierung des Primärressourcenverbrauchs und die Maximierung der Kreislauffähigkeit. Dazu sind mechanisch lösbare Verbindungen zu bevorzugen...</textarea>
                        <div class="actions mt-20">
                            <button class="btn btn-primary" id="copy-btn">Text kopieren</button>
                            <button class="btn btn-secondary" id="download-btn">Download .txt</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};


function renderChecklist() {
    const items = checklistData[appState.currentPhase] || [];
    const filtered = appState.currentRole === 'all' ? items : items.filter(i => i.role === appState.currentRole || i.role === 'all');
    
    if (filtered.length === 0) return '<p class="empty-msg">Keine spezifischen Aufgaben für diese Rolle in dieser Phase.</p>';

    return filtered.map((item, idx) => `
        <li class="checklist-item">
            <label class="checkbox-container">
                <input type="checkbox">
                <span class="checkmark"></span>
                <span class="item-text">${item.text}</span>
                <span class="item-role-tag">${item.role}</span>
            </label>
        </li>
    `).join('');
}

// Router and Event Listeners
function init() {
    const navLinks = document.querySelectorAll('.main-nav a');
    const dynamicContent = document.getElementById('dynamic-content');
    const landing = document.getElementById('landing');

    function navigate(hash) {
        window.scrollTo(0, 0);
        const route = hash.replace('#', '') || 'landing';
        
        // Update Nav
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === hash);
        });

        if (route === 'landing') {
            landing.style.display = 'block';
            dynamicContent.innerHTML = '';
        } else if (templates[route]) {
            landing.style.display = 'none';
            dynamicContent.innerHTML = templates[route]();
            initDynamicEvents(route);
        }
    }

    window.addEventListener('hashchange', () => navigate(window.location.hash));
    navigate(window.location.hash);

    // Landing page role cards
    document.querySelectorAll('.role-card').forEach(card => {
        card.addEventListener('click', () => {
            appState.currentRole = card.dataset.role;
            window.location.hash = '#toolbox';
        });
    });
}

function initDynamicEvents(route) {
    if (route === 'toolbox') {
        const phaseItems = document.querySelectorAll('.phase-item');
        phaseItems.forEach(item => {
            item.addEventListener('click', () => {
                appState.currentPhase = parseInt(item.dataset.phase);
                renderToolbox();
            });
        });

        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                appState.currentRole = btn.dataset.role;
                renderToolbox();
            });
        });
    }
}

function renderToolbox() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = templates.toolbox();
    initDynamicEvents('toolbox');
}

document.addEventListener('DOMContentLoaded', init);
