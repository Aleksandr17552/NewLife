import express from 'express';
import path from 'path';
const router = express.Router();
/* GET home page. */

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../../publicExpress/index.html"));
});

router.get('/time', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../../publicExpress/time.html"));
});

router.get('/index', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});
export default router;
