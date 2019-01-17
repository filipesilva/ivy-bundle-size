const { resolve } = require('path');
const { writeFileSync, unlinkSync } = require('fs');
const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const filesize = require('rollup-plugin-filesize');
const { terser } = require('rollup-plugin-terser');
const buildOptimizer = require('@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin.js').default;


const cwd = process.cwd();
const moduleToTest = resolve(cwd, './node_modules/@angular/core/esm5/core.js').replace(/\\/g, '/');
const tmpInputFilename = resolve(cwd, './dist-side-effects/side-effects-test.tmp-input.js');
const outputFilename = resolve(cwd, './dist-side-effects/side-effect-test.js')
writeFileSync(tmpInputFilename, `import '${moduleToTest}';`)

// Terser config for side effect detection.
const terserConfig = {
  mangle: false,
  output: {
    comments: false,
    beautify: true,
  },
  compress: {
    // Override defaults to disable most optimizations.
    // We only want to use the minimum needed for side-effect detection.
    defaults: false,

    // Set options specifically for dropping side-effect free code.
    conditionals: true, // optimize conditionals
    unused: true, // drop unreferenced vars/funcs, seems to leave leftover builtin expressions (`String, Array,Error` etc)
    side_effects: true, // drop functions marked as pure
    pure_getters: true, // assume prop access has no side effects
    passes: 3, // run compress 3 times
    global_defs: {
      ngDevMode: false, // asume this var is defined as 'false'
    },
    reduce_vars: true, // optimization on variables assigned with and used as constant values
    reduce_funcs: true, // allows single-use functions to be inlined as function expressions
    module: true, // mark code as being a es2015 module
    toplevel: true, // drop unreferenced functions ("funcs") and/or variables, implicit with module
    evaluate: true, // evaluate constant expressions
    dead_code: true, // drop dead code
  },
};

// Build Optimizer config for marking modules as free from side effects.
const buildOptimizerConfig = {
  sideEffectFreeModules: [
    `node_modules/@angular/core/`,
    `node_modules/@angular/platform-browser/`,
    `node_modules/@angular/common/`,
    `node_modules/@angular/compiler/`,
    `node_modules/rxjs/`,
  ],
};

// Rollup input options.
const inputOptions = {
  input: tmpInputFilename,
  plugins: [
    nodeResolve(),
    buildOptimizer(buildOptimizerConfig),
    terser(terserConfig),
    filesize(),
  ]
};

// Rollup output options.
const outputOptions = {
  file: outputFilename,
  format: 'esm',
  sourcemap: true,
};

async function test() {
  // Create a bundle.
  const bundle = await rollup.rollup(inputOptions);
  // `bundle.watchFiles` is an array of files the bundle depends on.

  // Write the bundle to disk.
  await bundle.write(outputOptions);

  // Delete the temporary input file.
  unlinkSync(tmpInputFilename);

  console.log(`\n`
    + `  Open http://sokra.github.io/source-map-visualization/ and drag the output js and \n`
    + `  js.map to see where the remaining code comes from.`)
}

test();
