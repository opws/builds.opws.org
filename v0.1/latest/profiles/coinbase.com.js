opws_jsonp_response({"name":"Coinbase","password":{"value":{"length":{"min":8},"notes":[{"en":"Passwords must be rated \"good\" and not \"too weak\" by an opaque judgment algorithm."}]},"reset":{"flow":{"request":{"url":"https://coinbase.com/password_resets/new","form":{"email":{"input":"required"}}},"response":{"email":{"sender":"no-reply@coinbase.com","body":["link"]}},"change":{"form":{"newpassword":{"masking":"masked"},"repeat":{"newpassword":{"input":"required","masking":"masked"}}}},"submit":{"sessions":{"own":"login"},"expire":"now"}}},"change":{"url":"https://coinbase.com/settings#change_password_modal","form":{"oldpassword":{"input":"required","masking":"masked"},"newpassword":{"masking":"masked"},"repeat":{"newpassword":{"input":"required","masking":"masked"}}}}},"registration":{"url":"https://www.coinbase.com/signup","form":{"firstname":{"input":"required"},"lastname":{"input":"required"},"email":{"input":"required","masking":"unmasked"},"password":{"input":"required","masking":"masked"},"repeat":{"email":{"input":"none"},"password":{"input":"none"}}}},"login":{"url":"https://www.coinbase.com/signin","form":{"email":{"input":"required"},"password":{"masking":"masked"},"persist":{"checkbox":"unchecked"}}},"sessions":{"management":{"url":"https://www.coinbase.com/settings/security_settings#active_sessions"}},"reviewed":{"date":"2017-02-10T15:03:31.561Z"}},{"domain":"builds.opws.org","filename":"/v0.1/latest/profiles/coinbase.com.js"})