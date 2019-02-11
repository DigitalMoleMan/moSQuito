var track = new Array;

function createTrack() {
	for (y = 0; y < frequencies.length; y++) {
		track.push([]);
		for (x = 0; x < 128; x++) {
			track[y].push({
				hasNote: false,
				type: 'sine',
			})
		}
	}
}

onTrack = (x, y) => track[y][x];

function addNote(x, y, type){
	onTrack(x, y).hasNote = true;
	onTrack(x, y).type = newNote 
}