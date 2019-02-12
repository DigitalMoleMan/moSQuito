var track = new Array;

var playing = false;
var playhead = new Number;

function createTrack() {
	for (x = 0; x < 1280; x++) {
		track.push([])
	}
}

onTrack = (x) => track[x];

function addNote(x, key, type) {
	track[x].push({
		key: key,
		type: type
	})
}


//OK, IM GONNA FIX THIS IN A BIT YEAH
function removeNote(x, y) {
	//track.findIndex((y) => y = )
}

function playTrack() {
	if (!playing) playhead = 0;
	playing = !playing;
}

function playback() {

	var note = track[playhead]

	console.log(note);
	if (track[playhead].hasNote) playNote(note.key, note.type);
	if (playhead < track.length) {
		playhead++;
	} else {
		playing = false;
	}


}