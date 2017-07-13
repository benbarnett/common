var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** @babel */
/* eslint-env jasmine, atomtest */

/*
	This file contains verifying specs for:
	https://github.com/sindresorhus/atom-editorconfig/issues/85
*/

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var projectRoot = _path2['default'].join(__dirname, 'fixtures', 'iss85');
var filePath = _path2['default'].join(projectRoot, 'test.iss85');
var ecfgPath = _path2['default'].join(projectRoot, '.editorconfig');

var getEcfgForTabWith = function getEcfgForTabWith(tabWidth) {
	return 'root = true\n[*.iss85]\ntab_width = ' + tabWidth + '\n';
};

describe('editorconfig', function () {
	var fileEditor = undefined;
	var ecfgEditor = undefined;

	beforeEach(function () {
		waitsForPromise(function () {
			return Promise.all([atom.packages.activatePackage('editorconfig'), atom.workspace.open(filePath), atom.workspace.open(ecfgPath)]).then(function (results) {
				var _results = _slicedToArray(results, 3);

				fileEditor = _results[1];
				ecfgEditor = _results[2];
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

	xdescribe('Editing an corresponding .editorconfig', function () {
		it('should change the editorconfig-settings in other fileEditors', function () {
			fileEditor.save();
			ecfgEditor.getBuffer().setText(getEcfgForTabWith(85));
			ecfgEditor.save();
			expect(fileEditor.getBuffer().editorconfig.settings.tab_width).toEqual(85);

			ecfgEditor.getBuffer().setText(getEcfgForTabWith(2));
			ecfgEditor.save();
			expect(fileEditor.getBuffer().editorconfig.settings.tab_width).toEqual(2);
		});
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9zcGVjL2lzczg1LXNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQVFlLElBQUk7Ozs7b0JBQ0YsTUFBTTs7OztBQUV2QixJQUFNLFdBQVcsR0FBRyxrQkFBSyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RCxJQUFNLFFBQVEsR0FBRyxrQkFBSyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3RELElBQU0sUUFBUSxHQUFHLGtCQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7O0FBRXpELElBQU0saUJBQWlCLEdBQUcsU0FBcEIsaUJBQWlCLENBQUcsUUFBUSxFQUFJO0FBQ3JDLGlEQUE4QyxRQUFRLFFBQUs7Q0FDM0QsQ0FBQzs7QUFFRixRQUFRLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDOUIsS0FBSSxVQUFVLFlBQUEsQ0FBQztBQUNmLEtBQUksVUFBVSxZQUFBLENBQUM7O0FBRWYsV0FBVSxDQUFDLFlBQU07QUFDaEIsaUJBQWUsQ0FBQztVQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDWCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsRUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO2tDQUNXLE9BQU87O0FBQWpDLGNBQVU7QUFBRSxjQUFVO0lBQ3pCLENBQUM7R0FBQSxDQUNGLENBQUM7RUFDRixDQUFDLENBQUM7O0FBRUgsVUFBUyxDQUFDLFlBQU07O0FBRWYsTUFBSSxDQUFDLFlBQU07QUFDVixtQkFBRyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBSztBQUNqQyxRQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtBQUMzQixxQkFBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDcEI7SUFDRCxDQUFDLENBQUM7R0FDSCxDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLFlBQU07QUFDZCxPQUFJO0FBQ0gsV0FBUSxnQkFBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssS0FBSyxDQUFFO0lBQ2xELENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDYixXQUFPLElBQUksQ0FBQztJQUNaO0dBQ0QsRUFBRSxJQUFJLGVBQWEsUUFBUSxDQUFHLENBQUM7RUFDaEMsQ0FBQyxDQUFDOztBQUVILFVBQVMsQ0FBQyx3Q0FBd0MsRUFBRSxZQUFNO0FBQ3pELElBQUUsQ0FBQyw4REFBOEQsRUFBRSxZQUFNO0FBQ3hFLGFBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQixhQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEQsYUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xCLFNBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRTNFLGFBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxhQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEIsU0FBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUMxRSxDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7Q0FDSCxDQUFDLENBQUMiLCJmaWxlIjoiL1VzZXJzL2JlbmJhcm5ldHQvLmF0b20vcGFja2FnZXMvZWRpdG9yY29uZmlnL3NwZWMvaXNzODUtc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAYmFiZWwgKi9cbi8qIGVzbGludC1lbnYgamFzbWluZSwgYXRvbXRlc3QgKi9cblxuLypcblx0VGhpcyBmaWxlIGNvbnRhaW5zIHZlcmlmeWluZyBzcGVjcyBmb3I6XG5cdGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvYXRvbS1lZGl0b3Jjb25maWcvaXNzdWVzLzg1XG4qL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHByb2plY3RSb290ID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2ZpeHR1cmVzJywgJ2lzczg1Jyk7XG5jb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9qZWN0Um9vdCwgJ3Rlc3QuaXNzODUnKTtcbmNvbnN0IGVjZmdQYXRoID0gcGF0aC5qb2luKHByb2plY3RSb290LCAnLmVkaXRvcmNvbmZpZycpO1xuXG5jb25zdCBnZXRFY2ZnRm9yVGFiV2l0aCA9IHRhYldpZHRoID0+IHtcblx0cmV0dXJuIGByb290ID0gdHJ1ZVxcblsqLmlzczg1XVxcbnRhYl93aWR0aCA9ICR7dGFiV2lkdGh9XFxuYDtcbn07XG5cbmRlc2NyaWJlKCdlZGl0b3Jjb25maWcnLCAoKSA9PiB7XG5cdGxldCBmaWxlRWRpdG9yO1xuXHRsZXQgZWNmZ0VkaXRvcjtcblxuXHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHR3YWl0c0ZvclByb21pc2UoKCkgPT5cblx0XHRcdFByb21pc2UuYWxsKFtcblx0XHRcdFx0YXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2VkaXRvcmNvbmZpZycpLFxuXHRcdFx0XHRhdG9tLndvcmtzcGFjZS5vcGVuKGZpbGVQYXRoKSxcblx0XHRcdFx0YXRvbS53b3Jrc3BhY2Uub3BlbihlY2ZnUGF0aClcblx0XHRcdF0pLnRoZW4ocmVzdWx0cyA9PiB7XG5cdFx0XHRcdFssIGZpbGVFZGl0b3IsIGVjZmdFZGl0b3JdID0gcmVzdWx0cztcblx0XHRcdH0pXG5cdFx0KTtcblx0fSk7XG5cblx0YWZ0ZXJFYWNoKCgpID0+IHtcblx0XHQvLyByZW1vdmUgdGhlIGNyZWF0ZWQgZml4dHVyZSwgaWYgaXQgZXhpc3RzXG5cdFx0cnVucygoKSA9PiB7XG5cdFx0XHRmcy5zdGF0KGZpbGVQYXRoLCAoZXJyLCBzdGF0cykgPT4ge1xuXHRcdFx0XHRpZiAoIWVyciAmJiBzdGF0cy5pc0ZpbGUoKSkge1xuXHRcdFx0XHRcdGZzLnVubGluayhmaWxlUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0d2FpdHNGb3IoKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIChmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkgPT09IGZhbHNlKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LCA1MDAwLCBgcmVtb3ZlZCAke2ZpbGVQYXRofWApO1xuXHR9KTtcblxuXHR4ZGVzY3JpYmUoJ0VkaXRpbmcgYW4gY29ycmVzcG9uZGluZyAuZWRpdG9yY29uZmlnJywgKCkgPT4ge1xuXHRcdGl0KCdzaG91bGQgY2hhbmdlIHRoZSBlZGl0b3Jjb25maWctc2V0dGluZ3MgaW4gb3RoZXIgZmlsZUVkaXRvcnMnLCAoKSA9PiB7XG5cdFx0XHRmaWxlRWRpdG9yLnNhdmUoKTtcblx0XHRcdGVjZmdFZGl0b3IuZ2V0QnVmZmVyKCkuc2V0VGV4dChnZXRFY2ZnRm9yVGFiV2l0aCg4NSkpO1xuXHRcdFx0ZWNmZ0VkaXRvci5zYXZlKCk7XG5cdFx0XHRleHBlY3QoZmlsZUVkaXRvci5nZXRCdWZmZXIoKS5lZGl0b3Jjb25maWcuc2V0dGluZ3MudGFiX3dpZHRoKS50b0VxdWFsKDg1KTtcblxuXHRcdFx0ZWNmZ0VkaXRvci5nZXRCdWZmZXIoKS5zZXRUZXh0KGdldEVjZmdGb3JUYWJXaXRoKDIpKTtcblx0XHRcdGVjZmdFZGl0b3Iuc2F2ZSgpO1xuXHRcdFx0ZXhwZWN0KGZpbGVFZGl0b3IuZ2V0QnVmZmVyKCkuZWRpdG9yY29uZmlnLnNldHRpbmdzLnRhYl93aWR0aCkudG9FcXVhbCgyKTtcblx0XHR9KTtcblx0fSk7XG59KTtcbiJdfQ==