# builds.opws.org

Periodically-updated flatfiles of compiled OPWS data

## Using these files

The generally recommended way to use these files is to request
https://builds.opws.org/v0.1/latest/bundle.json initially, and then
periodically check https://builds.opws.org/v0.1/latest/BUILD_TIMESTAMP.txt
against the `BUILD_TIMESTAMP` property of the JSON bundle to see if there's
been an update (thus skipping the entire bundle download when there's been no
update).

If you only want/need data for a *specific profile*, you can request it
directly, as either compiled JSON or the source YAML.

If you're in a legacy browser environment that doesn't support CORS for
whatever reason, you can also request each file via JSONP, by including the
file with a `.js` extension as a script in your page. These JSONP scripts will
call a global function, to be defined by your implementation, with the
signature `opws_jsonp_response(content, metadata)`, where `content` is the JSON
content of the file, and `metadata` is an object containing the filename, so
that multiple concurrent invocations of the function for two separate files can
be distinguished from one another (as their order otherwise is potentially
[ambiguous][1]).

[1]: https://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
