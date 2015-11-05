Template.enrollmentsIndex.rendered = function() {
};

Template.enrollmentsIndex.helpers({
  file: function () {
    // console.log(this);
    var id = this.picture;
    // console.log('id:', id);
    return Images.findOne({_id: id});
  },
});

Template.enrollmentsIndex.events ({
  'click .delete-enrollment': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
    Enrollments.remove(item._id);
      console.log("Deleted!")
    }
  }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});
