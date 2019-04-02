class Editor {
	constructor() {

	}

	/**
	 * @method addNote 
	 * @param {Object} track Specifies which index to target
	 * @param {Number} time Specifies which index to target in comp.tracks[track].notes
	 * @param {Number} key Specifies which key to target
	 */
	addNote(track, time, key, length) {
		for (i = track.notes.length; i <= time; i++) track.notes.push([]);
		track.notes[time].push({
			key: key,
			length: length
		});
	}

	/**
	 * @method deleteNote
	 * @param {Object} track Specifies which track to target
	 * @param {Number} time Specifies which time target
	 * @param {Number} key Specifies which key to target
	 */
	deleteNote(track, time, key) {
		var arr = track.notes[time];
		var index = arr.findIndex(n => n.key === key);
		if (index > -1) arr.splice(index, 1);
	}
}
