var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	
	  //1.必传参数
//let dataName = req.query.dataName;
//if(!dataName){
//  res.redirect('/admin/error?msg=dataName为必传参数')
//  return;
//}

  //公共数据 start=1|q=''|rule=''|page_header|dataName|user_session
  let common_data={
    ...res.user_session,
    page_header:'home添加',
    dataName:'home',
    active:'home'
  }
  res.render('home',common_data);
});

module.exports = router;
