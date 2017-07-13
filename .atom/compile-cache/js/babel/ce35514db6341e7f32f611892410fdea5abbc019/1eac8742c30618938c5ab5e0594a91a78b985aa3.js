function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** @babel */
/* eslint-env jasmine, atomtest */

/*
  This file contains verifying specs for:
  https://github.com/sindresorhus/atom-editorconfig/issues/139

  If the max_line_length is set to 0 tha wrapGuide is set to 1.
*/

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var testPrefix = _path2['default'].basename(__filename).split('-').shift();
var projectRoot = _path2['default'].join(__dirname, 'fixtures', testPrefix);
var filePath = _path2['default'].join(projectRoot, 'test.' + testPrefix);

describe('editorconfig', function () {
	var textEditors = [];

	beforeEach(function () {
		waitsForPromise(function () {
			return Promise.all([atom.packages.activatePackage('editorconfig'), atom.workspace.open(filePath)]).then(function (results) {
				textEditors = results.splice(1);
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
		it('should default zero max_line_length to auto', function () {
			expect(textEditors[0].getBuffer().editorconfig.settings.max_line_length).toEqual('auto');
		});
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9zcGVjL2lzczEzOS1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFVZSxJQUFJOzs7O29CQUNGLE1BQU07Ozs7QUFFdkIsSUFBTSxVQUFVLEdBQUcsa0JBQUssUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoRSxJQUFNLFdBQVcsR0FBRyxrQkFBSyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNqRSxJQUFNLFFBQVEsR0FBRyxrQkFBSyxJQUFJLENBQUMsV0FBVyxZQUFVLFVBQVUsQ0FBRyxDQUFDOztBQUU5RCxRQUFRLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDOUIsS0FBSSxXQUFXLEdBQUcsRUFBRSxDQUFDOztBQUVyQixXQUFVLENBQUMsWUFBTTtBQUNoQixpQkFBZSxDQUFDO1VBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNsQixlQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0dBQUEsQ0FDRixDQUFDO0VBQ0YsQ0FBQyxDQUFDOztBQUVILFVBQVMsQ0FBQyxZQUFNOztBQUVmLE1BQUksQ0FBQyxZQUFNO0FBQ1YsbUJBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDakMsUUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7QUFDM0IscUJBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsQ0FBQyxDQUFDO0dBQ0gsQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxZQUFNO0FBQ2QsT0FBSTtBQUNILFdBQU8sZ0JBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEtBQUssQ0FBQztJQUNoRCxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ2IsV0FBTyxJQUFJLENBQUM7SUFDWjtHQUNELEVBQUUsSUFBSSxlQUFhLFFBQVEsQ0FBRyxDQUFDO0VBQ2hDLENBQUMsQ0FBQzs7QUFFSCxTQUFRLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDOUIsSUFBRSxDQUFDLDZDQUE2QyxFQUFFLFlBQU07QUFDdkQsU0FBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUN6RixDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7Q0FDSCxDQUFDLENBQUMiLCJmaWxlIjoiL1VzZXJzL2JlbmJhcm5ldHQvLmF0b20vcGFja2FnZXMvZWRpdG9yY29uZmlnL3NwZWMvaXNzMTM5LXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGJhYmVsICovXG4vKiBlc2xpbnQtZW52IGphc21pbmUsIGF0b210ZXN0ICovXG5cbi8qXG4gIFRoaXMgZmlsZSBjb250YWlucyB2ZXJpZnlpbmcgc3BlY3MgZm9yOlxuICBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2F0b20tZWRpdG9yY29uZmlnL2lzc3Vlcy8xMzlcblxuICBJZiB0aGUgbWF4X2xpbmVfbGVuZ3RoIGlzIHNldCB0byAwIHRoYSB3cmFwR3VpZGUgaXMgc2V0IHRvIDEuXG4qL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHRlc3RQcmVmaXggPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpLnNwbGl0KCctJykuc2hpZnQoKTtcbmNvbnN0IHByb2plY3RSb290ID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2ZpeHR1cmVzJywgdGVzdFByZWZpeCk7XG5jb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9qZWN0Um9vdCwgYHRlc3QuJHt0ZXN0UHJlZml4fWApO1xuXG5kZXNjcmliZSgnZWRpdG9yY29uZmlnJywgKCkgPT4ge1xuXHRsZXQgdGV4dEVkaXRvcnMgPSBbXTtcblxuXHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHR3YWl0c0ZvclByb21pc2UoKCkgPT5cblx0XHRcdFByb21pc2UuYWxsKFtcblx0XHRcdFx0YXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2VkaXRvcmNvbmZpZycpLFxuXHRcdFx0XHRhdG9tLndvcmtzcGFjZS5vcGVuKGZpbGVQYXRoKVxuXHRcdFx0XSkudGhlbihyZXN1bHRzID0+IHtcblx0XHRcdFx0dGV4dEVkaXRvcnMgPSByZXN1bHRzLnNwbGljZSgxKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fSk7XG5cblx0YWZ0ZXJFYWNoKCgpID0+IHtcblx0XHQvLyByZW1vdmUgdGhlIGNyZWF0ZWQgZml4dHVyZSwgaWYgaXQgZXhpc3RzXG5cdFx0cnVucygoKSA9PiB7XG5cdFx0XHRmcy5zdGF0KGZpbGVQYXRoLCAoZXJyLCBzdGF0cykgPT4ge1xuXHRcdFx0XHRpZiAoIWVyciAmJiBzdGF0cy5pc0ZpbGUoKSkge1xuXHRcdFx0XHRcdGZzLnVubGluayhmaWxlUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0d2FpdHNGb3IoKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIGZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0ZpbGUoKSA9PT0gZmFsc2U7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fSwgNTAwMCwgYHJlbW92ZWQgJHtmaWxlUGF0aH1gKTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ0VkaXRvckNvbmZpZycsICgpID0+IHtcblx0XHRpdCgnc2hvdWxkIGRlZmF1bHQgemVybyBtYXhfbGluZV9sZW5ndGggdG8gYXV0bycsICgpID0+IHtcblx0XHRcdGV4cGVjdCh0ZXh0RWRpdG9yc1swXS5nZXRCdWZmZXIoKS5lZGl0b3Jjb25maWcuc2V0dGluZ3MubWF4X2xpbmVfbGVuZ3RoKS50b0VxdWFsKCdhdXRvJyk7XG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iXX0=