function Dog (options) {
  let opts = options || {};

  // this.status = "normal" || "happy";  -- this is not the route that needs to be used.
  this.status = opts.status || "normal";
    // this.status = opts.status; -- tried to keep normal out of it just for the hec of it.
  this.color = opts.color;
  // this.hungry = opts.hungry || false;
  if (opts.hungry === false) {this.hungry=false}
  else {this.hungry = true};
};


export { Dog };
