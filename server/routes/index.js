import express from 'express';
import path from 'path';
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

router.get('/express', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../../build/index_express.html"));
});
export default router;
