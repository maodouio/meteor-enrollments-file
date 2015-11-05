Template.enrollmentShow.rendered = function() {
};

Template.enrollmentShow.helpers({
  file: function () {
    console.log(this);
    var id = this.picture;
    console.log('id:', id);
    return Images.findOne({_id: id});
  },
});

Template.enrollmentShow.events ({
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY hh:mm');
});
