Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _atom = require('atom');

var _indieDelegate = require('./indie-delegate');

var _indieDelegate2 = _interopRequireDefault(_indieDelegate);

var _validate = require('./validate');

var IndieRegistry = (function () {
  function IndieRegistry() {
    _classCallCheck(this, IndieRegistry);

    this.emitter = new _atom.Emitter();
    this.delegates = new Set();
    this.subscriptions = new _atom.CompositeDisposable();

    this.subscriptions.add(this.emitter);
  }

  _createClass(IndieRegistry, [{
    key: 'register',
    value: function register(config) {
      var _this = this;

      if (!(0, _validate.indie)(config)) {
        throw new Error('Error registering Indie Linter');
      }
      var indieLinter = new _indieDelegate2['default'](config);
      this.delegates.add(indieLinter);
      indieLinter.onDidDestroy(function () {
        _this.delegates['delete'](indieLinter);
      });
      indieLinter.onDidUpdate(function (messages) {
        _this.emitter.emit('did-update', { linter: indieLinter, messages: messages });
      });
      this.emitter.emit('observe', indieLinter);

      return indieLinter;
    }
  }, {
    key: 'observe',
    value: function observe(callback) {
      this.delegates.forEach(callback);
      return this.emitter.on('observe', callback);
    }
  }, {
    key: 'onDidUpdate',
    value: function onDidUpdate(callback) {
      return this.emitter.on('did-update', callback);
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      for (var entry of this.delegates) {
        entry.dispose();
      }
      this.subscriptions.dispose();
    }
  }]);

  return IndieRegistry;
})();

exports['default'] = IndieRegistry;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci9saWIvaW5kaWUtcmVnaXN0cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztvQkFFNkMsTUFBTTs7NkJBR3pCLGtCQUFrQjs7Ozt3QkFDTCxZQUFZOztJQUc5QixhQUFhO0FBS3JCLFdBTFEsYUFBYSxHQUtsQjswQkFMSyxhQUFhOztBQU05QixRQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFhLENBQUE7QUFDNUIsUUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQzFCLFFBQUksQ0FBQyxhQUFhLEdBQUcsK0JBQXlCLENBQUE7O0FBRTlDLFFBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtHQUNyQzs7ZUFYa0IsYUFBYTs7V0FZeEIsa0JBQUMsTUFBYSxFQUFpQjs7O0FBQ3JDLFVBQUksQ0FBQyxxQkFBYyxNQUFNLENBQUMsRUFBRTtBQUMxQixjQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7T0FDbEQ7QUFDRCxVQUFNLFdBQVcsR0FBRywrQkFBa0IsTUFBTSxDQUFDLENBQUE7QUFDN0MsVUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDL0IsaUJBQVcsQ0FBQyxZQUFZLENBQUMsWUFBTTtBQUM3QixjQUFLLFNBQVMsVUFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO09BQ25DLENBQUMsQ0FBQTtBQUNGLGlCQUFXLENBQUMsV0FBVyxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQ3BDLGNBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBUixRQUFRLEVBQUUsQ0FBQyxDQUFBO09BQ25FLENBQUMsQ0FBQTtBQUNGLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQTs7QUFFekMsYUFBTyxXQUFXLENBQUE7S0FDbkI7OztXQUNNLGlCQUFDLFFBQWtCLEVBQWM7QUFDdEMsVUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDaEMsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUE7S0FDNUM7OztXQUNVLHFCQUFDLFFBQWtCLEVBQWM7QUFDMUMsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUE7S0FDL0M7OztXQUNNLG1CQUFHO0FBQ1IsV0FBSyxJQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2xDLGFBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQTtPQUNoQjtBQUNELFVBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUE7S0FDN0I7OztTQXhDa0IsYUFBYTs7O3FCQUFiLGFBQWEiLCJmaWxlIjoiL1VzZXJzL2JlbmJhcm5ldHQvLmF0b20vcGFja2FnZXMvbGludGVyL2xpYi9pbmRpZS1yZWdpc3RyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5cbmltcG9ydCB7IEVtaXR0ZXIsIENvbXBvc2l0ZURpc3Bvc2FibGUgfSBmcm9tICdhdG9tJ1xuaW1wb3J0IHR5cGUgeyBEaXNwb3NhYmxlIH0gZnJvbSAnYXRvbSdcblxuaW1wb3J0IEluZGllRGVsZWdhdGUgZnJvbSAnLi9pbmRpZS1kZWxlZ2F0ZSdcbmltcG9ydCB7IGluZGllIGFzIHZhbGlkYXRlSW5kaWUgfSBmcm9tICcuL3ZhbGlkYXRlJ1xuaW1wb3J0IHR5cGUgeyBJbmRpZSB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGllUmVnaXN0cnkge1xuICBlbWl0dGVyOiBFbWl0dGVyO1xuICBkZWxlZ2F0ZXM6IFNldDxJbmRpZURlbGVnYXRlPjtcbiAgc3Vic2NyaXB0aW9uczogQ29tcG9zaXRlRGlzcG9zYWJsZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpXG4gICAgdGhpcy5kZWxlZ2F0ZXMgPSBuZXcgU2V0KClcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpXG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHRoaXMuZW1pdHRlcilcbiAgfVxuICByZWdpc3Rlcihjb25maWc6IEluZGllKTogSW5kaWVEZWxlZ2F0ZSB7XG4gICAgaWYgKCF2YWxpZGF0ZUluZGllKGNvbmZpZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgcmVnaXN0ZXJpbmcgSW5kaWUgTGludGVyJylcbiAgICB9XG4gICAgY29uc3QgaW5kaWVMaW50ZXIgPSBuZXcgSW5kaWVEZWxlZ2F0ZShjb25maWcpXG4gICAgdGhpcy5kZWxlZ2F0ZXMuYWRkKGluZGllTGludGVyKVxuICAgIGluZGllTGludGVyLm9uRGlkRGVzdHJveSgoKSA9PiB7XG4gICAgICB0aGlzLmRlbGVnYXRlcy5kZWxldGUoaW5kaWVMaW50ZXIpXG4gICAgfSlcbiAgICBpbmRpZUxpbnRlci5vbkRpZFVwZGF0ZSgobWVzc2FnZXMpID0+IHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdkaWQtdXBkYXRlJywgeyBsaW50ZXI6IGluZGllTGludGVyLCBtZXNzYWdlcyB9KVxuICAgIH0pXG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoJ29ic2VydmUnLCBpbmRpZUxpbnRlcilcblxuICAgIHJldHVybiBpbmRpZUxpbnRlclxuICB9XG4gIG9ic2VydmUoY2FsbGJhY2s6IEZ1bmN0aW9uKTogRGlzcG9zYWJsZSB7XG4gICAgdGhpcy5kZWxlZ2F0ZXMuZm9yRWFjaChjYWxsYmFjaylcbiAgICByZXR1cm4gdGhpcy5lbWl0dGVyLm9uKCdvYnNlcnZlJywgY2FsbGJhY2spXG4gIH1cbiAgb25EaWRVcGRhdGUoY2FsbGJhY2s6IEZ1bmN0aW9uKTogRGlzcG9zYWJsZSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlci5vbignZGlkLXVwZGF0ZScsIGNhbGxiYWNrKVxuICB9XG4gIGRpc3Bvc2UoKSB7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmRlbGVnYXRlcykge1xuICAgICAgZW50cnkuZGlzcG9zZSgpXG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5kaXNwb3NlKClcbiAgfVxufVxuIl19