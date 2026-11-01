let url=$request.url;
url=url.replace(new RegExp("(?<=_region=)CN(?=&)","g"),"JP");
url=url.replace(new RegExp("(?<=&mcc_mnc=)460[0-1][0-9](?=&)","g"),"44001");
url=url.replace(new RegExp("(?<=&carrier=)[%A-Z0-9]+(?=&)","g"),"docomo");
url=url.replace(new RegExp("(?<=tz_name=)Asia/Shanghai(?=&)","g"),"Asia/Tokyo");
url=url.replace(new RegExp("(?<=timezone=)8(?=&)","g"),"9");
$done({url});
