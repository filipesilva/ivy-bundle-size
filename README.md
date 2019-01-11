# Ivy Bundle Size

Run `yarn clean-ngcc && yarn && yarn current && yarn ivy` for a clean comparison.

See `./snapshots` for latest saved bundles.

| Platform | Setup  | Current | Ivy |
|----------|--------|---------|-----|
| Linux    | CLI    | 137     | 481 |
|          | Rollup | 137     | 36  |
|          | Bazel  | 122     | 8.8 |
| Windows  | CLI    | 137     | 469 |
|          | Rollup | 137     | 36  |
|          | Bazel  | 122     | 8.8 |


Note: on a Windows machine with Docker, use the following command on gitbash to test Linux:
`docker run -v $(pwd -W):/ivy-bundle-size -it node:10.12 bash`
