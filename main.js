  $(function() {
    $("#sendText").click(function(){
      var reqestUrl = "http://jlp.yahooapis.jp/KeyphraseService/V1/extract?appid=dj0zaiZpPU1XMmlaWE5YQmJrZiZzPWNvbnN1bWVyc2VjcmV0Jng9YzI-&sentence=";
      var contentText = document.getElementById("textContent").value;
      contentText = encodeURI(contentText)
      var outputOption = "&output=json&callback=resultByYahoo";
      var resultByYahoo = "";

      console.log("コンソールログに出力", reqestUrl + contentText);
      //document.location = reqestUrl + contentText + outputOption;
      //とりあえずテキストボックスから持ってきたのを解析投げてその結果をログに吐く。
    });
});
