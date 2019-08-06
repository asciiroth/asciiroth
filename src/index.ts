import 'babel-polyfill'
import './game/components';
// import { World, Player, Npc, Location } from './game/classes'
// import { Classes, Races, EntityActions } from './game/enums';
// import { FactionData } from './game/data/factions';
// import { RaceData } from './game/data/races';
// import { ClassData } from './game/data/classes';
// import {
//     Game,
//     World,
//     Zone,
//     Location,
//     Player,
// 	Npc,
// } from '@asciiroth/core';
//
// const game = new Game('hello');
//
// let world = game.newWorld('testWorld');
//
// const location1 = new Location({
//     name: 'test1',
// });
//
// const location2 = new Location({
//     name: 'test2'
// });
//
// const location3 = new Location({
//     name: 'test3',
// 	coords: [4, 5],
// });
//
// const zone = world.newZone({
//     name: 'hello',
//     grid: [
//         [
//             location1,
//             location2
//         ]
//     ],
// 	locations: [
// 		location3,
// 	]
// });
//
// const player = game.newPlayer({
//     name: 'jacob',
//     zone,
//     coords: [0, 0],
// });
//
// game.stages.addStage('whatwhat');
// game.setStage('whatwhat');
//
// window['game'] = game;
// window['world'] = world;
// window['location1'] = location1;
// window['location2'] = location2;
// window['zone'] = zone;
// window['player'] = player;

