import type { Topic } from '@/types/economics';

export const macroTopics: Topic[] = [
  {
    slug: 'pkb-i-dochod-narodowy',
    track: 'macro',
    order: 6,
    title: 'PKB, ruch okrężny, 3 metody liczenia i rachunek dochodu narodowego',
    shortTitle: 'PKB i dochód narodowy',
    subtitle:
      'Zakres makroekonomii, agregacja (zasoby vs strumienie), definicja PKB, ruch okrężny, wartość dodana, metoda dochodowa i wydatkowa oraz pełny łańcuch PKB → PNB → PNN → DO → RDO.',
    sourceLecture: 'Wykład 4: Produkt Krajowy Brutto (wykład nt pkb.pptx, slajdy 1–6 oraz 10–28)',
    estimatedMinutes: 30,
    examWeight: 'kluczowa',
    learningObjectives: [
      'Odróżnić zasoby (stocks) od strumieni (flows) i stosować 5 zasad poprawnej agregacji makroekonomicznej.',
      'Podać pełną definicję PKB oraz bezbłędnie wskazać transakcje wyłączone z PKB (dobra pośrednie, używane, transfery, akcje).',
      'Rozróżnić odpływy (S, T, Im) i dopływy (I, G, Ex) w rozszerzonym modelu ruchu okrężnego.',
      'Obliczyć PKB trzema metodami (produkcyjną/wartości dodanej, dochodową i wydatkową C + I + G + NX) oraz przejść przez pełny łańcuch PKB → PNB → PNN(DN) → DO → RDO.',
    ],
    keyTakeaways: [
      'Zasób to „zdjęcie” w konkretnym momencie (zatrudnienie, bezrobocie, majątek, dług publiczny), a strumień to „film” w przedziale czasu (PKB, inwestycje, dochód, deficyt budżetowy). Nie wolno ich do siebie dodawać!',
      'PKB mierzy wartość rynkową wyłącznie dóbr i usług FINALNYCH wytworzonych na TERYTORIUM kraju w danym okresie; suma wartości dodanej ze wszystkich etapów zawsze równa się cenie dobra finalnego (przykład chleba: 10 zł, a nie 27 zł).',
      'W metodzie wydatkowej (PKB_cr = C + I + G + NX) nowe domy i mieszkania zaliczamy do inwestycji I (nie do C!), transfery socjalne NIE wchodzą do G, a zakup akcji NIE wchodzi do PKB.',
      'Przejście na ceny czynników produkcji: PKB_ccp = PKB_cr − Te + Su. Przejście z kryterium terytorialnego na własnościowe: PNB = PKB + Dw. Po odjęciu amortyzacji otrzymujemy PNN = PNB − Am (PNN_ccp = Dochód Narodowy Y).',
    ],
    sections: [
      {
        id: 'makroekonomia-agregacja-zasoby-strumienie',
        title: 'Przedmiot makroekonomii, agregacja oraz zasoby i strumienie',
        summary: 'Jak makroekonomia łączy decyzje milionów podmiotów w makrowielkości i dlaczego nie wolno mieszać zasobów ze strumieniami (slajdy 1–6).',
        paragraphs: [
          'Makroekonomia bada gospodarkę jako całość, zjawiska ogólnogospodarcze oraz wielkości agregatowe (makrowielkości). Koncentruje się na sześciu głównych obszarach: (1) poziomie i wzroście produkcji w krótkim i długim okresie, (2) cyklach koniunkturalnych i polityce antycyklicznej, (3) bezrobociu i zatrudnieniu, (4) ogólnym poziomie cen i inflacji, (5) bilansie płatniczym i kursach walutowych oraz (6) polityce gospodarczej państwa — polityce fiskalnej (podatki, wydatki budżetowe) i pieniężnej/monetarnej (bank centralny, podaż pieniądza, stopy procentowe).',
          'Aby opisać całą gospodarkę jedną liczbą, stosujemy agregację — proces łączenia (sumowania) wielkości mikroekonomicznych w agregaty makroekonomiczne. Poprawna agregacja wymaga jednak ścisłej dyscypliny metodologicznej.',
        ],
        bullets: [
          'Agregujemy wyłącznie wielkości jednorodne — albo same strumienie, albo same zasoby (nigdy zasób ze strumieniem).',
          'Sumowane zasoby muszą dotyczyć dokładnie tego samego momentu czasu (np. 31 grudnia danego roku).',
          'Sumowane strumienie muszą obejmować dokładnie ten sam przedział czasowy (np. ten sam rok lub kwartał).',
          'Unikamy błędu złożenia — zależności prawdziwe dla pojedynczej firmy lub rodziny nie muszą działać identycznie w skali całej gospodarki (np. paradoks zapobiegliwości: gdy wszyscy naraz gwałtownie tną wydatki, spada popyt i dochody w całej gospodarce).',
          'Jednostki pomiaru mogą być naturalne (np. liczba bezrobotnych w osobach) albo wartościowo-pieniężne — te drugie zawsze wymagają rozróżnienia wartości nominalnej i realnej.',
        ],
        table: {
          caption: 'Zasoby (stocks) a strumienie (flows) — porównanie (Slajd 4)',
          headers: ['Cecha', 'Zasoby (stocks)', 'Strumienie (flows)'],
          rows: [
            ['Istota pomiaru', 'Stan wielkości ekonomicznej w konkretnym momencie czasu', 'Wielkość przepływu (zmiany) w określonym przedziale czasu'],
            ['Intuicyjna metafora', '„Zdjęcie fotograficzne” gospodarki w jednej chwili', '„Film” nakręcony np. w ciągu kwartału lub roku'],
            ['Przykłady z wykładu', 'Zatrudnienie, bezrobocie, majątek produkcyjny (kapitał), zasób pieniądza, dług publiczny', 'Produkcja (PKB), sprzedaż, inwestycje, wydatki, dochód, oszczędności roczne, deficyt budżetowy'],
            ['Relacja między nimi', 'Zasób zmienia się pod wpływem dopływów i odpływów (strumieni)', 'Strumienie (np. inwestycje netto) powiększają lub zmniejszają zasób (kapitał)'],
          ],
          highlightFirstColumn: true,
        },
        callouts: [
          {
            variant: 'trap',
            title: 'Pułapka na kolokwium: Deficyt budżetowy vs Dług publiczny',
            content:
              'Studenci często mylą te dwa pojęcia w pytaniach ABCD o zasoby i strumienie. Deficyt budżetowy mierzy niedobór w ciągu jednego roku — jest STRUMIENIEM. Dług publiczny to skumulowany stan zadłużenia w danym dniu — jest ZASOBEM!',
          },
        ],
        quickCheck: {
          id: 'qc-macro-1',
          question: 'Który zestaw zawiera WYŁĄCZNIE strumienie (flows)?',
          options: [
            'PKB, inwestycje, wydatki konsumpcyjne, dochód narodowy',
            'PKB, bezrobocie, majątek produkcyjny, inwestycje',
            'Zatrudnienie, dług publiczny, zasób kapitału, bezrobocie',
            'Sprzedaż roczna, majątek narodowy, konsumpcja, eksport',
          ],
          correctIndex: 0,
          explanation:
            'PKB, inwestycje, wydatki i dochód narodowy zawsze mierzymy w przedziale czasu (np. za dany rok), więc wszystkie są strumieniami. Bezrobocie, zatrudnienie, dług publiczny i majątek są zasobami.',
        },
      },
      {
        id: 'definicja-pkb-i-ruch-okrezny',
        title: 'Definicja PKB i model ruchu okrężnego gospodarki',
        summary: 'Cztery elementy definicji PKB, lista najczęstszych wyłączeń oraz przepływy między sektorami (slajdy 10–16).',
        paragraphs: [
          'Produkt Krajowy Brutto (PKB / GDP) to najważniejsza, syntetyczna miara rozmiarów gospodarki i wartości wytworzonej produkcji. W prostym modelu ruchu okrężnego (gospodarka zamknięta bez państwa) występują dwa podmioty — gospodarstwa domowe i przedsiębiorstwa — połączone dwoma przeciwnie skierowanymi strumieniami: strumieniem rzeczowym (czynniki produkcji płyną od gospodarstw do firm, a dobra i usługi od firm do gospodarstw) oraz strumieniem pieniężnym (wynagrodzenia czynników produkcji płyną do gospodarstw, a wydatki na zakupy wracają do firm).',
          'Z tego obiegu wynika fundamentalna tożsamość rachunku narodowego: w gospodarce wartość wytworzonej produkcji jest zawsze równa sumie dochodów czynników produkcji oraz sumie wydatków na dobra finalne. W modelu rozszerzonym (diagram Mankiwa ze slajdu 16) dochodzą instytucje finansowe (banki), państwo (instytucje rządowe i samorządowe) oraz zagranica — pojawiają się wtedy odpływy (wycieki) i dopływy (zastrzyki).',
        ],
        callouts: [
          {
            variant: 'definition',
            title: 'Produkt Krajowy Brutto (PKB)',
            content:
              'Wartość rynkowa wszystkich dóbr i usług finalnych wytworzonych na terytorium danego kraju w określonym przedziale czasu (zwykle w ciągu roku lub kwartału).',
            points: [
              'Wartość rynkowa — wyceniana w pieniądzu według cen rynkowych (pozwala zsumować jabłka, samochody i usługi lekarskie).',
              'Dobra i usługi FINALNE — wyklucza dobra pośrednie, by uniknąć podwójnego liczenia.',
              'Na TERYTORIUM kraju — kryterium geograficzne (liczy się produkcja fabryki zagranicznej w Polsce, ale nie produkcja polskiej firmy w Niemczech).',
              'W określonym czasie — wyłącznie bieżąca produkcja (bez sprzedaży dóbr używanych z lat ubiegłych).',
            ],
          },
          {
            variant: 'trap',
            title: 'Pułapka na kolokwium: Czego NIE wliczamy do PKB?',
            content:
              'Pytanie „która transakcja wchodzi / nie wchodzi do PKB?” pojawia się niemal na każdym kolokwium. Zapamiętaj listę wyłączeń:',
            points: [
              'Dobra pośrednie (np. mąka kupiona przez piekarnię, stal kupiona przez fabrykę aut) — ich wartość jest już w cenie dobra finalnego.',
              'Dobra używane (np. 5-letni samochód, mieszkanie z rynku wtórnego) — były już policzone w roku ich wytworzenia (wyjątek: marża pośrednika/komisu za bieżącą usługę!).',
              'Płatności transferowe z budżetu państwa (emerytury, renty socjalne, zasiłki dla bezrobotnych, stypendia, 800+) — to redystrybucja dochodu bez bieżącej produkcji w zamian.',
              'Darowizny, spadki oraz transakcje czysto finansowe (zakup akcji na giełdzie, obligacji, przeniesienie własności papierów wartościowych).',
              'Praca nierejestrowana — zarówno szara strefa/działalność nielegalna, jak i nieodpłatna praca w domu (gotowanie dla rodziny, sprzątanie).',
            ],
          },
        ],
        table: {
          caption: 'Rozszerzony model ruchu okrężnego — odpływy i dopływy (Slajdy 15–16)',
          headers: ['Kierunek przepływu', 'Składniki (symbole)', 'Sektor pośredniczący', 'Wpływ na bieżący obieg wydatków'],
          rows: [
            ['Odpływy (wycieki) z ruchu okrężnego', 'Oszczędności (S)', 'Instytucje finansowe / banki', 'Część dochodu niewydana na bieżącą konsumpcję'],
            ['Odpływy (wycieki) z ruchu okrężnego', 'Podatki (T)', 'Państwo (rząd i samorządy)', 'Środki przejmowane przez sektor publiczny'],
            ['Odpływy (wycieki) z ruchu okrężnego', 'Import (Im)', 'Rynki zagraniczne', 'Wydatki krajowe na dobra wytworzone za granicą'],
            ['Dopływy (zastrzyki) do ruchu okrężnego', 'Inwestycje (I)', 'Instytucje finansowe / kredyt', 'Wydatki przedsiębiorstw na kapitał rzeczowy i zapasy'],
            ['Dopływy (zastrzyki) do ruchu okrężnego', 'Wydatki rządowe (G)', 'Państwo (rząd i samorządy)', 'Zakupy dóbr i usług przez sektor publiczny (bez transferów)'],
            ['Dopływy (zastrzyki) do ruchu okrężnego', 'Eksport (Ex)', 'Rynki zagraniczne', 'Wpływy z zagranicy za dobra wytworzone w kraju'],
          ],
          highlightFirstColumn: true,
        },
        quickCheck: {
          id: 'qc-macro-2',
          question: 'W rozszerzonym modelu ruchu okrężnego do DOPŁYWÓW (zastrzyków) zaliczamy:',
          options: [
            'Oszczędności (S), podatki (T) i import (Im)',
            'Inwestycje (I), wydatki rządowe (G) i eksport (Ex)',
            'Inwestycje (I), podatki (T) i eksport (Ex)',
            'Oszczędności (S), wydatki rządowe (G) i import (Im)',
          ],
          correctIndex: 1,
          explanation:
            'Dopływy (zastrzyki) zasilające popyt na produkcję krajową to inwestycje (I), wydatki rządowe (G) i eksport (Ex). Natomiast S, T oraz Im są odpływami (wyciekami) z obiegu.',
        },
      },
      {
        id: 'trzy-metody-obliczania-pkb',
        title: 'Trzy metody liczenia PKB: produkcyjna, dochodowa i wydatkowa',
        summary: 'Wszystkie trzy podejścia — przy spójnym ujęciu cen — prowadzą do tej samej wartości PKB (slajdy 17–22).',
        paragraphs: [
          'Ponieważ każda złotówka wydana przez nabywcę na dobro finalne staje się przychodem producenta, a następnie dochodem pracowników i właścicieli kapitału, PKB można mierzyć od trzech stron: wytwarzania (metoda produkcyjna / wartości dodanej), podziału (metoda dochodowa) oraz wydatkowania (metoda wydatkowa).',
        ],
        subsections: [
          {
            id: 'metoda-produkcyjna-wartosc-dodana',
            title: '1. Metoda produkcyjna (sumowania produktów i wartości dodanej)',
            paragraphs: [
              'Metoda produkcyjna sumuje wartość wszystkich dóbr i usług finalnych wytworzonych w gospodarce albo — co daje identyczny wynik i chroni przed podwójnym liczeniem — sumuje wartość dodaną (WD) wytworzoną na każdym kolejnym etapie łańcucha produkcji.',
            ],
            formulas: [
              {
                title: 'Wartość dodana (WD) i PKB w ujęciu produkcyjnym',
                latex: '\\text{WD} = \\text{Wartość sprzedaży} - \\text{Koszty zużytych dóbr pośrednich i surowców}, \\qquad \\text{PKB} = \\sum \\text{WD}',
                plainReading: 'Wartość dodana na każdym etapie to przyrost wartości ponad zakupione surowce i półprodukty; suma wartości dodanej w całej gospodarce równa się wartości dóbr finalnych.',
                symbols: [
                  { symbol: '\\text{WD}', meaning: 'wartość dodana na danym etapie produkcji' },
                  { symbol: '\\sum \\text{WD}', meaning: 'suma wartości dodanych ze wszystkich działów gospodarki' },
                ],
              },
            ],
            callouts: [
              {
                variant: 'example',
                title: 'Przykład z wykładu (Slajd 19): Produkcja chleba — 10 zł, a NIE 27 zł!',
                content:
                  'Prześledź łańcuch: Ziarno (sprzedaż 2 zł, WD = 2 zł) → Rolnik sprzedaje zboże za 3 zł (WD = 3 − 2 = 1 zł) → Młynarz sprzedaje mąkę za 4 zł (WD = 4 − 3 = 1 zł) → Piekarz sprzedaje chleb za 8 zł (WD = 8 − 4 = 4 zł) → Sklep sprzedaje chleb konsumentowi za 10 zł (WD = 10 − 8 = 2 zł). Suma wartości dodanej wynosi 2 + 1 + 1 + 4 + 2 = 10 zł (dokładnie tyle, ile kosztuje finalny chleb!). Błędne zsumowanie wszystkich faktur dałoby 2 + 3 + 4 + 8 + 10 = 27 zł (wielokrotne policzenie tego samego ziarna i mąki).',
              },
            ],
            table: {
              caption: 'Zadanie z wykładu (Slajd 20): Obliczanie wartości dodanej przy produkcji samochodu',
              headers: ['Stadium produkcji', 'Wpływy ze sprzedaży', 'Koszty dóbr pośrednich', 'Wartość dodana (WD)'],
              rows: [
                ['Ruda żelaza', '700', '0', '700'],
                ['Stal', '1 600', '700', '900'],
                ['Elementy konstrukcyjne', '3 000', '1 600', '1 400'],
                ['Samochód (dobro finalne)', '4 800', '3 000', '1 800'],
                ['RAZEM', '10 100 (obrót globalny)', '5 300', '4 800 (= wartość samochodu!)'],
              ],
              highlightFirstColumn: true,
            },
          },
          {
            id: 'metoda-dochodowa',
            title: '2. Metoda dochodowa (sumowania dochodów)',
            paragraphs: [
              'Metoda dochodowa sumuje wszystkie dochody pierwotne powstające w procesie produkcji w kraju w ciągu roku: płace (wynagrodzenie pracy), procenty/odsetki (wynagrodzenie kapitału), zyski przedsiębiorstw oraz renty ekonomiczne (czynsze i dzierżawy z ziemi/nieruchomości).',
              'Uwaga: metoda dochodowa bezpośrednio wyznacza PKB w cenach czynników produkcji (PKB_ccp). Nie wliczamy tu żadnych płatności transferowych z budżetu (emerytury, zasiłki, stypendia) ani darowizn i spadków.',
            ],
          },
          {
            id: 'metoda-wydatkowa',
            title: '3. Metoda wydatkowa (sumowania wydatków: C + I + G + NX)',
            paragraphs: [
              'Metoda wydatkowa sumuje wydatki czterech grup nabywców na krajowe dobra i usługi finalne i daje bezpośrednio PKB w cenach rynkowych (PKB_cr). W notacji ze slajdów wykładowych eksport netto oznacza się jako NX lub X (gdzie X = Ex − Im).',
            ],
            formulas: [
              {
                title: 'Tożsamość wydatkowa PKB (w cenach rynkowych)',
                latex: '\\text{PKB}_{\\text{cr}} = C + I + G + NX, \\qquad \\text{gdzie } NX = Ex - Im',
                plainReading: 'PKB w cenach rynkowych to suma konsumpcji gospodarstw domowych, inwestycji brutto, wydatków rządowych i eksportu netto.',
                symbols: [
                  { symbol: 'C', meaning: 'konsumpcja prywatna gospodarstw domowych (BEZ zakupu nowych mieszkań/domów!)' },
                  { symbol: 'I', meaning: 'inwestycje brutto: maszyny, budynki, przyrost zapasów ORAZ nowe domy i mieszkania' },
                  { symbol: 'G', meaning: 'wydatki rządowe na dobra finalne i usługi (BEZ transferów socjalnych!)' },
                  { symbol: 'NX = Ex - Im', meaning: 'eksport netto (eksport minus import)' },
                ],
              },
            ],
            callouts: [
              {
                variant: 'trap',
                title: 'Klasyczna pułapka metody wydatkowej: nowe mieszkanie, zapasy i akcje',
                content:
                  '1) Zakup NOWEGO mieszkania lub domu od dewelopera zaliczamy do inwestycji (I), a NIE do konsumpcji (C)! 2) Niesprzedane w danym roku produkty trafiające do magazynu to przyrost zapasów, więc również wchodzą do I. 3) Zakup akcji na giełdzie to inwestycja finansowa — NIE jest zaliczany do I ani do PKB!',
              },
            ],
          },
        ],
        graph: {
          type: 'gdp-chart',
          preset: 'gdp-components',
          title: 'Struktura wydatkowa PKB: C + I + G + NX',
          caption:
            'Przełącz scenariusze, aby zobaczyć udział konsumpcji (C), inwestycji (I), wydatków rządowych (G) oraz wpływ dodatniego i ujemnego eksportu netto (NX) na łączny PKB.',
          interactive: true,
        },
        quickCheck: {
          id: 'qc-macro-3',
          question: 'Rodzina Kowalskich kupiła w tym roku od dewelopera nowo wybudowane mieszkanie za 650 tys. zł. W metodzie wydatkowej PKB ta transakcja powiększy:',
          options: [
            'Konsumpcję gospodarstw domowych (C)',
            'Inwestycje brutto (I)',
            'Wydatki rządowe (G)',
            'Nie zostanie wliczona do PKB',
          ],
          correctIndex: 1,
          explanation:
            'Zakup nowych domów i mieszkań przez gospodarstwa domowe jest jedynym wyjątkiem w wydatkach gospodarstw domowych zaliczanym do inwestycji (I), a nie do konsumpcji (C).',
        },
      },
      {
        id: 'ceny-rynkowe-i-lancuch-dochodu-narodowego',
        title: 'Ceny rynkowe vs czynników produkcji oraz łańcuch PKB → PNB → PNN → DO → RDO',
        summary: 'Jak przechodzić między wszystkimi kategoriami rachunku dochodu narodowego — wraz z rozwiązanym zadaniem ze slajdu 28 (slajdy 23–28).',
        paragraphs: [
          'Ceny płacone w sklepach przez konsumentów (ceny rynkowe) są powiększone o podatki pośrednie (VAT, akcyzę — Te) i pomniejszone o dotacje/subsydia państwa dla producentów (Su). Aby uzyskać wynagrodzenie samych czynników produkcji (ceny czynników produkcji — ccp), musimy od PKB w cenach rynkowych odjąć podatki pośrednie i dodać subsydia.',
          'Drugie kluczowe rozróżnienie dotyczy kryterium terytorialnego i własnościowego: PKB obejmuje wszystko, co wytworzono na terenie Polski (również przez kapitał zagraniczny), podczas gdy Produkt Narodowy Brutto (PNB) obejmuje produkcję wytworzoną przez polskich obywateli i polskie firmy (także za granicą). Różnicę stanowią dochody netto z tytułu własności za granicą (Dw).',
          'W trakcie produkcji maszyny i budynki zużywają się — ekonomiczną miarą tego zużycia jest amortyzacja (Am). Odjęcie amortyzacji od inwestycji brutto daje inwestycje netto (tylko one powiększają zasób kapitału), a odjęcie amortyzacji od PNB daje Produkt Narodowy Netto (PNN). PNN w cenach czynników produkcji nazywa się Dochodem Narodowym (DN lub Y).',
        ],
        formulas: [
          {
            title: 'Przejście z cen rynkowych (cr) na ceny czynników produkcji (ccp)',
            latex: '\\text{PKB}_{\\text{ccp}} = \\text{PKB}_{\\text{cr}} - T_e + S_u',
            plainReading: 'Od PKB w cenach rynkowych odejmujemy podatki pośrednie (np. VAT, akcyzę) i dodajemy subsydia (dotacje).',
            symbols: [
              { symbol: '\\text{PKB}_{\\text{cr}}', meaning: 'PKB w cenach rynkowych (z metody wydatkowej)' },
              { symbol: 'T_e', meaning: 'podatki pośrednie (nakładane na dobra i usługi)' },
              { symbol: 'S_u', meaning: 'subsydia (dotacje państwa do produkcji)' },
            ],
          },
          {
            title: 'Pełny łańcuch: PKB → PNB → PNN (DN) → DO → RDO (Slajdy 24–27)',
            latex: '\\begin{aligned} \\text{PNB} &= \\text{PKB} + D_w \\\\ \\text{PNN} &= \\text{PNB} - Am \\qquad (\\text{PNN}_{\\text{ccp}} = DN = Y) \\\\ DO &= PNN - \\text{CIT} - \\text{zyski niepodzielone} \\\\ RDO &= DO - \\text{PIT} + \\text{płatności transferowe} = C + S \\end{aligned}',
            plainReading: 'Dodając dochody netto z zagranicy otrzymujemy PNB; odejmując amortyzację — PNN (DN); odejmując CIT i zyski zatrzymane firm — dochody osobiste DO; odejmując PIT i dodając transfery — rozporządzalne dochody osobiste RDO.',
            symbols: [
              { symbol: 'D_w', meaning: 'dochody netto z tytułu własności za granicą (napływ − odpływ)' },
              { symbol: 'Am', meaning: 'amortyzacja (zużycie kapitału trwałego)' },
              { symbol: 'DO', meaning: 'dochody osobiste' },
              { symbol: 'RDO', meaning: 'rozporządzalne dochody osobiste („na rękę”, dzielone na C + S)' },
            ],
            note: 'Uwaga konwencyjna: w części podręczników transfery dolicza się już na etapie DO, natomiast na slajdzie 27 wykładu dolicza się je przy RDO — w obu konwencjach ostateczna kwota RDO jest identyczna!',
          },
        ],
        table: {
          caption: 'Zadanie z wykładu (Slajd 28) — rozwiązanie krok po kroku (dane w mld j.p.: C=300, I=182, G=95, Su=10, Te=65, Dw=12, Ex=90, Im=120, Am=50)',
          headers: ['Krok i kategoria', 'Wzór', 'Obliczenia', 'Wynik (mld j.p.)'],
          rows: [
            ['1. Eksport netto (NX)', 'Ex − Im', '90 − 120', '−30'],
            ['2. PKB w cenach rynkowych (PKB_cr)', 'C + I + G + NX', '300 + 182 + 95 + (−30)', '547'],
            ['3. PKB w cenach czynników produkcji (PKB_ccp)', 'PKB_cr − Te + Su', '547 − 65 + 10', '492'],
            ['4. PNB w cenach rynkowych (PNB_cr)', 'PKB_cr + Dw', '547 + 12', '559'],
            ['5. PNB w cenach czynników produkcji (PNB_ccp)', 'PKB_ccp + Dw (lub PNB_cr − Te + Su)', '492 + 12 (lub 559 − 65 + 10)', '504'],
            ['6. PNN w cenach czynników produkcji (PNN_ccp = DN)', 'PNB_ccp − Am', '504 − 50', '454'],
          ],
          highlightFirstColumn: true,
        },
        quickCheck: {
          id: 'qc-macro-4',
          question: 'Jeśli PKB w cenach rynkowych wynosi 547 mld, podatki pośrednie Te = 65 mld, a subsydia Su = 10 mld, to PKB w cenach czynników produkcji (PKB_ccp) wynosi:',
          options: ['622 mld', '602 mld', '492 mld', '472 mld'],
          correctIndex: 2,
          explanation:
            'Korzystamy ze wzoru PKB_ccp = PKB_cr − Te + Su = 547 − 65 + 10 = 492 mld. Podatki pośrednie zawyżają cenę rynkową ponad koszt czynników, więc je odejmujemy, a subsydia dodajemy.',
        },
      },
    ],
  },
  {
    slug: 'pkb-realny-deflator-i-wskazniki',
    track: 'macro',
    order: 7,
    title: 'PKB nominalny vs realny, deflator, miary dobrobytu i równowaga AD = Y',
    shortTitle: 'PKB realny, wskaźniki i AD=Y',
    subtitle:
      'Ceny bieżące vs stałe, deflator PKB, wady PKB i dane Polski (UE/MFW), mierniki MEW/NEW, PPP, HDI, HPI, krzyż keynesowski 45° z mnożnikiem oraz model wzrostu Solowa–Swana.',
    sourceLecture: 'Wykład 4: Produkt Krajowy Brutto (wykład nt pkb.pptx, slajdy 7–9 oraz 29–90)',
    estimatedMinutes: 35,
    examWeight: 'kluczowa',
    learningObjectives: [
      'Rozróżnić PKB nominalny (ceny bieżące) i PKB realny (ceny stałe roku bazowego) oraz obliczać deflator PKB i przeprowadzać deflowanie.',
      'Wymienić kluczowe wady PKB jako miary dobrobytu oraz znać główne wskaźniki Polski na tle UE (PPS, AIC, HDI).',
      'Porównać alternatywne miary dobrobytu: MEW/NEW, PPP, HDI (w tym zmianę metodologii z 2010 r.!), IHDI oraz HPI.',
      'Wyjaśnić różnicę między ujęciem neoklasycznym a keynesistowskim, zinterpretować wykres 45° (AD = Y), obliczyć dochód równowagi z mnożnikiem oraz wskazać źródła wzrostu w modelu Solowa–Swana.',
    ],
    keyTakeaways: [
      'PKB nominalny rośnie zarówno od większej produkcji, jak i od inflacji; realny wzrost gospodarczy mierzymy wyłącznie przez PKB realny (w cenach stałych roku bazowego). W roku bazowym Deflator PKB zawsze wynosi 100.',
      'PKB pomija szarą strefę i pracę nieodpłatną w domu, czas wolny, negatywne efekty zewnętrzne (zanieczyszczenia) oraz nierówności dochodowe — dlatego uzupełniamy go o MEW/NEW, PPP, HDI/IHDI i HPI.',
      'W metodologii HDI po 2010 r. zastąpiono PKB przez DNB (GNI) per capita wg PPP, analfabetyzm przez średnią i oczekiwaną liczbę lat edukacji, a średnią arytmetyczną — średnią geometryczną.',
      'W krzyżu keynesowskim (AD = Y): gdy Y > AD, rosną nieplanowane zapasy i firmy tną produkcję; gdy Y < AD, zapasy spadają i firmy zwiększają produkcję. Mnożnik gospodarki otwartej: m = 1 / [1 − ksk(1 − t) + ksi].',
    ],
    sections: [
      {
        id: 'pkb-nominalny-realny-deflator',
        title: 'PKB nominalny vs PKB realny, deflowanie i deflator PKB',
        summary: 'Jak oddzielić faktyczny wzrost produkcji od inflacji cen — wraz z pełnym rozwiązaniem zadania ze slajdu 9 (slajdy 7–9).',
        paragraphs: [
          'Porównywanie PKB wyrażonego wyłącznie w wartościach nominalnych (w cenach bieżących z danego roku) prowadzi do błędnych wniosków: nominalny PKB może wzrosnąć o 10% nawet wtedy, gdy gospodarka nie wyprodukowała ani jednej dodatkowej sztuki towaru, jeśli tylko ceny wzrosły o 10% („produkuje się drożej, a nie więcej”).',
          'Aby zmierzyć rzeczywisty, fizyczny wzrost produkcji, obliczamy PKB realny — wyceniając produkcję każdego roku według cen stałych z jednego, wybranego roku bazowego. Operację przeliczania wartości nominalnej na realną za pomocą indeksu cen nazywamy deflowaniem, a wskaźnik ogólnego poziomu cen wszystkich dóbr wytworzonych w gospodarce — deflatorem PKB.',
        ],
        formulas: [
          {
            title: 'PKB nominalny, PKB realny, deflator PKB i deflowanie (Slajd 8)',
            latex: '\\text{PKB}_{\\text{nom}} = \\sum P_t Q_t, \\qquad \\text{PKB}_{\\text{real}} = \\sum P_0 Q_t',
            plainReading: 'PKB nominalny mnoży ilości bieżące przez ceny bieżące; PKB realny mnoży ilości bieżące przez stałe ceny z roku bazowego.',
            symbols: [
              { symbol: 'P_t, Q_t', meaning: 'ceny i ilości w roku badanym t' },
              { symbol: 'P_0', meaning: 'stałe ceny z wybranego roku bazowego' },
            ],
          },
          {
            title: 'Deflator PKB oraz deflowanie',
            latex: '\\text{Deflator PKB} = \\frac{\\text{PKB}_{\\text{nominalny}}}{\\text{PKB}_{\\text{realny}}} \\cdot 100 \\qquad \\Longleftrightarrow \\qquad \\text{PKB}_{\\text{realny}} = \\frac{\\text{PKB}_{\\text{nominalny}}}{\\text{Deflator PKB}} \\cdot 100',
            plainReading: 'Deflator to iloraz PKB nominalnego i realnego pomnożony przez 100; odwrotnie, dzieląc PKB nominalny przez deflator (×100), otrzymujemy PKB realny.',
            symbols: [
              { symbol: '\\text{Deflator PKB}', meaning: 'indeks ogólnego poziomu cen produkcji krajowej (w roku bazowym = 100)' },
            ],
          },
        ],
        callouts: [
          {
            variant: 'tip',
            title: 'Złota reguła roku bazowego i różnica między Deflatorem PKB a CPI',
            content:
              'W roku bazowym ceny bieżące są równe cenom stałym, więc PKB nominalny = PKB realny, a Deflator PKB ZAWSZE wynosi dokładnie 100. Pamiętaj też: Deflator PKB obejmuje WSZYSTKIE dobra finalne wytworzone w kraju (w tym maszyny i eksport, ale BEZ importu), natomiast wskaźnik CPI obejmuje koszyk typowego konsumenta (wraz z dobrami importowanymi).',
          },
        ],
        table: {
          caption: 'Zadanie z wykładu (Slajd 9) — rok bazowy 1990 (mld zł)',
          headers: [
            'Rok',
            'PKB realny (ceny 1990)',
            'Wzrost realny',
            'PKB nominalny (ceny bieżące)',
            'Wzrost nominalny',
            'Deflator PKB',
          ],
          rows: [
            ['1990 (bazowy)', '150', '—', '150', '—', '100,00'],
            ['1992', '155', '+3,33% (vs 1990)', '160', '+6,67% (vs 1990)', '103,23'],
            ['1995', '162', '+4,52% (vs 1992) / +8,00% (vs 1990)', '175', '+9,38% (vs 1992) / +16,67% (vs 1990)', '108,02'],
          ],
          highlightFirstColumn: true,
        },
        graph: {
          type: 'gdp-chart',
          preset: 'nominal-vs-real',
          title: 'Interaktywne porównanie PKB nominalnego, realnego i deflatora',
          caption:
            'W zadaniu ze slajdu 9 nominalny PKB w latach 1990–1995 wzrósł aż o 16,67%, ale realna produkcja tylko o 8,00% (deflator wzrósł ze 100 do 108,02) — ponad połowę nominalnego wzrostu stanowiła inflacja! Przesuń suwak inflacji powyżej, aby zobaczyć ten sam mechanizm na żywo.',
          interactive: true,
        },
        quickCheck: {
          id: 'qc-macro-5',
          question: 'W 1995 r. PKB nominalny wyniósł 175 mld zł, a PKB realny (w cenach roku bazowego 1990) wyniósł 162 mld zł. Ile wynosi Deflator PKB w 1995 r.?',
          options: ['92,57', '100,00', '108,02', '113,00'],
          correctIndex: 2,
          explanation:
            'Deflator PKB = (PKB_nom / PKB_real) × 100 = (175 / 162) × 100 ≈ 108,02. Oznacza to wzrost ogólnego poziomu cen o 8,02% względem roku bazowego 1990.',
        },
      },
      {
        id: 'ograniczenia-pkb-i-polska-w-danych',
        title: 'Wady PKB jako miary dobrobytu i obraz gospodarki Polski na tle UE',
        summary: 'Dlaczego wysoki PKB na mieszkańca nie zawsze oznacza wysoki dobrostan oraz najważniejsze fakty empiryczne ze slajdów 29–51.',
        paragraphs: [
          'PKB per capita (na jednego mieszkańca) jest świetną miarą aktywności rynkowej, ale niedoskonałą miarą jakości życia i dobrobytu społecznego. Wykład podkreśla trzy główne wady PKB (uzupełnione w literaturze Mankiwa o czwartą — nierówności dochodowe):',
        ],
        bullets: [
          'Pomija produkcję nierejestrowaną — zarówno nielegalną i nieopodatkowaną (szarą strefę), jak i legalną, niezwykle wartościową pracę nieodpłatną wykonywaną samodzielnie w domu (opieka nad dziećmi, gotowanie, wolontariat).',
          'Nie uwzględnia wartości czasu wolnego (wypoczynku) — społeczeństwo pracujące po 60 godzin tygodniowo może wytwarzać wyższy PKB, lecz cieszyć się niższą jakością życia niż społeczeństwo pracujące 38 godzin.',
          'Nie uwzględnia negatywnych efektów zewnętrznych (zanieczyszczenia powietrza i wód, hałasu, wyczerpywania zasobów) — a paradoksalnie wydatki na usuwanie skutków katastrof ekologicznych, wypadków czy leczenie chorób wywołanych smogiem PODNOSZĄ PKB!',
          'Nie informuje o rozkładzie dochodów (nierównościach społecznych) — taka sama średnia na mieszkańca może ukrywać skrajne rozwarstwienie.',
        ],
        table: {
          caption: 'Polska w danych empirycznych z wykładu (Slajdy 30–51: GUS, Eurostat, PIE, KE, MFW)',
          headers: ['Obszar / Wskaźnik', 'Kluczowe liczby ze slajdów', 'Wniosek ekonomiczny'],
          rows: [
            ['Awans długookresowy (2000–2018)', 'PKB per capita PPP Polski wzrósł niemal 3× (z 11 654 do 31 939 USD międz.)', 'Najszybsza konwergencja w regionie V4+DE (w 2015–2018 przyrost +5 251 USD)'],
            ['Struktura sektorowa PKB', 'Usługi ~56%, przemysł i budownictwo ~30% (przetwórstwo ~18%), rolnictwo ~2–3%', 'Struktura typowa dla gospodarek rozwiniętych i regionu Europy Środkowej'],
            ['Zróżnicowanie regionalne (GUS/Eurostat)', 'Region warszawski stołeczny: 152% średniej UE i 17,4% PKB Polski; woj. wschodnie ~48–49% UE', 'Silna koncentracja wartości dodanej w metropoliach (śląskie 12,3%, wielkopolskie 9,8%)'],
            ['Szok COVID-19 i odbicie (2020–2024)', '2020: spadek realnego PKB o −2,8% (II kw. −7,9% r/r); III kw. 2022 vs IV kw. 2019: +9,2% (#1 w UE)', 'Po 20 latach nieprzerwanego wzrostu (2000–2019) szybkie wyjście z recesji; prognoza KE 2024: +2,7%'],
            ['PKB per capita PPS (UE = 100)', '2018: 71% średniej UE → 2025 (Eurostat): 81% średniej UE (tyle co Portugalia)', 'Konsekwentne doganianie średniej UE (dla porównania 2025: Czechy 92, Niemcy 115, Luksemburg 239)'],
            ['PKB vs AIC (Eurostat 2020)', 'Irlandia/Luksemburg: PKB >210%/260% UE, ale AIC znacznie bliżej średniej; w Polsce AIC > PKB', 'AIC (rzeczywista konsumpcja indywidualna) lepiej oddaje poziom życia gospodarstw domowych niż PKB zniekształcony przez korporacje'],
            ['Prognoza MFW dla Polski (2026)', 'Nominalny PKB: 1,13 bln USD (#21 na świecie); wzrost 3,4%; 31 186 USD/os. (#57)', 'Polska przekroczyła próg gospodarki bilionowej w USD (populacja ok. 37,84 mln)'],
          ],
          highlightFirstColumn: true,
        },
        quickCheck: {
          id: 'qc-macro-6',
          question: 'Które zjawisko ujawnia wadę PKB jako miernika dobrobytu, ponieważ PODNOSI PKB mimo obniżenia faktycznej jakości życia?',
          options: [
            'Opieka rodzica nad własnym dzieckiem w domu',
            'Zwiększenie liczby dni urlopowych przy zachowaniu dotychczasowej produkcji',
            'Kosztowne usuwanie skutków wycieku toksycznych odpadów do rzeki',
            'Sąsiedzka nieodpłatna pomoc przy remoncie mieszkania',
          ],
          correctIndex: 2,
          explanation:
            'Wydatki rynkowe na usuwanie szkód ekologicznych, leczenie chorób czy naprawy po katastrofach są rejestrowane jako produkcja usług i podnoszą PKB, choć faktycznie tylko kompensują stratę dobrobytu.',
        },
      },
      {
        id: 'alternatywne-mierniki-dobrobytu',
        title: 'Alternatywne mierniki rozwoju i dobrobytu: MEW/NEW, PPP, HDI i HPI',
        summary: 'Jak ekonomiści i ONZ korygują słabości PKB — w tym kluczowa zmiana metodologii HDI z 2010 r. (slajdy 52–73).',
        paragraphs: [
          'W odpowiedzi na ograniczenia PKB stworzono mierniki korygujące dochód narodowy albo łączące go ze wskaźnikami społecznymi i ekologicznymi. Na kolokwium musisz kojarzyć cztery główne podejścia z wykładu: MEW/NEW, PPP, HDI (wraz z IHDI) oraz HPI.',
        ],
        bullets: [
          'MEW / NEW (Dobrobyt Ekonomiczny Netto, pol. DEN — Slajd 52): skonstruowany przez W.D. Nordhausa i J. Tobina (1972) jako MEW (Measure of Economic Welfare) i spopularyzowany przez P.A. Samuelsona jako NEW (Net Economic Welfare). Koryguje PKB/PNB w górę (+) o wartość czasu wolnego i pracy nieodpłatnej w gospodarstwach domowych oraz w dół (−) o koszty zanieczyszczenia środowiska, hałasu i uciążliwości urbanizacji.',
          'PPP (Parytet Siły Nabywczej — Purchasing Power Parity, Slajdy 53–57): przelicza PKB na mieszkańca nie po bieżącym kursie rynkowym waluty, lecz po kursie uwzględniającym różnice w cenach i kosztach utrzymania między krajami (w tzw. dolarach międzynarodowych). Dzięki temu można rzetelnie porównać realny koszyk dóbr możliwy do kupienia w Polsce i np. w Szwajcarii.',
          'HDI (Wskaźnik Rozwoju Społecznego — Human Development Index, Slajdy 58–70): opracowany w 1990 r. przez Mahbuba ul Haqa i Amartyę Sena (noblistę), stosowany przez ONZ (UNDP). Przyjmuje wartości od 0 do 1 i ocenia rozwój na trzech płaszczyznach: „długie i zdrowe życie”, „wiedza” oraz „dostatni standard życia”. Wersja IHDI koryguje HDI o nierówności społeczne.',
          'HPI (Indeks Szczęśliwej Planety — Happy Planet Index, Slajdy 71–73): opracowany w 2006 r. przez NEF (New Economics Foundation). Mierzy efektywność ekologiczną zamiany zasobów planety w długie i szczęśliwe życie.',
        ],
        table: {
          caption: 'Kluczowa zmiana metodologii HDI w 2010 r. (Slajdy 59–60 — częste pytanie na kolokwium!)',
          headers: ['Wymiar HDI', 'Metodologia DO 2010 r. (Slajd 59)', 'Metodologia PO 2010 r. (Slajd 60)'],
          rows: [
            ['1. Długie i zdrowe życie', 'Przewidywana długość życia', 'Oczekiwana długość życia w chwili urodzenia'],
            ['2. Wiedza (edukacja)', 'Poziom analfabetyzmu + wskaźnik skolaryzacji', 'Średnia liczba lat edukacji dorosłych (25+) + oczekiwana liczba lat edukacji dzieci rozpoczynających naukę'],
            ['3. Dostatni standard życia', 'PKB per capita wg PPP', 'Dochód narodowy brutto (DNB / GNI) per capita w USD wg PPP'],
            ['Sposób agregacji 3 indeksów', 'Średnia arytmetyczna', 'Średnia geometryczna (słaby wynik w jednym wymiarze trudniej skompensować innym!)'],
          ],
          highlightFirstColumn: true,
        },
        callouts: [
          {
            variant: 'example',
            title: 'Pozycja Polski i liderzy światowi w rankingu HDI (Slajdy 61–70)',
            content:
              'Polska należy do grupy krajów bardzo wysoko rozwiniętych (HDI ≥ 0,800): w 2018 r. zajmowała 32. miejsce na świecie (0,872), w 2021 r. osiągnęła 0,876, a w zestawieniu UE 2025 (slajd 70) już 0,906 (liderzy UE: Dania 0,962, Niemcy 0,959, Szwecja 0,959; w Polsce najwyższy poziom ma woj. mazowieckie ≥ 0,900). Globalnymi liderami w 2021 r. były Szwajcaria (0,962), Norwegia (0,961) i Islandia (0,959), natomiast dół rankingu stanowią kraje Afryki Subsaharyjskiej (np. Sudan Południowy 0,385). W latach 2020–2021 globalny HDI spadł po raz pierwszy dwa lata z rzędu z powodu COVID-19.',
          },
        ],
        formulas: [
          {
            title: 'Uproszczony wzór Indeksu Szczęśliwej Planety (HPI — Slajdy 71, 73)',
            latex: '\\text{HPI} = \\frac{\\text{odczuwalny dobrostan (zadowolenie z życia)} \\times \\text{oczekiwana długość życia}}{\\text{ślad ekologiczny}}',
            plainReading: 'Iloczyn odczuwanego dobrostanu i oczekiwanej długości życia podzielony przez ślad ekologiczny kraju.',
            symbols: [
              { symbol: '\\text{ślad ekologiczny}', meaning: 'obciążenie środowiska naturalnego przez konsumpcję i produkcję — im mniejszy, tym wyższy HPI' },
            ],
          },
        ],
        quickCheck: {
          id: 'qc-macro-7',
          question: 'Co zmieniło się w metodologii obliczania wskaźnika HDI po 2010 roku?',
          options: [
            'Zastąpiono dochód wskaźnikiem śladu ekologicznego',
            'Wprowadzono DNB (GNI) per capita wg PPP zamiast PKB, lata edukacji zamiast analfabetyzmu oraz średnią geometryczną',
            'Zrezygnowano z wymiaru zdrowia na rzecz stopy bezrobocia',
            'Zmieniono skalę z 0–1 na skalę 0–1000',
          ],
          correctIndex: 1,
          explanation:
            'Od 2010 r. w HDI używa się DNB (GNI) per capita wg PPP zamiast PKB, średniej i oczekiwanej liczby lat edukacji zamiast analfabetyzmu/skolaryzacji oraz średniej geometrycznej zamiast arytmetycznej.',
        },
      },
      {
        id: 'rownowaga-makro-ad-y-mnoznik-wzrost',
        title: 'Determinanty dochodu narodowego (AD = Y), mnożnik i wzrost długookresowy',
        summary: 'Produkcja potencjalna vs faktyczna, spór neoklasyków z keynesistami, wykres 45°, zadanie mnożnikowe (Slajd 87) i model Solowa–Swana (slajdy 74–90).',
        paragraphs: [
          'Produkcja potencjalna (Y*) to maksymalna wielkość produkcji możliwa do wytworzenia przy pełnym, racjonalnym wykorzystaniu wszystkich zasobów (pracy, kapitału, ziemi) — rośnie ona stopniowo wraz z rozwojem gospodarczym. Produkcja faktyczna (Y) to produkcja rzeczywiście wytworzona, która w krótkim okresie bywa niższa od potencjalnej (Y < Y*), gdy brakuje popytu (powstaje bezrobocie i niewykorzystane moce wytwórcze).',
          'Agregatowy popyt (AD / AP_p) to łączna ilość dóbr i usług, jaką wszyscy nabywcy chcą kupić w gospodarce — maleje ze wzrostem ogólnego poziomu cen i rośnie ze wzrostem dochodów. Agregatowa podaż (AS) to łączna produkcja oferowana przez producentów — rośnie wraz z zasobami, efektywnością i poziomem cen, a maleje przy wzroście kosztów produkcji.',
        ],
        table: {
          caption: 'Dwa główne ujęcia determinacji dochodu narodowego (Slajd 81)',
          headers: ['Kryterium', 'Ujęcie neoklasyczne (podażowe)', 'Ujęcie keynesistowskie (popytowe)'],
          rows: [
            ['Główny czynnik decydujący o Y', 'Podaż — zasoby czynników produkcji i efektywność ich wykorzystania', 'Popyt — poziom agregatowego popytu (AD / AP_p)'],
            ['Założenia i mechanizm', 'Elastyczne ceny i płace; gospodarka samoczynnie dąży do pełnego zatrudnienia (Y = Y*)', 'Sztywne ceny i płace w krótkim okresie; możliwe trwałe niepełne wykorzystanie zasobów'],
            ['Rola polityki państwa', 'Ograniczona — wzmacnianie strony podażowej, deregulacja, stabilność', 'Aktywna polityka fiskalna/popytowa w recesji w celu domknięcia luki popytowej'],
          ],
          highlightFirstColumn: true,
        },
        callouts: [
          {
            variant: 'law',
            title: 'Mechanizm równowagi makroekonomicznej na wykresie 45° Keynesa (Slajdy 82–86)',
            content:
              'Równowaga makroekonomiczna ustala się w punkcie przecięcia funkcji planowanych wydatków AD z prostą nachyloną pod kątem 45° (na której zawsze zachodzi AD = Y):',
            points: [
              'Gdy Y > AD (nadwyżka produkcji nad wydatkami): powstaje nieplanowany WZROST zapasów w magazynach → przedsiębiorstwa ograniczają produkcję, aż dochód spadnie do równowagi Ye.',
              'Gdy Y < AD (niedobór produkcji wobec wydatków): następuje nieplanowany SPADEK zapasów → przedsiębiorstwa zwiększają produkcję, aż dochód wzrośnie do równowagi Ye.',
            ],
          },
        ],
        subsections: [
          {
            id: 'mnoznik-gospodarka-otwarta',
            title: 'Model gospodarki otwartej i mnożnik — zadanie z wykładu (Slajd 87)',
            paragraphs: [
              'W modelu keynesowskim w gospodarce otwartej z podatkiem dochodowym część każdej dodatkowej złotówki dochodu odpływa na podatki (stopa t), część jest oszczędzana (1 − ksk), a część wydawana na import (krańcowa skłonność do importu ksi). Mimo tych wycieków wzrost dowolnego wydatku autonomicznego (np. eksportu Xa, inwestycji I czy wydatków rządowych G) wywołuje wielokrotny (mnożnikowy) przyrost dochodu narodowego Y.',
            ],
            formulas: [
              {
                title: 'Równanie równowagi i mnożnik w gospodarce otwartej z podatkiem (Slajd 87)',
                latex: 'Y = C_a + ksk(Y - tY) + I + G + X_a - ksi \\cdot Y',
                plainReading: 'Dochód narodowy równa się sumie wydatków autonomicznych oraz konsumpcji zależnej od dochodu po opodatkowaniu minus import zależny od dochodu.',
                symbols: [
                  { symbol: 'C_a, X_a', meaning: 'konsumpcja autonomiczna oraz autonomiczny eksport' },
                  { symbol: 'ksk\\ (MPC)', meaning: 'krańcowa skłonność do konsumpcji' },
                  { symbol: 't', meaning: 'stopa podatku dochodowego' },
                  { symbol: 'ksi\\ (MPI)', meaning: 'krańcowa skłonność do importu' },
                ],
              },
              {
                title: 'Wzór na dochód w równowadze Ye oraz mnożnik m',
                latex: 'Y_e = \\frac{C_a + I + G + X_a}{1 - ksk(1 - t) + ksi}, \\qquad m = \\frac{1}{1 - ksk(1 - t) + ksi}, \\qquad \\Delta Y = m \\cdot \\Delta A',
                plainReading: 'Mnożnik to odwrotność łącznej stopy odpływów z obiegu (oszczędności, podatków i importu); zmiana dochodu to mnożnik razy zmiana wydatków autonomicznych.',
              },
            ],
            callouts: [
              {
                variant: 'example',
                title: 'Pełne rozwiązanie zadania ze Slajdu 87 (C_a=100, I=100, G=100, X_a=60, ksk=0,8, ksi=0,2, t=0,25)',
                content:
                  'Krok 1 (Dochód w równowadze Ye): Y = 100 + 0,8(Y − 0,25Y) + 100 + 100 + 60 − 0,2Y = 360 + 0,6Y − 0,2Y = 360 + 0,4Y ⇒ 0,6Y = 360 ⇒ Ye = 600. Krok 2 (Wzrost eksportu Xa z 60 do 84, czyli ΔXa = +24): Mnożnik m = 1 / [1 − 0,8(1 − 0,25) + 0,2] = 1 / 0,6 = 5/3 ≈ 1,67. Przyrost dochodu: ΔY = (5/3) × 24 = +40. Nowy dochód narodowy: Y_nowe = 600 + 40 = 640 (sprawdzenie: 384 / 0,6 = 640 ✓).',
              },
            ],
          },
          {
            id: 'wzrost-dlugookresowy-solow',
            title: 'Produkcja i wzrost gospodarczy w długim okresie — model Solowa–Swana (Slajdy 88–90)',
            paragraphs: [
              'Ogromne różnice zamożności między państwami wynikają z różnic w długookresowym tempie wzrostu realnego PKB na mieszkańca. Klasyczny model wzrostu Solowa–Swana (R.M. Solow i T. Swan, 1956) wskazuje, że długookresowy wzrost zależy od trzech bazowych czynników (wraz z postępem technicznym): kapitału ludzkiego (wiedzy, kwalifikacji i doświadczenia pracowników), kapitału rzeczowego (maszyn, narzędzi, infrastruktury) oraz liczebności zasobu pracy (populacji).',
              'Współczesne teorie wzrostu rozszerzają ten katalog o czynniki instytucjonalne i technologiczne, które tłumaczą, dlaczego niektóre kraje rozwijają się szybciej od innych mimo podobnych zasobów naturalnych:',
            ],
            bullets: [
              'Wiedza technologiczna — innowacje, badania i rozwój (B+R), dyfuzja najlepszych metod produkcji.',
              'Stabilność makroekonomiczna — przewidywalna, niska inflacja i zdrowe finanse publiczne.',
              'Polityka państwa — otwartość handlowa, wspieranie edukacji i innowacyjności.',
              'Jakość instytucji publicznych — praworządność, skuteczna ochrona praw własności, ład polityczny i dobry klimat inwestycyjny.',
              'Czynniki geograficzne i geopolityczne — zasoby naturalne, położenie, brak wojen i destabilizacji.',
            ],
          },
        ],
        quickCheck: {
          id: 'qc-macro-8',
          question: 'Co dzieje się w modelu krzyża keynesowskiego (AD = Y), gdy bieżąca produkcja Y jest WYŻSZA od planowanych wydatków AD (Y > AD)?',
          options: [
            'Następuje nieplanowany spadek zapasów i firmy zwiększają produkcję',
            'Następuje nieplanowany wzrost zapasów i firmy ograniczają produkcję aż do punktu równowagi Ye',
            'Gospodarka znajduje się już w równowadze długookresowej',
            'Eksport netto automatycznie rośnie do poziomu równego Y',
          ],
          correctIndex: 1,
          explanation:
            'Gdy firmy wytwarzają więcej, niż nabywcy planują kupić (Y > AD), niesprzedane towary odkładają się jako nieplanowany przyrost zapasów. To sygnał dla przedsiębiorstw, by zmniejszyć produkcję w kierunku Ye.',
        },
      },
    ],
  },
];
