workspace(name = "ivy_bundle_size")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "895c2b0d1480834808216fb36cd4bf21517954cb966c893ee42421dfefcfd4bc",
    strip_prefix = "rules_nodejs-1f6d878a9ea3a095291f66e3d1a0f6b4641f5159",
    url = "https://github.com/bazelbuild/rules_nodejs/archive/1f6d878a9ea3a095291f66e3d1a0f6b4641f5159.zip",
)

http_archive(
    name = "build_bazel_rules_typescript",
    sha256 = "5a31a67550d2a92270599e90a221afe229f6e1863bf2eff22e9750c6ecf45978",
    strip_prefix = "rules_typescript-2963b55370b21d545d0ac0f30fca9dc74a0f5538",
    url = "https://github.com/bazelbuild/rules_typescript/archive/2963b55370b21d545d0ac0f30fca9dc74a0f5538.zip",
)

# The @angular repo contains rule for building Angular applications
http_archive(
    name = "angular",
    # Snapshot post 7.2.0 that includes recent fixes.
    # sha256 = "5f08d5384d6796c8c39d83134c87d383d195385193b897e3686a34ef247b69b7",
    strip_prefix = "angular-da2880d7c495022405102f89b8c641b23516388d",
    url = "https://github.com/filipesilva/angular/archive/da2880d7c495022405102f89b8c641b23516388d.zip",
)

# The @rxjs repo contains targets for building rxjs with bazel
http_archive(
    name = "rxjs",
    sha256 = "72b0b4e517f43358f554c125e40e39f67688cd2738a8998b4a266981ed32f403",
    strip_prefix = "package/src",
    url = "https://registry.yarnpkg.com/rxjs/-/rxjs-6.3.3.tgz",
)

http_archive(
    name = "angular_cli",
    # Fix for rollup plugin on windows (https://github.com/angular/angular-cli/pull/13404) backported to 6.1.0-rc.0.
    sha256 = "cb48c41fa7d48ac677a69168ec3a6d4f0ba67b260e68b19587e3ce31b3a10cda",
    strip_prefix = "angular-cli-6b45c898ab831d5e9cd7cbe0e1f990776a712bc9",
    url = "https://github.com/filipesilva/angular-cli/archive/6b45c898ab831d5e9cd7cbe0e1f990776a712bc9.zip",
    # sha256 = "8cf320ea58c321e103f39087376feea502f20eaf79c61a4fdb05c7286c8684fd",
    # strip_prefix = "angular-cli-6.1.0-rc.0",
    # url = "https://github.com/angular/angular-cli/archive/v6.1.0-rc.0.zip",
)

http_archive(
    name = "org_brotli",
    sha256 = "774b893a0700b0692a76e2e5b7e7610dbbe330ffbe3fe864b4b52ca718061d5a",
    strip_prefix = "brotli-1.0.5",
    url = "https://github.com/google/brotli/archive/v1.0.5.zip",
)

load("@angular//packages/bazel:package.bzl", "rules_angular_dependencies")

rules_angular_dependencies()

load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")

rules_typescript_dependencies()

load("@build_bazel_rules_nodejs//:package.bzl", "rules_nodejs_dependencies")

rules_nodejs_dependencies()

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories(
    node_version = "10.10.0",
    yarn_version = "1.12.1",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@angular//:index.bzl", "ng_setup_workspace")

ng_setup_workspace()

