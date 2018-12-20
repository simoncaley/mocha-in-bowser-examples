/**
 * To load Chai into the Mocha environment.
 */
import "https://unpkg.com/chai@4.2.0/chai.js";

/**
 * Setup Mocha to use BDD (https://mochajs.org/#bdd) interface (style).
 * You can use TDD (https://mochajs.org/#tdd) if you prefer.
 * I usually prefer BDD in Mocha as it very similar pattern to writing
 * tests in Jest and I'm often swapping between them in multiple projects.
 */

mocha.setup("bdd");
