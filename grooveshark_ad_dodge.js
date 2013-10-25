function adDodgeInstall() {
	if (typeof Grooveshark != "undefined") {
        $(document).bind("ajaxComplete", function () {$('#capital-300x250').remove()});
        $(document).ready(function () {$('#capital-300x250').remove()});
	}
	else {
		setTimeout(adDodgeInstall, 500);
	}
}

adDodgeInstall();
