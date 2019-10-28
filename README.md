# Node JS - Child Process

Start a new process with either a command, a file, a node program synchronous or asynchronous

#### Start a process ASYNC
- child_process.spawn()
- child_process.exec()
- child_process.execFile()
- child_process.fork()

#### Start a process SYNC
- child_process.spawnSync()
- child_process.execSync()
- child_process.execFileSync()

#### Events
- <b>Close:</b> When stdio streams close
- <b>disconnect:</b> after child.disconnect() is called by parent
- <b>error:</b> When error occurs (No spawn, cannot kill, message from parent failed)
- <b>message:</b> When process.send() is called by child
- <b>exit:</b> When process ends

#### Functions
- child.disconnect();
- child.kill([signal]);
- child.send(message, handle, options, callback)

#### Properties
- child.connected
- child.channel
- child.pid
- child.stdin
- child.stdout
- child.stderr
- child.stdio

### child_process.spawn()

```javascript
// child_process.spawn(command, [args], {options})

var cp = require('child_process');
var progs = {
  list:"ls",
  copy:"cp",
  folder:"mkdir"
}

var child = cp.spawn(progs.list);
child.stdout.on("data", (data)=>{
  console.log(data);
})
```
