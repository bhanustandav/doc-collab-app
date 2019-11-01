var request = require("request");

function addToZoho(formData, callback) {
    request.post(
        {
            url:
                "https://creator.zoho.com/api/[accountowner]/json/[appname]/form/[formname]/record/add",
            formData,
        },
        (err, httpResponse, body) => {
            if (err) {
                callback({ err, httpResponse, body });
                return;
            }
            callback({ err, httpResponse, body });
        }
    );
}

exports.handler = function(event, context, callback) {
    const lambdaResponse = response => {
        callback(null, {
            statusCode: 200,
            body: response.httpResponse.body,
        });
    };
    const formData = JSON.parse(event.body);
    addToZoho(formData, lambdaResponse);
};






