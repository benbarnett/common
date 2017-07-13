function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helperToggleClassName = require('../helper/toggle-class-name');

var _helperToggleClassName2 = _interopRequireDefault(_helperToggleClassName);

'use babel';

atom.config.observe('atom-material-ui.tabs.tintedTabBar', function (value) {
    (0, _helperToggleClassName2['default'])('amu-tinted-tab-bar', value);
});

atom.config.observe('atom-material-ui.tabs.compactTabs', function (value) {
    (0, _helperToggleClassName2['default'])('amu-compact-tab-bar', value);
});

atom.config.observe('atom-material-ui.tabs.noTabMinWidth', function (value) {
    (0, _helperToggleClassName2['default'])('amu-no-tab-min-width', value);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2F0b20tbWF0ZXJpYWwtdWkvbGliL3RhYi1iYXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7cUNBRTRCLDZCQUE2Qjs7OztBQUZ6RCxXQUFXLENBQUM7O0FBSVosSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0NBQW9DLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDakUsNENBQWdCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2hELENBQUMsQ0FBQzs7QUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxVQUFDLEtBQUssRUFBSztBQUNoRSw0Q0FBZ0IscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDakQsQ0FBQyxDQUFDOztBQUVILElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2xFLDRDQUFnQixzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNsRCxDQUFDLENBQUMiLCJmaWxlIjoiL1VzZXJzL2JlbmJhcm5ldHQvLmF0b20vcGFja2FnZXMvYXRvbS1tYXRlcmlhbC11aS9saWIvdGFiLWJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgdG9nZ2xlQ2xhc3NOYW1lIGZyb20gJy4uL2hlbHBlci90b2dnbGUtY2xhc3MtbmFtZSc7XG5cbmF0b20uY29uZmlnLm9ic2VydmUoJ2F0b20tbWF0ZXJpYWwtdWkudGFicy50aW50ZWRUYWJCYXInLCAodmFsdWUpID0+IHtcbiAgICB0b2dnbGVDbGFzc05hbWUoJ2FtdS10aW50ZWQtdGFiLWJhcicsIHZhbHVlKTtcbn0pO1xuXG5hdG9tLmNvbmZpZy5vYnNlcnZlKCdhdG9tLW1hdGVyaWFsLXVpLnRhYnMuY29tcGFjdFRhYnMnLCAodmFsdWUpID0+IHtcbiAgICB0b2dnbGVDbGFzc05hbWUoJ2FtdS1jb21wYWN0LXRhYi1iYXInLCB2YWx1ZSk7XG59KTtcblxuYXRvbS5jb25maWcub2JzZXJ2ZSgnYXRvbS1tYXRlcmlhbC11aS50YWJzLm5vVGFiTWluV2lkdGgnLCAodmFsdWUpID0+IHtcbiAgICB0b2dnbGVDbGFzc05hbWUoJ2FtdS1uby10YWItbWluLXdpZHRoJywgdmFsdWUpO1xufSk7XG4iXX0=