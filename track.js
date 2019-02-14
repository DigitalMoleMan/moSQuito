var track = new Array;

var playing = false;
var playhead = new Number;

function createTrack() {
	for (x = 0; x < 64; x++) {
		track.push([])
	}
}

function addNote(x, k, t) {
	//console.log("add" + ' ' + x + ' ' + k + ' ' + t);
	track[x].push({
		key: k,
		type: t
	})
}

function removeNote(x, k) {
	console.log(x + ' ' + k)
	track[x].splice(0);
}

function playTrack() {
	if (!playing) playhead = 0;
	playing = !playing;
}

function playback() {
	for (i = 0; i < track[playhead].length; i++) {
			playNote(track[playhead][i].key, track[playhead][i].type);
	}
	if (playhead >= track.length) playing = false;

	playhead++
}

setInterval(() => {
	if (playing) {
		playback();
	}
}, 166)