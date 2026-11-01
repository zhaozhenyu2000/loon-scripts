// Converted for Loon; original source index 17
try{let o=JSON.parse($response.body);delete o.data.sections;$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
