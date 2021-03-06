Package.describe({
  summary: "moot, Real-time discussions right on your site.",
  version: "0.1.2",
  git: "https://github.com/zhouzhuojie/meteor-moot.git",
  name: "mrt:moot"
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.add_files('moot/moot.css', 'client');
  api.add_files('moot/moot.min.js', 'client');
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use(['mrt:moot', 'tinytest', 'test-helpers'], ['client']);
    } else {
      api.use(['moot', 'tinytest', 'test-helpers'], ['client']);
    }
    api.add_files('test-mrt:moot.js', ['client']);
  });
}
