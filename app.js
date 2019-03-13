#!/usr/bin/node

const http = require('http'),
      log = console.log,
      url = require('url'),
      qs = require('querystring');

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  var addr = url.parse(req.url).query;
  var rect = qs.parse(addr);

  // console.log(addr,rect);
  
  var result = {
    area:Number(rect.width)*Number(rect.height),
    perimeter:(Number(rect.width)+Number(rect.height))*2
  }

  res.end('{"code": 200, "reason": "查询成功", "result":' + JSON.stringify(result) + '}');
}).listen(8080);
