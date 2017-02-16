var http = require('http');
var fs = require('fs');
var url = require('url');
 
// 서버 생성
http.createServer( function (request, response) {  
   // Parse the request containing file name
   // 요청 들어온 파일명으로 파싱 
   var pathname = url.parse(request.url).pathname;
   
   // 경로 + 파일명 콘솔 출력 
   console.log("Request for " + pathname + " received.");
   
   // '/'를 제외한 파일경로로 파일 읽기
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{    
         // Page found      
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});    
                  
         // response body에 파일내용 쓰기
         response.write(data.toString());        
      }
      // response body 전송
      response.end();
   });   
}).listen(8081);
 
console.log('Server running at http://localhost:8081/');
