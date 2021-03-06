// ***************************************************************
// DOCUMENTS COLLECTION
// ***************************************************************
Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
});

Enrollments = new Meteor.Collection('enrollments');

EnrollmentSchema = new SimpleSchema({
  name: {
    type: String,
    label: "姓名",
    max: 120,
    optional: false
  },
  mobile: {
    type: Number,
    label: "手机",
    max: 100000000000,
    optional: true
  },
  picture: {
    type: String,
    optional: false,
    label: '上传背景图片',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        previewTemplate: 'myFilePreview',
        label: '选择照片',
      }
    }
  },
  email: {
    type: String,
    label: "邮箱",
    max: 120,
    optional: true
  },
  wechat: {
    type: String,
    label: "微信",
    max: 120,
    optional: true
  },
  message: {
    type: String,
    label: "信息",
    max: 120,
    optional: true
  },
  createdAt: {
    type: Date,
    label: "报名日期",
    denyUpdate: false,
    optional: false,
    autoform: {
      afFieldInput: {
        type: "datetime-local"
      }
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});
// Must remember to attach the schema to the collection
Enrollments.attachSchema(EnrollmentSchema);

// Custom validation messages with SimpleSchema. Remove if not needed
Enrollments.simpleSchema().messages({
  required: "[label] is required",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] cannot exceed [max] characters",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or before [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
  {msg: "[label] failed regular expression validation"},
  {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
  {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
  {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
  {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
  {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[label] is not allowed by the schema"
});


// Meteor methods related to collection
Meteor.methods({
  // someMethod: function(arg1, arg2) {
  //   return "some return value";
  // },
});
