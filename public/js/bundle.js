/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PokeData = __webpack_require__(/*! ./models/pokemon_data.js */ \"./src/models/pokemon_data.js\");\nconst PokeView = __webpack_require__(/*! ./views/pokemon_view.js */ \"./src/views/pokemon_view.js\");\nconst Player = __webpack_require__(/*! ./models/player.js */ \"./src/models/player.js\");\nconst Card = __webpack_require__(/*! ./models/card.js */ \"./src/models/card.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const pokeData = new PokeData();\n\n  const player1Select = document.querySelector('#player-1-select')\n  const player2Select = document.querySelector('#player-2-select')\n  const pokemonChoiceContainer = document.querySelector(\"#choices\");\n  const player1 = new Player();\n  const player2 = new Player();\n\n\n  const pokeView = new PokeView(pokemonChoiceContainer, player1Select, player2Select);\n  pokeData.getData(data => {\n    pokeView.renderSelects(data);\n  });\n\n  player1Select.addEventListener('change', (event) => {\n    const url = event.target.value;\n    const parentContainer = document.querySelector('#player1-pokemon');\n    pokeData.getIndividualPokemonData(url, (data) => {\n      parentContainer.innerHTML = '';\n      const pokemonCard = new Card(data);\n      pokeView.renderIndividualPokemon(pokemonCard, parentContainer);\n      player1.currentHand = pokemonCard;\n    });\n  });\n\n  player2Select.addEventListener('change', (event) => {\n    const url = event.target.value;\n    const parentContainer = document.querySelector('#player2-pokemon');\n    pokeData.getIndividualPokemonData(url, (data) => {\n      parentContainer.innerHTML = '';\n      const pokemonCard = new Card(data);\n      pokeView.renderIndividualPokemon(pokemonCard, parentContainer);\n      player2.currentHand = pokemonCard;\n    });\n  });\n\n  const weightButton = document.querySelector('#weight');\n  const heightButton = document.querySelector('#height');\n  const speedButton = document.querySelector('#speed');\n  const specialAttackButton = document.querySelector('#special-attack');\n  const specialDefenseButton = document.querySelector('#special-defense');\n  const attackButton = document.querySelector('#attack');\n  const defenseButton = document.querySelector('#defense');\n  const hpButton = document.querySelector('#hp');\n\n  const compare = function(attribute, onComplete) {\n    if (player1.currentHand[attribute] > player2.currentHand[attribute]) {\n      onComplete('Player 1', player1.currentHand);\n    }\n    else {\n      onComplete('Player 2', player2.currentHand);\n    }\n  };\n\n  heightButton.addEventListener('click', () => {\n    compare('height', pokeView.renderWinner);\n  });\n\n  weightButton.addEventListener('click', () => {\n    compare('weight', pokeView.renderWinner);\n  });\n\n  speedButton.addEventListener('click', () => {\n    compare('speed', pokeView.renderWinner);\n  });\n\n  specialAttackButton.addEventListener('click', () => {\n    compare('specialAttack', pokeView.renderWinner);\n  });\n\n  specialDefenseButton.addEventListener('click', () => {\n    compare('specialDefense', pokeView.renderWinner);\n  });\n\n  attackButton.addEventListener('click', () => {\n    compare('attack', pokeView.renderWinner);\n  });\n\n  defenseButton.addEventListener('click', () => {\n    compare('defense', pokeView.renderWinner);\n  });\n\n  hpButton.addEventListener('click', () => {\n    compare('hp', pokeView.renderWinner);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function(onComplete) {\n  const request = new XMLHttpRequest();\n  request.open('GET', this.url);\n  request.addEventListener('load', function() {\n    if(this.status !== 200) {\n      return;\n    }\n\n    const responseBody = JSON.parse(this.responseText);\n    onComplete(responseBody);\n  });\n  request.send();\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/card.js":
/*!****************************!*\
  !*** ./src/models/card.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Card = function(pokemonData) {\n  this.name = pokemonData.name;\n  this.height = pokemonData.height;\n  this.weight = pokemonData.weight;\n  this.speed = pokemonData.stats[0].base_stat;\n  this.specialAttack = pokemonData.stats[2].base_stat;\n  this.specialDefense = pokemonData.stats[1].base_stat;\n  this.attack = pokemonData.stats[4].base_stat;\n  this.defense = pokemonData.stats[3].base_stat;\n  this.hp = pokemonData.stats[5].base_stat;\n  this.image = pokemonData.sprites.front_default;\n}\n\nmodule.exports = Card;\n\n\n//# sourceURL=webpack:///./src/models/card.js?");

/***/ }),

