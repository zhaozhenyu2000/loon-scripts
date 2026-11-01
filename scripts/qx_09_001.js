// Converted for Loon; original source index 9
try{let o=JSON.parse($response.body);delete o["HomeFusion.backGroundQuery"];delete o["HomeFusion.bottomLabel"].bottomMallKey;$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
