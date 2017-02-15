API 명세
URI: https://v3uneuxpvi.execute-api.ap-northeast-2.amazonaws.com/prod/apiv1/{artists, albums}
Request Header: x-api-key: npg3REgbAL4hjiQuAk6DV3OS02fl0CdpaJVGVGwW
ALLOWED METHODS: GET, OPTIONS
Resources:
    /artists/:id
    /albums/:id
        - query: status={1,2,3}

https://v3uneuxpvi.execute-api.ap-northeast-2.amazonaws.com/prod/apiv1?artists=john&albums=abab

예제:
1) status가 2인 앨범들 찾기
Request:
    GET /prod/apiv1/albums?status=2 HTTP/1.1
    Host: v3uneuxpvi.execute-api.ap-northeast-2.amazonaws.com
    x-api-key: npg3REgbAL4hjiQuAk6DV3OS02fl0CdpaJVGVGwW
Response:
{
  "Items": [
    {
      "Cover": "https://s3.ap-northeast-2.amazonaws.com/pison-interview/covers/223rjqewodafsadfssdf.png",
      "Tracks": [],
      "AlbumId": "2",
      "ArtistId": "2",
      "ReleaseAt": "2016-09-16",
      "Status": "2",
      "Title": "Free Throw"
    }
  ],
  "Count": 1,
  "ScannedCount": 6
}

var url = "https://v3uneuxpvi.execute-api.ap-northeast-2.amazonaws.com/prod/apiv1"

https://v3uneuxpvi.execute-api.ap-northeast-2.amazonaws.com/prod/apiv1?artists=john&albums=abab
function getData() {
$.ajax({
 header: {'x-api-key : 'npg3REgbAL4hjiQuAk6DV3OS02fl0CdpaJVGVGwW'},
 url: url,
 type: 'GET',
 data: {artists: artist, albums: album},
 dataType: 'json',
 success: function(data) {
   var data = JSON.parse(data)
   if (data.items.status === 2) {
      $("body").append('<div class="data">' + data[i] + '</div>')
   }
 }
})
}

2)id가 1인 아티스트 찾기
Request:
    GET /prod/apiv1/artists/1 HTTP/1.1
    Host: v3uneuxpvi.execute-api.ap-northeast-2.amazonaws.com
    x-api-key: npg3REgbAL4hjiQuAk6DV3OS02fl0CdpaJVGVGwW
Response:
    {
        "Item": {
            "Name": "thesomebodypain",
            "ArtistId": "1"
        }
    }

    {
        "Item": {
            "Name": "thesomebodypain2",
            "ArtistId": "2"
        }
    }

    {
        "Item": {
            "Name": "thesomebodypain3",
            "ArtistId": "123"
        }
    }

function getData() {
$.ajax({
 header: {'x-api-key : 'npg3REgbAL4hjiQuAk6DV3OS02fl0CdpaJVGVGwW'},
 url: url,
 type: 'GET',
 data: {artists: artist, albums: album},
 dataType: 'json',
 success: function(data) {
  $.each(data, function() {
  var data = JSON.parse(data)
  if (data.items.ArtistId === 1) {
     $("body").append('<div class=data>' + data.items.name + '</div>')
  }
  })

 }
})
}
