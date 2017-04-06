opws_jsonp_response({"name":"ResidentPortal","password":{"value":{"length":{"min":6}},"contents":{"required":[{"atleast":2,"classes":["upper","lower","digit"]}]},"reset":{"flow":{"request":{"url":"https://*.residentportal.com/resident_portal/?module=forgot_password&action=forgot_password","form":{"email":{"input":"required"}}},"response":{"email":{"body":["link"]},"expire":"72h"},"change":{"form":{"email":{"input":"required"}}},"submit":{"destination":{"page":"stub"},"sessions":{"own":"unchanged"},"expire":"unchanged"}}},"change":{"url":"https://*.residentportal.com/resident_portal/?module=customer&action=view_customer#ChangePassword"}},"login":{"url":"https://*.residentportal.com/resident_portal/?module=authentication&action=view_login"},"registration":{"url":"https://*.residentportal.com/resident_portal/?module=authentication&action=view_login"},"thirdparty":{"auth":{"providers":["facebook.com"]}},"distinguish":{"subdomains":{"level":3}},"reviewed":{"date":"2017-02-09T10:09:17.908Z"}},{"domain":"builds.opws.org","filename":"/v0.1/latest/profiles/WILDCARD.residentportal.com.js"})