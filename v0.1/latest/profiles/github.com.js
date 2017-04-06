opws_jsonp_response({"name":"GitHub","password":{"value":{"length":{"min":7},"must":[{"en":"contain a lowercase letter and number if shorter than 16 characters"}]},"reset":{"flow":{"request":{"url":"https://github.com/password_reset","form":{"email":{"input":"required"}}},"response":{"email":{"sender":"noreply@github.com","body":["url"]},"expire":"24h"},"submit":{"sessions":{"own":"logout"}}}},"change":{"url":"https://github.com/settings/admin","form":{"oldpassword":{"input":"required"}},"sessions":{"own":"unchanged"}}},"username":{"value":{"mustnot":[{"en":"begin or end with a hyphen"},{"en":"contain consecutive hyphens"}]},"contents":{"whitelist":{"classes":["alpha","digit"],"strings":["-"]}}},"login":{"url":"https://github.com/login"},"registration":{"url":"https://github.com/join","form":{"username":{"input":"required"},"email":{"input":"required"},"password":{"input":"required","masking":"masked"},"repeat":{"email":{"input":"none"},"password":{"input":"none"}}}},"sessions":{"management":{"url":"https://github.com/settings/security"}},"reviewed":{"date":"2017-02-28T01:56:35.247Z"}},{"domain":"builds.opws.org","filename":"/v0.1/latest/profiles/github.com.js"})