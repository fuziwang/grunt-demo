const expect = require('chai').expect;

describe('天气预报接口测试套件',function(){
  it('石家庄的天气',function(){
    const http = require('http');
    var address = 'http://v.juhe.cn/weather/index?format=2&cityname=石家庄&key=089c1db918016aa1643dcc167dc789fb';

    http.get(global.encodeURI(address),(res)=>{
      var result = '';

      res.on('data',(data)=>{
        result += data.toString('utf-8');         
      });

      res.on('end',()=>{
        var weather = JSON.parse(result);
        console.log(weather);
        expect(weather.resultcode).to.be.equal(200);
      });

    });
  });
});
