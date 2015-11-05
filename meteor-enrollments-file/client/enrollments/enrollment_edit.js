Template.enrollmentEdit.rendered = function() {
};

Template.enrollmentEdit.helpers({
});

Template.enrollmentEdit.events({
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});
