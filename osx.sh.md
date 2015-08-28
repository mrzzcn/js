使用U盘安装OSX

```bash
sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/JKOSX --applicationpath /Applications/Install\ OS\ X\ Yosemite.app --nointeraction
// 其中 /Volumes/JKOSX 为自定义的U盘路径

```


OS X 10.11 npm install error
SOLINK_MODULE(target) Release/.node
ld: library not found for -lgcc_s.10.5
clang: error: linker command failed with exit code 1 (use -v to see invocation)
make: *** [Release/.node] Error 1
gyp ERR! build error
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:269:23)
gyp ERR! stack     at ChildProcess.emit (events.js:110:17)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (child_process.js:1074:12)
gyp ERR! System Darwin 15.0.0
gyp ERR! command "node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
```bash
cd /usr/local/lib
sudo ln -s ../../lib/libSystem.B.dylib libgcc_s.10.5.dylib
```
