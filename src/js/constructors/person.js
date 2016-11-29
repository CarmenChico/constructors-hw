function Person (options) {
	let opts = options || {};

	this.name = opts.name;
}
//let mason = new Person ({name: "mason"});

Person.prototype.pet = function () {

}
Person.prototype.feed = function () {

}
;
export { Person };
