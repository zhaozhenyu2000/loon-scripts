// Converted for Loon; original source index 11
try{let o=JSON.parse($response.body);if(o.third_business){delete o.third_business.related_queries;delete o.third_business.ring;}$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
