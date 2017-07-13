/** @babel */
/* eslint-env jasmine, atomtest */

/*
  This file contains verifying specs for:
  https://github.com/sindresorhus/atom-editorconfig/issues/178
*/

var _libStatustileView = require('../lib/statustile-view');

describe('editorconfig with disabled status-bar package', function () {
	beforeEach(function () {
		waitsForPromise(function () {
			return Promise.all([atom.packages.activatePackage('editorconfig')]);
		});
	});

	describe('when updating the status bar icon', function () {
		it('shouldn\'t throw an exception', function () {
			expect(function () {
				return (0, _libStatustileView.updateIcon)('warning');
			}).not.toThrow();
		});
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5iYXJuZXR0Ly5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9zcGVjL2lzc3VlLTE3OC1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2lDQVF5Qix3QkFBd0I7O0FBRWpELFFBQVEsQ0FBQywrQ0FBK0MsRUFBRSxZQUFNO0FBQy9ELFdBQVUsQ0FBQyxZQUFNO0FBQ2hCLGlCQUFlLENBQUM7VUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQzdDLENBQUM7R0FBQSxDQUFDLENBQUM7RUFDTCxDQUFDLENBQUM7O0FBRUgsU0FBUSxDQUFDLG1DQUFtQyxFQUFFLFlBQU07QUFDbkQsSUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQU07QUFDekMsU0FBTSxDQUFDO1dBQU0sbUNBQVcsU0FBUyxDQUFDO0lBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUNsRCxDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7Q0FDSCxDQUFDLENBQUMiLCJmaWxlIjoiL1VzZXJzL2JlbmJhcm5ldHQvLmF0b20vcGFja2FnZXMvZWRpdG9yY29uZmlnL3NwZWMvaXNzdWUtMTc4LXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGJhYmVsICovXG4vKiBlc2xpbnQtZW52IGphc21pbmUsIGF0b210ZXN0ICovXG5cbi8qXG4gIFRoaXMgZmlsZSBjb250YWlucyB2ZXJpZnlpbmcgc3BlY3MgZm9yOlxuICBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2F0b20tZWRpdG9yY29uZmlnL2lzc3Vlcy8xNzhcbiovXG5cbmltcG9ydCB7dXBkYXRlSWNvbn0gZnJvbSAnLi4vbGliL3N0YXR1c3RpbGUtdmlldyc7XG5cbmRlc2NyaWJlKCdlZGl0b3Jjb25maWcgd2l0aCBkaXNhYmxlZCBzdGF0dXMtYmFyIHBhY2thZ2UnLCAoKSA9PiB7XG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdHdhaXRzRm9yUHJvbWlzZSgoKSA9PlxuXHRcdFx0UHJvbWlzZS5hbGwoW1xuXHRcdFx0XHRhdG9tLnBhY2thZ2VzLmFjdGl2YXRlUGFja2FnZSgnZWRpdG9yY29uZmlnJylcblx0XHRcdF0pKTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ3doZW4gdXBkYXRpbmcgdGhlIHN0YXR1cyBiYXIgaWNvbicsICgpID0+IHtcblx0XHRpdCgnc2hvdWxkblxcJ3QgdGhyb3cgYW4gZXhjZXB0aW9uJywgKCkgPT4ge1xuXHRcdFx0ZXhwZWN0KCgpID0+IHVwZGF0ZUljb24oJ3dhcm5pbmcnKSkubm90LnRvVGhyb3coKTtcblx0XHR9KTtcblx0fSk7XG59KTtcbiJdfQ==