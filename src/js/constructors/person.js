function Person (options) {
	let opts = options || {};

	this.name = opts.name;
	if (opts.cool === true) {this.cool = true}
	else {this.cool = false};
};
//let mason = new Person ({name: "mason"});
//added these 2 functions becuase they were being called and were mising ..pet ..feed... which was making the other test results not appear.
Person.prototype.pet = function (dog) {
	dog.status = "happy";
}
Person.prototype.feed = function (dog) {
 dog.hungry = false;
}
;
export { Person };
