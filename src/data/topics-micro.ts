import type { Topic } from '@/types/economics';

export const microTopics: Topic[] = [
  // =========================================================================
  // TEMAT 1: ZAGADNIENIA WSTĘPNE I RYNEK
  // =========================================================================
  {
    slug: 'zagadnienia-wstepne-i-rynek',
    track: 'micro',
    order: 1,
    title: 'Zagadnienia wstępne, rzadkość, 10 zasad ekonomii i rynek',
    shortTitle: 'Wstęp i rynek',
    subtitle:
      'Przedmiot i funkcje ekonomii, sądy pozytywne i normatywne, procesy i czynniki produkcji, zasada racjonalnego gospodarowania, krzywa transformacji (PPF), 10 zasad ekonomii oraz mechanizm rynkowy.',
    sourceLecture: 'Wykład 1: Zagadnienia wstępne, rynek, popyt i podaż (slajdy 1–77)',
    estimatedMinutes: 25,
    examWeight: 'wysoka',
    learningObjectives: [
      'Zdefiniować ekonomię, jej dwie funkcje (poznawczą i aplikacyjną) oraz odróżnić sądy pozytywne od normatywnych.',
      'Rozgraniczyć zakres mikroekonomii i makroekonomii oraz wymienić procesy gospodarcze i czynniki produkcji.',
      'Zastosować dwa warianty zasady racjonalnego gospodarowania oraz prosty rachunek ekonomiczny (E/N i N/E).',
      'Zinterpretować krzywą transformacji (PPF), jej wklęsły kształt, koszt alternatywny i czynniki przesunięcia.',
      'Omówić 10 zasad ekonomii Mankiwa (w tym krzywą Phillipsa i NAIRU) oraz klasyfikacje i funkcje rynku.',
    ],
    keyTakeaways: [
      'Ekonomia bada 4 procesy gospodarcze: produkcję, wymianę, podział (dystrybucję) i konsumpcję, wykrywając rządzące nimi prawa ekonomiczne.',
      'Sąd pozytywny opisuje fakty i podlega weryfikacji empirycznej (nawet jeśli jest fałszywy); sąd normatywny zawiera wartościowanie („powinno się”, „lepiej”).',
      'Zasada racjonalnego gospodarowania ma dwa rozłączne warianty: maksymalizacja efektu przy danym nakładzie ALBO minimalizacja nakładu dla danego efektu.',
      'Wklęsłość krzywej transformacji (PPF) wynika z niedoskonałej substytucyjności czynników produkcji, co rodzi rosnący koszt alternatywny.',
      'W krótkim okresie społeczeństwo wybiera między inflacją a bezrobociem (krzywa Phillipsa), a w długim bezrobocie dąży do poziomu NAIRU.',
      'Rynek to ogół warunków ekonomicznych zawierania transakcji — pełni funkcje wyceny, informacyjną, alokacyjną, równoważącą, weryfikacyjną i podziałową.',
    ],
    sections: [
      {
        id: 'przedmiot-funkcje-sady',
        title: '1. Przedmiot ekonomii, jej funkcje oraz podział',
        summary:
          'Czym zajmuje się ekonomia, po co ją badamy i jak odróżnić chłodny opis faktów od oceny światopoglądowej.',
        paragraphs: [
          'Ekonomia to nauka o procesach gospodarczych — produkcji, podziale (dystrybucji), wymianie oraz konsumpcji — która wykrywa i opisuje powtarzalne prawidłowości rządzące tymi procesami. Prawidłowości te nazywamy prawami ekonomicznymi (np. prawo popytu, prawo podaży, prawo Engla czy prawa Gossena).',
          'W ramach analizy ekonomicznej wyróżniamy dwie podstawowe funkcje nauki: funkcję poznawczą (dostarcza wiedzy o kategoriach, zjawiskach, przyczynach i skutkach procesów gospodarczych) oraz funkcję aplikacyjną (dostarcza praktycznych wskazówek gospodarstwom domowym, przedsiębiorstwom i państwu, ułatwiając podejmowanie racjonalnych decyzji i wprowadzanie pożądanych zmian).',
        ],
        callouts: [
          {
            variant: 'trap',
            title: 'Pułapka na kolokwium: Sąd pozytywny vs sąd normatywny',
            content:
              'Zdanie „Bezrobocie prowadzi do biedy” to sąd pozytywny (odwołuje się do faktów, można go sprawdzić badaniami). Zdanie „Bezrobocie jest poważniejszym problemem społecznym niż inflacja” to sąd normatywny (wyraża wartościowanie i światopogląd). Uwaga: nawet fałszywy opis rzeczywistości („wzrost podatków zawsze zwiększa konsumpcję”) nadal jest sądem pozytywnym, bo daje się go empirycznie obalić!',
          },
        ],
        table: {
          caption: 'Porównanie ekonomii pozytywnej i normatywnej oraz mikro- i makroekonomii',
          headers: ['Kategoria', 'Istota / przedmiot badań', 'Typowe pytanie lub przykład z wykładu'],
          rows: [
            [
              'Ekonomia pozytywna',
              'Bezstronna analiza faktów i związków przyczynowo-skutkowych (weryfikowalna empirycznie)',
              'Jak jest? Np. „Bezrobocie prowadzi do biedy”.',
            ],
            [
              'Ekonomia normatywna',
              'Przekonania, zalecenia i oceny według światopoglądu badacza (wartościująca)',
              'Jak być powinno? Np. „Bezrobocie jest poważniejszym problemem społecznym niż inflacja”.',
            ],
            [
              'Mikroekonomia',
              'Pojedyncze podmioty (gospodarstwa domowe, firmy), sektory i rynki konkretnych dóbr oraz ich ceny',
              'Jak zmiana ceny surowca wpłynie na podaż i cenę chleba? („patrzenie przez mikroskop”)',
            ],
            [
              'Makroekonomia',
              'Gospodarka jako całość oraz wielkości agregatowe: globalna produkcja i popyt, inflacja, bezrobocie, budżet, handel zagraniczny',
              'Co decyduje o tempie wzrostu PKB i ogólnym poziomie cen w kraju?',
            ],
          ],
          highlightFirstColumn: true,
        },
        quickCheck: {
          id: 'qc-wstep-1',
          question: 'Które z poniższych stwierdzeń jest sądem normatywnym?',
          options: [
            'Wzrost stóp procentowych ogranicza popyt na kredyty hipoteczne.',
            'Bezrobocie w dłuższym okresie prowadzi do spadku dochodów gospodarstw domowych.',
            'Państwo powinno mocniej chronić bezrobotnych, ponieważ bezrobocie jest groźniejszym problemem niż inflacja.',
            'Podwyższenie akcyzy na benzynę zmniejsza wielkość sprzedaży paliw.',
          ],
          correctIndex: 2,
          explanation:
            'Słowa „powinno” oraz wartościująca ocena „groźniejszym problemem” jednoznacznie wskazują na sąd normatywny. Pozostałe trzy zdania opisują weryfikowalne zależności przyczynowo-skutkowe (ekonomia pozytywna).',
        },
      },
      {
        id: 'procesy-czynniki-dobra',
        title: '2. Procesy gospodarcze, czynniki produkcji i dobra wolne',
        summary:
          'Z czego powstają dobra i usługi, jak dzielimy zasoby i dlaczego nawet dobra wolne wymagają dziś troski.',
        paragraphs: [
          'Każda gospodarka realizuje cztery powiązane ze sobą procesy gospodarcze. Potrzeby ludzkie, które te procesy mają zaspokajać, są różnorodne, nieograniczone, mają swoją hierarchię i ewoluują wraz z rozwojem cywilizacyjnym społeczeństwa.',
        ],
        bullets: [
          'Produkcja — wytwarzanie środków materialnych (dóbr) i niematerialnych (usług) służących zaspokajaniu potrzeb ludzkich.',
          'Wymiana — przenoszenie praw (uprawnień) własności do czynników produkcji oraz wytworzonych produktów.',
          'Podział (dystrybucja) — rozdzielanie wytworzonych dóbr; jego kryteria determinują poziom dochodu i majątku poszczególnych grup społeczno-zawodowych.',
          'Konsumpcja — nabywanie i użytkowanie dóbr oraz korzystanie z usług w celu bezpośredniego zaspokojenia potrzeb.',
        ],
        subsections: [
          {
            id: 'czynniki-i-dobra-wolne',
            title: 'Trzy klasyczne czynniki produkcji a dobra wolne i SDGs',
            paragraphs: [
              'Wytworzenie produktów (dóbr gospodarczych i usług) wymaga połączenia ograniczonych czynników produkcji: pracy (L / Np — czynności człowieka przekształcające przyrodę wraz z wiedzą i kwalifikacjami), ziemi (Nz — zasoby naturalne, grunty, lasy, wody, bogactwa mineralne) oraz kapitału (K / Nk), dzielonego na kapitał rzeczowy (budynki, maszyny, urządzenia, środki transportu, narzędzia) i kapitał finansowy (środki pieniężne, papiery wartościowe).',
              'W odróżnieniu od produktów (dóbr ekonomicznych), dobra wolne nie są wynikiem produkcji — występują w przyrodzie w postaci gotowej do zaspokojenia potrzeby (np. powietrze do oddychania). Wykład podkreśla jednak, że nawet zasoby dóbr wolnych (czyste powietrze, czysta woda) mogą ulegać wyczerpaniu lub degradacji, co wymusza racjonalne gospodarowanie nimi (np. rozwój OZE) i nawiązuje do 17 Celów Zrównoważonego Rozwoju ONZ (Agenda 2030 — m.in. czysta energia, godna praca, odpowiedzialna konsumpcja i produkcja, działania klimatyczne).',
            ],
            callouts: [
              {
                variant: 'definition',
                title: 'Dobra gospodarcze vs dobra wolne',
                content:
                  'Dobra gospodarcze (produkty) są wytwarzane z rzadkich czynników produkcji i mają cenę. Dobra wolne występują naturalnie w przyrodzie bez procesu produkcji, ale współcześnie również wymagają ochrony przed degradacją.',
              },
            ],
          },
        ],
      },
      {
        id: 'racjonalne-gospodarowanie-ppf',
        title: '3. Racjonalne gospodarowanie, krzywa transformacji (PPF) i koszt alternatywny',
        summary:
          'Ponieważ zasoby są rzadkie, każda decyzja ma koszt alternatywny — na poziomie całej gospodarki obrazuje go krzywa transformacji.',
        paragraphs: [
          'Ograniczoność (rzadkość) zasobów zmusza społeczeństwo do dokonywania wyborów: ile dóbr wytwarzać i w jakiej kolejności zaspokajać potrzeby. Aby nie marnować zasobów, podmioty kierują się zasadą racjonalnego gospodarowania (zasadą gospodarności), która występuje w dwóch równoważnych, ale rozłącznych wariantach.',
        ],
        callouts: [
          {
            variant: 'law',
            title: 'Zasada racjonalnego gospodarowania — 2 warianty (częste na kolokwium!)',
            content:
              'Nigdy nie wolno jednocześnie „maksymalizować efektu i minimalizować nakładu” — jedna wielkość musi być dana (ustalona)!',
            points: [
              'Wariant minimalizacji nakładu (oszczędności środków): osiągnięcie DANEGO (założonego) efektu przy jak NAJMNIEJSZYM nakładzie środków.',
              'Wariant maksymalizacji efektu (wydajności): osiągnięcie jak NAJWIĘKSZEGO efektu przy DANYM (ograniczonym) nakładzie środków.',
            ],
          },
        ],
        formulas: [
          {
            title: 'Rachunek ekonomiczny — wybór najbardziej efektywnego wariantu',
            latex: '\\max \\left(\\frac{E}{N}\\right) \\qquad \\Longleftrightarrow \\qquad \\min \\left(\\frac{N}{E}\\right)',
            plainReading:
              'Najefektywniejszy wariant zapewnia najwyższy stosunek efektów do nakładów lub najniższy stosunek nakładów do efektów.',
            symbols: [
              { symbol: 'E', meaning: 'uzyskany efekt (np. wielkość produkcji w tys. sztuk)' },
              { symbol: 'N', meaning: 'poniesiony nakład (np. koszty w tys. zł)' },
            ],
            note: 'W zadaniu z biznesplanem ze slajdu 48 (6 wariantów A–F): przy limicie nakładów ≤ 500 tys. zł wygrywa wariant B (500 tys. szt. za 500 tys. zł; zasada maksymalizacji efektu), a przy stałym popycie 700 tys. szt. wygrywa wariant E (690 tys. zł wobec 710 tys. zł w D; zasada minimalizacji nakładu).',
          },
        ],
        subsections: [
          {
            id: 'krzywa-transformacji-ppf',
            title: 'Krzywa transformacji (PPF) i koszt alternatywny',
            paragraphs: [
              'Krzywa transformacji (zwana też krzywą lub granicą możliwości produkcyjnych — PPF) przedstawia wszystkie maksymalne kombinacje dwóch dóbr (np. chleba jako dobra konsumpcyjnego oraz maszyn jako dobra inwestycyjnego), jakie gospodarka jest w stanie wytworzyć przy pełnym wykorzystaniu dostępnych zasobów i obecnie stosowanej technologii.',
              'Punkty leżące NA krzywej (A–J) to warianty ekonomicznie efektywne (pełne wykorzystanie zasobów). Punkty POD krzywą (punkt K) są ekonomicznie nieefektywne — część zasobów pozostaje niewykorzystana (bezrobocie, przestoje fabryk). Punkty NAD krzywą (punkt L) są w danym okresie nierealne (nieosiągalne).',
              'Krzywa transformacji ma kształt wklęsły względem początku układu współrzędnych (wygięty na zewnątrz), ponieważ czynniki produkcji nie są doskonałymi substytutami (piekarz słabo zastępuje inżyniera budowy maszyn). Dlatego zwiększanie produkcji jednego dobra o kolejne równe porcje wymaga coraz większej rezygnacji z drugiego dobra — działa prawo rosnącego kosztu alternatywnego. Gdyby zasoby były w pełni zamienne (stały koszt alternatywny), PPF byłaby linią prostą.',
            ],
            table: {
              caption: 'Przykład krzywej transformacji z wykładu (slajdy 37–38): produkcja chleba i maszyn (w tys. szt.)',
              headers: ['Wariant', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
              rows: [
                ['Chleb (tys. szt.)', '1400', '1350', '1300', '1200', '1100', '960', '800', '600', '400', '0'],
                ['Maszyny (tys. szt.)', '0', '100', '140', '200', '250', '300', '350', '400', '440', '500'],
                ['Koszt alt. 1 maszyny (w chlebie)', '—', '0,50', '1,25', '1,67', '2,00', '2,80', '3,20', '4,00', '5,00', '6,67'],
              ],
              highlightFirstColumn: true,
            },
            callouts: [
              {
                variant: 'definition',
                title: 'Koszt alternatywny (koszt utraconych możliwości)',
                content:
                  'Wszystko, z czego trzeba zrezygnować (wartość najlepszej odrzuconej alternatywy), aby uzyskać wybrane dobro lub podjąć decyzję. Przykład: kosztem studiów dziennych są nie tylko wydatki na książki, ale przede wszystkim utracone wynagrodzenie z pracy, którą można by w tym czasie podjąć.',
              },
              {
                variant: 'tip',
                title: 'Kiedy krzywa transformacji przesuwa się na zewnątrz (wzrost gospodarczy)?',
                content:
                  'Punkty wcześniej nierealne (L) stają się osiągalne w dwóch sytuacjach: (1) wzrost wielkości zasobów czynników produkcji (inwestycje w kapitał, napływ pracowników, odkrycie surowców) lub (2) wzrost efektywności i wydajności czynników produkcji (postęp techniczny, innowacje, szkolenia, lepsza organizacja pracy i motywacja).',
              },
            ],
          },
        ],
        quickCheck: {
          id: 'qc-wstep-2',
          question: 'Z czego wynika wklęsły (wygięty na zewnątrz) kształt typowej krzywej transformacji (PPF)?',
          options: [
            'Z tego, że czynniki produkcji są doskonałymi substytutami w każdej gałęzi.',
            'Z tego, że czynniki produkcji nie są doskonałymi substytutami, więc koszt alternatywny rośnie.',
            'Z niepełnego wykorzystania zasobów (bezrobocia) w gospodarce.',
            'Ze stałego postępu technicznego w trakcie przesuwania się po tej samej krzywej.',
          ],
          correctIndex: 1,
          explanation:
            'Ponieważ zasoby są wyspecjalizowane i nie są doskonałymi substytutami, przenoszenie kolejnych jednostek zasobów z produkcji chleba do produkcji maszyn powoduje coraz większe straty w produkcji chleba (rosnący koszt alternatywny). Doskonała substytucyjność dałaby linię prostą.',
        },
      },
      {
        id: 'dziesiec-zasad-ekonomii',
        title: '4. Dziesięć podstawowych zasad ekonomii (Mankiw i Taylor)',
        summary:
          'Synteza całej ekonomii w trzech grupach: jak decyzje podejmują jednostki, jak współdziałają na rynkach i jak działa cała gospodarka.',
        paragraphs: [
          'Wykład porządkuje fundamenty myślenia ekonomicznego według 10 zasad ekonomii N.G. Mankiwa i M.P. Taylora. Pierwsze siedem zasad dotyczy obszaru mikroekonomii, a trzy ostatnie stanowią pomost do makroekonomii.',
        ],
        table: {
          caption: '10 podstawowych zasad ekonomii z przykładami wykładowymi (slajdy 49–65)',
          headers: ['Grupa', 'Nr i treść zasady', 'Kluczowy sens i przykład z wykładu'],
          rows: [
            [
              'I. Jak ludzie podejmują decyzje?',
              '1. Ludzie stale muszą dokonywać wyborów',
              'Czas na naukę vs rozrywka/sen; bieżąca konsumpcja vs oszczędności. Dylemat społeczny: efektywność („wielkość tortu”) vs sprawiedliwość („podział tortu”).',
            ],
            [
              'I. Jak ludzie podejmują decyzje?',
              '2. Koszt to wszystko, z czego trzeba zrezygnować, by uzyskać coś innego',
              'Decyzje opierają się na koszcie alternatywnym (np. czas na studia vs utracona płaca z pracy zarobkowej).',
            ],
            [
              'I. Jak ludzie podejmują decyzje?',
              '3. Racjonalni ludzie myślą w kategoriach wielkości krańcowych',
              'Zmiany krańcowe to małe korekty planu (dodatkowy kawałek pizzy, kolejna godzina nauki). Działamy, gdy korzyść krańcowa > koszt krańcowy.',
            ],
            [
              'I. Jak ludzie podejmują decyzje?',
              '4. Ludzie reagują na bodźce',
              'Wyższa cena dobra A kieruje popyt do substytutu B; wyższa akcyza na benzynę skłania do zakupu aut oszczędnych lub wyboru transportu publicznego.',
            ],
            [
              'II. Jak ludzie współdziałają?',
              '5. Handel może opłacać się wszystkim',
              'Umożliwia specjalizację w tym, co umiemy najlepiej, i tańszy dostęp do wielu dóbr zamiast kosztownej samowystarczalności.',
            ],
            [
              'II. Jak ludzie współdziałają?',
              '6. Rynki są zwykle dobrą formą organizacji aktywności gospodarczej',
              'Zdecentralizowane decyzje firm i gospodarstw domowych koordynuje „niewidzialna ręka rynku” Adama Smitha (system cen) lepiej niż centralne planowanie.',
            ],
            [
              'II. Jak ludzie współdziałają?',
              '7. Czasami państwo może usprawnić funkcjonowanie rynku',
              'Państwo chroni prawa własności i konsumentów, koryguje zawodności rynku (efekty zewnętrzne, np. zanieczyszczenia; monopole) oraz wspiera sprawiedliwość.',
            ],
            [
              'III. Jak działa cała gospodarka?',
              '8. Poziom życia zależy od ilości wytwarzanych dóbr i usług',
              'Dysproporcje w PKB per capita i jakości życia między krajami wynikają z różnic w produkcyjności (wydajności) pracy, wykształceniu i technologii.',
            ],
            [
              'III. Jak działa cała gospodarka?',
              '9. Ceny rosną, gdy państwo „drukuje” zbyt dużo pieniędzy',
              'Inflacja to wzrost ogólnego poziomu cen; wysoka i trwała inflacja wynika z nadmiernego wzrostu ilości pieniądza w obiegu (stąd cel inflacyjny banku centralnego).',
            ],
            [
              'III. Jak działa cała gospodarka?',
              '10. W krótkim okresie społeczeństwo wybiera między inflacją a bezrobociem',
              'Odwrotna (ujemnie nachylona) krzywa Phillipsa (A.W. Phillips): niższe bezrobocie w krótkim okresie wiąże się z wyższą inflacją; w długim okresie gospodarka wraca do pionowej linii NAIRU.',
            ],
          ],
          highlightFirstColumn: true,
        },
        callouts: [
          {
            variant: 'tip',
            title: 'Szczegół ze slajdu 65: Krzywa Phillipsa i linia NAIRU',
            content:
              'Na wykresie ze slajdu 65 obok opadającej krzywej Phillipsa (oś Y: stopa inflacji, oś X: stopa bezrobocia) zaznaczona jest pionowa czerwona linia NAIRU (Non-Accelerating Inflation Rate of Unemployment — nieprzyspieszająca inflacji stopa bezrobocia). Oznacza ona, że kompromis między inflacją a bezrobociem działa tylko w krótkim okresie — w długim okresie próba trwałego zepchnięcia bezrobocia poniżej NAIRU kończy się samą przyspieszającą inflacją.',
          },
        ],
        quickCheck: {
          id: 'qc-wstep-3',
          question: 'Zgodnie z 7. zasadą ekonomii, kiedy interwencja państwa w funkcjonowanie rynku jest ekonomicznie uzasadniona?',
          options: [
            'Zawsze, ponieważ centralne planowanie jest sprawniejsze od mechanizmu cenowego.',
            'Wyłącznie w celu zastąpienia wszystkich przedsiębiorstw prywatnych państwowymi.',
            'Gdy trzeba chronić prawa własności, przeciwdziałać zawodnościom rynku (efekty zewnętrzne, monopole) lub wspierać sprawiedliwość.',
            'Nigdy — „niewidzialna ręka rynku” samodzielnie rozwiązuje problem zanieczyszczenia środowiska.',
          ],
          correctIndex: 2,
          explanation:
            'Rynki świetnie alokują zasoby, ale potrzebują państwa do egzekwowania praw własności, usuwania zawodności rynku (efekty zewnętrzne, siła monopolowa) oraz korygowania nadmiernych nierówności.',
        },
      },
      {
        id: 'rynek-klasyfikacje-funkcje',
        title: '5. Rynek — definicja, klasyfikacje i funkcje w gospodarce',
        summary:
          'Rynek to dziś nie tylko plac targowy, ale cały mechanizm koordynujący kupujących i sprzedających.',
        paragraphs: [
          'W ujęciu tradycyjnym rynek to miejsce zorganizowane instytucjonalnie, gdzie dochodzi do kupna i sprzedaży (sklepy detaliczne, hurtownie, banki, targowiska, giełdy). Współcześnie transakcje odbywają się także na odległość (telefon, Internet), dlatego ekonomia definiuje rynek szerzej: jako ogół warunków ekonomicznych, w których dochodzi do zawierania transakcji między nabywcami i sprzedającymi oraz ustalania ich cen i wielkości.',
        ],
        table: {
          caption: 'Pięć klasyfikacji (rodzajów) rynków omawianych na wykładzie (slajdy 70–75)',
          headers: ['Kryterium podziału', 'Wyróżnione rodzaje rynków i przykłady'],
          rows: [
            [
              '1. Przedmiot wymiany',
              'Rynek dóbr i usług konsumpcyjnych oraz inwestycyjnych; rynek kapitałowy (papierów wartościowych); rynek pieniężno-kredytowy; rynek pracy.',
            ],
            [
              '2. Zasięg geograficzny',
              'Lokalny (miejski, wiejski), regionalny (wojewódzki), krajowy, międzynarodowy (np. rynek UE), światowy (surowce: ropa, węgiel, złoto).',
            ],
            [
              '3. Kryterium kontroli',
              'Rynek wolny (brak bezpośredniej kontroli władz) vs rynek regulowany (ceny maksymalne/minimalne, kontrola czynszów, kwoty wymiany, licencje).',
            ],
            [
              '4. Jednorodność produktu',
              'Rynek homogeniczny — dobra jednorodne (ropa naftowa, pszenica) vs rynek heterogeniczny — dobra zróżnicowane (AGD, usługi medyczne i rekreacyjne).',
            ],
            [
              '5. Wpływ na cenę',
              'Rynek doskonały (konkurencja doskonała — wielu uczestników, nikt nie wpływa na cenę) vs rynek niedoskonały (monopol, oligopol, konkurencja monopolistyczna — firmy wpływają na cenę).',
            ],
          ],
          highlightFirstColumn: true,
        },
        bullets: [
          'Funkcja wyceny — za pomocą pieniądza wyraża ceny towarów i czynników produkcji oraz relacje cenowe między nimi.',
          'Funkcja informacyjna i alokacyjna — dostarcza sygnałów o cenach, popycie i podaży, wskazując firmom i konsumentom, co, ile i jak wytwarzać.',
          'Funkcja równoważąca — kształtuje cenę równowagi, przy której popyt i podaż mają szansę się zrównać.',
          'Funkcja weryfikacyjna — sprawdza społeczną przydatność produkcji (towar niechciany się nie sprzedaje).',
          'Funkcja podziałowa (dystrybucyjna) — decyduje o podziale dóbr, usług i czynników produkcji między uczestników rynku.',
        ],
        quickCheck: {
          id: 'qc-wstep-4',
          question: 'Rynek pszenicy oraz rynek ropy naftowej — według kryterium stopnia jednorodności przedmiotu transakcji — zaliczamy do rynków:',
          options: [
            'Heterogenicznych',
            'Homogenicznych',
            'Regulowanych lokalnie',
            'Monopolistycznych',
          ],
          correctIndex: 1,
          explanation:
            'Rynek homogeniczny (jednorodny) to rynek dóbr identycznych pod względem cech (np. pszenica, ropa naftowa). Rynek heterogeniczny obejmuje dobra zróżnicowane (np. sprzęt AGD, usługi medyczne).',
        },
      },
    ],
  },

  // =========================================================================
  // TEMAT 2: POPYT, PODAŻ, RÓWNOWAGA I ELASTYCZNOŚĆ
  // =========================================================================
  {
    slug: 'popyt-podaz-i-elastycznosc',
    track: 'micro',
    order: 2,
    title: 'Popyt, podaż, równowaga rynkowa i elastyczność',
    shortTitle: 'Popyt, podaż i elastyczność',
    subtitle:
      'Prawo popytu Marshalla, paradoksy Giffena i Veblena, podaż, mechanizm równowagi i ceny urzędowe oraz kompletna teoria elastyczności cenowej, mieszanej i dochodowej (z prawem Engla).',
    sourceLecture: 'Wykład 1: Popyt, podaż i elastyczność (slajdy 78–154) + Ćwiczenia E_08',
    estimatedMinutes: 35,
    examWeight: 'kluczowa',
    learningObjectives: [
      'Rozróżnić popyt efektywny od potencjalnego oraz ruch wzdłuż krzywej od przesunięcia całej krzywej.',
      'Wyjaśnić efekt substytucyjny i dochodowy zmiany ceny oraz trzy paradoksy popytu (Giffena, Veblena, spekulacyjny).',
      'Wyznaczyć równowagę rynkową, nadwyżkę i niedobór oraz skutki wiążących cen minimalnych i maksymalnych.',
      'Obliczać i interpretować elastyczność cenową popytu (metodą punktu środkowego, konwencja E < 0 vs |E|), jej związek z utargiem TR oraz 5 determinant.',
      'Zastosować elastyczność mieszaną (substytuty/komplementy), dochodową (prawo i krzywe Engla) oraz elastyczność cenową podaży.',
    ],
    keyTakeaways: [
      'Zmiana CENY WŁASNEJ dobra wywołuje RUCH PO KRZYWEJ; zmiana czynnika pozacenowego (dochód, ceny dóbr pokrewnych, koszty, technologia) PRZESUWA CAŁĄ KRZYWĄ.',
      'Paradoks Giffena (dobra podrzędne u ubogich): ujemny efekt dochodowy jest silniejszy niż efekt substytucyjny. Paradoks Veblena (dobra luksusowe): efekt demonstracji statusu.',
      'Cena maksymalna jest wiążąca PONIŻEJ ceny równowagi (tworzy niedobór i czarny rynek); cena minimalna jest wiążąca POWYŻEJ ceny równowagi (tworzy nadwyżkę).',
      'Wzór punktu środkowego (łukowy) daje identyczny wynik niezależnie od kierunku zmiany ceny (z A do B i z B do A).',
      'Gdy popyt jest nieelastyczny (|E| < 1), wzrost ceny ZWIĘKSZA utarg całkowity TR; gdy jest elastyczny (|E| > 1), utarg rośnie przy OBNIŻCE ceny.',
      'Prawo Engla: wraz ze wzrostem dochodu wydatki na żywność rosną kwotowo, ale ich procentowy udział w budżecie maleje (0 < E_I < 1).',
    ],
    sections: [
      {
        id: 'popyt-determinanty-paradoksy',
        title: '1. Popyt, prawo popytu, determinanty i paradoksy',
        summary:
          'Dlaczego przy wyższej cenie kupujemy mniej i w jakich trzech wyjątkowych sytuacjach ta reguła zostaje złamana.',
        paragraphs: [
          'Popyt (D) to ilość dobra, jaką nabywcy są skłonni i w stanie kupić przy określonej cenie w danym czasie. Ekonomia odróżnia popyt efektywny (poparty realną siłą nabywczą, czyli dochodem) od popytu potencjalnego (sama chęć posiadania dobra przy braku wystarczających środków — może zamienić się w popyt efektywny wraz ze wzrostem dochodu).',
          'Prawo popytu (Alfred Marshall) głosi, że między ceną dobra a wielkością popytu zachodzi zależność odwrotna (ceteris paribus): wyższej cenie odpowiada niższa wielkość popytu, a niższej cenie — wyższa. Krzywa popytu opada z lewa na prawo (ma ujemne nachylenie), a zmiana ceny własnej powoduje wyłącznie ruch po tej samej krzywej.',
        ],
        callouts: [
          {
            variant: 'definition',
            title: 'Dlaczego krzywa popytu opada? Dwa efekty zmiany ceny',
            content:
              'Wzrost ceny dobra uruchamia jednocześnie dwa mechanizmy zmniejszające zakupy:',
            points: [
              'Efekt substytucyjny — konsument zastępuje (substytuuje) drożejące dobro innymi dobrami relatywnie tańszymi (substytutami).',
              'Efekt dochodowy — przy niezmienionym dochodzie nominalnym wzrost ceny obniża dochód realny (siłę nabywczą konsumenta); jego siła zależy od udziału dobra w budżecie domowym.',
            ],
          },
        ],
        subsections: [
          {
            id: 'determinanty-pozacenowe-popytu',
            title: 'Pozacenowe determinanty popytu (przesunięcia krzywej D)',
            paragraphs: [
              'Zmiana dowolnego czynnika pozacenowego przesuwa całą krzywą popytu: w prawo (wzrost popytu) albo w lewo (spadek popytu):',
            ],
            bullets: [
              'Dochód konsumenta — dla dóbr normalnych wzrost dochodu przesuwa D w prawo (spadek w lewo); dla dóbr podrzędnych odwrotnie.',
              'Ceny dóbr substytucyjnych — wzrost ceny dobra Y (np. masła) przesuwa popyt na jego substytut X (margarynę) w prawo.',
              'Ceny dóbr komplementarnych — wzrost ceny dobra Y (np. paliwa) przesuwa popyt na dobro uzupełniające X (samochody spalinowe) w lewo; spadek ceny Y przesuwa D w prawo.',
              'Oczekiwania przyszłych cen — przewidywany wzrost ceny zwiększa bieżący popyt (zakupy na zapas, D w prawo); oczekiwana obniżka przesuwa D w lewo.',
              'Liczba i struktura ludności, reklama oraz opinie innych użytkowników.',
              'Gusty i preferencje — kształtowane przez modę, tradycję, efekt naśladownictwa (owczego pędu — kupuję, bo kupują inni) oraz efekt demonstracji (snobizmu — kupuję drogie/rzadkie dobro dla prestiżu).',
            ],
          },
          {
            id: 'nietypowe-funkcje-i-paradoksy',
            title: 'Nietypowe funkcje i 3 paradoksy popytu',
            paragraphs: [
              'Oprócz dwóch skrajnych przypadków (pionowa krzywa popytu sztywnego dla leków bez substytutów oraz pozioma krzywa popytu doskonale elastycznego w konkurencji doskonałej), w ekonomii występują trzy paradoksy, w których krzywa popytu ma dodatnie nachylenie (wzrost ceny zwiększa popyt):',
            ],
            table: {
              caption: 'Trzy paradoksy popytu (wyjątki od prawa popytu — slajdy 94–97)',
              headers: ['Paradoks', 'Jakich dóbr dotyczy?', 'Mechanizm ekonomiczny (klucz na kolokwium)'],
              rows: [
                [
                  'Paradoks Giffena',
                  'Dobra niższego rzędu (podrzędne) o dużym udziale w budżecie ubogich (np. chleb, ziemniaki w XIX-wiecznej Irlandii)',
                  'Brak tańszych substytutów: wzrost ceny chleba zubaża rodzinę tak mocno, że rezygnuje z mięsa i kupuje jeszcze więcej chleba. Ujemny efekt dochodowy jest silniejszy niż efekt substytucyjny!',
                ],
                [
                  'Paradoks Veblena',
                  'Dobra wyższego rzędu (luksusowe, prestiżowe — biżuteria, luksusowe zegarki)',
                  'Wysoka cena świadczy o wyjątkowości i służy demonstracji statusu (efekt snobizmu). Gdy cena spada, produkt staje się masowy i popyt zamożnych maleje.',
                ],
                [
                  'Paradoks spekulacyjny',
                  'Akcje, waluty, nieruchomości, surowce',
                  'Oczekiwania dalszego wzrostu cen wywołują falę zakupów (gra na hossę), a oczekiwany spadek hamuje popyt (gra na bessę).',
                ],
              ],
              highlightFirstColumn: true,
            },
          },
        ],
        quickCheck: {
          id: 'qc-rynek-1',
          question: 'Jaki warunek teoretyczny musi być spełniony, aby wystąpił paradoks Giffena?',
          options: [
            'Dobro musi być luksusowe i służyć demonstracji prestiżu.',
            'Efekt substytucyjny musi być silniejszy niż efekt dochodowy.',
            'Dobro musi być podrzędne, a ujemny efekt dochodowy musi być silniejszy niż efekt substytucyjny.',
            'Konsumenci muszą oczekiwać spadku ceny w przyszłości (bessa).',
          ],
          correctIndex: 2,
          explanation:
            'W paradoksie Giffena wzrost ceny dobra podrzędnego o dużym udziale w budżecie tak silnie obniża realny dochód, że efekt dochodowy przewyższa efekt substytucyjny i wielkość popytu rośnie.',
        },
      },
      {
        id: 'podaz-rownowaga-ceny-urzedowe',
        title: '2. Podaż, równowaga rynkowa oraz ceny minimalne i maksymalne',
        summary:
          'Jak spotykają się decyzje nabywców i producentów oraz co się dzieje, gdy państwo ustawowo zablokuje cenę.',
        paragraphs: [
          'Podaż (S) to ilość dobra, jaką producenci są skłonni zaoferować przy danej cenie w określonym czasie. Prawo podaży mówi o zależności jednokierunkowej (dodatnie nachylenie krzywej S): wyższa cena podnosi opłacalność produkcji, więc wielkość podaży rośnie (ruch po krzywej S).',
          'Pozacenowe determinanty podaży (przesuwające całą krzywą S w prawo przy wzroście podaży lub w lewo przy jej spadku) to: koszty produkcji (ceny surowców, energii, paliw, płac), wprowadzenie nowej technologii, polityka państwa (podatki przesuwają S w lewo, subsydia w prawo; stopy procentowe), oczekiwania producentów co do przyszłych cen, warunki klimatyczne i naturalne, rentowność produkcji dóbr substytucyjnych i komplementarnych w produkcji (np. jagnięcina i wełna) oraz liczba producentów na rynku.',
          'Punkt przecięcia krzywych D i S wyznacza równowagę rynkową E (cena równowagi Pr, ilość równowagi Qr), gdzie Qd = Qs. Powyżej ceny równowagi (p1 > Pr) pojawia się nadwyżka (rynek nabywcy: Qs > Qd), a poniżej (p2 < Pr) — niedobór (rynek sprzedawcy: Qd > Qs). Wzrost popytu podnosi zarówno P*, jak i Q*; spadek podaży (np. droższa energia) podnosi P*, ale obniża Q*.',
        ],
        graph: {
          type: 'supply-demand',
          preset: 'sandbox',
          title: 'Interaktywny model popytu, podaży i równowagi rynkowej',
          caption:
            'Przesuwaj krzywe D i S oraz testuj cenę powyżej i poniżej P*, aby zobaczyć mechanizm nadwyżki i niedoboru.',
          interactive: true,
        },
        subsections: [
          {
            id: 'ceny-minimalne-maksymalne',
            title: 'Interwencja państwa: ceny minimalne i maksymalne',
            paragraphs: [
              'Państwo wprowadza ceny urzędowe na rynkach dóbr ważnych społecznie (produkty rolne, podstawowa żywność, energia, najem mieszkań). Aby cena urzędowa realnie zadziałała (była wiążąca), musi blokować osiągnięcie ceny równowagi — co zawsze prowadzi do trwałej nierównowagi.',
            ],
            table: {
              caption: 'Porównanie wiążącej ceny minimalnej i maksymalnej (slajdy 110–111)',
              headers: ['Instrument', 'Kogo chroni?', 'Warunek wiązania', 'Skutek rynkowy i konsekwencje'],
              rows: [
                [
                  'Cena minimalna (podłoga cenowa)',
                  'Producentów (np. rolników) lub pracowników (płaca minimalna)',
                  'Ustalona POWYŻEJ ceny równowagi (p_min > P*)',
                  'Trwała nadwyżka (Qs > Qd); państwo musi skupować i magazynować niesprzedane nadwyżki.',
                ],
                [
                  'Cena maksymalna (sufit cenowy)',
                  'Konsumentów (np. kontrola czynszów, limit cen żywności/energii)',
                  'Ustalona PONIŻEJ ceny równowagi (p_max < P*)',
                  'Trwały niedobór (Qd > Qs); kolejki, sprzedaż po znajomości lub za łapówki, rozwój czarnego rynku, pogorszenie dostępu uboższych.',
                ],
              ],
              highlightFirstColumn: true,
            },
            callouts: [
              {
                variant: 'trap',
                title: 'Pułapka na kolokwium: „Sufit” i „podłoga” — kiedy cena nie działa?',
                content:
                  'Cena maksymalna ustalona POWYŻEJ równowagi (np. limit 10 zł na chleb kosztujący na rynku 5 zł) jest NIEWIĄŻĄCA — rynek jej w ogóle nie odczuwa. Tak samo niewiążąca jest cena minimalna ustalona PONIŻEJ ceny równowagi!',
              },
            ],
            graph: {
              type: 'supply-demand',
              preset: 'price-controls',
              title: 'Skutki cen maksymalnych i minimalnych na wykresie D–S',
              caption:
                'Porównaj poziom ceny urzędowej względem punktu równowagi E*, aby natychmiast rozpoznać nadwyżkę lub niedobór.',
              interactive: true,
            },
          },
        ],
        quickCheck: {
          id: 'qc-rynek-2',
          question: 'Rząd wprowadza wiążącą cenę maksymalną na rynku mieszkań na wynajem. Jakie będą jej skutki?',
          options: [
            'Cena maksymalna leży powyżej równowagi i wywołuje nadwyżkę wolnych mieszkań.',
            'Cena maksymalna leży poniżej równowagi i wywołuje trwały niedobór oraz ryzyko czarnego rynku.',
            'Krzywa podaży przesuwa się w prawo, więc liczba mieszkań wzrasta.',
            'Rynek pozostaje w równowadze, a jedynie spada zysk pośredników.',
          ],
          correctIndex: 1,
          explanation:
            'Wiążąca cena maksymalna (sufit) musi leżeć poniżej ceny równowagi. Przy sztucznie niskim czynszu rośnie wielkość popytu i maleje wielkość podaży, co rodzi trwały niedobór i nieformalne praktyki (łapówki, czarny rynek).',
        },
      },
      {
        id: 'elastycznosc-cenowa-popytu',
        title: '3. Elastyczność cenowa popytu — metoda punktu środkowego i utarg TR',
        summary:
          'Nie wystarczy wiedzieć, że popyt spadnie po podwyżce — firmy i rząd muszą wiedzieć, o ile procent spadnie.',
        paragraphs: [
          'Elastyczność cenowa popytu (E_p lub E_cPp) mierzy wrażliwość wielkości popytu na zmianę ceny — jest stosunkiem procentowej (względnej) zmiany popytu do procentowej zmiany ceny. Ponieważ w zwykłym wzorze punktowym wynik zależy od tego, czy liczymy zmianę od A do B czy od B do A (na slajdzie 116 dla punktów A(8, 15) i B(20, 5) wzór punktowy daje raz −2,25, a w drugą stronę −0,30!), na wykładzie i kolokwium stosujemy wzór uśredniony (metodę łukową / punktu środkowego), który w obu kierunkach daje ten sam wynik (−6/7 ≈ −0,86).',
        ],
        formulas: [
          {
            title: 'Elastyczność cenowa popytu — wzór ogólny i metoda punktu środkowego (łukowa)',
            latex:
              'E_p = \\frac{\\%\\Delta Q}{\\%\\Delta p} = \\frac{\\dfrac{Q_1 - Q_0}{(Q_1 + Q_0)/2}}{\\dfrac{p_1 - p_0}{(p_1 + p_0)/2}}',
            plainReading:
              'Zmiana ilości podzielona przez średnią ilość, wszystko podzielone przez zmianę ceny podzieloną przez średnią cenę.',
            symbols: [
              { symbol: 'Q_0, Q_1', meaning: 'początkowa i końcowa wielkość popytu' },
              { symbol: 'p_0, p_1', meaning: 'początkowa i końcowa cena dobra' },
            ],
            note: 'Konwencja znaku z ćwiczeń E_08: dla typowych dóbr E_p < 0 (znak minus wynika z prawa popytu). Przy klasyfikacji stopnia elastyczności zawsze porównujemy wartość bezwzględną |E_p| z jedynką!',
          },
        ],
        table: {
          caption: 'Pięć przedziałów elastyczności cenowej popytu i wpływ na utarg całkowity TR = p · Q',
          headers: ['Wartość |E_p|', 'Nazwa popytu', 'Reakcja na zmianę ceny o 10%', 'Kształt krzywej D', 'Jak zwiększyć utarg TR?'],
          rows: [
            ['E_p = 0', 'Sztywny (doskonale nieelastyczny)', '0% (brak reakcji, np. leki bez substytutów)', 'Pionowa', 'Podnosić cenę (TR rośnie proporcjonalnie)'],
            ['0 < |E_p| < 1', 'Mało elastyczny (nieelastyczny)', 'Zmiana Q mniejsza niż 10% (%ΔQ < %Δp)', 'Stroma', 'PODNIEŚĆ cenę (spadek Q jest słabszy niż wzrost p)'],
            ['|E_p| = 1', 'Elastyczność wzorcowa (jednostkowa)', 'Dokładnie 10% (%ΔQ = %Δp)', 'Hiperbola (na slajdzie 45°)', 'Zmiana ceny nie zmienia TR (utarg maksymalny)'],
            ['|E_p| > 1', 'Wysoce elastyczny (elastyczny)', 'Zmiana Q większa niż 10% (%ΔQ > %Δp)', 'Płaska', 'OBNIŻYĆ cenę (silny napływ klientów z nawiązką rekompensuje niższą cenę)'],
            ['|E_p| → ∞', 'Doskonale elastyczny', 'Minimalna podwyżka zeruje sprzedaż (konkurencja doskonała)', 'Pozioma', 'Firma nie ma wpływu na cenę (cenobiorca)'],
          ],
          highlightFirstColumn: true,
        },
        callouts: [
          {
            variant: 'tip',
            title: '5 determinant elastyczności cenowej popytu (slajd 127)',
            content: 'Popyt na dane dobro jest tym BARDZIEJ elastyczny, im:',
            points: [
              '1. Łatwiej o bliskie substytuty (np. masło vs insulina).',
              '2. Dobro ma bardziej luksusowy charakter (dobra podstawowe mają niższą elastyczność).',
              '3. Wyższy jest udział wydatków na to dobro w budżecie konsumenta (podwyżka bardziej obciąża portfel).',
              '4. Dłuższy jest czas dostosowań (w długim okresie łatwiej zmienić nawyki, samochód czy system ogrzewania).',
              '5. Węziej zdefiniowany jest rynek (kajzerki mają wyższą elastyczność niż „pieczywo ogółem”, bo łatwiej o substytut).',
            ],
          },
          {
            variant: 'example',
            title: 'Przykład ze slajdu 128',
            content:
              'Spadek ceny o 1% wywołuje wzrost popytu o 2%. Wówczas E_p = (+2%) / (−1%) = −2, czyli |E_p| = 2 > 1 → popyt wysoce elastyczny (elastyczny).',
          },
        ],
        quickCheck: {
          id: 'qc-rynek-3',
          question: 'Elastyczność cenowa popytu na bilety w pewnym kinie wynosi E_p = −0,6. Co powinien zrobić właściciel, aby zwiększyć utarg całkowity (TR)?',
          options: [
            'Obniżyć ceny biletów, ponieważ popyt jest elastyczny.',
            'Podnieść ceny biletów, ponieważ popyt jest mało elastyczny (|E_p| = 0,6 < 1).',
            'Nie zmieniać cen, ponieważ przy E_p = −0,6 utarg jest już maksymalny.',
            'Zlikwidować zniżki wyłącznie wtedy, gdy E_p = 0.',
          ],
          correctIndex: 1,
          explanation:
            'Ponieważ |E_p| = 0,6 < 1, popyt jest nieelastyczny — procentowy spadek liczby widzów będzie mniejszy niż procentowa podwyżka ceny, więc utarg całkowity TR = p · Q wzrośnie.',
        },
      },
      {
        id: 'elastycznosc-mieszana-dochodowa-podazy',
        title: '4. Elastyczność mieszana, dochodowa (prawo Engla) i elastyczność podaży',
        summary:
          'Jak rozpoznać substytuty, komplementy i dobra luksusowe po jednym znaku liczby oraz co rządzi reakcją podaży.',
        paragraphs: [
          'W elastyczności mieszanej (krzyżowej) oraz dochodowej ZNAK wyniku jest kluczowy — tutaj nigdy nie bierzemy wartości bezwzględnej! To właśnie znak (+ lub −) rozstrzyga o relacji między dobrami lub o typie dobra.',
        ],
        formulas: [
          {
            title: 'Elastyczność mieszana (krzyżowa) cenowa popytu',
            latex:
              'E_{xy} = \\frac{\\%\\Delta Q_x}{\\%\\Delta p_y} = \\frac{\\dfrac{Q_{x1} - Q_{x0}}{(Q_{x1} + Q_{x0})/2}}{\\dfrac{p_{y1} - p_{y0}}{(p_{y1} + p_{y0})/2}}',
            plainReading:
              'Procentowa zmiana popytu na dobro X podzielona przez procentową zmianę ceny innego dobra Y.',
            symbols: [
              { symbol: 'E_{xy} > 0', meaning: 'dobra substytucyjne (drożeje Y → kupujemy więcej X)' },
              { symbol: 'E_{xy} < 0', meaning: 'dobra komplementarne (drożeje Y → kupujemy mniej X)' },
              { symbol: 'E_{xy} = 0', meaning: 'dobra niezależne (neutralne)' },
            ],
            note: 'Przykład ze slajdu 132: jeśli E_xy = 2, to X i Y są substytutami (E > 0); wzrost ceny Y o 50% podniesie popyt na X o 2 × 50% = 100%.',
          },
          {
            title: 'Elastyczność dochodowa popytu oraz elastyczność cenowa podaży',
            latex:
              'E_I = \\frac{\\%\\Delta Q}{\\%\\Delta I}, \\qquad E_S = \\frac{\\%\\Delta Q_S}{\\%\\Delta p}',
            plainReading:
              'Elastyczność dochodowa mierzy reakcję popytu na zmianę dochodu I; elastyczność podaży mierzy reakcję podaży na zmianę ceny (zawsze E_S ≥ 0).',
            symbols: [
              { symbol: 'E_I < 0', meaning: 'dobra podrzędne (niższego rzędu)' },
              { symbol: '0 < E_I < 1', meaning: 'dobra normalne podstawowe (np. żywność)' },
              { symbol: 'E_I = 1', meaning: 'np. odzież, obuwie, mieszkania (zmiana proporcjonalna)' },
              { symbol: 'E_I > 1', meaning: 'dobra normalne wyższego rzędu / luksusowe (RTV, auta, turystyka)' },
            ],
          },
        ],
        callouts: [
          {
            variant: 'law',
            title: 'Prawo Engla (Ernst Engel, slajdy 136–141)',
            content:
              'Wraz ze wzrostem dochodu konsumenta wydatki na żywność rosną kwotowo, ale ich procentowy udział w strukturze domowego budżetu maleje (dla żywności 0 < E_I < 1). Krzywa Engla pokazuje zależność wielkości popytu Q od dochodu I: dla dóbr podrzędnych powyżej progu dochodu I_1 zawraca w lewo (E_I < 0), dla podstawowych wypłaszcza się (0 < E_I < 1), dla odzieży/mieszkań jest prostą pod kątem 45° (E_I = 1), a dla luksusowych rośnie coraz szybciej (E_I > 1).',
          },
        ],
        subsections: [
          {
            id: 'elastycznosc-cenowa-podazy',
            title: 'Elastyczność cenowa podaży (E_S) i jej determinanty',
            paragraphs: [
              'Analogicznie do popytu wyróżniamy podaż sztywną (E_S = 0 — pionowa krzywa w okresie ultrakrótkim, np. godzina lub dzień: świeże ryby na targu, stała pojemność stadionu), mało elastyczną (0 < E_S < 1), jednostkową (E_S = 1 — prosta przez początek układu), wysoce elastyczną (E_S > 1) oraz doskonale elastyczną (E_S → ∞ — pozioma w konkurencji doskonałej).',
            ],
            bullets: [
              'Stopień wykorzystania mocy produkcyjnych — im niższy (większe wolne moce), tym bardziej elastyczna podaż.',
              'Stan zapasów — wysokie zapasy w magazynach pozwalają błyskawicznie zwiększyć podaż (wyższe E_S).',
              'Możliwość przestawienia produkcji — łatwa zmiana asortymentu zwiększa elastyczność podaży.',
              'Długość czasu dostosowań — w długim okresie firmy mogą inwestować w nowe maszyny i fabryki, więc E_S wyraźnie rośnie.',
            ],
            graph: {
              type: 'elasticity-compare',
              preset: 'riviera-vs-cars',
              title: 'Elastyczność podaży w praktyce: podaż nieelastyczna vs elastyczna',
              caption:
                'Zobacz, jak ten sam wzrost popytu działa przy nieelastycznej podaży (nieruchomości na Riwierze — skok ceny) i przy elastycznej podaży (samochody — silny wzrost ilości).',
              interactive: true,
            },
          },
        ],
        quickCheck: {
          id: 'qc-rynek-4',
          question: 'Zgodnie z prawem Engla, gdy dochód gospodarstwa domowego wzrasta, to wydatki na żywność:',
          options: [
            'Maleją zarówno kwotowo, jak i procentowo (żywność jest dobrem podrzędnym).',
            'Rosną kwotowo, ale ich procentowy udział w całkowitych wydatkach maleje (0 < E_I < 1).',
            'Rosną szybciej niż dochód, zwiększając swój udział w budżecie (E_I > 1).',
            'Pozostają dokładnie stałe w każdym przedziale dochodu (E_I = 0).',
          ],
          correctIndex: 1,
          explanation:
            'Żywność ogółem jest dobrem normalnym podstawowym (0 < E_I < 1): bogatsze rodziny wydają na jedzenie więcej w złotówkach (np. lepsza jakość), ale stanowi ono mniejszy procent całego budżetu.',
        },
      },
    ],
  },

  // =========================================================================
  // TEMAT 3: TEORIA WYBORU KONSUMENTA
  // =========================================================================
  {
    slug: 'teoria-konsumenta',
    track: 'micro',
    order: 3,
    title: 'Teoria wyboru konsumenta',
    shortTitle: 'Teoria konsumenta',
    subtitle:
      'Preferencje i krzywe obojętności, krańcowa stopa substytucji (MRS/Kss), użyteczność całkowita i krańcowa (I prawo Gossena), linia ograniczenia budżetowego oraz równowaga konsumenta (II prawo Gossena).',
    sourceLecture: 'Wykład 2: Konsument (slajdy 1–25)',
    estimatedMinutes: 25,
    examWeight: 'wysoka',
    learningObjectives: [
      'Wymienić trzy obszary wyborów konsumenta oraz pięć cech (aksjomatów) preferencji.',
      'Zinterpretować krzywą obojętności, jej własności (w tym zakaz przecinania) oraz krańcową stopę substytucji (MRS / Kss).',
      'Wyjaśnić I prawo Gossena i zależność między użytecznością całkowitą (TU) a krańcową (MU).',
      'Zbudować równanie linii ograniczenia budżetowego i przewidzieć jej przesunięcia oraz obroty po zmianie dochodu lub cen.',
      'Wyznaczyć optimum konsumenta z II prawa Gossena (również algebraicznie, np. dla Użk(x) = 1/X, Użk(y) = 1/Y).',
    ],
    keyTakeaways: [
      'Celem konsumenta (gospodarstwa domowego) jest maksymalizacja użyteczności całkowitej przy ograniczeniu dochodu i cen dóbr.',
      'Krzywe obojętności nigdy się nie przecinają — przecięcie łamałoby założenie o przechodniości preferencji i nienasyceniu.',
      'I prawo Gossena: użyteczność krańcowa (MU) maleje wraz ze wzrostem konsumpcji; gdy MU = 0, użyteczność całkowita (TU) osiąga maksimum.',
      'Zmiana dochodu przesuwa linię budżetu RÓWNOLEGLE (nachylenie −cx/cy bez zmian); zmiana jednej ceny OBRACA ją wokół osi drugiego dobra. Proporcjonalne podwojenie dochodu i obu cen NIE ZMIENIA linii budżetu!',
      'Optimum konsumenta (II prawo Gossena): linia budżetu jest styczna do najwyższej krzywej obojętności, czyli MRS = MUx/MUy = Px/Py (równoważnie MUx/Px = MUy/Py).',
    ],
    sections: [
      {
        id: 'preferencje-krzywe-obojetnosci',
        title: '1. Wybory konsumenta, preferencje i krzywa obojętności',
        summary:
          'Jak ekonomia opisuje gusty i dlaczego mapa krzywych obojętności „łasucha” wygląda inaczej niż „kinomaniaka”.',
        paragraphs: [
          'Konsument (utożsamiany z gospodarstwem domowym) podejmuje trzy fundamentalne rodzaje wyborów: strukturę konsumpcji bieżącej, podział doby między czas pracy a czas wolny oraz konsumpcję międzyokresową (wydatki dziś vs oszczędności na przyszłość). Jego celem jest maksymalizacja użyteczności całkowitej (satysfakcji), jednak z powodu ograniczonego dochodu i cen dóbr wybiera najlepszy z dostępnych koszyków.',
          'Preferencje konsumenta spełniają pięć cech: (1) szeregują koszyki dóbr, (2) są subiektywne, (3) zapewniają porównywalność (zupełność) każdego koszyka, (4) są przechodnie i logiczne (jeśli A lepsze od B i B lepsze od C, to A lepsze od C) oraz (5) cechują się nienasyceniem („konsument woli mieć więcej niż mniej”).',
        ],
        callouts: [
          {
            variant: 'definition',
            title: 'Krzywa obojętności (O / IC) i jej cztery żelazne własności',
            content:
              'Krzywa obojętności to zbiór wszystkich kombinacji ilości dwóch dóbr, które przynoszą konsumentowi dokładnie taki sam poziom użyteczności całkowitej (każdy koszyk na krzywej czyni go jednakowo szczęśliwym).',
            points: [
              'Ma ujemne nachylenie — zwiększając ilość dobra X, trzeba zmniejszyć ilość dobra Y, by pozostać na tym samym poziomie satysfakcji.',
              'Jest wypukła względem początku układu (0,0) — konsument niechętnie oddaje dobro, którego ma mało, a chętniej to, którego ma dużo (malejąca MRS).',
              'Im dalej od początku układu (0,0), tym wyższa użyteczność całkowita (O3 > O2 > O1).',
              'Krzywe obojętności NIE PRZECINAJĄ SIĘ — przecięcie prowadziłoby do sprzeczności z zasadą przechodniości i „więcej znaczy lepiej”.',
            ],
          },
        ],
        formulas: [
          {
            title: 'Krańcowa stopa substytucji (MRS / Kss)',
            latex: 'MRS = K_{ss} = -\\frac{\\Delta Q_y}{\\Delta Q_x} = \\frac{MU_x}{MU_y} = \\frac{\\text{Uż}_k(x)}{\\text{Uż}_k(y)}',
            plainReading:
              'Ilość dobra Y, z której konsument gotów jest zrezygnować, by zyskać jedną dodatkową jednostkę dobra X bez utraty satysfakcji.',
            symbols: [
              { symbol: 'MRS, K_{ss}', meaning: 'krańcowa stopa substytucji (nachylenie krzywej obojętności)' },
              { symbol: '\\Delta Q_y, \\Delta Q_x', meaning: 'zmiany konsumpcji dóbr Y i X wzdłuż krzywej obojętności' },
              { symbol: 'MU_x, MU_y', meaning: 'użyteczności krańcowe dóbr X i Y (pol. Użk(x), Użk(y))' },
            ],
            note: 'Wyprowadzenie ze slajdu 14: wzdłuż krzywej obojętności ΔTU = MUx·ΔQx + MUy·ΔQy = 0, skąd po przekształceniu −ΔQy/ΔQx = MUx/MUy.',
          },
        ],
        subsections: [
          {
            id: 'ksztalty-preferencji',
            title: 'Zróżnicowanie preferencji: łasuch vs kinomaniak (slajd 11)',
            paragraphs: [
              'Jeśli na osi poziomej X odłożymy wizyty w kinie, a na pionowej Y torty czekoladowe, to nachylenie krzywych obojętności zdradza upodobania konsumenta: łasuch (ceni torty Y) ma płaskie krzywe (niska MRS — za oddanie małego kawałka tortu żąda wielu biletów do kina), natomiast kinomaniak (ceni kino X) ma strome krzywe (wysoka MRS — za jeden bilet do kina chętnie odda kilka tortów).',
            ],
          },
        ],
        quickCheck: {
          id: 'qc-kons-1',
          question: 'Dlaczego dwie krzywe obojętności tego samego konsumenta nie mogą się przecinać?',
          options: [
            'Ponieważ ceny dóbr na rynku są zawsze dodatnie.',
            'Ponieważ naruszałoby to założenia przechodniości preferencji i nienasycenia („więcej znaczy lepiej”).',
            'Ponieważ linia budżetowa może być styczna do wielu krzywych naraz.',
            'Ponieważ użyteczność krańcowa nigdy nie może być ujemna.',
          ],
          correctIndex: 1,
          explanation:
            'Gdyby krzywe się przecinały, punkt wspólny oznaczałby równą użyteczność dwóch koszyków, z których jeden zawiera więcej obu dóbr — to łamie przechodniość i aksjomat „więcej znaczy lepiej”.',
        },
      },
      {
        id: 'uzytecznosc-i-prawo-gossena',
        title: '2. Użyteczność całkowita (TU), krańcowa (MU) i I prawo Gossena',
        summary:
          'Dlaczego pierwsza butelka wody na pustyni smakuje lepiej niż czwarta — matematyka nasycenia.',
        paragraphs: [
          'Użyteczność całkowita (TU / Użc) mierzy łączną satysfakcję z całego spożytego koszyka, natomiast użyteczność krańcowa (MU / Użk) określa przyrost użyteczności całkowitej po skonsumowaniu jednej dodatkowej jednostki dobra.',
        ],
        formulas: [
          {
            title: 'Użyteczność krańcowa (MU / Użk)',
            latex: 'MU = \\text{Uż}_k = \\frac{\\Delta TU}{\\Delta Q} = (TU)\'',
            plainReading: 'Przyrost użyteczności całkowitej podzielony przez przyrost ilości dobra (lub pierwsza pochodna TU).',
            symbols: [
              { symbol: 'TU, \\text{Uż}_c', meaning: 'użyteczność całkowita' },
              { symbol: 'MU, \\text{Uż}_k', meaning: 'użyteczność krańcowa' },
            ],
          },
        ],
        callouts: [
          {
            variant: 'law',
            title: 'Pierwsze prawo Gossena (prawo malejącej użyteczności krańcowej)',
            content:
              'W miarę wzrostu konsumpcji danego dobra użyteczność krańcowa (MU) każdej kolejnej jednostki maleje. Dopóki MU > 0, użyteczność całkowita TU rośnie (coraz wolniej); gdy MU = 0, TU osiąga swoje maksimum (punkt nasycenia); gdy MU < 0, TU zaczyna spadać (przesyt).',
          },
          {
            variant: 'example',
            title: 'Zadanie 2 z wykładu (slajd 15): ocena wymiany przy U(X, Y) = X · Y',
            content:
              'Konsument ma 40 jabłek (X) i 5 bananów (Y) → obecna użyteczność U(40, 5) = 40 × 5 = 200 (na tej samej krzywej leżą np. koszyki (20, 10), (10, 20), (50, 4)). Dostaje ofertę wymiany 25 jabłek na 15 bananów → nowy koszyk to (40 − 25, 5 + 15) = (15, 20), co daje U(15, 20) = 15 × 20 = 300 > 200. Wymiana JEST KORZYSTNA, bo przenosi konsumenta na wyższą krzywą obojętności!',
          },
        ],
        table: {
          caption: 'Rozwiązane Zadanie 1 z wykładu (slajd 12): zależność między Użc (TU) a Użk (MU)',
          headers: ['Qx', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
          rows: [
            ['Użc (TU)', '0', '12', '20', '25', '28', '30', '31 (max)', '31 (max)', '29'],
            ['Użk (MU)', '—', '12', '8', '5', '3', '2', '1', '0', '−2'],
          ],
          highlightFirstColumn: true,
        },
        quickCheck: {
          id: 'qc-kons-2',
          question: 'Gdy użyteczność krańcowa (MU) spada, ale nadal jest dodatnia (MU > 0), to użyteczność całkowita (TU):',
          options: [
            'Spada coraz szybciej.',
            'Pozostaje stała.',
            'Nadal rośnie, ale coraz wolniej (malejące przyrosty).',
            'Osiągnęła już swoje absolutne minimum.',
          ],
          correctIndex: 2,
          explanation:
            'Każda kolejna jednostka o dodatniej użyteczności krańcowej (np. +5, +3, +1 w tabeli wyżej) wciąż powiększa sumę (TU rośnie z 20 do 25, 28, 31), tylko w coraz mniejszym tempie. TU zaczyna spadać dopiero przy MU < 0.',
        },
      },
      {
        id: 'linia-ograniczenia-budzetowego',
        title: '3. Linia ograniczenia budżetowego (ścieżka cen)',
        summary:
          'Co konsument MOŻE kupić — równanie budżetu, nachylenie oraz wpływ zmian dochodu i cen.',
        paragraphs: [
          'Linia ograniczenia budżetowego (zwana też linią budżetu lub ścieżką cen) to zbiór wszystkich kombinacji dwóch dóbr, które konsument może kupić przy danym dochodzie (Dk / I) i danych cenach (cx, cy / Px, Py), wydając cały dochód. Obszar pod linią (wraz z nią) tworzy zbiór budżetowy — wszystkie koszyki dostępne finansowo.',
        ],
        formulas: [
          {
            title: 'Równanie budżetowe i jego postać kierunkowa',
            latex:
              'D_k = c_x Q_x + c_y Q_y \\quad (I = P_x Q_x + P_y Q_y) \\qquad \\Longleftrightarrow \\qquad Q_y = -\\frac{c_x}{c_y} Q_x + \\frac{D_k}{c_y}',
            plainReading:
              'Cały dochód dzieli się na wydatki na dobro X i dobro Y; nachylenie linii wynosi minus stosunek ceny X do ceny Y.',
            symbols: [
              { symbol: 'D_k / I', meaning: 'dochód konsumenta (income)' },
              { symbol: 'D_k / c_y', meaning: 'punkt przecięcia z osią pionową Y (maks. ilość dobra Y)' },
              { symbol: 'D_k / c_x', meaning: 'punkt przecięcia z osią poziomą X (maks. ilość dobra X)' },
              { symbol: '-c_x / c_y', meaning: 'nachylenie linii budżetu (relacja cen rynkowych)' },
            ],
          },
        ],
        table: {
          caption: 'Jak zmienia się linia ograniczenia budżetowego? (slajdy 19–22)',
          headers: ['Zdarzenie', 'Co dzieje się z linią?', 'Czy zmienia się nachylenie (−cx/cy)?'],
          rows: [
            ['Wzrost dochodu (Dk ↑)', 'Przesunięcie równoległe na zewnątrz (w górę/prawo)', 'NIE — relacja cen jest bez zmian'],
            ['Spadek dochodu (Dk ↓)', 'Przesunięcie równoległe do wewnątrz (w dół/lewo)', 'NIE'],
            ['Wzrost ceny dobra X (cx ↑)', 'Obrót do wewnątrz wokół nieruchomego punktu na osi Y (Dk/cy)', 'TAK — nachylenie (moduł) rośnie (bardziej stroma)'],
            ['Spadek ceny dobra X (cx ↓)', 'Obrót na zewnątrz wokół punktu na osi Y', 'TAK — nachylenie maleje (bardziej płaska)'],
            ['Wzrost ceny dobra Y (cy ↑)', 'Obrót do wewnątrz wokół nieruchomego punktu na osi X (Dk/cx)', 'TAK — nachylenie maleje'],
            ['Podwojenie Dk, cx i cy naraz (Zad. 4c)', 'NIC SIĘ NIE ZMIENIA (te same punkty przecięcia i nachylenie!)', 'NIE — realna siła nabywcza bez zmian'],
          ],
          highlightFirstColumn: true,
        },
        callouts: [
          {
            variant: 'example',
            title: 'Zadania 3 i 4 z wykładu (slajd 22) w pigułce',
            content:
              'Zadanie 3 (Dk = 4000, cx = 20, cy = 100): Qy = 40 − 0,2·Qx (przecięcia: Xmax = 200, Ymax = 40). Zadanie 4 (Dk = 2000, cx = 2, cy = 4 → Xmax = 1000, Ymax = 500): (a) wzrost Dk o 1000 → przesunięcie równoległe do Xmax = 1500, Ymax = 750; (b) wzrost cx z 2 do 4 → obrót do Xmax = 500 przy stałym Ymax = 500; (c) podwojenie Dk, cx i cy → linia budżetu pozostaje identyczna!',
          },
        ],
        quickCheck: {
          id: 'qc-kons-3',
          question: 'Dochód konsumenta oraz ceny obu kupowanych przez niego dóbr (X i Y) wzrosły jednocześnie dwukrotnie. Co stanie się z jego linią ograniczenia budżetowego?',
          options: [
            'Przesunie się równolegle na zewnątrz (2× dalej od zera).',
            'Obróci się, stając się dwukrotnie bardziej stroma.',
            'Nie zmieni ani położenia, ani nachylenia.',
            'Przesunie się do wewnątrz o połowę.',
          ],
          correctIndex: 2,
          explanation:
            'Nowe maksymalne ilości to (2·Dk)/(2·cx) = Dk/cx oraz (2·Dk)/(2·cy) = Dk/cy, a nachylenie −(2·cx)/(2·cy) = −cx/cy. Linia ograniczenia budżetowego pozostaje dokładnie w tym samym miejscu.',
        },
      },
      {
        id: 'rownowaga-konsumenta-ii-prawo-gossena',
        title: '4. Równowaga (optimum) konsumenta i II prawo Gossena',
        summary:
          'Zderzenie marzeń (krzywe obojętności) z portfelem (linia budżetu) wyznacza koszyk optymalny.',
        paragraphs: [
          'Punkt równowagi (optimum) konsumenta E to punkt styczności linii ograniczenia budżetowego z możliwie najwyżej położoną krzywą obojętności. W punkcie styczności nachylenie krzywej obojętności (MRS / Kss) jest dokładnie równe nachyleniu linii ograniczenia budżetowego (relacji cen cx/cy). Koszyki na wyższej krzywej są finansowo nieosiągalne, a punkty przecięcia z niższą krzywą marnują potencjał budżetu.',
        ],
        formulas: [
          {
            title: 'Warunek równowagi konsumenta — II prawo Gossena',
            latex:
              'MRS = \\frac{c_x}{c_y} \\qquad \\Longleftrightarrow \\qquad \\frac{\\text{Uż}_k(x)}{\\text{Uż}_k(y)} = \\frac{c_x}{c_y} \\qquad \\Longleftrightarrow \\qquad \\frac{MU_x}{P_x} = \\frac{MU_y}{P_y}',
            plainReading:
              'W optimum ostatnia złotówka wydana na dobro X daje dokładnie tyle samo użyteczności krańcowej, co ostatnia złotówka wydana na dobro Y.',
            symbols: [
              { symbol: 'MU_x / P_x', meaning: 'użyteczność krańcowa z 1 zł wydanej na dobro X' },
              { symbol: 'MU_y / P_y', meaning: 'użyteczność krańcowa z 1 zł wydanej na dobro Y' },
            ],
          },
        ],
        callouts: [
          {
            variant: 'example',
            title: 'Rozwiązane Zadanie 5 z wykładu (slajd 25): wyznaczenie optimum',
            content:
              'Dane: Dk = 4000, cx = 4, cy = 8, Użk(x) = 1/X, Użk(y) = 1/Y. Krok 1 (II prawo Gossena): (1/X)/4 = (1/Y)/8 → 4X = 8Y → X = 2Y. Krok 2 (równanie budżetu): 4X + 8Y = 4000 → 4(2Y) + 8Y = 4000 → 16Y = 4000 → Y = 250 oraz X = 500. Sprawdzenie: 4×500 + 8×250 = 4000 zł, a obie ważone użyteczności krańcowe wynoszą 1/2000.',
          },
        ],
        graph: {
          type: 'consumer',
          preset: 'interactive',
          title: 'Interaktywna równowaga konsumenta: linia budżetowa i krzywe obojętności',
          caption:
            'Zmieniaj dochód I oraz ceny Px i Py suwakami, aby zobaczyć przesunięcie lub obrót linii budżetu oraz nowy punkt styczności E (MRS = Px/Py).',
          interactive: true,
        },
        quickCheck: {
          id: 'qc-kons-4',
          question: 'Konsument wydaje cały budżet na kawę (X) i ciastka (Y). Obecnie MUx/Px = 10, a MUy/Py = 4. Co powinien zrobić, aby zwiększyć satysfakcję?',
          options: [
            'Kupować więcej ciastek (Y) kosztem kawy (X).',
            'Kupować więcej kawy (X) i mniej ciastek (Y), aż oba ilorazy się zrównają.',
            'Nic nie zmieniać — osiągnął już optimum konsumenta.',
            'Zmniejszyć zakupy obu dóbr o połowę.',
          ],
          correctIndex: 1,
          explanation:
            'Złotówka wydana na kawę daje aż 10 jednostek satysfakcji wobec 4 na ciastka. Zwiększanie zakupów kawy (i ograniczanie ciastek) podniesie TU; dzięki I prawu Gossena MUx spadnie, a MUy wzrośnie aż do wyrównania MUx/Px = MUy/Py.',
        },
      },
    ],
  },

  // =========================================================================
  // TEMAT 4: PRZEDSIĘBIORSTWO, PRODUKCJA I KOSZTY
  // =========================================================================
  {
    slug: 'przedsiebiorstwo-i-koszty',
    track: 'micro',
    order: 4,
    title: 'Przedsiębiorstwo, teoria produkcji i koszty',
    shortTitle: 'Przedsiębiorstwo i koszty',
    subtitle:
      'Formy prawne i wielkość firm, utarg i zysk ekonomiczny, prawo malejących przychodów, izokwanty i izokoszty, krzywe kosztów krótkookresowych (OT i cena zamknięcia) oraz korzyści i niekorzyści skali.',
    sourceLecture: 'Wykład 3: Przedsiębiorstwo (slajdy 1–61, 67–68)',
    estimatedMinutes: 30,
    examWeight: 'kluczowa',
    learningObjectives: [
      'Sklasyfikować przedsiębiorstwa według kryteriów wielkości UE oraz form prawnych (spółki osobowe vs kapitałowe).',
      'Obliczyć utarg (TR, AR, MR), koszty ekonomiczne oraz odróżnić zysk księgowy od ekonomicznego.',
      'Wyjaśnić prawo malejących przychodów i relacje między Q (Pc), AP (Pp) i MP (Pk) w krótkim okresie.',
      'Zinterpretować izokwanty, MRST, efekty skali, izokosztę i optimum producenta w długim okresie.',
      'Rozróżnić wszystkie krzywe kosztów (TC, FC, VC, ATC, AVC, AFC, MC), optimum technologiczne (OT) oraz granicę racjonalnych strat (cenę zamknięcia cz).',
    ],
    keyTakeaways: [
      'Koszty ekonomiczne = koszty księgowe + koszty alternatywne (utracona płaca, czynsz, odsetki właściciela). Zysk ekonomiczny = 0 oznacza zysk normalny.',
      'W krótkim okresie co najmniej jeden czynnik jest stały i działa prawo malejących przychodów; w długim wszystkie czynniki i koszty są zmienne i prawo to nie działa.',
      'Krzywa MP przecina AP od góry w maksimum AP; gdy MP = 0, produkcja całkowita Q osiąga maksimum.',
      'Krzywa kosztu krańcowego MC zawsze przecina krzywe AVC i ATC od dołu dokładnie w ich punktach minimum!',
      'Minimum ATC wyznacza Optimum Technologiczne (OT — najniższy koszt jednostkowy), a minimum AVC wyznacza granicę racjonalnych strat (cenę zamknięcia cz).',
      'W długim okresie spadek LRATC (DKp) to korzyści skali (technologiczne, marketingowe, finansowe), a jego wzrost to niekorzyści skali (menedżerskie, geograficzne).',
    ],
    sections: [
      {
        id: 'przedsiebiorstwo-formy-prawne',
        title: '1. Przedsiębiorstwo, kryteria wielkości i formy prawne',
        summary:
          'Jak klasyfikujemy firmy według zatrudnienia i jak spółki osobowe różnią się odpowiedzialnością od spółek kapitałowych.',
        paragraphs: [
          'Przedsiębiorstwo to podmiot gospodarczy prowadzący działalność produkcyjną, handlową lub usługową w celach zarobkowych (osiągnięcie zysku) i na własny rachunek. Miarą jego wielkości są liczba zatrudnionych, wielkość produkcji sprzedanej oraz wartość majątku trwałego.',
          'Według umownych kryteriów zatrudnienia w UE wyróżniamy przedsiębiorstwa: małe (do 50 osób, w tym mikroprzedsiębiorstwa do 10 osób — najliczniejsza grupa w gospodarce), średnie (50–250 osób) oraz duże (powyżej 250 osób). Małe firmy są zwykle elastyczne, silnie zmotywowane i szybko reagują na popyt, ale trudniej im zgromadzić duży kapitał na rozwój — dlatego łączą się w spółki, aby uzyskać korzyści skali.',
        ],
        table: {
          caption: 'Porównanie form prawnych spółek omawianych na wykładzie (slajdy 8–18)',
          headers: ['Forma prawna', 'Podstawowe cechy', 'Odpowiedzialność wspólników'],
          rows: [
            [
              'Spółka jawna (osobowa)',
              'Umowne zrzeszenie ≥ 2 osób, wspólne prowadzenie firmy; zbycie udziału wymaga zwykle zgody partnerów (PIT wspólników)',
              'Pełna i solidarna odpowiedzialność wszystkich wspólników całym majątkiem',
            ],
            [
              'Spółka komandytowa (osobowa)',
              'Odmiana spółki jawnej z dwoma rodzajami wspólników',
              'Komplementariusze — całym majątkiem; komandytariusze — tylko do wysokości sumy komandytowej',
            ],
            [
              'Spółka z o.o. (kapitałowa)',
              'Osobowość prawna, akt notarialny, wpis do KRS; organy: zgromadzenie wspólników, zarząd, rada nadzorcza',
              'Ograniczona do wysokości wniesionych udziałów kapitałowych',
            ],
            [
              'Spółka akcyjna — S.A. (kapitałowa)',
              'Osobowość prawna, kapitał w akcjach (wielu akcjonariuszy); finansowanie wewnętrzne (zysk niepodzielony, amortyzacja) i zewnętrzne (akcje, obligacje, kredyty)',
              'Ograniczona do wysokości zakupionych akcji',
            ],
          ],
          highlightFirstColumn: true,
        },
        callouts: [
          {
            variant: 'trap',
            title: 'Aktualizacja prawna do Slajdu 16 (Spółka z o.o. — KSH)',
            content:
              'Na slajdzie 16 z prezentacji widnieje historyczny zapis KSH sprzed 2009 r. („kapitał zakładowy min. 50 000 zł, udział min. 500 zł”). Zgodnie z obowiązującym od 8 stycznia 2009 r. art. 154 Kodeksu spółek handlowych minimalny kapitał zakładowy sp. z o.o. wynosi 5 000 zł, a minimalna wartość udziału 50 zł. Warto pamiętać oba progi!',
          },
        ],
        subsections: [
          {
            id: 'utarg-koszty-ekonomiczne-zysk',
            title: 'Utarg, koszty księgowe vs ekonomiczne oraz zysk (slajdy 19–25)',
            paragraphs: [
              'Klasycznym celem firmy jest maksymalizacja zysku całkowitego: Π = TR − TC (Mankiw) lub Zc = Uc − Kc (Milewski). Zysk jest specyficzną, wynikową formą dochodu (może być dodatni lub ujemny — strata), nie podlega wcześniejszym negocjacjom i decyduje o inwestycjach, samofinansowaniu, dywidendach oraz motywacji.',
              'Kluczowe jest rozróżnienie kosztów księgowych (faktycznie poniesionych, udokumentowanych wydatków na surowce, płace, energię, czynsz) od kosztów alternatywnych (utraconych dochodów z najlepszego alternatywnego użycia własnych zasobów właściciela). Koszty ekonomiczne to suma kosztów księgowych i alternatywnych.',
            ],
            formulas: [
              {
                title: 'Kategorie utargu (przychodu) oraz zysk księgowy i ekonomiczny',
                latex:
                  'TR = p \\cdot Q, \\quad AR = \\frac{TR}{Q} = p, \\quad MR = \\frac{\\Delta TR}{\\Delta Q} \\\\[6pt] \\Pi_{\\text{ekon}} = TR - (\\text{Koszty księgowe} + \\text{Koszty alternatywne})',
                plainReading:
                  'Utarg przeciętny równa się cenie, utarg krańcowy to przychód z ostatniej sprzedanej sztuki, a zysk ekonomiczny odejmuje zarówno koszty jawne, jak i utracone korzyści alternatywne.',
                symbols: [
                  { symbol: 'TR / U_c', meaning: 'utarg całkowity (total revenue)' },
                  { symbol: 'AR / U_p', meaning: 'utarg przeciętny (average revenue)' },
                  { symbol: 'MR / U_k', meaning: 'utarg krańcowy (marginal revenue)' },
                ],
              },
            ],
            callouts: [
              {
                variant: 'example',
                title: 'Rozwiązane zadanie ze slajdu 25: zysk księgowy vs ekonomiczny',
                content:
                  'Firma osiąga TR = 400 000 zł przy kosztach księgowych 100 000 zł. Właściciel mógłby zarobić 60 000 zł na etacie i 70 000 zł za wynajem własnego lokalu. Wyniki: (a) Zysk księgowy = 400 000 − 100 000 = 300 000 zł; (b) Koszty alternatywne = 60 000 + 70 000 = 130 000 zł; (c) Koszty ekonomiczne = 100 000 + 130 000 = 230 000 zł; (d) Zysk ekonomiczny = 400 000 − 230 000 = 170 000 zł (> 0, czyli biznes bije alternatywę na głowę!).',
              },
            ],
          },
        ],
        quickCheck: {
          id: 'qc-firma-1',
          question: 'Przedsiębiorca osiągnął przychód 200 tys. zł, koszty księgowe 140 tys. zł, a rezygnując z pracy na etacie utracił 70 tys. zł pensji. Jaki jest jego zysk księgowy i ekonomiczny?',
          options: [
            'Księgowy: +60 tys. zł; ekonomiczny: +130 tys. zł.',
            'Księgowy: +60 tys. zł; ekonomiczny: −10 tys. zł (strata ekonomiczna).',
            'Księgowy: −10 tys. zł; ekonomiczny: +60 tys. zł.',
            'Oba wynoszą dokładnie +60 tys. zł.',
          ],
          correctIndex: 1,
          explanation:
            'Zysk księgowy = 200 − 140 = +60 tys. zł. Koszty ekonomiczne = 140 + 70 = 210 tys. zł, więc zysk ekonomiczny = 200 − 210 = −10 tys. zł (na etacie zarobiłby o 10 tys. zł więcej).',
        },
      },
      {
        id: 'teoria-produkcji-krotki-dlugi',
        title: '2. Teoria produkcji: prawo malejących przychodów, izokwanty i izokoszty',
        summary:
          'Co się dzieje, gdy dokładamy kolejnych pracowników do stałej liczby maszyn (okres krótki) vs gdy zmieniamy całą fabrykę (okres długi).',
        paragraphs: [
          'Funkcja produkcji Q = f(Nz, Nk, Np) opisuje przyczynowo-skutkową zależność między nakładami czynników a wielkością produkcji (Q / Pc). W ekonomii okres krótki to taki, w którym co najmniej jeden czynnik produkcji jest stały (np. maszyny, powierzchnia hali), a inny zmienny (praca). W okresie długim wszystkie czynniki produkcji są zmienne (jego realna długość zależy od specyfiki branży i cyklu inwestycyjnego).',
        ],
        formulas: [
          {
            title: 'Produkt przeciętny (AP / Pp) i produkt krańcowy (MP / Pk)',
            latex: 'AP = P_p = \\frac{Q}{L}, \\qquad MP = P_k = \\frac{\\Delta Q}{\\Delta L}',
            plainReading:
              'Produkt przeciętny to średnia produkcja na pracownika; produkt krańcowy to dodatkowa produkcja wytworzona przez ostatniego zatrudnionego pracownika.',
            symbols: [
              { symbol: 'Q / P_c', meaning: 'produkt całkowity' },
              { symbol: 'L / N_p', meaning: 'nakład pracy (liczba pracowników)' },
            ],
          },
        ],
        table: {
          caption: 'Krótkookresowa funkcja produkcji z wykładu (slajdy 29–33) i kluczowe punkty wykresu',
          headers: ['Pracownicy L', '0', '1', '2', '3', '4 (pkt a/A)', '5 (pkt b)', '6', '7 (pkt C/c)', '8'],
          rows: [
            ['Produkt całkowity Q (Pc)', '0', '5', '12', '21', '32', '40', '42', '42 (max)', '40'],
            ['Produkt przeciętny AP (Pp)', '—', '5', '6', '7', '8', '8 (max)', '7', '6', '5'],
            ['Produkt krańcowy MP (Pk)', '—', '5', '7', '9', '11 (max)', '8', '2', '0', '−2'],
          ],
          highlightFirstColumn: true,
        },
        callouts: [
          {
            variant: 'law',
            title: 'Prawo malejących przychodów (prawo malejącej produkcyjności krańcowej — slajd 33)',
            content:
              'Od punktu a (maksimum MP = 11, odpowiadającego punktowi przegięcia A krzywej Q) dalsze zwiększanie nakładu czynnika zmiennego L przy stałym kapitale daje coraz mniejsze przyrosty produkcji całkowitej (MP spada). W punkcie b (L = 5) MP przecina AP w jego maksimum (8). W punkcie C/c (L = 7) MP = 0, a Q osiąga maksimum (42); przy L = 8 MP jest ujemne (−2) i Q spada.',
          },
        ],
        subsections: [
          {
            id: 'izokwanty-izokoszty-efekty-skali',
            title: 'Długookresowa teoria produkcji: izokwanty, MRST, efekty skali i izokoszta (slajdy 34–48)',
            paragraphs: [
              'W długim okresie przedsiębiorstwo wybiera skalę działalności, lokalizację (blisko surowców vs blisko rynku zbytu) oraz technikę wytwarzania (pracochłonną vs kapitałochłonną). Graficznym narzędziem analizy są izokwanta i izokoszta — stanowią one dokładny odpowiednik krzywej obojętności i linii budżetu z teorii konsumenta!',
            ],
            bullets: [
              'Izokwanta (krzywa jednakowego produktu) — zbiór kombinacji pracy (L) i kapitału (K) dających tę samą produkcję Q. Ma ujemne nachylenie, jest wypukła ku (0,0), izokwanty nie przecinają się, a wyższa izokwanta oznacza większą produkcję.',
              'Efekty skali na mapie izokwant (przy proporcjonalnym wzroście nakładów): stałe (równe odstępy: 100 → 200 → 300), rosnące (odstępy maleją: 100 → 200 → 350) oraz malejące (odstępy rosną: 100 → 200 → 250).',
              'Izokoszta (linia jednakowego kosztu) — kombinacje L i K osiągalne przy danym koszcie całkowitym TC i danych cenach czynników; jej nachylenie wynosi −pL/pK (−cp/ck).',
              'Optymalna kombinacja czynników (punkt styczności E): maksymalizacja Q przy danym TC (najwyższa izokwanta styczna do izokoszty) LUB minimalizacja TC przy danym Q (najniższa izokoszta styczna do izokwanty).',
            ],
            formulas: [
              {
                title: 'Krańcowa stopa substytucji technicznej (MRST) i optimum producenta',
                latex: 'MRST = -\\frac{\\Delta K}{\\Delta L} = \\frac{MP_L}{MP_K}, \\qquad \\text{Optimum producenta: } \\frac{MP_L}{MP_K} = \\frac{p_L}{p_K}',
                plainReading:
                  'W optimum krańcowa stopa substytucji technicznej (iloraz produktów krańcowych pracy i kapitału) równa się relacji ich cen.',
                symbols: [
                  { symbol: 'MRST', meaning: 'krańcowa stopa substytucji technicznej (nachylenie izokwanty)' },
                  { symbol: 'MP_L, MP_K', meaning: 'krańcowy produkt pracy (KPp) i kapitału (KPk)' },
                  { symbol: 'p_L, p_K', meaning: 'ceny jednostkowe pracy i kapitału' },
                ],
              },
            ],
          },
        ],
        quickCheck: {
          id: 'qc-firma-2',
          question: 'Co dzieje się z produktem całkowitym (Q), gdy produkt krańcowy (MP) spada do zera (MP = 0)?',
          options: [
            'Produkt całkowity Q również wynosi zero.',
            'Produkt całkowity Q osiąga swoje maksimum.',
            'Produkt przeciętny AP osiąga swoje maksimum.',
            'Zaczyna dopiero działać prawo malejących przychodów.',
          ],
          correctIndex: 1,
          explanation:
            'Gdy MP = 0 (punkt c na wykresie ze slajdu 33), dodatkowy pracownik nic już nie dokłada — to szczyt (maksimum) produktu całkowitego Q. Kolejny pracownik ma MP < 0 i obniża Q.',
        },
      },
      {
        id: 'koszty-krotkookresowe',
        title: '3. Koszty krótkookresowe, Optimum Technologiczne (OT) i cena zamknięcia (cz)',
        summary:
          'Cała geometria krzywych MC, ATC, AVC i AFC — najważniejszy wykres w mikroekonomii przedsiębiorstwa.',
        paragraphs: [
          'W krótkim okresie koszty całkowite (TC / Kc) dzielą się na koszty stałe (FC / Ks — niezależne od produkcji, np. czynsz, dzierżawa, amortyzacja, administracja) oraz koszty zmienne (VC / Kz — rosnące wraz z produkcją, np. surowce, płace robotników). Dzieląc je przez wielkość produkcji Q, otrzymujemy koszty przeciętne (jednostkowe): AFC, AVC oraz ATC.',
          'Najważniejszą relacją na wykresie kosztów jest przebieg krzywej kosztu krańcowego (MC / Kk): początkowo spada (rosnąca specjalizacja), osiąga minimum (punkt A przy Q1), a następnie ostro rośnie (efekt prawa malejących przychodów). Rosnąca krzywa MC przecina od dołu najpierw krzywą AVC w jej minimum (punkt B przy Q2), a potem krzywą ATC w jej minimum (punkt C / OT przy Q3).',
        ],
        formulas: [
          {
            title: 'Zestaw wzorów kosztów krótkookresowych (Mankiw / Milewski)',
            latex:
              'TC = FC + VC \\; (K_c = K_s + K_z), \\qquad ATC = \\frac{TC}{Q} = AFC + AVC \\\\[6pt] AFC = \\frac{FC}{Q}, \\qquad AVC = \\frac{VC}{Q}, \\qquad MC = \\frac{\\Delta TC}{\\Delta Q} = \\frac{\\Delta VC}{\\Delta Q} = (TC)\'',
            plainReading:
              'Koszt krańcowy zależy wyłącznie od zmiany kosztów zmiennych (bo ΔFC = 0). Koszt przeciętny stały AFC stale maleje wraz ze wzrostem Q.',
            symbols: [
              { symbol: 'TC, FC, VC', meaning: 'koszt całkowity (Kc), stały (Ks) i zmienny (Kz)' },
              { symbol: 'ATC, AVC, AFC', meaning: 'koszt przeciętny całkowity (Kp), zmienny (Kpz) i stały (Kps)' },
              { symbol: 'MC / K_k', meaning: 'koszt krańcowy' },
            ],
          },
        ],
        callouts: [
          {
            variant: 'definition',
            title: 'Optimum Technologiczne (OT) vs Granica racjonalnych strat (cena zamknięcia cz)',
            content:
              'Zapamiętaj dwa kluczowe minima na wykresie kosztów krótkookresowych (slajdy 52, 67–68):',
            points: [
              'Optimum Technologiczne (OT) = minimum ATC (Kp) — produkcja o najniższym koszcie jednostkowym (przecięcie MC = min ATC).',
              'Granica racjonalnych strat / Cena zamknięcia (cz) = minimum AVC (Kpz) — dopóki cena p > min AVC (choćby p < ATC i firma ma stratę), w krótkim okresie należy kontynuować produkcję, bo utarg pokrywa wszystkie koszty zmienne VC i część kosztów stałych FC! Poniżej min AVC natychmiast wstrzymujemy produkcję.',
            ],
          },
          {
            variant: 'trap',
            title: 'Pułapka na kolokwium: Dlaczego MC nie zależy od kosztów stałych (FC)?',
            content:
              'Koszty stałe FC są jednakowe przy każdej wielkości produkcji (ΔFC = 0). Dlatego wzrost czynszu podnosi FC, TC, AFC i ATC, ale NIE PRZESUWA krzywych AVC ani MC!',
          },
        ],
        graph: {
          type: 'cost-curves',
          preset: 'interactive',
          title: 'Interaktywne krzywe kosztów firmy: MC, ATC, AVC i AFC',
          caption:
            'Przesuwaj poziom ceny P, aby zobaczyć 3 strefy decyzji firmy: zysk ekonomiczny (P > min ATC), racjonalną stratę z dalszą produkcją (min AVC < P < min ATC) oraz zamknięcie (P < min AVC).',
          interactive: true,
        },
        quickCheck: {
          id: 'qc-firma-3',
          question: 'Cena rynkowa wynosi 12 zł, minimalny koszt przeciętny całkowity ATC = 15 zł, a minimalny koszt przeciętny zmienny AVC = 10 zł. Co powinna zrobić firma w krótkim okresie?',
          options: [
            'Natychmiast zamknąć zakład, ponieważ ponosi stratę (12 < 15).',
            'Kontynuować produkcję mimo straty, ponieważ p = 12 > min AVC = 10 (pokrywa koszty zmienne i część stałych).',
            'Osiąga dodatni zysk ekonomiczny 2 zł na sztuce.',
            'Zwiększyć koszty stałe, aby obniżyć MC.',
          ],
          correctIndex: 1,
          explanation:
            'Granica racjonalnych strat (cena zamknięcia) to min AVC = 10 zł. Przy cenie 12 zł firma pokrywa cały koszt zmienny i dokłada 2 zł na sztukę do pokrycia kosztów stałych — strata jest więc mniejsza niż przy zamknięciu.',
        },
      },
      {
        id: 'koszty-dlugookresowe-skala',
        title: '4. Koszty długookresowe: korzyści i niekorzyści skali',
        summary:
          'Dlaczego duże firmy produkują taniej (do pewnego rozmiaru) i dlaczego molochy zaczynają tracić efektywność.',
        paragraphs: [
          'W długim okresie wszystkie czynniki produkcji i wszystkie koszty są zmienne, a prawo malejących przychodów nie działa. Zamiast niego kształt krzywej długookresowego kosztu przeciętnego (LRATC / DKp — spłaszczona litera U) wyznaczają efekty skali: początkowo korzyści skali (DKp spada, koszty rosną wolniej niż produkcja), następnie strefa stabilizacji kosztów (stałe korzyści skali, DKp = const), a przy bardzo dużej skali — niekorzyści skali (DKp rośnie).',
        ],
        table: {
          caption: 'Źródła korzyści i niekorzyści skali (slajdy 56–61)',
          headers: ['Kategoria', 'Rodzaj źródła', 'Przykłady z wykładu'],
          rows: [
            [
              'Wewnętrzne korzyści skali',
              'Technologiczne',
              'Specjalizacja i podział pracy; lepsze wykorzystanie niepodzielnych maszyn (dźwigi, piece hutnicze); mniejszy wzrost nakładów niż efektów przy powiększaniu obiektów (np. kontenerów); produkcja wielofazowa; zagospodarowanie odpadów; własne B+R.',
            ],
            [
              'Wewnętrzne korzyści skali',
              'Marketingowe',
              'Rabaty przy hurtowych zakupach surowców; wolniejszy wzrost kosztów pakowania i transportu; specjaliści ds. zaopatrzenia i zbytu; niższy koszt reklamy na sztukę.',
            ],
            [
              'Wewnętrzne korzyści skali',
              'Finansowe',
              'Łatwiejszy i tańszy dostęp do kredytów; dywersyfikacja źródeł finansowania.',
            ],
            [
              'Zewnętrzne korzyści (i niekorzyści)',
              'Branżowe / otoczenia',
              'Tanie źródła surowców, system dystrybucji, serwis, wykwalifikowani fachowcy, infrastruktura przemysłowa (zewnętrzne niekorzyści: wyczerpywanie surowców, brak kadr).',
            ],
            [
              'Wewnętrzne niekorzyści skali',
              'Menedżerskie i geograficzne',
              'Menedżerskie: trudności w zarządzaniu i koordynacji, pogorszenie relacji zarząd–personel, spadek motywacji. Geograficzne: konieczność sięgania po coraz odleglejsze źródła surowców.',
            ],
          ],
          highlightFirstColumn: true,
        },
        quickCheck: {
          id: 'qc-firma-4',
          question: 'Jeśli wraz ze wzrostem rozmiarów produkcji w długim okresie długookresowy koszt przeciętny (LRATC / DKp) spada, to przedsiębiorstwo osiąga:',
          options: [
            'Niekorzyści skali (malejące korzyści skali).',
            'Korzyści skali (rosnące korzyści skali).',
            'Prawo malejących przychodów.',
            'Punkt zamknięcia.',
          ],
          correctIndex: 1,
          explanation:
            'Korzyści skali oznaczają, że koszty całkowite rosną wolniej niż produkcja, więc długookresowy koszt przeciętny (DKp) spada. Pamiętaj: prawo malejących przychodów dotyczy wyłącznie okresu krótkiego!',
        },
      },
    ],
  },

  // =========================================================================
  // TEMAT 5: STRUKTURY RYNKU, KONKURENCJA DOSKONAŁA I MONOPOL
  // =========================================================================
  {
    slug: 'struktury-rynku-i-monopol',
    track: 'micro',
    order: 5,
    title: 'Struktury rynku, konkurencja doskonała i monopol',
    shortTitle: 'Struktury rynku i monopol',
    subtitle:
      'Porównanie 4 struktur rynkowych, reguła optimum ekonomicznego (MR = MC), równowaga firmy wolnokonkurencyjnej i monopolisty, społeczny koszt monopolu (DWL), dyskryminacja cenowa, formy monopolizacji i instytucje ochrony konkurencji.',
    sourceLecture: 'Wykład 3: Struktury rynkowe i monopol (slajdy 62–94) + Zadania 8.11',
    estimatedMinutes: 35,
    examWeight: 'kluczowa',
    learningObjectives: [
      'Porównać cztery struktury rynku: konkurencję doskonałą, konkurencję monopolistyczną, oligopol i monopol.',
      'Zastosować uniwersalną regułę maksymalizacji zysku (MR = MC) w konkurencji doskonałej oraz w monopolu (graficznie, algebraicznie i tabelarycznie).',
      'Wyznaczyć i wyjaśnić społeczny koszt monopolu (DWL) oraz rozpoznać pułapkę braku krzywej ATC.',
      'Opisać mechanizm dyskryminacji cenowej i cechy monopolu naturalnego.',
      'Rozróżnić 6 form monopolizacji (pool, kartel, syndykat, koncern, konglomerat, holding) oraz polskie instytucje antymonopolowe i konsumenckie.',
    ],
    keyTakeaways: [
      'Optimum Ekonomiczne (OE) KAŻDEJ firmy (niezależnie od struktury rynku) spełnia warunek MR = MC (Uk = Kk).',
      'W konkurencji doskonałej pojedyncza firma jest cenobiorcą (p = AR = MR); w długim okresie cena spada do minimum LRATC i zysk ekonomiczny wynosi zero.',
      'Monopolista ma MR < P; wyznacza Qm z przecięcia MR = MC, a cenę monopolową Pm odczytuje W GÓRĘ z krzywej popytu D!',
      'Monopol produkuje MNIEJ (Qm < Qkd) po WYŻSZEJ cenie (Pm > Pkd) niż konkurencja doskonała, powodując społeczną stratę dobrobytu (DWL).',
      'Pułapka z ćwiczeń (Q179): mając na wykresie tylko D, MR i MC (bez ATC/FC), policzysz Qm, Pm i DWL, ale NIE MOŻESZ obliczyć zysku monopolisty!',
      'Formy koncentracji: luźne porozumienia (pool, kartel, syndykat ze wspólnym biurem sprzedaży) vs ścisłe struktury kapitałowe (koncern, konglomerat, holding).',
    ],
    sections: [
      {
        id: 'cztery-struktury-rynku',
        title: '1. Porównanie czterech struktur rynkowych i reguła OE (MR = MC)',
        summary:
          'Pełna tabela podsumowująca ze slajdu 63 oraz uniwersalna reguła maksymalizacji zysku.',
        paragraphs: [
          'Ekonomia wyróżnia rynek doskonały (konkurencja doskonała) oraz trzy odmiany konkurencji niedoskonałej (konkurencja monopolistyczna, oligopol, monopol). Różnią się one liczbą sprzedawców, jednorodnością produktu, barierami wejścia i wpływem firmy na cenę.',
        ],
        table: {
          caption: 'Podsumowanie 4 struktur rynkowych (dokładna tabela ze slajdu 63)',
          headers: ['Cecha rynku', 'Konkurencja doskonała', 'Konkurencja monopolistyczna', 'Oligopol', 'Monopol'],
          rows: [
            ['Liczba producentów', 'Wiele', 'Wiele', 'Kilka', 'Jeden'],
            [
              'Zróżnicowanie produktu',
              'Identyczne, homogeniczne',
              'Zróżnicowane (bliskie substytuty: lokalizacja, marka)',
              'Mniej lub bardziej zróżnicowane',
              'Produkt unikalny (brak substytutów)',
            ],
            ['Wpływ na cenę', 'Żaden (cenobiorca)', 'Ograniczony', 'Średni', 'Znaczny (cenodawca)'],
            ['Swoboda wejścia', 'Pełna', 'Pełna', 'Ograniczona', 'Brak (silne bariery)'],
            ['Korzyści skali', 'Małe', 'Małe', 'Przeciętne', 'Duże'],
            [
              'Metody marketingu',
              'Wymiana rynkowa lub aukcja',
              'Reklama, konkurencja jakościowa, różnicowanie cen',
              'Reklama, konkurencja jakościowa, różnicowanie cen',
              'Reklama, polityka cenowa (różnicowanie cen)',
            ],
            [
              'Przykłady',
              'Nieprzetworzone produkty rolne (owoce, pszenica)',
              'Handel detaliczny (spożywcze, benzyna), fryzjer, restauracje',
              'Motoryzacja, elektronika, tytoń, stal, aluminium',
              'Monopole państwowe, lokalne sieci/linie',
            ],
          ],
          highlightFirstColumn: true,
        },
        formulas: [
          {
            title: 'Uniwersalne Optimum Ekonomiczne (OE) oraz zysk jednostkowy (AΠ)',
            latex:
              'MR = MC \\; (U_k = K_k), \\qquad \\Pi = (p - ATC) \\cdot Q, \\qquad A\\Pi = Z_j = \\frac{\\Pi}{Q} = p - ATC',
            plainReading:
              'Firma maksymalizuje zysk (lub minimalizuje stratę) przy ilości, dla której utarg krańcowy równa się kosztowi krańcowemu. Zysk jest dodatni, gdy p > ATC.',
            symbols: [
              { symbol: 'MR > MC', meaning: 'opłaca się zwiększać produkcję (zysk rośnie)' },
              { symbol: 'MR < MC', meaning: 'należy ograniczać produkcję (ostatnia sztuka zmniejsza zysk)' },
              { symbol: 'p = ATC', meaning: 'próg rentowności (zysk ekonomiczny Π = 0)' },
            ],
          },
        ],
        quickCheck: {
          id: 'qc-struk-1',
          question: 'Czym różni się konkurencja monopolistyczna od konkurencji doskonałej?',
          options: [
            'W konkurencji monopolistycznej jest tylko jeden producent i brak substytutów.',
            'W konkurencji monopolistycznej produkty są zróżnicowane (marka, lokalizacja), co daje ograniczony wpływ na cenę.',
            'W konkurencji monopolistycznej występują nieprzekraczalne bariery wejścia.',
            'W konkurencji doskonałej firmy intensywnie konkurują reklamą i marką.',
          ],
          correctIndex: 1,
          explanation:
            'W obu strukturach działa wielu producentów przy pełnej swobodzie wejścia, ale w konkurencji doskonałej produkty są homogeniczne (brak wpływu na cenę), a w monopolistycznej zróżnicowane (np. fryzjerzy, restauracje).',
        },
      },
      {
        id: 'konkurencja-doskonala',
        title: '2. Równowaga przedsiębiorstwa w konkurencji doskonałej',
        summary:
          'Pozioma krzywa popytu firmy (p = AR = MR), rozwiązane zadanie wykresowe ze slajdów 71–72 i zerowy zysk w długim okresie.',
        paragraphs: [
          'W konkurencji doskonałej pojedynczy producent (np. sadownik sprzedający jabłka) ma znikomy udział w rynku i nie może wpłynąć na cenę rynkową. Jego indywidualna krzywa popytu jest poziomą prostą (|E_p| = ∞): każdą dodatkową sztukę sprzedaje po tej samej cenie, więc p = AR = MR = const, a utarg całkowity TR = p · Q jest linią prostą wychodzącą z zera.',
          'W krótkim okresie firma może osiągać dodatni zysk ekonomiczny (p > ATC), zysk zerowy (p = ATC) lub racjonalną stratę (min AVC < p < ATC). Jednak w długim okresie pełna swoboda wejścia i wyjścia sprawia, że zyski nadzwyczajne przyciągają nowe firmy (podaż rośnie, cena spada), a straty zmuszają część firm do wyjścia — w efekcie w długookresowej równowadze cena zrównuje się z minimum długookresowego kosztu przeciętnego (p = AR = MR = min LRATC), a zysk ekonomiczny wynosi zero.',
        ],
        callouts: [
          {
            variant: 'example',
            title: 'Rozwiązane zadanie z wykładu (slajdy 71–72): odczyt pól z wykresu konkurencji doskonałej',
            content:
              'Na wykresie ze slajdu 71 pozioma cena rynkowa wynosi p = AR = MR = 15 zł. Odczyty dla tej ceny:',
            points: [
              'Przedział opłacalności produkcji (gdzie p ≥ ATC): od 13 do 24 jednostek.',
              'Optimum Technologiczne (OT = minimum ATC): Q = 20 jednostek.',
              'Optimum Ekonomiczne (OE: p = MR = MC): cena p = 15 zł, produkcja Q = 21 jednostek (przy Q = 21: ATC = 13, AVC = 10).',
              'Wartości w OE (Q = 21): TR = 15 × 21 = 315 zł; TC = 13 × 21 = 273 zł; VC = 10 × 21 = 210 zł; FC = TC − VC = (13 − 10) × 21 = 63 zł; Zysk całkowity Π = TR − TC = (15 − 13) × 21 = 42 zł.',
            ],
          },
        ],
        quickCheck: {
          id: 'qc-struk-2',
          question: 'Jaki warunek wyznacza długookresową równowagę przedsiębiorstwa w konkurencji doskonałej?',
          options: [
            'p > min LRATC (trwały zysk nadzwyczajny).',
            'p = AR = MR = min LRATC (zerowy zysk ekonomiczny).',
            'MR < p oraz MC = min AFC.',
            'p = min AVC przy ujemnym zysku ekonomicznym.',
          ],
          correctIndex: 1,
          explanation:
            'Swoboda wejścia i wyjścia z branży w długim okresie niweluje zyski nadzwyczajne oraz straty, sprowadzając cenę dokładnie do minimum długookresowego kosztu przeciętnego (DKp / LRATC).',
        },
      },
      {
        id: 'monopol-rownowaga-dwl',
        title: '3. Monopol czysty, społeczny koszt monopolu (DWL) i zadania wykładowe',
        summary:
          'Dlaczego MR leży poniżej krzywej popytu, jak wyznaczyć cenę monopolową i skąd bierze się trójkąt straty społecznej DWL.',
        paragraphs: [
          'Monopolista jest jedynym dostawcą dobra bez bliskich substytutów, chronionym silnymi barierami wejścia (patenty, koncesje prawne, ogromne koszty stałe, wyłączny dostęp do zasobów). Ponieważ popyt rynkowy jest zarazem popytem na wyroby monopolisty (krzywa D opada), chcąc sprzedać kolejną sztukę monopolista musi obniżyć cenę na wszystkie jednostki — dlatego krzywa przychodu krańcowego MR zawsze leży poniżej krzywej popytu (dla liniowego popytu opada 2× szybciej!). Maksimum utargu całkowitego TR przypada dokładnie w punkcie, gdzie MR = 0.',
          'Wyznaczenie decyzji monopolisty odbywa się w dwóch krokach: (1) szukamy przecięcia MR = MC → dostajemy ilość monopolową Qm; (2) od Qm idziemy pionowo W GÓRĘ do krzywej popytu D (p = AR) → odczytujemy cenę monopolową Pm. W porównaniu z konkurencją doskonałą (gdzie p = MC) monopol wytwarza mniej (Qm < Qkd) i sprzedaje drożej (Pm > Pkd). Różnica między utraconym dobrobytem społecznym a poziomem efektywnym tworzy tzw. społeczny koszt monopolu (Deadweight Loss — DWL), czyli pole trójkąta między krzywą popytu D a krzywą MC na odcinku od Qm do Qkd.',
        ],
        callouts: [
          {
            variant: 'trap',
            title: 'Słynna pułapka z kolokwium (Zadanie 8.11 Q179): Czy można policzyć zysk bez ATC?',
            content:
              'NIE! Mając na wykresie wyłącznie krzywe popytu D, przychodu krańcowego MR i kosztu krańcowego MC, wyznaczysz bez problemu ilość monopolową Qm, cenę Pm, ilość efektywną Qkd oraz stratę społeczną DWL. Aby jednak obliczyć zysk monopolisty Π = (Pm − ATC) · Qm, musisz znać poziom kosztu przeciętnego całkowitego ATC (lub kosztu stałego FC)!',
          },
          {
            variant: 'example',
            title: 'Trzy rozwiązane zadania monopolowe z wykładu (slajdy 76–81)',
            content: 'Prześledź wszystkie trzy typy zadań pojawiające się na kolokwium:',
            points: [
              '1. Wykresowe (slajdy 76, 78–79): Monopol (MR = MC): Qm = 25, pm = 15 zł, ATC = 10, AVC = 7 → TR = 375 zł, TC = 250 zł, VC = 175 zł, FC = 75 zł, Π = 125 zł, zysk jedn. AΠ = 5 zł. Konkurencja doskonała (p = MC): Qkd = 50, pkd = 12 zł, ATC = 9 → AΠ = 3 zł, Π = 150 zł. Monopol obciął produkcję z 50 do 25 i podniósł cenę z 12 do 15 zł!',
              '2. Algebraiczne (slajd 80): Kc = 10Q + Q² → MC = 10 + 2Q; Uc = 130Q − 0,5Q² → MR = 130 − Q oraz p = AR = 130 − 0,5Q. Z MR = MC: 130 − Q = 10 + 2Q → 3Q = 120 → Q = 40; cena monopolowa p = 130 − 0,5(40) = 110 zł (Π = 2400 zł).',
              '3. Tabelaryczne (slajd 81): Obliczając ΔTC/ΔQ i ΔTR/ΔQ z tabeli, warunek MR = MC = 22 zachodzi dokładnie dla Q_OE = 250 (TR = 9100, TC = 7600, max Π = 1500), a cena monopolowa p = AR = 9100 / 250 = 36,40 zł.',
            ],
          },
        ],
        graph: {
          type: 'monopoly',
          preset: 'q180-dwl',
          title: 'Interaktywny wykres monopolu, nadwyżek i DWL (przykład Q177–Q180)',
          caption:
            'Przełączaj podświetlenie nadwyżki konsumenta, producenta, DWL (= $250 w zadaniu Q180) oraz ostrzeżenia o braku ATC.',
          interactive: true,
        },
        quickCheck: {
          id: 'qc-struk-3',
          question: 'Monopolista ma funkcje TC = 10Q + Q² oraz TR = 130Q − 0,5Q². Jaką wielkość produkcji Q oraz jaką cenę monopolową ustali?',
          options: [
            'Q = 60, p = 100 zł',
            'Q = 40, p = 110 zł',
            'Q = 40, p = 90 zł',
            'Q = 30, p = 115 zł',
          ],
          correctIndex: 1,
          explanation:
            'MC = (TC)\' = 10 + 2Q, MR = (TR)\' = 130 − Q. Z warunku MR = MC otrzymujemy 130 − Q = 10 + 2Q → Q = 40. Następnie odczytujemy cenę z p = AR = TR/Q = 130 − 0,5Q = 130 − 20 = 110 zł (nie z MR = 90 zł!).',
        },
      },
      {
        id: 'dyskryminacja-formy-uokik',
        title: '4. Skutki monopolu, dyskryminacja cenowa, formy koncentracji i polityka antymonopolowa',
        summary:
          'Kiedy jeden monopolista jest lepszy niż kilku, jak dzielić klientów cenami i jakie instytucje chronią rynek w Polsce.',
        paragraphs: [
          'Negatywne skutki monopolizacji obejmują: wyższe ceny i mniejszą produkcję, potencjalnie wyższe koszty i niewykorzystanie mocy produkcyjnych (sprzyjające bezrobociu), dozowanie postępu technicznego przez brak rywali, marnotrawne nakłady na reklamę blokującą substytuty, nierównomierny podział zysków oraz dyskryminację cenową.',
          'Dyskryminacja cenowa polega na sprzedawaniu tego samego produktu różnym grupom nabywców po różnych cenach (gdy da się podzielić rynek wg elastyczności cenowej popytu i uniemożliwić arbitraż/odsprzedaż). Przykłady z wykładu: (1) bilety lotnicze — biznesmeni o niskiej |E_p| płacą więcej niż elastyczni turyści, a bilety imienne blokują odsprzedaż; (2) dyskryminacja ilościowo-czasowa — hurt vs detal, taryfy telefoniczne wg pory dnia; (3) wiek/dochód/miejsce zamieszkania — ulgowe bilety do kin i muzeów dla uczniów i emerytów.',
          'Wyjątkiem uzasadniającym istnienie jednego dostawcy jest monopol naturalny — występuje w gałęziach sieciowych o ogromnych kosztach stałych (wodociągi, kanalizacja, gazownie, energetyka), gdzie jeden producent działa taniej niż kilka dublujących sieci firm. Wymaga on jednak regulacji cen i zysków przez państwo.',
        ],
        table: {
          caption: 'Sześć form monopolizacji i koncentracji przedsiębiorstw (slajdy 86–92)',
          headers: ['Forma', 'Charakter powiązania', 'Kluczowe cechy z wykładu'],
          rows: [
            ['Pool (ring)', 'Doraźne porozumienie', 'Krótkotrwałe, dla konkretnego przedsięwzięcia (wspólna polityka cenowa, rynki zbytu, wspólny fundusz).'],
            ['Kartel', 'Porozumienie branżowe', 'Firmy z tej samej branży ustalają ceny, limity (kontyngenty) produkcji i podział rynków; nietrwały (konflikty), ścigany antymonopolowo.'],
            ['Syndykat', 'Wyższa forma kartelu', 'Ustala globalną produkcję i limity, a przede wszystkim tworzy WSPÓLNE BIURO HANDLOWE prowadzące sprzedaż i politykę cenową.'],
            ['Koncern', 'Jeden właściciel / centrala', 'Związek firm o osobowości prawnej pod wspólnym zarządem centrali; powiązania pionowe (kolejne etapy produkcji) lub poziome (ta sama branża).'],
            ['Konglomerat', 'Wielobranżowa dywersyfikacja', 'Rozwój po II wojnie światowej (głównie USA); jedno kierownictwo łączące produkcję, handel i usługi w różnych, niespokrewnionych branżach.'],
            ['Holding', 'Kontrola kapitałowa (akcje)', 'Zwykle spółka akcyjna posiadająca kontrolne pakiety akcji innych firm (przez wymianę lub rynkowy wykup akcji).'],
          ],
          highlightFirstColumn: true,
        },
        subsections: [
          {
            id: 'ustawodawstwo-i-instytucje',
            title: 'Ustawodawstwo antymonopolowe i instytucje ochrony w Polsce (slajdy 93–94)',
            paragraphs: [
              'Pierwsze ustawy antymonopolowe powstały w USA: Sherman Act (1890) i Clayton Act (1914), a w Europie Zachodniej w latach 1950–1970. W Polsce w 1990 r. powołano Urząd Antymonopolowy, przekształcony później w Urząd Ochrony Konkurencji i Konsumentów (UOKiK). Instytucje regulacyjne mogą nakładać kary pieniężne, unieważniać umowy, nakazywać zaniechanie praktyk lub obniżenie cen, usuwać bariery wejścia i wspierać MŚP.',
            ],
            bullets: [
              'UOKiK (Urząd Ochrony Konkurencji i Konsumentów) — główny organ antymonopolowy i ochrony zbiorowych interesów konsumentów.',
              'Lokalne organizacje konsumenckie — np. Federacja Konsumentów (pomoc indywidualna).',
              'Rzecznik Finansowy (od 2015 r., wcześniej Rzecznik Ubezpieczonych) — wsparcie klientów rynku finansowego i ubezpieczeniowego.',
              'Inne instytucje ochronne, nadzorcze i arbitrażowe z wykładu: KNF (Komisja Nadzoru Finansowego), BFG (Bankowy Fundusz Gwarancyjny), UFG (Ubezpieczeniowy Fundusz Gwarancyjny), TFG (Turystyczny Fundusz Gwarancyjny), Sąd Polubowny oraz Bankowy Arbitraż Konsumencki.',
            ],
          },
        ],
        quickCheck: {
          id: 'qc-struk-4',
          question: 'Która forma monopolizacji stanowi wyższą formę kartelu i charakteryzuje się utworzeniem wspólnego biura handlowego (centrali sprzedaży)?',
          options: [
            'Pool (ring)',
            'Syndykat',
            'Konglomerat',
            'Holding',
          ],
          correctIndex: 1,
          explanation:
            'Syndykat łączy cechy kartelu (limity produkcji) z utratą samodzielności handlowej — zrzeszone firmy sprzedają towary wyłącznie przez wspólne biuro handlowe.',
        },
      },
    ],
  },
];
