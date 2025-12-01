# 📚 CORSO AI GENERATIVA PER AGENZIE IMMOBILIARI
## Da Utente Base a Power User - Struttura Contenuti (4 ore)

---

## 🎯 OBIETTIVO GENERALE
Trasformare professionisti immobiliari che usano ChatGPT in modo basico in power user capaci di sfruttare al massimo l'AI generativa per aumentare produttività, qualità dei contenuti e efficacia commerciale.

---

# MODULO 1: FONDAMENTA (45 minuti)
## "Capire per Padroneggiare"

### 1.1 Come Funzionano Davvero gli LLM (15 min)
**Teoria essenziale:**
- Il concetto di "predizione del token successivo"
- Perché l'AI non "pensa" ma genera testo probabilistico
- Context window: cos'è e perché è importante
- Differenza tra GPT-4, Claude, Gemini, Llama

**Esercizio pratico #1:**
> Chiedere a ChatGPT: "Quante R ci sono nella parola STRAWBERRY?"
> Poi chiedere: "Conta lettera per lettera la parola STRAWBERRY"
> → Dimostra i limiti del ragionamento tokenizzato

### 1.2 I Modelli Disponibili Oggi (15 min)
**Panoramica strumenti:**
| Strumento | Punti di Forza | Ideale per |
|-----------|----------------|------------|
| ChatGPT (GPT-4o) | Versatile, multimodale | Uso generale, immagini |
| Claude | Testi lunghi, ragionamento | Documenti, analisi |
| Gemini | Integrazione Google | Ricerche, dati web |
| Perplexity | Ricerca con fonti | Fact-checking, news |
| Copilot | Integrato Microsoft | Office, Excel |

**Esercizio pratico #2:**
> Fare la stessa domanda a ChatGPT e Claude:
> "Scrivi un annuncio per un bilocale in centro a Milano, 65mq, terzo piano con ascensore, 180.000€"
> → Confrontare stili e approcci

### 1.3 Sicurezza e Privacy (15 min)
**Cosa sapere:**
- I dati inseriti vengono usati per il training? (dipende dalle impostazioni)
- Come disabilitare il training sui propri dati
- Cosa NON inserire mai (dati sensibili clienti, documenti riservati)
- Versioni Enterprise vs Consumer

**Checklist sicurezza per l'agenzia:**
- [ ] Verificare impostazioni privacy ChatGPT
- [ ] Non inserire mai: codici fiscali, IBAN, password
- [ ] Anonimizzare i dati cliente prima di inserirli
- [ ] Usare versioni Team/Enterprise per dati sensibili

---

# MODULO 2: L'ARTE DEL PROMPT (60 minuti)
## "Il Prompt è Tutto"

### 2.1 Anatomia di un Prompt Efficace (20 min)

**Framework RICCA:**
```
R - Ruolo: Chi deve essere l'AI
I - Istruzioni: Cosa deve fare
C - Contesto: Informazioni di background
C - Constraints: Limiti e vincoli
A - Aspettative: Formato output desiderato
```

**Esempio base vs avanzato:**

❌ **Prompt debole:**
> "Scrivi un annuncio per una casa"

✅ **Prompt power user:**
> "Agisci come un copywriter esperto di annunci immobiliari di lusso.
>
> Scrivi un annuncio per questa proprietà:
> - Villa indipendente 250mq a Forte dei Marmi
> - 5 camere, 4 bagni, piscina, giardino 1000mq
> - Vista mare, 500m dalla spiaggia
> - Prezzo: 2.8M€
>
> Vincoli:
> - Massimo 150 parole
> - Tono elegante ma non pomposo
> - Includi una call-to-action finale
>
> Formato: headline accattivante + corpo annuncio + CTA"

**Esercizio pratico #3:**
> Trasformare questo prompt debole in uno forte:
> "Fammi una descrizione di un appartamento"

### 2.2 Tecniche Avanzate di Prompting (25 min)

**Tecnica 1: Chain of Thought**
> "Prima analizza i punti di forza della proprietà, poi identifica il target ideale, infine scrivi l'annuncio"

**Tecnica 2: Few-Shot Learning**
> Fornire 2-3 esempi di annunci ben scritti prima di chiederne uno nuovo

