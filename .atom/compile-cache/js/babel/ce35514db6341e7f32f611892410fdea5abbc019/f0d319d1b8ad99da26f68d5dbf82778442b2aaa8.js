function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var idleCallbacks = new Set();

var linterUiDefault = {
  instances: new Set(),
  signalRegistry: null,
  statusBarRegistry: null,
  activate: function activate() {
    if (atom.config.get('linter-ui-default.useBusySignal')) {
      // This is a necessary evil, see steelbrain/linter#1355
      atom.packages.getLoadedPackage('linter-ui-default').metadata['package-deps'].push('busy-signal');
    }

    var callbackID = window.requestIdleCallback(function installLinterUIDefaultDeps() {
      idleCallbacks['delete'](callbackID);
      if (!atom.inSpecMode()) {
        // eslint-disable-next-line global-require
        require('atom-package-deps').install('linter-ui-default');
      }
    });
    idleCallbacks.add(callbackID);
  },
  deactivate: function deactivate() {
    idleCallbacks.forEach(function (callbackID) {
      return window.cancelIdleCallback(callbackID);
    });
    idleCallbacks.clear();
    for (var entry of this.instances) {
      entry.dispose();
    }
    this.instances.clear();
  },
  provideUI: function provideUI() {
    var instance = new _main2['default']();
    this.instances.add(instance);
    if (this.signalRegistry) {
      instance.signal.attach(this.signalRegistry);
    }
    return instance;
  },
  provideIntentions: function provideIntentions() {
    return Array.from(this.instances).map(function (entry) {
      return entry.intentions;
    });
  },
  consumeSignal: function consumeSignal(signalRegistry) {
    this.signalRegistry = signalRegistry;
    this.instances.forEach(function (instance) {
      instance.signal.attach(signalRegistry);
    });
  },
  consumeStatusBar: function consumeStatusBar(statusBarRegistry) {
    this.statusBarRegistry = statusBarRegistry;
    this.instances.forEach(function (instance) {
      instance.statusBar.attach(statusBarRegistry);
    });
  }
};

