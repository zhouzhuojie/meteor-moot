Tinytest.add('Moot be initalized', function (test) {
  test.isNotNull($.fn.moot, 'moot should exist');
  test.isTrue(typeof($.fn.moot) === "function", 'ko.meteor.findOne should be a function');
});
