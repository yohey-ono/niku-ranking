
$(function(){

$.ajax({
    type: 'GET',
    url: 'https://spreadsheets.google.com/feeds/list/1eOVxbtR7j1GQO47GBRi2lFKbzI-IaMIYiXqA_DFiiSQ/od6/public/values?alt=json',
    dataType: 'jsonp',
    cache: false,
    success: function(data){ // 通信が成功した時
      var sheetsEntry = data.feed.entry; // 実データ部分を取得
      console.log(sheetsEntry);
      $(sheetsEntry).each(function(k, v) {
      	var img = v.gsx$img.$t;
      	var text = "<p class=rank-text>"+v.gsx$text.$t+"</p>";
      	var price = "<div class=price-unit><p class=price-text>"+v.gsx$price.$t+"<small>円</small></p><span class=free-shipping>送料無料</span></div>";
    //繰り返し処理を記述する
    $('.beef-rank').append("<div class=ranking-item>"+img+text+price+"</div>");
     })
    },
    error: function(){ // 通信が失敗した時
      console.log('error');
    }
  });
$.ajax({
    type: 'GET',
    url: 'https://spreadsheets.google.com/feeds/list/1eOVxbtR7j1GQO47GBRi2lFKbzI-IaMIYiXqA_DFiiSQ/okj7r1p/public/values?alt=json',
    dataType: 'jsonp',
    cache: false,
    success: function(data){ // 通信が成功した時
		var sheetsEntry = data.feed.entry; // 実データ部分を取得
		console.log(sheetsEntry);
      $(sheetsEntry).each(function(k, v) {
      	var img = v.gsx$img.$t;
      	var text = "<p class=rank-text>"+v.gsx$text.$t+"</p>";
      	var price = "<div class=price-unit><p class=price-text>"+v.gsx$price.$t+"<small>円</small></p><span class=free-shipping>送料無料</span></div>";
    //繰り返し処理を記述する
    $('.pork-rank').append("<div class=ranking-item>"+img+text+price+"</div>");
     })
    },
    error: function(){ // 通信が失敗した時
      console.log('error');
    }
  });

});