module.exports = linterUiDefault;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci11aS1kZWZhdWx0L2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztvQkFFcUIsUUFBUTs7OztBQUc3QixJQUFNLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBOztBQUUvQixJQUFNLGVBQWUsR0FBRztBQUN0QixXQUFTLEVBQUUsSUFBSSxHQUFHLEVBQUU7QUFDcEIsZ0JBQWMsRUFBRSxJQUFJO0FBQ3BCLG1CQUFpQixFQUFFLElBQUk7QUFDdkIsVUFBUSxFQUFBLG9CQUFHO0FBQ1QsUUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFOztBQUV0RCxVQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtLQUNqRzs7QUFFRCxRQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUywwQkFBMEIsR0FBRztBQUNsRixtQkFBYSxVQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDaEMsVUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTs7QUFFdEIsZUFBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUE7T0FDMUQ7S0FDRixDQUFDLENBQUE7QUFDRixpQkFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtHQUM5QjtBQUNELFlBQVUsRUFBQSxzQkFBRztBQUNYLGlCQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTthQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7S0FBQSxDQUFDLENBQUE7QUFDMUUsaUJBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtBQUNyQixTQUFLLElBQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDbEMsV0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFBO0tBQ2hCO0FBQ0QsUUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtHQUN2QjtBQUNELFdBQVMsRUFBQSxxQkFBYTtBQUNwQixRQUFNLFFBQVEsR0FBRyx1QkFBYyxDQUFBO0FBQy9CLFFBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLFFBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUN2QixjQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7S0FDNUM7QUFDRCxXQUFPLFFBQVEsQ0FBQTtHQUNoQjtBQUNELG1CQUFpQixFQUFBLDZCQUFzQjtBQUNyQyxXQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7YUFBSSxLQUFLLENBQUMsVUFBVTtLQUFBLENBQUMsQ0FBQTtHQUNqRTtBQUNELGVBQWEsRUFBQSx1QkFBQyxjQUFzQixFQUFFO0FBQ3BDLFFBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO0FBQ3BDLFFBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsUUFBUSxFQUFFO0FBQ3hDLGNBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0tBQ3ZDLENBQUMsQ0FBQTtHQUNIO0FBQ0Qsa0JBQWdCLEVBQUEsMEJBQUMsaUJBQXlCLEVBQUU7QUFDMUMsUUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFBO0FBQzFDLFFBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsUUFBUSxFQUFFO0FBQ3hDLGNBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7S0FDN0MsQ0FBQyxDQUFBO0dBQ0g7Q0FDRixDQUFBOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFBIiwiZmlsZSI6Ii9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci11aS1kZWZhdWx0L2xpYi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5cbmltcG9ydCBMaW50ZXJVSSBmcm9tICcuL21haW4nXG5pbXBvcnQgdHlwZSBJbnRlbnRpb25zIGZyb20gJy4vaW50ZW50aW9ucydcblxuY29uc3QgaWRsZUNhbGxiYWNrcyA9IG5ldyBTZXQoKVxuXG5jb25zdCBsaW50ZXJVaURlZmF1bHQgPSB7XG4gIGluc3RhbmNlczogbmV3IFNldCgpLFxuICBzaWduYWxSZWdpc3RyeTogbnVsbCxcbiAgc3RhdHVzQmFyUmVnaXN0cnk6IG51bGwsXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmIChhdG9tLmNvbmZpZy5nZXQoJ2xpbnRlci11aS1kZWZhdWx0LnVzZUJ1c3lTaWduYWwnKSkge1xuICAgICAgLy8gVGhpcyBpcyBhIG5lY2Vzc2FyeSBldmlsLCBzZWUgc3RlZWxicmFpbi9saW50ZXIjMTM1NVxuICAgICAgYXRvbS5wYWNrYWdlcy5nZXRMb2FkZWRQYWNrYWdlKCdsaW50ZXItdWktZGVmYXVsdCcpLm1ldGFkYXRhWydwYWNrYWdlLWRlcHMnXS5wdXNoKCdidXN5LXNpZ25hbCcpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbGJhY2tJRCA9IHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGZ1bmN0aW9uIGluc3RhbGxMaW50ZXJVSURlZmF1bHREZXBzKCkge1xuICAgICAgaWRsZUNhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2tJRClcbiAgICAgIGlmICghYXRvbS5pblNwZWNNb2RlKCkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG4gICAgICAgIHJlcXVpcmUoJ2F0b20tcGFja2FnZS1kZXBzJykuaW5zdGFsbCgnbGludGVyLXVpLWRlZmF1bHQnKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWRsZUNhbGxiYWNrcy5hZGQoY2FsbGJhY2tJRClcbiAgfSxcbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICBpZGxlQ2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2tJRCA9PiB3aW5kb3cuY2FuY2VsSWRsZUNhbGxiYWNrKGNhbGxiYWNrSUQpKVxuICAgIGlkbGVDYWxsYmFja3MuY2xlYXIoKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5pbnN0YW5jZXMpIHtcbiAgICAgIGVudHJ5LmRpc3Bvc2UoKVxuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlcy5jbGVhcigpXG4gIH0sXG4gIHByb3ZpZGVVSSgpOiBMaW50ZXJVSSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGludGVyVUkoKVxuICAgIHRoaXMuaW5zdGFuY2VzLmFkZChpbnN0YW5jZSlcbiAgICBpZiAodGhpcy5zaWduYWxSZWdpc3RyeSkge1xuICAgICAgaW5zdGFuY2Uuc2lnbmFsLmF0dGFjaCh0aGlzLnNpZ25hbFJlZ2lzdHJ5KVxuICAgIH1cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfSxcbiAgcHJvdmlkZUludGVudGlvbnMoKTogQXJyYXk8SW50ZW50aW9ucz4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuaW5zdGFuY2VzKS5tYXAoZW50cnkgPT4gZW50cnkuaW50ZW50aW9ucylcbiAgfSxcbiAgY29uc3VtZVNpZ25hbChzaWduYWxSZWdpc3RyeTogT2JqZWN0KSB7XG4gICAgdGhpcy5zaWduYWxSZWdpc3RyeSA9IHNpZ25hbFJlZ2lzdHJ5XG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2Uuc2lnbmFsLmF0dGFjaChzaWduYWxSZWdpc3RyeSlcbiAgICB9KVxuICB9LFxuICBjb25zdW1lU3RhdHVzQmFyKHN0YXR1c0JhclJlZ2lzdHJ5OiBPYmplY3QpIHtcbiAgICB0aGlzLnN0YXR1c0JhclJlZ2lzdHJ5ID0gc3RhdHVzQmFyUmVnaXN0cnlcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5zdGF0dXNCYXIuYXR0YWNoKHN0YXR1c0JhclJlZ2lzdHJ5KVxuICAgIH0pXG4gIH0sXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGludGVyVWlEZWZhdWx0XG4iXX0=