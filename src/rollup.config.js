
import nodeResolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import buildOptimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin.js';

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
  input: './out-tsc/tsc-current/src/main.current.js',
  output: {
    file: './dist/rollup-current/main.js',
    format: 'iife',
    sourcemap: true,
  },
  treeshake: true,
  plugins: [
    nodeResolve(),
    buildOptimizer({
      sideEffectFreeModules: [
        `node_modules/@angular/core/`,
        `node_modules/@angular/platform-browser/`,
        `node_modules/@angular/common/`,
        `node_modules/@angular/compiler/`,
        `node_modules/rxjs/`,
      ]
    }),
    terser(cliUglifyConfig),
    filesize(),
  ]
};
