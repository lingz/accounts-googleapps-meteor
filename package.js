Package.describe({
  summary: "Login service for GoogleApps accounts"
});

Package.on_use(function(api) {
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('googleapps-meteor', ['client', 'server']);

  api.add_files('googleapps_login_button.css', 'client');

  api.add_files("googleapps.js");
});
