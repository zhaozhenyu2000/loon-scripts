// Converted for Loon; original source index 17
try{let o=JSON.parse($response.body);o.data.ability=[];o.data.container.sections=o.data.container.sections.filter(x=>/head|user|trade/.test(x.sectionBizCode));$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
