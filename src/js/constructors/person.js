function Person (options) {
	let opts = options || {};

	this.name = opts.name;
	if (opts.cool === true) {this.cool = true}
	else {this.cool = false};
};
//let mason = new Person ({name: "mason"});

Person.prototype.pet = function (dog) {
	dog.status = "happy";
}
Person.prototype.feed = function (dog) {
 dog.hungry = false;
}
;
export { Person };
