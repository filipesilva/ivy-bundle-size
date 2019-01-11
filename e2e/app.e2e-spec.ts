import { browser, by, element } from 'protractor';

function checkHelloWorldApp(path) {
  browser.get(path);
  expect(element(by.css('hello-world')).getText()).toEqual('Hello World!');
}

describe('workspace-project App', () => {
  const currentSnapshots = [
    'windows/cli-current/',
    'windows/bazel-current/',
    'windows/rollup-current/',
    'linux/cli-current/',
    'linux/bazel-current/',
    'linux/rollup-current/',
  ];

  currentSnapshots.forEach(path =>
    it(`${path} should be a hello world app`, () => checkHelloWorldApp(path))
  );

  const ivySnapshots = [
    'windows/cli-ivy/',
    'windows/bazel-ivy/',
    'windows/rollup-ivy/',
    'linux/cli-ivy/',
    'linux/bazel-ivy/',
    'linux/rollup-ivy/',
  ];

  // Ivy snapshots fail on protractor when waiting for Angular.
  browser.waitForAngularEnabled(false);

  ivySnapshots.forEach(path =>
    it(`${path} should be a hello world app`, () => checkHelloWorldApp(path))
  );

});
