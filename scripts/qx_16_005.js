// Converted for Loon; original source index 16
let headers={...$request.headers};for(const k of Object.keys(headers)){if(k.toLowerCase()==="accept-encoding")delete headers[k];}headers["Accept-Encoding"]="gzip, deflate, br";$done({headers});
