// Converted for Loon; original source index 3
try{let o=JSON.parse($response.body);delete o.data.sport_card;delete o.data.gold;delete o.data.gold_coin_card;delete o.data.shop;$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
