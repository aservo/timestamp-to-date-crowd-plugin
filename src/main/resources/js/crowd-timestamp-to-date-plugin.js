function parseTimestampValue(input) {
    var text = input.val();
    var timestampRegEx = new RegExp('\\d{13}');
    var result = text.match(timestampRegEx);

    if (result) {
        var timestamp = result[0];
        return new Date(parseInt(timestamp));
    }

    return;
}

AJS.$(document).ready(function () {
    AJS.$('input.text').each(function(i) {
        var element = AJS.$(this);

        // is it a date input field?
        var date = parseTimestampValue(element);

        if (date) {
            element.tooltip({
                title: function () {
                    return parseTimestampValue(element);
                }
            });
        }
    });
});
