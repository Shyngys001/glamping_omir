const express = require("express");
const { google } = require("googleapis");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/nodepode.html', (req, res) => {
  res.sendFile(__dirname + '/public/nodepode.html');
});

app.post("/nodepode.html", async (req, res) => {

  const { adate, ldate, fname, pnumber } = req.body;
  console.log(fname + " wysa bold osy");
// , lname, adate, ldate, number
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1D6vf6Alvs1wpbxBWyDZg_fLm1HPq1OEAG0bvkaqc7fQ";

  console.log(adate)
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "youtube!A:B",
    valueInputOption: "USER_ENTERED",
    resource: {
        values: [[Date(), fname, adate, ldate, pnumber]]
    }
  })
});

app.listen(1337, (req, res) => console.log("gatovao"));