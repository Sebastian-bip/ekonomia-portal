import type { ExamData } from '@/types/economics';

export const examData: ExamData = {
  overview: {
    title: 'Strefa Kolokwium z Ekonomii',
    subtitle:
      'Kompletny trening przed kolokwium (dr E. Ratowska-Dziobiak, UŁ) — 47 pytań ABCD, 30 zdań do dokończenia, 38 fiszek definicyjnych oraz 15 zweryfikowanych zadań obliczeniowych dla Mikroekonomii i Makroekonomii.',
    seniorTipCallout: {
      variant: 'tip',
      title: 'Relacja ze starszego rocznika + oficjalny format zaliczenia (Wykład 1, Slajdy 14–15)',
      content:
        '„U nas to było tak, że nas spytała, czy chcemy podzielone czy razem, no i my chcieliśmy podzielone (...) ogólnie było chyba jakoś 11 zadań abcd, potem z 2–3 zadania typu dokończ zdanie, potem jakieś definicje i 2–3 zadania do policzenia, i na makroekonomii w sumie to samo.” Potwierdzają to Slajdy 14–15 z pierwszego wykładu: zaliczenie pisemne łączy test wyboru (ABCD / ew. Prawda-Fałsz), zdania do uzupełnienia, krótkie definicje oraz zadania obliczeniowe i graficzne (akceptowana jest zarówno notacja Mankiwa & Taylora, jak i Milewskiego & Kwiatkowskiego).',
      points: [
        'Głosujcie za PODZIELONYM kolokwium (osobno Mikro, osobno Makro) — osobne zestawy wzorów i mniejsze ryzyko pomieszania symboli (np. elastyczności z deflatorem).',
        'W zadaniach z elastyczności pamiętaj o konwencji wykładowej „zakładamy E < 0” — zapisuj wynik z minusem i w nawiasie moduł |E| wraz ze słowną interpretacją.',
        'W zadaniach obliczeniowych ZAWSZE zapisz: (1) wzór ogólny, (2) podstawienie liczb, (3) wynik z jednostką i znakiem, (4) jedno zdanie interpretacji ekonomicznej.',
      ],
    },
    structureCards: [
      {
        title: 'Test ABCD (ok. 11 pytań)',
        badge: 'Część 1 • 12–15 min',
        description:
          'Pytania jednokrotnego wyboru (często oparte wprost na wykresach z Roz_3A.docx, 8.11 monopol.docx i tabelach z wykładów) oraz ewentualne pytania Prawda/Fałsz.',
        points: [
          'Uważaj na opcje „Nie można określić” (Q179!) oraz „żadna z powyższych”.',
          'Odróżniaj ruch wzdłuż krzywej (zmiana ceny własnej) od przesunięcia całej krzywej.',
          'W Makro pilnuj daty zmiany metodologii HDI (2010 r.) i różnicy zasób vs strumień.',
        ],
      },
      {
        title: 'Dokończ zdanie (2–3 zadania)',
        badge: 'Część 2 • 5 min',
        description:
          'Uzupełnianie klasycznych praw ekonomicznych, warunków równowagi i zależności przyczynowo-skutkowych ze slajdów wykładowych.',
        points: [
          'Mikro: zasada gospodarności, prawo popytu, paradoksy, prawo Engla, I i II prawo Gossena, OT = min ATC, cz = min AVC.',
          'Makro: definicja PKB, PKB realny, deflator, dopływy/odpływy ruchu okrężnego, krzywa Phillipsa (NAIRU), równowaga AD = Y.',
        ],
      },
      {
        title: 'Definicje otwarte (2–4 pojęcia)',
        badge: 'Część 3 • 8–10 min',
        description:
          'Krótkie, precyzyjne definicje pojęć mikro- i makroekonomicznych — punktowane są konkretne słowa kluczowe.',
        points: [
          'W definicji PKB wymień 4 filary: wartość rynkowa + dobra i usługi finalne + na terytorium kraju + w określonym czasie.',
          'W definicji kosztu alternatywnego wskaż „wartość najlepszej utraconej alternatywy”.',
          'Rozróżniaj koszt księgowy i ekonomiczny oraz PKB i PNB (kryterium terytorialne vs narodowe).',
        ],
      },
      {
        title: 'Zadania obliczeniowe (2–3 zadania)',
        badge: 'Część 4 • 15–20 min',
        description:
          'Obliczenia i odczyt wykresów z ćwiczeń wykładowych: równowaga Qd = Qs, metoda punktu środkowego, optimum konsumenta/monopolu oraz rachunek PKB i mnożnik.',
        points: [
          'Mikro: batony czekoladowe, Dobro A, tabela DVD, II prawo Gossena, wykresy kosztów i DWL monopolu.',
          'Makro: tabela deflatora (Slajd 9), wartość dodana chleba/samochodu (Slajdy 19–20), łańcuch PKB→PNB→PNN (Slajd 28), mnożnik (Slajd 87).',
        ],
      },
      {
        title: 'TOP 7 pułapek: Mikroekonomia',
        badge: 'Uwaga! Pułapki Mikro',
        description:
          'Najczęstsze powody utraty łatwych punktów w części mikroekonomicznej — przeczytaj obowiązkowo przed wejściem na salę!',
        points: [
          '1. Zysk monopolisty bez krzywej ATC (Q179) → „Nie można określić” (nie myl z TR = P·Q ani z (P − MC)·Q!).',
          '2. Cena monopolisty (Q178): Qm czytasz z MR = MC, ale cenę Pm ZAWSZE pionowo z krzywej popytu D.',
          '3. Konwencja E < 0 (E_08): „bardziej elastyczny” = większe |E| (czyli −2,0 > −0,5 w sile reakcji); przy E_I i E_xy znak decyduje o rodzaju dobra!',
          '4. Dobro A (elastyczność od równowagi do P = 6): Qs służy TYLKO do znalezienia P*; nową cenę podstawiasz wyłącznie do Qd!',
          '5. Podwójne przesunięcie (Zad. 4 pomarańcze: D↑ i S↑): ilość Q* na pewno rośnie, ale cena P* jest NIEJEDNOZNACZNA.',
          '6. Wiążące ceny urzędowe: cena maksymalna wiąże tylko gdy p_max < p_r (niedobór); minimalna tylko gdy p_min > p_r (nadwyżka).',
          '7. Linia budżetu przy podwojeniu dochodu i OBU cen (Zad. 4c): linia NIE ZMIENIA SIĘ; w firmie nie myl OT (min ATC), OE (MR = MC) i cz (min AVC)!',
        ],
      },
      {
        title: 'TOP 7 pułapek: Makroekonomia',
        badge: 'Uwaga! Pułapki Makro',
        description:
          'Najczęstsze błędy w zadaniach i testach z prezentacji PKB — każde z tych zdań wraca na kolokwiach!',
        points: [
          '8. Zasoby vs Strumienie: zatrudnienie, bezrobocie, majątek, dług publiczny = ZASOBY (moment); PKB, inwestycje, dochód, deficyt = STRUMIENIE (okres). Nie dodawaj ich do siebie!',
          '9. Podwójne liczenie (Slajdy 19–20): chleb daje do PKB 10 zł (NIE 27 zł!), a samochód 4800 (NIE 10 100!) — liczysz tylko dobra finalne lub sumę wartości dodanych.',
          '10. Nowe mieszkania w I, nie w C! Zakup nowego domu/mieszkania zalicza się do inwestycji brutto I; akcje na giełdzie, dobra używane i emerytury/zasiłki (transfery) NIE wchodzą do PKB.',
          '11. Ceny rynkowe vs czynników produkcji (Slajd 23): PKB_ccp = PKB_cr − podatki pośrednie (Te) + subsydia (Su) — pilnuj znaków minus i plus!',
          '12. PKB nominalny vs realny: nominalny = ceny bieżące × ilości bieżące; realny = ceny ROKU BAZOWEGO × ilości bieżące. W roku bazowym deflator = 100.',
          '13. Import auta z Niemiec przez Polaka: C rośnie, ale Im rośnie o tyle samo w NX = Ex − Im → PKB Polski NIE ZMIENIA SIĘ!',
          '14. HDI po 2010 r. (Slajdy 59–60): zamiast PKB jest DNB (GNI) per capita wg PPP, zamiast analfabetyzmu — średnia i oczekiwana liczba lat nauki (średnia geometryczna).',
        ],
      },
    ],
    studyStrategySteps: [
      'Wybierz filtr „Tylko Mikroekonomia” albo „Tylko Makroekonomia” u góry strony, aby uczyć się dokładnie pod podzielone kolokwium.',
      'Rozwiąż wszystkie pytania w zakładce „Test ABCD” i przeczytaj wyjaśnienie także przy trafionych odpowiedziach — w polach „Pułapka” ukryte są typowe zmyłki z banku Mankiwa i slajdów.',
      'Przejdź zakładkę „Dokończ zdanie” — wpisuj z pamięci krótkie sformułowania praw (Marshall, Engel, Gossen I i II, malejące przychody, Phillips/NAIRU, AD = Y) przed kliknięciem „Sprawdź odpowiedź”.',
      'Przetasuj „Fiszki i Definicje” i oznaczaj jako opanowane tylko te pojęcia, w których potrafisz wymienić wszystkie słowa kluczowe i wzór.',
      'Weź kartkę i kalkulator i policz samodzielnie wszystkie zadania w zakładce „Zadania obliczeniowe” (zwłaszcza Dobro A, tabelę DVD, Q177–Q180, Slajd 9, Slajd 28 i Slajd 87), zanim otworzysz rozwiązanie.',
      'Na samym kolokwium (45–60 min) pilnuj budżetu czasu: 12–15 min na ABCD, 5 min na dokańczanie zdań, 8–10 min na definicje, 15–20 min na obliczenia oraz obowiązkowe 5 min rezerwy na kontrolę znaków i podstawień.',
      'W ostatnich 5 minutach sprawdź: czy P* daje ten sam wynik w Qd i Qs, czy przy elastyczności użyłeś metody punktu środkowego, czy w PKB odrzuciłeś transfery i dobra używane, oraz czy do każdego wyniku dopisałeś jedno zdanie interpretacji.',
    ],
  },

  abcdQuestions: [
    // =========================================================================
    // MIKROEKONOMIA (25 pytań ABCD)
    // =========================================================================
    {
      id: 'abcd-micro-1',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      sourceNote: 'Wykład 1 • Slajd 21',
      question: 'Które z poniższych stwierdzeń jest sądem normatywnym?',
      options: [
        'Wzrost bezrobocia prowadzi do spadku dochodów gospodarstw domowych.',
        'Bezrobocie jest poważniejszym problemem społecznym niż inflacja i rząd powinien je zwalczać w pierwszej kolejności.',
        'Podniesienie akcyzy na papierosy powoduje wzrost ich ceny rynkowej.',
        'W 2020 roku realny PKB Polski obniżył się o 2,8%.',
      ],
      correctIndex: 1,
      explanation:
        'Sąd normatywny zawiera wartościowanie i zalecenia („poważniejszy problem”, „powinien”) — odpowiada na pytanie „jak być powinno?”. Pozostałe zdania opisują zależności faktów („jak jest?”) i podlegają weryfikacji empirycznej, są więc sądami pozytywnymi.',
      trapNote:
        'Nawet fałszywe zdanie o faktach (np. „wzrost podatków zawsze podnosi sprzedaż”) pozostaje sądem POZYTYWNYM, ponieważ można je empirycznie obalić!',
    },
    {
      id: 'abcd-micro-2',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      sourceNote: 'Wykład 1 • Slajdy 34, 39–41',
      question:
        'Punkt leżący poniżej (wewnątrz) krzywej transformacji (krzywej możliwości produkcyjnych — PPF) oznacza kombinację dóbr:',
      options: [
        'ekonomicznie efektywną przy pełnym wykorzystaniu wszystkich zasobów.',
        'nierealną i nieosiągalną przy obecnej technologii i zasobach.',
        'ekonomicznie nieefektywną — część zasobów pozostaje niewykorzystana (np. bezrobocie lub przestoje maszyn).',
        'możliwą do osiągnięcia wyłącznie po dokonaniu skokowego postępu technicznego.',
      ],
      correctIndex: 2,
      explanation:
        'Punkty POD krzywą PPF są osiągalne, ale nieefektywne (gospodarka nie wykorzystuje w pełni swoich mocy wytwórczych). Punkty NA krzywej są efektywne, a punkty NAD krzywą są obecnie nierealne.',
      trapNote:
        'Pamiętaj również o przyczynie wklęsłego kształtu PPF: czynniki produkcji nie są doskonałymi substytutami, co rodzi rosnący koszt alternatywny!',
    },
    {
      id: 'abcd-micro-3',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      sourceNote: 'Wykład 1 • Slajd 34 i 48',
      question:
        'Przedsiębiorstwo dysponuje stałym budżetem 500 tys. zł i wybiera spośród dostępnych technologii tę, która zapewni największą możliwą liczbę wyprodukowanych sztuk. Który wariant zasady racjonalnego gospodarowania stosuje?',
      options: [
        'Zasadę maksymalizacji efektu (wydajności) przy danym nakładzie środków.',
        'Zasadę minimalizacji nakładu przy danym efekcie.',
        'Jednoczesną maksymalizację efektu i minimalizację nakładu.',
        'Zasadę wyrównywania użyteczności krańcowych.',
      ],
      correctIndex: 0,
      explanation:
        'Ponieważ nakład (500 tys. zł) jest z góry dany, racjonalne postępowanie polega na maksymalizacji efektu (produkcji). Gdyby z góry dana była wielkość produkcji (np. popyt 700 tys. szt.), stosowalibyśmy zasadę minimalizacji nakładu.',
      trapNote:
        'Klasyczna pułapka z wykładu: NIE wolno jednocześnie „maksymalizować efektu i minimalizować nakładu” — jedna z wielkości zawsze musi być z góry ustalona!',
    },
    {
      id: 'abcd-micro-4',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'Roz_3A.docx • Wykres Q20 (Zdjęcie 1)',
      question:
        'Na wykresie z arkusza Roz_3A.docx krzywe S i D przecinają się w punkcie ($20, 600). Jeżeli cena rynkowa wynosi chwilowo $25, przy której Qd = 500 oraz Qs = 800, to na rynku występuje:',
      options: [
        'niedobór w wysokości 300 jednostek, wywołujący presję na wzrost ceny.',
        'nadwyżka w wysokości 300 jednostek, wywołująca presję na spadek ceny.',
        'nadwyżka w wysokości 500 jednostek, wywołująca presję na spadek ceny.',
        'stan równowagi rynkowej, w którym sprzedaje się 800 jednostek.',
      ],
      correctIndex: 1,
      explanation:
        'Przy cenie $25 (powyżej ceny równowagi $20) wielkość podaży Qs = 800 przewyższa wielkość popytu Qd = 500. Powstaje nadwyżka rynkowa równa 800 − 500 = 300 sztuk, a konkurujący sprzedawcy obniżają cenę w kierunku $20.',
      trapNote:
        'Przy cenie poniżej równowagi ($15 lub $10) występuje NIEDOBÓR (Qd > Qs). Poza równowagą faktycznie sprzedawana ilość to zawsze min(Qd, Qs) — tutaj tylko 500 sztuk!',
    },
    {
      id: 'abcd-micro-5',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'Mankiw & Taylor s. 146 • Zad. 3 (Zdjęcie 3)',
      question:
        'Cygara i papierosy są dobrami substytucyjnymi. Co stanie się na rynku cygar w następstwie podniesienia akcyzy na papierosy?',
      options: [
        'Krzywa podaży cygar przesunie się w lewo, a ilość równowagi cygar spadnie.',
        'Krzywa popytu na cygara przesunie się w lewo, a cena cygar spadnie.',
        'Nastąpi wyłącznie ruch w dół wzdłuż dotychczasowej krzywej popytu na cygara.',
        'Krzywa popytu na cygara przesunie się w prawo, powodując wzrost zarówno ceny, jak i ilości równowagi cygar.',
      ],
      correctIndex: 3,
      explanation:
        'Wyższa akcyza na papierosy ogranicza podaż papierosów i podnosi ich cenę. Ponieważ papierosy (substytut) zdrożały, część konsumentów przerzuca się na cygara — popyt na cygara rośnie (przesunięcie D w prawo), co podnosi zarówno P*, jak i Q* cygar.',
      trapNote:
        'Najczęstszy błąd: przesuwanie krzywej PODAŻY cygar w lewo. Akcyza dotyczyła papierosów, więc koszty produkcji cygar nie zmieniły się — krzywa S cygar stoi w miejscu!',
    },
    {
      id: 'abcd-micro-6',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'Mankiw & Taylor s. 146 • Zad. 4 (Zdjęcie 3)',
      question:
        'Nowe badania dowiodły, że jedzenie pomarańczy obniża ryzyko cukrzycy, a jednocześnie hiszpańscy plantatorzy wprowadzili nowy nawóz zwiększający plony z każdego drzewka. Jak zmieni się równowaga na rynku pomarańczy?',
      options: [
        'Zarówno cena równowagi, jak i ilość równowagi na pewno wzrosną.',
        'Ilość równowagi na pewno wzrośnie, natomiast kierunek zmiany ceny równowagi jest niejednoznaczny (zależy od względnej skali przesunięć).',
        'Cena równowagi na pewno spadnie, natomiast zmiana ilości jest niejednoznaczna.',
        'Cena równowagi na pewno nie ulegnie zmianie, a ilość równowagi spadnie.',
      ],
      correctIndex: 1,
      explanation:
        'Badania zdrowotne przesuwają krzywą popytu D w prawo (P↑, Q↑), a nowy nawóz przesuwa krzywą podaży S w prawo (P↓, Q↑). Oba czynniki zgodnie zwiększają Q*, lecz działają przeciwnie na P* — jeśli silniej wzrośnie D, cena wzrośnie; jeśli silniej S, cena spadnie.',
      trapNote:
        'Przy jednoczesnym przesunięciu D i S ZAWSZE jedna zmienna jest jednoznaczna, a druga niejednoznaczna: D↑+S↑ ⇒ Q↑, P niejednoznaczne; D↑+S↓ ⇒ P↑, Q niejednoznaczne!',
    },
    {
      id: 'abcd-micro-7',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'Wykład 1 • Slajd 82',
      question:
        'Który z poniższych czynników wywołuje ruch wzdłuż krzywej popytu na kawę, a NIE przesunięcie całej krzywej popytu?',
      options: [
        'Wzrost dochodów gospodarstw domowych.',
        'Spadek ceny herbaty (dobra substytucyjnego).',
        'Wzrost ceny samej kawy.',
        'Nagła moda na picie kawy specialty.',
      ],
      correctIndex: 2,
      explanation:
        'Zmiana ceny samego analizowanego dobra powoduje zmianę wielkości popytu, czyli ruch wzdłuż istniejącej krzywej popytu. Dochód, ceny substytutów/komplementów i preferencje to pozacenowe determinanty przesuwające całą krzywą D.',
      trapNote:
        'Nie myl „zmiany popytu” (przesunięcie całej krzywej) ze „zmianą wielkości popytu” (ruch między dwoma punktami tej samej krzywej)!',
    },
    {
      id: 'abcd-micro-8',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'Wykład 1 • Slajdy 94–97',
      question:
        'Paradoks Giffena (wzrost wielkości popytu na dobro podrzędne w reakcji na wzrost jego ceny) występuje wtedy, gdy:',
      options: [
        'ujemny efekt dochodowy zmiany ceny jest silniejszy niż efekt substytucyjny.',
        'konsumenci kupują luksusowe dobro wyłącznie dla zademonstrowania statusu majątkowego.',
        'inwestorzy kupują aktywa w oczekiwaniu na dalszy wzrost ich cen na giełdzie.',
        'dobro ma bardzo wiele bliskich i znacznie tańszych substytutów.',
      ],
      correctIndex: 0,
      explanation:
        'W paradoksie Giffena (dobra podrzędne o dużym udziale w budżecie ubogich rodzin, np. chleb lub ziemniaki) podwyżka ceny tak silnie obniża realny dochód, że rodziny rezygnują z droższych dóbr (np. mięsa) i kupują jeszcze więcej dobra podrzędnego. Opcja B opisuje paradoks Veblena, a opcja C — paradoks spekulacyjny.',
      trapNote:
        'Na kolokwium rozróżniaj wszystkie 3 paradoksy popytu: Giffen = ubodzy + dobro podrzędne (efekt dochodowy > substytucyjny); Veblen = luksus i snobizm; spekulacyjny = oczekiwania cenowe (hossa/bessa).',
    },
    {
      id: 'abcd-micro-9',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'Wykład 1 • Slajdy 110–111',
      question:
        'Urzędowa cena maksymalna (np. kontrola czynszów mieszkaniowych) jest wiążąca i prowadzi do trwałego niedoboru oraz rozwoju czarnego rynku wtedy, gdy zostanie ustalona:',
      options: [
        'powyżej ceny równowagi rynkowej (p_max > p_r).',
        'dokładnie na poziomie ceny równowagi rynkowej (p_max = p_r).',
        'poniżej ceny równowagi rynkowej (p_max < p_r).',
        'wyłącznie na rynku, na którym krzywa podaży jest pozioma.',
      ],
      correctIndex: 2,
      explanation:
        'Cena maksymalna to prawny „sufit” — jest wiążąca (ogranicza cenę rynkową) tylko wtedy, gdy leży poniżej ceny równowagi (p_max < p_r). Wówczas Qd > Qs, co tworzy trwały niedobór, kolejki i czarny rynek.',
      trapNote:
        'Odwrotnie dla ceny minimalnej („podłogi”, np. płacy minimalnej): wiąże tylko wtedy, gdy p_min > p_r i wywołuje trwałą NADWYŻKĘ!',
    },
    {
      id: 'abcd-micro-10',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'E_08_Elastyczność • Zdjęcie 4 (zakładamy E < 0)',
      question:
        'Spośród wymienionych dóbr największą elastycznością cenową popytu (co do wartości bezwzględnej |E_dp|) charakteryzuje się zazwyczaj:',
      options: [
        'insulina dla osób chorujących na cukrzycę.',
        'olej opałowy rozpatrywany w horyzoncie najbliższych 6 miesięcy.',
        'woda pitna jako kategoria ogólna.',
        'pobrania utworów jednego konkretnego artysty (np. Jaya-Z) w horyzoncie długookresowym.',
      ],
      correctIndex: 3,
      explanation:
        'Utwory pojedynczego wykonawcy to wąsko zdefiniowany rynek rozrywkowy z ogromną liczbą bliskich substytutów (inni artyści), a w długim horyzoncie konsumenci łatwo zmieniają wybory. Insulina i woda są dobrami niezbędnymi bez substytutów, a 6 miesięcy to zbyt krótki czas na wymianę pieca olejowego.',
      trapNote:
        'W konwencji wykładowej E < 0 „większa elastyczność” oznacza większą wartość bezwzględną |E| (np. −2,4 oznacza popyt bardziej elastyczny niż −0,3)!',
    },
    {
      id: 'abcd-micro-11',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'Mankiw & Taylor s. 146–147 • Zad. 5e (Zdjęcie 2)',
      question:
        'Na stadionie klubu piłkarskiego nie ma obecnie kompletu widzów, a cenowa elastyczność popytu na bilety w obecnym przedziale cenowym wynosi E_dp = −1,40. Aby zwiększyć łączne przychody ze sprzedaży biletów (TR), władze klubu powinny:',
      options: [
        'podnieść cenę biletów, ponieważ wyższa cena zawsze zwiększa utarg.',
        'obniżyć cenę biletów, ponieważ przy popycie elastycznym (|E_dp| > 1) procentowy wzrost sprzedaży przewyższy procentowy spadek ceny.',
        'pozostawić cenę bez zmian, bo przy E_dp = −1,40 przychody osiągają już maksimum.',
        'zlikwidować część miejsc na stadionie, aby przesunąć krzywą popytu w prawo.',
      ],
      correctIndex: 1,
      explanation:
        'Ponieważ |E_dp| = 1,40 > 1, popyt jest elastyczny. Obniżka ceny (np. z 40 € do 30 € w tabeli Mankiwa & Taylora) powoduje silniejszy procentowo wzrost liczby sprzedanych biletów niż spadek ceny, podnosząc TR (z 800 tys. € do 900 tys. €).',
      trapNote:
        'Złota reguła TR: przy popycie elastycznym (|E| > 1) cena i TR idą w PRZECIWNYCH kierunkach (P↓ ⇒ TR↑); przy nieelastycznym (|E| < 1) w TYM SAMYM kierunku (P↑ ⇒ TR↑)!',
    },
    {
      id: 'abcd-micro-12',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'Mankiw & Taylor s. 147 • Zad. 7 (Zdjęcie 2)',
      question:
        'Podaż nieruchomości na południowym wybrzeżu Francji jest nieelastyczna, a podaż samochodów — elastyczna względem ceny. Jeżeli wzrost populacji podwoi popyt na oba te dobra, to:',
      options: [
        'większy wzrost ceny nastąpi na rynku nieruchomości, a większy wzrost ilości na rynku samochodów (przy czym łączne wydatki wzrosną na obu rynkach).',
        'większy wzrost ilości nastąpi na rynku nieruchomości, a większy wzrost ceny na rynku samochodów.',
        'łączne wydatki konsumentów na nieruchomości spadną, a na samochody wzrosną.',
        'cena równowagi samochodów spadnie, ponieważ ich podaż jest elastyczna.',
      ],
      correctIndex: 0,
      explanation:
        'Podwojenie popytu (przesunięcie D w prawo) podnosi zarówno P*, jak i Q* na obu rynkach (więc wydatki P·Q rosną na obu). Przy nieelastycznej, stromej podaży linii brzegowej wzrost popytu „wylewa się” głównie w gwałtowny wzrost ceny; przy płaskiej, elastycznej podaży aut fabryki odpowiadają dużym wzrostem produkcji.',
      trapNote:
        'Nie pisz, że ilość nieruchomości nie zmieni się wcale — podaż jest nieelastyczna (stroma), a nie doskonale nieelastyczna (pionowa)!',
    },
    {
      id: 'abcd-micro-13',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'Wykład 1 • Slajdy 135–141',
      question:
        'Zgodnie z prawem Engla, gdy dochód gospodarstwa domowego rośnie, wydatki na żywność rosną kwotowo, ale ich procentowy udział w budżecie domowym maleje. Oznacza to, że elastyczność dochodowa popytu (E_I) na żywność spełnia warunek:',
      options: [
        'E_I < 0 (dobro podrzędne).',
        'E_I > 1 (dobro luksusowe).',
        '0 < E_I < 1 (dobro normalne podstawowe).',
        'E_I = 0 (popyt zupełnie niezależny od dochodu).',
      ],
      correctIndex: 2,
      explanation:
        'Skoro wydatki na żywność rosną, to E_I > 0 (dobro normalne), ale skoro rosną wolniej niż dochód (udział procentowy w budżecie spada), to E_I < 1. Stąd dla dóbr podstawowych 0 < E_I < 1.',
      trapNote:
        'Na osi elastyczności dochodowej ze Slajdu 135: E_I < 0 to dobra podrzędne; 0 < E_I < 1 podstawowe (żywność); E_I = 1 (np. odzież/mieszkania); E_I > 1 luksusowe (np. turystyka, RTV).',
    },
    {
      id: 'abcd-micro-14',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'E_08_Elastyczność • Zdjęcie 5',
      question:
        'Cena dobra A spadła z $0,80 do $0,70, a w rezultacie popyt na dobro B spadł ze 120 do 100 sztuk. Mieszana elastyczność popytu obliczona metodą punktu środkowego wynosi ok. +1,36. Oznacza to, że dobra A i B są:',
      options: [
        'dobrami komplementarnymi, ponieważ oba wskaźniki spadły.',
        'dobrami niezależnymi (neutralnymi).',
        'dobrami niższego rzędu.',
        'bliskimi dobrami substytucyjnymi (zamiennikami).',
      ],
      correctIndex: 3,
      explanation:
        'Zarówno ΔQ_B = −20, jak i ΔP_A = −0,10 są ujemne — minus dzielony przez minus daje wynik DODATNI (E_BA = +15/11 ≈ +1,36 > 0). Dodatnia elastyczność mieszana zawsze wskazuje na dobra substytucyjne (gdy A potaniało, konsumenci zamienili B na A).',
      trapNote:
        'Przy elastyczności mieszanej i dochodowej ZNAK jest absolutnie kluczowy — nigdy nie bierz wartości bezwzględnej!',
    },
    {
      id: 'abcd-micro-15',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      sourceNote: 'E_08_Elastyczność • Zdjęcie 4',
      question:
        'Jaki jest najważniejszy powód fiskalny, dla którego rządy wielu państw nakładają wysoką akcyzę właśnie na benzynę (oraz wyroby tytoniowe)?',
      options: [
        'Popyt na benzynę w krótkim okresie jest wysoce nieelastyczny, więc podatek generuje wysokie i stabilne wpływy budżetowe przy małym spadku wolumenu sprzedaży.',
        'Popyt na benzynę jest doskonale elastyczny, dzięki czemu cały ciężar podatku ponoszą wyłącznie rafinerie.',
        'Akcyza na benzynę przesuwa krzywą popytu na samochody w prawo.',
        'Popyt na benzynę ma ujemną elastyczność dochodową, więc wpływy rosną w recesji.',
      ],
      correctIndex: 0,
      explanation:
        'Przy nieelastycznym popycie (|E_dp| < 1) wzrost ceny wywołany akcyzą tylko nieznacznie zmniejsza ilość kupowanego paliwa — budżet zyskuje pewne i wysokie dochody przy stosunkowo niskiej zbędnej stracie społecznej (DWL). Dodatkowo akcyza pełni funkcję korekcyjną (podatek Pigou za emisję spalin i zużycie dróg).',
      trapNote:
        'W rozdziale o elastyczności na pierwszym miejscu ZAWSZE wymieniaj nieelastyczność popytu i stabilność wpływów budżetowych, a dopiero na drugim argument ekologiczny!',
    },
    {
      id: 'abcd-micro-16',
      track: 'micro',
      topicSlug: 'teoria-konsumenta',
      sourceNote: 'Wykład 2 • konsument.pptx Slajdy 4, 10',
      question:
        'Dlaczego na mapie preferencji jednego racjonalnego konsumenta dwie różne krzywe obojętności NIE MOGĄ się przecinać?',
      options: [
        'Ponieważ dochód konsumenta jest skończony i dodatni.',
        'Ponieważ przeczyło by to założeniu o przechodniości preferencji oraz zasadzie nienasycenia („więcej znaczy lepiej”).',
        'Ponieważ ceny obu dóbr musiałyby wówczas być ujemne.',
        'Ponieważ użyteczność krańcowa każdego dobra musi być stała.',
      ],
      correctIndex: 1,
      explanation:
        'Gdyby krzywe O1 i O2 przecięły się w punkcie A, wówczas z przechodniości koszyki na niższej krzywej musiałyby być równie dobre jak koszyki zawierające więcej obu dóbr na wyższej krzywej — co jest logiczną sprzecznością.',
    },
    {
      id: 'abcd-micro-17',
      track: 'micro',
      topicSlug: 'teoria-konsumenta',
      sourceNote: 'Wykład 2 • konsument.pptx Slajdy 12–13',
      question:
        'Zgodnie z I prawem Gossena (prawem malejącej użyteczności krańcowej), gdy użyteczność krańcowa kolejnej jednostki dobra wynosi dokładnie zero (MU = 0), to użyteczność całkowita (TU):',
      options: [
        'również wynosi zero.',
        'zaczyna gwałtownie rosnąć.',
        'osiąga swoje maksimum (punkt nasycenia).',
        'jest równa cenie tego dobra.',
      ],
      correctIndex: 2,
      explanation:
        'Dopóki MU > 0, każda dodatkowa sztuka powiększa TU. W momencie gdy MU = 0, przyrost ustaje i TU osiąga szczyt (np. w Zadaniu 1 ze Slajdu 12: przy 7. jednostce Uż_k = 0 i Uż_c = 31 max). Gdy MU < 0, użyteczność całkowita zaczyna spadać (przesyt).',
    },
    {
      id: 'abcd-micro-18',
      track: 'micro',
      topicSlug: 'teoria-konsumenta',
      sourceNote: 'Wykład 2 • konsument.pptx Slajd 22, Zad. 4c',
      question:
        'Jeśli dochód konsumenta (Dk) oraz ceny obu kupowanych dóbr (cx i cy) wzrosną jednocześnie dokładnie dwukrotnie, to linia ograniczenia budżetowego:',
      options: [
        'przesunie się równolegle w prawo dwukrotnie.',
        'stanie się dwukrotnie bardziej stroma.',
        'przesunie się równolegle w lewo o połowę.',
        'nie zmieni ani swojego położenia, ani nachylenia (pozostanie identyczna).',
      ],
      correctIndex: 3,
      explanation:
        'Maksymalne ilości wynoszą (2·Dk)/(2·cx) = Dk/cx oraz (2·Dk)/(2·cy) = Dk/cy, a nachylenie −(2·cx)/(2·cy) = −cx/cy. Realna siła nabywcza i ceny względne są identyczne, więc zbiór budżetowy nie zmienia się wcale (brak iluzji pieniądza).',
      trapNote:
        'To ulubiona pułapka testowa z Zadania 4c! Przesunięcie równoległe zachodzi przy zmianie samego dochodu, a obrót — przy zmianie ceny tylko jednego dobra.',
    },
    {
      id: 'abcd-micro-19',
      track: 'micro',
      topicSlug: 'teoria-konsumenta',
      sourceNote: 'Wykład 2 • konsument.pptx Slajdy 23–24',
      question:
        'Konsument maksymalizuje użyteczność całkowitą przy danym dochodzie i cenach (optimum konsumenta — II prawo Gossena), gdy wybiera koszyk leżący na linii budżetowej, w którym:',
      options: [
        'MRS = MUx / MUy = px / py, czyli równoważnie MUx / px = MUy / py (krzywa obojętności jest styczna do linii budżetu).',
        'użyteczności krańcowe obu dóbr są sobie równe (MUx = MUy), niezależnie od ich cen.',
        'cały dochód jest wydawany wyłącznie na dobro o niższej cenie jednostkowej.',
        'krzywa obojętności przecina linię budżetową pod kątem prostym.',
      ],
      correctIndex: 0,
      explanation:
        'W punkcie styczności nachylenie krzywej obojętności (−MUx/MUy) równa się nachyleniu linii budżetowej (−px/py). Oznacza to, że ostatnia złotówka wydana na dobro X przynosi dokładnie tyle samo satysfakcji co ostatnia złotówka wydana na dobro Y.',
    },
    {
      id: 'abcd-micro-20',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      sourceNote: 'Wykład 3 • przedsiębiorstwo.pptx Slajd 25',
      question:
        'Firma osiągnęła roczny przychód TR = 400 tys. zł i poniosła udokumentowane koszty księgowe 100 tys. zł. Właściciel zrezygnował jednak z etatu za 60 tys. zł oraz z wynajmu własnego lokalu za 70 tys. zł. Ile wynosi zysk ekonomiczny tej firmy?',
      options: [
        '300 tys. zł.',
        '170 tys. zł.',
        '230 tys. zł.',
        '130 tys. zł.',
      ],
      correctIndex: 1,
      explanation:
        'Koszty alternatywne wynoszą 60 + 70 = 130 tys. zł, więc łączne koszty ekonomiczne = 100 + 130 = 230 tys. zł. Zysk ekonomiczny = TR − koszty ekonomiczne = 400 − 230 = 170 tys. zł.',
      trapNote:
        'Uważaj na dystraktory ze Slajdu 25: 300 tys. zł to zysk KSIĘGOWY, 230 tys. zł to koszty ekonomiczne, a 130 tys. zł to same koszty alternatywne!',
    },
    {
      id: 'abcd-micro-21',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      sourceNote: 'Wykład 3 • przedsiębiorstwo.pptx Slajdy 52, 67–68',
      question:
        'Na wykresie krótkookresowych kosztów przedsiębiorstwa krzywa kosztu krańcowego (MC) przecina od dołu krzywe AVC oraz ATC w ich punktach minimum. Punkt minimum ATC oraz punkt minimum AVC wyznaczają odpowiednio:',
      options: [
        'cenę zamknięcia (cz) oraz optimum ekonomiczne (OE).',
        'maksimum produktu całkowitego oraz próg zysku nadzwyczajnego.',
        'optimum technologiczne (OT) oraz granicę racjonalnych strat / cenę zamknięcia (cz).',
        'punkt zerowych kosztów stałych oraz maksimum utargu całkowitego.',
      ],
      correctIndex: 2,
      explanation:
        'Minimum ATC to optimum technologiczne (OT — najniższy koszt jednostkowy produkcji). Minimum AVC to granica racjonalnych strat / cena zamknięcia (cz): dopóki p > min AVC, firma w krótkim okresie kontynuuje produkcję mimo straty, bo pokrywa VC i część FC.',
      trapNote:
        'Zapamiętaj trójkę skrótów prof. Ratowskiej-Dziobiak: OT = min ATC; cz = min AVC; OE (optimum ekonomiczne) = MR = MC!',
    },
    {
      id: 'abcd-micro-22',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      sourceNote: '8.11 monopol.docx • Q177 (Zdjęcie 8)',
      question:
        'Na wykresie monopolu ze zdjęcia 8 krzywa popytu D przecina krzywą kosztu krańcowego MC w punkcie (Q = 150, P = $15), natomiast MR przecina MC przy Q = 100 (gdzie MC = $10, a na krzywej D: P = $20). Łączna nadwyżka społeczna jest maksymalizowana, gdy:',
      options: [
        'produkuje się 100 sztuk, a cena wynosi $10.',
        'produkuje się 100 sztuk, a cena wynosi $20.',
        'produkuje się 200 sztuk, a cena wynosi $10.',
        'produkuje się 150 sztuk, a cena wynosi $15.',
      ],
      correctIndex: 3,
      explanation:
        'Łączna nadwyżka społeczna (CS + PS) osiąga maksimum w punkcie efektywności społecznej (konkurencji doskonałej), czyli tam, gdzie cena równa się kosztowi krańcowemu (P = MC — przecięcie krzywych D i MC). Na wykresie odpowiada to Q = 150 sztuk i P = $15.',
      trapNote:
        'Nie myl maksymalizacji łącznej nadwyżki (P = MC → 150 szt., $15) z maksymalizacją zysku monopolisty (MR = MC → 100 szt., $20)!',
    },
    {
      id: 'abcd-micro-23',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      sourceNote: '8.11 monopol.docx • Q178 (Zdjęcia 6–8)',
      question:
        'Na tym samym wykresie monopolu (MR = MC przy Q = 100 i $10; krzywa D nad Q = 100 wskazuje $20; D = MC przy Q = 150 i $15), aby maksymalizować zysk, monopolista powinien:',
      options: [
        'produkować 100 sztuk i sprzedawać po $20.',
        'produkować 100 sztuk i sprzedawać po $10.',
        'produkować 150 sztuk i sprzedawać po $15.',
        'produkować 200 sztuk i sprzedawać po $10.',
      ],
      correctIndex: 0,
      explanation:
        'Procedura 2 kroków monopolisty: (1) wyznacz wielkość produkcji z warunku MR = MC ⇒ Qm = 100 sztuk; (2) pojedź pionowo w górę do krzywej popytu D, aby odczytać maksymalną cenę akceptowaną przez rynek ⇒ Pm = $20.',
      trapNote:
        'Odpowiedź „100 sztuk po $10” to NAJCZĘSTSZY błąd na kolokwium — studenci czytają cenę w punkcie MR = MC zamiast na krzywej popytu D!',
    },
    {
      id: 'abcd-micro-24',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      sourceNote: '8.11 monopol.docx • Q179 (Zdjęcia 6–8)',
      question:
        'Na wykresie monopolu ze zdjęcia 8 narysowano wyłącznie trzy krzywe: Demand (D), Marginal Revenue (MR) oraz Marginal Cost (MC). Ile wynosi maksymalny zysk monopolisty na podstawie tego rysunku?',
      options: [
        '$500.',
        '$1000.',
        '$2000.',
        'Nie można określić.',
      ],
      correctIndex: 3,
      explanation:
        'Zysk wynosi Π = TR − TC = (P − ATC)·Q. Z wykresu znamy wyłącznie utarg całkowity TR = 100 × $20 = $2000 oraz koszt krańcowy MC, ale na rysunku BRAKUJE krzywej kosztu przeciętnego całkowitego (ATC) oraz informacji o kosztach stałych (FC). Bez nich zysku nie da się obliczyć!',
      trapNote:
        'KULTOWA PUŁAPKA Z ZDJĘCIA 7! $2000 to utarg TR (nie zysk!), a $1000 to błędne (20 − 10)×100 wynikające z pomylenia MC z ATC. Gdy brak krzywej ATC → zawsze „Nie można określić”!',
    },
    {
      id: 'abcd-micro-25',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      sourceNote: 'Wykład 3 • Slajdy 88–94',
      question:
        'Porozumienie przedsiębiorstw tej samej branży w sprawie cen i limitów produkcji, które dodatkowo powołuje wspólne biuro zbytu (centralę handlową), nosi nazwę:',
      options: [
        'konglomeratu (który łączy niespokrewnione branże).',
        'syndykatu (wyższej formy kartelu, zwalczanej w Polsce przez UOKiK).',
        'spółki komandytowej.',
        'monopolu naturalnego.',
      ],
      correctIndex: 1,
      explanation:
        'Syndykat to wyższa forma kartelu — oprócz ustalania cen i kontyngentów produkcji firmy sprzedają wyroby przez wspólne biuro handlowe. Konglomerat łączy różne niespokrewnione branże, holding kontroluje akcje innych spółek, a w Polsce ochroną konkurencji zajmuje się UOKiK (obok KNF, BFG i Rzecznika Finansowego na rynku finansowym).',
    },

    // =========================================================================
    // MAKROEKONOMIA (22 pytania ABCD — w 100% zsynchronizowane z pres_4_pkb.md)
    // =========================================================================
    {
      id: 'abcd-macro-1',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Wykład 4 • PKB Slajdy 4–5',
      question:
        'Która z poniższych par kategorii makroekonomicznych obejmuje WYŁĄCZNIE strumienie (flows — mierzone w przedziale czasu)?',
      options: [
        'Majątek produkcyjny (kapitał) oraz liczba bezrobotnych.',
        'Zatrudnienie oraz Produkt Krajowy Brutto (PKB).',
        'Produkt Krajowy Brutto (PKB) oraz roczne wydatki inwestycyjne.',
        'Dług publiczny oraz zasób pieniądza w gospodarce na dzień 31 grudnia.',
      ],
      correctIndex: 2,
      explanation:
        'Strumienie mierzymy w określonym przedziale czasu (np. w ciągu roku: PKB, inwestycje, dochód, sprzedaż, wydatki, deficyt budżetowy). Zasoby (stocks) opisują stan w konkretnym momencie (zatrudnienie, bezrobocie, majątek, dług publiczny).',
      trapNote:
        'Zgodnie z zasadami agregacji (Slajd 5) NIE WOLNO dodawać do siebie zasobów i strumieni, a sumowane strumienie muszą dotyczyć tego samego przedziału czasu!',
    },
    {
      id: 'abcd-macro-2',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajd 9',
      question:
        'W roku bazowym 1990 PKB wynosił 150 mld zł. W 1995 r. PKB w cenach bieżących wyniósł 175 mld zł, a w cenach stałych z 1990 r. — 162 mld zł. Ile wynosi deflator PKB w 1995 roku?',
      options: [
        '108,02 (co oznacza wzrost ogólnego poziomu cen o ok. 8,02% od 1990 r.).',
        '92,57.',
        '116,67.',
        '100,00.',
      ],
      correctIndex: 0,
      explanation:
        'Deflator PKB = (PKB nominalny / PKB realny) × 100 = (175 / 162) × 100 ≈ 108,02. Wartość 100,00 występuje wyłącznie w roku bazowym (1990), a 116,67 to błędny stosunek 175/150 × 100.',
      trapNote:
        'Zapamiętaj układ ułamka: w liczniku ZAWSZE PKB nominalny (ceny bieżące), w mianowniku PKB realny (ceny stałe)!',
    },
    {
      id: 'abcd-macro-3',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajd 8',
      question:
        'Przeliczanie wartości nominalnej (w cenach bieżących) na wartość realną (w cenach stałych) poprzez podzielenie jej przez indeks ogólnego poziomu cen (deflator) nazywamy:',
      options: [
        'amortyzacją kapitału.',
        'deflowaniem.',
        'indeksacją płac.',
        'agregacją zasobową.',
      ],
      correctIndex: 1,
      explanation:
        'Deflowanie usuwa wpływ zmian cen (inflacji) ze strumienia pieniężnego: PKB_real = (PKB_nom / Deflator PKB) × 100.',
    },
    {
      id: 'abcd-macro-4',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Wykład 4 • PKB Slajdy 15–16',
      question:
        'W rozszerzonym modelu ruchu okrężnego (z sektorem finansowym, państwem i zagranicą) odpływami (wyciekami) ze strumienia dochodów i wydatków są:',
      options: [
        'inwestycje (I), wydatki rządowe (G) oraz eksport (Ex).',
        'konsumpcja (C), inwestycje (I) oraz eksport (Ex).',
        'wyłącznie płatności transferowe i amortyzacja.',
        'oszczędności (S), podatki (T) oraz wydatki na import (Im).',
      ],
      correctIndex: 3,
      explanation:
        'Odpływy (S, T, Im) zmniejszają bieżący strumień popytu krajowego, natomiast dopływy (zastrzyki: I, G, Ex) ponownie wprowadzają popyt do obiegu gospodarczego.',
      trapNote:
        'Łatwy mnemotechniczny podział ze Slajdu 15: Odpływy = S, T, Im; Dopływy = I, G, Ex!',
    },
    {
      id: 'abcd-macro-5',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Wykład 4 • PKB Slajd 19 (diagram chleba)',
      question:
        'W przykładzie ze Slajdu 19 kolejne etapy produkcji chleba przyniosły wpływy ze sprzedaży: ziarno 2 zł, rolnik (zboże) 3 zł, młynarz (mąka) 4 zł, piekarz (chleb) 8 zł, sklep (sprzedaż konsumentowi) 10 zł. Jaki jest wkład tego chleba do PKB?',
      options: [
        '27 zł (suma wszystkich faktur: 2 + 3 + 4 + 8 + 10).',
        '17 zł.',
        '10 zł (wartość dobra finalnego = suma wartości dodanych: 2 + 1 + 1 + 4 + 2).',
        '8 zł (wartość w piekarni bez marży detalicznej sklepu).',
      ],
      correctIndex: 2,
      explanation:
        'Aby uniknąć wielokrotnego liczenia dóbr pośrednich, do PKB wliczamy wyłącznie wartość dobra finalnego (10 zł) lub równoważnie sumę wartości dodanych na każdym etapie (2 + 1 + 1 + 4 + 2 = 10 zł). Marża sklepu (2 zł) jest usługą handlową i wchodzi do PKB.',
      trapNote:
        '27 zł to podręcznikowy błąd podwójnego liczenia! Identycznie na Slajdzie 20 z samochodem: PKB = 4800, a NIE suma obrotów 10 100!',
    },
    {
      id: 'abcd-macro-6',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Wykład 4 • PKB Slajdy 21–22',
      question:
        'Która z poniższych transakcji JEST wliczana do bieżącego PKB Polski?',
      options: [
        'Zakup nowo wybudowanego mieszkania od dewelopera oraz prowizja agencji za pośrednictwo przy sprzedaży starego domu.',
        'Wypłata emerytury z ZUS oraz zasiłku dla bezrobotnych.',
        'Zakup 5-letniego używanego samochodu od sąsiada.',
        'Zakup pakietu akcji spółki energetycznej na Giełdzie Papierów Wartościowych.',
      ],
      correctIndex: 0,
      explanation:
        'Nowe mieszkanie to bieżąca produkcja (inwestycje brutto I), a prowizja pośrednika to bieżąco wykonana usługa. Płatności transferowe (emerytury, zasiłki), dobra używane (już raz policzone w roku produkcji) oraz obrót akcjami (transakcja finansowa) NIE wchodzą do PKB.',
    },
    {
      id: 'abcd-macro-7',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Wykład 4 • PKB Slajd 22',
      question:
        'W metodzie wydatkowej PKB = C + I + G + NX zakup nowo wybudowanego domu lub mieszkania przez gospodarstwo domowe zalicza się do kategorii:',
      options: [
        'wydatków konsumpcyjnych gospodarstw domowych (C).',
        'inwestycji brutto (I).',
        'wydatków rządowych (G).',
        'eksportu netto (NX).',
      ],
      correctIndex: 1,
      explanation:
        'Zgodnie ze Slajdem 22 kategoria C obejmuje wydatki gospodarstw domowych na dobra i usługi Z WYJĄTKIEM zakupu nowych domów i mieszkań — te wchodzą do inwestycji brutto (I) obok maszyn, urządzeń, budynków firm i przyrostu zapasów.',
      trapNote:
        'Jedna z najczęściej sprawdzanych pułapek! Nowe mieszkanie = I (inwestycje), a zakup akcji na giełdzie ≠ I (nie wchodzi do PKB w ogóle)!',
    },
    {
      id: 'abcd-macro-8',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Mankiw & Taylor • Metoda wydatkowa',
      question:
        'Polskie gospodarstwo domowe kupuje nowy samochód wyprodukowany w całości w Niemczech za 150 tys. zł. Jak ta transakcja wpływa na PKB Polski?',
      options: [
        'Zwiększa PKB Polski o 150 tys. zł, ponieważ rośnie konsumpcja C.',
        'Zmniejsza PKB Polski o 150 tys. zł, ponieważ rośnie import Im.',
        'Zwiększa inwestycje I Polski o 150 tys. zł.',
        'Nie zmienia PKB Polski, ponieważ wzrost konsumpcji (+150 tys. w C) zostaje dokładnie zniesiony wzrostem importu (−150 tys. w NX = Ex − Im).',
      ],
      correctIndex: 3,
      explanation:
        'Samochód został wyprodukowany w Niemczech, więc powiększa niemiecki PKB, a nie polski. W polskim rachunku wydatkowym +150 w C oraz −150 w NX dają łączny efekt równy 0.',
    },
    {
      id: 'abcd-macro-9',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Wykład 4 • PKB Slajdy 23 i 28',
      question:
        'Jak prawidłowo przeliczyć PKB w cenach rynkowych (PKB_cr) na PKB w cenach czynników produkcji (PKB_ccp)?',
      options: [
        'PKB_ccp = PKB_cr + podatki pośrednie (Te) − subsydia (Su).',
        'PKB_ccp = PKB_cr − amortyzacja (Am).',
        'PKB_ccp = PKB_cr − podatki pośrednie (Te) + subsydia (Su).',
        'PKB_ccp = PKB_cr + dochody netto z zagranicy (Dw).',
      ],
      correctIndex: 2,
      explanation:
        'Ceny rynkowe płacone przez klientów zawierają podatki pośrednie (VAT, akcyzę) i są obniżone o subsydia. Aby otrzymać wynagrodzenie samych czynników produkcji, musimy podatki pośrednie ODJĄĆ, a subsydia DODAĆ (na Slajdzie 28: 547 − 65 + 10 = 492).',
      trapNote:
        'Nie odwracaj znaków przy Te i Su! Podatki pośrednie zawyżają cenę rynkową ponad koszt czynników, więc je ODEJMUJEMY.',
    },
    {
      id: 'abcd-macro-10',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Wykład 4 • PKB Slajdy 24–25',
      question:
        'Polska programistka pracuje przez cały rok na kontrakcie w firmie zlokalizowanej w Monachium (Niemcy). Wartość wytworzonej przez nią pracy jest wliczana do:',
      options: [
        'PKB Niemiec (kryterium terytorialne) oraz PNB Polski (kryterium własnościowe / narodowe).',
        'PKB Polski oraz PNB Niemiec.',
        'wyłącznie PKB Polski.',
        'żadnego z tych wskaźników, ponieważ to usługa niematerialna.',
      ],
      correctIndex: 0,
      explanation:
        'PKB mierzy wszystko wytworzone NA TERYTORIUM kraju (więc w Niemczech), natomiast PNB = PKB + Dw mierzy produkcję czynników należących do obywateli/rezydentów danego kraju niezależnie od miejsca (więc Polski).',
    },
    {
      id: 'abcd-macro-11',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Wykład 4 • PKB Slajd 26',
      question:
        'Jaką wielkość należy odjąć od Produktu Narodowego Brutto (PNB), aby otrzymać Produkt Narodowy Netto (PNN), a także od inwestycji brutto, aby otrzymać inwestycje netto?',
      options: [
        'Podatki pośrednie (Te).',
        'Amortyzację (Am — zużycie kapitału trwałego).',
        'Wartość importu (Im).',
        'Płatności transferowe z budżetu państwa.',
      ],
      correctIndex: 1,
      explanation:
        'Różnicą między każdą kategorią „brutto” a „netto” w rachunku narodowym jest amortyzacja (ekonomiczne zużycie maszyn, budynków i urządzeń): PNN = PNB − Am oraz I_netto = I_brutto − Am.',
    },
    {
      id: 'abcd-macro-12',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      sourceNote: 'Wykład 4 • PKB Slajd 27',
      question:
        'Zgodnie ze schematem rachunku dochodu narodowego ze Slajdu 27, Rozporządzalne Dochody Osobiste (RDO — kwota pozostająca gospodarstwom domowym na konsumpcję C i oszczędności S) oblicza się jako:',
      options: [
        'PKB_cr − amortyzacja − podatki pośrednie.',
        'DO + podatki bezpośrednie od gospodarstw domowych (PIT) − transfery.',
        'PNN + podatki CIT + zyski niepodzielone.',
        'DO − podatki bezpośrednie od gospodarstw domowych (PIT) + płatności transferowe.',
      ],
      correctIndex: 3,
      explanation:
        'Ze Slajdu 27: DO = PNN − podatki bezpośrednie firm (CIT) − zyski niepodzielone, a następnie RDO = DO − podatki bezpośrednie gospodarstw domowych (PIT) + płatności transferowe = C + S.',
      trapNote:
        'Pamiętaj, że podatki PIT ZMNIEJSZAJĄ dochód do dyspozycji („na rękę”), a transfery (emerytury, zasiłki) go ZWIĘKSZAJĄ!',
    },
    {
      id: 'abcd-macro-13',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajd 29',
      question:
        'Dlaczego PKB per capita jest niedoskonałą miarą dobrobytu społecznego?',
      options: [
        'Nie uwzględnia szarej strefy ani nieodpłatnej pracy w gospodarstwie domowym (np. opieki nad dziećmi).',
        'Nie uwzględnia wartości czasu wolnego (wypoczynku).',
        'Nie odejmuje negatywnych efektów zewnętrznych produkcji (np. degradacji środowiska) ani nie pokazuje nierówności dochodowych.',
        'Wszystkie powyższe odpowiedzi są prawdziwe.',
      ],
      correctIndex: 3,
      explanation:
        'PKB mierzy wyłącznie zarejestrowaną wartość rynkową produkcji — pomija czas wolny, pracę domową, szarą strefę, rozkład dochodów i koszty ekologiczne (wydatki na leczenie chorób ze smogu wręcz podnoszą PKB!).',
    },
    {
      id: 'abcd-macro-14',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajd 52',
      question:
        'Miernik MEW / NEW (Dobrobyt Ekonomiczny Netto — W.D. Nordhaus, J. Tobin, P.A. Samuelson) modyfikuje tradycyjny PKB/PNB poprzez:',
      options: [
        'dodanie wartości czasu wolnego i pracy nieodpłatnej oraz odjęcie kosztów degradacji środowiska i uciążliwości urbanizacji.',
        'wyłącznie przeliczenie PKB po bieżącym kursie dolara amerykańskiego.',
        'odjęcie wydatków rządowych G oraz eksportu Ex.',
        'zastąpienie PKB wskaźnikiem bezrobocia rejestrowanego.',
      ],
      correctIndex: 0,
      explanation:
        'MEW (Measure of Economic Welfare) / NEW (Net Economic Welfare) próbuje zbliżyć rachunek narodowy do realnego dobrobytu, korygując PKB w górę o nieodpłatne korzyści (czas wolny, praca domowa) i w dół o koszty ekologiczne oraz uciążliwości życia.',
    },
    {
      id: 'abcd-macro-15',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajdy 41, 50, 53',
      question:
        'Dlaczego w międzynarodowych porównaniach poziomu życia używa się PKB per capita według PPP (Parytetu Siły Nabywczej) oraz uzupełniająco wskaźnika AIC (rzeczywistej konsumpcji indywidualnej)?',
      options: [
        'Ponieważ PPP pomija sektor usług, a uwzględnia wyłącznie przemysł ciężki.',
        'Ponieważ PPP koryguje różnice w poziomach cen i kosztach utrzymania między krajami, a AIC chroni przed zniekształceniem PKB przez siedziby wielkich korporacji (jak w Irlandii czy Luksemburgu).',
        'Ponieważ kurs rynkowy walut zawsze zaniża PKB krajów najbogatszych (np. Szwajcarii).',
        'Ponieważ PPP liczy się wyłącznie w cenach bieżących bez uwzględnienia liczby ludności.',
      ],
      correctIndex: 1,
      explanation:
        'PPP (dolary międzynarodowe / PPS w UE — w 2025 r. Polska osiągnęła 81% średniej UE) eliminuje zniekształcenia wynikające z różnych poziomów cen. AIC per capita (Slajd 41) pokazuje faktyczną konsumpcję gospodarstw domowych, lepiej oddając standard życia w krajach takich jak Irlandia czy Luksemburg.',
    },
    {
      id: 'abcd-macro-16',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajdy 58–60',
      question:
        'Wskaźnik Rozwoju Społecznego HDI (M. ul Haq i A. Sen, ONZ 1990) ocenia kraje w 3 wymiarach (zdrowie, wiedza, standard życia). Co zmieniło się w metodologii obliczania HDI po 2010 roku?',
      options: [
        'Usunięto wymiar zdrowia i zastąpiono go stopą inflacji CPI.',
        'Zastąpiono średnią geometryczną średnią arytmetyczną i dodano ślad ekologiczny.',
        'PKB per capita zastąpiono przez DNB (GNI) per capita wg PPP, a wskaźnik analfabetyzmu i skolaryzacji — przez średnią i oczekiwaną liczbę lat edukacji (przy agregacji średnią geometryczną).',
        'Metodologia HDI nie uległa żadnym zmianom od 1990 roku.',
      ],
      correctIndex: 2,
      explanation:
        'Od 2010 r. HDI łączy średnią geometryczną 3 indeksów: (1) oczekiwanej długości życia, (2) średniej liczby lat nauki dorosłych (25+) oraz oczekiwanej liczby lat nauki dzieci, (3) DNB (GNI) per capita w USD wg PPP. Polska w 2025 r. (Slajd 70) osiągnęła bardzo wysoki wynik 0,906.',
      trapNote:
        'Bardzo częste pytanie wykładowe ze Slajdów 59–60: przed 2010 = PKB + analfabetyzm/skolaryzacja; po 2010 = DNB (GNI) + średnie i oczekiwane lata edukacji!',
    },
    {
      id: 'abcd-macro-17',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajdy 71–73',
      question:
        'W uproszczonym wzorze na Indeks Szczęśliwej Planety (HPI — opracowanym przez NEF w 2006 r.) wielkością stojącą w MIANOWNIKU (obniżającą wynik kraju, im jest wyższa) jest:',
      options: [
        'oczekiwana długość życia.',
        'odczuwalny dobrostan (zadowolenie z życia).',
        'PKB nominalny per capita.',
        'ślad ekologiczny.',
      ],
      correctIndex: 3,
      explanation:
        'HPI = (odczuwalny dobrostan × oczekiwana długość życia) / ślad ekologiczny. Wskaźnik premiuje kraje osiągające długie i szczęśliwe życie przy możliwie najmniejszym obciążeniu zasobów planety.',
    },
    {
      id: 'abcd-macro-18',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 1 • Slajd 65 (10. zasada ekonomii)',
      question:
        'Krótkookresowa krzywa Phillipsa (A.W. Phillips) przedstawia odwrotną zależność (kompromis) między:',
      options: [
        'stopą inflacji a stopą bezrobocia (podczas gdy pionowa linia NAIRU oznacza naturalną stopę bezrobocia w długim okresie).',
        'ceną dobra a wielkością popytu na to dobro.',
        'PKB nominalnym a PKB realnym.',
        'eksportem a importem.',
      ],
      correctIndex: 0,
      explanation:
        '10. zasada ekonomii Mankiwa & Taylora: w krótkim okresie spadek bezrobocia wiąże się ze wzrostem inflacji i odwrotnie. W długim okresie ten kompromis zanika — gospodarka powraca do pionowej linii NAIRU (nieprzyspieszającej inflacji stopy bezrobocia).',
    },
    {
      id: 'abcd-macro-19',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajd 81',
      question:
        'Czym różni się ujęcie keynesistowskie od ujęcia neoklasycznego w wyjaśnianiu determinant poziomu dochodu narodowego?',
      options: [
        'Ujęcie keynesistowskie uznaje, że o produkcji zawsze decyduje wyłącznie podaż zasobów naturalnych.',
        'Ujęcie neoklasyczne kładzie nacisk na stronę podażową (zasoby czynników i ich efektywność), natomiast ujęcie keynesistowskie na stronę popytową (wielkość agregatowego popytu AD w krótkim okresie).',
        'Ujęcie neoklasyczne neguje istnienie bezrobocia naturalnego i cen rynkowych.',
        'Oba ujęcia odrzucają rolę popytu i podaży w kształtowaniu PKB.',
      ],
      correctIndex: 1,
      explanation:
        'W ujęciu neoklasycznym (podażowym) elastyczne ceny i płace kierują gospodarkę ku produkcji potencjalnej Y*. W ujęciu keynesistowskim (popytowym) przy sztywnych cenach w krótkim okresie o faktycznej produkcji Y decyduje agregatowy popyt AD.',
    },
    {
      id: 'abcd-macro-20',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajdy 84–85',
      question:
        'Na wykresie 45° (krzyż keynesowski) gospodarka wytwarza obecnie produkcję Y przewyższającą planowane wydatki agregatowe (Y > AD). Jak zareagują przedsiębiorstwa?',
      options: [
        'Wystąpi niedobór produkcji i spadek zapasów, więc firmy zwiększą produkcję.',
        'Gospodarka znajduje się już w punkcie równowagi makroekonomicznej.',
        'Wystąpi nadwyżka produkcji i nieplanowany wzrost zapasów w magazynach, więc firmy ograniczą produkcję aż do poziomu równowagi Ye.',
        'Automatycznie podwoi się produkcja potencjalna Y*.',
      ],
      correctIndex: 2,
      explanation:
        'Gdy Y > AD, firmy produkują więcej niż nabywcy zamierzają kupić — niesprzedane towary odkładają się jako nieplanowany przyrost zapasów. To sygnał do cięcia produkcji w dół aż do przecięcia AD z linią 45° (AD = Y).',
    },
    {
      id: 'abcd-macro-21',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajd 87',
      question:
        'W otwartym modelu makroekonomicznym ze Slajdu 87 krańcowa skłonność do konsumpcji wynosi ksk = 0,8, stopa podatkowa t = 0,25, a krańcowa skłonność do importu ksi = 0,2. Ile wynosi mnożnik wydatków autonomicznych m?',
      options: [
        'm = 5,00 (jak w prostej gospodarce zamkniętej bez podatków).',
        'm = 0,60.',
        'm = 2,50.',
        'm = 5/3 ≈ 1,67 (ponieważ podatki i import osłabiają działanie mnożnika).',
      ],
      correctIndex: 3,
      explanation:
        'Mnożnik gospodarki otwartej z podatkiem dochodowym wynosi m = 1 / [1 − ksk·(1 − t) + ksi] = 1 / [1 − 0,8·0,75 + 0,2] = 1 / (1 − 0,6 + 0,2) = 1 / 0,6 = 5/3 ≈ 1,67. Wzrost eksportu o +24 podnosi więc Y aż o +40.',
      trapNote:
        'Pamiętaj o PLUSIE przed ksi w mianowniku mnożnika (import to odpływ, który zmniejsza mnożnik)!',
    },
    {
      id: 'abcd-macro-22',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      sourceNote: 'Wykład 4 • PKB Slajd 90',
      question:
        'Według klasycznego modelu długookresowego wzrostu gospodarczego Solowa–Swana (1956) oraz współczesnej teorii wzrostu (Slajd 90), długofalowy wzrost realnego PKB zależy przede wszystkim od:',
      options: [
        'kapitału ludzkiego, kapitału rzeczowego, zasobu pracy, wiedzy technologicznej oraz jakości instytucji i stabilności makroekonomicznej.',
        'zwiększania podaży pieniądza przez bank centralny w celu wywołania wysokiej inflacji.',
        'całkowitego zamknięcia granic przed handlem zagranicznym i inwestycjami.',
        'zastąpienia inwestycji prywatnych jednorazowymi transferami konsumpcyjnymi.',
      ],
      correctIndex: 0,
      explanation:
        'Model Solowa–Swana (1956) wskazuje na akumulację kapitału rzeczowego, kapitału ludzkiego, zasób pracy i postęp technologiczny, a współczesne rozszerzenia dodają jakość instytucji (prawa własności, praworządność), stabilność makroekonomiczną i otwartość handlową.',
    },
  ],

  sentenceCompletions: [
    // =========================================================================
    // MIKROEKONOMIA (16 zdań do dokończenia)
    // =========================================================================
    {
      id: 'sc-micro-1',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      promptBefore:
        'Zasada racjonalnego gospodarowania w wariancie minimalizacji nakładu polega na osiągnięciu danego efektu przy',
      blankAnswer: 'jak najmniejszym nakładzie środków',
      promptAfter:
        ', natomiast w wariancie maksymalizacji efektu — na osiągnięciu jak największego efektu przy danym nakładzie środków.',
      hint: 'Pamiętaj, że jedna wielkość jest zawsze ustalona (dana), a drugą optymalizujemy.',
      fullExplanation:
        'Wykład 1, Slajd 34: zasada gospodarności nie pozwala jednocześnie minimalizować nakładu i maksymalizować efektu — zawsze optymalizujemy jeden parametr przy ustalonym drugim.',
    },
    {
      id: 'sc-micro-2',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      promptBefore:
        'Krzywa transformacji (PPF) ma kształt wklęsły względem początku układu współrzędnych, ponieważ czynniki produkcji nie są doskonałymi substytutami, co wywołuje',
      blankAnswer: 'rosnący koszt alternatywny',
      promptAfter: 'zwiększania produkcji jednego dobra kosztem drugiego.',
      hint: 'Co dzieje się z kosztem utraconych możliwości w miarę przesuwania się wzdłuż PPF?',
      fullExplanation:
        'Wykład 1, Slajdy 40–41: przenoszenie coraz mniej wyspecjalizowanych zasobów (np. piekarzy do produkcji maszyn) wymaga rezygnacji z coraz większej ilości pierwszego dobra. Przy stałym koszcie alternatywnym PPF jest linią prostą.',
    },
    {
      id: 'sc-micro-3',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      promptBefore: 'Koszt alternatywny podjęcia danej decyzji ekonomicznej to',
      blankAnswer: 'wartość najlepszej utraconej (niepodjętej) alternatywy',
      promptAfter: ', z której rezygnujemy, dokonując wyboru.',
      hint: 'Nie chodzi o sumę wszystkich możliwości, lecz o tę jedną najlepszą z odrzuconych.',
      fullExplanation:
        '2. zasada ekonomii Mankiwa & Taylora (Slajd 53): prawdziwym kosztem każdego działania jest to, z czego trzeba było zrezygnować, aby je zrealizować.',
    },
    {
      id: 'sc-micro-4',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      promptBefore:
        'Prawo popytu (Alfreda Marshalla) głosi, że przy założeniu ceteris paribus między ceną dobra a wielkością popytu zachodzi zależność odwrotna: wraz ze wzrostem ceny',
      blankAnswer: 'wielkość popytu maleje (a wraz ze spadkiem ceny — rośnie)',
      promptAfter: '.',
      hint: 'Jak zachowuje się wielkość popytu, gdy cena rośnie?',
      fullExplanation:
        'Wykład 1, Slajd 81: ujemne nachylenie krzywej popytu wynika z łącznego działania efektu substytucyjnego i efektu dochodowego zmiany ceny.',
    },
    {
      id: 'sc-micro-5',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      promptBefore:
        'W paradoksie Veblena popyt na dobra luksusowe maleje wraz ze spadkiem ich ceny (i rośnie przy wzroście ceny), ponieważ wysoka cena służy',
      blankAnswer: 'demonstracji statusu materialnego (efekt snobizmu)',
      promptAfter: '.',
      hint: 'Jaki efekt psychologiczny napędza popyt na dobra prestiżowe?',
      fullExplanation:
        'Wykład 1, Slajd 96: gdy dobra prestiżowe tanieją i stają się masowo dostępne, tracą walor ekskluzywności dla zamożnych nabywców.',
    },
    {
      id: 'sc-micro-6',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      promptBefore:
        'Cena maksymalna jest wiążąca, gdy zostanie ustalona poniżej ceny równowagi, i prowadzi do powstania',
      blankAnswer: 'trwałego niedoboru rynkowego (oraz kolejek i czarnego rynku)',
      promptAfter: '.',
      hint: 'Przy cenie poniżej równowagi Qd > Qs — jak nazywamy taką nierównowagę?',
      fullExplanation:
        'Wykład 1, Slajdy 110–111: wiążąca cena maksymalna (p_max < p_r) tworzy trwały niedobór, natomiast wiążąca cena minimalna (p_min > p_r) tworzy trwałą nadwyżkę.',
    },
    {
      id: 'sc-micro-7',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      promptBefore:
        'Popyt nazywamy nieelastycznym względem ceny, gdy wartość bezwzględna współczynnika cenowej elastyczności popytu jest',
      blankAnswer: 'mniejsza od jedności (|E_dp| < 1, czyli −1 < E_dp < 0)',
      promptAfter: ', co oznacza, że procentowa zmiana ilości jest mniejsza od procentowej zmiany ceny.',
      hint: 'Porównaj |E_dp| z liczbą 1 (pamiętaj też o zapisie E < 0!).',
      fullExplanation:
        'Wykład 1, Slajdy 119–120 i E_08: dla popytu nieelastycznego konsumenci reagują słabo na zmianę ceny (np. paliwo, leki), więc wzrost ceny podnosi przychód całkowity TR.',
    },
    {
      id: 'sc-micro-8',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      promptBefore:
        'Gdy popyt na dobro jest wysoce elastyczny (|E_dp| > 1), obniżka jego ceny powoduje, że łączny przychód sprzedawców (TR)',
      blankAnswer: 'rośnie',
      promptAfter:
        ', ponieważ procentowy wzrost liczby sprzedanych sztuk przewyższa procentowy spadek ceny.',
      hint: 'Przypomnij sobie zadanie 5e o biletach klubu piłkarskiego!',
      fullExplanation:
        'Przy |E_dp| > 1 ruch ceny i zmiana TR mają przeciwne kierunki: P↓ ⇒ TR↑, P↑ ⇒ TR↓. Przychód całkowity osiąga maksimum przy |E_dp| = 1 (MR = 0).',
    },
    {
      id: 'sc-micro-9',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      promptBefore:
        'Dwa dobra są dobrami komplementarnymi, jeśli ich mieszana (krzyżowa) elastyczność popytu jest',
      blankAnswer: 'ujemna (E_xy < 0)',
      promptAfter: ', czyli wzrost ceny jednego z nich zmniejsza popyt na drugie dobro.',
      hint: 'Jaki znak ma E_xy dla dóbr konsumowanych w parze (np. drukarka i tusz)?',
      fullExplanation:
        'Wykład 1, Slajd 131: E_xy > 0 oznacza substytuty, E_xy < 0 oznacza dobra komplementarne, a E_xy = 0 oznacza dobra niezależne.',
    },
    {
      id: 'sc-micro-10',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      promptBefore:
        'Prawo Engla głosi, że wraz ze wzrostem dochodu gospodarstwa domowego wydatki na żywność rosną kwotowo, ale',
      blankAnswer: 'ich udział procentowy w strukturze budżetu domowego maleje',
      promptAfter: ' (dla żywności zachodzi 0 < E_I < 1).',
      hint: 'Co dzieje się z procentowym udziałem wydatków na jedzenie, gdy stajemy się bogatsi?',
      fullExplanation:
        'Wykład 1, Slajd 136: żołądek ma ograniczoną pojemność, więc wraz ze wzrostem zamożności konsumenci przeznaczają coraz większą część dochodu na dobra wyższego rzędu i usługi.',
    },
    {
      id: 'sc-micro-11',
      track: 'micro',
      topicSlug: 'teoria-konsumenta',
      promptBefore:
        'Pierwsze prawo Gossena (prawo malejącej użyteczności krańcowej) mówi, że w miarę zwiększania konsumpcji danego dobra',
      blankAnswer: 'użyteczność krańcowa (MU) każdej kolejnej jego jednostki maleje',
      promptAfter: ' (aż do osiągnięcia maksimum TU w punkcie MU = 0).',
      hint: 'Pomyśl o pierwszej i piątej butelce wody ze Slajdu 13.',
      fullExplanation:
        'Wykład 2, Slajd 13: każda kolejna spożyta porcja tego samego dobra przynosi mniejszy przyrost satysfakcji niż poprzednia.',
    },
    {
      id: 'sc-micro-12',
      track: 'micro',
      topicSlug: 'teoria-konsumenta',
      promptBefore:
        'Zgodnie z drugim prawem Gossena konsument maksymalizuje użyteczność całkowitą przy danym budżecie wtedy, gdy',
      blankAnswer: 'stosunki użyteczności krańcowych do cen wszystkich kupowanych dóbr są sobie równe (MUx/px = MUy/py)',
      promptAfter: ' (co graficznie odpowiada punktowi styczności krzywej obojętności z linią budżetową).',
      hint: 'Zrównaj satysfakcję z „ostatniej złotówki” wydanej na dobro X i dobro Y.',
      fullExplanation:
        'Wykład 2, Slajd 24: warunek MRS = px/py jest równoważny MUx/px = MUy/py.',
    },
    {
      id: 'sc-micro-13',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      promptBefore:
        'Prawo malejących przychodów krańcowych działa wyłącznie w okresie krótkim (gdy co najmniej jeden czynnik produkcji jest stały) i oznacza, że zwiększając nakłady czynnika zmiennego od pewnego momentu',
      blankAnswer: 'uzyskuje się coraz mniejsze przyrosty produktu całkowitego (produkt krańcowy MP maleje)',
      promptAfter: '.',
      hint: 'Co dzieje się z produktem krańcowym MP po przekroczeniu punktu przegięcia A?',
      fullExplanation:
        'Wykład 3, Slajdy 33 i 53: w długim okresie wszystkie czynniki są zmienne, więc prawo malejących przychodów nie działa (zamiast niego analizujemy korzyści i niekorzyści skali).',
    },
    {
      id: 'sc-micro-14',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      promptBefore:
        'Krzywa kosztu krańcowego (MC) przecina krzywe kosztu przeciętnego zmiennego (AVC) oraz przeciętnego całkowitego (ATC) od dołu w',
      blankAnswer: 'ich punktach minimum',
      promptAfter: ' (gdzie min ATC wyznacza optimum technologiczne OT, a min AVC — cenę zamknięcia cz).',
      hint: 'Gdy koszt ostatniej sztuki jest niższy niż średnia, średnia spada; gdy wyższy — rośnie.',
      fullExplanation:
        'Wykład 3, Slajd 52: to czysta zależność matematyczna między wielkością krańcową a przeciętną (identycznie MP przecina AP od góry w maksimum AP).',
    },
    {
      id: 'sc-micro-15',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      promptBefore:
        'W krótkim okresie przedsiębiorstwo ponoszące stratę ekonomiczną powinno kontynuować produkcję tak długo, jak długo cena rynkowa jest',
      blankAnswer: 'wyższa od minimum kosztu przeciętnego zmiennego (p > min AVC)',
      promptAfter: ', ponieważ utarg pokrywa wówczas wszystkie koszty zmienne oraz część kosztów stałych.',
      hint: 'Jak nazywa się próg wyznaczany przez min AVC (granica racjonalnych strat)?',
      fullExplanation:
        'Wykład 3, Slajdy 67–68: przy p < min AVC zamknięcie firmy ogranicza stratę do samych kosztów stałych FC; przy p > min AVC strata z produkcji jest mniejsza niż FC.',
    },
    {
      id: 'sc-micro-16',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      promptBefore:
        'Społeczny koszt monopolu (bezpowrotna strata społeczna, DWL) powstaje dlatego, że w porównaniu z konkurencją doskonałą monopolista',
      blankAnswer: 'ogranicza wielkość produkcji (Qm < Q_eff) i ustala wyższą cenę powyżej kosztu krańcowego (Pm > MC)',
      promptAfter: ', wskutek czego nie dochodzi do części wzajemnie korzystnych transakcji.',
      hint: 'Porównaj ilość Qm i cenę Pm z poziomem efektywnym P = MC.',
      fullExplanation:
        '8.11 monopol.docx (Q177–Q180) i Wykład 3, Slajd 79: geometrycznie DWL to pole trójkąta między krzywą popytu D a krzywą MC na odcinku od Qm do Q_eff.',
    },

    // =========================================================================
    // MAKROEKONOMIA (14 zdań do dokończenia — zsynchronizowane z pres_4_pkb.md)
    // =========================================================================
    {
      id: 'sc-macro-1',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      promptBefore:
        'Zasoby (np. zatrudnienie, bezrobocie, majątek) pokazują stan wielkości ekonomicznej w określonym momencie czasu, natomiast strumienie (np. PKB, inwestycje, dochód) mierzą ją w',
      blankAnswer: 'określonym przedziale czasu (np. w ciągu roku lub kwartału)',
      promptAfter: '.',
      hint: 'Zasób to „zdjęcie”, a strumień to „film” — czego wymaga pomiar strumienia?',
      fullExplanation:
        'Wykład 4, Slajdy 4–5: przy agregacji nie wolno sumować zasobów ze strumieniami, a agregowane strumienie muszą obejmować identyczny przedział czasu.',
    },
    {
      id: 'sc-macro-2',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      promptBefore: 'Produkt Krajowy Brutto (PKB) to łączna wartość rynkowa wszystkich',
      blankAnswer: 'dóbr i usług finalnych wytworzonych na terytorium danego kraju w określonym czasie',
      promptAfter: ' (zazwyczaj w ciągu jednego roku).',
      hint: 'Wymień 3 brakujące filary obok „wartości rynkowej”: jakie dobra, gdzie, kiedy?',
      fullExplanation:
        'Wykład 4, Slajd 10: to jedna z najważniejszych definicji egzaminacyjnych — pominięcie słowa „finalnych” lub kryterium terytorialnego obniża ocenę.',
    },
    {
      id: 'sc-macro-3',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      promptBefore:
        'PKB realny oblicza się poprzez wycenę bieżącej produkcji według cen stałych z wybranego roku bazowego, dzięki czemu eliminuje się wpływ',
      blankAnswer: 'zmian ogólnego poziomu cen (inflacji)',
      promptAfter: ' i mierzy czystą zmianę fizycznego wolumenu produkcji.',
      hint: 'Co zniekształca porównywanie PKB nominalnego między różnymi latami?',
      fullExplanation:
        'Wykład 4, Slajdy 7–8: porównywanie samego PKB nominalnego prowadzi do złudzenia wzrostu, gdy „produkuje się drożej, a nie więcej”.',
    },
    {
      id: 'sc-macro-4',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      promptBefore: 'Deflator PKB oblicza się jako stosunek',
      blankAnswer: 'PKB nominalnego do PKB realnego pomnożony przez 100',
      promptAfter: ', przy czym w roku bazowym jego wartość wynosi zawsze dokładnie 100.',
      hint: 'Co dzielimy przez co we wzorze na deflator PKB?',
      fullExplanation:
        'Wykład 4, Slajd 8: Deflator PKB = (PKB_nom / PKB_real) × 100. Jest to szeroki wskaźnik poziomu cen obejmujący wszystkie dobra i usługi wytwarzane w kraju.',
    },
    {
      id: 'sc-macro-5',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      promptBefore:
        'W rozszerzonym modelu ruchu okrężnego odpływami ze strumienia są oszczędności (S), podatki (T) i import (Im), natomiast dopływami są',
      blankAnswer: 'inwestycje (I), wydatki rządowe (G) oraz eksport (Ex)',
      promptAfter: '.',
      hint: 'Jakie trzy wielkości (zastrzyki) wracają do obiegu z banków, budżetu i zagranicy?',
      fullExplanation:
        'Wykład 4, Slajdy 15–16: równowaga makroekonomiczna wymaga, aby łączne odpływy (S + T + Im) równoważyły łączne dopływy (I + G + Ex).',
    },
    {
      id: 'sc-macro-6',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      promptBefore:
        'Aby uniknąć podwójnego liczenia dóbr pośrednich w metodzie produkcyjnej PKB, sumuje się wyłącznie wartość dóbr finalnych albo sumę',
      blankAnswer: 'wartości dodanych wytworzonych na wszystkich etapach produkcji',
      promptAfter: '.',
      hint: 'Wartość sprzedaży minus koszty surowców i dóbr pośrednich to...',
      fullExplanation:
        'Wykład 4, Slajdy 18–20: w przykładzie chleba suma wartości dodanych wynosi 2 + 1 + 1 + 4 + 2 = 10 zł (= cena finalna w sklepie), a nie 27 zł.',
    },
    {
      id: 'sc-macro-7',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      promptBefore:
        'Aby przejść od PKB w cenach rynkowych (PKB_cr) do PKB w cenach czynników produkcji (PKB_ccp), należy od PKB_cr',
      blankAnswer: 'odjąć podatki pośrednie (Te) i dodać subsydia (Su)',
      promptAfter: '.',
      hint: 'Ceny rynkowe są zawyżone przez VAT/akcyzę i obniżone przez dotacje państwa.',
      fullExplanation:
        'Wykład 4, Slajd 23: PKB_ccp = PKB_cr − Te + Su. Wartość ta odpowiada PKB obliczonemu metodą sumowania dochodów czynników produkcji.',
    },
    {
      id: 'sc-macro-8',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      promptBefore:
        'Aby przejść od PKB do PNB, należy dodać dochody netto z tytułu własności za granicą (Dw), a aby przejść od PNB do PNN (Dochodu Narodowego), należy odjąć',
      blankAnswer: 'amortyzację (Am — zużycie kapitału trwałego)',
      promptAfter: '.',
      hint: 'Co odróżnia każdą kategorię „brutto” od kategorii „netto”?',
      fullExplanation:
        'Wykład 4, Slajdy 24–26: PNB = PKB + Dw (kryterium narodowe), a PNN = PNB − Am (uwzględnia zużywanie się maszyn i budynków).',
    },
    {
      id: 'sc-macro-9',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      promptBefore:
        'W metodzie wydatkowej PKB (C + I + G + NX) wydatki rządowe G NIE obejmują płatności transferowych (emerytur, rent, zasiłków), ponieważ',
      blankAnswer: 'nie są one zapłatą za bieżące wytworzenie dobra lub usługi (stanowią jedynie redystrybucję dochodu)',
      promptAfter: '.',
      hint: 'Czy za wypłatą zasiłku idzie nowo wytworzony towar albo usługa?',
      fullExplanation:
        'Wykład 4, Slajdy 21–22: transfery pojawiają się dopiero przy obliczaniu rozporządzalnych dochodów osobistych (RDO), ale same w sobie nie powiększają PKB.',
    },
    {
      id: 'sc-macro-10',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      promptBefore:
        'Wskaźnik Rozwoju Społecznego (HDI) ocenia rozwój kraju w trzech wymiarach: długie i zdrowe życie (oczekiwana długość życia), wiedza (średnia i oczekiwana liczba lat edukacji) oraz',
      blankAnswer: 'dostatni standard życia (mierzony po 2010 r. przez DNB / GNI per capita wg PPP)',
      promptAfter: '.',
      hint: 'Jaki jest trzeci filar HDI (pamiętaj o zmianie z PKB na DNB w 2010 r.)?',
      fullExplanation:
        'Wykład 4, Slajdy 58–60: HDI przyjmuje wartości od 0 do 1 i jest średnią geometryczną trzech indeksów cząstkowych.',
    },
    {
      id: 'sc-macro-11',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      promptBefore:
        'Indeks Szczęśliwej Planety (HPI, NEF 2006) oblicza się jako iloraz iloczynu odczuwalnego dobrostanu i oczekiwanej długości życia przez',
      blankAnswer: 'ślad ekologiczny',
      promptAfter: '.',
      hint: 'Jakie obciążenie środowiska stoi w mianowniku HPI?',
      fullExplanation:
        'Wykład 4, Slajdy 71–73: wysoki ślad ekologiczny obniża HPI, dlatego kraje o bardzo wysokiej konsumpcji surowców wypadają w HPI gorzej niż w PKB.',
    },
    {
      id: 'sc-macro-12',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      promptBefore:
        'Dziesiąta zasada ekonomii (krzywa Phillipsa) głosi, że w krótkim okresie społeczeństwo staje przed wymiennością (kompromisem) między',
      blankAnswer: 'inflacją a bezrobociem',
      promptAfter: ', przy czym w długim okresie gospodarka powraca do pionowej linii NAIRU.',
      hint: 'Jakie dwie zmienne makroekonomiczne znajdują się na osiach krzywej Phillipsa?',
      fullExplanation:
        'Wykład 1, Slajd 65: krótkookresowa krzywa Phillipsa ma ujemne nachylenie; NAIRU to naturalna (nieprzyspieszająca inflacji) stopa bezrobocia.',
    },
    {
      id: 'sc-macro-13',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      promptBefore:
        'W ujęciu neoklasycznym o poziomie dochodu narodowego decyduje strona podażowa (zasoby i ich efektywność), natomiast w ujęciu keynesistowskim w krótkim okresie decyduje',
      blankAnswer: 'strona popytowa — wielkość agregatowego popytu (AD)',
      promptAfter: '.',
      hint: 'Co według J.M. Keynesa ogranicza produkcję faktyczną w krótkim okresie?',
      fullExplanation:
        'Wykład 4, Slajd 81: przy niedostatecznym popycie AD produkcja faktyczna Y pozostaje poniżej produkcji potencjalnej Y*, wywołując bezrobocie i niewykorzystane moce.',
    },
    {
      id: 'sc-macro-14',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      promptBefore:
        'Równowaga makroekonomiczna na wykresie 45° (krzyżu keynesowskim) ustala się w punkcie, w którym',
      blankAnswer: 'planowane wydatki (agregatowy popyt AD) równają się wartości wytworzonej produkcji (Y)',
      promptAfter: ', a zmiana wydatków autonomicznych działa na Y poprzez mechanizm mnożnika.',
      hint: 'Jakie proste równanie spełnia każdy punkt leżący na linii 45°?',
      fullExplanation:
        'Wykład 4, Slajdy 82–87: AD = Y. W gospodarce otwartej z podatkiem dochodowym mnożnik wynosi m = 1 / [1 − ksk(1 − t) + ksi].',
    },
  ],

  flashcards: [
    // =========================================================================
    // MIKROEKONOMIA (20 fiszek definicyjnych)
    // =========================================================================
    {
      id: 'fc-micro-1',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      term: 'Funkcja poznawcza vs aplikacyjna ekonomii',
      category: 'Podstawy ekonomii',
      definition:
        'Funkcja poznawcza (teoretyczna) dostarcza wiedzy o zjawiskach, kategoriach i prawach ekonomicznych oraz ich przyczynach i skutkach. Funkcja aplikacyjna (praktyczna) dostarcza podmiotom gospodarczym wskazówek ułatwiających podejmowanie racjonalnych decyzji.',
      example: 'Słowa kluczowe: wiedza o prawidłowościach (poznawcza) vs praktyczne wskazówki decyzyjne (aplikacyjna).',
    },
    {
      id: 'fc-micro-2',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      term: 'Sąd pozytywny vs sąd normatywny',
      category: 'Podstawy ekonomii',
      definition:
        'Sąd pozytywny to bezstronne stwierdzenie oparte na faktach, możliwe do empirycznej weryfikacji („jak jest?”). Sąd normatywny to stwierdzenie wartościujące, wynikające z przekonań i zawierające zalecenia („jak być powinno?”).',
      example: 'Pozytywny: „Bezrobocie prowadzi do biedy” (nawet błędny opis faktu jest pozytywny!). Normatywny: „Państwo powinno podnieść podatki”.',
    },
    {
      id: 'fc-micro-3',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      term: 'Koszt alternatywny (utraconych możliwości)',
      category: 'Podstawy ekonomii',
      definition:
        'Wartość najlepszej utraconej (niepodjętej) alternatywy, z której musimy zrezygnować, przeznaczając ograniczone zasoby na wybrane działanie.',
      example: 'Kosztem alternatywnym studiowania dziennego są m.in. utracone zarobki, które student osiągnąłby, podejmując pracę na pełen etat.',
    },
    {
      id: 'fc-micro-4',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      term: 'Krzywa transformacji (PPF)',
      category: 'Podstawy ekonomii',
      definition:
        'Zbiór wszystkich maksymalnych kombinacji dwóch dóbr, jakie gospodarka może wytworzyć przy pełnym wykorzystaniu dostępnych zasobów i obecnej technologii. Punkty na krzywej są efektywne, pod krzywą — nieefektywne, nad krzywą — nierealne.',
      example: 'Wklęsłość PPF wynika z rosnącego kosztu alternatywnego; postęp techniczny i wzrost zasobów przesuwają PPF na zewnątrz.',
    },
    {
      id: 'fc-micro-5',
      track: 'micro',
      topicSlug: 'zagadnienia-wstepne-i-rynek',
      term: 'Popyt efektywny vs popyt potencjalny',
      category: 'Rynek i popyt',
      definition:
        'Popyt efektywny to chęć zakupu dobra poparta realną siłą nabywczą (dochodem) przy danej cenie. Popyt potencjalny to sama wola posiadania dobra przy braku wystarczających dochodów.',
      example: 'Wzrost dochodów przekształca popyt potencjalny (chęć posiadania nowego auta) w popyt efektywny.',
    },
    {
      id: 'fc-micro-6',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      term: 'Równowaga rynkowa, nadwyżka i niedobór',
      category: 'Rynek i popyt',
      definition:
        'Równowaga rynkowa to stan, w którym przy cenie równowagi P* wielkość popytu zrównuje się z wielkością podaży (Qd = Qs). Gdy P > P* (Qs > Qd), powstaje nadwyżka (rynek nabywcy); gdy P < P* (Qd > Qs), powstaje niedobór (rynek sprzedawcy).',
      formulaLatex: 'Q_d(P^*) = Q_s(P^*)',
    },
    {
      id: 'fc-micro-7',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      term: 'Paradoks Giffena, Veblena i spekulacyjny',
      category: 'Rynek i popyt',
      definition:
        'Wyjątki od prawa popytu (dodatnio nachylona krzywa D): Giffen — dobro podrzędne o dużym udziale w budżecie ubogich (efekt dochodowy > substytucyjny); Veblen — dobro luksusowe (snobizm i prestiż wysokiej ceny); spekulacyjny — zakupy w oczekiwaniu na dalszy wzrost cen (hossa).',
      example: 'Słowa kluczowe: Giffen = chleb/ziemniaki; Veblen = dobra luksusowe; spekulacyjny = giełda/nieruchomości.',
    },
    {
      id: 'fc-micro-8',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      term: 'Cenowa elastyczność popytu (metoda punktu środkowego)',
      category: 'Elastyczność',
      definition:
        'Miara wrażliwości wielkości popytu na zmianę ceny danego dobra — stosunek procentowej zmiany wielkości popytu do procentowej zmiany ceny. W konwencji wykładowej zakładamy E_dp < 0, a siłę reakcji oceniamy po |E_dp|.',
      formulaLatex:
        'E_{dp} = \\frac{\\frac{Q_2 - Q_1}{(Q_1 + Q_2)/2}}{\\frac{P_2 - P_1}{(P_1 + P_2)/2}} = \\frac{Q_2 - Q_1}{Q_1 + Q_2} \\cdot \\frac{P_1 + P_2}{P_2 - P_1}',
      example: '|E_dp| < 1 popyt nieelastyczny; |E_dp| = 1 jednostkowy; |E_dp| > 1 elastyczny.',
    },
    {
      id: 'fc-micro-9',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      term: 'Elastyczność dochodowa popytu i krzywa Engla',
      category: 'Elastyczność',
      definition:
        'Stosunek procentowej zmiany popytu do procentowej zmiany dochodu konsumenta (znak JEST kluczowy!). Krzywa Engla pokazuje graficzną zależność między dochodem I a wielkością popytu Q.',
      formulaLatex: 'E_I = \\frac{\\%\\Delta Q}{\\%\\Delta I}',
      example: 'E_I < 0: dobro podrzędne; 0 < E_I < 1: normalne podstawowe (żywność — prawo Engla); E_I > 1: luksusowe (np. filmy DVD przy wysokiej cenie).',
    },
    {
      id: 'fc-micro-10',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      term: 'Mieszana (krzyżowa) elastyczność popytu',
      category: 'Elastyczność',
      definition:
        'Stosunek procentowej zmiany wielkości popytu na dobro B do procentowej zmiany ceny innego dobra A. Znak współczynnika określa relację między dobrami.',
      formulaLatex: 'E_{B,A} = \\frac{\\%\\Delta Q_B}{\\%\\Delta P_A}',
      example: 'E_BA > 0: dobra substytucyjne (cygara i papierosy); E_BA < 0: dobra komplementarne (auto i benzyna); E_BA = 0: niezależne.',
    },
    {
      id: 'fc-micro-11',
      track: 'micro',
      topicSlug: 'teoria-konsumenta',
      term: 'Krzywa obojętności i krańcowa stopa substytucji (MRS / Kss)',
      category: 'Teoria konsumenta',
      definition:
        'Krzywa obojętności to zbiór kombinacji dwóch dóbr dających konsumentowi tę samą użyteczność całkowitą (opadająca, wypukła ku (0,0), krzywe nie przecinają się). MRS to ilość dobra Y oddawana za +1 jednostkę dobra X bez zmiany użyteczności.',
      formulaLatex: 'MRS = K_{ss} = -\\frac{\\Delta Q_y}{\\Delta Q_x} = \\frac{MU_x}{MU_y}',
      example: 'Łasuch (ceni Y) ma płaskie krzywe obojętności (niskie MRS); kinomaniak (ceni X) ma strome krzywe (wysokie MRS).',
    },
    {
      id: 'fc-micro-12',
      track: 'micro',
      topicSlug: 'teoria-konsumenta',
      term: 'Linia ograniczenia budżetowego (linia budżetu)',
      category: 'Teoria konsumenta',
      definition:
        'Zbiór wszystkich koszyków dwóch dóbr, na które konsument może sobie pozwolić, wydając dokładnie cały swój dochód (Dk / I) przy danych cenach dóbr (cx, cy).',
      formulaLatex: 'D_k = c_x Q_x + c_y Q_y \\iff Q_y = -\\frac{c_x}{c_y}Q_x + \\frac{D_k}{c_y}',
      example: 'Zmiana dochodu = przesunięcie równoległe; zmiana 1 ceny = obrót; podwojenie Dk, cx i cy = brak zmian!',
    },
    {
      id: 'fc-micro-13',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      term: 'Koszty księgowe, alternatywne i ekonomiczne',
      category: 'Przedsiębiorstwo i koszty',
      definition:
        'Koszty księgowe to faktycznie poniesione i udokumentowane wydatki (surowce, płace, czynsz). Koszty alternatywne to utracone dochody z własnych zasobów (praca właściciela, własny lokal). Koszty ekonomiczne to suma kosztów księgowych i alternatywnych.',
      formulaLatex: '\\Pi_{\\text{ekonomiczny}} = TR - (\\text{Koszty księgowe} + \\text{Koszty alternatywne})',
      example: 'Zerowy zysk ekonomiczny oznacza zysk normalny — firma dokładnie pokrywa koszty jawne i alternatywne.',
    },
    {
      id: 'fc-micro-14',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      term: 'Izokwanta, MRST i izokoszta',
      category: 'Przedsiębiorstwo i koszty',
      definition:
        'Izokwanta to zbiór kombinacji czynników produkcji (L, K) dających tę samą wielkość produkcji Q (jej nachylenie to krańcowa stopa substytucji technicznej MRST). Izokoszta to kombinacje (L, K) dostępne za ten sam koszt całkowity TC.',
      formulaLatex: 'MRST = -\\frac{\\Delta K}{\\Delta L} = \\frac{MP_L}{MP_K} = \\frac{p_L}{p_K}',
      example: 'Optimum producenta w długim okresie to punkt styczności izokwanty z izokosztą.',
    },
    {
      id: 'fc-micro-15',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      term: 'Koszty stałe (FC), zmienne (VC) i koszt krańcowy (MC)',
      category: 'Przedsiębiorstwo i koszty',
      definition:
        'Koszty stałe (FC / Ks) w krótkim okresie nie zależą od wielkości produkcji (czynsz, amortyzacja). Koszty zmienne (VC / Kz) rosną wraz z produkcją (surowce, płace akordowe). Koszt krańcowy (MC / Kk) to przyrost kosztu całkowitego (lub zmiennego) z produkcji kolejnej jednostki.',
      formulaLatex: 'TC = FC + VC, \\qquad MC = \\frac{\\Delta TC}{\\Delta Q} = \\frac{\\Delta VC}{\\Delta Q}',
    },
    {
      id: 'fc-micro-16',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      term: 'Optimum technologiczne (OT), ekonomiczne (OE) i cena zamknięcia (cz)',
      category: 'Przedsiębiorstwo i koszty',
      definition:
        'OT to produkcja o najniższym koszcie jednostkowym (min ATC, gdzie MC = ATC). OE to produkcja maksymalizująca zysk lub minimalizująca stratę (MR = MC). Cena zamknięcia (cz = min AVC) to granica racjonalnych strat w krótkim okresie.',
      formulaLatex: 'OT: MC = \\min ATC, \\quad OE: MR = MC, \\quad c_z = \\min AVC',
      example: 'Poniżej cz firma natychmiast wstrzymuje produkcję; między min AVC a min ATC produkuje ze stratą, ale pokrywa część FC.',
    },
    {
      id: 'fc-micro-17',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      term: 'Korzyści i niekorzyści skali',
      category: 'Przedsiębiorstwo i koszty',
      definition:
        'Korzyści skali to spadek długookresowego kosztu przeciętnego (LRATC / DKp) wraz ze wzrostem produkcji (źródła: technologiczne, marketingowe, finansowe, zewnętrzne). Niekorzyści skali to wzrost LRATC przy zbyt dużej skali (źródła: menedżerskie, geograficzne).',
      example: 'W długim okresie wszystkie koszty są zmienne i NIE działa prawo malejących przychodów!',
    },
    {
      id: 'fc-micro-18',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      term: 'Monopol czysty i monopol naturalny',
      category: 'Struktury rynku',
      definition:
        'Monopol czysty to jedyny sprzedawca unikalnego dobra bez bliskich substytutów, chroniony barierami wejścia. Monopol naturalny powstaje w branżach sieciowych o ogromnych kosztach stałych (wodociągi, energetyka), gdzie jedna firma wytwarza taniej niż kilka (stale malejące ATC).',
      example: 'Monopolista ustala Qm z MR = MC i cenę Pm z krzywej D (Pm > MR = MC).',
    },
    {
      id: 'fc-micro-19',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      term: 'Dyskryminacja cenowa (różnicowanie cen)',
      category: 'Struktury rynku',
      definition:
        'Praktyka sprzedawania tego samego produktu różnym grupom nabywców po różnych cenach (zależnie od ich elastyczności popytu, wieku, czasu zakupu lub ilości), wymagająca siły rynkowej oraz uniemożliwienia odsprzedaży (arbitrażu).',
      example: 'Bilety lotnicze (droższe dla biznesmenów o niskim |E_p|, tańsze dla turystów) oraz bilety ulgowe do kin i muzeów.',
    },
    {
      id: 'fc-micro-20',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      term: 'Społeczny koszt monopolu (DWL) oraz instytucje ochrony rynku',
      category: 'Struktury rynku',
      definition:
        'Bezpowrotna strata społeczna (DWL) to utracona łączna nadwyżka (CS + PS) wynikająca z ograniczenia produkcji monopolu poniżej poziomu efektywnego (P = MC). Praktykom monopolistycznym w Polsce przeciwdziała UOKiK (na rynku finansowym działają także KNF, BFG, UFG, TFG i Rzecznik Finansowy).',
      formulaLatex: '\\text{DWL} = \\frac{1}{2} \\cdot (P_m - MC_m) \\cdot (Q_{\\text{eff}} - Q_m)',
      example: 'Na wykresie 8.11 monopol.docx (Q180): DWL = 0,5 × ($20 − $10) × (150 − 100) = $250.',
    },

    // =========================================================================
    // MAKROEKONOMIA (18 fiszek definicyjnych — zsynchronizowane z pres_4_pkb.md)
    // =========================================================================
    {
      id: 'fc-macro-1',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      term: 'Agregacja, zasób (stock) i strumień (flow)',
      category: 'Podstawy makroekonomii',
      definition:
        'Agregacja to sumowanie jednorodnych wielkości mikroekonomicznych w agregaty makro. Zasób mierzy stan w konkretnym momencie (zatrudnienie, bezrobocie, majątek, dług publiczny), a strumień mierzy przepływ w przedziale czasu (PKB, inwestycje, dochód, wydatki).',
      example: 'Zasada agregacji: nie wolno dodawać zasobu do strumienia; strumienie muszą obejmować ten sam okres.',
    },
    {
      id: 'fc-macro-2',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      term: 'Produkt Krajowy Brutto (PKB / GDP)',
      category: 'Rachunek PKB',
      definition:
        'Łączna wartość rynkowa wszystkich dóbr i usług finalnych wytworzonych na terytorium danego kraju w określonym czasie (najczęściej w ciągu jednego roku).',
      formulaLatex: '\\text{PKB}_{cr} = C + I + G + NX, \\qquad NX = Ex - Im',
      example: 'Słowa kluczowe (4 filary): wartość rynkowa + dobra i usługi finalne + terytorium kraju + określony czas.',
    },
    {
      id: 'fc-macro-3',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      term: 'PKB nominalny vs PKB realny',
      category: 'PKB realny i ceny',
      definition:
        'PKB nominalny wycenia bieżącą produkcję w cenach bieżących (rośnie zarówno przez produkcję, jak i inflację). PKB realny wycenia bieżącą produkcję w cenach stałych z przyjętego roku bazowego, mierząc wyłącznie realny wzrost wolumenu produkcji.',
      formulaLatex: '\\text{PKB}_{\\text{nom}} = \\sum P_t Q_t, \\qquad \\text{PKB}_{\\text{real}} = \\sum P_0 Q_t',
      example: 'W roku bazowym PKB nominalny jest zawsze równy PKB realnemu.',
    },
    {
      id: 'fc-macro-4',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      term: 'Deflator PKB i deflowanie',
      category: 'PKB realny i ceny',
      definition:
        'Deflator PKB to szeroki wskaźnik ogólnego poziomu cen wszystkich dóbr i usług wytwarzanych w kraju względem roku bazowego (w roku bazowym = 100). Deflowanie to przeliczanie wartości nominalnej na realną za pomocą deflatora.',
      formulaLatex:
        '\\text{Deflator PKB} = \\frac{\\text{PKB}_{\\text{nom}}}{\\text{PKB}_{\\text{real}}} \\cdot 100, \\qquad \\text{PKB}_{\\text{real}} = \\frac{\\text{PKB}_{\\text{nom}}}{\\text{Deflator PKB}} \\cdot 100',
      example: 'Na Slajdzie 9 (baza 1990): w 1995 r. Deflator = (175 / 162) × 100 = 108,02.',
    },
    {
      id: 'fc-macro-5',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      term: 'Trzy metody liczenia PKB',
      category: 'Rachunek PKB',
      definition:
        'PKB można obliczyć trzema równoważnymi metodami: (1) produkcyjną / wartości dodanej (suma WD ze wszystkich etapów), (2) dochodową (płace, procenty, zyski, renty — bez transferów), (3) wydatkową (C + I + G + NX).',
      example: 'Wszystkie trzy ujęcia (produkcja = dochody = wydatki) dają tę samą wartość PKB przy jednolitych cenach.',
    },
    {
      id: 'fc-macro-6',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      term: 'Wartość dodana (WD) i zakaz podwójnego liczenia',
      category: 'Rachunek PKB',
      definition:
        'Wartość dodana to nowa wartość wytworzona przez przedsiębiorstwo na danym etapie produkcji: różnica między przychodem ze sprzedaży a kosztem zakupionych surowców i dóbr pośrednich. Sumowanie WD zapobiega podwójnemu liczeniu dóbr pośrednich.',
      formulaLatex: '\\text{WD} = \\text{Wartość sprzedaży} - \\text{Koszt dóbr pośrednich}, \\qquad \\text{PKB} = \\sum \\text{WD}',
      example: 'Slajd 19 (chleb): suma WD = 2 + 1 + 1 + 4 + 2 = 10 zł (= cena finalna), a nie suma faktur 27 zł!',
    },
    {
      id: 'fc-macro-7',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      term: 'Model ruchu okrężnego: odpływy i dopływy',
      category: 'Rachunek PKB',
      definition:
        'Schemat przepływu strumieni rzeczowych i pieniężnych między gospodarstwami domowymi, przedsiębiorstwami, sektorem finansowym, państwem i zagranicą. Odpływy to S (oszczędności), T (podatki), Im (import); dopływy to I (inwestycje), G (wydatki rządowe), Ex (eksport).',
      example: 'Prosty model (gospodarka zamknięta bez państwa) obejmuje wyłącznie gospodarstwa domowe i przedsiębiorstwa.',
    },
    {
      id: 'fc-macro-8',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      term: 'PKB w cenach rynkowych (PKB_cr) vs w cenach czynników produkcji (PKB_ccp)',
      category: 'Rachunek PKB',
      definition:
        'PKB_cr wycenia dobra według cen płaconych przez nabywców (zawiera podatki pośrednie Te, pomniejszony o subsydia Su). PKB_ccp odpowiada wynagrodzeniu samych czynników produkcji (metoda dochodowa).',
      formulaLatex: '\\text{PKB}_{ccp} = \\text{PKB}_{cr} - T_e + S_u',
      example: 'Slajd 28: PKB_cr = 547, Te = 65, Su = 10 ⇒ PKB_ccp = 547 − 65 + 10 = 492.',
    },
    {
      id: 'fc-macro-9',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      term: 'Produkt Narodowy Brutto (PNB / GNP)',
      category: 'Rachunek PKB',
      definition:
        'Wartość rynkowa dóbr i usług finalnych wytworzonych przez czynniki produkcji należące do obywateli i podmiotów krajowych niezależnie od miejsca ich działania (kryterium własnościowe/narodowe zamiast terytorialnego).',
      formulaLatex: '\\text{PNB} = \\text{PKB} + D_w',
      example: 'Dw = dochody krajowych czynników za granicą − dochody zagranicznych czynników w kraju.',
    },
    {
      id: 'fc-macro-10',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      term: 'Amortyzacja (Am) i Produkt Narodowy Netto (PNN / DN)',
      category: 'Rachunek PKB',
      definition:
        'Amortyzacja to ekonomiczne odzwierciedlenie zużycia kapitału trwałego (maszyn, budynków). Po odjęciu amortyzacji od PNB otrzymujemy PNN (w cenach czynników produkcji równy dochodowi narodowemu DN / Y).',
      formulaLatex: '\\text{PNN} = \\text{PNB} - Am, \\qquad I_{\\text{netto}} = I_{\\text{brutto}} - Am',
      example: 'Tylko dodatnie inwestycje netto powiększają zasób kapitału produkcyjnego gospodarki.',
    },
    {
      id: 'fc-macro-11',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      term: 'Dochody Osobiste (DO) i Rozporządzalne Dochody Osobiste (RDO)',
      category: 'Rachunek PKB',
      definition:
        'DO to część dochodu narodowego trafiająca do osób prywatnych (PNN minus CIT i zyski zatrzymane firm). RDO to środki „na rękę” po odjęciu PIT i dodaniu transferów, dzielone na konsumpcję C i oszczędności S.',
      formulaLatex: 'DO = PNN - \\text{CIT} - \\text{zyski niepodz.}, \\qquad RDO = DO - \\text{PIT} + \\text{transfery} = C + S',
    },
    {
      id: 'fc-macro-12',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      term: 'MEW / NEW (Dobrobyt Ekonomiczny Netto)',
      category: 'Mierniki dobrobytu',
      definition:
        'Alternatywny miernik dobrobytu (W.D. Nordhaus, J. Tobin 1972; spopularyzowany przez P.A. Samuelsona), korygujący PKB/PNB w górę o czas wolny i pracę nieodpłatną oraz w dół o koszty degradacji środowiska, hałasu i urbanizacji.',
      example: 'Słowa kluczowe: (+) czas wolny i praca domowa, (−) zanieczyszczenie środowiska.',
    },
    {
      id: 'fc-macro-13',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      term: 'Parytet Siły Nabywczej (PPP)',
      category: 'Mierniki dobrobytu',
      definition:
        'Przelicznik walutowy uwzględniający różnice w poziomach cen i kosztach utrzymania między krajami (wyrażony w dolarach międzynarodowych lub unijnym PPS), pozwalający rzetelnie porównywać realny standard życia.',
      example: 'Wg Eurostatu (Slajd 50) PKB per capita Polski wg PPS osiągnął w 2025 r. 81% średniej UE.',
    },
    {
      id: 'fc-macro-14',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      term: 'Wskaźnik Rozwoju Społecznego (HDI)',
      category: 'Mierniki dobrobytu',
      definition:
        'Syntetyczny wskaźnik ONZ (M. ul Haq i A. Sen, 1990; przedział 0–1) łączący 3 wymiary: długie i zdrowe życie, wiedzę oraz dostatni standard życia. Od 2010 r. używa DNB (GNI) per capita wg PPP, średniej i oczekiwanej liczby lat nauki oraz średniej geometrycznej.',
      example: 'Polska należy do grupy krajów bardzo wysoko rozwiniętych (HDI ≥ 0,800; w rankingu UE 2025: 0,906).',
    },
    {
      id: 'fc-macro-15',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      term: 'Indeks Szczęśliwej Planety (HPI)',
      category: 'Mierniki dobrobytu',
      definition:
        'Miernik opracowany przez NEF w 2006 r., oceniający jak efektywnie kraj przekształca ograniczone zasoby planety (ślad ekologiczny) w długie i szczęśliwe życie obywateli.',
      formulaLatex: '\\text{HPI} = \\frac{\\text{odczuwalny dobrostan} \\times \\text{oczekiwana długość życia}}{\\text{ślad ekologiczny}}',
    },
    {
      id: 'fc-macro-16',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      term: 'Krzywa Phillipsa i NAIRU',
      category: 'Równowaga i wzrost',
      definition:
        'Krzywa Phillipsa ilustruje krótkookresową, ujemną zależność między stopą inflacji a stopą bezrobocia. Pionowa linia NAIRU (Non-Accelerating Inflation Rate of Unemployment) wyznacza naturalną stopę bezrobocia w długim okresie.',
      example: '10. zasada ekonomii (Wykład 1, Slajd 65): obniżenie bezrobocia w krótkim okresie grozi przyspieszeniem inflacji.',
    },
    {
      id: 'fc-macro-17',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      term: 'Produkcja potencjalna (Y*) vs faktyczna (Y)',
      category: 'Równowaga i wzrost',
      definition:
        'Produkcja potencjalna to maksymalny wolumen możliwy do wytworzenia przy pełnym, racjonalnym wykorzystaniu wszystkich czynników produkcji. Produkcja faktyczna to produkcja rzeczywiście wytworzona, ograniczana w krótkim okresie przez agregatowy popyt AD.',
      example: 'Gdy Y < Y*, w gospodarce występują niewykorzystane moce produkcyjne i cykliczne bezrobocie.',
    },
    {
      id: 'fc-macro-18',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      term: 'Mnożnik wydatków autonomicznych w gospodarce otwartej (m)',
      category: 'Równowaga i wzrost',
      definition:
        'Współczynnik określający, ile razy silniej wzrośnie dochód narodowy w równowadze (ΔY) w wyniku jednorazowego wzrostu wydatków autonomicznych (ΔA, np. inwestycji, wydatków rządu lub eksportu).',
      formulaLatex: 'm = \\frac{1}{1 - ksk(1 - t) + ksi}, \\qquad \\Delta Y = m \\cdot \\Delta A',
      example: 'Slajd 87: ksk = 0,8, t = 0,25, ksi = 0,2 ⇒ m = 1 / 0,6 = 5/3 ≈ 1,67; wzrost Xa o +24 podnosi Y o +40.',
    },
  ],

  calculationProblems: [
    // =========================================================================
    // MIKROEKONOMIA (8 zweryfikowanych zadań obliczeniowych)
    // =========================================================================
    {
      id: 'calc-micro-1',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      title: 'Równowaga rynkowa i nadwyżka z równań (Batony czekoladowe — Zad. 6, Zdjęcie 2)',
      difficulty: 'podstawowe',
      statement:
        'Na rynku batonów czekoladowych popyt opisuje równanie Qd = 1600 − 300P, a podaż Qs = 1400 + 700P. (a) Oblicz cenę równowagi P* i ilość równowagi Q*. (b) Sprawdź, jaka nierównowaga wystąpi na tym rynku przy cenie P = 0,30.',
      given: ['Qd = 1600 − 300P', 'Qs = 1400 + 700P', 'Cena testowa: P = 0,30'],
      hint: 'Przyrównaj Qd = Qs, przenieś wyrazy z P na jedną stronę, a wynik P* koniecznie podstaw do OBU równań jako test kontrolny!',
      steps: [
        {
          stepNumber: 1,
          title: 'Wyznaczenie ceny równowagi P* z warunku Qd = Qs',
          explanation:
            'Przenosimy −300P na prawą stronę (zmienia znak na +300P!) oraz 1400 na lewą stronę.',
          latex: '1600 - 300P = 1400 + 700P \\implies 200 = 1000P \\implies P^* = \\frac{200}{1000} = 0{,}20',
          result: 'P* = 0,20 j.p.',
        },
        {
          stepNumber: 2,
          title: 'Obliczenie ilości równowagi Q* i test kontrolny w obu funkcjach',
          explanation: 'Podstawiamy P* = 0,20 zarówno do Qd, jak i do Qs — musimy otrzymać tę samą liczbę.',
          latex: 'Q_d(0{,}20) = 1600 - 300(0{,}20) = 1540, \\qquad Q_s(0{,}20) = 1400 + 700(0{,}20) = 1540',
          result: 'Q* = 1540 batonów',
        },
        {
          stepNumber: 3,
          title: 'Sprawdzenie nierównowagi przy cenie P = 0,30',
          explanation:
            'Cena 0,30 jest wyższa od ceny równowagi 0,20, więc spodziewamy się nadwyżki rynkowej (Qs > Qd).',
          latex:
            'Q_d(0{,}30) = 1600 - 90 = 1510, \\quad Q_s(0{,}30) = 1400 + 210 = 1610 \\implies \\text{Nadwyżka} = 1610 - 1510 = 100',
          result: 'Nadwyżka rynkowa = 100 sztuk',
        },
      ],
      finalAnswer: 'a) P* = 0,20, Q* = 1540 szt. b) Przy P = 0,30 występuje nadwyżka 100 sztuk (sprzeda się tylko 1510 szt.).',
    },
    {
      id: 'calc-micro-2',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      title: 'Równowaga + elastyczność cenowa popytu metodą punktu środkowego (Dobro A — Zdjęcie 5)',
      difficulty: 'kolokwium',
      statement:
        'Funkcje podaży i popytu na dobro A mają postać: Qs = 4 + 2P oraz Qd = 20 − 2P. Oblicz metodą punktu środkowego cenową elastyczność popytu na dobro A przy zmianie ceny z poziomu ceny równowagi do ceny równej 6 j.p. (pamiętaj o konwencji E < 0 oraz interpretacji).',
      given: ['Qs = 4 + 2P', 'Qd = 20 − 2P', 'P1 = cena równowagi P*', 'P2 = 6 j.p.'],
      hint: 'Funkcja Qs jest potrzebna TYLKO w kroku 1 do znalezienia P1! W kroku 2 cenę P2 = 6 podstawiasz WYŁĄCZNIE do funkcji popytu Qd!',
      steps: [
        {
          stepNumber: 1,
          title: 'Wyznaczenie punktu początkowego — równowagi rynkowej (P1, Q1)',
          explanation: 'Przyrównujemy Qs = Qd i wyznaczamy cenę oraz ilość w równowadze.',
          latex: '4 + 2P = 20 - 2P \\implies 4P = 16 \\implies P_1 = 4, \\qquad Q_1 = 20 - 2(4) = 12',
          result: 'P1 = 4 j.p., Q1 = 12 szt.',
        },
        {
          stepNumber: 2,
          title: 'Wyznaczenie wielkości POPYTU Q2 przy nowej cenie P2 = 6',
          explanation:
            'Uwaga na pułapkę: liczymy elastyczność POPYTU, więc podstawiamy P2 = 6 do Qd (NIE do Qs, które dałoby błędnie 16!).',
          latex: 'Q_2 = Q_D(6) = 20 - 2(6) = 8',
          result: 'P2 = 6 j.p., Q2 = 8 szt.',
        },
        {
          stepNumber: 3,
          title: 'Obliczenie elastyczności metodą punktu środkowego',
          explanation:
            'Liczymy procentową zmianę ilości względem średniej Q = 10 oraz ceny względem średniej P = 5.',
          latex:
            '\\%\\Delta Q = \\frac{8 - 12}{(12 + 8)/2} = \\frac{-4}{10} = -0{,}40, \\quad \\%\\Delta P = \\frac{6 - 4}{(4 + 6)/2} = \\frac{2}{5} = +0{,}40',
        },
        {
          stepNumber: 4,
          title: 'Iloraz elastyczności i interpretacja (w tym weryfikacja geometryczna)',
          explanation:
            'Punkt środkowy (P = 5, Q = 10) jest dokładnie środkiem liniowej krzywej popytu Qd = 20 − 2P (przecięcia: P = 10, Q = 20), gdzie elastyczność wynosi zawsze −1!',
          latex: 'E_{dp} = \\frac{-0{,}40}{+0{,}40} = -1{,}00 \\qquad (|E_{dp}| = 1{,}00)',
          result: 'E_dp = −1,00 (|E_dp| = 1,00 — popyt jednostkowo elastyczny)',
        },
      ],
      finalAnswer: 'E_dp = −1,00 (|E_dp| = 1,00) — popyt jednostkowo elastyczny (proporcjonalny); utarg pozostaje stały (4×12 = 6×8 = 48).',
    },
    {
      id: 'calc-micro-3',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      title: 'Tabela popytu na filmy DVD: elastyczność cenowa i dochodowa (E_08 — Zdjęcia 4 i 5)',
      difficulty: 'kolokwium',
      statement:
        'Dla rocznego popytu na filmy DVD (dla dochodu 10 000 €: P = 8 → Q = 40, P = 10 → Q = 32, P = 12 → Q = 24, P = 16 → Q = 8; dla dochodu 12 000 €: P = 8 → Q = 50, P = 10 → Q = 45, P = 12 → Q = 30, P = 16 → Q = 12) oblicz metodą punktu środkowego: (a) elastyczność cenową przy wzroście ceny z 8 € do 10 € dla obu dochodów; (b) elastyczność dochodową przy wzroście dochodu z 10 000 € do 12 000 € przy cenie 12 € i 16 €.',
      given: [
        'Dochód 10 000 €: (8€,40), (10€,32), (12€,24), (16€,8)',
        'Dochód 12 000 €: (8€,50), (10€,45), (12€,30), (16€,12)',
      ],
      hint: 'W (a) trzymasz się jednej kolumny dochodu i zmieniasz cenę (8 → 10). W (b) trzymasz się jednego wiersza ceny i zmieniasz dochód (10 000 → 12 000).',
      steps: [
        {
          stepNumber: 1,
          title: 'Wspólna procentowa zmiana ceny dla części (a): 8 € → 10 €',
          explanation: 'Średnia cena wynosi 9 €, zmiana +2 €.',
          latex: '\\%\\Delta P = \\frac{10 - 8}{(8 + 10)/2} = \\frac{2}{9} \\approx +22{,}22\\%',
        },
        {
          stepNumber: 2,
          title: 'Część a(i) oraz a(ii): elastyczność cenowa dla I = 10 000 € oraz I = 12 000 €',
          explanation:
            'Dla I = 10 000 € ilość spada 40 → 32 (śr. 36); dla I = 12 000 € spada 50 → 45 (śr. 47,5).',
          latex:
            'E_{dp}^{(10\\text{k})} = \\frac{-8/36}{2/9} = \\frac{-2/9}{2/9} = -1{,}00, \\qquad E_{dp}^{(12\\text{k})} = \\frac{-5/47{,}5}{2/9} = -\\frac{9}{19} \\approx -0{,}47',
          result: 'a(i): −1,00 (proporcjonalny); a(ii): −0,47 (nieelastyczny)',
        },
        {
          stepNumber: 3,
          title: 'Wspólna procentowa zmiana dochodu dla części (b): 10 000 € → 12 000 €',
          explanation: 'Średni dochód wynosi 11 000 €, przyrost +2 000 €.',
          latex: '\\%\\Delta I = \\frac{12\\,000 - 10\\,000}{11\\,000} = \\frac{2}{11} \\approx +18{,}18\\%',
        },
        {
          stepNumber: 4,
          title: 'Część b(i) oraz b(ii): elastyczność dochodowa przy P = 12 € i P = 16 €',
          explanation:
            'Przy P = 12 € ilość rośnie 24 → 30 (śr. 27); przy P = 16 € rośnie 8 → 12 (śr. 10). Oba wyniki > 1 wskazują na dobro normalne luksusowe.',
          latex:
            'E_{dI}^{(12\\text{ euro})} = \\frac{6/27}{2/11} = \\frac{11}{9} \\approx +1{,}22, \\qquad E_{dI}^{(16\\text{ euro})} = \\frac{4/10}{2/11} = \\frac{11}{5} = +2{,}20',
          result: 'b(i): +1,22; b(ii): +2,20 (dobro normalne luksusowe)',
        },
      ],
      finalAnswer:
        'a) E_dp = −1,00 (|E| = 1) dla 10 000 € oraz E_dp ≈ −0,47 (|E| ≈ 0,47) dla 12 000 €. b) E_dI ≈ +1,22 przy 12 € oraz +2,20 przy 16 € (dobro normalne luksusowe).',
    },
    {
      id: 'calc-micro-4',
      track: 'micro',
      topicSlug: 'popyt-podaz-i-elastycznosc',
      title: 'Mieszana (krzyżowa) elastyczność popytu (Dobra A i B — Zdjęcie 5)',
      difficulty: 'podstawowe',
      statement:
        'Cena dobra A spadła z $0,80 do $0,70, w rezultacie czego popyt na dobro B spadł ze 120 do 100 sztuk. Określ rodzaj elastyczności, oblicz ją metodą punktu środkowego i zinterpretuj wynik.',
      given: ['P_A1 = $0,80 → P_A2 = $0,70', 'Q_B1 = 120 → Q_B2 = 100'],
      hint: 'W liczniku ZAWSZE stoi ilość (Q_B), w mianowniku cena innego dobra (P_A). Minus dzielony przez minus daje PLUS!',
      steps: [
        {
          stepNumber: 1,
          title: 'Procentowe zmiany Q_B oraz P_A metodą punktu środkowego',
          explanation: 'Średnie wynoszą Q_B = 110 oraz P_A = 0,75.',
          latex:
            '\\%\\Delta Q_B = \\frac{100 - 120}{110} = -\\frac{2}{11} \\approx -18{,}18\\%, \\qquad \\%\\Delta P_A = \\frac{0{,}70 - 0{,}80}{0{,}75} = -\\frac{2}{15} \\approx -13{,}33\\%',
        },
        {
          stepNumber: 2,
          title: 'Obliczenie elastyczności mieszanej i interpretacja znaku',
          explanation: 'Znak dodatni oznacza substytuty, a wartość > 1 wskazuje na bliską substytucyjność.',
          latex: 'E_{B,A} = \\frac{-2/11}{-2/15} = +\\frac{15}{11} \\approx +1{,}36',
          result: 'E_BA ≈ +1,36 > 0 ⇒ bliskie substytuty',
        },
      ],
      finalAnswer:
        'Mieszana (krzyżowa) elastyczność popytu: E_BA = +15/11 ≈ +1,36 > 0 — dobra A i B są bliskimi substytutami (1% spadku ceny A obniża popyt na B o ok. 1,36%).',
    },
    {
      id: 'calc-micro-5',
      track: 'micro',
      topicSlug: 'teoria-konsumenta',
      title: 'Optimum konsumenta z II prawa Gossena (konsument.pptx — Slajd 25)',
      difficulty: 'średnie',
      statement:
        'Dochód konsumenta wynosi Dk = 4000 zł, ceny dóbr wynoszą cx = 4 zł oraz cy = 8 zł, a funkcje użyteczności krańcowych mają postać MUx = 1/X oraz MUy = 1/Y. Wyznacz optymalny koszyk (X, Y) maksymalizujący użyteczność.',
      given: ['Dk = 4000', 'cx = 4, cy = 8', 'MUx = 1/X, MUy = 1/Y'],
      hint: 'Zapisz układ dwóch równań: (1) II prawo Gossena MUx/cx = MUy/cy oraz (2) równanie budżetowe cx·X + cy·Y = Dk.',
      steps: [
        {
          stepNumber: 1,
          title: 'Zastosowanie II prawa Gossena (zależność między X i Y)',
          explanation: 'Zrównujemy użyteczność krańcową na złotówkę dla obu dóbr.',
          latex: '\\frac{1/X}{4} = \\frac{1/Y}{8} \\implies \\frac{1}{4X} = \\frac{1}{8Y} \\implies 4X = 8Y \\implies X = 2Y',
          result: 'X = 2Y',
        },
        {
          stepNumber: 2,
          title: 'Podstawienie do równania linii ograniczenia budżetowego',
          explanation: 'Wstawiamy X = 2Y do 4X + 8Y = 4000 i obliczamy Y, a potem X.',
          latex: '4(2Y) + 8Y = 4000 \\implies 16Y = 4000 \\implies Y = 250, \\qquad X = 2 \\cdot 250 = 500',
          result: 'X = 500, Y = 250',
        },
        {
          stepNumber: 3,
          title: 'Weryfikacja budżetu i warunku równowagi',
          explanation: 'Sprawdzamy, czy cały dochód jest wydany i czy ułamki MU/c są równe.',
          latex:
            '4(500) + 8(250) = 2000 + 2000 = 4000, \\qquad \\frac{1/500}{4} = \\frac{1/250}{8} = \\frac{1}{2000}',
          result: 'Oba warunki spełnione ✓',
        },
      ],
      finalAnswer: 'Optymalny koszyk konsumenta to X = 500 jednostek oraz Y = 250 jednostek.',
    },
    {
      id: 'calc-micro-6',
      track: 'micro',
      topicSlug: 'przedsiebiorstwo-i-koszty',
      title: 'Zysk ekonomiczny i krótkookresowa tabela kosztów (przedsiębiorstwo.pptx — Slajd 25 i 51)',
      difficulty: 'średnie',
      statement:
        'Część A: Firma osiąga TR = 400 tys. zł, koszty księgowe = 100 tys. zł, utracona płaca właściciela = 60 tys. zł, utracony czynsz z własnego lokalu = 70 tys. zł. Oblicz zysk księgowy i ekonomiczny. Część B: Dla firmy o FC = 100 oraz VC(Q = 1, 2, 3, 4) = 40, 70, 120, 200 oblicz TC, MC, ATC, AVC i AFC dla Q = 3.',
      given: ['TR = 400 tys., K_ks = 100 tys., K_alt = 60 + 70 tys.', 'FC = 100; VC(2) = 70, VC(3) = 120'],
      hint: 'Koszty ekonomiczne = księgowe + alternatywne. W części B: TC = FC + VC, MC(3) = TC(3) − TC(2), a koszty przeciętne dzielimy przez Q = 3.',
      steps: [
        {
          stepNumber: 1,
          title: 'Część A: zysk księgowy, koszty alternatywne i zysk ekonomiczny',
          explanation: 'Dodajemy koszty ukryte (alternatywne) do kosztów księgowych.',
          latex:
            '\\Pi_{\\text{ks}} = 400 - 100 = 300\\text{ tys. zł}, \\qquad K_{\\text{ek}} = 100 + (60 + 70) = 230\\text{ tys. zł} \\implies \\Pi_{\\text{ek}} = 400 - 230 = 170\\text{ tys. zł}',
          result: 'Π_ks = 300 tys. zł; Π_ek = 170 tys. zł',
        },
        {
          stepNumber: 2,
          title: 'Część B: TC oraz koszt krańcowy MC dla Q = 3',
          explanation: 'Dla Q = 2 mamy TC(2) = 100 + 70 = 170; dla Q = 3 mamy TC(3) = 100 + 120 = 220.',
          latex: 'TC(3) = 100 + 120 = 220, \\qquad MC(3) = TC(3) - TC(2) = 220 - 170 = 50',
          result: 'TC(3) = 220, MC(3) = 50',
        },
        {
          stepNumber: 3,
          title: 'Koszty przeciętne ATC, AVC, AFC dla Q = 3',
          explanation: 'Dzielimy TC, VC i FC przez Q = 3 i sprawdzamy tożsamość ATC = AVC + AFC.',
          latex:
            'ATC = \\frac{220}{3} \\approx 73{,}33, \\quad AVC = \\frac{120}{3} = 40{,}00, \\quad AFC = \\frac{100}{3} \\approx 33{,}33',
          result: 'ATC = 73,33 (= 40,00 + 33,33)',
        },
      ],
      finalAnswer: 'A) Π_ks = 300 tys. zł, Π_ek = 170 tys. zł. B) Dla Q = 3: TC = 220, MC = 50, ATC = 73,33, AVC = 40,00, AFC = 33,33.',
    },
    {
      id: 'calc-micro-7',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      title: 'Konkurencja doskonała — wykres OT, OE, TR, TC, VC, FC i zysk (Slajdy 71–72)',
      difficulty: 'kolokwium',
      statement:
        'Przedsiębiorstwo w konkurencji doskonałej sprzedaje produkt po cenie rynkowej p = 15 zł. Krzywa p = MR przecina rosnącą krzywą MC przy Q = 21 sztuk (minimum ATC leży przy Q = 20, a przedział p ≥ ATC obejmuje 13–24 sztuk). Przy Q = 21 odczytujemy z wykresu: ATC = 13 zł oraz AVC = 10 zł. Wskaż OT, OE oraz oblicz TR, TC, VC, FC i zysk całkowity Π.',
      given: ['p = AR = MR = 15 zł', 'p = MC dla Q = 21', 'min ATC dla Q = 20', 'ATC(21) = 13 zł, AVC(21) = 10 zł'],
      hint: 'Wszystkie wielkości całkowite to pola prostokątów: mnożysz wartość jednostkową (p, ATC, AVC) przez optymalną ilość Q_OE = 21!',
      steps: [
        {
          stepNumber: 1,
          title: 'Identyfikacja OT, OE i przedziału opłacalności',
          explanation:
            'Optimum technologiczne to min ATC (Q = 20), a optimum ekonomiczne to zrównanie p = MR = MC (Q = 21).',
          latex: 'OT = 20\\text{ szt.}, \\qquad OE: p = MC \\implies Q_{OE} = 21\\text{ szt. (przedział opłacalności: } 13\\text{–}24)',
          result: 'OT = 20, OE = 21',
        },
        {
          stepNumber: 2,
          title: 'Obliczenie TR, TC, VC oraz FC w optimum ekonomicznym (Q = 21)',
          explanation: 'Mnożymy wartości przeciętne przez Q = 21; koszt stały FC = TC − VC = (ATC − AVC)·Q.',
          latex:
            'TR = 15 \\cdot 21 = 315, \\quad TC = 13 \\cdot 21 = 273, \\quad VC = 10 \\cdot 21 = 210, \\quad FC = (13 - 10) \\cdot 21 = 63',
          result: 'TR = 315 zł, TC = 273 zł, VC = 210 zł, FC = 63 zł',
        },
        {
          stepNumber: 3,
          title: 'Obliczenie zysku całkowitego i jednostkowego',
          explanation: 'Zysk całkowity to pole prostokąta o wysokości (p − ATC) i szerokości Q_OE.',
          latex: '\\Pi = TR - TC = (15 - 13) \\cdot 21 = 2 \\cdot 21 = 42\\text{ zł}',
          result: 'Π = 42 zł (zysk jednostkowy = 2 zł/szt.)',
        },
      ],
      finalAnswer: 'OT = 20, OE = 21; TR = 315 zł, TC = 273 zł, VC = 210 zł, FC = 63 zł, zysk całkowity Π = 42 zł.',
    },
    {
      id: 'calc-micro-8',
      track: 'micro',
      topicSlug: 'struktury-rynku-i-monopol',
      title: 'Monopol algebraiczny (Slajd 80) oraz DWL na wykresie 8.11 monopol.docx (Q177–Q180)',
      difficulty: 'kolokwium',
      statement:
        'Część A (Slajd 80): Dla monopolisty o funkcjach Kc = 10Q + Q² oraz Uc = 130Q − 0,5Q² wyznacz optymalną produkcję Q, cenę p oraz zysk Π. Część B (8.11 monopol.docx): Dla wykresu D: P = 30 − 0,1Q, MR = 30 − 0,2Q, MC = 0,1Q wyznacz punkt efektywny (Q177), optimum monopolu (Q178), wyjaśnij kwestię zysku (Q179) i oblicz społeczny koszt monopolu DWL (Q180).',
      given: ['A: Kc = 10Q + Q², Uc = 130Q − 0,5Q²', 'B: D: P = 30 − 0,1Q; MR = 30 − 0,2Q; MC = 0,1Q'],
      hint: 'W (A) policz pochodne MC = (Kc)\' i MR = (Uc)\', zrównaj MR = MC, a cenę policz z p = Uc / Q! W (B) DWL to pole trójkąta 0,5 × (Pm − MCm) × (Q_eff − Qm).',
      steps: [
        {
          stepNumber: 1,
          title: 'Część A: wyznaczenie Q, p i zysku monopolisty z pochodnych',
          explanation: 'Obliczamy MC i MR, przyrównujemy je, a następnie podstawiamy Q = 40 do funkcji ceny p = Uc/Q.',
          latex:
            'MC = 10 + 2Q, \\quad MR = 130 - Q \\implies 130 - Q = 10 + 2Q \\implies 3Q = 120 \\implies Q = 40',
        },
        {
          stepNumber: 2,
          title: 'Cena i zysk w części A',
          explanation: 'Cena p = 130 − 0,5Q = 110; TR = 4400; TC = 400 + 1600 = 2000.',
          latex: 'p = 130 - 0{,}5(40) = 110, \\qquad \\Pi = 40 \\cdot 110 - (10 \\cdot 40 + 40^2) = 4400 - 2000 = 2400',
          result: 'A: Q = 40, p = 110, Π = 2400',
        },
        {
          stepNumber: 3,
          title: 'Część B (Q177 i Q178): punkt efektywny P = MC oraz optimum monopolu MR = MC → D',
          explanation: 'Łączna nadwyżka osiąga maksimum przy P = MC; zysk monopolisty przy MR = MC (cena czytana z D!).',
          latex:
            'Q_{\\text{eff}}: 30 - 0{,}1Q = 0{,}1Q \\implies Q_{\\text{eff}} = 150, P_{\\text{eff}} = \\$15; \\quad Q_m: 30 - 0{,}2Q = 0{,}1Q \\implies Q_m = 100, P_m = \\$20',
          result: 'Q177: (150, $15); Q178: (100, $20)',
        },
        {
          stepNumber: 4,
          title: 'Część B (Q179 i Q180): pułapka zysku oraz obliczenie trójkąta DWL',
          explanation:
            'Zysku w Q179 nie można określić (brak ATC / FC na wykresie!), ale DWL wymaga wyłącznie D i MC: wierzchołki (100, $20), (100, $10), (150, $15).',
          latex: '\\text{DWL} = \\frac{1}{2} \\cdot (P_m - MC_m) \\cdot (Q_{\\text{eff}} - Q_m) = \\frac{1}{2} \\cdot (20 - 10) \\cdot (150 - 100) = \\$250',
          result: 'Q179: Nie można określić; Q180: DWL = $250',
        },
      ],
      finalAnswer:
        'A) Q = 40, p = 110, Π = 2400. B) Q177: 150 szt., $15; Q178: 100 szt., $20; Q179: Nie można określić (brak ATC/FC); Q180: DWL = $250.',
    },

    // =========================================================================
    // MAKROEKONOMIA (7 zweryfikowanych zadań obliczeniowych — zsynchronizowane z pres_4_pkb.md)
    // =========================================================================
    {
      id: 'calc-macro-1',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      title: 'PKB realny, nominalny, stopy wzrostu i deflator (Wykład 4 • PKB Slajd 9)',
      difficulty: 'kolokwium',
      statement:
        'Rokiem bazowym jest 1990. PKB w cenach bieżących (mld zł) wyniósł: 1990 = 150, 1992 = 160, 1995 = 175. PKB w cenach stałych z 1990 r. (mld zł) wyniósł: 1992 = 155, 1995 = 162. Uzupełnij PKB realny w roku bazowym, oblicz deflator PKB dla wszystkich lat oraz stopy wzrostu realnego i nominalnego.',
      given: ['Rok bazowy = 1990', 'PKB_nom: 150 (1990), 160 (1992), 175 (1995)', 'PKB_real: ? (1990), 155 (1992), 162 (1995)'],
      hint: 'W roku bazowym PKB_real = PKB_nom i deflator = 100. Deflator = (PKB_nom / PKB_real) × 100.',
      steps: [
        {
          stepNumber: 1,
          title: 'Rok bazowy 1990',
          explanation: 'W roku bazowym ceny bieżące są równe cenom stałym, więc PKB realny = nominalny = 150 mld zł.',
          latex: '\\text{PKB}_{\\text{real},1990} = 150\\text{ mld zł}, \\qquad \\text{Deflator}_{1990} = \\frac{150}{150} \\cdot 100 = 100{,}00',
          result: '1990: PKB_real = 150, Deflator = 100,00',
        },
        {
          stepNumber: 2,
          title: 'Obliczenia dla roku 1992 (względem 1990)',
          explanation: 'Liczymy realną i nominalną stopę wzrostu oraz deflator PKB.',
          latex:
            'g_{\\text{real}} = \\frac{155 - 150}{150} \\cdot 100\\% = +3{,}33\\%, \\quad g_{\\text{nom}} = \\frac{160 - 150}{150} \\cdot 100\\% = +6{,}67\\%, \\quad \\text{Deflator}_{1992} = \\frac{160}{155} \\cdot 100 = 103{,}23',
          result: '1992: g_real = +3,33%, g_nom = +6,67%, Deflator = 103,23',
        },
        {
          stepNumber: 3,
          title: 'Obliczenia dla roku 1995 (vs 1992 oraz vs 1990)',
          explanation: 'Porównujemy 1995 r. z poprzednim okresem (1992) oraz z rokiem bazowym (1990).',
          latex:
            'g_{\\text{real},95/92} = \\frac{162 - 155}{155} = +4{,}52\\%\\;(\\text{vs 1990: }+8{,}00\\%), \\qquad \\text{Deflator}_{1995} = \\frac{175}{162} \\cdot 100 = 108{,}02',
          result: '1995: g_real = +4,52% (vs 92) / +8,00% (vs 90), Deflator = 108,02',
        },
      ],
      finalAnswer:
        'Deflatory: 100,00 (1990), 103,23 (1992), 108,02 (1995). W latach 1990–1995 PKB nominalny wzrósł o 16,67%, ale realny tylko o 8,00% — ponad połowa nominalnego wzrostu była efektem inflacji.',
    },
    {
      id: 'calc-macro-2',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      title: 'Metoda wartości dodanej — chleb i samochód (Wykład 4 • PKB Slajdy 19–20)',
      difficulty: 'podstawowe',
      statement:
        'A) W łańcuchu produkcji chleba kolejne sprzedaże wyniosły: ziarno 2 zł → zboże 3 zł → mąka 4 zł → piekarz 8 zł → sklep 10 zł. B) W produkcji samochodu wpływy ze sprzedaży wyniosły: ruda żelaza 700, stal 1600, elementy konstrukcyjne 3000, samochód 4800. Oblicz wartość dodaną na każdym etapie oraz wkład obu produktów do PKB.',
      given: ['Chleb: 2 → 3 → 4 → 8 → 10 zł', 'Samochód: 700 → 1600 → 3000 → 4800 j.p.'],
      hint: 'Na każdym etapie odejmij koszt zakupu z poprzedniego etapu: WD = sprzedaż − koszt dóbr pośrednich. Suma WD musi dokładnie równać się cenie finalnej!',
      steps: [
        {
          stepNumber: 1,
          title: 'Wartość dodana w produkcji chleba (Slajd 19)',
          explanation: 'Odejmujemy zakup z poprzedniego ogniwa — nigdy nie sumujemy surowych obrotów (27 zł)!',
          latex:
            '\\text{WD}_{\\text{chleb}} = 2 + (3 - 2) + (4 - 3) + (8 - 4) + (10 - 8) = 2 + 1 + 1 + 4 + 2 = 10\\text{ zł}',
          result: 'Wkład chleba do PKB = 10 zł (NIE 27 zł!)',
        },
        {
          stepNumber: 2,
          title: 'Wartość dodana w produkcji samochodu (Slajd 20)',
          explanation: 'Ruda 700, stal 900, elementy 1400, montaż samochodu 1800 — razem dokładnie cena auta!',
          latex:
            '\\text{WD}_{\\text{auto}} = 700 + (1600 - 700) + (3000 - 1600) + (4800 - 3000) = 700 + 900 + 1400 + 1800 = 4800',
          result: 'Wkład samochodu do PKB = 4800 (NIE 10 100!)',
        },
      ],
      finalAnswer: 'Chleb: PKB = 10 zł (WD: 2, 1, 1, 4, 2). Samochód: PKB = 4800 (WD: 700, 900, 1400, 1800).',
    },
    {
      id: 'calc-macro-3',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      title: 'Pełny łańcuch rachunku dochodu narodowego: PKB → PNB → PNN (Wykład 4 • Slajd 28)',
      difficulty: 'kolokwium',
      statement:
        'Dane makroekonomiczne gospodarki (w mld j.p.): C = 300, I = 182, G = 95, subsydia Su = 10, podatki pośrednie Te = 65, dochody netto z własności za granicą Dw = 12, eksport Ex = 90, import Im = 120, amortyzacja Am = 50. Oblicz: PKB_cr, PKB_ccp, PNB_cr, PNB_ccp oraz PNN_ccp (Dochód Narodowy DN).',
      given: ['C = 300, I = 182, G = 95', 'Ex = 90, Im = 120', 'Te = 65, Su = 10, Dw = 12, Am = 50'],
      hint: 'Idź po kolei: najpierw NX = Ex − Im (uwaga na znak ujemny!), potem PKB_cr = C + I + G + NX, przejście na ccp (−Te + Su), na PNB (+Dw) i na PNN (−Am).',
      steps: [
        {
          stepNumber: 1,
          title: 'Eksport netto (NX) i PKB w cenach rynkowych (PKB_cr)',
          explanation: 'Import przewyższa eksport, więc eksport netto jest ujemny (deficyt handlowy −30).',
          latex: 'NX = 90 - 120 = -30, \\qquad \\text{PKB}_{cr} = 300 + 182 + 95 + (-30) = 547',
          result: 'PKB_cr = 547 mld j.p.',
        },
        {
          stepNumber: 2,
          title: 'Przejście na ceny czynników produkcji (PKB_ccp)',
          explanation: 'Odejmujemy podatki pośrednie Te = 65 i dodajemy subsydia Su = 10.',
          latex: '\\text{PKB}_{ccp} = \\text{PKB}_{cr} - T_e + S_u = 547 - 65 + 10 = 492',
          result: 'PKB_ccp = 492 mld j.p.',
        },
        {
          stepNumber: 3,
          title: 'Przejście na Produkt Narodowy Brutto (PNB_cr i PNB_ccp)',
          explanation: 'Dodajemy dodatnie saldo dochodów z własności za granicą Dw = +12.',
          latex: '\\text{PNB}_{cr} = 547 + 12 = 559, \\qquad \\text{PNB}_{ccp} = 492 + 12 = 504',
          result: 'PNB_cr = 559; PNB_ccp = 504 mld j.p.',
        },
        {
          stepNumber: 4,
          title: 'Przejście na Produkt Narodowy Netto / Dochód Narodowy (PNN_ccp = DN)',
          explanation: 'Odejmujemy amortyzację Am = 50 od PNB w cenach czynników produkcji.',
          latex: '\\text{PNN}_{ccp} = DN = \\text{PNB}_{ccp} - Am = 504 - 50 = 454',
          result: 'PNN_ccp (DN) = 454 mld j.p.',
        },
      ],
      finalAnswer: 'PKB_cr = 547, PKB_ccp = 492, PNB_cr = 559, PNB_ccp = 504, PNN_ccp (Dochód Narodowy) = 454 mld j.p.',
    },
    {
      id: 'calc-macro-4',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      title: 'Krzyż keynesowski (AD = Y) i mnożnik w gospodarce otwartej (Wykład 4 • Slajd 87)',
      difficulty: 'kolokwium',
      statement:
        'Model gospodarki otwartej z podatkiem dochodowym opisuje równanie: Y = Ca + ksk·(Y − tY) + I + G + Xa − ksi·Y, gdzie Ca = 100, I = 100, G = 100, ksk = 0,8, Xa = 60, ksi = 0,2, t = 0,25. (a) Wyznacz dochód narodowy w równowadze Ye. (b) Oblicz mnożnik wydatków m oraz nowy dochód równowagi, gdy autonomiczny eksport Xa wzrośnie z 60 do 84.',
      given: ['Ca = 100, I = 100, G = 100, Xa = 60 → 84', 'ksk = 0,8, t = 0,25, ksi = 0,2'],
      hint: 'Zsumuj wszystkie składniki autonomiczne (Ca + I + G + Xa), zredukuj wyrazy z Y po prawej stronie i przenieś na lewą; potem użyj m = 1 / [1 − ksk(1 − t) + ksi].',
      steps: [
        {
          stepNumber: 1,
          title: 'Podstawienie danych i wyznaczenie dochodu równowagi Ye',
          explanation: 'Składniki autonomiczne wynoszą 100 + 100 + 100 + 60 = 360; wyraz przy Y to 0,8·0,75Y − 0,2Y = 0,4Y.',
          latex: 'Y = 360 + 0{,}8(0{,}75Y) - 0{,}2Y = 360 + 0{,}4Y \\implies 0{,}6Y = 360 \\implies Y_e = 600',
          result: 'Ye = 600',
        },
        {
          stepNumber: 2,
          title: 'Obliczenie mnożnika gospodarki otwartej (m)',
          explanation: 'Podatek dochodowy (t) i import (ksi) stanowią odpływy, które zmniejszają mnożnik.',
          latex: 'm = \\frac{1}{1 - ksk(1 - t) + ksi} = \\frac{1}{1 - 0{,}8 \\cdot 0{,}75 + 0{,}2} = \\frac{1}{0{,}6} = \\frac{5}{3} \\approx 1{,}67',
          result: 'm = 5/3 ≈ 1,67',
        },
        {
          stepNumber: 3,
          title: 'Wpływ wzrostu eksportu ΔXa = +24 na dochód narodowy',
          explanation: 'Mnożymy przyrost wydatków autonomicznych przez mnożnik i dodajemy do Ye = 600.',
          latex: '\\Delta Y = m \\cdot \\Delta X_a = \\frac{5}{3} \\cdot 24 = +40 \\implies Y_{\\text{nowe}} = 600 + 40 = 640',
          result: 'ΔY = +40; nowe Ye = 640',
        },
      ],
      finalAnswer: 'a) Ye = 600. b) Mnożnik m = 5/3 ≈ 1,67; wzrost Xa o +24 podnosi dochód o +40 do Ye = 640.',
    },
    {
      id: 'calc-macro-5',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      title: 'Gospodarka 2-dobrowa od podstaw: PKB nominalny, realny, deflator i inflacja',
      difficulty: 'średnie',
      statement:
        'Gospodarka wytwarza wyłącznie jabłka i chleb. Rokiem bazowym jest 2024: jabłka P = 4 zł, Q = 100; chleb P = 6 zł, Q = 50. W roku 2025: jabłka P = 5 zł, Q = 120; chleb P = 7 zł, Q = 60. Oblicz dla obu lat PKB nominalny, PKB realny, deflator PKB oraz w 2025 r. realną stopę wzrostu i inflację z deflatora.',
      given: ['2024 (baza): jabłka (4 zł, 100), chleb (6 zł, 50)', '2025: jabłka (5 zł, 120), chleb (7 zł, 60)'],
      hint: 'Klucz do PKB realnego w 2025 r.: użyj ILOŚCI z 2025 roku, ale CEN z roku bazowego 2024!',
      steps: [
        {
          stepNumber: 1,
          title: 'Rok bazowy 2024',
          explanation: 'W roku bazowym PKB nominalny = PKB realny, a deflator = 100.',
          latex:
            '\\text{PKB}_{\\text{nom},2024} = \\text{PKB}_{\\text{real},2024} = 4 \\cdot 100 + 6 \\cdot 50 = 700\\text{ zł}, \\qquad \\text{Deflator}_{2024} = 100{,}00',
          result: '2024: PKB = 700 zł, Deflator = 100',
        },
        {
          stepNumber: 2,
          title: 'Rok 2025: PKB nominalny (ceny 2025) i realny (ceny bazowe 2024)',
          explanation: 'Uważnie oddzielamy ceny bieżące (5 i 7) od cen stałych z 2024 r. (4 i 6).',
          latex:
            '\\text{PKB}_{\\text{nom},2025} = 5 \\cdot 120 + 7 \\cdot 60 = 1020\\text{ zł}, \\qquad \\text{PKB}_{\\text{real},2025} = 4 \\cdot 120 + 6 \\cdot 60 = 840\\text{ zł}',
          result: 'PKB_nom = 1020 zł; PKB_real = 840 zł',
        },
        {
          stepNumber: 3,
          title: 'Deflator 2025, realna stopa wzrostu i inflacja',
          explanation: 'Nominalny wzrost wyniósł aż +45,71%, ale realna produkcja wzrosła o +20,00%.',
          latex:
            '\\text{Deflator}_{2025} = \\frac{1020}{840} \\cdot 100 \\approx 121{,}43, \\quad g_{\\text{real}} = \\frac{840 - 700}{700} \\cdot 100\\% = +20{,}00\\%, \\quad \\pi = +21{,}43\\%',
          result: 'Deflator = 121,43; g_real = +20,00%; inflacja = +21,43%',
        },
      ],
      finalAnswer: '2024: PKB = 700 zł, Defl. = 100. 2025: PKB_nom = 1020 zł, PKB_real = 840 zł, Defl. ≈ 121,43, realny wzrost = +20,00%, inflacja = +21,43%.',
    },
    {
      id: 'calc-macro-6',
      track: 'macro',
      topicSlug: 'pkb-i-dochod-narodowy',
      title: 'Metoda wydatkowa PKB z pułapkami (transfery, dobra używane, akcje)',
      difficulty: 'podstawowe',
      statement:
        'Dane gospodarki (w mld zł): konsumpcja gospodarstw domowych C = 1850, inwestycje brutto firm (w tym nowe mieszkania) I = 620, rządowe zakupy dóbr i usług G = 580, emerytury i zasiłki socjalne = 420, eksport Ex = 1450, import Im = 1380, wartość sprzedanych samochodów używanych = 110, obroty akcjami na giełdzie = 300. Oblicz PKB metodą wydatkową.',
      given: ['C = 1850, I = 620, G = 580', 'Ex = 1450, Im = 1380', 'Pułapki: transfery = 420, auta używane = 110, akcje = 300'],
      hint: 'Zanim zaczniesz dodawać, wykreśl wszystkie pozycje, które NIE reprezentują bieżącej produkcji dóbr i usług finalnych!',
      steps: [
        {
          stepNumber: 1,
          title: 'Odrzucenie pozycji niewchodzących do PKB',
          explanation:
            'Wykreślamy emerytury i zasiłki (420 — płatności transferowe), auta używane (110 — wyprodukowane w poprzednich latach) oraz obroty akcjami (300 — transakcja finansowa, nie inwestycja rzeczowa!).',
          result: 'Odrzucono 3 dystraktory (420, 110, 300)',
        },
        {
          stepNumber: 2,
          title: 'Obliczenie eksportu netto (NX) i sumy wydatków',
          explanation: 'Dodajemy wyłącznie C, I, G oraz saldo handlowe NX = Ex − Im.',
          latex: 'NX = 1450 - 1380 = +70, \\qquad \\text{PKB}_{cr} = 1850 + 620 + 580 + 70 = 3120\\text{ mld zł}',
          result: 'PKB = 3120 mld zł',
        },
      ],
      finalAnswer: 'PKB metodą wydatkową wynosi 3120 mld zł (NX = +70 mld zł; transfery, dobra używane i akcje pominięto).',
    },
    {
      id: 'calc-macro-7',
      track: 'macro',
      topicSlug: 'pkb-realny-deflator-i-wskazniki',
      title: 'Deflowanie — odzyskiwanie PKB realnego i stopy wzrostu z deflatora',
      difficulty: 'średnie',
      statement:
        'W roku 1 PKB nominalny kraju wyniósł 3600 mld zł przy deflatorze PKB równym 120. W roku 2 PKB nominalny wzrósł do 3960 mld zł przy deflatorze równym 125. Oblicz PKB realny w obu latach, realną stopę wzrostu gospodarczego oraz stopę inflacji między rokiem 1 a rokiem 2.',
      given: ['Rok 1: PKB_nom = 3600 mld zł, Deflator = 120', 'Rok 2: PKB_nom = 3960 mld zł, Deflator = 125'],
      hint: 'Użyj przekształconego wzoru (deflowanie): PKB_real = (PKB_nom / Deflator) × 100. Inflacja to procentowa zmiana deflatora (nie odejmuj 125 − 120 = 5%!).',
      steps: [
        {
          stepNumber: 1,
          title: 'Obliczenie PKB realnego w obu latach (deflowanie)',
          explanation: 'Dzielimy PKB nominalny przez deflator i mnożymy przez 100.',
          latex:
            '\\text{PKB}_{\\text{real},1} = \\frac{3600}{120} \\cdot 100 = 3000\\text{ mld zł}, \\qquad \\text{PKB}_{\\text{real},2} = \\frac{3960}{125} \\cdot 100 = 3168\\text{ mld zł}',
          result: 'PKB_real,1 = 3000; PKB_real,2 = 3168 mld zł',
        },
        {
          stepNumber: 2,
          title: 'Realna stopa wzrostu gospodarczego i stopa inflacji',
          explanation:
            'Uwaga na pułapkę przy inflacji: gdy rok 1 nie jest rokiem bazowym (deflator = 120 ≠ 100), dzielimy różnicę (125 − 120) przez 120, a NIE przez 100!',
          latex:
            'g_{\\text{real}} = \\frac{3168 - 3000}{3000} \\cdot 100\\% = +5{,}60\\%, \\qquad \\pi = \\frac{125 - 120}{120} \\cdot 100\\% \\approx +4{,}17\\%',
          result: 'g_real = +5,60%; inflacja = +4,17%',
        },
      ],
      finalAnswer: 'PKB realny: 3000 mld zł (rok 1) i 3168 mld zł (rok 2). Realna stopa wzrostu = +5,60%, stopa inflacji = +4,17%.',
    },
  ],
};
