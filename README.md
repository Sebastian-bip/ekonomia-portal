# Ekonomia — Interaktywny Portal do Nauki i Strefa Kolokwium

Przejrzyste, akademickie kompendium do nauki **Mikroekonomii** i **Makroekonomii** przygotowane z myślą o wygodnym czytaniu oraz skutecznym przygotowaniu do kolokwium (zarówno na komputerze, jak i na telefonie).

## Co zawiera portal?

- **Mikroekonomia (5 tematów):**
  1. *Zagadnienia wstępne, rzadkość i rynek* (ekonomia pozytywna vs normatywna, koszt alternatywny, krzywa transformacji PPF, 10 zasad ekonomii z krzywą Phillipsa i NAIRU, klasyfikacja rynku).
  2. *Popyt, podaż, równowaga rynkowa i elastyczność* (prawo popytu Marshalla, paradoksy Giffena/Veblena/spekulacyjny, ceny urzędowe, elastyczność cenowa metodą punktu środkowego, krzyżowa, dochodowa i prawo Engla).
  3. *Teoria wyboru konsumenta* (użyteczność całkowita i krańcowa, I i II prawo Gossena, krzywe obojętności, MRS, linia ograniczenia budżetowego).
  4. *Przedsiębiorstwo, produkcja i koszty* (koszty księgowe vs ekonomiczne, prawo malejących przychodów, izokwanty i izokoszty, koszty krótkookresowe `TC, FC, VC, ATC, AVC, AFC, MC`, `OT = min ATC`, granica racjonalnych strat `min AVC`, korzyści skali).
  5. *Struktury rynku, konkurencja doskonała i monopol* (porównanie 4 struktur rynku, reguła `OE: MR = MC`, społeczny koszt monopolu `DWL`, dyskryminacja cenowa, monopol naturalny, formy koncentracji oraz UOKiK/KNF/BFG).
- **Makroekonomia (2 tematy):**
  6. *PKB, ruch okrężny, 3 metody liczenia i dochód narodowy* (agregacja, zasoby vs strumienie, odpływy i dopływy, wartość dodana — chleb 10 zł vs 27 zł, metoda wydatkowa `C + I + G + NX`, łańcuch `PKB → PNB → PNN(DN) → DO → RDO`).
  7. *PKB nominalny vs realny, deflator, miary dobrobytu i równowaga AD = Y* (deflowanie, wady PKB i dane dla Polski w UE/MFW, mierniki `MEW/NEW`, `PPP`, `HDI/IHDI`, `HPI`, krzyż keynesowski 45° z mnożnikiem gospodarki otwartej oraz model Solowa–Swana).
- **Ćwiczenia z wykładu (16 opracowanych zadań krok po kroku):** zadania z wykładów i ćwiczeń z oryginalną treścią, intuicją, interaktywnymi wykresami, rozwiązaniami KaTeX i pułapkami egzaminacyjnymi (m.in. Roz_3A Q20, cygara Q3, pomarańcze Q4, bilety Q5, czekolady Q6, Riwiera vs samochody Q7, E_08 elastyczność i płyty DVD, monopol Q177–Q180 oraz obliczenia z wykładów).
- **Strefa Kolokwium:** filtrowanie Mikro/Makro oraz 5 trybów powtórki: *Struktura & Porady*, *Test ABCD* (47 pytań), *Dokończ zdanie* (30 zdań), *Fiszki i Definicje* (38 kart) oraz *Zadania obliczeniowe* (15 zadań z rozwiązaniami krok po kroku).
- **Ściąga: Wzory i Definicje:** szybka wyszukiwarka obejmująca **70 definicji** i **33 wzory matematyczne** z legendą symboli i ostrzeżeniami o pułapkach.
- **6 interaktywnych wykresów SVG:** Popyt i Podaż (z presetami wykładowymi i testem nadwyżki/niedoboru), Porównanie Elastyczności i Ciężaru Podatku, Monopol i `DWL`, Optimum Konsumenta, Krzywe Kosztów Firmy oraz Wykres PKB (`Nominalny vs Realny` i `C + I + G + NX`).
- **Wygoda nauki:** tryb jasny i ciemny (z poszanowaniem ustawień systemu), przełącznik większej czcionki (`A` / `A+`), globalne wyszukiwanie (`Ctrl + K`) oraz zapisywanie postępu opanowanych tematów w `localStorage`.

## Stos technologiczny

- **Vue 3** (`<script setup lang="ts">`) + **Vue Router 4** + **TypeScript** — wybrany ze względu na lekką i czytelną reaktywność idealną dla interaktywnych wykresów SVG z suwakami, prosty podział na komponenty jednoplikowe (SFC) i świetną wydajność bundla bez zbędnego narzutu ciężkich frameworków UI.
- **Vite 6** — szybki serwer deweloperski i zoptymalizowany build produkcyjny.
- **KaTeX** — wyraźne, błyskawiczne renderowanie wzorów matematycznych w LaTeX.
- **lucide-vue-next** — lekkie ikony SVG.
- **`@vercel/analytics/vue`** — wbudowana analityka odwiedzin (`<Analytics />` w `src/App.vue`).

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Sprawdzenie typów TypeScript oraz build produkcyjny:

```bash
npm run typecheck
npm run build
```

## Wdrożenie na Vercel

Projekt jest gotowy do natychmiastowego wdrożenia na Vercel bezpośrednio z tego repozytorium:

- Plik `vercel.json` zawiera regułę przepisywania tras SPA (`/(.*) -> /index.html`), dzięki czemu wszystkie ścieżki Vue Router działają poprawnie po odświeżeniu strony.
- Komponent `<Analytics />` z pakietu `@vercel/analytics/vue` jest już podpięty w `src/App.vue`.
- Lokalny folder `Prezentacje/` z materiałami źródłowymi `.pptx` jest wykluczony w `.gitignore` i nie jest wysyłany do repozytorium.
