const express = require('express');
const app = express();

var first =  function(array) {  
      if (array == null){
        return null;
      } 
      return array[0];  
  };  

app.get('/', function(req, res){
    var userAgent = req.headers['user-agent'];
    var ip = req.ip || req.headers["accept-language"] || req.connection.remoteAddress;
    var lang = req.headers["accept-language"];
    lang = lang.substring(0, lang.indexOf(',') || lang.indexOf(';'));
    var soft = userAgent.substring(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
    var ret = {
        "ipaddress": ip,
        "language": lang,
        "software": soft
    }
    res.send(ret);
});

app.listen(process.env.PORT || 8080, function(){
    console.log('listening on 8080');
});

