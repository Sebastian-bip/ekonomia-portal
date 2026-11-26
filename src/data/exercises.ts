import type { LectureExercise } from '@/types/economics';

export const lectureExercises: LectureExercise[] = [
  // =========================================================================
  // MODUŁ 1: RYNEK, POPYT, PODAŻ I RÓWNOWAGA (Zdjęcia 1, 2, 3)
  // =========================================================================
  {
    id: 'ex-roz3a-q20',
    numberLabel: 'Zadanie 1 (Roz_3A • Q20)',
    title: 'Wykres popytu i podaży — cena i ilość równowagi, nadwyżka i niedobór',
    sourceBadge: 'Zdjęcie 1: Roz_3A.docx (III. Test)',
    track: 'micro',
    category: 'popyt-i-podaz',
    difficulty: 'podstawowe',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      '20. Odnieś się do wykresu. Na tym rynku cena równowagi i ilość dobra w równowadze wynoszą odpowiednio: [...] [Rekonstrukcja opcji i pytań pokrewnych z banku zadań Mankiw, Ch. 4, Fig. 4-10: typowe opcje: a. $15 i 400, b. $20 i 600, c. $25 i 500, d. $25 i 800; pytania towarzyszące na tym samym wykresie: stan rynku przy cenie $25, $15 oraz $10 i kierunek dostosowania ceny.]',
    dataTable: {
      caption: 'Pełny odczyt stanów rynku z linii przerywanych wykresu Roz_3A.docx',
      headers: ['Cena (P)', 'Wielkość popytu (Qd)', 'Wielkość podaży (Qs)', 'Stan rynku', 'Wielkość nierównowagi', 'Presja na cenę'],
      rows: [
        ['$10', '800', '200', 'Niedobór (nadwyżka popytu)', '800 − 200 = 600 szt.', 'Cena rośnie (↑)'],
        ['$15', '700', '400', 'Niedobór (nadwyżka popytu)', '700 − 400 = 300 szt.', 'Cena rośnie (↑)'],
        ['$20', '600', '600', 'RÓWNOWAGA RYNKOWA', '0', 'Stabilna'],
        ['$25', '500', '800', 'Nadwyżka (nadwyżka podaży)', '800 − 500 = 300 szt.', 'Cena spada (↓)'],
      ],
      highlightFirstColumn: true,
    },
    intuition:
      'Na wykresie Marshalla oś pionowa to cena (P), a pozioma to ilość (Q). Równowaga leży dokładnie na przecięciu opadającej krzywej popytu D i rosnącej krzywej podaży S — tylko tam plany kupujących i sprzedających są zgodne (Qd = Qs). Powyżej ceny równowagi towar jest drogi, więc zalega na półkach (nadwyżka); poniżej jest tani, więc ustawiają się kolejki (niedobór).',
    formulas: [
      {
        title: 'Równania prostych odczytane z siatki wykresu Roz_3A',
        latex: 'Q_s = 40P - 200, \\qquad Q_d = 1000 - 20P',
        plainReading: 'Podaż rośnie o 200 szt. na każde +5$, a popyt spada o 100 szt. na każde +5$.',
        symbols: [
          { symbol: 'P', meaning: 'cena rynkowa dobra (oś pionowa, $)' },
          { symbol: 'Qd, Qs', meaning: 'wielkość popytu i wielkość podaży (oś pozioma, szt.)' },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Znalezienie punktu przecięcia krzywych D i S',
        explanation:
          'Śledzimy linie przerywane z punktu przecięcia krzywych S i D: w lewo na oś Price odczytujemy $20, a w dół na oś Quantity odczytujemy 600.',
        latex: 'Q_s = Q_d \\implies 40P - 200 = 1000 - 20P \\implies 60P = 1200 \\implies P^* = 20\\$',
        result: 'P* = $20, Q* = 600 szt.',
      },
      {
        stepNumber: 2,
        title: 'Weryfikacja algebraiczna ilości równowagi',
        explanation: 'Podstawiamy P* = 20 do obu równań — oba muszą dać dokładnie tę samą liczbę.',
        latex: 'Q_d(20) = 1000 - 20 \\cdot 20 = 600, \\qquad Q_s(20) = 40 \\cdot 20 - 200 = 600',
        result: 'Qd = Qs = 600 szt. ✓',
      },
      {
        stepNumber: 3,
        title: 'Odczyt nadwyżki i niedoboru przy cenach nierównowagi (pytania towarzyszące)',
        explanation:
          'Przy P = $25 linia pozioma trafia w D przy Q = 500 i w S przy Q = 800 → nadwyżka 300 szt. (presja w dół). Przy P = $15 trafia w S przy 400 i w D przy 700 → niedobór 300 szt. Przy P = $10 trafia w S przy 200 i w D przy 800 → niedobór 600 szt. (presja w górę).',
        latex: '\\text{Nadwyżka}(25\\$) = 800 - 500 = 300, \\qquad \\text{Niedobór}(10\\$) = 800 - 200 = 600',
        result: 'Przy $25: nadwyżka 300; przy $15: niedobór 300; przy $10: niedobór 600.',
      },
    ],
    finalAnswer:
      'Odpowiedź na pyt. 20: cena równowagi P* = $20, ilość równowagi Q* = 600 jednostek (opcja b). Dla cen spoza równowagi: przy $25 nadwyżka 300 szt., przy $15 niedobór 300 szt., przy $10 niedobór 600 szt.',
    graph: {
      type: 'supply-demand',
      preset: 'roz3a-q20',
      title: 'Interaktywny wykres Roz_3A.docx (Q20)',
      caption: 'Przesuwaj suwak ceny testowej na $10, $15, $20 i $25, aby zobaczyć dokładne odcinki niedoboru i nadwyżki.',
      interactive: true,
    },
    examTraps: [
      'Zwróć uwagę na słowo „odpowiednio”: najpierw podaj cenę ($20), potem ilość (600) — nigdy odwrotnie.',
      'Reguła krótszej strony rynku: jeśli cena jest sztywno ustalona na $15 (niedobór), faktycznie sprzeda się tylko 400 szt. (tyle, ile chcą dostarczyć firmy), a nie 700!',
      'Klasyczna podpucha z banku Mankiwa: zdanie „w równowadze cena równowagi równa się ilości równowagi” jest FAŁSZYWE — równe są Qd i Qs, a nie P i Q (mają inne jednostki!).',
    ],
  },

  {
    id: 'ex-cigars-q3',
    numberLabel: 'Zadanie 2 (Mankiw s. 146 • Zad. 3)',
    title: 'Rynek cygar a wzrost akcyzy na papierosy (dobra substytucyjne)',
    sourceBadge: 'Zdjęcie 3: Mankiw & Taylor, Mikroekonomia, s. 146',
    track: 'micro',
    category: 'popyt-i-podaz',
    difficulty: 'podstawowe',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      '3. Weź pod uwagę rynek cygar. a. Czy cygara są dobrem substytucyjnym czy komplementarnym względem papierosów? b. Posługując się krzywymi podaży i popytu, pokaż, co się stanie na rynku cygar, gdy wzrośnie akcyza na papierosy. c. Gdyby rządzący chcieli ograniczyć łączną sprzedaż wyrobów tytoniowych, jakie dodatkowe rozwiązania mogliby wprowadzić oprócz podwyższenia akcyzy na papierosy?',
    intuition:
      'To klasyczny łańcuch między dwoma powiązanymi rynkami. Skoro ludzie palą cygara ZAMIAST papierosów (oba zaspokajają potrzebę nikotynową), są to substytuty. Podatek nałożony wyłącznie na papierosy podbija ich cenę, więc część palaczy ucieka na nieopodatkowany rynek cygar — tam rośnie popyt, choć sama podaż cygar w ogóle się nie przesuwa!',
    steps: [
      {
        stepNumber: 1,
        title: 'Podpunkt a — klasyfikacja relacji dóbr',
        explanation:
          'Cygara i papierosy zaspokajają tę samą potrzebę i są używane wymiennie (jedno zamiast drugiego), nie zaś w parze. Zatem są to dobra substytucyjne.',
        result: 'Cygara są dobrem substytucyjnym względem papierosów.',
      },
      {
        stepNumber: 2,
        title: 'Podpunkt b — krok 1: co dzieje się na rynku papierosów?',
        explanation:
          'Wzrost akcyzy na papierosy podnosi koszt ich sprzedaży → krzywa podaży papierosów przesuwa się w lewo → cena równowagi papierosów rośnie (P_pap ↑).',
        latex: '\\text{Akcyza}_{\\text{pap}} \\uparrow \\implies S_{\\text{pap}} \\leftarrow \\implies P_{\\text{pap}} \\uparrow',
      },
      {
        stepNumber: 3,
        title: 'Podpunkt b — krok 2: skutek na rynku cygar',
        explanation:
          'Ponieważ papierosy (substytut) podrożały, część konsumentów przerzuca się na cygara. Krzywa popytu na cygara przesuwa się w prawo (D1 → D2), podczas gdy krzywa podaży cygar S1 pozostaje nieruchoma (akcyza dotyczyła tylko papierosów!). Następuje ruch wzdłuż S1 do wyższej równowagi.',
        latex: 'P_{\\text{pap}} \\uparrow \\implies D_{\\text{cyg}} \\rightarrow \\implies P^*_{\\text{cyg}} \\uparrow, \\quad Q^*_{\\text{cyg}} \\uparrow',
        result: 'Na rynku cygar rosną zarówno cena równowagi (P* ↑), jak i ilość równowagi (Q* ↑).',
      },
      {
        stepNumber: 4,
        title: 'Podpunkt c — domknięcie polityki antytytoniowej rządu',
        explanation:
          'Aby ograniczyć łączną sprzedaż wyrobów tytoniowych, rząd musi wyeliminować efekt substytucji oraz przesunąć popyt w lewo: (1) podnieść akcyzę na WSZYSTKIE wyroby tytoniowe (cygara, tytoń skręcany, e-papierosy), (2) prowadzić kampanie zdrowotne, ostrzeżenia graficzne i zakaz reklamy (D w lewo), (3) stosować zakazy palenia w miejscach publicznych, limity wieku i programy leczenia uzależnień.',
        result: 'Równoległa akcyza na substytuty + działania pozacenowe ograniczające popyt.',
      },
    ],
    finalAnswer:
      'a) Dobra substytucyjne. b) Wzrost akcyzy podnosi cenę papierosów → krzywa popytu na cygara przesuwa się w prawo (D1 → D2, bez zmiany podaży S) → cena i ilość równowagi cygar rosną. c) Jednoczesna akcyza na wszystkie wyroby tytoniowe, kampanie edukacyjne/ostrzeżenia, zakaz reklamy i palenia w miejscach publicznych.',
    graph: {
      type: 'supply-demand',
      preset: 'cigars-q3',
      title: 'Rynek cygar po wzroście akcyzy na papierosy (Zad. 3b)',
      caption: 'Krzywa popytu D przesuwa się w prawo, a krzywa podaży S pozostaje w miejscu — rosną P* i Q*.',
      interactive: true,
    },
    examTraps: [
      'Najczęstszy błąd: przesunięcie krzywej PODAŻY cygar w lewo! Akcyza wzrosła na papierosy, a nie na cygara — koszty produkcji cygar się nie zmieniły, więc krzywa S cygar NIE rusza się z miejsca.',
      'Na pytaniu otwartym zawsze pokaż krok pośredni: akcyza na papierosy → wzrost ceny papierosów → wzrost popytu na substytut (cygara).',
    ],
  },

  {
    id: 'ex-oranges-q4',
    numberLabel: 'Zadanie 3 (Mankiw s. 146 • Zad. 4)',
    title: 'Rynek pomarańczy — jednoczesne przesunięcie popytu i podaży',
    sourceBadge: 'Zdjęcie 3: Mankiw & Taylor, Mikroekonomia, s. 146',
    track: 'micro',
    category: 'popyt-i-podaz',
    difficulty: 'średnie',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      '4. Przypuśćmy, że według najnowszych badań jedzenie pomarańczy obniża ryzyko zachorowania na cukrzycę, a hiszpańscy plantatorzy zaczęli stosować nowy nawóz, dzięki któremu drzewka pomarańczowe wydają więcej owoców. Przedstaw na wykresie i omów wpływ tych czynników na cenę i ilość równowagi na rynku pomarańczy. Pamiętaj, że względna skala opisywanych zmian może mieć istotny wpływ na ostateczny rezultat.',
    dataTable: {
      caption: 'Trzy możliwe rezultaty dla ceny P* przy jednoczesnym wzroście popytu i podaży',
      headers: ['Wariant skali przesunięć', 'Ilość równowagi (Q*)', 'Cena równowagi (P*)', 'Interpretacja rynkowa'],
      rows: [
        ['Silniejszy wzrost popytu (|ΔD| > |ΔS|)', 'Rośnie (↑)', 'Rośnie (↑)', 'Boom zdrowotny przewyższa dodatkowe zbiory — kupujący podbijają cenę.'],
        ['Silniejszy wzrost podaży (|ΔS| > |ΔD|)', 'Rośnie (↑)', 'Spada (↓)', 'Nowy nawóz zalewa rynek owocami mocniej niż rośnie popyt — cena spada.'],
        ['Przesunięcia równe (|ΔD| = |ΔS|)', 'Rośnie (↑)', 'Bez zmian (=)', 'Dodatkowa podaż dokładnie zaspokaja dodatkowy popyt przy dawnej cenie.'],
      ],
      highlightFirstColumn: true,
    },
    intuition:
      'Gdy naraz ruszają się OBIE krzywe (D i S), rozbij zadanie na dwa osobne zdarzenia i dodaj ich strzałki. Tutaj oba zdarzenia zwiększają ilość (Q ↑ i Q ↑ → pewne Q ↑), ale dla ceny działają w przeciwne strony (popyt pcha cenę w górę, a podaż w dół) — dlatego ostateczny kierunek ceny zależy od tego, który efekt jest silniejszy!',
    steps: [
      {
        stepNumber: 1,
        title: 'Zdarzenie 1 (popytowe): badania o obniżaniu ryzyka cukrzycy',
        explanation:
          'Korzystne odkrycie medyczne zmienia gusty i preferencje konsumentów na korzyść pomarańczy → krzywa popytu przesuwa się w prawo (D1 → D2). Sam ten efekt pcha w górę zarówno P*, jak i Q*.',
        latex: '\\text{Preferencje} \\uparrow \\implies D \\rightarrow \\implies P \\uparrow, \\; Q \\uparrow',
      },
      {
        stepNumber: 2,
        title: 'Zdarzenie 2 (podażowe): nowy wydajny nawóz w Hiszpanii',
        explanation:
          'Wyższe plony z każdego drzewka to postęp technologiczny i niższy koszt jednostkowy → krzywa podaży przesuwa się w prawo (S1 → S2). Sam ten efekt obniża P* i zwiększa Q*.',
        latex: '\\text{Wydajność zbiorów} \\uparrow \\implies S \\rightarrow \\implies P \\downarrow, \\; Q \\uparrow',
      },
      {
        stepNumber: 3,
        title: 'Zsumowanie obu efektów — niejednoznaczność ceny',
        explanation:
          'Dla ilości Q* oba przesunięcia działają zgodnie (↑ oraz ↑), więc ilość równowagi NA PEWNO WZROŚNIE. Dla ceny P* efekty się ścierają (↑ oraz ↓), więc wynik jest niejednoznaczny i zależy od względnej skali przesunięć |ΔD| względem |ΔS|.',
        latex: 'D \\rightarrow \\; \\land \\; S \\rightarrow \\implies Q^* \\uparrow \\text{ (pewne)}, \\quad P^* \\; ? \\text{ (zależy od } |\\Delta D| \\text{ vs } |\\Delta S|\\text{)}',
        result: 'Q* na pewno rośnie; zmiana P* jest niejednoznaczna (rośnie, spada lub bez zmian).',
      },
    ],
    finalAnswer:
      'Ilość równowagi pomarańczy (Q*) na pewno wzrośnie. Wpływ na cenę równowagi (P*) jest niejednoznaczny: cena wzrośnie, jeśli wzrost popytu jest silniejszy niż wzrost podaży; spadnie, jeśli dominuje wzrost podaży; pozostanie bez zmian przy równej skali przesunięć.',
    graph: {
      type: 'supply-demand',
      preset: 'oranges-q4',
      title: 'Jednoczesne przesunięcie D i S na rynku pomarańczy (Zad. 4)',
      caption: 'Przesuwaj suwaki ΔD i ΔS, aby zaobserwować, jak Q* zawsze rośnie, a P* może wzrosnąć lub spaść.',
      interactive: true,
    },
    examTraps: [
      'Śmiertelny błąd na zadaniu otwartym: narysowanie tylko JEDNEGO wykresu, na którym przypadkiem wyszło P2 > P1, i napisanie „cena wzrośnie”. Zawsze wyraźnie zaznacz niejednoznaczność ceny i oba skrajne przypadki!',
      'Ściąga na wszystkie 4 podwójne przesunięcia (złoto na ABCD): D↑S↑ ⇒ Q↑ P?; D↓S↓ ⇒ Q↓ P?; D↑S↓ ⇒ P↑ Q?; D↓S↑ ⇒ P↓ Q?.',
    ],
  },

  {
    id: 'ex-football-q5',
    numberLabel: 'Zadanie 4 (Mankiw s. 146–147 • Zad. 5)',
    title: 'Bilety na mecze klubu piłkarskiego — pionowa podaż, elastyczność i maksymalizacja przychodów',
    sourceBadge: 'Zdjęcia 3 i 2: Mankiw & Taylor, Mikroekonomia, s. 146–147',
    track: 'micro',
    category: 'elastycznosc',
    difficulty: 'średnie',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      '5. Przyjmijmy, że cena biletów na mecze pewnego klubu piłkarskiego jest wypad[kową działania sił rynkowych...] [...] 40 euro. (Zastosuj tę metodę przy obliczaniu [...] w tym przypadku). e. Opierając się na wynikach powyższych obliczeń, jakie posunięcie [zaproponujesz] władzom klubu w celu maksymalizacji przychodów, jeśli na [stadionie obecnie] nie ma kompletu widzów? [Rekonstrukcja z Mankiw & Taylor, Economics — europejska tabela popytu i podaży 10–50 euro przy stałej pojemności stadionu 30 000 miejsc oraz podpunkty a–d: wykres i pionowa podaż, równowaga, przychody TR, elastyczność punktu środkowego dla przedziału 30–40 euro.]',
    dataTable: {
      caption: '[Rekonstrukcja z Mankiw & Taylor] Tabela popytu, podaży i przychodów klubu (pojemność stadionu = 30 000)',
      headers: ['Cena biletu (euro)', 'Wielkość popytu (Qd)', 'Wielkość podaży (Qs)', 'Sprzedane bilety min(Qd, Qs)', 'Przychód całkowity (TR)', 'Sytuacja na stadionie'],
      rows: [
        ['10 €', '50 000', '30 000', '30 000', '300 000 €', 'Komplet + niedobór 20 000'],
        ['20 €', '40 000', '30 000', '30 000', '600 000 €', 'Komplet + niedobór 10 000'],
        ['30 €', '30 000', '30 000', '30 000', '900 000 € (MAX)', 'Równowaga — pełny stadion'],
        ['40 €', '20 000', '30 000', '20 000', '800 000 €', 'Brak kompletu (10 000 pustych)'],
        ['50 €', '10 000', '30 000', '10 000', '500 000 €', 'Brak kompletu (20 000 pustych)'],
      ],
      highlightFirstColumn: true,
    },
    intuition:
      'Stadion ma sztywną liczbę krzesełek (30 000), więc krzywa podaży jest idealnie pionowa (Es = 0). Gdy na stadionie nie ma kompletu widzów, oznacza to, że cena jest za wysoka (powyżej równowagi, np. 40 €), gdzie popyt jest ELASTYCZNY (|E_dp| > 1). A przy elastycznym popycie OBNIŻKA ceny przyciąga procentowo znacznie więcej kibiców, niż wynosi rabat — więc kasa klubu rośnie!',
    formulas: [
      {
        title: 'Związek elastyczności cenowej z przychodem całkowitym (TR = P · Q)',
        latex: '|E_{dp}| > 1 \\; (E_{dp} < -1) \\implies P \\downarrow \\; \\text{zwiększa } TR = P \\cdot Q',
        plainReading: 'Na elastycznym odcinku krzywej popytu obniżka ceny zwiększa łączny przychód ze sprzedaży.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Dlaczego krzywa podaży jest niezwykła (pionowa)? [Rekonstrukcja a]',
        explanation:
          'W każdej cenie klub oferuje dokładnie 30 000 miejsc — krzywa S jest pionowa (podaż doskonale nieelastyczna, Es = 0), ponieważ w krótkim okresie fizyczna pojemność stadionu jest stała.',
        result: 'Pionowa krzywa S przy Q = 30 000 miejsc.',
      },
      {
        stepNumber: 2,
        title: 'Wyznaczenie równowagi rynkowej [Rekonstrukcja b]',
        explanation: 'Szukamy ceny, przy której liczba chętnych kibiców zrównuje się z pojemnością stadionu (Qd = Qs = 30 000).',
        result: 'P* = 30 euro, Q* = 30 000 biletów (TR = 900 000 euro).',
      },
      {
        stepNumber: 3,
        title: 'Elastyczność punktu środkowego między 30 euro a 40 euro [Rekonstrukcja d]',
        explanation:
          'Przy wzroście ceny z 30 € do 40 € popyt spada z 30 000 do 20 000 biletów. Obliczamy metodą punktu środkowego (dla porównania: dla 40 → 50 € elastyczność wynosi E_dp = −3,00, a dla 20 → 30 € wynosi E_dp = −0,71).',
        latex: 'E_{dp} = \\frac{\\frac{20\\,000 - 30\\,000}{(30\\,000 + 20\\,000)/2}}{\\frac{40 - 30}{(30 + 40)/2}} = \\frac{-0{,}40}{2/7} = -\\frac{7}{5} = -1{,}40 \\quad (|E_{dp}| = 1{,}40 > 1)',
        result: 'E_dp = −1,40 (|E_dp| = 1,40 > 1) → popyt ELASTYCZNY!',
      },
      {
        stepNumber: 4,
        title: 'Podpunkt e (widoczny na zdjęciu 2) — rekomendacja dla władz klubu',
        explanation:
          'Brak kompletu widzów oznacza cenę powyżej równowagi (np. 40 €, gdzie sprzedaje się tylko 20 000 biletów i TR = 800 000 €). Ponieważ popyt jest tu elastyczny (|E_dp| = 1,40 > 1), władze powinny OBNIŻYĆ cenę biletów (do 30 €), co zapełni stadion i zwiększy przychód całkowity do maksimum (900 000 €).',
        latex: 'TR(40\\text{ euro}) = 40 \\cdot 20\\,000 = 800\\,000\\text{ euro} \\;\\longrightarrow\\; TR(30\\text{ euro}) = 30 \\cdot 30\\,000 = 900\\,000\\text{ euro}',
        result: 'Obniżyć cenę biletów (z 40 € do 30 €) → przychody rosną o +100 000 €.',
      },
    ],
    finalAnswer:
      'Gdy na stadionie nie ma kompletu widzów (cena powyżej równowagi, popyt elastyczny: E_dp = −1,40, czyli |E_dp| = 1,40 > 1), władze klubu powinny OBNIŻYĆ cenę biletów (w tabeli z 40 € do 30 €), aby zmaksymalizować łączne przychody (wzrost TR z 800 000 € do 900 000 €).',
    graph: {
      type: 'supply-demand',
      preset: 'football-q5',
      title: 'Rynek biletów na mecze klubu piłkarskiego — pionowa podaż (Zad. 5)',
      caption: 'Pionowa krzywa S (30 tys. miejsc) przecina popyt przy 30 €. Powyżej 30 € część trybun pozostaje pusta.',
      interactive: true,
    },
    examTraps: [
      'Błąd zdrowego rozsądku: „żeby zarobić więcej, podnieśmy cenę” — FAŁSZ przy elastycznym popycie! Podwyżka z 40 € na 50 € ścina przychód z 800 tys. € do 500 tys. €.',
      'Pułapka pojemności przy niskich cenach: przy cenie 10 € popyt wynosi 50 000, ale klub nie może sprzedać więcej niż 30 000 miejsc, więc TR = 10 × 30 000 = 300 000 € (nie 500 000 €!).',
    ],
  },

  {
    id: 'ex-chocolate-q6',
    numberLabel: 'Zadanie 5 (Mankiw s. 147 • Zad. 6)',
    title: 'Rynek batonów czekoladowych — wyznaczanie równowagi z równań liniowych',
    sourceBadge: 'Zdjęcie 2: Mankiw & Taylor, Mikroekonomia, s. 147',
    track: 'micro',
    category: 'popyt-i-podaz',
    difficulty: 'podstawowe',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      '6. Dzięki badaniom rynku ustalono, że na rynku batonów czekoladowych popyt można opisać równaniem Qd = 1600 − 300P, a podaż Qs = 1400 + 700P. Oblicz cenę i ilość równowagi dla tego rynku.',
    intuition:
      'Najczystszy schemat algebraiczny na kolokwium: przyrównaj Qd = Qs, przenieś niewiadome P na jedną stronę, liczby na drugą, wylicz P*, a potem podstaw P* do OBU wzorów jako obowiązkowy test kontrolny!',
    formulas: [
      {
        title: 'Warunek równowagi rynkowej',
        latex: 'Q_d(P^*) = Q_s(P^*)',
        plainReading: 'W równowadze wielkość popytu musi być równa wielkości podaży.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Zapisanie warunku równowagi Qd = Qs',
        explanation: 'Przyrównujemy prawe strony funkcji popytu i podaży.',
        latex: '1600 - 300P = 1400 + 700P',
      },
      {
        stepNumber: 2,
        title: 'Rozwiązanie równania względem ceny P*',
        explanation: 'Przenosimy 1400 na lewo (ze zmianą znaku) oraz −300P na prawo (zmienia się w +300P).',
        latex: '1600 - 1400 = 700P + 300P \\implies 200 = 1000P \\implies P^* = \\frac{200}{1000} = 0{,}20',
        result: 'P* = 0,20 j.p.',
      },
      {
        stepNumber: 3,
        title: 'Obliczenie ilości równowagi Q* i podwójna weryfikacja',
        explanation: 'Podstawiamy P* = 0,20 do równania popytu oraz (dla pewności) do równania podaży.',
        latex: 'Q_d(0{,}20) = 1600 - 300 \\cdot 0{,}20 = 1540, \\qquad Q_s(0{,}20) = 1400 + 700 \\cdot 0{,}20 = 1540',
        result: 'Q* = 1540 batonów ✓',
      },
    ],
    finalAnswer: 'Cena równowagi wynosi P* = 0,20 (np. 0,20 euro / 20 centów), a ilość równowagi Q* = 1540 batonów czekoladowych.',
    graph: {
      type: 'supply-demand',
      preset: 'chocolate-q6',
      title: 'Równowaga na rynku batonów czekoladowych (Zad. 6)',
      caption: 'Przecięcie Qd = 1600 − 300P oraz Qs = 1400 + 700P wypada dokładnie w punkcie (1540; 0,20).',
      interactive: true,
    },
    examTraps: [
      'Błąd znaków przy przenoszeniu: pilnuj, by −300P po przeniesieniu na prawo dało 700P + 300P = 1000P (nie 400P!).',
      'Pułapka „odwróconego dzielenia”: gdy widzisz 200 = 1000P, nie dziel większej przez mniejszą (1000/200 = 5), tylko 200/1000 = 0,20!',
    ],
  },

  {
    id: 'ex-riviera-q7',
    numberLabel: 'Zadanie 6 (Mankiw s. 147 • Zad. 7)',
    title: 'Nieruchomości na południowym wybrzeżu Francji vs samochody — elastyczność podaży',
    sourceBadge: 'Zdjęcie 2: Mankiw & Taylor, Mikroekonomia, s. 147',
    track: 'micro',
    category: 'elastycznosc',
    difficulty: 'średnie',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      '7. W wypadku nieruchomości położonych na południowym wybrzeżu Francji podaż jest nieelastyczna, a w wypadku samochodów — elastyczna względem ceny. Załóżmy, że w wyniku wzrostu populacji podwaja się popyt na oba te dobra, czyli wielkość zapotrzebowania przy każdej cenie jest dwa razy wyższa niż dotychczas. a. Co się stanie z ceną równowagi i ilością równowagi na każdym z tych rynków? b. W wypadku którego z tych dóbr nastąpi większa zmiana ceny? [Rekonstrukcja z Mankiw & Taylor, Ch. 5, Problem 11: c. W wypadku którego z tych dóbr nastąpi większa zmiana ilości? d. Co się stanie z łącznymi wydatkami konsumentów na każde z tych dóbr?]',
    dataTable: {
      caption: 'Porównanie reakcji obu rynków na podwojenie popytu (modelowa ilustracja ze startem E1 = (10, 10), TR1 = 100)',
      headers: ['Rynek', 'Elastyczność podaży (Es)', 'Zmiana ceny (ΔP)', 'Zmiana ilości (ΔQ)', 'Łączne wydatki (TR = P·Q)'],
      rows: [
        ['Nieruchomości (południe Francji)', 'Nieelastyczna (stroma S)', 'BARDZO DUŻY wzrost (np. +44%)', 'Niewielki wzrost (np. +11%)', 'Rosną (P↑ i Q↑)'],
        ['Samochody', 'Elastyczna (płaska S)', 'Umiarkowany wzrost (np. +17%)', 'BARDZO DUŻY wzrost (np. +67%)', 'Rosną (P↑ i Q↑)'],
      ],
      highlightFirstColumn: true,
    },
    intuition:
      'Elastyczność podaży decyduje o tym, kto „przyjmie na siebie” uderzenie nagłego wzrostu popytu: CENA czy ILOŚĆ. Nie da się dobudować nowej linii brzegowej Lazurowego Wybrzeża, więc podwojenie popytu wylewa się niemal w całości w ceny nieruchomości. Natomiast fabryki aut mogą odpalić dodatkową zmianę, więc rynek samochodów reaguje głównie skokiem ilości.',
    steps: [
      {
        stepNumber: 1,
        title: 'Podpunkt a — kierunek zmian P* i Q* na obu rynkach',
        explanation:
          'Na obu rynkach krzywa popytu przesuwa się mocno w prawo (podwojenie zapotrzebowania w każdej cenie), przy dodatnio nachylonej krzywej podaży. Dlatego na OBU rynkach rosną zarówno cena równowagi (P* ↑), jak i ilość równowagi (Q* ↑).',
        result: 'Oba rynki: P* rośnie i Q* rośnie (lecz w zupełnie innych proporcjach).',
      },
      {
        stepNumber: 2,
        title: 'Podpunkt b — gdzie nastąpi większa zmiana ceny?',
        explanation:
          'W przypadku nieruchomości na południowym wybrzeżu Francji. Stroma (nieelastyczna) krzywa podaży sprawia, że przy ograniczonym zasobie działek kupujący licytują się o niemal stałą pulę domów, gwałtownie podbijając cenę.',
        result: 'Większa zmiana ceny: nieruchomości na południowym wybrzeżu Francji.',
      },
      {
        stepNumber: 3,
        title: 'Podpunkt c [Rekonstrukcja] — gdzie nastąpi większa zmiana ilości?',
        explanation:
          'W przypadku samochodów. Płaska (elastyczna) krzywa podaży oznacza, że producenci potrafią szybko zwiększyć produkcję już przy stosunkowo niewielkiej podwyżce ceny.',
        result: 'Większa zmiana ilości: samochody.',
      },
      {
        stepNumber: 4,
        title: 'Podpunkt d [Rekonstrukcja] — co dzieje się z łącznymi wydatkami konsumentów?',
        explanation:
          'Łączne wydatki to iloczyn TR = P × Q. Skoro na OBU rynkach jednocześnie wzrosła cena (P2 > P1) i wzrosła ilość (Q2 > Q1), to iloczyn P2·Q2 musi być większy od P1·Q1 na obu rynkach.',
        latex: 'P_2 > P_1 \\; \\land \\; Q_2 > Q_1 \\implies TR_2 = P_2 Q_2 > P_1 Q_1 = TR_1',
        result: 'Łączne wydatki konsumentów rosną na OBU rynkach.',
      },
    ],
    finalAnswer:
      'a) Na obu rynkach rosną zarówno cena, jak i ilość równowagi. b) Większa zmiana ceny: nieruchomości na południowym wybrzeżu Francji (nieelastyczna podaż). c) [Rekonstrukcja] Większa zmiana ilości: samochody (elastyczna podaż). d) [Rekonstrukcja] Łączne wydatki konsumentów rosną na obu rynkach.',
    graph: {
      type: 'elasticity-compare',
      preset: 'riviera-vs-cars',
      title: 'Porównanie podaży nieelastycznej (Riwiera) i elastycznej (samochody)',
      caption: 'Identyczny szok popytowy wywołuje potężny skok ceny po lewej i potężny skok ilości po prawej.',
      interactive: true,
    },
    examTraps: [
      'Nie pisz w punkcie (a), że ilość nieruchomości „nie zmieni się wcale” — w treści podaż jest nieelastyczna, a nie doskonale nieelastyczna, więc ilość lekko wzrośnie.',
      'W punkcie (d) nie myl przesunięcia popytu z ruchem po jednej krzywej popytu! Gdy popyt się PRZESUWA w prawo, rosną i P, i Q — wydatki zawsze rosną niezależnie od elastyczności.',
    ],
  },

  // =========================================================================
  // MODUŁ 2: ELASTYCZNOŚĆ POPYTU (E_08_Elastyczność, Zdjęcia 4 i 5)
  // =========================================================================
  {
    id: 'ex-pairs-e08',
    numberLabel: 'Zadanie 7 (E_08 • Pary dóbr, E < 0)',
    title: 'Porównanie elastyczności cenowej popytu w 4 parach dóbr i determinanty elastyczności',
    sourceBadge: 'Zdjęcie 4: E_08_Elastyczność (Ćw. 7, zakładamy E < 0)',
    track: 'micro',
    category: 'elastycznosc',
    difficulty: 'podstawowe',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      'Dla każdej z podanych niżej par dóbr wskaż to dobro, które według Ciebie odznacza się większą elastycznością cenową popytu. Odpowiedź uzasadnij. a) Obowiązkowe podręczniki czy powieści kryminalne? b) Liczba pobrań utworów Jaya-Z czy liczba pobrań z sieci utworów hip-hopowych ogółem? c) Olej opałowy w ciągu najbliższych 6 miesięcy czy olej opałowy w ciągu najbliższych 5 lat? d) Lemoniada czy woda?',
    dataTable: {
      caption: 'Zestawienie odpowiedzi i 4 kluczowych determinant cenowej elastyczności popytu',
      headers: ['Para dóbr', 'Większa elastyczność (większe |E_dp|)', 'Kluczowa determinanta', 'Zwięzłe uzasadnienie'],
      rows: [
        ['a) Podręczniki vs kryminały', 'Powieści kryminalne', 'Dobro luksusowe vs konieczne + substytuty', 'Podręczniki są obowiązkowe (konieczne); kryminały to rozrywka z wieloma substytutami (inne książki, filmy).'],
        ['b) Jay-Z vs hip-hop ogółem', 'Utwory Jaya-Z', 'Wąska vs szeroka definicja rynku', 'Wąski rynek (jeden artysta) ma mnóstwo bliskich substytutów (inni raperzy); cały gatunek ma ich znacznie mniej.'],
        ['c) Olej opałowy: 6 mies. vs 5 lat', 'Olej opałowy w ciągu 5 lat', 'Horyzont czasowy dostosowań', 'W 6 mies. trudno zmienić ogrzewanie; w 5 lat można wymienić piec na pompę ciepła/gaz lub ocieplić dom.'],
        ['d) Lemoniada vs woda', 'Lemoniada', 'Dobro pierwszej potrzeby vs substytuty', 'Woda jest niezbędna do życia i bez substytutów; lemoniada ma dziesiątki zamienników (soki, cola, herbata).'],
      ],
      highlightFirstColumn: true,
    },
    intuition:
      'Przy każdej parze zadaj proste pytanie testowe: „Gdy cena skoczy o 30%, z którego z tych dóbr łatwiej zrezygnować lub zamienić je na coś innego?”. To dobro, z którego łatwiej zrezygnować, ma WIĘKSZĄ elastyczność cenową popytu (większą wartość bezwzględną |E_dp| — pamiętaj o notatce wykładowcy „zakładamy E < 0”!).',
    formulas: [
      {
        title: 'Konwencja ze zdjęcia 4: zakładamy E < 0 vs moduł |E|',
        latex: 'E_{dp} < 0 \\quad \\text{(np. } -2{,}5 \\text{ jest BARDZIEJ elastyczne niż } -0{,}4\\text{, bo } |-2{,}5| > |-0{,}4|\\text{)}',
        plainReading: 'Choć z prawa popytu zachowujemy znak minus, „większa elastyczność” zawsze oznacza większą wartość bezwzględną (silniejszą reakcję popytu).',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Para a — dobro konieczne vs rozrywka',
        explanation:
          'Student musi kupić obowiązkowe podręczniki, by zdać egzamin (popyt nieelastyczny). Powieści kryminalne można łatwo zastąpić innymi gatunkami lub serialem → powieści kryminalne mają wyższą elastyczność.',
        result: 'a) Powieści kryminalne.',
      },
      {
        stepNumber: 2,
        title: 'Para b — szerokość definicji rynku',
        explanation:
          'Im WĘŻEJ zdefiniowany rynek, tym łatwiej o bliski substytut i tym wyższa elastyczność. Jeśli utwory Jaya-Z zdrożeją, słuchacze łatwo przełączą się na innych artystów hip-hopowych.',
        result: 'b) Liczba pobrań utworów Jaya-Z.',
      },
      {
        stepNumber: 3,
        title: 'Para c — krótki vs długi horyzont czasowy',
        explanation:
          'W horyzoncie 6 miesięcy właściciel domu z piecem olejowym ma związane ręce. W ciągu 5 lat zdąży zmodernizować ogrzewanie lub docieplić budynek, więc popyt jest dużo bardziej elastyczny.',
        result: 'c) Olej opałowy w ciągu najbliższych 5 lat.',
      },
      {
        stepNumber: 4,
        title: 'Para d — dobro pierwszej potrzeby bez substytutów',
        explanation:
          'Woda pitna jest niezbędna do przeżycia (popyt wysoce nieelastyczny). Lemoniada to dobrowolny napój z ogromną liczbą substytutów.',
        result: 'd) Lemoniada.',
      },
    ],
    finalAnswer:
      'Większą elastycznością cenową popytu (większym |E_dp|) cechują się: a) powieści kryminalne, b) pobrania utworów Jaya-Z, c) olej opałowy w ciągu 5 lat, d) lemoniada.',
    graph: {
      type: 'elasticity-compare',
      preset: 'demand-elasticity',
      title: 'Krzywa popytu nieelastycznego vs elastycznego',
      caption: 'Dobra konieczne i krótki okres dają stromą krzywą D (małe |E_dp|); liczne substytuty i długi okres — płaską krzywą D (duże |E_dp|).',
      interactive: true,
    },
    examTraps: [
      'Pułapka notatki „zakładamy E < 0”: jeśli w pytaniu ABCD dobro X ma E = −0,3, a dobro Y ma E = −2,1, to większą elastyczność ma dobro Y (porównujemy moduły |E|!).',
      'Częsta pomyłka przy definicji rynku (para b): WĄSKI rynek = WYSOKA elastyczność (dużo substytutów); SZEROKI rynek = NISKA elastyczność.',
    ],
  },

  {
    id: 'ex-gasoline-excise',
    numberLabel: 'Zadanie 8 (E_08 • Akcyza na benzynę)',
    title: 'Dlaczego państwa nakładają akcyzę na benzynę? (Fiskalizm vs efekty zewnętrzne)',
    sourceBadge: 'Zdjęcie 4: E_08_Elastyczność (Ćw. 8)',
    track: 'micro',
    category: 'elastycznosc',
    difficulty: 'średnie',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      'W wielu państwach benzyna obłożona jest akcyzą. Dlaczego władze wprowadzają akcyzę na benzynę?',
    intuition:
      'Zastanów się, w jakim dziale jesteśmy (Elastyczność!). Dla ministra finansów benzyna to idealna podstawa opodatkowania, bo popyt na paliwo jest wysoce NIEELASTYCZNY — kierowcy muszą dojeżdżać do pracy mimo wyższej ceny, więc wpływy do budżetu są ogromne i pewne, a zbędna strata społeczna (DWL) mała. Do tego dochodzi ważny drugi cel: korekta negatywnych efektów zewnętrznych (spaliny, korki, zużycie dróg).',
    formulas: [
      {
        title: 'Wpływy budżetowe z akcyzy przy nieelastycznym popycie',
        latex: 'T = t \\cdot Q_{\\text{po podatku}}, \\qquad |E_{dp}| < 1 \\implies Q \\text{ spada nieznacznie} \\implies T \\text{ wysokie i stabilne}',
        plainReading: 'Gdy popyt jest nieelastyczny, podniesienie stawki podatku t tylko słabo zmniejsza ilość Q, maksymalizując dochody państwa przy małej stracie DWL.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Powód 1 (kluczowy w dziale Elastyczność): cel fiskalny i niska DWL',
        explanation:
          'Popyt na benzynę (zwłaszcza w krótkim okresie) jest wysoce nieelastyczny (|E_dp| < 1), bo brak szybkich substytutów dojazdów. Podniesienie ceny akcyzą powoduje tylko mały spadek sprzedaży paliwa, co daje państwu wysokie, przewidywalne wpływy budżetowe oraz stosunkowo niewielką zbędną stratę społeczną (DWL).',
        result: 'Wysokie i stabilne dochody budżetowe + niewielka DWL (reguła Ramseya).',
      },
      {
        stepNumber: 2,
        title: 'Rozkład ciężaru podatkowego (tax incidence)',
        explanation:
          'Ponieważ popyt na benzynę jest mniej elastyczny niż podaż, większość ekonomicznego ciężaru akcyzy spoczywa na kupujących (kierowcach) w postaci wyższej ceny na stacji.',
        result: 'Większość ciężaru podatku ponoszą konsumenci (strona mniej elastyczna).',
      },
      {
        stepNumber: 3,
        title: 'Powód 2: korekta negatywnych efektów zewnętrznych (podatek Pigou) i drogi',
        explanation:
          'Spalanie paliw generuje koszty zewnętrzne: emisję spalin i CO2, smog, hałas, korki, wypadki i niszczenie nawierzchni. Akcyza internalizuje te koszty, finansuje infrastrukturę drogową, a w długim okresie (gdy popyt staje się bardziej elastyczny) skłania do oszczędniejszych aut i transportu zbiorowego.',
        result: 'Internalizacja efektów zewnętrznych + finansowanie dróg + bodziec ekologiczny w długim okresie.',
      },
    ],
    finalAnswer:
      'Władze nakładają akcyzę na benzynę z dwóch głównych powodów: (1) fiskalnego — popyt na benzynę jest nieelastyczny, więc podatek przynosi wysokie i stabilne wpływy do budżetu przy relatywnie małej zbędnej stracie społecznej (DWL); (2) korygującego (podatek Pigou) — rekompensuje negatywne efekty zewnętrzne (spaliny, korki, degradacja dróg) i w długim okresie zachęca do oszczędzania paliwa.',
    graph: {
      type: 'elasticity-compare',
      preset: 'tax-incidence',
      title: 'Skutki podatku akcyzowego przy nieelastycznym popycie',
      caption: 'Gdy popyt jest stromy (nieelastyczny), podatek tylko lekko obniża Q, daje duży prostokąt wpływów budżetowych i mały trójkąt DWL.',
      interactive: true,
    },
    examTraps: [
      'Częsty błąd na kolokwium: napisanie wyłącznie „bo spaliny szkodzą środowisku” i pominięcie głównego argumentu z rozdziału o elastyczności (popyt nieelastyczny → stabilne wpływy budżetowe i niska DWL)!',
      'Pamiętaj ogólną regułę przerzucalności podatku: większą część ciężaru podatku ZAWSZE ponosi bardziej NIEELASTYCZNA strona rynku.',
    ],
  },

  {
    id: 'ex-dvd-table',
    numberLabel: 'Zadanie 9 (E_08 • Tabela DVD, E < 0)',
    title: 'Roczny popyt na filmy DVD — elastyczność cenowa i dochodowa metodą punktu środkowego',
    sourceBadge: 'Zdjęcia 4 i 5: E_08_Elastyczność (Ćw. 9, zakładamy E < 0)',
    track: 'micro',
    category: 'elastycznosc',
    difficulty: 'kolokwium',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      'Załóżmy, że Twój roczny popyt na filmy DVD kształtuje się jak w tabeli poniżej [wiersze P = 8, 14, 16 widoczne bezpośrednio na zdjęciach 4–5; wiersze P = 10 (krawędź cyfr na zdj. 4) oraz P = 12 zweryfikowane i zrekonstruowane: Rekonstrukcja z Mankiw & Taylor, Ch. 5, Problem 5]. a) Posługując się metodą punktu środkowego, oblicz elastyczność cenową swojego popytu na filmy DVD przy wzroście ceny z 8 euro do 10 euro, gdy Twój dochód wynosi: (i) 10 000 euro, (ii) 12 000 euro. b) Oblicz elastyczność dochodową swojego popytu na filmy DVD przy wzroście dochodu z 10 000 euro do 12 000 euro, gdy cena wynosi: (i) 12 euro, (ii) 16 euro.',
    dataTable: {
      caption: 'Roczny popyt na filmy DVD (wiersze P = 10 i 12 — [Rekonstrukcja z Mankiw & Taylor])',
      headers: ['Cena (euro)', 'Wielkość zapotrzebowania (dochód = 10 000 €)', 'Wielkość zapotrzebowania (dochód = 12 000 €)', 'Źródło wiersza'],
      rows: [
        ['8', '40', '50', 'Widoczne na zdjęciu 4'],
        ['10', '32', '45', 'Krawędź na zdj. 4 + [Rekonstrukcja Mankiw & Taylor]'],
        ['12', '24', '30', '[Rekonstrukcja Mankiw & Taylor]'],
        ['14', '16', '20', 'Widoczne na zdjęciu 5'],
        ['16', '8', '12', 'Widoczne na zdjęciu 5'],
      ],
      highlightFirstColumn: true,
    },
    intuition:
      'Klucz do bezbłędnego odczytu tabeli: w podpunkcie (a) liczymy elastyczność CENOWĄ, więc trzymamy się JEDNEJ kolumny dochodu i schodzimy w dół z wiersza 8 € do 10 €. W podpunkcie (b) liczymy elastyczność DOCHODOWĄ, więc trzymamy się JEDNEGO wiersza ceny i przechodzimy w prawo z kolumny 10 000 € do 12 000 €.',
    formulas: [
      {
        title: 'Metoda punktu środkowego (elastyczność łukowa)',
        latex: 'E_{Q,X} = \\frac{\\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}}{\\frac{X_2 - X_1}{(X_1 + X_2)/2}} = \\frac{Q_2 - Q_1}{Q_1 + Q_2} \\cdot \\frac{X_1 + X_2}{X_2 - X_1}',
        plainReading: 'Procentowa zmiana ilości względem średniej ilości podzielona przez procentową zmianę ceny (lub dochodu) względem średniej wartości.',
        note: 'Konwencja „zakładamy E < 0”: w części (a) zachowujemy minus i dopisujemy w nawiasie moduł |E|; w części (b) znak PLUS oznacza dobro normalne!',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Część a(i) — elastyczność cenowa (P: 8 → 10 €, dochód = 10 000 €, Q: 40 → 32)',
        explanation:
          'Wspólna zmiana ceny dla obu podpunktów (a): %ΔP = (10 − 8) / 9 = +2/9 (+22,22%). Przy dochodzie 10 000 € ilość spada z 40 do 32: %ΔQ = (32 − 40) / 36 = −8/36 = −2/9 (−22,22%).',
        latex: 'E_{dp} = \\frac{(32 - 40) / 36}{(10 - 8) / 9} = \\frac{-2/9}{2/9} = -1{,}00 \\qquad (|E_{dp}| = 1{,}00)',
        result: 'E_dp = −1,00 (|E_dp| = 1,00) → popyt jednostkowo elastyczny (proporcjonalny).',
      },
      {
        stepNumber: 2,
        title: 'Część a(ii) — elastyczność cenowa (P: 8 → 10 €, dochód = 12 000 €, Q: 50 → 45)',
        explanation:
          'Przy wyższym dochodzie ilość spada słabiej (z 50 do 45): %ΔQ = (45 − 50) / 47,5 = −5 / 47,5 = −2/19 (−10,53%). Dzielimy przez %ΔP = 2/9.',
        latex: 'E_{dp} = \\frac{(45 - 50) / 47{,}5}{(10 - 8) / 9} = \\frac{-2/19}{2/9} = -\\frac{9}{19} \\approx -0{,}47 \\qquad (|E_{dp}| \\approx 0{,}47 < 1)',
        result: 'E_dp ≈ −0,47 (|E_dp| ≈ 0,47 < 1) → popyt nieelastyczny (bogatszy konsument mniej przejmuje się podwyżką).',
      },
      {
        stepNumber: 3,
        title: 'Część b(i) — elastyczność dochodowa (I: 10 000 → 12 000 €, cena = 12 €, Q: 24 → 30)',
        explanation:
          'Wspólna zmiana dochodu (metoda punktu środkowego): %ΔI = (12 000 − 10 000) / 11 000 = 2/11 (+18,18%). W wierszu P = 12 € ilość rośnie z 24 do 30: %ΔQ = (30 − 24) / 27 = 6/27 = 2/9 (+22,22%).',
        latex: 'E_{dI} = \\frac{(30 - 24) / 27}{(12\\,000 - 10\\,000) / 11\\,000} = \\frac{2/9}{2/11} = +\\frac{11}{9} \\approx +1{,}22',
        result: 'E_dI ≈ +1,22 (> 1) → dobro normalne, luksusowe (dla porównania wzorem prostym: +1,25).',
      },
      {
        stepNumber: 4,
        title: 'Część b(ii) — elastyczność dochodowa (I: 10 000 → 12 000 €, cena = 16 €, Q: 8 → 12)',
        explanation:
          'W wierszu P = 16 € ilość rośnie z 8 do 12: %ΔQ = (12 − 8) / 10 = 4/10 = 0,40 (+40%). Dzielimy przez %ΔI = 2/11.',
        latex: 'E_{dI} = \\frac{(12 - 8) / 10}{2/11} = \\frac{2/5}{2/11} = +\\frac{11}{5} = +2{,}20',
        result: 'E_dI = +2,20 (> 1) → dobro normalne, wyraźnie luksusowe (wzorem prostym: +2,50).',
      },
    ],
    finalAnswer:
      'a) Elastyczność cenowa (8 → 10 €): (i) dla I = 10 000 €: E_dp = −1,00 (|E| = 1, popyt proporcjonalny); (ii) dla I = 12 000 €: E_dp = −9/19 ≈ −0,47 (|E| ≈ 0,47, popyt nieelastyczny). b) Elastyczność dochodowa (10 000 → 12 000 €): (i) przy P = 12 €: E_dI = +11/9 ≈ +1,22; (ii) przy P = 16 €: E_dI = +2,20 — w obu przypadkach DVD to dobro normalne (luksusowe, E_dI > 1).',
    examTraps: [
      'W podpunkcie (b) studenci często przypadkowo biorą zmianę CENY (12 → 16) do mianownika zamiast zmiany DOCHODU (10 000 → 12 000)! Cena (12 lub 16) wskazuje tylko właściwy wiersz tabeli.',
      'W metodzie punktu środkowego uważaj na dwójki: albo dzielisz przez 2 w obu mianownikach, albo skracasz dwójki w OBU miejscach naraz.',
      'Zawsze podaj w odpowiedzi zarówno znak (E < 0 w części a, E > 0 w części b), jak i interpretację słowną!',
    ],
  },

  {
    id: 'ex-good-a-midpoint',
    numberLabel: 'Zadanie 10 (E_08 • Dobro A, E < 0)',
    title: 'Dobro A — elastyczność cenowa popytu od ceny równowagi do P = 6 j.p.',
    sourceBadge: 'Zdjęcie 5: E_08_Elastyczność',
    track: 'micro',
    category: 'elastycznosc',
    difficulty: 'kolokwium',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      'Funkcje popytu i podaży na dobro A wyglądają następująco: QS = 4 + 2P i QD = 20 − 2P. Oblicz za pomocą metody punktu środkowego elastyczność cenową popytu na dobro A, jeśli następuje zmiana ceny tego dobra z poziomu ceny równowagi do ceny równej 6 j.p.',
    intuition:
      'Dwuetapowy faworyt wykładowców na kolokwium! Najpierw używasz obu równań (QS = QD), żeby znaleźć cenę równowagi P1 = 4 i ilość Q1 = 12. Potem o funkcji podaży QS CAŁKOWICIE ZAPOMINASZ, bo zadanie pyta o elastyczność POPYTU — więc P2 = 6 podstawiasz wyłącznie do QD!',
    steps: [
      {
        stepNumber: 1,
        title: 'Wyznaczenie ceny i ilości równowagi (punkt początkowy P1, Q1)',
        explanation: 'Przyrównujemy funkcję podaży QS do funkcji popytu QD.',
        latex: '4 + 2P = 20 - 2P \\implies 4P = 16 \\implies P_1 = 4\\text{ j.p.}, \\qquad Q_1 = 20 - 2 \\cdot 4 = 12',
        result: 'P1 = 4 j.p., Q1 = 12 szt. (sprawdzenie: QS(4) = 4 + 8 = 12 ✓).',
      },
      {
        stepNumber: 2,
        title: 'Wyznaczenie wielkości popytu przy nowej cenie P2 = 6 j.p.',
        explanation:
          'UWAGA: podstawiamy P2 = 6 WYŁĄCZNIE do funkcji popytu QD = 20 − 2P (NIE do funkcji podaży QS!).',
        latex: 'Q_2 = Q_D(6) = 20 - 2 \\cdot 6 = 8',
        result: 'P2 = 6 j.p., Q2 = 8 szt.',
      },
      {
        stepNumber: 3,
        title: 'Obliczenie elastyczności metodą punktu środkowego',
        explanation:
          'Średnia ilość wynosi (12 + 8)/2 = 10, a średnia cena (4 + 6)/2 = 5. Procentowa zmiana ilości to −4/10 = −40%, a ceny +2/5 = +40%.',
        latex: 'E_{dp} = \\frac{\\frac{8 - 12}{(12 + 8)/2}}{\\frac{6 - 4}{(4 + 6)/2}} = \\frac{-4/10}{2/5} = \\frac{-0{,}40}{+0{,}40} = -1{,}00 \\qquad (|E_{dp}| = 1{,}00)',
        result: 'E_dp = −1,00 (|E_dp| = 1,00) → popyt jednostkowo elastyczny!',
      },
    ],
    finalAnswer:
      'Cena równowagi wynosi P1 = 4 j.p. (Q1 = 12), przy P2 = 6 j.p. wielkość popytu to Q2 = 8. Elastyczność cenowa popytu metodą punktu środkowego wynosi dokładnie E_dp = −1,00 (|E_dp| = 1,00 — popyt proporcjonalny / jednostkowo elastyczny). Sprawdzenie geometryczne: punkt środkowy (Q = 10, P = 5) jest dokładnym środkiem całej liniowej krzywej QD = 20 − 2P, gdzie elastyczność ZAWSZE wynosi −1!',
    graph: {
      type: 'supply-demand',
      preset: 'good-a-equilibrium',
      title: 'Dobro A: przejście z równowagi (12; 4) do punktu popytu (8; 6)',
      caption: 'Środek badanego odcinka (10; 5) wypada dokładnie w połowie krzywej popytu — stąd E_dp = −1,00 i stałe wydatki (4·12 = 6·8 = 48).',
      interactive: true,
    },
    examTraps: [
      'ŚMIERTELNA PUŁAPKA nr 1: podstawienie P2 = 6 do funkcji podaży QS(6) = 16 zamiast do QD(6) = 8! Wychodzi wtedy wynik dodatni (+0,71), co natychmiast demaskuje błąd, bo dla popytu E_dp MUSI być ujemne!',
      'Pułapka nr 2: użycie zwykłej zmiany procentowej zamiast metody punktu środkowego daje (−4/12)/(2/4) = −0,67 — niezgodnie z poleceniem!',
    ],
  },

  {
    id: 'ex-cross-price-ab',
    numberLabel: 'Zadanie 11 (E_08 • Dobra A i B)',
    title: 'Mieszana (krzyżowa) elastyczność popytu — identyfikacja substytutów',
    sourceBadge: 'Zdjęcie 5: E_08_Elastyczność',
    track: 'micro',
    category: 'elastycznosc',
    difficulty: 'kolokwium',
    topicSlug: 'popyt-podaz-i-elastycznosc',
    originalStatement:
      'Załóżmy, że cena dobra A spadła z 0,80$ do 0,70$. W rezultacie popyt na dobro B spadł ze 120 do 100. Jaką elastyczność popytu wybrałbyś do obliczenia? Używając metody punktu środkowego, oblicz tę elastyczność. Co mówi Twoja odpowiedź?',
    intuition:
      'Skoro zmienia się cena JEDNEGO dobra (A), a reaguje popyt na INNE dobro (B), obliczamy elastyczność MIESZANĄ (krzyżową). Zrób test intuicji PRZED liczeniem: dobro A potaniało, więc ludzie przestali kupować tyle dobra B — bo przerzucili się na tańsze A! Zatem A i B to SUBSTYTUTY, a wynik MUSI wyjść DODATNI (minus przez minus daje plus!).',
    formulas: [
      {
        title: 'Mieszana (krzyżowa) elastyczność popytu (metoda punktu środkowego)',
        latex: 'E_{B,A} = \\frac{\\frac{Q_{B2} - Q_{B1}}{(Q_{B1} + Q_{B2})/2}}{\\frac{P_{A2} - P_{A1}}{(P_{A1} + P_{A2})/2}}',
        plainReading: 'Procentowa zmiana ilości dobra B (zawsze w liczniku!) podzielona przez procentową zmianę ceny dobra A (w mianowniku).',
        note: 'W elastyczności mieszanej NIGDY nie bierzemy wartości bezwzględnej: E > 0 oznacza substytuty, E < 0 dobra komplementarne, E = 0 dobra niezależne.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór właściwego rodzaju elastyczności',
        explanation:
          'Badamy reakcję popytu na dobro B wywołaną zmianą ceny innego dobra A — jest to mieszana (krzyżowa) elastyczność popytu (E_B,A).',
        result: 'Mieszana (krzyżowa) elastyczność popytu.',
      },
      {
        stepNumber: 2,
        title: 'Obliczenie procentowych zmian metodą punktu środkowego',
        explanation:
          'Dla dobra B: zmiana ΔQ_B = 100 − 120 = −20 przy średniej 110. Dla ceny dobra A: zmiana ΔP_A = 0,70 − 0,80 = −0,10 przy średniej 0,75.',
        latex: '\\%\\Delta Q_B = \\frac{100 - 120}{(120 + 100)/2} = \\frac{-20}{110} = -\\frac{2}{11} \\approx -18{,}18\\%, \\qquad \\%\\Delta P_A = \\frac{0{,}70 - 0{,}80}{(0{,}80 + 0{,}70)/2} = \\frac{-0{,}10}{0{,}75} = -\\frac{2}{15} \\approx -13{,}33\\%',
      },
      {
        stepNumber: 3,
        title: 'Wyznaczenie współczynnika E_B,A i interpretacja',
        explanation:
          'Dzielimy ujemny licznik przez ujemny mianownik → wynik jest DODATNI (+15/11 ≈ +1,36). Znak dodatni świadczy o substytucyjności, a wartość > 1 o tym, że są to bliskie substytuty.',
        latex: 'E_{B,A} = \\frac{-2/11}{-2/15} = +\\frac{15}{11} \\approx +1{,}36',
        result: 'E_B,A = +1,36 > 0 → dobra A i B są bliskimi substytutami.',
      },
    ],
    finalAnswer:
      'Należy obliczyć mieszaną (krzyżową) elastyczność popytu. Metodą punktu środkowego wynosi ona E_B,A = +15/11 ≈ +1,36 (wzorem prostym: +1,33). Dodatni znak (E_B,A > 0) oznacza, że dobra A i B są dobrami substytucyjnymi (zamiennikami), a wartość > 1 wskazuje, że są to bliskie substytuty (spadek ceny A o 1% zmniejsza popyt na B o ok. 1,36%).',
    examTraps: [
      'Pułapka słowa „spadł”: skoro OBA spadły (P_A ↓ i Q_B ↓), oba ułamki są ujemne, a minus podzielony przez minus daje PLUS! Nie wpisuj minusa na siłę.',
      'Nie odwracaj ułamka (ΔP/ΔQ) — w każdej elastyczności popytu ILOŚĆ (skutek) jest ZAWSZE w liczniku, a cena/dochód (przyczyna) w mianowniku!',
    ],
  },

  // =========================================================================
  // MODUŁ 3: MONOPOL I STRATA SPOŁECZNA (8.11 monopol.docx, Zdjęcia 6, 7, 8)
  // =========================================================================
  {
    id: 'ex-monopoly-q180',
    numberLabel: 'Zadanie 12 (8.11 Monopol • Q177–Q180)',
    title: 'Wykres monopolu: łączna nadwyżka (Q177), cena i ilość (Q178), pułapka zysku (Q179) i DWL = $250 (Q180)',
    sourceBadge: 'Zdjęcia 6–8: 8.11 monopol.docx',
    track: 'micro',
    category: 'monopol-i-koszty',
    difficulty: 'kolokwium',
    topicSlug: 'struktury-rynku-i-monopol',
    originalStatement:
      'Wspólny wykres (Demand, Marginal Revenue, Marginal Cost — BEZ krzywej ATC!). 177. Łączna nadwyżka jest maksymalizowana, gdy: a. 100 szt., $10 | b. 150 szt., $10 | c. 150 szt., $15 | d. 200 szt., $10 | e. żadna z powyższych. 178. By maksymalizować zysk, monopolista powinien: a. 100 szt. po $10 | b. 100 szt. po $20 | c. 150 szt. po $15 | d. 200 szt. po $20 | e. żadna z powyższych. 179. Maksymalny zysk monopolisty wynosi: a. $500 | b. $800 | c. $1000 | d. $2000 | e. Nie można określić. 180. Społeczny koszt monopolu wynosi: a. $150 | b. $200 | c. $250 [Rekonstrukcja pozostałych opcji z banku zadań Mankiw Ch. 15: d. $500, e. Nie można określić / żadna z powyższych].',
    dataTable: {
      caption: 'Kompletny klucz odpowiedzi i weryfikacja matematyczna dla Q177–Q180 (D: P=30−0,1Q, MR=30−0,2Q, MC=0,1Q)',
      headers: ['Pytanie', 'Warunek ekonomiczny', 'Wynik i poprawna opcja', 'Najgroźniejszy dystraktor (pułapka)'],
      rows: [
        ['177. Max łącznej nadwyżki', 'P = MC (przecięcie D i MC)', 'c. 150 szt., cena $15', 'Pomylenie z punktem monopolisty (100 szt.).'],
        ['178. Max zysku monopolisty', 'MR = MC → Qm; cena z D → Pm', 'b. 100 szt., cena $20', 'Opcja a ($10) — odczyt ceny z MR = MC zamiast z krzywej D!'],
        ['179. Maksymalny zysk Π', 'Π = TR − TC = (P − ATC)·Q', 'e. Nie można określić', 'Opcja d ($2000 = TR) i c ($1000 = pomylenie MC z ATC!).'],
        ['180. Społeczny koszt (DWL)', '½ · (Qeff − Qm) · (Pm − MCm)', 'c. $250', 'Opcja d ($500 = brak ½ lub użycie Q = 200 zamiast 150!).'],
      ],
      highlightFirstColumn: true,
    },
    intuition:
      'To najważniejszy zestaw 4 pytań na kolokwium z mikroekonomii! Rozdziel dwa światy: (1) społeczeństwo chce maksymalnej łącznej nadwyżki tam, gdzie P = MC (150 szt., $15), (2) monopolista tnie produkcję do MR = MC (100 szt.) i jedzie PIONOWO W GÓRĘ do krzywej popytu po cenę ($20). A przy pytaniu o ZYSK zawsze najpierw sprawdź, czy na rysunku w ogóle istnieje krzywa ATC — bez niej zysku NIE MOŻNA OKREŚLIĆ!',
    formulas: [
      {
        title: 'Równania krzywych z wykresu 8.11 monopol.docx i wzór na DWL',
        latex: 'D: P = 30 - 0{,}1Q, \\quad MR = 30 - 0{,}2Q, \\quad MC = 0{,}1Q, \\qquad DWL = \\frac{1}{2}(Q_{\\text{eff}} - Q_m)(P_m - MC_m)',
        plainReading: 'Społeczny koszt monopolu (DWL) to pole trójkąta między krzywą popytu D a krzywą MC na odcinku utraconej produkcji od Qm do Qeff.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pytanie 177 — maksimum łącznej nadwyżki (efektywność społeczna: P = MC)',
        explanation:
          'Łączna nadwyżka (CS + PS) jest największa w punkcie przecięcia krzywej popytu Demand z krzywą Marginal Cost (każda sztuka warta dla kupujących więcej niż koszt jej produkcji zostaje wytworzona).',
        latex: 'P = MC \\implies 30 - 0{,}1Q = 0{,}1Q \\implies 0{,}2Q = 30 \\implies Q_{\\text{eff}} = 150, \\quad P_{\\text{eff}} = 15\\$',
        result: 'Q177 → odp. c (150 sztuk, cena $15).',
      },
      {
        stepNumber: 2,
        title: 'Pytanie 178 — optimum monopolisty (reguła 2 kroków: MR = MC → w górę do D)',
        explanation:
          'Krok 1: przecięcie MR i MC wyznacza ilość Q_m = 100 (tam MR = MC = $10). Krok 2: NIE zatrzymuj się na $10 — jedź pionowo w górę do krzywej Demand i odczytaj cenę P_m = $20.',
        latex: 'MR = MC \\implies 30 - 0{,}2Q = 0{,}1Q \\implies Q_m = 100 \\implies P_m = 30 - 0{,}1(100) = 20\\$',
        result: 'Q178 → odp. b (100 sztuk, cena $20).',
      },
      {
        stepNumber: 3,
        title: 'Pytanie 179 — NAJSŁYNNIEJSZA PUŁAPKA: maksymalny zysk monopolisty',
        explanation:
          'Zysk to Π = TR − TC = (P − ATC)·Q. Z wykresu znamy utarg TR = 100 × $20 = $2000 (pułapka d!) i MC(100) = $10, ale na rysunku NIE MA krzywej ATC ani kosztów stałych FC! Koszty stałe mogą wynosić równie dobrze $0, jak i $5000 (wtedy firma miałaby stratę) — zysku nie da się obliczyć!',
        latex: '\\Pi = TR - TC = 2000\\$ - (FC + VC) \\quad \\text{— brak } ATC \\text{ oraz } FC \\implies \\text{Nie można określić!}',
        result: 'Q179 → odp. e (Nie można określić).',
      },
      {
        stepNumber: 4,
        title: 'Pytanie 180 — społeczny koszt monopolu (bezpowrotna strata DWL)',
        explanation:
          'Trójkąt DWL rozpięty jest między D i MC dla utraconej produkcji od Q_m = 100 do Q_eff = 150 (szerokość 50 szt.), o podstawie pionowej P_m − MC_m = $20 − $10 = $10. Do obliczenia DWL krzywa ATC NIE jest potrzebna! Weryfikacja nadwyżek: TS_eff = $2250, TS_mon = $2000 → strata = $250.',
        latex: 'DWL = \\frac{1}{2} \\cdot (150 - 100) \\cdot (20\\$ - 10\\$) = \\frac{1}{2} \\cdot 50 \\cdot 10\\$ = 250\\$',
        result: 'Q180 → odp. c ($250).',
      },
    ],
    finalAnswer:
      'Q177: c (150 szt., $15); Q178: b (100 szt., $20); Q179: e (Nie można określić — brak krzywej ATC / FC!); Q180: c ($250 = ½ × 50 × $10).',
    graph: {
      type: 'monopoly',
      preset: 'q180-dwl',
      title: 'Wykres monopolu z pliku 8.11 monopol.docx (Q177–Q180)',
      caption: 'Przełączaj podświetlenie DWL ($250), CS, PS oraz ostrzeżenie o braku krzywej ATC (Q179).',
      interactive: true,
    },
    examTraps: [
      'Q178: 50% błędów to wybór opcji a ($10) — odczyt ceny z przecięcia MR = MC zamiast pionowo w górę z krzywej popytu D ($20)!',
      'Q179: NIE daj się nabrać na $2000 (to przychód TR, bez kosztów!), ani na $1000 = ($20 − $10)·100 (to pomylenie kosztu krańcowego MC z kosztem przeciętnym całkowitym ATC!).',
      'Q180: NIE zaznaczaj odruchowo „Nie można określić” po pytaniu 179! Do DWL wystarczą D, MR i MC — koszty stałe FC nie wpływają na pole trójkąta DWL.',
      'Q180: Punkt Q = 200 na wykresie to podpucha (przecięcie D z poziomem $10, nie z MC!). Efektywna ilość to 150, a nie 200.',
    ],
  },

  // =========================================================================
  // BONUSOWE ZADANIA OBLICZENIOWE Z PREZENTACJI WYKŁADOWYCH (Wykłady 2, 3, 4)
  // =========================================================================
  {
    id: 'ex-bonus-gossen2',
    numberLabel: 'Bonus 1 (Konsument • Slajd 25)',
    title: 'Optimum konsumenta z II prawa Gossena oraz pułapka podwojenia cen i dochodu',
    sourceBadge: 'Wykład 2: konsument.pptx (Slajdy 22 i 25)',
    track: 'micro',
    category: 'konsument',
    difficulty: 'kolokwium',
    topicSlug: 'teoria-konsumenta',
    originalStatement:
      'Zadanie 5 (Slajd 25): Dochód konsumenta wynosi Dk = 4000, ceny dóbr wynoszą cx = 4 oraz cy = 8, a funkcje użyteczności krańcowej to Użk(x) = 1/X oraz Użk(y) = 1/Y. Wyznacz ilości X i Y maksymalizujące użyteczność (spełniające II prawo Gossena). Dodatkowo (Slajd 22, Zad. 4c): co stanie się z linią ograniczenia budżetowego, jeśli dochód i obie ceny wzrosną dwukrotnie?',
    intuition:
      'Drugie prawo Gossena to czysta logika zakupów: ostatnia złotówka wydana na dobro X musi przynosić tyle samo dodatkowej satysfakcji, co ostatnia złotówka wydana na dobro Y (MUx/cx = MUy/cy). To daje zależność między X i Y, którą następnie wstawiasz do równania budżetu cx·X + cy·Y = Dk.',
    formulas: [
      {
        title: 'Układ równań równowagi konsumenta (II prawo Gossena + budżet)',
        latex: '\\frac{MU_x}{c_x} = \\frac{MU_y}{c_y} \\qquad \\land \\qquad c_x X + c_y Y = D_k',
        plainReading: 'Wyrównanie ważonych użyteczności krańcowych + wydanie całego dochodu na linii ograniczenia budżetowego.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Zastosowanie II prawa Gossena (wyznaczenie proporcji X i Y)',
        explanation: 'Podstawiamy MUx = 1/X, MUy = 1/Y, cx = 4, cy = 8 i upraszczamy proporcję.',
        latex: '\\frac{1/X}{4} = \\frac{1/Y}{8} \\implies \\frac{1}{4X} = \\frac{1}{8Y} \\implies 4X = 8Y \\implies X = 2Y',
        result: 'X = 2Y',
      },
      {
        stepNumber: 2,
        title: 'Podstawienie do równania linii ograniczenia budżetowego',
        explanation: 'Wstawiamy X = 2Y do równania 4X + 8Y = 4000 i obliczamy Y, a potem X.',
        latex: '4(2Y) + 8Y = 4000 \\implies 16Y = 4000 \\implies Y = 250, \\qquad X = 2 \\cdot 250 = 500',
        result: 'X = 500, Y = 250',
      },
      {
        stepNumber: 3,
        title: 'Sprawdzenie obu warunków + efekt podwojenia dochodu i cen (Zad. 4c)',
        explanation:
          'Budżet: 4·500 + 8·250 = 2000 + 2000 = 4000 ✓. II prawo Gossena: (1/500)/4 = 1/2000 oraz (1/250)/8 = 1/2000 ✓. Gdyby dochód (8000) oraz obie ceny (8 i 16) wzrosły dwukrotnie, przecięcia z osiami (8000/8 = 1000 oraz 8000/16 = 500) i nachylenie (−8/16 = −0,5) NIE ZMIENIŁYBY SIĘ — linia budżetu pozostaje identyczna!',
        result: 'Optimum (500, 250) zweryfikowane; dwukrotny wzrost Dk, cx, cy nie zmienia linii budżetu.',
      },
    ],
    finalAnswer:
      'Optymalny koszyk konsumenta to X = 500 jednostek i Y = 250 jednostek. Dwukrotny jednoczesny wzrost dochodu oraz cen obu dóbr w ogóle nie zmienia położenia ani nachylenia linii ograniczenia budżetowego (brak iluzji pieniądza).',
    graph: {
      type: 'consumer',
      preset: 'interactive',
      title: 'Optimum konsumenta — styczność linii budżetu z krzywą obojętności',
      caption: 'Sprawdź suwakami, że równoległe przesunięcie wywołuje zmiana dochodu, obrót — zmiana jednej ceny, a podwojenie I, Px i Py nic nie zmienia!',
      interactive: true,
    },
    examTraps: [
      'Nie przyrównuj samych użyteczności krańcowych MUx = MUy — ZAWSZE dziel przez ceny: MUx/cx = MUy/cy!',
      'Pułapka z Zad. 4c (Slajd 22): studenci intuicyjnie odpowiadają, że linia budżetu „przesunie się 2× w prawo” po podwojeniu dochodu i cen. NIE — realna siła nabywcza jest dokładnie taka sama!',
    ],
  },

  {
    id: 'ex-bonus-perfect-comp',
    numberLabel: 'Bonus 2 (Przedsiębiorstwo • Slajdy 71–72 i 80)',
    title: 'Konkurencja doskonała (OT, OE, prostokąty TR/TC/VC/FC/Π) + monopol algebraiczny',
    sourceBadge: 'Wykład 3: przedsiębiorstwo.pptx (Slajdy 71–72, 80)',
    track: 'micro',
    category: 'monopol-i-koszty',
    difficulty: 'kolokwium',
    topicSlug: 'przedsiebiorstwo-i-koszty',
    originalStatement:
      'Część A (Slajdy 71–72, konkurencja doskonała): Na wykresie kosztów przedsiębiorstwa cena rynkowa wynosi p = AR = MR = 15 zł. Prosta ceny przecina krzywą ATC w Q = 13 i Q = 24, minimum ATC wypada w Q = 20, a przecięcie z rosnącą MC w Q = 21, gdzie ATC(21) = 13 zł i AVC(21) = 10 zł. Wyznacz: przedział opłacalności, OT, OE oraz wielkości TR, TC, VC, FC i zysk Π. Część B (Slajd 80, monopol algebraiczny): Dla Kc = 10Q + Q² oraz Uc = 130Q − 0,5Q² wyznacz ilość Q i cenę monopolową p maksymalizujące zysk.',
    intuition:
      'Rozróżniaj trzy punkty firmy jak tabliczkę mnożenia: OT (Optimum Technologiczne) to najniższy koszt jednostkowy (min ATC = 20), OE (Optimum Ekonomiczne) to maksimum zysku tam, gdzie MR = MC (Q = 21), a cena zamknięcia cz to min AVC. W konkurencji doskonałej wszystkie kwoty (TR, TC, VC, FC, Π) są po prostu polami prostokątów o szerokości Q = 21!',
    formulas: [
      {
        title: 'Wielkości finansowe z wykresu kosztów przy optimum OE',
        latex: 'TR = p \\cdot Q, \\quad TC = ATC \\cdot Q, \\quad VC = AVC \\cdot Q, \\quad FC = (ATC - AVC) \\cdot Q, \\quad \\Pi = (p - ATC) \\cdot Q',
        plainReading: 'Każdą wartość całkowitą liczymy jako iloczyn odpowiedniej wielkości jednostkowej na osi Y oraz ilości produkcji Q.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Część A — przedział opłacalności, OT i OE (Slajdy 71–72)',
        explanation:
          'Firma osiąga zysk (p ≥ ATC) między przecięciami ceny z ATC, czyli dla Q ∈ [13; 24]. Optimum Technologiczne (min ATC) to Q_OT = 20. Optimum Ekonomiczne (p = MR = MC) wypada w Q_OE = 21 przy cenie p = 15 zł.',
        result: 'Przedział opłacalności: 13–24 szt.; OT = 20 szt.; OE: Q = 21 szt., p = 15 zł.',
      },
      {
        stepNumber: 2,
        title: 'Część A — obliczenie TR, TC, VC, FC i zysku Π dla Q = 21',
        explanation:
          'Mnożymy wysokości odczytane na osi Y przy Q = 21 (p = 15, ATC = 13, AVC = 10) przez szerokość Q = 21.',
        latex: 'TR = 15 \\cdot 21 = 315, \\quad TC = 13 \\cdot 21 = 273, \\quad VC = 10 \\cdot 21 = 210, \\quad FC = 273 - 210 = 63, \\quad \\Pi = 315 - 273 = 42\\text{ zł}',
        result: 'TR = 315 zł, TC = 273 zł, VC = 210 zł, FC = 63 zł, Π = 42 zł.',
      },
      {
        stepNumber: 3,
        title: 'Część B — monopol algebraiczny ze Slajdu 80 (pochodne MR = MC)',
        explanation:
          'Liczymy pochodne funkcji kosztu całkowitego i utargu całkowitego, przyrównujemy MR = MC, a cenę wyznaczamy ze wzoru p = Uc / Q.',
        latex: 'MC = (10Q + Q^2)\' = 10 + 2Q, \\qquad MR = (130Q - 0{,}5Q^2)\' = 130 - Q',
      },
      {
        stepNumber: 4,
        title: 'Część B — wyznaczenie Q, ceny p i zysku monopolisty',
        explanation: 'Rozwiązujemy 130 − Q = 10 + 2Q, a następnie podstawiamy Q = 40 do funkcji ceny p = 130 − 0,5Q.',
        latex: '130 - Q = 10 + 2Q \\implies 3Q = 120 \\implies Q = 40, \\qquad p = 130 - 0{,}5 \\cdot 40 = 110, \\qquad \\Pi = 4400 - 2000 = 2400',
        result: 'Q = 40 szt., p = 110 j.p., Π = 2400 j.p.',
      },
    ],
    finalAnswer:
      'Część A (Slajdy 71–72): przedział opłacalności 13–24, OT = 20, OE = 21 (p = 15 zł), TR = 315 zł, TC = 273 zł, VC = 210 zł, FC = 63 zł, Π = 42 zł. Część B (Slajd 80): monopolista produkuje Q = 40 po cenie p = 110 (zysk Π = 2400).',
    graph: {
      type: 'cost-curves',
      preset: 'shutdown-point',
      title: 'Krzywe kosztów krótkookresowych: MC, ATC, AVC, OT i cena zamknięcia cz',
      caption: 'Przesuwaj suwak ceny rynkowej, aby zobaczyć strefę zysku (p > ATC), strefę racjonalnej straty (min AVC < p < ATC) oraz punkt zamknięcia (p = min AVC).',
      interactive: true,
    },
    examTraps: [
      'Nie myl OT (Q = 20, najniższy koszt na sztukę) z OE (Q = 21, maksymalny zysk całkowity)! Maksymalny zysk JEDNOSTKOWY nie jest tym samym co maksymalny zysk CAŁKOWITY.',
      'W krótkim okresie przy stracie (min AVC < p < ATC) NIE zamykamy firmy — produkcja pokrywa koszty zmienne i część stałych, zmniejszając stratę względem zamknięcia (gdzie strata = całe FC).',
    ],
  },

  {
    id: 'ex-bonus-pkb-chain',
    numberLabel: 'Bonus 3 (Makro PKB • Slajdy 9 i 28)',
    title: 'Pełny łańcuch rachunku dochodu narodowego (PKB → PNB → PNN) oraz deflator PKB',
    sourceBadge: 'Wykład 4: wykład nt pkb.pptx (Slajdy 9 i 28)',
    track: 'macro',
    category: 'makro-pkb',
    difficulty: 'kolokwium',
    topicSlug: 'pkb-i-dochod-narodowy',
    originalStatement:
      'Część A (Slajd 28): Dane makroekonomiczne (w mld j.p.): C = 300, I = 182, G = 95, subsydia Su = 10, podatki pośrednie Te = 65, dochody netto z tytułu własności za granicą Dw = 12, Ex = 90, Im = 120, amortyzacja Am = 50. Oblicz: PKB w cenach rynkowych (PKB_cr), PKB w cenach czynników produkcji (PKB_ccp), PNB_cr, PNB_ccp oraz PNN_ccp (Dochód Narodowy DN). Część B (Slajd 9): Dla roku bazowego 1990 (PKB = 150) oraz lat 1992 (bieżące 160, stałe 155) i 1995 (bieżące 175, stałe 162) oblicz deflator PKB i realne stopy wzrostu.',
    dataTable: {
      caption: 'Zestawienie obliczeń dla tabeli deflatora ze Slajdu 9 (rok bazowy = 1990)',
      headers: ['Rok', 'PKB stałe (realny)', 'Wzrost realny', 'PKB bieżące (nominalny)', 'Wzrost nominalny', 'Deflator PKB'],
      rows: [
        ['1990 (bazowy)', '150 mld zł', '—', '150 mld zł', '—', '100,00'],
        ['1992', '155 mld zł', '+3,33% (vs 1990)', '160 mld zł', '+6,67% (vs 1990)', '103,23'],
        ['1995', '162 mld zł', '+4,52% (vs 1992) / +8,00% (vs 1990)', '175 mld zł', '+9,38% (vs 1992) / +16,67% (vs 1990)', '108,02'],
      ],
      highlightFirstColumn: true,
    },
    intuition:
      'Zapamiętaj 3 proste mosty między kategoriami rachunku narodowego: (1) z cen rynkowych na czynniki produkcji → odejmij podatki pośrednie Te, dodaj subsydia Su; (2) z Krajowego (PKB) na Narodowy (PNB) → dodaj Dw; (3) z Brutto (PNB) na Netto (PNN) → odejmij amortyzację Am!',
    formulas: [
      {
        title: 'Trzy mosty rachunku dochodu narodowego i wzór na deflator',
        latex: 'PKB_{ccp} = PKB_{cr} - T_e + S_u, \\quad PNB = PKB + D_w, \\quad PNN = PNB - Am, \\quad \\text{Deflator} = \\frac{PKB_{\\text{nom}}}{PKB_{\\text{real}}} \\cdot 100',
        plainReading: 'Każde przejście zmienia dokładnie jeden wymiar: wycenę (cr→ccp), kryterium terytorialne/narodowe (PKB→PNB) lub zużycie kapitału (brutto→netto).',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Część A — eksport netto NX oraz PKB w cenach rynkowych (PKB_cr)',
        explanation: 'Najpierw wyznaczamy saldo handlowe NX = Ex − Im (uwaga: jest ujemne!), potem sumujemy C + I + G + NX.',
        latex: 'NX = 90 - 120 = -30, \\qquad PKB_{cr} = 300 + 182 + 95 + (-30) = 547\\text{ mld j.p.}',
        result: 'NX = −30; PKB_cr = 547 mld j.p.',
      },
      {
        stepNumber: 2,
        title: 'Część A — przejście na ceny czynników produkcji (PKB_ccp)',
        explanation: 'Odejmujemy podatki pośrednie (Te = 65) i DODAJEMY subsydia (Su = 10).',
        latex: 'PKB_{ccp} = 547 - 65 + 10 = 492\\text{ mld j.p.}',
        result: 'PKB_ccp = 492 mld j.p.',
      },
      {
        stepNumber: 3,
        title: 'Część A — przejście do PNB_cr, PNB_ccp oraz PNN_ccp (Dochód Narodowy)',
        explanation:
          'Dodajemy dochody netto z własności za granicą (Dw = 12), a na końcu odejmujemy amortyzację (Am = 50).',
        latex: 'PNB_{cr} = 547 + 12 = 559, \\qquad PNB_{ccp} = 492 + 12 = 504, \\qquad PNN_{ccp} = 504 - 50 = 454\\text{ mld j.p.}',
        result: 'PNB_cr = 559; PNB_ccp = 504; PNN_ccp (DN) = 454 mld j.p.',
      },
      {
        stepNumber: 4,
        title: 'Część B (Slajd 9) — obliczenie deflatora PKB dla 1990, 1992 i 1995 r.',
        explanation:
          'W roku bazowym 1990 deflator = 100. W 1992 i 1995 dzielimy PKB w cenach bieżących (nominalny) przez PKB w cenach stałych (realny) i mnożymy przez 100.',
        latex: '\\text{Defl}_{1992} = \\frac{160}{155}\\cdot 100 = 103{,}23, \\qquad \\text{Defl}_{1995} = \\frac{175}{162}\\cdot 100 = 108{,}02',
        result: 'Deflatory: 1990 → 100,00; 1992 → 103,23; 1995 → 108,02.',
      },
    ],
    finalAnswer:
      'Część A (Slajd 28): PKB_cr = 547, PKB_ccp = 492, PNB_cr = 559, PNB_ccp = 504, PNN_ccp (DN) = 454 mld j.p. Część B (Slajd 9): deflator rośnie z 100,00 (1990) do 103,23 (1992) i 108,02 (1995); w latach 1990–1995 PKB nominalny wzrósł o 16,67%, ale realnie produkcja wzrosła tylko o 8,00% — ponad połowa to inflacja.',
    graph: {
      type: 'gdp-chart',
      preset: 'both',
      title: 'PKB nominalny vs realny oraz struktura wydatkowa C + I + G + NX',
      caption: 'Przetestuj suwakiem inflacji, jak PKB nominalny odrywa się od realnego, oraz sprawdź strukturę C + I + G + NX.',
      interactive: true,
    },
    examTraps: [
      'Częsty błąd znaków przy PKB_ccp: od PKB_cr ODEJMUJEMY podatki pośrednie Te i DODAJEMY subsydia Su (nie odwrotnie!).',
      'Gdy Ex < Im (jak na Slajdzie 28: 90 < 120), eksport netto NX jest UJEMNY (−30) i obniża PKB!',
      'W deflatorze PKB ZAWSZE nominalny jest na górze (w liczniku), a realny na dole (w mianowniku)!',
    ],
  },

  {
    id: 'ex-bonus-keynesian-multiplier',
    numberLabel: 'Bonus 4 (Makro PKB • Slajd 87, „dla chętnych”)',
    title: 'Równowaga makroekonomiczna (AD = Y) i mnożnik w gospodarce otwartej',
    sourceBadge: 'Wykład 4: wykład nt pkb.pptx (Slajd 87)',
    track: 'macro',
    category: 'makro-pkb',
    difficulty: 'kolokwium',
    topicSlug: 'pkb-realny-deflator-i-wskazniki',
    originalStatement:
      'Zadanie ze Slajdu 87 (model gospodarki otwartej z podatkiem dochodowym): Dana jest funkcja dochodu w równowadze Y = Ca + ksk·(Y − tY) + I + G + Xa − ksi·Y, gdzie: konsumpcja autonomiczna Ca = 100, inwestycje I = 100, wydatki rządowe G = 100, krańcowa skłonność do konsumpcji ksk (MPC) = 0,8, autonomiczny eksport netto Xa = 60, krańcowa skłonność do importu ksi (MPI) = 0,2, stopa podatkowa t = 0,25. a) Wyznacz dochód narodowy w równowadze Ye. b) O ile i do jakiego poziomu wzrośnie Ye, gdy Xa wzrośnie z 60 do 84?',
    intuition:
      'W modelu keynesowskim (wykres 45°) każda dodatkowa złotówka wydatków autonomicznych (np. eksportu +24) krąży wielokrotnie w gospodarce, ale po drodze część „wycieka” na podatki (t), oszczędności (1 − ksk) oraz import (ksi). Dlatego mnożnik gospodarki otwartej z podatkami jest mniejszy niż prosty mnożnik 1/(1 − ksk) i tutaj wynosi 5/3 ≈ 1,67.',
    formulas: [
      {
        title: 'Równowaga Ye oraz mnożnik gospodarki otwartej z podatkiem dochodowym',
        latex: 'Y_e = \\frac{C_a + I + G + X_a}{1 - ksk(1 - t) + ksi}, \\qquad m = \\frac{1}{1 - ksk(1 - t) + ksi}, \\qquad \\Delta Y = m \\cdot \\Delta X_a',
        plainReading: 'Suma wydatków autonomicznych podzielona przez łączną stopę wycieków z ruchu okrężnego.',
        symbols: [
          { symbol: 'ksk (MPC)', meaning: 'krańcowa skłonność do konsumpcji (= 0,8)' },
          { symbol: 't', meaning: 'stopa podatku dochodowego (= 0,25)' },
          { symbol: 'ksi (MPI)', meaning: 'krańcowa skłonność do importu (= 0,2)' },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Podstawienie danych i zsumowanie wydatków autonomicznych',
        explanation:
          'Wydatki niezależne od Y to Ca + I + G + Xa = 100 + 100 + 100 + 60 = 360. Następnie upraszczamy człony zależne od Y: ksk·(1 − t)·Y = 0,8·0,75·Y = 0,6Y oraz odejmujemy import 0,2Y.',
        latex: 'Y = 100 + 0{,}8(Y - 0{,}25Y) + 100 + 100 + 60 - 0{,}2Y = 360 + 0{,}6Y - 0{,}2Y = 360 + 0{,}4Y',
      },
      {
        stepNumber: 2,
        title: 'Wyznaczenie dochodu narodowego w równowadze Ye',
        explanation: 'Przenosimy 0,4Y na lewą stronę równania i dzielimy 360 przez 0,6.',
        latex: 'Y - 0{,}4Y = 360 \\implies 0{,}6Y = 360 \\implies Y_e = \\frac{360}{0{,}6} = 600',
        result: 'Ye = 600',
      },
      {
        stepNumber: 3,
        title: 'Obliczenie mnożnika gospodarki otwartej i reakcji na ΔXa = +24',
        explanation:
          'Mnożnik to odwrotność współczynnika przy Y z kroku 2 (czyli 1 / 0,6 = 5/3 ≈ 1,67). Wzrost Xa z 60 do 84 (ΔXa = +24) podnosi dochód o 24 × (5/3) = +40.',
        latex: 'm = \\frac{1}{1 - 0{,}8 \\cdot 0{,}75 + 0{,}2} = \\frac{1}{0{,}6} = \\frac{5}{3} \\approx 1{,}67 \\implies \\Delta Y = \\frac{5}{3} \\cdot 24 = +40',
        result: 'm = 5/3 ≈ 1,67; ΔY = +40; Y_nowe = 640.',
      },
      {
        stepNumber: 4,
        title: 'Sprawdzenie bezpośrednie dla nowego Xa = 84',
        explanation: 'Nowa suma wydatków autonomicznych wynosi 360 + 24 = 384.',
        latex: 'Y_{\\text{nowe}} = \\frac{384}{0{,}6} = 640 \\quad \\checkmark',
        result: 'Y_nowe = 640 ✓',
      },
    ],
    finalAnswer:
      'a) Dochód narodowy w równowadze wynosi Ye = 600. b) Mnożnik gospodarki otwartej wynosi m = 5/3 ≈ 1,67; wzrost Xa o +24 zwiększa dochód narodowy o ΔY = +40, do nowego poziomu równowagi Y_nowe = 640.',
    examTraps: [
      'Uważaj na znak przy ksi (krańcowej skłonności do importu) w mianowniku mnożnika! Ponieważ import jest ODPŁYWEM (−ksi·Y po prawej), po przeniesieniu na lewą stronę daje PLUS (+ksi) w mianowniku — import ZMNIEJSZA mnożnik!',
      'Nie używaj prostego mnożnika 1/(1 − ksk) = 5, gdy w zadaniu występują podatek t i import ksi — tutaj mnożnik spada z 5 aż do 1,67!',
    ],
  },
];