/***/ "./src/models/player.js":
/*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Player = function() {\n  this.currentHand = undefined;\n  this.deck = [];\n}\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack:///./src/models/player.js?");

/***/ }),

/***/ "./src/models/pokemon_data.js":
/*!************************************!*\
  !*** ./src/models/pokemon_data.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\n\nconst PokeData = function() {\n  this.url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';\n  this.data = null;\n}\n\nPokeData.prototype.getData = function(onComplete) {\n  const request = new Request(this.url);\n  request.get(requestData => {\n    this.data = requestData.results;\n    onComplete(this.data);\n  });\n};\n\nPokeData.prototype.getIndividualPokemonData = function(pokemonUrl, onComplete) {\n  const request = new Request(pokemonUrl);\n  request.get(data => {\n    console.log(data);\n    onComplete(data)\n  });\n}\n\nmodule.exports = PokeData;\n\n\n//# sourceURL=webpack:///./src/models/pokemon_data.js?");

/***/ }),

/***/ "./src/views/pokemon_view.js":
/*!***********************************!*\
  !*** ./src/views/pokemon_view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PokeView = function(pokemonContainer, select1, select2) {\n  this.select1 = select1;\n  this.select2 = select2;\n  this.pokemonContainer = pokemonContainer;\n\n}\n\n\nPokeView.prototype.renderSelects = function (pokeData) {\n  pokeData.forEach(pokemon => {\n    const pokeOption1 = document.createElement('option');\n    const pokeOption2 = document.createElement('option');\n    pokeOption1.textContent = pokemon.name;\n    pokeOption1.value = pokemon.url;\n    pokeOption2.textContent = pokemon.name;\n    pokeOption2.value = pokemon.url;\n    this.select1.appendChild(pokeOption1);\n    this.select2.appendChild(pokeOption2);\n  });\n};\n\nPokeView.prototype.renderIndividualPokemon = function (card, parentContainer) {\n  console.dir(card);\n  const pokemon = document.createElement('div');\n\n  const name = document.createElement('h3');\n  name.textContent = `Name: ${card.name}`;\n  pokemon.appendChild(name);\n\n  const image = document.createElement('img');\n  image.src = card.image;\n  pokemon.appendChild(image);\n\n  const height = document.createElement('h3');\n  height.textContent = `Height: ${card.height}`;\n  pokemon.appendChild(height);\n\n  const weight = document.createElement('h3');\n  weight.textContent = `Weight: ${card.weight}`;\n  pokemon.appendChild(weight);\n\n  const speed = document.createElement('h3');\n  speed.textContent = `Speed: ${card.speed}`;\n  pokemon.appendChild(speed);\n\n  const specialAttack = document.createElement('h3');\n  specialAttack.textContent = `Special Attack: ${card.specialAttack}`;\n  pokemon.appendChild(specialAttack);\n\n  const specialDefense = document.createElement('h3');\n  specialDefense.textContent = `Special Defense: ${card.specialDefense}`;\n  pokemon.appendChild(specialDefense);\n\n  const attack = document.createElement('h3');\n  attack.textContent = `Attack: ${card.attack}`;\n  pokemon.appendChild(attack);\n\n  const defense = document.createElement('h3');\n  defense.textContent = `Defense: ${card.defense}`;\n  pokemon.appendChild(defense);\n\n  const hp = document.createElement('h3');\n  hp.textContent = `Hp: ${card.hp}`;\n  pokemon.appendChild(hp);\n\n  parentContainer.appendChild(pokemon);\n};\n\nPokeView.prototype.renderWinner = function (winnerString, pokemon) {\n  const winnerContainer = document.querySelector('#winner');\n  winnerContainer.textContent = `${winnerString} wins with ${pokemon.name}`;\n};\n\nmodule.exports = PokeView;\n\n\n//# sourceURL=webpack:///./src/views/pokemon_view.js?");

/***/ })

/******/ });