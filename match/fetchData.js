/**
 * Created by happy on 4/17/18.
 */
var http = require('http');
var fs = require('fs');

var year = 2012;
var rnd = 1;
var max = 30;
fetchData(rnd);

function fetchData() {
  console.log(year, rnd);
  var url = 'http://platform.sina.com.cn/sports_all/client_api?_sport_t_=livecast&_sport_a_=matchesByType&app_key=3571367214&type=213&season='+year+'&rnd=' + rnd;
  http.get(url, function(res) {
    // console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    });
    res.on('end', function() {
      data = JSON.parse(data).result.data;
      var content = data.map(function(v) {
        return `{Round:${v.Round},Team1:'${v.Team1}',Team2:'${v.Team2}',date:'${v.date}',time:'${v.time}',MatchCity:'${v.MatchCity}',Situation:'${v.Situation}'}`;
      }).join(',') + ',';
      var path = 'csl.data.txt';
      if (fs.existsSync(path)) {
        fs.appendFileSync(path, content);
      } else {
        fs.writeFileSync('csl.data.txt', content);
      }
      if (rnd < max) {
        rnd++;
        fetchData();
      }
    });
  });
}