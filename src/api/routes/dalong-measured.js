const Router = require('hermesjs/lib/router');
const router = new Router();
const dalongMeasuredHandler = require('../handlers/dalong-measured');
module.exports = router;

/**
 * Inform about environmental lighting conditions for a particular streetlight.
 */
router.use('dalong/measured', async (message, next) => {
  try {
    await dalongMeasuredHandler.app({message});
    next();
  } catch (e) {
    next(e);
  }
});
