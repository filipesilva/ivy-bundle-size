# Ivy Bundle Size

Latest results:

| Platform | Setup  | Current | Ivy | Ivy-compat |
|----------|--------|--------:|----:|-----------:|
| Linux    | CLI    |     152 |  12 |        181 |
|          | Rollup |     152 |  12 |        181 |
|          | Bazel  |     160 |  12*|        183*|
| Windows  | CLI    |     152 |  12 |        138 |
|          | Rollup |     152 |  12 |        138 |
|          | Bazel  |     160 |  12*|        183*|

Notes for * items:
- Bazel+Ivy/Ivy-compat fail to build outside angular/angular (https://github.com/angular/angular/issues/28182).

Run `yarn build` for a clean build.

See `./snapshots` for latest saved bundles.
You can update all snapshots after builds with `yarn update-windows-snapshots` and 
`yarn update-linux-snapshots`, or individually:
- `yarn update-windows-cli-rollup-snapshots`
- `yarn update-windows-bazel-current-snapshots`
- `yarn update-windows-bazel-ivy-compat-snapshots`
- `yarn update-linux-cli-rollup-snapshots`
- `yarn update-linux-bazel-current-snapshots`
- `yarn update-linux-bazel-ivy-snapshots`
- `yarn update-linux-bazel-ivy-compat-snapshots`

Run `yarn test` to test the snapshots are working apps.

Note: on a Windows machine with Docker, use the following command on gitbash to test on Linux:
`docker run -v $(pwd -W):/ivy-bundle-size -it --rm node:10.12 bash`
