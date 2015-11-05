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
  return moment(date).format('MM-DD-YYYY');
});
// Template.registerHelper('formatdatetime', function(datetime){
//   if (moment && datetime) {
//     if(datetime.getDate() === new Date().getDate()){
//       return "今天 " + moment(datetime).format("hh:mm");
//     } else{
//       return moment(datetime).format("YYYY/MM/DD hh:mm");
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
