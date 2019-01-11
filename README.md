# Ivy Bundle Size

Latest results:

| Platform | Setup  | Current | Ivy |
|----------|--------|---------|-----|
| Linux    | CLI    | 176     | 37  |
|          | Rollup | 176     | 37  |
|          | Bazel  | 160     | 8.8*|
| Windows  | CLI    | 176     | 37  |
|          | Rollup | 176     | 37  |
|          | Bazel  | 160     | 8.8*|

Items with `*` are currently failing e2e.

Run `yarn build` for a clean build.

See `./snapshots` for latest saved bundles.
You can update all snapshots after builds with `yarn update-windows-snapshots` and 
`yarn update-linux-snapshots`, or individually:
- `yarn update-windows-cli-rollup-snapshots`
- `yarn update-windows-bazel-current-snapshots`
- `yarn update-windows-bazel-ivy-snapshots`
- `yarn update-linux-cli-rollup-snapshots`
- `yarn update-linux-bazel-current-snapshots`
- `yarn update-linux-bazel-ivy-snapshots`

Run `yarn test` to test the snapshots are working apps.

Note: on a Windows machine with Docker, use the following command on gitbash to test on Linux:
`docker run -v $(pwd -W):/ivy-bundle-size -it --rm node:10.12 bash`
