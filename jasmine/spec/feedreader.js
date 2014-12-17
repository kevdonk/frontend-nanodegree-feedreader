/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */


 /*
Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
Write a testst that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
When complete - all of your tests should pass.
*/
$(function() {

  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('have urls', function() {
      expect(allFeeds.forEach(function(feed) {
        expect(feed.url).toBeTruthy();
      }));
    });

    it('have names', function() {
      expect(allFeeds.forEach(function(feed) {
        expect(feed.name).toBeTruthy();
      }));
    });
  });
  describe('The menu', function() {
    /*
    	toHaveClass custom matcher
    	from http://testdrivenwebsites.com/2010/08/04/custom-jquery-matchers-in-jasmine/
      updated by Kevin Mayo for Jasmine 2.0 as per: http://jasmine.github.io/2.0/custom_matcher.html
      and http://jasmine.github.io/2.0/upgrading.html 
    */
    beforeEach(function() {
      jasmine.addMatchers({
        toHaveClass: function(util) {
          return {
            compare: function(actual, className) { 
            var passed = actual.hasClass(className);               
            return {
              pass: passed,
              message: 'Expected ' + actual + (passed ? '' : ' not') + ' to equal ' + className
            };
            }
          };
          }
      });
    });

    it('is hidden by default', function() {
      expect($('body')).toHaveClass('menu-hidden');
    });
    	describe(', when the menu icon is clicked, ', function(done) {
    		beforeEach(function(done) {
    			$('.menu-icon-link').trigger('click'); //make sure that click occurs before testing
    			done();
    		});
		    it('becomes visible', function(done) {
		    	expect($('body')).not.toHaveClass('menu-hidden');
		    	done();
		    });
		    it('then hidden', function(done) {
		    	expect($('body')).toHaveClass('menu-hidden');
		    	done();
		    });

		  });
  });
	describe('Initial Entries', function(done) {
		beforeEach(function(done){
			loadFeed(0, done);	//loadFeed takes an optional second param, cb to be called upon completion :)
		});
		it('has at least one entry', function(done) {
			expect($('.feed > a > .entry').length).toBeGreaterThan(0);   // '.entry's appear inside 'a' tags
			done();
		});
	});
  describe('New Feed Selection', function(done) {

  });
         /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
