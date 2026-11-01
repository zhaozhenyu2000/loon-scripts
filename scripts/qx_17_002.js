// Converted for Loon; original source index 17
try{let o=JSON.parse($response.body);o.data.homeTopList=[o.data.homeTopList[0]];o.data.sections=o.data.sections.filter(x=>x.data?.bizType==="item");$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
