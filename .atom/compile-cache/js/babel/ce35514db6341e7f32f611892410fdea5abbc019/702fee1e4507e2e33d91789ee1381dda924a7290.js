function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** @babel */
/* eslint-env jasmine, atomtest */

/*
  This file contains verifying specs for:
  https://github.com/sindresorhus/atom-editorconfig/issues/148

  If the max_line_length is redisabled additional instances of the
  base-wrap-guide are added
*/

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var testPrefix = _path2['default'].basename(__filename).split('-').shift();
var projectRoot = _path2['default'].join(__dirname, 'fixtures', testPrefix);
var filePath = _path2['default'].join(projectRoot, 'test.' + testPrefix);

describe('editorconfig', function () {
	var textEditor = undefined;
	var editorDom = undefined;

	beforeEach(function () {
		waitsForPromise(function () {
			return Promise.all([atom.packages.activatePackage('editorconfig'), atom.packages.activatePackage('wrap-guide'), atom.workspace.open(filePath)]).then(function (results) {
				textEditor = results.pop();
				editorDom = atom.views.getView(textEditor);
			});
		});
	});

	afterEach(function () {
		// remove the created fixture, if it exists
		runs(function () {
			_fs2['default'].stat(filePath, function (err, stats) {
				if (!err && stats.isFile()) {
					_fs2['default'].unlink(filePath);
				}
			});
		});

		waitsFor(function () {
			try {
				return _fs2['default'].statSync(filePath).isFile() === false;
			} catch (err) {
				return true;
			}
		}, 5000, 'removed ' + filePath);
	});

	describe('EditorConfig', function () {
		it('should assure no additional wrapGuides are created', function () {
			var ecfg = textEditor.getBuffer().editorconfig;
			var wgCount = function wgCount() {
				return editorDom.querySelectorAll('* /deep/ .wrap-guide').length;
			};

			expect(wgCount()).toBe(1);
			// eslint-disable-next-line camelcase
			ecfg.settings.max_line_length = 30;
			ecfg.applySettings();
			expect(wgCount()).toBe(1);
			// eslint-disable-next-line camelcase
			ecfg.settings.max_line_length = 'auto';
			ecfg.applySettings();
			expect(wgCount()).toBe(1);
			// eslint-disable-next-line camelcase
			ecfg.settings.max_line_length = 30;
			ecfg.applySettings();
			expect(wgCount()).toBe(1);
			// eslint-disable-next-line camelcase
			ecfg.settings.max_line_length = 'auto';
			ecfg.applySettings();
			expect(wgCount()).toBe(1);
		});
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9zcGVjL2lzczE0OC1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7a0JBV2UsSUFBSTs7OztvQkFDRixNQUFNOzs7O0FBRXZCLElBQU0sVUFBVSxHQUFHLGtCQUFLLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEUsSUFBTSxXQUFXLEdBQUcsa0JBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakUsSUFBTSxRQUFRLEdBQUcsa0JBQUssSUFBSSxDQUFDLFdBQVcsWUFBVSxVQUFVLENBQUcsQ0FBQzs7QUFFOUQsUUFBUSxDQUFDLGNBQWMsRUFBRSxZQUFNO0FBQzlCLEtBQUksVUFBVSxZQUFBLENBQUM7QUFDZixLQUFJLFNBQVMsWUFBQSxDQUFDOztBQUVkLFdBQVUsQ0FBQyxZQUFNO0FBQ2hCLGlCQUFlLENBQUM7VUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxFQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNsQixjQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNCLGFBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0dBQUEsQ0FDRixDQUFDO0VBQ0YsQ0FBQyxDQUFDOztBQUVILFVBQVMsQ0FBQyxZQUFNOztBQUVmLE1BQUksQ0FBQyxZQUFNO0FBQ1YsbUJBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDakMsUUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7QUFDM0IscUJBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsQ0FBQyxDQUFDO0dBQ0gsQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxZQUFNO0FBQ2QsT0FBSTtBQUNILFdBQU8sZ0JBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEtBQUssQ0FBQztJQUNoRCxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ2IsV0FBTyxJQUFJLENBQUM7SUFDWjtHQUNELEVBQUUsSUFBSSxlQUFhLFFBQVEsQ0FBRyxDQUFDO0VBQ2hDLENBQUMsQ0FBQzs7QUFFSCxTQUFRLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDOUIsSUFBRSxDQUFDLG9EQUFvRCxFQUFFLFlBQU07QUFDOUQsT0FBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztBQUNqRCxPQUFNLE9BQU8sR0FBRyxTQUFWLE9BQU8sR0FBUztBQUNyQixXQUFPLFNBQVMsQ0FDWixnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUN4QyxNQUFNLENBQUM7SUFDWCxDQUFDOztBQUVGLFNBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsT0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ25DLE9BQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQixTQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLE9BQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztBQUN2QyxPQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDckIsU0FBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUUxQixPQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDbkMsT0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3JCLFNBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsT0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO0FBQ3ZDLE9BQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQixTQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDMUIsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9zcGVjL2lzczE0OC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBiYWJlbCAqL1xuLyogZXNsaW50LWVudiBqYXNtaW5lLCBhdG9tdGVzdCAqL1xuXG4vKlxuICBUaGlzIGZpbGUgY29udGFpbnMgdmVyaWZ5aW5nIHNwZWNzIGZvcjpcbiAgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9hdG9tLWVkaXRvcmNvbmZpZy9pc3N1ZXMvMTQ4XG5cbiAgSWYgdGhlIG1heF9saW5lX2xlbmd0aCBpcyByZWRpc2FibGVkIGFkZGl0aW9uYWwgaW5zdGFuY2VzIG9mIHRoZVxuICBiYXNlLXdyYXAtZ3VpZGUgYXJlIGFkZGVkXG4qL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHRlc3RQcmVmaXggPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpLnNwbGl0KCctJykuc2hpZnQoKTtcbmNvbnN0IHByb2plY3RSb290ID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2ZpeHR1cmVzJywgdGVzdFByZWZpeCk7XG5jb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9qZWN0Um9vdCwgYHRlc3QuJHt0ZXN0UHJlZml4fWApO1xuXG5kZXNjcmliZSgnZWRpdG9yY29uZmlnJywgKCkgPT4ge1xuXHRsZXQgdGV4dEVkaXRvcjtcblx0bGV0IGVkaXRvckRvbTtcblxuXHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHR3YWl0c0ZvclByb21pc2UoKCkgPT5cblx0XHRcdFByb21pc2UuYWxsKFtcblx0XHRcdFx0YXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2VkaXRvcmNvbmZpZycpLFxuXHRcdFx0XHRhdG9tLnBhY2thZ2VzLmFjdGl2YXRlUGFja2FnZSgnd3JhcC1ndWlkZScpLFxuXHRcdFx0XHRhdG9tLndvcmtzcGFjZS5vcGVuKGZpbGVQYXRoKVxuXHRcdFx0XSkudGhlbihyZXN1bHRzID0+IHtcblx0XHRcdFx0dGV4dEVkaXRvciA9IHJlc3VsdHMucG9wKCk7XG5cdFx0XHRcdGVkaXRvckRvbSA9IGF0b20udmlld3MuZ2V0Vmlldyh0ZXh0RWRpdG9yKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fSk7XG5cblx0YWZ0ZXJFYWNoKCgpID0+IHtcblx0XHQvLyByZW1vdmUgdGhlIGNyZWF0ZWQgZml4dHVyZSwgaWYgaXQgZXhpc3RzXG5cdFx0cnVucygoKSA9PiB7XG5cdFx0XHRmcy5zdGF0KGZpbGVQYXRoLCAoZXJyLCBzdGF0cykgPT4ge1xuXHRcdFx0XHRpZiAoIWVyciAmJiBzdGF0cy5pc0ZpbGUoKSkge1xuXHRcdFx0XHRcdGZzLnVubGluayhmaWxlUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0d2FpdHNGb3IoKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIGZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0ZpbGUoKSA9PT0gZmFsc2U7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSwgNTAwMCwgYHJlbW92ZWQgJHtmaWxlUGF0aH1gKTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ0VkaXRvckNvbmZpZycsICgpID0+IHtcblx0XHRpdCgnc2hvdWxkIGFzc3VyZSBubyBhZGRpdGlvbmFsIHdyYXBHdWlkZXMgYXJlIGNyZWF0ZWQnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBlY2ZnID0gdGV4dEVkaXRvci5nZXRCdWZmZXIoKS5lZGl0b3Jjb25maWc7XG5cdFx0XHRjb25zdCB3Z0NvdW50ID0gKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWRpdG9yRG9tXG5cdFx0XHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yQWxsKCcqIC9kZWVwLyAud3JhcC1ndWlkZScpXG5cdFx0XHRcdFx0XHRcdC5sZW5ndGg7XG5cdFx0XHR9O1xuXG5cdFx0XHRleHBlY3Qod2dDb3VudCgpKS50b0JlKDEpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0ZWNmZy5zZXR0aW5ncy5tYXhfbGluZV9sZW5ndGggPSAzMDtcblx0XHRcdGVjZmcuYXBwbHlTZXR0aW5ncygpO1xuXHRcdFx0ZXhwZWN0KHdnQ291bnQoKSkudG9CZSgxKTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2Vcblx0XHRcdGVjZmcuc2V0dGluZ3MubWF4X2xpbmVfbGVuZ3RoID0gJ2F1dG8nO1xuXHRcdFx0ZWNmZy5hcHBseVNldHRpbmdzKCk7XG5cdFx0XHRleHBlY3Qod2dDb3VudCgpKS50b0JlKDEpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0ZWNmZy5zZXR0aW5ncy5tYXhfbGluZV9sZW5ndGggPSAzMDtcblx0XHRcdGVjZmcuYXBwbHlTZXR0aW5ncygpO1xuXHRcdFx0ZXhwZWN0KHdnQ291bnQoKSkudG9CZSgxKTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2Vcblx0XHRcdGVjZmcuc2V0dGluZ3MubWF4X2xpbmVfbGVuZ3RoID0gJ2F1dG8nO1xuXHRcdFx0ZWNmZy5hcHBseVNldHRpbmdzKCk7XG5cdFx0XHRleHBlY3Qod2dDb3VudCgpKS50b0JlKDEpO1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIl19