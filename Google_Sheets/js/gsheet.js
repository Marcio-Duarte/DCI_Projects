const { google } = require('googleapis');
const secret = require('./gs_secret.json');

const client = new google.auth.JWT(
    secret.client_email,
    null,
    secret.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

async function readSheet() {
    const api = google.sheets({ version: 'v4', auth: client });
    const options = {
        spreadsheetId: "1qzesGiHJ5VcN9dg5XbdixBYqlGxlu20ixp-ZF5byCJk",
        range: 'Sheet1!A1:Z'
    }
    try {
        let data = await api.spreadsheets.values.get(options);
        return data.data.values;
    } catch (error) {
        return error;
    }
}

async function t() {
    let z = await readSheet();
    console.log(z);
}

t();