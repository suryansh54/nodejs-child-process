var cp = require("child_process");
console.log(cp);
var progs = {
  list:"dir",
  copy:"cp",
  folder:"mkdir"
}

var child = cp.spawn(progs.folder);
child.stdout.on("data", (data) => {
  console.log("data", data);
})