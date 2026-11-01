// Converted for Loon; original source index 17
try{let o=JSON.parse($response.body);o.data.circleList=o.data.circleList.filter(x=>x.bizCode!=="saveMoney");$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
