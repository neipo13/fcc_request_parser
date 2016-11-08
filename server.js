const express = require('express');
const app = express();

app.get('/', function(req, res){
    var userAgent = req.headers['user-agent'];
    var ip = req.ip || req.headers["accept-language"] || req.connection.remoteAddress;
    var lang = req.acceptedLanguages[0];
    var soft = userAgent.substring(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
    var ret = {
        "ipaddress": ip,
        "language": lang,
        "software": soft
    }
    res.send(ret);
});

app.use(function(err, req, res, next){
    err.status(500).send(err);
    res.send(err);
});

app.listen(process.env.PORT || 8080, function(){
    console.log('listening on 8080');
});