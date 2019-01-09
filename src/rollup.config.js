
import nodeResolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './out-tsc/tsc-current/src/main.js',
  output: {
    file: './dist/rollup-current/main.js',
    format: 'iife',
    sourcemap: true,
  },
  treeshake: true,
  plugins: [
    nodeResolve(),
    filesize(),
    uglify()
  ]
};
