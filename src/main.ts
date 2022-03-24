
const doGet = (e) => {
  const url: string = `https://atcoder.jp/users/${e.parameter.id}/history/json?contestType=${e.parameter.type}`

  const params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    "method": "get",
    "headers": {}
  }

  const response = JSON.parse(UrlFetchApp.fetch(url, params).getContentText())

  const output: GoogleAppsScript.Content.TextOutput = ContentService.createTextOutput()
  output.setMimeType(ContentService.MimeType.JSON)
  output.setContent(JSON.stringify(response))

  return output
}