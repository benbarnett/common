Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _atom = require('atom');

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _greeter = require('./greeter');

var _greeter2 = _interopRequireDefault(_greeter);

exports['default'] = {
  greeter: null,
  instance: null,
  activate: function activate() {
    if (!atom.inSpecMode()) {
      // eslint-disable-next-line global-require
      require('atom-package-deps').install('linter', true);
    }
    this.greeter = new _greeter2['default']();
    this.instance = new _main2['default']();

    this.greeter.activate()['catch'](function (e) {
      return console.error('[Linter-UI-Default] Error', e);
    });
  },
  consumeLinter: function consumeLinter(linter) {
    var _this = this;

    var linters = [].concat(linter);
    for (var entry of linters) {
      this.instance.addLinter(entry);
    }
    return new _atom.Disposable(function () {
      for (var entry of linters) {
        _this.instance.deleteLinter(entry);
      }
    });
  },
  consumeLinterLegacy: function consumeLinterLegacy(linter) {
    var _this2 = this;

    var linters = [].concat(linter);
    for (var entry of linters) {
      linter.name = linter.name || 'Unknown';
      linter.lintOnFly = Boolean(linter.lintOnFly);
      this.instance.addLinter(entry, true);
    }
    return new _atom.Disposable(function () {
      for (var entry of linters) {
        _this2.instance.deleteLinter(entry);
      }
    });
  },
  consumeUI: function consumeUI(ui) {
    var _this3 = this;

    var uis = [].concat(ui);
    for (var entry of uis) {
      this.instance.addUI(entry);
    }
    return new _atom.Disposable(function () {
      for (var entry of uis) {
        _this3.instance.deleteUI(entry);
      }
    });
  },
  provideIndie: function provideIndie() {
    var _this4 = this;

    return function (indie) {
      return _this4.instance.registryIndie.register(indie);
    };
  },
  deactivate: function deactivate() {
    this.instance.dispose();
    this.greeter.dispose();
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O29CQUUyQixNQUFNOztvQkFDZCxRQUFROzs7O3VCQUNQLFdBQVc7Ozs7cUJBR2hCO0FBQ2IsU0FBTyxFQUFFLElBQUk7QUFDYixVQUFRLEVBQUUsSUFBSTtBQUNkLFVBQVEsRUFBQSxvQkFBRztBQUNULFFBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7O0FBRXRCLGFBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7S0FDckQ7QUFDRCxRQUFJLENBQUMsT0FBTyxHQUFHLDBCQUFhLENBQUE7QUFDNUIsUUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBWSxDQUFBOztBQUU1QixRQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFNLENBQUMsVUFBQSxDQUFDO2FBQUksT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUM7S0FBQSxDQUFDLENBQUE7R0FDbEY7QUFDRCxlQUFhLEVBQUEsdUJBQUMsTUFBYyxFQUFjOzs7QUFDeEMsUUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNqQyxTQUFLLElBQU0sS0FBSyxJQUFJLE9BQU8sRUFBRTtBQUMzQixVQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUMvQjtBQUNELFdBQU8scUJBQWUsWUFBTTtBQUMxQixXQUFLLElBQU0sS0FBSyxJQUFJLE9BQU8sRUFBRTtBQUMzQixjQUFLLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7T0FDbEM7S0FDRixDQUFDLENBQUE7R0FDSDtBQUNELHFCQUFtQixFQUFBLDZCQUFDLE1BQXNCLEVBQWM7OztBQUN0RCxRQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ2pDLFNBQUssSUFBTSxLQUFLLElBQUksT0FBTyxFQUFFO0FBQzNCLFlBQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUE7QUFDdEMsWUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzVDLFVBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtLQUNyQztBQUNELFdBQU8scUJBQWUsWUFBTTtBQUMxQixXQUFLLElBQU0sS0FBSyxJQUFJLE9BQU8sRUFBRTtBQUMzQixlQUFLLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7T0FDbEM7S0FDRixDQUFDLENBQUE7R0FDSDtBQUNELFdBQVMsRUFBQSxtQkFBQyxFQUFNLEVBQWM7OztBQUM1QixRQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ3pCLFNBQUssSUFBTSxLQUFLLElBQUksR0FBRyxFQUFFO0FBQ3ZCLFVBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQzNCO0FBQ0QsV0FBTyxxQkFBZSxZQUFNO0FBQzFCLFdBQUssSUFBTSxLQUFLLElBQUksR0FBRyxFQUFFO0FBQ3ZCLGVBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUM5QjtLQUNGLENBQUMsQ0FBQTtHQUNIO0FBQ0QsY0FBWSxFQUFBLHdCQUFXOzs7QUFDckIsV0FBTyxVQUFBLEtBQUs7YUFDVixPQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztLQUFBLENBQUE7R0FDOUM7QUFDRCxZQUFVLEVBQUEsc0JBQUc7QUFDWCxRQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO0FBQ3ZCLFFBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7R0FDdkI7Q0FDRiIsImZpbGUiOiIvVXNlcnMvYmVuYmFybmV0dC8uYXRvbS9wYWNrYWdlcy9saW50ZXIvbGliL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi9cblxuaW1wb3J0IHsgRGlzcG9zYWJsZSB9IGZyb20gJ2F0b20nXG5pbXBvcnQgTGludGVyIGZyb20gJy4vbWFpbidcbmltcG9ydCBHcmVldGVyIGZyb20gJy4vZ3JlZXRlcidcbmltcG9ydCB0eXBlIHsgVUksIExpbnRlciBhcyBMaW50ZXJQcm92aWRlciB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ3JlZXRlcjogbnVsbCxcbiAgaW5zdGFuY2U6IG51bGwsXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmICghYXRvbS5pblNwZWNNb2RlKCkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnbG9iYWwtcmVxdWlyZVxuICAgICAgcmVxdWlyZSgnYXRvbS1wYWNrYWdlLWRlcHMnKS5pbnN0YWxsKCdsaW50ZXInLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLmdyZWV0ZXIgPSBuZXcgR3JlZXRlcigpXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBMaW50ZXIoKVxuXG4gICAgdGhpcy5ncmVldGVyLmFjdGl2YXRlKCkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKCdbTGludGVyLVVJLURlZmF1bHRdIEVycm9yJywgZSkpXG4gIH0sXG4gIGNvbnN1bWVMaW50ZXIobGludGVyOiBMaW50ZXIpOiBEaXNwb3NhYmxlIHtcbiAgICBjb25zdCBsaW50ZXJzID0gW10uY29uY2F0KGxpbnRlcilcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGxpbnRlcnMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuYWRkTGludGVyKGVudHJ5KVxuICAgIH1cbiAgICByZXR1cm4gbmV3IERpc3Bvc2FibGUoKCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBsaW50ZXJzKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsZXRlTGludGVyKGVudHJ5KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGNvbnN1bWVMaW50ZXJMZWdhY3kobGludGVyOiBMaW50ZXJQcm92aWRlcik6IERpc3Bvc2FibGUge1xuICAgIGNvbnN0IGxpbnRlcnMgPSBbXS5jb25jYXQobGludGVyKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgbGludGVycykge1xuICAgICAgbGludGVyLm5hbWUgPSBsaW50ZXIubmFtZSB8fCAnVW5rbm93bidcbiAgICAgIGxpbnRlci5saW50T25GbHkgPSBCb29sZWFuKGxpbnRlci5saW50T25GbHkpXG4gICAgICB0aGlzLmluc3RhbmNlLmFkZExpbnRlcihlbnRyeSwgdHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEaXNwb3NhYmxlKCgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgbGludGVycykge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbGV0ZUxpbnRlcihlbnRyeSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBjb25zdW1lVUkodWk6IFVJKTogRGlzcG9zYWJsZSB7XG4gICAgY29uc3QgdWlzID0gW10uY29uY2F0KHVpKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdWlzKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmFkZFVJKGVudHJ5KVxuICAgIH1cbiAgICByZXR1cm4gbmV3IERpc3Bvc2FibGUoKCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB1aXMpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWxldGVVSShlbnRyeSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBwcm92aWRlSW5kaWUoKTogT2JqZWN0IHtcbiAgICByZXR1cm4gaW5kaWUgPT5cbiAgICAgIHRoaXMuaW5zdGFuY2UucmVnaXN0cnlJbmRpZS5yZWdpc3RlcihpbmRpZSlcbiAgfSxcbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmRpc3Bvc2UoKVxuICAgIHRoaXMuZ3JlZXRlci5kaXNwb3NlKClcbiAgfSxcbn1cbiJdfQ==