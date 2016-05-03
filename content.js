(function() {
    const surveyGeneratorUrl = "https://www.codecademy.com/advisors/survey/new";
    const intercomConversationUrl = window.location.href;

    let feedbackText;

    $.get(surveyGeneratorUrl, function(data, status, response) {
        let surveyUrlElement = document.getElementsByName("survey-url")[0];
        surveyUrlElement.addEventListener("change", function(obj) {
            feedbackText = obj.value;
        });

        let conversationUrl = document.getElementsByName("conversation-url")[0];
        conversationUrl.value = intercomConversationUrl;

        document.getElementsByTagName('button')[0].click();
    });
})();
