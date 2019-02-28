/*
	moSQuito - track
*/

var composition = {
	track: [],
	length: 32,
	bpm: 120,
	timeSign: {
		notes: 4,
		bars: 4
	}
}


var waveform = 0;
var perc = false;
var mod = 100;
var wavelength = 100;

function createTrack() {
	for (i = 0; i < composition.length; i++) {
		composition.track.push([]);
	}
}

function addNote(time, key, type) {

	var note = {
		key: key,
		type: type
	}
	/*
	if (composition.track[x] == undefined) {
		for (i = 0; i < x; i++) {
			if (composition.track[i] == undefined) composition.track.push([]);
		}
	}
	*/

	if (time >= composition.track.length) {
		for (i = 0; i <= time; i++) {
			if (composition.track[i] == undefined) composition.track.push([]);
		}
	}
	//log("add" + ' ' + x + ' ' + k + ' ' + t);
	for (i = 0; i < composition.track[time].length; i++) {
		if (note.key == composition.track[time][i].key) {
			//console.log(k);
			composition.track[time][i] = note
		} else if (!(note.key == composition.track[time][i].key)) {
			composition.track[time].push(note)
	
		}
	}

	if (composition.track[time].length == 0) composition.track[time].push(note)
}

function removeNote(x, k) {
	//log(x + ' ' + k)
	for (i = 0; i < composition.track[x].length; i++) {
		if (composition.track[x][i].key == k) composition.track[x].splice(i, 1);
	}
}

saveComposition = (name) => localStorage.setItem(name, JSON.stringify(composition));

loadComposition = (name) => composition = JSON.parse(localStorage.getItem(name));