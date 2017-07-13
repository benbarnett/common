function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libIndieRegistry = require('../lib/indie-registry');

var _libIndieRegistry2 = _interopRequireDefault(_libIndieRegistry);

var _common = require('./common');

describe('IndieRegistry', function () {
  var indieRegistry = undefined;

  beforeEach(function () {
    indieRegistry = new _libIndieRegistry2['default']();
  });
  afterEach(function () {
    indieRegistry.dispose();
  });

  it('triggers observe with existing and new delegates', function () {
    var observeCalled = 0;
    indieRegistry.register({ name: 'Chi' });
    indieRegistry.observe(function () {
      observeCalled++;
    });
    expect(observeCalled).toBe(1);
    indieRegistry.register({ name: 'Ping' });
    expect(observeCalled).toBe(2);
    indieRegistry.register({ name: 'Pong' });
    expect(observeCalled).toBe(3);
  });
  it('removes delegates from registry as soon as they are dispose', function () {
    expect(indieRegistry.delegates.size).toBe(0);
    var delegate = indieRegistry.register({ name: 'Chi' });
    expect(indieRegistry.delegates.size).toBe(1);
    delegate.dispose();
    expect(indieRegistry.delegates.size).toBe(0);
  });
  it('triggers update as delegates are updated', function () {
    var timesUpdated = 0;
    indieRegistry.onDidUpdate(function () {
      timesUpdated++;
    });
    expect(timesUpdated).toBe(0);
    var delegate = indieRegistry.register({ name: 'Panda' });
    expect(timesUpdated).toBe(0);
    delegate.setAllMessages([(0, _common.getMessage)()]);
    expect(timesUpdated).toBe(1);
    delegate.setAllMessages([(0, _common.getMessage)()]);
    expect(timesUpdated).toBe(2);
    delegate.dispose();
    delegate.setAllMessages([(0, _common.getMessage)()]);
    expect(timesUpdated).toBe(2);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci9zcGVjL2luZGllLXJlZ2lzdHJ5LXNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Z0NBRTBCLHVCQUF1Qjs7OztzQkFDdEIsVUFBVTs7QUFFckMsUUFBUSxDQUFDLGVBQWUsRUFBRSxZQUFXO0FBQ25DLE1BQUksYUFBYSxZQUFBLENBQUE7O0FBRWpCLFlBQVUsQ0FBQyxZQUFXO0FBQ3BCLGlCQUFhLEdBQUcsbUNBQW1CLENBQUE7R0FDcEMsQ0FBQyxDQUFBO0FBQ0YsV0FBUyxDQUFDLFlBQVc7QUFDbkIsaUJBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtHQUN4QixDQUFDLENBQUE7O0FBRUYsSUFBRSxDQUFDLGtEQUFrRCxFQUFFLFlBQVc7QUFDaEUsUUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFBO0FBQ3JCLGlCQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7QUFDdkMsaUJBQWEsQ0FBQyxPQUFPLENBQUMsWUFBVztBQUMvQixtQkFBYSxFQUFFLENBQUE7S0FDaEIsQ0FBQyxDQUFBO0FBQ0YsVUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM3QixpQkFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0FBQ3hDLFVBQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDN0IsaUJBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtBQUN4QyxVQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQzlCLENBQUMsQ0FBQTtBQUNGLElBQUUsQ0FBQyw2REFBNkQsRUFBRSxZQUFXO0FBQzNFLFVBQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM1QyxRQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7QUFDeEQsVUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzVDLFlBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtBQUNsQixVQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FDN0MsQ0FBQyxDQUFBO0FBQ0YsSUFBRSxDQUFDLDBDQUEwQyxFQUFFLFlBQVc7QUFDeEQsUUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFBO0FBQ3BCLGlCQUFhLENBQUMsV0FBVyxDQUFDLFlBQVc7QUFDbkMsa0JBQVksRUFBRSxDQUFBO0tBQ2YsQ0FBQyxDQUFBO0FBQ0YsVUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM1QixRQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7QUFDMUQsVUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM1QixZQUFRLENBQUMsY0FBYyxDQUFDLENBQUMseUJBQVksQ0FBQyxDQUFDLENBQUE7QUFDdkMsVUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM1QixZQUFRLENBQUMsY0FBYyxDQUFDLENBQUMseUJBQVksQ0FBQyxDQUFDLENBQUE7QUFDdkMsVUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM1QixZQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDbEIsWUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLHlCQUFZLENBQUMsQ0FBQyxDQUFBO0FBQ3ZDLFVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7R0FDN0IsQ0FBQyxDQUFBO0NBQ0gsQ0FBQyxDQUFBIiwiZmlsZSI6Ii9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci9zcGVjL2luZGllLXJlZ2lzdHJ5LXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG5pbXBvcnQgSW5kaWVSZWdpc3RyeSBmcm9tICcuLi9saWIvaW5kaWUtcmVnaXN0cnknXG5pbXBvcnQgeyBnZXRNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24nXG5cbmRlc2NyaWJlKCdJbmRpZVJlZ2lzdHJ5JywgZnVuY3Rpb24oKSB7XG4gIGxldCBpbmRpZVJlZ2lzdHJ5XG5cbiAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICBpbmRpZVJlZ2lzdHJ5ID0gbmV3IEluZGllUmVnaXN0cnkoKVxuICB9KVxuICBhZnRlckVhY2goZnVuY3Rpb24oKSB7XG4gICAgaW5kaWVSZWdpc3RyeS5kaXNwb3NlKClcbiAgfSlcblxuICBpdCgndHJpZ2dlcnMgb2JzZXJ2ZSB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgZGVsZWdhdGVzJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IG9ic2VydmVDYWxsZWQgPSAwXG4gICAgaW5kaWVSZWdpc3RyeS5yZWdpc3Rlcih7IG5hbWU6ICdDaGknIH0pXG4gICAgaW5kaWVSZWdpc3RyeS5vYnNlcnZlKGZ1bmN0aW9uKCkge1xuICAgICAgb2JzZXJ2ZUNhbGxlZCsrXG4gICAgfSlcbiAgICBleHBlY3Qob2JzZXJ2ZUNhbGxlZCkudG9CZSgxKVxuICAgIGluZGllUmVnaXN0cnkucmVnaXN0ZXIoeyBuYW1lOiAnUGluZycgfSlcbiAgICBleHBlY3Qob2JzZXJ2ZUNhbGxlZCkudG9CZSgyKVxuICAgIGluZGllUmVnaXN0cnkucmVnaXN0ZXIoeyBuYW1lOiAnUG9uZycgfSlcbiAgICBleHBlY3Qob2JzZXJ2ZUNhbGxlZCkudG9CZSgzKVxuICB9KVxuICBpdCgncmVtb3ZlcyBkZWxlZ2F0ZXMgZnJvbSByZWdpc3RyeSBhcyBzb29uIGFzIHRoZXkgYXJlIGRpc3Bvc2UnLCBmdW5jdGlvbigpIHtcbiAgICBleHBlY3QoaW5kaWVSZWdpc3RyeS5kZWxlZ2F0ZXMuc2l6ZSkudG9CZSgwKVxuICAgIGNvbnN0IGRlbGVnYXRlID0gaW5kaWVSZWdpc3RyeS5yZWdpc3Rlcih7IG5hbWU6ICdDaGknIH0pXG4gICAgZXhwZWN0KGluZGllUmVnaXN0cnkuZGVsZWdhdGVzLnNpemUpLnRvQmUoMSlcbiAgICBkZWxlZ2F0ZS5kaXNwb3NlKClcbiAgICBleHBlY3QoaW5kaWVSZWdpc3RyeS5kZWxlZ2F0ZXMuc2l6ZSkudG9CZSgwKVxuICB9KVxuICBpdCgndHJpZ2dlcnMgdXBkYXRlIGFzIGRlbGVnYXRlcyBhcmUgdXBkYXRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGxldCB0aW1lc1VwZGF0ZWQgPSAwXG4gICAgaW5kaWVSZWdpc3RyeS5vbkRpZFVwZGF0ZShmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVzVXBkYXRlZCsrXG4gICAgfSlcbiAgICBleHBlY3QodGltZXNVcGRhdGVkKS50b0JlKDApXG4gICAgY29uc3QgZGVsZWdhdGUgPSBpbmRpZVJlZ2lzdHJ5LnJlZ2lzdGVyKHsgbmFtZTogJ1BhbmRhJyB9KVxuICAgIGV4cGVjdCh0aW1lc1VwZGF0ZWQpLnRvQmUoMClcbiAgICBkZWxlZ2F0ZS5zZXRBbGxNZXNzYWdlcyhbZ2V0TWVzc2FnZSgpXSlcbiAgICBleHBlY3QodGltZXNVcGRhdGVkKS50b0JlKDEpXG4gICAgZGVsZWdhdGUuc2V0QWxsTWVzc2FnZXMoW2dldE1lc3NhZ2UoKV0pXG4gICAgZXhwZWN0KHRpbWVzVXBkYXRlZCkudG9CZSgyKVxuICAgIGRlbGVnYXRlLmRpc3Bvc2UoKVxuICAgIGRlbGVnYXRlLnNldEFsbE1lc3NhZ2VzKFtnZXRNZXNzYWdlKCldKVxuICAgIGV4cGVjdCh0aW1lc1VwZGF0ZWQpLnRvQmUoMilcbiAgfSlcbn0pXG4iXX0=