// Converted for Loon; original source index 17
try{let o=JSON.parse($response.body);o.data.cardList=o.data.cardList.filter(x=>x.cardData?.bizType!=="mamaAD");$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
