$(document).ready(function () {
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var mailStatus = getParameterByName("mailSent");
    if (mailStatus != undefined && mailStatus === 'Y') {
        $('#myModal').modal('show');
        $('.modal-content').html("Your message has been sent successfully.")
    } else {
        $('#myModal').modal('hide');
    }

});