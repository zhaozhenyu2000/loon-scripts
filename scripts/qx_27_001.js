// Converted for Loon; original source index 27
try{let o=JSON.parse($response.body);o.items=o.items.filter(x=>x.category!=="card");$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
