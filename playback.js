/*
	moSQuito - playback
*/

var playing = false;
var playhead = new Number;


tempo = (bpm, timeSign) => 1000 / (bpm / 60) / timeSign.notes

function playComp() {
	playhead = 0;
	playing = !playing;
	playback()

}

function playback() {
	if (playing) {
		if (playhead >= composition.track.length) {
			playing = false;
		} else {
			playhead++
		}
		for (i = 0; i < composition.track[playhead].length; i++) {
			playNote(composition.track[playhead][i].key, composition.track[playhead][i].type, composition.track[playhead][i].perc);
		}
		

		setTimeout(() => {
			playback()
		}, tempo(composition.bpm, composition.timeSign));
	}

}