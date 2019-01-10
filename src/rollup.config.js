
import nodeResolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import buildOptimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin.js';
import { sep } from 'path';

const bazelUglifyConfig = {
  compress: {
    pure_getters: true,
    passes: 3,
    global_defs: {
      ngDevMode: false
    },
    keep_fnames: true,
    reduce_funcs: true,
    reduce_vars: true,
    sequences: true
  },
  mangle: true,
}

const cliUglifyConfig = {
  safari10: true,
  output: {
    ascii_only: true,
    comments: false,
    webkit: true,
  },
  compress: {
    pure_getters: true,
    passes: 3,
    global_defs: {
      ngDevMode: false,
    },
  },
}

export default {
  input: './out-tsc/tsc-current/src/main.ngc.js',
  output: {
    file: './dist/rollup-current/main.js',
    format: 'iife',
    sourcemap: true,
  },
  treeshake: true,
  plugins: [
    nodeResolve(),
    buildOptimizer({
      // Doesn't look like having these is making a difference. Figure out why.
      sideEffectFreeModules: [
        `node_modules${sep}@angular${sep}core${sep}`,
        `node_modules${sep}@angular${sep}platform-browser${sep}`,
        `node_modules${sep}@angular${sep}common${sep}`,
        `node_modules${sep}@angular${sep}compiler${sep}`,
        `node_modules${sep}rxjs${sep}`,
      ]
    }),
    terser(cliUglifyConfig),
    filesize(),
  ]
};
