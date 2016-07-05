Package.describe({
  name: 'cinn:collection-helpers',
  version: '0.0.3',
  summary: 'Helpers for meteor collections',
  git: 'https://github.com/cinn-labs/collection-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  const both = ['client', 'server'];
  api.versionsFrom('1.3.4');
  api.export('CollectionHelpers');
  api.use('ecmascript');
  api.addFiles('collection-helpers.js', both);
});
