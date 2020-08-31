function makePost(url, data) {
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: function (response, status, jqXHR) {
            if (response.succeeded) {
                location.href = url;
            } else {
                console.log(response.message)
            }
        }
    });
}

function makePut(url, data, id) {
    $.ajax({
        url: `${url}/${id}`,
        type: 'PUT',
        data: data,
        success: function () {
            location.href = url;
        }
    });
}

function makeDelete(url, id) {
    $.ajax({
        url: `${url}/${id}`,
        type: 'DELETE',
        success: function () {
            location.href = url;
        }
    });
}

function sendEmail(url, data, redirectTo) {
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: function (response, status, jqXHR) {
            if (response.succeeded) {
                location.href = redirectTo;
            } else {
                console.log(response.message)
            }
        }
    })
}