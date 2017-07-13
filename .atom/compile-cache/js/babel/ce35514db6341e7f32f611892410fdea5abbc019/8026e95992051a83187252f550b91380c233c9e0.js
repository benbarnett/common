Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _atom = require('atom');

var _helpers = require('./helpers');

var _validate = require('./validate');

var IndieDelegate = (function () {
  function IndieDelegate(indie) {
    _classCallCheck(this, IndieDelegate);

    this.indie = indie;
    this.scope = 'project';
    this.emitter = new _atom.Emitter();
    this.messages = new Map();
    this.subscriptions = new _atom.CompositeDisposable();

    this.subscriptions.add(this.emitter);
  }

  _createClass(IndieDelegate, [{
    key: 'getMessages',
    value: function getMessages() {
      return Array.from(this.messages.values()).reduce(function (toReturn, entry) {
        return toReturn.concat(entry);
      }, []);
    }
  }, {
    key: 'clearMessages',
    value: function clearMessages() {
      if (!this.subscriptions.disposed) {
        this.emitter.emit('did-update', []);
        this.messages.clear();
      }
    }
  }, {
    key: 'setMessages',
    value: function setMessages(filePath, messages) {
      if (this.subscriptions.disposed || !IndieDelegate.normalizeMessages(this.name, messages)) {
        return;
      }

      for (var i = 0, _length = messages.length; i < _length; ++i) {
        if (messages[i].location.file !== filePath) {
          throw new Error('messages[' + i + '].location.file does not match the given filePath');
        }
      }

      (0, _helpers.normalizeMessages)(this.name, messages);
      this.messages.set(filePath, messages);
      this.emitter.emit('did-update', messages);
    }
  }, {
    key: 'setAllMessages',
    value: function setAllMessages(messages) {
      if (this.subscriptions.disposed || !IndieDelegate.normalizeMessages(this.name, messages)) {
        return;
      }
      this.messages.clear();
      for (var i = 0, _length2 = messages.length; i < _length2; ++i) {
        var message = messages[i];
        var filePath = message.location.file;
        var fileMessages = this.messages.get(filePath);
        if (!fileMessages) {
          this.messages.set(filePath, fileMessages = []);
        }
        fileMessages.push(message);
      }
      this.emitter.emit('did-update', messages);
    }
  }, {
    key: 'onDidUpdate',
    value: function onDidUpdate(callback) {
      return this.emitter.on('did-update', callback);
    }
  }, {
    key: 'onDidDestroy',
    value: function onDidDestroy(callback) {
      return this.emitter.on('did-destroy', callback);
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      this.emitter.emit('did-destroy');
      this.subscriptions.dispose();
      this.messages.clear();
    }
  }, {
    key: 'name',
    get: function get() {
      return this.indie.name;
    }
  }], [{
    key: 'normalizeMessages',
    value: function normalizeMessages(name, messages) {
      var validity = true;
      if (atom.inDevMode()) {
        validity = (0, _validate.messages)(this.name, messages);
      }
      if (validity) {
        (0, _helpers.normalizeMessages)(this.name, messages);
      }
      return validity;
    }
  }]);

  return IndieDelegate;
})();

