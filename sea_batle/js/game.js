const container = document.querySelector('.container');

class Field {
	constructor() {
		this.field = {};
	}
	createField(size) {
		for (let i = 0; i < size; i++) {
			this.field[i] = this._fillRow(size);
		}
	}
	_fillRow(size) {
		let row = [];
		for (let i = 0; i < size; i++) row.push(0);

		return row;
	}
	getField() {
		return this.field;
	}
	createElemField(container) {
		let counter = 0;
		const player_field = document.createElement('div');
		player_field.className = 'player-field'

		this._setPropetry('player_field', player_field);

		const fieldElem = document.createElement('div');
		fieldElem.className = 'field';

		for(let row in this.field) {
			fieldElem.appendChild(this._createElemRow(counter));
			counter++;
		}
		player_field.appendChild(fieldElem);
		container.appendChild(player_field);
	}
	_setPropetry(name, value) {
		this[name] = value;
	}

	_createElemRow(counter) {
		const row = document.createElement('div');
		row.className = 'row';
		
		const row_letter = document.createElement('div');
		row_letter.className = 'row-letter';

		let letter = this._getAlphabet()[counter];
		row_letter.textContent = letter;
		row.appendChild(row_letter);

		let i = 0;
		for(let item in this.field) {
			row.appendChild(this._createElemCell(letter, i+1));
			i++;
		}
		return row;
	}
	_createElemCell(letter,index) {
		const cell = document.createElement('div');
		cell.className = 'cell';
		cell.dataset.cell = letter + index;

		return cell;
	}
	_createElemNumbres() {

	}

	_getAlphabet() {
		return 'abcdefghijklmnopqrstuvwxyz';
	}
}

class Ships extends Field {
	constructor() {
		super();
		this.ships = {};
	}
	createShips(quantity) {
		for (let i = 0, decks = quantity; i < quantity; i++) {
			let name = `decks_${decks}`;
			this.ships[name] = this._createShip(i+1, name, decks);
			decks--;
		}
	}
	_createShip(quantity, name, health) {
		let ships = [];
		for (let i = 0; i < quantity; i++) 
			ships.push({
				name : name,
				id : i+1,
				health :health,
				status : 'unplaced',
				positions : null
			});

		return ships;
	}
	setShip(name_of_ship, position) { // decks_1, 'a1-a4'
		let split_pos  = position.split('-'); //[a1, a4]
		let	start_pos  = split_pos[0], // a1 
			start_row  = start_pos[0], // a
			start_cell = +start_pos.substr(1); // 1
		let end_pos    = split_pos[1], // a4
			end_row    = end_pos[0], // a
			end_cell   = +end_pos.substr(1); // 4
		// let ship = this.ships[name_of_ship];
		
		let data = {
			ship : this._getShip(name_of_ship),
			start_row : start_row,
			start_cell: start_cell,
			end_row : end_row,
			end_cell : end_cell
		};

		if (start_row === end_row) { //  horizontal
			this._setPositionHorizontal(data);
		} else { // vertical
			this._setPositionVertical(data);
		}
	}
	// ?????????
	_setPositionHorizontal(data) {
		const alphabet = this._getAlphabet();
		let positions = {};
		let row = this.field[alphabet.indexOf(data.start_row)];
		
		for (let i = 0, j = data.start_cell; i < data.ship.health; i++) {
			row[j-1] = {
				name_of_ship : data.ship.name,
				id : data.ship.id,
				status : 'not damaged',
				positions : data.start_row + j
			};
			positions[data.start_row + j] = 'not damaged';
			j++;
		}
		let ship = this._getShipById(data.ship.name, data.ship.id);
		ship.status = 'placed';
		ship.positions = positions;
	}
	_setPositionVertical(data) {
		const alphabet = this._getAlphabet();
		let positions = {};
		
		for (let i = 0, j = alphabet.indexOf(data.start_row); i < data.ship.health; i++) {
			// console.log(this.field[data.start_cell-1]);
			this.field[j][data.start_cell-1] = {
				name_of_ship : data.ship.name,
				id : data.ship.id,
				status : 'not damaged',
				positions : alphabet[j] + data.start_cell
			};
			positions[alphabet[j] + data.start_cell] = 'not damaged';
			j++;
		}
		let ship = this._getShipById(data.ship.name, data.ship.id);
		ship.status = 'placed';
		ship.positions = positions;
	}
	// ?????????
	createDock() {
		const dock = document.createElement('div');
		dock.className = 'dock';

		for (let ship in this.ships) {
			let row = this._createShipsByName(this.ships[ship]);
			dock.appendChild(row);
		}
		this.player_field.appendChild(dock);
	}
	_createShipsByName(ships_arr) {
		const ships_row = document.createElement('div');
		ships_row.className = 'ship-row';
		for (let item of ships_arr) {
			const ship = document.createElement('div');
			ship.className = 'ship';
			ship.draggable = 'true';
			ship.dataset.ship = item.name;
			ship.dataset.id = item.id;
			// console.log(item)

			for (let i = 0; i < item.health; i++) {
				const part_of_ship = document.createElement('div');
				part_of_ship.className = 'part-of-ship';
				ship.appendChild(part_of_ship);
			}
			
			ships_row.appendChild(ship);
		}
		return ships_row;
	}

	_getShipById(name,id) {
		for(let ship of this.ships[name]) if (ship.id === id) return ship;
	}
	_getShip(name) {
		for(let ship of this.ships[name]) if (ship.status === 'unplaced') return ship;

		return false;
	}
}

class Player extends Ships {
	constructor(settings) {
		super();
	}
}
class Game {
	constructor(settings) {
		this.player_1   = settings.player_1;
		this.player_2   = settings.player_2;
		this.field_size = settings.field_size;
		this.container  = settings.container;
	}
	init() {
		this.player_1.createField(this.field_size);
		this.player_1.createShips(4);
		this.player_1.createElemField(this.container);
		this.player_1.createDock();

		this.player_2.createField(this.field_size);
		this.player_2.createShips(4);
		this.player_1.createElemField(this.container);
		this.player_1.createDock();	
	}
}
const player_1 = new Player();
const player_2 = new Player();

const game = new Game({
	player_1 : player_1,
	player_2 : player_2,
	field_size : 10,
	container : container
});
game.init();

console.log(player_1);
console.log(player_2);



// class User extends Ship {

// }

// class Bot extends Ship {

// }