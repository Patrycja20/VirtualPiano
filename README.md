# VirtualPiano

![Virtual Piano screen](screens/virtualPiano_screen1.png)

**VirtualPiano** to aplikacja pozwalająca na grę na pianinie za pomocą zwykłej klawiatury, z możliwością przełączania typów granego dźwięku. 

## Instalacja i uruchomienie

* Klonujemy projekt komendą: 

```git
git clone https://github.com/Patrycja20/VirtualPiano.git
```

* Do uruchomienia potrzebujemy środowiska `node.js` oraz `yarn`:
    * Instalator `Node.js` można znaleźć tutaj: [nodejs.org](https://nodejs.org/en/)
    * Aby zainstalować `yarn` globalnie, wpisujemy w konsoli komendę `npm install yarn -g`
    
* Przechodzimy do katalogu z projektem i wykonujemy komendy:

```
yarn install
yarn start
```

* Projekt powinien uruchomić się w przeglądarce pod adresem `localhost:3000`



## Użyte technologie
Projekt został napisany w JavaScript z użyciem następujących technologii:

* _React_ - umożliwił podzielenie aplikacji na mniejsze komponenty (moduły).
* Klasa _Audio_ z JavaScript - umożliwiła załadowanie plików audio i ich odgrywanie


Dźwięki pianina i harfy zostały zgrane z instrumentu klawiszowego _Roland F20_. Następnie, w programie AudaCity, pliki dźwiekowe zostały poprawione - usunięto zakłócenia (szumy), wycięto ciszę, i podzielono je na poszczególne dźwięki.

_______________

# Jak to działa?
Na pianinie możemy grać klikając myszką na klawisze oraz wciskając odpowiednie skróty na klawiaturze. Do sprawdzenia, jaki klawisz odpowiada jakiemu znakowi na klawiaturze, służy przełącznik _Signatures_. 

Pianino umożliwia zmianę dźwięku - do wyboru mamy pianino i harfę. 

Ostatnia kontrolka zmienia głośność pianina. Dostępne są cztery poziomy głośności. 




## Nazewnictwo dźwięków
tosujemy oficjalne nazewnictwo dźwięków (podgląd tutaj: [KLIK](https://www.thoughtco.com/thmb/Tji7ttC5XrbulictSXG45hiJAv4=/1550x250/filters:fill(auto,1)/Scientific-Pitch-Notation_large-56a72cde3df78cf7729306a2.png))

![piano image](https://www.thoughtco.com/thmb/Tji7ttC5XrbulictSXG45hiJAv4=/1550x250/filters:fill(auto,1)/Scientific-Pitch-Notation_large-56a72cde3df78cf7729306a2.png)

Stosujemy notację europejską, więc zamiast dźwięku **b** jest dźwięk **h**.

Klawiatura umożliwia odegranie poniższych dźwięków:

```
f3
fis3
g3
gis3
a3
ais3
h3
c4
cis4
d4
dis4
e4
f4
fis4
g4
gis4
a4
ais4
h4
c5
cis5
d5
dis5
e5
f5
fis5
g5
gis5
a5
ais5
h5
c6
cis6
d6
dis6
e6
```

Wyjaśnienie:
* c5 - dźwięk c w oktawie nr 5
* cis5 - dźwięk c# w oktawie nr 5

