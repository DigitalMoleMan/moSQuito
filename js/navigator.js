
class Navigator{
	constructor(){
			this.view = [
				'composition',
			]
		this.selector = {
			x: 0,
			y: 0
		};
	}

	select(){

	}

	goTo(view){
		this.view.push(view);
	}

	goBack(){
		this.view.splice(this.view.length - 1, 1);
	}
}