/*
	moSQuito - track
*/
class Composition {
	constructor() {
		this.tracks = [];
		this.bpm = 120;
		this.timeSign = {
			notes: 4,
			bars: 4
		}
	}

	/**
	 * @method saveComposition Saves the current composition to localStorage.
	 * @param {String} name name to save the composition under.
	 */
	saveComposition(name){
		localStorage.setItem(name, JSON.stringify(this));
	}

	/**
	 * @method loadComposition Loads a previously saved composition from localStorage.
	 * @param {String} name 
	 */
	loadComposition(name){
		var load = JSON.parse(localStorage.getItem(name));
		this.tracks = load.tracks;
		this.bpm = load.bpm;
		this.timeSign = load.timeSign;
	}

	/**
	 * @method createTrack Adds a new track to the composition.
	 */
	createTrack() {
		this.tracks.push(new Track());
	}

	/**
	 * @method deleteTrack Deletes the specified track from the composition.
	 * @param {Number} index index of track to be deleted.
	 */
	deleteTrack(index) {
		if (track[index].length > 0) this.track.splice(index, 1);
	}
}

class Track {
	constructor() {
		this.notes =  [];
		this.sound = {
			detune: 1,
			type: 0,

		};
	}
}
