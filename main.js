//--- テキストボックスからYahooに投げるURL生成
var xmlURL = null; //xmlURLをグローバル変数で宣言
var domDoc = new DOMParser(); //DOMParserを宣言

$(function() {
  $("#sendText").click(function(){
    var requestUrl = "http://jlp.yahooapis.jp/KeyphraseService/V1/extract?appid=dj0zaiZpPU1XMmlaWE5YQmJrZiZzPWNvbnN1bWVyc2VjcmV0Jng9YzI-&sentence=";
    var contentText = document.getElementById("textContent").value;
    contentText = encodeURI(contentText)
    xmlURL = requestUrl + contentText;

    //outputOption = "&output=json&callback=resultByYahoo";
    //jsonURL = requestUrl + contentText + outputOption;

    $.ajax({
      url:xmlURL,
      success:function(xml){
        //ここでパースするらしい。
        var $Keyphrase = $(this).find('Keyphrase').text();
        $('<p>'+ Keyphrase +'</p>').appendTo('#result');
      }
    });

    console.log("コンソールログに出力", xmlURL);
    //document.location = requestUrl + contentText + outputOption;
    //とりあえずテキストボックスから持ってきたのをYahoo解析投げてその結果をログに吐く。
  });
});


//--- XMLを読み込み
function xml_load (xmlURL) {
  $.ajax({
    url:xmlURL,
    type:'get',
    dataType:'xml',
    timeout:1000,
    success:parse_xml
  });
}


//--- XMLを加工
$(function parse_xml(xml, status){
  if(status!='success')return;
  $(xml).find('Result').each(disp);
})


//--- 表示用に各要素を各変数に格納、HTMLに出力
function disp(){
  var $Keyphrase = $(this).find('Keyphrase').text();
  $('<p>'+ Keyphrase +'</p>').appendTo('div.result');
}
