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
            AJS.InlineDialog(element, "dateDialog" + i,
                function(content, trigger, showPopup) {
                    var date = parseTimestampValue(element);

                    content.css({"padding":"20px","color":"#000"}).html('<p>' + date + '</p>');
                    showPopup();
                    return false;
                },{
                    onHover: true,
                    closeOnTriggerClick: true,
                    hideDelay: 0
                }
            );
        }
    });
});
