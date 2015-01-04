var MAX_RETRIES = 50,
    RETRY_INTERVAL = 100;

// autmatically resume playback by clicking on the annoying modals
function autoResume() {
    var link = $('#lightbox-footer-left a'),
        text;
    if (link.length > 0) {
        text = link.text().toLowerCase();
        if (text === "resume playback" || text === "yes, i'm here!") {
            link.click();
        }
    }
    setTimeout(autoResume, 1000);
}

function removeLeaderBoardAd(retry_count) {
    if (retry_count > MAX_RETRIES) return;

    var capital = $('#capital-728x90');
    if (capital.length >= 0) {
        capital.remove();
        $('#theme-header-inner').css('height', '20px')
    } else {
        setTimeout(function () {removeLeaderBoardAd(++retry_count)}, RETRY_INTERVAL);
    }
}

function removeVerticalAd(retry_count) {
    if (retry_count > MAX_RETRIES) return;

    var capital = $('#capital-300x250');
    if (capital.length >= 0) {
        capital.remove();
    } else {
        setTimeout(function () {removeVerticalAd(++retry_count)}, RETRY_INTERVAL);
    }
}

function removeAds() {
    removeLeaderBoardAd(0);
    removeVerticalAd(0);
}

function adDodgeInstall() {
	if (typeof Grooveshark != "undefined") {
        $(document).bind("ajaxComplete", removeAds);
        $(document).ready(function () {
            removeAds();
            setTimeout(autoResume, 20000);
        });
	}
	else {
		setTimeout(adDodgeInstall, 100);
	}
}

adDodgeInstall();
