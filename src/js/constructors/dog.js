function Dog (options) {
  let opts = options || {};

  this.status = "normal" || "happy";
  this.color = opts.color|| "black";
  this.hungry = opts.hungry || "true";

}



export { Dog };
