Package.describe({
  summary: "moot"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('moot/moot.css', 'client');
  api.add_files('moot/moot.min.js', 'client');
});
