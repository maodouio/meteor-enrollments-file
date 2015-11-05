// Package.describe({
//   name: 'maodouio:enrollments-file',
//   version: '0.0.1',
//   // Brief, one-line summary of the package.
//   summary: 'Maodou.io enrollments package, A meteor package that provides enrollments pages at /enrollments',
//   //URL to the Git repository containing the source code for this package.
//   git: 'https://github.com/maodouio/meteor-enrollments-file.git',
//   // By default, Meteor will default to using README.md for documentation.
//   // To avoid submitting documentation, set this field to null.
//   documentation: 'README.md'
// });
//
// Package.onUse(function(api) {
//   // version
//   api.versionsFrom('1.2.0.2');
//   // package
//   api.use('iron:router@1.0.12', ["server", "client"]);
//   api.use('aldeed:autoform@5.1.2', ["server", "client"]);
//   api.use('aldeed:collection2@2.3.3', ["server", "client"]);
//   api.use('aldeed:simple-schema@1.3.2', ["server", "client"]);
//   api.use('matb33:collection-hooks@0.8.0', ["server", "client"]);
//   api.use('cfs:standard-packages@0.5.9', ["server", "client"]);
//   api.use('cfs:gridfs@0.0.33', ["server", "client"]);
//   api.use('cfs:filesystem@0.1.2', ["server", "client"]);
//   api.use('maodouio:autoform-file@1.0.5', ["server", "client"]);
//
//   // template
//   api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
//
//   // file
//   // ls -l | awk '{print "api.addFiles(\""$9"\", \"client\");"}'
//   api.addFiles('enrollments.js');
//   api.addFiles('client/routes.js', 'client');
//   api.addFiles("client/enrollments/enrollment_edit.html", "client");
//   api.addFiles("client/enrollments/enrollment_edit.js", "client");
//   api.addFiles("client/enrollments/enrollment_new.html", "client");
//   api.addFiles("client/enrollments/enrollment_new.js", "client");
//   api.addFiles("client/enrollments/enrollment_show.html", "client");
//   api.addFiles("client/enrollments/enrollment_show.js", "client");
//   api.addFiles("client/enrollments/enrollments.html", "client");
//   api.addFiles("client/enrollments/enrollments_index.html", "client");
//   api.addFiles("client/enrollments/enrollments_index.js", "client");
//   api.addFiles("client/enrollments/mycss.css", "client");
//   api.addFiles("public/wechat1.png", "client");
//   api.addFiles("lib/collections.js");
//
//   api.addFiles("server/publications.js", "server");
//   api.addFiles("server/fixtures.js", "server");
//   api.addFiles("server/permissions.js", "server");
//
//   api.export('Enrollments');
//   api.export('Images');
// });
