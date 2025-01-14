# Browser Technologies @cmda-minor-web 20-21

<!-- TAGS HERE -->

- [DEMO](#demo)
- [Learning Goals](#learning-goals)
- [npm i progressive-enhancement](#npm-install-progressive-enhancement)
- [Break the web](#break-the-web)
- [Final Assignment](#final-assignment)
  - [install](#install)
  - [case](#case)

## DEMO

[**Demo of browser-technologies-survey**](#)

## LEARNING GOALS

- _je leert wat Progressive enhancement is en hoe je dit kan toepassen._
- _je leert Browser Technologies te onderzoeken, testen en implementeren als enhancement._
- _je leert hoe je Feature Detection doet en wat je kan doen als een 'feature' niet werkt of wordt ondersteund._
  <sub>Copied from the [repository](https://github.com/bazottie/browser-technologies-1920).</sub>

## NPM INSTALL PROGRESSIVE-ENHANCEMENT

Voor de eerste opdracht gaan we onderzoeken wat Progressive Enhancement is.

- [Opdracht 1 - NPM install Progressive Enhancement](course/Opdracht1.md)

## BREAK THE WEB

Voor opdracht 2 ga je proberen het Web te laten 'breken' door (browser) features bewust uit te zetten. Wat gebeurt er als images, custom fonts, JavaScript, kleur, breedband internet niet optimaal werken?

- [Opdracht 2 - Breek het Web](course/Opdracht2.md)

## Final Assignment

Voor de eindopdracht ontwerp en maak je een interactieve toepassing volgens het principe van Progressive Enhancement. Zorg dat alle gebruikers, met alle browsers, in iedere context de toepassing zo goed mogelijk te zien, horen en/of voelen krijgen. De meest 'enhanced' versie is 'delightful UX', mooi en prettig om te gebruiken.

- [De eindopdracht - Progressive Enhanced Browser Technologie](course/Eindopdracht.md)
  <sub>Copied from the [repository](https://github.com/bazottie/browser-technologies-1920).</sub>

### Testing

To make sure the application is valid, it has to be tested on atleast two type of devices, a phone and a desktop.
This cannot just be one eco-system thus it will be tested on an android device, apple device and a desktop, and a browser.
|Device|feature|feature|
|--|:-:|:-:|
|iPhone 12 Pro|🚫|✅|
|Samsung Galaxy Note 4|||
|Safari (mbp 2018)|||

### Install

```ZSH
cd YOURMAP
git clone https://github.com/dewarian/browser-technologies-2021.git
cd browser-technologies-2021
npm install
```

### Case

[enquete](https://github.com/dewarian/browser-technologies-2021/blob/master/course/Usecase-enquete.md)

> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.
> <sub>Copied from the [repository](https://github.com/bazottie/browser-technologies-1920).</sub>

#### Requirements

- student information (name and id) required.
- Per subject
  - Name of subject
  - Teacher(s)
  - Subject taught in which weeks
  - Grading on a scale of 1 - 10
  - Difficulty material (how difficult)
  - Explanation (How clear was the explanation was)
  - Own insight (how much did you understand?)
- Validation: Everything in the form has to be filled in. Give clear error messages.
- If the survey isn't finished I would like to continue where I left off.

### Wireflow

> ![](./public/assets/Brot-1.jpg) ![](./public/assets/Brot-2.jpg)

### Layers

The hierarchy of user needs, if a beautiful application that is not functional, it will not satisfy the users' basic needs. Because it lacks a function its aesthetic qualities will remain unappreciated.

#### Functional

The functional layer for the survey will be a simple black and white form with different kind of inputs. The student filling the survey will have a neutral experience, but they feel like it lacks and not 'usable'.

The problem with this I hinted is that the experience is less than pleasurable. It isn't visually pleasing, the form does not help the user to fill in the form but it just works.

A way to solve this is to keep the task as concise as possible until there is a moment or possibility to enhance this functional layer.

To summarize:

- HTML is served.
- Forms will be handled by the server.
- Every subject will have it's own page.
- HTML form handling.

#### Usable

The usable layer is a step away from being pleasureable. The usual styling and small JavaScript enhancements will be applied to the application, where the user can delight themselves with visually appleasing forms, interactivity that helps the user with filling in the form. A small enhancement would be giving feedback about how they rate a subject.

To summarize:

- Survey is stylized to enhance readability and visibility.
- Survey will help the user with answering the questions.
- Survey give feedback to the user based on their own input.
- HTML form handling with style enhancement for visibility.

#### Pleasurable

The pleasurable layer is when everything in the world is in your favour, internet is speedy, device is speedy, the browser supports everything, you can give the user the most pleasurable experience with the survey. There are little to no load times or refreshes, the form is paginated without the user experiencing it. Everytime a user fills in the question it get stored so that person can continue at all times by simply visiting.

The pleasurable layer also validates the input that normally cannot be validated without JavaScript.

- Bleeding edge HTML, CSS and JS is being used.
- There is an easy transition between subjects.
- The user gets direct feedback when a question has been entered (in)correctly.
- Progression through the survey is shown with clear elements, animations and correct usage of interactivity.
- Local Storage allows the user to not login once again to continue where they left off.

#### Criteria

Een link naar de demo

Er is een Readme toegevoegd met daarin beschreven:

- Een (wireflow) schets van de functionaliteit met een beschrijving van de core functionality. Geef ook aan wat de functional/reliable, usable en pleasurable laag.
- een beschrijving van de feature(s)/Browser Technologies
- een lijst met de vier browsers waarin je gaat testen, plus welke functionaliteiten zoals JavaScript je aan en uit zet tijdens de tests. (Op desktop 1 Chromium 1 niet-Chromium, op mobiel 1 iOS + 1 Android OF een Samsung- en een niet-Samsung Android.)
- welke browsers de feature(s) wel/niet ondersteunen
- een beschrijving van de accessibility issues die zijn onderzocht + screenreader test
- beschrijving PE en oplossingen toevoegen
- De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
- De user experience van de demo is goed
  - de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
  - het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
  - de meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken
- Student kan de Basic functionaliteit van een use case doorgronden
- Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development en de eigen opdracht

<details>
<summary>Old repo content</summary>

//Robuuste, toegankelijke websites ontwerpen en maken …

Één van de mooiste [principes](https://www.w3.org/DesignIssues/Principles.html) van het web is dat iedereen met een computer en een browser het web kan gebruik. [Het web is voor iedereen](https://www.youtube.com/watch?v=UMNFehJIi0E). Het is geen gecontroleerde (programmeer) omgeving, je kan er gerust van uit gaan dat niemand precies hetzelfde te zien krijgt als wat jij in je browser ziet. Er zijn technische beperkingen, zoals afmetingen van de browser, grootte van het apparaat, manier van interactie, kwaliteit van de hardware, kwaliteit van het netwerk en er zijn mensen, allemaal verschillende mensen ...

In het vak Browser Technologies gaan we onderzoeken wat Progressive Enhancement is en hoe je dit kan toepassen om goede, robuuste, toegankelijke websites te maken. Voor iedereen. Het web is voor iedereen, in dit vak leer je hoe je daarvoor kan zorgen.

## Opdrachten

het vak bestaat uit 3 opdrachten. In week 1 werken we aan opdracht 1 en 2. Vanaf week 2 werken we aan de eindopdracht.

### Opdracht 1 🛹 NPM install Progressive- enhancement

### Opdracht 2 💔 Breek het Web

### De eindopdracht ✨ Progressive Enhanced Browser Technologie

### Leerdoelen

- _je leert wat Progressive enhancement is en hoe je dit kan toepassen._
- _je leert Browser Technologies te onderzoeken, testen en implementeren als enhancement._
- _je leert hoe je Feature Detection doet en wat je kan doen als een 'feature' niet werkt of wordt ondersteund._

[Rubric](https://docs.google.com/spreadsheets/d/1MV3BWwwg_Zz1n-S_qOM4iSm4gA4M6g0xAxGacyaPuac/)

## Planning & programma

| Planning          | Woensdag                                     | Donderdag                                              | Vrijdag                 |
| ----------------- | -------------------------------------------- | ------------------------------------------------------ | ----------------------- |
| [Week 1](#week-1) | Intro, College + briefing opdracht 1         | Presentaties opdracht 1, college + briefing opdracht 2 | Presentaties opdracht 2 |
| [Week 2](#week-2) | College + Briefing De eindopdracht           | College + werken aan de opdracht                       | Feedbackgesprekken      |
| [Week 3](#week-3) | College + werken aan de opdracht             | College + werken aan de opdracht                       | Feedbackgesprekken      |
| [Week 4](#week-4) | Beoordelingsgesprekken (Dinsdag en Woensdag) | Weekly Nerd                                            | Goede vrijdag           |

### Week 1

Het web is voor iedereen: Deze week gaan we onderzoeken wat Progressive Enhancement is en kennismaken met testen ~~en het device lab~~.

#### Woensdag 10 maart

Browser Technolgies begint op woensdag. In het eerste college krijg je uitleg over het programma en over het nut van Progressive Enancement. Wat is dat eigenlijk? De meeste CMD studenten hebben dit waarschijnlijk al eens gehoord en misschien iets mee gedaan in blok Tech. Progressive Enhancement, oftewel PE, is een manier hoe je je de code van een website kan bouwen zodat alle gebruikers met alle browsers je website zo goed mogelijk te zien krijgen. Met PE kun je robuuste websites bouwen die het altijd doen. PE is een manier van denken.

| Woensdag 10/3 | Wat                                                                               |
| ------------- | --------------------------------------------------------------------------------- |
| 9:30          | College les 1 over het vak, wie, wat, waar en PE                                  |
|               | [Briefing Opdracht 1 🛹 NPM install Progressive-Enhancement](course/Opdracht1.md) |
| 16:00         | Checkout per team                                                                 |

##### Lezen voor les 1 📖

- [Everyone has JavaScript, right? by Stuart Langridge](https://kryogenix.org/code/browser/everyonehasjs.html)

#### Donderdag 11 maart

Donderdag gaan we in je Squad opdracht 1 bekijken en bespreken. Als het goed is heb je een beeld gevormd van Progressive Enhancement. Tijdens de bespreking kun je ook vragen te stellen, samen onderzoeken we wat PE is, waarom het goed is om te begrijpen en misschien kunnen we al wat voorbeelden bespreken hoe je het zou kunnen toepassen.

In het college krijg je uitleg over opdracht 2. Voor deze opdracht ga je proberen het web te laten 'breken' door (browser) features bewust uit te zetten. Wat gebeurt er als images, custom fonts, JavaScript, kleur, breedband internet niet optimaal werken?

🤟 Vandaag geeft [Aaron Gustafson](https://www.aaron-gustafson.com) een gast-college. hij schreef in 2008 het artikel [Understanding Progressive Enhancement](https://alistapart.com/article/understandingprogressiveenhancement/) waarna deze manier van denken een belangrijk onderdeel werd van Web Development. Aaron Gustafson werkt bij Microsoft als 'web standard advocate' met het Edge browser team.

| Donderdag 11/3 | Wat                                                         |
| -------------- | ----------------------------------------------------------- |
| 9:30           | Opdracht 1 bespreken in Squads 🛹                           |
| 10:30          | College les 2 over Browser features                         |
|                | [Briefing Opdracht 2 💔 Breek het web](course/Opdracht2.md) |
| 16:00          | Checkout per team                                           |
| 18:00          | Gastcollege Aaron Gustafson 🤟                              |

Lezen voor les 2 📖

- [The unreasonable effectiveness of simple HTML by Terence Eden](https://shkspr.mobi/blog/2021/01/the-unreasonable-effectiveness-of-simple-html/)

#### Vrijdag 12 maart

Vrijdag bespreken we in clubjes opdracht 2. Zorg dat je de bevindingen van je onderzoek online kan presenteren. We gaan de hele feature lijst doorlopen en alle studenten kunnen laten zien wat ze hebben onderzocht, met voorbeelden, de problemen, cijfers en/of meningen. Bedenk ook hoe je de problemen zou kunnen oplossen.

| Vrijdag 12/3 | Wat                                 |
| ------------ | ----------------------------------- |
| 11:30        | Opdracht 2 bespreken in clubje A 💔 |
| 13:00        | Opdracht 2 bespreken in clubje B 💔 |
| 14:30        | Opdracht 2 bespreken in clubje C 💔 |
| 16:00        | Work Hard Play Hard                 |

### Week 2

In week 2 beginnen we met de eindopdracht. We hebben in week 1 onderzocht wat PE is en welke feautures wel of niet goed worden ondersteund. Deze week gaan we leren hoe je een interactieve toepassing in 3 lagen kan ontwerpen en wat je kan doen als een browser een 'enhancement' niet kan tonen.

#### Woensdag 17 maart

Woensdag krijg je een briefing van de eindopdracht en een college over browsers, en alles (!) wat daarbij hoort. Daarna gaan we aan de slag: als je een interactieve toepassing ontwerpt die alle gebruikers, met alle browsers moeten kunnen zien, dan zul je moeten bedenken hoe je de toepassing in 3 lagen kan opbouwen, eerst bepaal je de core functionaliteit en de user-delight ... schetsen maar!

| Woensdag 17/3 | Wat                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------- |
| 9:30          | College les 3 over browsers, browser detect, support detection en web views                 |
|               | [Briefing eindopdracht ✨ Progressive Enhanced Browser Technologie](course/Eindopdracht.md) |
| 10:30         | Sessies: User Deligt & Core functionaliteit ✨                                              |
| 16:00         | Checkout per team                                                                           |

#### Donderdag 18 maart

Donderdag gaan we voorbeelden van PE en feature detection bespreken in een college over form validatie. Daarna aan de slag met je ontwerp, in clubjes gaan we je ontwerpideeën bespreken en bedenken hoe je dit in 3 lagen zou kunnen bouwen.

🤟 Vandaag geeft [Heydon Pickering](https://heydonworks.com) een gastcollege om 14:00. Heydon Pickering is een web developer, hij geeft lezingen en schrijft over toegankelijkeid en web design o.a. voor [Smashing Magazin](https://www.smashingmagazine.com/author/heydon-pickering/). Vorige week heb je een metafoor voor PE bedacht naar aanleiding van een filmpje van Hedon Pickering zelf. Hij komt vandaag langs! Wat wil je hem vragen over het web?

| Donderdag 18/3 | Wat                               |
| -------------- | --------------------------------- |
| 9:30           | College les 4 over form-validatie |
| 10:30          | Sessies: Bouwen in 3 lagen ✨     |
| 14:00          | Q&A Heydon Pickering 🤟           |
| 16:00          | Checkout per team                 |

Lezen voor les 4 📖

- [Be progressive by Jeremy Keith](https://adactio.com/journal/7706)

#### Vrijdag 19 maart

Vrijdag bespreken we in clubjes de vorderingen voor de eindopdracht. Zorg dat je vandaag weet welke browsers (en devices) jij gaat testen.

| Vrijdag 19/3 | Wat                                  |
| ------------ | ------------------------------------ |
| 11:30        | Vorderingen bespreken in clubje C ✨ |
| 13:00        | Vorderingen bespreken in clubje A ✨ |
| 14:30        | Vorderingen bespreken in clubje B ✨ |
| 16:00        | Work Hard Play Hard                  |

### Week 3

Deze week werken we verder werken aan de eindopdracht en houden we gesprekken om jullie vorderingen te bespreken en vragen te beantwoorden.

#### Woensdag 24 maart

| Woensdag 24/3 | Wat                                    |
| ------------- | -------------------------------------- |
| 9:30          | College les 5 over Viewports           |
| 10:30         | Sessies: Feature detectie en testen ✨ |
| 16:00         | Checkout per team                      |

#### Donderdag 25 maart

Donderdag gaan we verder werken aan de opdracht en doen we code-review sessies.

🤟 Vandaag geeft Ischa Gast een presentatie.

| Donderdag 25/3 | Wat                       |
| -------------- | ------------------------- |
| 9:30           | Gastcollege Ischa Gast 🤟 |
| 10:30          | Sessies: Code-reviews ✨  |
| 16:00          | Checkout per team         |

Lezen voor les 6 📖

- [A minimum viable experience makes for a resilient, inclusive website or app](https://piccalil.li/blog/a-minimum-viable-experience-makes-for-a-resilient-inclusive-website-or-app)

#### Vrijdag 26 maart

Vrijdag bespreken we in clubjes de vorderingen voor de eindopdracht. Zorg dat je een code-review hebt gekregen van twee mede-studenten.

| Vrijdag 26/3 | Wat                                  |
| ------------ | ------------------------------------ |
| 11:30        | Vorderingen bespreken in clubje B ✨ |
| 13:00        | Vorderingen bespreken in clubje C ✨ |
| 14:30        | Vorderingen bespreken in clubje A ✨ |
| 16:00        | Work Hard Play Hard                  |

### Week 4

In week 4 wordt de eindopdracht beoordeeld. Dan gaan we je werk bekijken, bespreken en beoordelen.

| Dinsdag 30/3 | Wat                       |
| ------------ | ------------------------- |
| 9:30 - 15:30 | Beoordelingsgesprekken ✨ |

| Woensdag 31/3 | Wat                       |
| ------------- | ------------------------- |
| 9:30 - 15:30  | Beoordelingsgesprekken ✨ |

| Donderdag 1/4 | Wat                                                                  |
| ------------- | -------------------------------------------------------------------- |
| 14:00         | [Weekly Nerd 2️⃣](https://github.com/cmda-minor-web/weekly-nerd-2021) |

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

</details>
