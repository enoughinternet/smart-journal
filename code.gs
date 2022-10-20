var token = "Your Bot Token";
var url = "https://api.telegram.org/bot" + token;
var webAppUlr ="Your Web App Url after Deploying";

var spreadid = "Your Spreadsheet Hash"

function getMe() {
  var response = UrlFetchApp.fetch(url + "/getMe");
  Logger.log(response.getContentText());
}

function getWebHook() {
  var response = UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUlr);
  Logger.log(response.getContentText());
}

function doPost(e) {
  var contents = JSON.parse(e.postData.contents)
  var text = contents.message.text
  var item = text.split("-");
  SpreadsheetApp.openById(spreadid).getSheetByName("Journal").appendRow([new Date(),item[0], item[1], item[2], item[3], item[4]]);
}
