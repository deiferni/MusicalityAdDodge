function autoResume() {
    var link = $('#lightbox-footer-right a'),
        text;
    if (link.length > 0) {
        text = link.text();
        if (text === "Resume playback" || text === "Yes, I'm Here!") {
            link.click();
        }
    }
    setTimeout(autoResume, 1000);
}

function removeAd() {
    $('#capital-300x250').remove();
}

function adDodgeInstall() {
	if (typeof Grooveshark != "undefined") {
        $(document).bind("ajaxComplete", removeAd);
        $(document).ready(function () {
            removeAd();
            setTimeout(autoResume, 20000);
        });
	}
	else {
		setTimeout(adDodgeInstall, 500);
	}
}

adDodgeInstall();