exports['default'] = IndieDelegate;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2xpbnRlci9saWIvaW5kaWUtZGVsZWdhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0JBRTZDLE1BQU07O3VCQUdqQixXQUFXOzt3QkFDQSxZQUFZOztJQUdwQyxhQUFhO0FBT3JCLFdBUFEsYUFBYSxDQU9wQixLQUFZLEVBQUU7MEJBUFAsYUFBYTs7QUFROUIsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7QUFDbEIsUUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7QUFDdEIsUUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBYSxDQUFBO0FBQzVCLFFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUN6QixRQUFJLENBQUMsYUFBYSxHQUFHLCtCQUF5QixDQUFBOztBQUU5QyxRQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7R0FDckM7O2VBZmtCLGFBQWE7O1dBbUJyQix1QkFBbUI7QUFDNUIsYUFBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBUyxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQ3pFLGVBQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUM5QixFQUFFLEVBQUUsQ0FBQyxDQUFBO0tBQ1A7OztXQUNZLHlCQUFTO0FBQ3BCLFVBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtBQUNoQyxZQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDbkMsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtPQUN0QjtLQUNGOzs7V0FDVSxxQkFBQyxRQUFnQixFQUFFLFFBQXdCLEVBQVE7QUFDNUQsVUFB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Q0FBQyxDQUFBO09BQ3ZDO0FBQ0QsYUFBTyxRQUFRLENBQUE7S0FDaEI7OztTQWpGa0IsYUFBYTs7O3FCQUFiLGFBQWEiLCJmaWxlIjoiL1VzZXJzL2JlbmJhcm5ldHQvLmF0b20vcGFja2FnZXMvbGludGVyL2xpYi9pbmRpZS1kZWxlZ2F0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXG5cbmltcG9ydCB7IEVtaXR0ZXIsIENvbXBvc2l0ZURpc3Bvc2FibGUgfSBmcm9tICdhdG9tJ1xuaW1wb3J0IHR5cGUgeyBEaXNwb3NhYmxlIH0gZnJvbSAnYXRvbSdcblxuaW1wb3J0IHsgbm9ybWFsaXplTWVzc2FnZXMgfSBmcm9tICcuL2hlbHBlcnMnXG5pbXBvcnQgeyBtZXNzYWdlcyBhcyB2YWxpZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi92YWxpZGF0ZSdcbmltcG9ydCB0eXBlIHsgTWVzc2FnZSwgSW5kaWUgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpZURlbGVnYXRlIHtcbiAgaW5kaWU6IEluZGllO1xuICBzY29wZTogJ3Byb2plY3QnO1xuICBlbWl0dGVyOiBFbWl0dGVyO1xuICBtZXNzYWdlczogTWFwPHN0cmluZywgQXJyYXk8TWVzc2FnZT4+O1xuICBzdWJzY3JpcHRpb25zOiBDb21wb3NpdGVEaXNwb3NhYmxlO1xuXG4gIGNvbnN0cnVjdG9yKGluZGllOiBJbmRpZSkge1xuICAgIHRoaXMuaW5kaWUgPSBpbmRpZVxuICAgIHRoaXMuc2NvcGUgPSAncHJvamVjdCdcbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpXG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKClcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5lbWl0dGVyKVxuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5kaWUubmFtZVxuICB9XG4gIGdldE1lc3NhZ2VzKCk6IEFycmF5PE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm1lc3NhZ2VzLnZhbHVlcygpKS5yZWR1Y2UoZnVuY3Rpb24odG9SZXR1cm4sIGVudHJ5KSB7XG4gICAgICByZXR1cm4gdG9SZXR1cm4uY29uY2F0KGVudHJ5KVxuICAgIH0sIFtdKVxuICB9XG4gIGNsZWFyTWVzc2FnZXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvbnMuZGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdkaWQtdXBkYXRlJywgW10pXG4gICAgICB0aGlzLm1lc3NhZ2VzLmNsZWFyKClcbiAgICB9XG4gIH1cbiAgc2V0TWVzc2FnZXMoZmlsZVBhdGg6IHN0cmluZywgbWVzc2FnZXM6IEFycmF5PE1lc3NhZ2U+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9ucy5kaXNwb3NlZCB8fCAhSW5kaWVEZWxlZ2F0ZS5ub3JtYWxpemVNZXNzYWdlcyh0aGlzLm5hbWUsIG1lc3NhZ2VzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG1lc3NhZ2VzLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAobWVzc2FnZXNbaV0ubG9jYXRpb24uZmlsZSAhPT0gZmlsZVBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXNzYWdlc1ske2l9XS5sb2NhdGlvbi5maWxlIGRvZXMgbm90IG1hdGNoIHRoZSBnaXZlbiBmaWxlUGF0aGApXG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9ybWFsaXplTWVzc2FnZXModGhpcy5uYW1lLCBtZXNzYWdlcylcbiAgICB0aGlzLm1lc3NhZ2VzLnNldChmaWxlUGF0aCwgbWVzc2FnZXMpXG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2RpZC11cGRhdGUnLCBtZXNzYWdlcylcbiAgfVxuICBzZXRBbGxNZXNzYWdlcyhtZXNzYWdlczogQXJyYXk8TWVzc2FnZT4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zLmRpc3Bvc2VkIHx8ICFJbmRpZURlbGVnYXRlLm5vcm1hbGl6ZU1lc3NhZ2VzKHRoaXMubmFtZSwgbWVzc2FnZXMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5tZXNzYWdlcy5jbGVhcigpXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG1lc3NhZ2VzLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbWVzc2FnZXNbaV1cbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gbWVzc2FnZS5sb2NhdGlvbi5maWxlXG4gICAgICBsZXQgZmlsZU1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcy5nZXQoZmlsZVBhdGgpXG4gICAgICBpZiAoIWZpbGVNZXNzYWdlcykge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNldChmaWxlUGF0aCwgZmlsZU1lc3NhZ2VzID0gW10pXG4gICAgICB9XG4gICAgICBmaWxlTWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgIH1cbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnZGlkLXVwZGF0ZScsIG1lc3NhZ2VzKVxuICB9XG4gIG9uRGlkVXBkYXRlKGNhbGxiYWNrOiBGdW5jdGlvbik6IERpc3Bvc2FibGUge1xuICAgIHJldHVybiB0aGlzLmVtaXR0ZXIub24oJ2RpZC11cGRhdGUnLCBjYWxsYmFjaylcbiAgfVxuICBvbkRpZERlc3Ryb3koY2FsbGJhY2s6IEZ1bmN0aW9uKTogRGlzcG9zYWJsZSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlci5vbignZGlkLWRlc3Ryb3knLCBjYWxsYmFjaylcbiAgfVxuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KCdkaWQtZGVzdHJveScpXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmRpc3Bvc2UoKVxuICAgIHRoaXMubWVzc2FnZXMuY2xlYXIoKVxuICB9XG4gIHN0YXRpYyBub3JtYWxpemVNZXNzYWdlcyhuYW1lOiBzdHJpbmcsIG1lc3NhZ2VzOiBBcnJheTxNZXNzYWdlPik6IGJvb2xlYW4ge1xuICAgIGxldCB2YWxpZGl0eSA9IHRydWVcbiAgICBpZiAoYXRvbS5pbkRldk1vZGUoKSkge1xuICAgICAgdmFsaWRpdHkgPSB2YWxpZGF0ZU1lc3NhZ2VzKHRoaXMubmFtZSwgbWVzc2FnZXMpXG4gICAgfVxuICAgIGlmICh2YWxpZGl0eSkge1xuICAgICAgbm9ybWFsaXplTWVzc2FnZXModGhpcy5uYW1lLCBtZXNzYWdlcylcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkaXR5XG4gIH1cbn1cbiJdfQ==