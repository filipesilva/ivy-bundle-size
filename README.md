# Ivy Bundle Size

Run `yarn clean-ngcc && yarn && yarn current && yarn ivy` for a clean comparison.

See `./snapshots` for latest saved bundles.

| Platform | Setup  | Current | Ivy |
|----------|--------|---------|-----|
| Linux    | CLI    | 137     | 481 |
|          | Rollup | 137     | 36  |
|          | Bazel  | 163     | 90  |
| Windows  | CLI    | 137     | 469 |
|          | Rollup | 137     | 36  |
|          | Bazel  | 171     | 98  |
