QUnit.extend( QUnit, {
	/**
	 * Checks that the first two arguments are equal, or are numbers close enough to be considered equal
	 * based on a specified maximum allowable difference.
	 *
	 * @example close(3.141, Math.PI, 0.001);
	 *
	 * @param Number actual
	 * @param Number expected
	 * @param Number maxDifference (the maximum inclusive difference allowed between the actual and expected numbers)
	 * @param String message (optional)
	 */
	close: function(actual, expected, maxDifference, message) {
		var passes = (actual === expected) || Math.abs(actual - expected) <= maxDifference;
		QUnit.push(passes, actual, expected, message);
	},

	/**
	 * Checks that the first two arguments are numbers with differences greater than the specified
	 * minimum difference.
	 *
	 * @example notClose(3.1, Math.PI, 0.001);
	 *
	 * @param Number actual
	 * @param Number expected
	 * @param Number minDifference (the minimum exclusive difference allowed between the actual and expected numbers)
	 * @param String message (optional)
	 */
	notClose: function(actual, expected, minDifference, message) {
		var passes = Math.abs(actual - expected) > minDifference;
		ok(passes);
		QUnit.push(passes, actual, expected, message);
	},

   vectorsClose: function(actual, expected, maxDifference, message) {
      var passes = actual.every(function(item, idx) {
         return (item === expected[idx]) || Math.abs(item - expected[idx]) <= maxDifference[idx];
      });
      ok(passes);
      QUnit.push(passes, actual, expected, message);
   }
});
