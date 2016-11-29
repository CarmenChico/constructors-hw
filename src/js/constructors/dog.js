function Dog (options) {
  let opts = options || {};

  // this.status = "normal" || "happy";  -- this is not the route that needs to be used.
  this.status = opts.status || "normal";
  this.color = opts.color;
  this.hungry = opts.hungry || false;
  // if (this.hungry == false ) {return true;
// }
}

export { Dog };
