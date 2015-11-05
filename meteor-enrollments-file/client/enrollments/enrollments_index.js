Template.enrollmentsIndex.rendered = function() {
};

Template.enrollmentsIndex.helpers({
  file: function () {
    console.log(this);
    var id = this.picture;
    console.log('id:', id);
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
// Template.registerHelper('formatdatetime', function(datetime){
//   if (moment && datetime) {
//     if(datetime.getDate() === new Date().getDate()){
//       return "今天 " + moment(datetime).format("hh:mm");
//     } else{
//       return moment(datetime).format("YYYY-MM-DD hh:mm");
//     }
//
//   }
//   else {
//     return datetime;
//   }
// });
//
// Template.registerHelper('formatdatetimeTime', function(datetime){
//   if (moment && datetime) {
//     if(datetime.getDate() === new Date().getDate()){
//       return "今天 " + moment(datetime).format("hh:mm");
//     } else{
//       return moment(datetime).format("hh:mm");
//     }
//
//   }
//   else {
//     return datetime;
//   }
// });
//
// Template.registerHelper('formatdatetimeDate', function(datetime){
//   if (moment && datetime) {
//     if(datetime.getDate() === new Date().getDate()){
//       return "今天 " + moment(datetime).format("hh:mm");
//     } else{
//       return moment(datetime).format("YYYY-MM-DD");
//     }
//
//   }
//   else {
//     return datetime;
//   }
// });
//
// Template.registerHelper('formatdatetimeMonth', function(datetime){
//   if (moment && datetime) {
//     if(datetime.getDate() === new Date().getDate()){
//       return "今天 " + moment(datetime).format("hh:mm");
//     } else{
//       return moment(datetime).format("MM-DD");
//     }
//
//   }
//   else {
//     return datetime;
//   }
// });
