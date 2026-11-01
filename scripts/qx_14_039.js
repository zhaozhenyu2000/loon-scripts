// Converted for Loon; original source index 14
try{let o=JSON.parse($response.body);o.data.model.children=o.data.model.children.filter(x=>!x.name.includes("营销"));$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
