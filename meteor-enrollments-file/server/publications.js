// ***************************************************************
// PUBLICATIONS (For Documents collection)
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
Meteor.publish('enrollments', function() {
  return Enrollments.find();
});

// DOCUMENT SHOW
// -------------------------------------------------------
Meteor.publish('enrollment', function(id) {
  return Enrollments.find(id);
});

Meteor.publish('images', function() {
  return Images.find();
});
