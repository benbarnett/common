(function() {
  var $, PromptView, TextEditorView, View, method, noop, ref,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ref = require('atom-space-pen-views'), $ = ref.$, TextEditorView = ref.TextEditorView, View = ref.View;

  noop = function() {};

  method = function(delegate, method) {
    var ref1;
    return (delegate != null ? (ref1 = delegate[method]) != null ? ref1.bind(delegate) : void 0 : void 0) || noop;
  };

  module.exports = PromptView = (function(superClass) {
    extend(PromptView, superClass);

    function PromptView() {
      return PromptView.__super__.constructor.apply(this, arguments);
    }

    PromptView.attach = function() {
      return new PromptView;
    };

    PromptView.content = function() {
      return this.div({
        "class": 'emmet-prompt tool-panel panel-bottom'
      }, (function(_this) {
        return function() {
          return _this.div({
            "class": 'emmet-prompt__input'
          }, function() {
            return _this.subview('panelInput', new TextEditorView({
              mini: true
            }));
          });
        };
      })(this));
    };

    PromptView.prototype.initialize = function() {
      this.panelEditor = this.panelInput.getModel();
      this.panelEditor.onDidStopChanging((function(_this) {
        return function() {
          if (!_this.attached) {
            return;
          }
          return _this.handleUpdate(_this.panelEditor.getText());
        };
      })(this));
      atom.commands.add(this.panelInput.element, 'core:confirm', (function(_this) {
        return function() {
          return _this.confirm();
        };
      })(this));
      return atom.commands.add(this.panelInput.element, 'core:cancel', (function(_this) {
        return function() {
          return _this.cancel();
        };
      })(this));
    };

    PromptView.prototype.show = function(delegate1) {
      var text;
      this.delegate = delegate1 != null ? delegate1 : {};
      this.editor = this.delegate.editor;
      this.editorView = this.delegate.editorView;
      this.panelInput.element.setAttribute('placeholder', this.delegate.label || 'Enter abbreviation');
      this.updated = false;
      this.attach();
      text = this.panelEditor.getText();
      if (text) {
        this.panelEditor.selectAll();
        return this.handleUpdate(text);
      }
    };

    PromptView.prototype.undo = function() {
      if (this.updated) {
        return this.editor.undo();
      }
    };

    PromptView.prototype.handleUpdate = function(text) {
      this.undo();
      this.updated = true;
      return this.editor.transact((function(_this) {
        return function() {
          return method(_this.delegate, 'update')(text);
        };
      })(this));
    };

    PromptView.prototype.confirm = function() {
      this.handleUpdate(this.panelEditor.getText());
      this.trigger('confirm');
      method(this.delegate, 'confirm')();
      return this.detach();
    };

    PromptView.prototype.cancel = function() {
      this.undo();
      this.trigger('cancel');
      method(this.delegate, 'cancel')();
      return this.detach();
    };

    PromptView.prototype.detach = function() {
      var ref1;
      if (!this.hasParent()) {
        return;
      }
      this.detaching = true;
      if ((ref1 = this.prevPane) != null) {
        ref1.activate();
      }
      PromptView.__super__.detach.apply(this, arguments);
      this.detaching = false;
      this.attached = false;
      this.trigger('detach');
      return method(this.delegate, 'hide')();
    };

    PromptView.prototype.attach = function() {
      this.attached = true;
      this.prevPane = atom.workspace.getActivePane();
      atom.workspace.addBottomPanel({
        item: this,
        visible: true
      });
      this.panelInput.focus();
      this.trigger('attach');
      return method(this.delegate, 'show')();
    };

    return PromptView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2JlbmJhcm5ldHQvLmF0b20vcGFja2FnZXMvZW1tZXQvbGliL3Byb21wdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLHNEQUFBO0lBQUE7OztFQUFBLE1BQTRCLE9BQUEsQ0FBUSxzQkFBUixDQUE1QixFQUFDLFNBQUQsRUFBSSxtQ0FBSixFQUFvQjs7RUFDcEIsSUFBQSxHQUFPLFNBQUEsR0FBQTs7RUFFUCxNQUFBLEdBQVMsU0FBQyxRQUFELEVBQVcsTUFBWDtBQUNSLFFBQUE7dUVBQWlCLENBQUUsSUFBbkIsQ0FBd0IsUUFBeEIsb0JBQUEsSUFBcUM7RUFEN0I7O0VBR1QsTUFBTSxDQUFDLE9BQVAsR0FDTTs7Ozs7OztJQUNMLFVBQUMsQ0FBQSxNQUFELEdBQVMsU0FBQTthQUFHLElBQUk7SUFBUDs7SUFFVCxVQUFDLENBQUEsT0FBRCxHQUFVLFNBQUE7YUFDVCxJQUFDLENBQUEsR0FBRCxDQUFLO1FBQUEsQ0FBQSxLQUFBLENBQUEsRUFBTyxzQ0FBUDtPQUFMLEVBQW9ELENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtpQkFFbkQsS0FBQyxDQUFBLEdBQUQsQ0FBSztZQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8scUJBQVA7V0FBTCxFQUFtQyxTQUFBO21CQUNsQyxLQUFDLENBQUEsT0FBRCxDQUFTLFlBQVQsRUFBMkIsSUFBQSxjQUFBLENBQWU7Y0FBQSxJQUFBLEVBQU0sSUFBTjthQUFmLENBQTNCO1VBRGtDLENBQW5DO1FBRm1EO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwRDtJQURTOzt5QkFNVixVQUFBLEdBQVksU0FBQTtNQUNYLElBQUMsQ0FBQSxXQUFELEdBQWUsSUFBQyxDQUFBLFVBQVUsQ0FBQyxRQUFaLENBQUE7TUFDZixJQUFDLENBQUEsV0FBVyxDQUFDLGlCQUFiLENBQStCLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtVQUM5QixJ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WixJQUFDLENBQUEsT0FBRCxDQUFTLFFBQVQ7YUFDQSxNQUFBLENBQU8sSUFBQyxDQUFBLFFBQVIsRUFBa0IsTUFBbEIsQ0FBQSxDQUFBO0lBVk87O3lCQVlSLE1BQUEsR0FBUSxTQUFBO01BQ1AsSUFBQyxDQUFBLFFBQUQsR0FBWTtNQUNaLElBQUMsQ0FBQSxRQUFELEdBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFmLENBQUE7TUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWYsQ0FBOEI7UUFBQSxJQUFBLEVBQU0sSUFBTjtRQUFZLE9BQUEsRUFBUyxJQUFyQjtPQUE5QjtNQUNBLElBQUMsQ0FBQSxVQUFVLENBQUMsS0FBWixDQUFBO01BQ0EsSUFBQyxDQUFBLE9BQUQsQ0FBUyxRQUFUO2FBQ0EsTUFBQSxDQUFPLElBQUMsQ0FBQSxRQUFSLEVBQWtCLE1BQWxCLENBQUEsQ0FBQTtJQU5POzs7O0tBL0RnQjtBQVB6QiIsInNvdXJjZXNDb250ZW50IjpbInskLCBUZXh0RWRpdG9yVmlldywgVmlld30gPSByZXF1aXJlICdhdG9tLXNwYWNlLXBlbi12aWV3cydcbm5vb3AgPSAtPlxuXG5tZXRob2QgPSAoZGVsZWdhdGUsIG1ldGhvZCkgLT5cblx0ZGVsZWdhdGU/W21ldGhvZF0/LmJpbmQoZGVsZWdhdGUpIG9yIG5vb3BcblxubW9kdWxlLmV4cG9ydHMgPVxuY2xhc3MgUHJvbXB0VmlldyBleHRlbmRzIFZpZXdcblx0QGF0dGFjaDogLT4gbmV3IFByb21wdFZpZXdcblxuXHRAY29udGVudDogLT5cblx0XHRAZGl2IGNsYXNzOiAnZW1tZXQtcHJvbXB0IHRvb2wtcGFuZWwgcGFuZWwtYm90dG9tJywgPT5cblx0XHRcdCMgQGxhYmVsIGNsYXNzOiAnZW1tZXQtcHJvbXB0X19sYWJlbCcsIG91dGxldDogJ2xhYmVsJ1xuXHRcdFx0QGRpdiBjbGFzczogJ2VtbWV0LXByb21wdF9faW5wdXQnLCA9PlxuXHRcdFx0XHRAc3VidmlldyAncGFuZWxJbnB1dCcsIG5ldyBUZXh0RWRpdG9yVmlldyhtaW5pOiB0cnVlKVxuXG5cdGluaXRpYWxpemU6ICgpIC0+XG5cdFx0QHBhbmVsRWRpdG9yID0gQHBhbmVsSW5wdXQuZ2V0TW9kZWwoKVxuXHRcdEBwYW5lbEVkaXRvci5vbkRpZFN0b3BDaGFuZ2luZyA9PlxuXHRcdFx0cmV0dXJuIHVubGVzcyBAYXR0YWNoZWRcblx0XHRcdEBoYW5kbGVVcGRhdGUgQHBhbmVsRWRpdG9yLmdldFRleHQoKVxuXHRcdGF0b20uY29tbWFuZHMuYWRkIEBwYW5lbElucHV0LmVsZW1lbnQsICdjb3JlOmNvbmZpcm0nLCA9PiBAY29uZmlybSgpXG5cdFx0YXRvbS5jb21tYW5kcy5hZGQgQHBhbmVsSW5wdXQuZWxlbWVudCwgJ2NvcmU6Y2FuY2VsJywgPT4gQGNhbmNlbCgpXG5cblx0c2hvdzogKEBkZWxlZ2F0ZT17fSkgLT5cblx0XHRAZWRpdG9yID0gQGRlbGVnYXRlLmVkaXRvclxuXHRcdEBlZGl0b3JWaWV3ID0gQGRlbGVnYXRlLmVkaXRvclZpZXdcblx0XHQjIEBwYW5lbElucHV0LnNldFBsYWNlaG9sZGVyVGV4dCBAZGVsZWdhdGUubGFiZWwgb3IgJ0VudGVyIGFiYnJldmlhdGlvbidcblx0XHRAcGFuZWxJbnB1dC5lbGVtZW50LnNldEF0dHJpYnV0ZSAncGxhY2Vob2xkZXInLCBAZGVsZWdhdGUubGFiZWwgb3IgJ0VudGVyIGFiYnJldmlhdGlvbidcblx0XHRAdXBkYXRlZCA9IG5vXG5cblx0XHRAYXR0YWNoKClcblx0XHR0ZXh0ID0gQHBhbmVsRWRpdG9yLmdldFRleHQoKVxuXHRcdGlmIHRleHRcblx0XHRcdEBwYW5lbEVkaXRvci5zZWxlY3RBbGwoKVxuXHRcdFx0QGhhbmRsZVVwZGF0ZSB0ZXh0XG5cblx0dW5kbzogLT5cblx0XHRAZWRpdG9yLnVuZG8oKSBpZiBAdXBkYXRlZFxuXG5cdGhhbmRsZVVwZGF0ZTogKHRleHQpIC0+XG5cdFx0QHVuZG8oKVxuXHRcdEB1cGRhdGVkID0geWVzXG5cdFx0QGVkaXRvci50cmFuc2FjdCA9PlxuXHRcdFx0bWV0aG9kKEBkZWxlZ2F0ZSwgJ3VwZGF0ZScpKHRleHQpXG5cblx0Y29uZmlybTogLT5cblx0XHRAaGFuZGxlVXBkYXRlIEBwYW5lbEVkaXRvci5nZXRUZXh0KClcblx0XHRAdHJpZ2dlciAnY29uZmlybSdcblx0XHRtZXRob2QoQGRlbGVnYXRlLCAnY29uZmlybScpKClcblx0XHRAZGV0YWNoKClcblxuXHRjYW5jZWw6IC0+XG5cdFx0QHVuZG8oKVxuXHRcdEB0cmlnZ2VyICdjYW5jZWwnXG5cdFx0bWV0aG9kKEBkZWxlZ2F0ZSwgJ2NhbmNlbCcpKClcblx0XHRAZGV0YWNoKClcblxuXHRkZXRhY2g6IC0+XG5cdFx0cmV0dXJuIHVubGVzcyBAaGFzUGFyZW50KClcblx0XHRAZGV0YWNoaW5nID0gdHJ1ZVxuXHRcdEBwcmV2UGFuZT8uYWN0aXZhdGUoKVxuXG5cdFx0c3VwZXJcblx0XHRAZGV0YWNoaW5nID0gZmFsc2Vcblx0XHRAYXR0YWNoZWQgPSBmYWxzZVxuXG5cdFx0QHRyaWdnZXIgJ2RldGFjaCdcblx0XHRtZXRob2QoQGRlbGVnYXRlLCAnaGlkZScpKClcblxuXHRhdHRhY2g6IC0+XG5cdFx0QGF0dGFjaGVkID0gdHJ1ZVxuXHRcdEBwcmV2UGFuZSA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVBhbmUoKVxuXHRcdGF0b20ud29ya3NwYWNlLmFkZEJvdHRvbVBhbmVsKGl0ZW06IHRoaXMsIHZpc2libGU6IHRydWUpXG5cdFx0QHBhbmVsSW5wdXQuZm9jdXMoKVxuXHRcdEB0cmlnZ2VyICdhdHRhY2gnXG5cdFx0bWV0aG9kKEBkZWxlZ2F0ZSwgJ3Nob3cnKSgpXG4iXX0=
