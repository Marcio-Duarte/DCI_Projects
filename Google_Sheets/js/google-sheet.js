/* ### Get all data for a spreadsheet ###
   https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/?key={APIKey}&includeGridData=true 
   ### Get sheet metadata ###
   https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/?key={yourAPIKey}
   ### Get a range of cells ###
   https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{sheetName}!{cellRange}?key={yourAPIKey}
*/

const spreadsheetId = "1qzesGiHJ5VcN9dg5XbdixBYqlGxlu20ixp-ZF5byCJk";
const sheetName = "sheet1";
const cellRange = "A:Z";
const apiKey = "AIzaSyDQTUrmy3QeXIUBTraFn34OwTv8qN_zvtM";

async function fetchGS() {

    let URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!${cellRange}?key=${apiKey}`;
    let response = await fetch(URL);
    let data = await response.json();
    return data.values;
}




/* function saveToGoogleSheet() {
    const scriptURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!${cellRange}?key=${apiKey}`;
    const form = ['2222', '3333'];
    var sendingData = new FormData(form)
    sendingData.append('starRating', this.feedbackData.starRating)
    fetch(scriptURL, { method: 'POST', body: sendingData })
}
saveToGoogleSheet(); */
/* function makeApiCall() {
    var params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: '1qzesGiHJ5VcN9dg5XbdixBYqlGxlu20ixp-ZF5byCJk',  // TODO: Update placeholder value.

        // The A1 notation of the values to update.
        range: 'A1',  // TODO: Update placeholder value.

        // How the input data should be interpreted.
        valueInputOption: 'RAW',  // TODO: Update placeholder value.
    };

    var valueRangeBody = {
        "values": [testing, write]
        // TODO: Add desired properties to the request body. All existing properties
        // will be replaced.
    };

    var request = gapi.client.sheets.spreadsheets.values.update(params, valueRangeBody);
    request.then(function (response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
    }, function (reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function initClient() {
    var API_KEY = 'AIzaSyDQTUrmy3QeXIUBTraFn34OwTv8qN_zvtM';  // TODO: Update placeholder with desired API key.

    var CLIENT_ID = '113620323930952185941';  // TODO: Update placeholder with desired client ID.

    // TODO: Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/spreadsheets'
    var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
    if (isSignedIn) {
        makeApiCall();
    }
}

function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}
 */