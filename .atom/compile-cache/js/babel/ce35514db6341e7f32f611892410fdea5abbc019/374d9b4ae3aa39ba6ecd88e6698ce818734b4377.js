function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libUiRegistry = require('../lib/ui-registry');

var _libUiRegistry2 = _interopRequireDefault(_libUiRegistry);

var uiRegistry = undefined;
var uiProvider = undefined;

describe('UI Registry', function () {
  beforeEach(function () {
    if (uiRegistry) {
      uiRegistry.dispose();
    }
    uiRegistry = new _libUiRegistry2['default']();
    uiProvider = {
      name: 'Test',
      render: jasmine.createSpy('ui.didCalculateMessages'),
      didBeginLinting: jasmine.createSpy('ui.didBeginLinting'),
      didFinishLinting: jasmine.createSpy('ui.didFinishLinting'),
      dispose: jasmine.createSpy('ui.dispose')
    };
  });

  it('works in a lifecycle', function () {
    var testObjA = {};
    var testObjB = {};
    var testObjC = {};

    uiRegistry.add(uiProvider);

    uiRegistry.render(testObjA);
    expect(uiProvider.render).toHaveBeenCalledWith(testObjA);

    uiRegistry.didBeginLinting(testObjB);
    expect(uiProvider.didBeginLinting.mostRecentCall.args[0]).toBe(testObjB);
    expect(uiProvider.didBeginLinting.mostRecentCall.args[1]).toBe(null);

    uiRegistry.didFinishLinting(testObjC);
    expect(uiProvider.didFinishLinting.mostRecentCall.args[0]).toBe(testObjC);
    expect(uiProvider.didFinishLinting.mostRecentCall.args[1]).toBe(null);

    uiRegistry.dispose();
    expect(uiProvider.dispose).toHaveBeenCalled();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci9zcGVjL3VpLXJlZ2lzdHJ5LXNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7NkJBRXVCLG9CQUFvQjs7OztBQUUzQyxJQUFJLFVBQVUsWUFBQSxDQUFBO0FBQ2QsSUFBSSxVQUFrQixZQUFBLENBQUE7O0FBRXRCLFFBQVEsQ0FBQyxhQUFhLEVBQUUsWUFBVztBQUNqQyxZQUFVLENBQUMsWUFBVztBQUNwQixRQUFJLFVBQVUsRUFBRTtBQUNkLGdCQUFVLENBQUMsT0FBTyxFQUFFLENBQUE7S0FDckI7QUFDRCxjQUFVLEdBQUcsZ0NBQWdCLENBQUE7QUFDN0IsY0FBVSxHQUFHO0FBQ1gsVUFBSSxFQUFFLE1BQU07QUFDWixZQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQztBQUNwRCxxQkFBZSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7QUFDeEQsc0JBQWdCLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztBQUMxRCxhQUFPLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7S0FDekMsQ0FBQTtHQUNGLENBQUMsQ0FBQTs7QUFFRixJQUFFLENBQUMsc0JBQXNCLEVBQUUsWUFBVztBQUNwQyxRQUFNLFFBQWdCLEdBQUcsRUFBRSxDQUFBO0FBQzNCLFFBQU0sUUFBZ0IsR0FBRyxFQUFFLENBQUE7QUFDM0IsUUFBTSxRQUFnQixHQUFHLEVBQUUsQ0FBQTs7QUFFM0IsY0FBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTs7QUFFMUIsY0FBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUMzQixVQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFBOztBQUV4RCxjQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3BDLFVBQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDeEUsVUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTs7QUFFcEUsY0FBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3JDLFVBQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUN6RSxVQUFNLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7O0FBRXJFLGNBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtBQUNwQixVQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUE7R0FDOUMsQ0FBQyxDQUFBO0NBQ0gsQ0FBQyxDQUFBIiwiZmlsZSI6Ii9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci9zcGVjL3VpLXJlZ2lzdHJ5LXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgVUlSZWdpc3RyeSBmcm9tICcuLi9saWIvdWktcmVnaXN0cnknXG5cbmxldCB1aVJlZ2lzdHJ5XG5sZXQgdWlQcm92aWRlcjogT2JqZWN0XG5cbmRlc2NyaWJlKCdVSSBSZWdpc3RyeScsIGZ1bmN0aW9uKCkge1xuICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuICAgIGlmICh1aVJlZ2lzdHJ5KSB7XG4gICAgICB1aVJlZ2lzdHJ5LmRpc3Bvc2UoKVxuICAgIH1cbiAgICB1aVJlZ2lzdHJ5ID0gbmV3IFVJUmVnaXN0cnkoKVxuICAgIHVpUHJvdmlkZXIgPSB7XG4gICAgICBuYW1lOiAnVGVzdCcsXG4gICAgICByZW5kZXI6IGphc21pbmUuY3JlYXRlU3B5KCd1aS5kaWRDYWxjdWxhdGVNZXNzYWdlcycpLFxuICAgICAgZGlkQmVnaW5MaW50aW5nOiBqYXNtaW5lLmNyZWF0ZVNweSgndWkuZGlkQmVnaW5MaW50aW5nJyksXG4gICAgICBkaWRGaW5pc2hMaW50aW5nOiBqYXNtaW5lLmNyZWF0ZVNweSgndWkuZGlkRmluaXNoTGludGluZycpLFxuICAgICAgZGlzcG9zZTogamFzbWluZS5jcmVhdGVTcHkoJ3VpLmRpc3Bvc2UnKSxcbiAgICB9XG4gIH0pXG5cbiAgaXQoJ3dvcmtzIGluIGEgbGlmZWN5Y2xlJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdGVzdE9iakE6IE9iamVjdCA9IHt9XG4gICAgY29uc3QgdGVzdE9iakI6IE9iamVjdCA9IHt9XG4gICAgY29uc3QgdGVzdE9iakM6IE9iamVjdCA9IHt9XG5cbiAgICB1aVJlZ2lzdHJ5LmFkZCh1aVByb3ZpZGVyKVxuXG4gICAgdWlSZWdpc3RyeS5yZW5kZXIodGVzdE9iakEpXG4gICAgZXhwZWN0KHVpUHJvdmlkZXIucmVuZGVyKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh0ZXN0T2JqQSlcblxuICAgIHVpUmVnaXN0cnkuZGlkQmVnaW5MaW50aW5nKHRlc3RPYmpCKVxuICAgIGV4cGVjdCh1aVByb3ZpZGVyLmRpZEJlZ2luTGludGluZy5tb3N0UmVjZW50Q2FsbC5hcmdzWzBdKS50b0JlKHRlc3RPYmpCKVxuICAgIGV4cGVjdCh1aVByb3ZpZGVyLmRpZEJlZ2luTGludGluZy5tb3N0UmVjZW50Q2FsbC5hcmdzWzFdKS50b0JlKG51bGwpXG5cbiAgICB1aVJlZ2lzdHJ5LmRpZEZpbmlzaExpbnRpbmcodGVzdE9iakMpXG4gICAgZXhwZWN0KHVpUHJvdmlkZXIuZGlkRmluaXNoTGludGluZy5tb3N0UmVjZW50Q2FsbC5hcmdzWzBdKS50b0JlKHRlc3RPYmpDKVxuICAgIGV4cGVjdCh1aVByb3ZpZGVyLmRpZEZpbmlzaExpbnRpbmcubW9zdFJlY2VudENhbGwuYXJnc1sxXSkudG9CZShudWxsKVxuXG4gICAgdWlSZWdpc3RyeS5kaXNwb3NlKClcbiAgICBleHBlY3QodWlQcm92aWRlci5kaXNwb3NlKS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcbn0pXG4iXX0=