**Tecnica 3: Role-Playing Avanzato**
> "Sei un agente immobiliare con 20 anni di esperienza nel mercato di lusso milanese. Un cliente ti chiede..."

**Tecnica 4: Iterazione Guidata**
> Primo prompt → feedback → "Ora migliora X e Y" → risultato raffinato

**Esercizio pratico #4:**
> Usare la tecnica Few-Shot:
> Fornire 2 esempi di email di follow-up efficaci
> Poi chiedere di generarne una terza per un caso specifico

### 2.3 Prompt Template per Immobiliare (15 min)

**Template 1: Generatore Annunci**
```
Sei un copywriter immobiliare esperto. Genera un annuncio per:

PROPRIETÀ:
- Tipologia: [appartamento/villa/ufficio]
- Metratura: [X] mq
- Locali: [N] + [servizi]
- Zona: [indirizzo/quartiere]
- Prezzo: [€]
- Punti di forza: [elenco]

STILE: [elegante/giovane/professionale/luxury]
LUNGHEZZA: [breve 50w / media 100w / lunga 200w]
PIATTAFORMA: [Immobiliare.it / Idealista / Social / Vetrina]
```

**Template 2: Risposta a Richieste**
```
Sei un agente immobiliare professionale e cordiale.

Rispondi a questa richiesta cliente:
"[testo richiesta]"

Informazioni disponibili:
[dettagli immobili in portafoglio]

Obiettivo: [fissare appuntamento / qualificare lead / fornire info]
Tono: professionale ma caloroso
Includi: proposta di prossimo step concreto
```

---

# MODULO 3: CASI D'USO IMMOBILIARI (75 minuti)
## "AI al Lavoro in Agenzia"

### 3.1 Content Creation (25 min)

**A) Annunci Multi-Piattaforma**
> Un annuncio, adattato per:
> - Immobiliare.it (dettagliato, keyword-rich)
> - Instagram (emozionale, con emoji)
> - LinkedIn (professionale, per investitori)
> - WhatsApp (breve, diretto)

**Esercizio pratico #5:**
> Prendere un annuncio esistente dalla propria agenzia
> Farlo riscrivere per 3 piattaforme diverse

**B) Descrizioni da Foto**
> Caricare foto di un immobile e chiedere:
> "Descrivi questa proprietà basandoti sulle immagini. Evidenzia i punti di forza visibili."

**Esercizio pratico #6:**
> Caricare 3-4 foto di un immobile su ChatGPT
> Generare una descrizione completa

**C) Virtual Staging Prompt**
> Per strumenti AI di staging virtuale:
> "Arreda questo soggiorno in stile moderno scandinavo, target giovane coppia professionista"

### 3.2 Comunicazione Cliente (25 min)

**A) Email di Follow-Up**
```
Scrivi una email di follow-up per:
- Cliente: [nome], visitato [immobile] il [data]
- Feedback visita: [positivo/dubbi su X/non interessato]
- Obiettivo: [secondo appuntamento/proposta/altro immobile]
- Tono: [formale/friendly/urgente]
```

**Esercizio pratico #7:**
> Generare 3 versioni di follow-up per lo stesso cliente:
> 1. Dopo visita positiva
> 2. Dopo visita con dubbi
> 3. Dopo nessuna risposta per 1 settimana

**B) Gestione Obiezioni**
> "Il cliente dice che il prezzo è troppo alto rispetto al mercato. L'immobile è a [zona] e vale [prezzo] perché [motivi]. Scrivi una risposta che giustifichi il valore."

**C) Script Telefonici**
```
Crea uno script per chiamata a freddo:
- Obiettivo: acquisire nuovi immobili
- Target: proprietario che ha messo annuncio privato
- Durata: 2 minuti max
- Gestione obiezione: "Ho già un'agenzia"
```

### 3.3 Analisi e Ricerca (25 min)

**A) Analisi Comparativa di Mercato**
```
Analizza questi dati di immobili comparabili:
[inserire lista immobili zona con prezzi]

Determina:
1. Range di prezzo al mq per la zona
2. Fattori che influenzano prezzo
3. Suggerimento prezzo per immobile con [caratteristiche]
```

**B) Ricerca Quartieri**
> "Descrivi il quartiere [X] di [città] per un potenziale acquirente. Includi: servizi, trasporti, scuole, vita sociale, trend prezzi, pro e contro."

