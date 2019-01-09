# Ivy Bundle Size

Run `git clean -fdx && npm i && npm run current && npm run ivy` for a clean comparison.

Current compiler:
```
> cli-hello-world-ivy@0.0.0 cli-current D:\sandbox\ivy-bundle-size
> ng build --prod


Date: 2019-01-09T17:49:56.162Z
Hash: a6df3987ca0f66b5a9bc
Time: 26294ms
chunk {0} runtime.js, runtime.js.map (runtime) 1.44 kB [entry] [rendered]
chunk {1} main.js, main.js.map (main) 175 kB [initial] [rendered]
chunk {2} polyfills.js, polyfills.js.map (polyfills) 37.5 kB [initial] [rendered]
chunk {3} styles.css, styles.css.map (styles) 38 bytes [initial] [rendered]

> cli-hello-world-ivy@0.0.0 ngc D:\sandbox\ivy-bundle-size
> ngc -p src/tsconfig.app.json


> cli-hello-world-ivy@0.0.0 rollup-current D:\sandbox\ivy-bundle-size
> rollup -c src/rollup.config.js


./out-tsc/tsc-current/src/main.ngc.js → ./dist/rollup-current/main.js...
┌────────────────────────────────────────────────┐
│                                                │
│   Destination: ./dist/rollup-current/main.js   │
│   Bundle Size:  174.79 KB                      │
│   Minified Size:  174.08 KB                    │
│   Gzipped Size:  49.79 KB                      │
│                                                │
└────────────────────────────────────────────────┘
created ./dist/rollup-current/main.js in 19.8s

> cli-hello-world-ivy@0.0.0 cli-ivy D:\sandbox\ivy-bundle-size
> ng build --prod --tsConfig=src/tsconfig.app.ngtsc.json --outputPath=dist/cli-ivy


Date: 2019-01-09T17:53:22.048Z
Hash: 37fb8301529a4adda324
Time: 37766ms
chunk {0} runtime.js, runtime.js.map (runtime) 1.44 kB [entry] [rendered]
chunk {1} main.js, main.js.map (main) 485 kB [initial] [rendered]
chunk {2} polyfills.js, polyfills.js.map (polyfills) 37.5 kB [initial] [rendered]
chunk {3} styles.css, styles.css.map (styles) 38 bytes [initial] [rendered]

> cli-hello-world-ivy@0.0.0 ngtsc D:\sandbox\ivy-bundle-size
> ngc -p src/tsconfig.app.ngtsc.json


> cli-hello-world-ivy@0.0.0 rollup-ivy D:\sandbox\ivy-bundle-size
> rollup -c src/rollup.config.js -i ./out-tsc/tsc-ivy/main.ngtsc.js -o ./dist/rollup-ivy/main.js


./out-tsc/tsc-ivy/main.ngtsc.js → ./dist/rollup-ivy/main.js...
┌────────────────────────────────────────────┐
│                                            │
│   Destination: ./dist/rollup-ivy/main.js   │
│   Bundle Size:  90.68 KB                   │
│   Minified Size:  90.31 KB                 │
│   Gzipped Size:  27.42 KB                  │
│                                            │
└────────────────────────────────────────────┘
created ./dist/rollup-ivy/main.js in 20.1s
```
