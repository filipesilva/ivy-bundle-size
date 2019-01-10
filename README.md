# Ivy Bundle Size

Run `git clean -fdx && yarn && yarn current && yarn ivy` for a clean comparison.

See `./snapshots` for latest saved bundles.

| Platform | Setup  | Current | Ivy |
|----------|--------|---------|-----|
| Linux    | CLI    |         |     |
|          | Rollup |         |     |
|          | Bazel  |         |     |
| Windows  | CLI    | 137     | 477 |
|          | Rollup | 137     | 36  |
|          | Bazel  | 171     | 98  |
