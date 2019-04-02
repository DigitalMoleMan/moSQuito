/*
	moSQuito - playback
*/

class Player {
	constructor() {
		this.ctx = new AudioContext();
		this.playing = false;
		this.playbackInterval;
		this.playhead = 0;

	}

	/**
	 * @method playNote
	 * @param {*} note
	 * @param {*} sound 
	 */
	playNote(key, length, sound) {
		var osc = this.ctx.createOscillator();
		var gain = this.ctx.createGain();


		osc.connect(gain).connect(this.ctx.destination);

		osc.frequency.value = frequencies[key];

		osc.type = types[sound.type];


		osc.start(this.ctx.currentTime);


		osc.frequency.exponentialRampToValueAtTime(.0001, this.ctx.currentTime + length);
		gain.gain.exponentialRampToValueAtTime(.0001, this.ctx.currentTime + length);
		osc.stop(this.ctx.currentTime + length);
	}

	play() {
		this.playing = !this.playing; //toggle playing status

		if (this.playing) {

			selector.scroll.x = this.playhead;

			this.playbackInterval = setInterval(() => {

				if (this.playhead > 31 + selector.scroll.x) selector.scroll.x += 31;
				comp.tracks.forEach(track => {
					if (this.playhead < track.notes.length) {
						track.notes[this.playhead].forEach(note => {
							this.playNote(note.key, note.length, track.sound);
						})
					}
				});
				this.playhead++;
			}, 1000 / (comp.bpm / 60) / comp.timeSign.notes);

		} else this.stop();
	}

	pause() {
		clearInterval(this.playbackInterval);
	}

	stop() {
		clearInterval(this.playbackInterval);
		this.playhead = 0;
	}
}
