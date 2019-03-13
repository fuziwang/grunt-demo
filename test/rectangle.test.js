const expect = require('chai').expect;

describe('矩形计算器接口测试套件',function(){
  it('正确的矩形参数',function(){
    const http = require('http');
    var address = 'http://localhost:8080/rectangle?width=20&height=20';

    http.get(global.encodeURI(address),(res)=>{
      var result = '';

      res.on('data',(data)=>{
        result += data.toString('utf-8');         
      });

      res.on('end',()=>{
        var rect = JSON.parse(result);
        console.log(rect);
        expect(rect.area).to.be.equal(400);
        expect(rect.perimeter).to.be.equal(40);
      });

    });
  });
});