**Esercizio pratico #8:**
> Usare Perplexity per ricercare dati aggiornati su una zona
> Poi usare ChatGPT per sintetizzare in una scheda quartiere

**C) Preparazione Appuntamenti**
```
Sto per incontrare un cliente che cerca:
[caratteristiche ricerca]

Ho da proporgli:
[lista immobili]

Prepara:
1. Ordine ottimale di presentazione
2. Punti chiave da evidenziare per ogni immobile
3. Possibili obiezioni e risposte
```

---

# MODULO 4: WORKFLOW AVANZATI (45 minuti)
## "Automatizzare l'Eccellenza"

### 4.1 Custom GPTs / Progetti (20 min)

**Creare un Assistente Personalizzato:**

Esempio: "Assistente Annunci Agenzia XYZ"
```
Istruzioni sistema:
- Sei l'assistente copywriter dell'agenzia XYZ
- Conosci il nostro stile: elegante, mai banale, focus su lifestyle
- Usi sempre il nostro format: headline | intro | caratteristiche | contesto | CTA
- Non usi mai: "soluzione abitativa", "ampi spazi", "rifinito"
- Chiedi sempre: target, tono, piattaforma
```

**Esercizio pratico #9:**
> Creare un Custom GPT base per la propria agenzia
> Testarlo con 3 richieste diverse

### 4.2 Integrazioni Produttive (15 min)

**ChatGPT + Excel/Sheets:**
- Analisi dati portafoglio
- Generazione report
- Pulizia e formattazione dati

**ChatGPT + Canva:**
- Generare testi per grafiche
- Idee layout post social

**Copilot in Word/Outlook:**
- Riscrittura documenti
- Email professionali
- Contratti base

### 4.3 Workflow Completo: Da Lead a Chiusura (10 min)

**Scenario pratico guidato:**
1. Nuovo lead da portale → AI genera risposta personalizzata
2. Preparazione visita → AI crea scheda immobile + talking points
3. Post visita → AI genera follow-up su misura
4. Proposta → AI aiuta a strutturare presentazione
5. Negoziazione → AI suggerisce argomentazioni
6. Chiusura → AI prepara comunicazioni finali

---

# MODULO 5: PRATICA GUIDATA (30 minuti)
## "Le Mani in Pasta"

### 5.1 Challenge Finale (20 min)

**Sfida individuale:**
> Ogni partecipante sceglie un immobile reale del proprio portafoglio
>
> In 20 minuti deve produrre:
> 1. Annuncio per Immobiliare.it
> 2. Post Instagram con caption
> 3. Email per un lead interessato
> 4. Risposta a obiezione sul prezzo
>
> Usando tutte le tecniche apprese

### 5.2 Review Collettiva (10 min)
- Condivisione risultati migliori
- Feedback e suggerimenti
- Tips finali

---

# RISORSE E NEXT STEPS

## Prompt Library da Portare a Casa
1. 10 template annunci
2. 5 template email
3. 3 template analisi
4. Script obiezioni comuni

## Strumenti Consigliati
- **Gratis:** ChatGPT Free, Claude Free, Gemini
- **Pro:** ChatGPT Plus (20$/mese), Claude Pro
- **Specializzati:** Perplexity Pro (ricerca), Midjourney (immagini)

## Regole d'Oro del Power User
1. **Contesto è re** - Più informazioni dai, meglio è
2. **Itera sempre** - Il primo output non è mai quello finale
3. **Salva i prompt** - Crea la tua libreria personale
4. **Sperimenta** - Prova formulazioni diverse
5. **Verifica** - L'AI può sbagliare, controlla sempre

---

## TIMING RIEPILOGO

| Modulo | Durata | Contenuto |
|--------|--------|-----------|
| 1 | 45 min | Fondamenta |
| 2 | 60 min | Arte del Prompt |
| *Pausa* | *15 min* | *Coffee break* |
| 3 | 75 min | Casi d'Uso Immobiliari |
| 4 | 45 min | Workflow Avanzati |
| 5 | 30 min | Pratica Guidata |
| **TOTALE** | **4h 30min** | (4h nette + pausa) |

---

*Documento creato per corso AI Generativa - Agenzie Immobiliari*
