opws_jsonp_response({"name":"Pebble","password":{"value":{"length":{"min":8,"max":128}},"contents":{"required":[{"classes":["graph"]}]},"reset":{"flow":{"request":{"url":"https://auth.getpebble.com/users/password/new","form":{"email":{"input":"required"},"captcha":{"type":"recaptcha"}}},"response":{"email":{"sender":"support@pebble.com","body":["link"]}}}},"change":{"url":"https://auth.getpebble.com/users/edit","form":{"oldpassword":{"input":"required"}}}},"registration":{"url":"https://auth.getpebble.com/users/sign_up","form":{"email":{"input":"required"},"repeat":{"email":{"input":"required"}}}},"login":{"url":"https://auth.getpebble.com/users/sign_in"},"reviewed":{"date":"2015-06-27T19:31:00.308Z"}},{"domain":"builds.opws.org","filename":"/v0.1/latest/profiles/getpebble.com.js"})