$(function(){
    function localizeHtmlPage()
    {
        //Localize by replacing __MSG_***__ meta tags
        $('[data-i18n-content]').each(function() {
            var message = chrome.i18n.getMessage(this.getAttribute('data-i18n-content'));
            $(this).html(message);
        });
    }

	localizeHtmlPage();
})