// Converted for Loon; original source index 17
try{let o=JSON.parse($response.body);o.data.resultList=o.data.resultList.filter(x=>x.data?.item?.main?.clickParam?.args?.biz_type==="item");$done({body:JSON.stringify(o)});}catch(e){console.log(String(e));$done({});}
