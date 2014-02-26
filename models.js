function Ninja (attrs) {
	_.extend(this, attrs);
}

_.extend(Ninja.prototype, {
	getHealth: function(){

		h = Math.floor(Math.random() * 60) + 40;
		return h;
	}
})

