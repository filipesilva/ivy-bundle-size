# Ivy Bundle Size

Latest results:

| Platform | Setup  | Current | Ivy | Ivy-compat |
|----------|--------|--------:|----:|-----------:|
| Linux    | CLI    |     176 |  37 |        181 |
|          | Rollup |     176 |  37 |        181 |
|          | Bazel  |     160 | 9.3*|        64* |
| Windows  | CLI    |     176 |  37 |        181 |
|          | Rollup |     176 |  37 |        181 |
|          | Bazel  |     160 | 9.3*|        64* |

Items with `*` are currently failing e2e at runtime:
- Bazel+Ivy fails with `Uncaught TypeError: Cannot read property 'type' of null`.
- Bazel+Ivy compat fails with `Uncaught Error: StaticInjectorError(Platform: core)[Bn]:`.

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
