opws_jsonp_response({"name":"Name.com","password":{"value":{"length":{"min":7,"max":60}},"contents":{"required":[{"classes":["alpha"]},{"atleast":1,"classes":["digit","punct"]}]},"reset":{"flow":{"request":{"url":"https://www.name.com/account/credentials/password","form":{"account":{"accepts":["domain","username"]}}},"response":{"email":{"sender":"support@name.com","body":["url","origin"]},"expire":"24h"},"open":{"expects":["origin"]},"submit":{"sessions":{"own":"login"},"expire":"now"}}},"change":{"url":"https://www.name.com/account/settings/","form":{"oldpassword":{"input":"required"}}}},"username":{"value":{"length":{"min":6,"max":60}},"contents":{"whitelist":{"classes":["alpha","digit"],"strings":["+","!",".","@","_","-"]},"notes":[{"en":"Registration lists backslash as an accepted username character (it is not)."}]},"reminder":{"request":{"url":"https://www.name.com/account/credentials/username","form":{"domain":{"input":"required"}}}}},"registration":{"url":"https://www.name.com/account/create","form":{"email":{"input":"required"},"password":{"input":"required"},"repeat":{"email":{"input":"none"},"password":{"input":"none"}}}},"login":{"url":"https://www.name.com/account/login"},"reviewed":{"date":"2016-03-09T01:59:14.495Z"}},{"domain":"builds.opws.org","filename":"/v0.1/latest/profiles/name.com.js"})