//
// declare const document: HTMLDocument;
//
// import * as Npcs from './game/npcs';
//
// const capitalizeFirstLetter = (string: string): string => string[0].toUpperCase() + string.slice(1);
//
// const calculateDamage = (strength: number, defence: number): number => {
//     return strength * (defence / defence);
// }
//
// const getCaretPosition = (editableDiv: HTMLElement) => {
//     let caretPos: any = 0;
//     let sel: any = 0;
//     let range: any = 0;
//     if (window.getSelection) {
//         sel = window.getSelection();
//         if (sel.rangeCount) {
//             range = sel.getRangeAt(0);
//             if (range.commonAncestorContainer.parentNode == editableDiv) {
//                 caretPos = range.endOffset;
//             }
//         }
//     } else if (document.selection && document.selection.createRange) {
//         range = document.selection.createRange();
//         if (range.parentElement() == editableDiv) {
//             var tempEl = document.createElement("span");
//             editableDiv.insertBefore(tempEl, editableDiv.firstChild);
//             var tempRange = range.duplicate();
//             tempRange.moveToElementText(tempEl);
//             tempRange.setEndPoint("EndToEnd", range);
//             caretPos = tempRange.text.length;
//         }
//     }
//     return caretPos;
// }
//
// /*
//     This is the main world grid. It is a 2d grid set into tiles for each area.
//     Currently only Elwyn Forest is in the game, however more can easily be added.
// */
// const world = new World([
//     [
//         new Location(
//             'Forest\'s Edge',
//             'The trees are thinning and traversing the forest becomes easier. But it\'s far from safe - This area is filled with makeshift camps full of Gnolls. Sounds like ravenous dogs and smells of barbecue fill the air.',
//             'https://vignette.wikia.nocookie.net/wowwiki/images/2/28/Forest%27s_Edge.jpg/revision/latest?cb=20130509202609',
//             [
//                 Npcs.Hogger,
//                 new Npcs.Gnoll,
//                 new Npcs.Gnoll,
//                 new Npcs.Gnoll,
//             ],
//         ),
//         undefined,
//         undefined,
//     ],
//     [
//         new Location(
//             'Fargodeep Mine',
//             'As you step through the trees towards the mine, the sounds of mining and excavating grow louder. As you peer round the rocky outcrop, you see a mine entrance bustling with Kobolds.',
//             'https://vignette.wikia.nocookie.net/wowwiki/images/b/b3/Fargodeep_Mine.jpg/revision/latest?cb=20130509195948',
//             [
//                 new Npcs.Kobold(),
//                 new Npcs.Kobold(),
//                 new Npcs.Kobold(),
//                 new Npcs.Kobold(),
//                 new Npcs.Kobold(),
//                 new Npcs.Kobold(),
//             ],
//         ),
//         new Location(
//             'Goldshire',
//             'You stand in the square of a quaint village, south of Stormwind, nestled deep in Elwyn Forest. The town is alive, people buying and selling - but it\'s the sound of the blacksmith\'s hammer that cuts through the air.',
//             'https://steemitimages.com/DQmV3CeLfrZtHQ4uchLy9yxBPvZQvjNj7HeRVQHmUJBvcJD/world-of-warcraft-wow-2569.jpg',
//             [
//                 Npcs.SmithArgus,
//                 new Npcs.Guard(),
//             ],
//         ),
//         new Location(
//             'Stormwind Gates',
//             'The majestic Stormwind Gates. All around you is bustling in the summer breeze as a crowd of people weave in and out of the city gates.',
//             'https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/OCX0QPKBLRHQ1465832713312.jpg',
//             [
//                 new Npcs.Guard(),
//                 new Npcs.Guard(),
//             ]
//         ),
//     ],
//     [
//         undefined,
//         new Location(
//             'Stone Cairn Lake',
//             'You emerge from the thick trees, before you is a cool, clear lake. In the centre of the lake is a small island covered in ruins. The water\'s edge teems with Murlocs, you must be silent here.',
//             'https://vignette.wikia.nocookie.net/wowwiki/images/8/8c/Stone_Cairn_Lake.jpg/revision/latest?cb=20130510021922',
//             [
//                 new Npcs.Murloc(),
//                 new Npcs.Murloc(),
//                 new Npcs.Murloc(),
//                 new Npcs.Murloc(),
//                 new Npcs.Murloc(),
//             ],
//         ),
//         new Location(
//             'Northshire Valley',
//             'A quiet valley surrounding Northshire Abbey. This place has recently been the training ground for Alliance army human recruits.',
//             'https://vignette.wikia.nocookie.net/wowwiki/images/d/dd/Northshire_Valley.jpg/revision/latest/scale-to-width-down/2000?cb=20171203170351',
//             [
//                 new Npcs.Guard(),
//             ],
//         ),
//     ],
//     [
//         undefined,
//         undefined,
//         new Location(
//             'Northshire Abbey',
//             'A grand abbey, built to worship the Gods.',
//             'https://vignette.wikia.nocookie.net/wowwiki/images/d/dd/Northshire_Valley.jpg/revision/latest/scale-to-width-down/2000?cb=20171203170351',
//             [
//                 Npcs.MarshalMcBride,
//                 new Npcs.Wolf(),
//             ]
//         ),
//     ]
// ]);
//
// let player: Player;
//
// enum GameStates {
//     CreateCharacter,
//     LoadCharacter,
//     InGame,
// }
//
// enum CreateCharacterStates {
//     ChooseName,
//     ChooseRace,
//     ChooseClass,
// }
//
// let gameState: GameStates;
// let createCharacterState: CreateCharacterStates;
//
//
// window['world'] = world;
// window['player'] = player;
//
// const handlerActions: { [id: string]: Function } = {
//
//     // eg: walk east
//     [EntityActions.Walk](command: EntityActions, args: string[]): void {
//         const success = player.action({
//             action: command,
//             data: {
//                 args,
//             }
//         });
//
//         if (!success) {
//             output('Cannot walk in that direction', {
//                 classes: 'error',
//             });
//         }
//
//         currentStatus(player);
//     },
//
//     // eg: talk abby
//     [EntityActions.Talk](command: EntityActions, args: string[]): void {
//         let [target, subject] = args;
//
//         if (!target) {
//             output(`Who would you like to talk to?`);
//             return;
//         }
//
//         const npc: Npc = <Npc>world
//             .getWorldLocation(...player.coords)
//             .entities
//             .find(entity => {
//                 return entity.referenceNames.includes(target.toLowerCase());
//             });
//
//         if (!npc) {
//             output(`Hmm ${target} doesn't seem to be here...`);
//             return;
//         }
//
//         if (!npc.hasAction(EntityActions.Talk)) {
//             output(`Doesn't seem like ${target} wants to talk...`)
//             return;
//         }
//
//         const speech = npc.action({
//             action: EntityActions.Talk,
//             data: {
//                 talkSubject: subject,
//             },
//         });
//
//         output(`${npc.name}: <span class="speech">"${speech}"</span>`);
//     },
//
//     // eg: attack wolf
//     [EntityActions.Attack](command: EntityActions, args: string[]): void {
//         const [target] = args;
//         const currentLocation = world.getWorldLocation(...player.coords);
//         let enemy: Partial<Npc> = currentLocation.findEntity(target);
//
//         if (!enemy) {
//             output(`Cannot find ${target || 'that target'}`);
//             return;
//         }
//
//         if (enemy.friendly) {
//             output('Cannot attack that target');
//             return;
//         }
//
//         if (player.combatSelectedEnemy) {
//             if (enemy.id === player.combatSelectedEnemy.id) {
//                 enemy = player.combatSelectedEnemy;
//             }
//         }
//
//         player.combatSelectedEnemy = enemy;
//
//         // Attack enemy
//
//         const enemyDamage: number = calculateDamage(player.strength, enemy.defence)
//
//         enemy.action({
//             action: EntityActions.Attack,
//             data: {
//                 hp: enemyDamage,
//             },
//         });
//
//         output(`🗡 Attacked ${target} for ${enemyDamage} damage! ${target}'s hp: ${enemy.hp}`);
//
//         if (enemy.hp <= 0) {
//             output(`You have killed the ${enemy.name}`);
//             currentLocation.removeEntity(enemy.id);
//             player.combatSelectedEnemy = null;
//             return;
//         }
//
//         // Enemy attacks player
//
//         const playerDamage: number = calculateDamage(enemy.strength, player.defence)
//
//         player.action({
//             action: EntityActions.Attack,
//             data: {
//                 hp: playerDamage,
//             },
//         });
//
//         output(`🛡 ${target} attacks you for ${playerDamage} damage! Your hp: ${player.hp}`);
//
//         if (player.hp <= 0) {
//             output(`You have died! Respawning...`);
//             player.combatSelectedEnemy = null;
//             respawn(player);
//         }
//
//     },
//
//     [EntityActions.Look](command: EntityActions, args: string[]): void {
//         if (args.length) {
//             const [targetName] = args;
//             const currentLocation = world.getWorldLocation(...player.coords);
//             let target: Partial<Npc> = currentLocation.findEntity(targetName);
//
//             if (target) {
//                 output(`<span class="info">${target.description}</span>`);
//             }
//         } else {
//             currentStatus(player);
//         }
//     },
//
//     // [EntityActions.New](): void {
//     //     createNewCharacter();
//     // }
//
// }
//
// const currentStatus = (player: Player) => {
//     const currentLocation = world.getWorldLocation(...player.coords);
//     output(`You are currently in ${currentLocation.name}`, {
//         tag: 'span',
//     });
//     output(`As you look around you see: ${currentLocation.entities.map(entity => (`<span class="info"> ${entity.name}</span>`))} `);
// }
//
// const respawn = (player: Player) => {
//     player.addHp();
//     player.coords = [2, 2];
//     currentStatus(player);
// }
//
// const outputDiv = document.querySelector('#output');
//
// const output = (text: string = '', options: Partial<{
//     isUserInput: boolean,
//     tag: string,
//     classes: string,
// }> = {}) => {
//     if (text.length <= 0) {
//         return;
//     }
//
//     outputDiv
//         .insertAdjacentHTML(
//             'beforeend',
//             `<${options.tag || 'p'} class="${options.isUserInput ? 'user-input' : ''} ${options.classes}" >${text}</${options.tag}>`
//         );
// }
//
// const welcomeMessages = () => {
//     output('Welcome to Asciiroth!', {
//         tag: 'h1',
//     });
//
//     output('You can use the ⬇ (down arrow) anytime to bring up a list of available commands.', {
//         tag: 'i',
//         classes: 'info',
//     })
// }
//
// const createNewCharacter = () => {
//     player = new Player({
//         name: null,
//         class: null,
//         race: null,
//         coords: [2, 2],
//         world,
//     });
//
//     gameState = GameStates.CreateCharacter;
//     createCharacterState = CreateCharacterStates.ChooseName;
// }
//
// const transformInput = (input: string): string[] => {
//     return input
//         .split(' ')
//         .filter(arg => arg || '')
//         .map(arg => arg.toLowerCase())
//         .map(arg => capitalizeFirstLetter(arg))
//         .map(arg => arg.trim());
// }
//
// const createCharacterFlow = {
//     start: CreateCharacterStates.ChooseName,
//     end: {
//         callback: () => {
//             output(`Welcome to the world ${player.name}`)
//             gameState = GameStates.InGame;
//             currentStatus(player);
//         },
//     },
//     [CreateCharacterStates.ChooseName]: {
//         output: 'What is your name?',
//         callback: (input: string): boolean => {
//             const [name] = transformInput(input);
//             player.setName(name);
//             return;
//         },
//         next: CreateCharacterStates.ChooseRace,
//     },
//     [CreateCharacterStates.ChooseRace]: {
//         output: 'What is your race?',
//         callback: (input: string): null | string => {
//             const [race] = transformInput(input);
//             if (Races[race]) {
//                 player.setRace(Races[race]);
//                 return;
//             }
//
//             return `Race "${race}" doesn't exist`;
//         },
//         next: CreateCharacterStates.ChooseClass,
//     },
//     [CreateCharacterStates.ChooseClass]: {
//         output: 'What is your class?',
//         callback: (input: string): null | string => {
//             const [_class] = transformInput(input);
//             if (Classes[_class]) {
//                 player.setClass(Classes[_class]);
//                 return;
//             }
//
//             return `class "${_class}" doesn't exist`;
//         }
//     },
// }
//
// // State handlers
//
// const createCharacterHandler = (input: string) => {
//     const error = createCharacterFlow[createCharacterState].callback(input);
//
//     if (error) {
//         output(<string>error, {
//             classes: 'error',
//         });
//         return;
//     }
//
//     domRight.clear();
//
//     if (createCharacterFlow[createCharacterState].next) {
//         createCharacterState = createCharacterFlow[createCharacterState].next;
//
//         return;
//     }
//
//     createCharacterFlow.end.callback();
//     return;
// }
//
// const loadCharacterHandler = (input: string) => {
//
// }
//
// const inGameHandler = (command: string, args: string[]) => {
//     command = EntityActions[command];
//
//     if (command && handlerActions[command]) {
//         handlerActions[command](command, args);
//
//     } else {
//         output(`That is not a valid command`, {
//             classes: 'error',
//         });
//     }
// }
//
// // Main input
//
// const mainInput: HTMLElement = document.querySelector('#main-input');
// const domLeft: HTMLElement = document.querySelector('#left');
//
// class DomImages {
//     private _imageCache: {
//         [url: string]: HTMLImageElement;
//     } = {}
//
//     public async loadImage(imageUrl: string): Promise<HTMLImageElement> {
//         return new Promise((resolve) => {
//             if (this._imageCache[imageUrl]) {
//                 resolve(this._imageCache[imageUrl]);
//                 return;
//             }
//
//             const image = new Image();
//             image.onload = () => {
//                 this._imageCache[imageUrl] = image;
//                 resolve(image);
//             }
//             image.src = imageUrl;
//         });
//     }
//
//     public get imageCache(): {
//         [url: string]: HTMLImageElement;
//     } {
//         return this._imageCache;
//     }
// }
//
// const sleep = async seconds => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, seconds * 1000);
//     })
// }
//
// class DomRightClass {
//
//     public readonly domRight: HTMLElement = document.querySelector('#right');
//     private _currentImage: HTMLImageElement;
//
//     public async setBackroundImage(imageUrl: string) {
//         this.hide();
//
//         const image: HTMLImageElement = await domImages.loadImage(imageUrl);
//
//         if (this._currentImage && this._currentImage.parentNode) {
//             if (this._currentImage.src !== imageUrl) {
//                 await sleep(0.6);
//                 this._currentImage.parentNode.replaceChild(image, this._currentImage);
//             }
//         } else {
//             this.domRight.appendChild(image);
//         }
//
//         this._currentImage = image;
//
//         this.show();
//     }
//
//     public get currentImage() {
//         return this._currentImage;
//     }
//
//     public hide() {
//         this.domRight.style.opacity = '0';
//     }
//
//     public show() {
//         this.domRight.style.opacity = '1';
//     }
//
//     public addClass(className: string) {
//         this.domRight.className = '';
//         this.domRight.classList.add(className);
//     }
//
//     public removeClass(className: string) {
//         this.domRight.classList.remove(className);
//     }
//
//     public clear() {
//         this.hide();
//         if (this._currentImage && this._currentImage.parentNode) {
//             this._currentImage.parentNode.removeChild(this.currentImage);
//             this._currentImage = null;
//         }
//
//         captionEvents.clear();
//     }
//
//     public redrawRight(event: KeyboardEvent) {
//         const [command, ...args] = transformInput(event.target.innerText)
//
//         switch (gameState) {
//             case GameStates.CreateCharacter:
//                 switch (createCharacterState) {
//                     case CreateCharacterStates.ChooseRace:
//                         if (Races[command]) {
//                             if (FactionData.Horde.races.includes(Races[command])) {
//                                 domRight.addClass('horde');
//                                 domRight.setBackroundImage(FactionData.Horde.background_characterCreate);
//                                 captionEvents.addHtml(`
//     								<h2>The Horde</h2>
//     								<p>${ FactionData.Horde.description}</p>
//     								<h2>${ command}s</h2>
//     								<p>${RaceData[command].description}</p>
//     							`);
//                             }
//
//                             if (FactionData.Alliance.races.includes(Races[command])) {
//                                 domRight.addClass('alliance');
//                                 domRight.setBackroundImage(FactionData.Alliance.background_characterCreate);
//                                 captionEvents.addHtml(`
//     								<h2>The Alliance</h2>
//     								<p>${ FactionData.Alliance.description}</p>
//     								<h2>${ command}s</h2>
//     								<p>${RaceData[command].description}</p>
//     							`);
//                             }
//                         } else {
//                             domRight.hide();
//                         }
//                         break;
//                     case CreateCharacterStates.ChooseClass:
//                         if (ClassData[Classes[command]]) {
//                             domRight.setBackroundImage(ClassData[Classes[command]].image);
//                             captionEvents.addHtml(`
//     							<h2>${ command}s</h2>
//     							<p>${ ClassData[Classes[command]].description}</p>
//     						`);
//                         } else {
//                             domRight.hide();
//                             captionEvents.clear();
//                         }
//                 }
//             case GameStates.InGame:
//
//         }
//     }
// }
//
// const domRight = new DomRightClass();
// const domImages = new DomImages();
//
// const caption = document.querySelector('#right .caption');
//
// const captionEvents = {
//     clear: () => {
//         caption.innerHTML = '';
//     },
//     addHtml: (html: string) => {
//         captionEvents.clear();
//         caption.insertAdjacentHTML('afterbegin', html);
//     }
// }
//
// const handleKeyUpEvent = (event: KeyboardEvent) => {
//
//     domRight.redrawRight(event);
//     intellisense.keyUpHandler(event);
//
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         output(`${event.target.innerText}`, {
//             isUserInput: true,
//         });
//
//         let [command, ...args] = transformInput(event.target.innerText);
//
//         switch (gameState) {
//             case GameStates.CreateCharacter:
//                 createCharacterHandler(command);
//                 break;
//
//             case GameStates.LoadCharacter:
//                 loadCharacterHandler(command)
//                 break;
//
//             case GameStates.InGame:
//                 inGameHandler(command, args);
//                 break;
//         }
//
//         event.target.innerHTML = '';
//         domLeft.scrollTop = domLeft.scrollHeight;
//         gameLoop();
//     }
// }
//
// mainInput.addEventListener('keyup', handleKeyUpEvent);
//
// domLeft.addEventListener('click', () => {
//     mainInput.focus();
// })
//
// // Intellisense
//
// class IntellisenseClass {
//     private _domIntellisense: HTMLElement = document.querySelector('#intellisense');
//     private isOpen: boolean = false;
//     private suggestions: string[] = [];
//     private highlightedIndex: number = -1;
//
//     constructor() {
//         mainInput.addEventListener('blur', () => {
//             this.hide();
//         });
//
//         // mainInput.addEventListener('keyup', event => {
//         //     this.updateSuggestions(event);
//         //     this.redraw(event);
//         // });
//
//         mainInput.addEventListener('keydown', event => {
//             this.navigationHandler(event);
//         });
//     }
//
//     public keyUpHandler(event: KeyboardEvent) {
//         this.updateSuggestions(event);
//         this.redraw(event);
//     }
//
//     public keyDownHandler(event: KeyboardEvent) {
//         this.navigationHandler(event);
//     }
//
//     public show(): void {
//         this._domIntellisense.style.opacity = '1';
//         this.isOpen = true;
//         this.highlightedIndex = -1;
//     }
//
//     public hide(): void {
//         this._domIntellisense.style.opacity = '0';
//         this.isOpen = false;
//         this.clear();
//     }
//
//     public toggle(): void {
//         if (this._domIntellisense.style.opacity === '1') {
//             this._domIntellisense.style.opacity = '0';
//         } else {
//             this._domIntellisense.style.opacity = '1';
//         }
//     }
//
//     public clear(): void {
//         this._domIntellisense.innerHTML = '';
//     }
//
//     public positionLeft(left: number): void {
//         // 10 is the approximate, but sorta acurate width of a single char in this font
//         // 23 is roughly the left padding
//         this._domIntellisense.style.left = `${23 + (left * 10)}px`;
//     }
//
//     private updateSuggestions(event: KeyboardEvent): void {
//         const [command, ...args] = transformInput(event.target.innerText);
//         this.suggestions = [...this.calculateSuggestions(command, args)];
//     }
//
//     private navigationHandler(event: KeyboardEvent) {
//         if (event.keyCode !== 40 && event.keyCode !== 38) {
//             return;
//         }
//
//         event.preventDefault();
//
//         if (event.keyCode === 40) { // down arrow
//             if (!this.isOpen) {
//                 this.show();
//             } else {
//                 if (this.suggestions.length) {
//                     if (this.highlightedIndex + 1 <= this.suggestions.length - 1) {
//                         this.highlightedIndex = this.highlightedIndex + 1;
//                     }
//                 }
//             }
//         }
//
//         if (event.keyCode === 38) { // up arrow
//             if (this.isOpen) {
//                 if (this.suggestions.length) {
//                     if (this.highlightedIndex - 1 >= -1) {
//                         this.highlightedIndex = this.highlightedIndex - 1;
//                     }
//                 }
//             }
//         }
//
//         this.redraw(event);
//     }
//
//     private mouseOverHandler(event: any) {
//
//     }
//
//     private scrollToPosition(px: number) {
//         this._domIntellisense.scrollTop = px;
//     }
//
//     public redraw(event: any): void {
//         event.preventDefault();
//
//         if (event.target.innerText.length <= 0 && (event.keyCode !== 40 && event.keyCode !== 38 && event.keyCode !== 13)) {
//             this.hide();
//             event.stopPropagation();
//             return;
//         }
//
//         if (event.keyCode === 13) {
//             this.hide();
//             event = null;
//             if (this.highlightedIndex > -1 && this.suggestions[this.highlightedIndex]) {
//                 mainInput.innerHTML = this.suggestions[this.highlightedIndex];
//             }
//             return;
//         }
//
//         const pos = getCaretPosition(event.target);
//
//         this.clear();
//
//         if (this.suggestions.length) {
//
//             if (!this.isOpen) {
//                 this.show();
//             }
//
//             this.positionLeft(pos);
//             this._domIntellisense.insertAdjacentHTML('afterbegin', this.suggestions.reduce((html, suggestion, index) => {
//                 return html += `
//                 <p
//                     class="${ this.highlightedIndex === index ? 'highlighted' : ''}"
//                     data-value="${ suggestion}"
//                     data-index="${ index}"
//                 >
//                     ${ suggestion}
//                 </p>
//                 `;
//             }, ''))
//
//             const selectedElement: HTMLElement = document.querySelector('#intellisense .highlighted');
//
//             if (selectedElement) {
//                 if (selectedElement.offsetTop >= this._domIntellisense.scrollTop + this._domIntellisense.getBoundingClientRect().height) {
//                     this.scrollToPosition(selectedElement.offsetTop);
//                 } else if (selectedElement.offsetTop < this._domIntellisense.scrollTop) {
//                     this.scrollToPosition(selectedElement.offsetTop);
//                 }
//             }
//
//         } else {
//             this.hide();
//         }
//     }
//
//     private calculateSuggestions(command: string = '', args: string[] = []): any[] {
//         switch (gameState) {
//             case GameStates.CreateCharacter:
//                 switch (createCharacterState) {
//                     case CreateCharacterStates.ChooseName:
//                         return [];
//                     case CreateCharacterStates.ChooseRace:
//                         return [
//                             ...Object.keys(Races),
//                         ];
//                     case CreateCharacterStates.ChooseClass:
//                         return [
//                             ...Object.keys(Classes),
//                         ];
//                 }
//                 break;
//             case GameStates.InGame:
//
//                 if (EntityActions[command]) {
//                     switch (EntityActions[command]) {
//                         case EntityActions.Walk:
//                             return [
//                                 ...world
//                                     .getCurrentAvailableDirections(...player.coords),
//                             ]
//                         case EntityActions.Look:
//                             return [
//                                 ...world
//                                     .getWorldLocation(...player.coords)
//                                     .entities
//                                     .filter(entity => entity.description)
//                                     .map(entity => capitalizeFirstLetter(entity.name)),
//                             ];
//                         default:
//                             return [
//                                 ...world
//                                     .getWorldLocation(...player.coords)
//                                     .entities
//                                     .filter(entity => entity.hasAction(EntityActions[command]))
//                                     .map(entity => capitalizeFirstLetter(entity.name)),
//                             ];
//                     }
//                 }
//
//                 return [
//                     ...Object.keys(EntityActions),
//                 ];
//             default:
//                 return [];
//         }
//     }
// }
//
// const intellisense = new IntellisenseClass();
//
// // Initial Load
//
// const initialLoad = () => {
//     welcomeMessages();
//     // if (!localStorage.key('character')){
//     // load saved character
//     // loadCharacter()
//     // } else {
//     createNewCharacter();
//     // }
// }
//
// initialLoad();
//
// // Gameloop
// const gameLoop = () => {
//     switch (gameState) {
//         case GameStates.CreateCharacter:
//             output(createCharacterFlow[createCharacterState].output);
//             break;
//
//         case GameStates.LoadCharacter:
//             // loadCharacterHandler(command, input)
//             break;
//
//         case GameStates.InGame:
//             //currentStatus(player);
//             domRight.setBackroundImage(world.getWorldLocation(...player.coords).image);
//             captionEvents.addHtml(`
//                 <p>${ world.getWorldLocation(...player.coords).description}</p>
//             `);
//             break;
//     }
// }
//
// gameLoop();
