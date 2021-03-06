/**
 * Load all the test files to be run here.
 * They need to be loaded before Mocha runs.
 */

import "../test/nexchange-USD.test.js";
import "../test/nexchange-BTC.test.js";

mocha.checkLeaks();

/**
 * Now that the tests are loaded, run Mocha
 */

mocha.run();
