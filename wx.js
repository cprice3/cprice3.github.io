// Load the Google Sheets API
gapi.load('client', initClient);

// Initialize the Google Sheets API client
function initClient() {
  gapi.client.init({
    apiKey: '\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQChfPzJEGFjHTSw\nUhj3Y+CTxiaty/ICcglP5OV/GooljnnmYXNa4kD8aq9EiJg45JIy8HUJn8eIDJTG\nTRoPLFTAEFn9Lz3X0Uz8ooZzJI4v2dT207FDn/AJ7Nudi3kkgxR2fmofkdu6tPMu\nhGY8+MoCU8QIDuBfM0cgESzqi+jbKi2OWU5OTHiFUhvHg22gtOW8UCiWI5KoSdHu\nvNoHrvRPZjny70SJOnESPvADnFyO/jDczIQQXj+gG0C3N5fdeWBawuHUlmWwST6b\nm5P4uNnrVJmpQFg6rgQ+g85teO+ogtfpE5WfyPlfhzk0M0OLHMF4FEBCHN4zHL7N\n4nW5P6PFAgMBAAECggEACWydPAausvVotm7ex3aWtp5hHNIYJOMO1BDMVpHv71J/\nSV31OMqXdvkAPYRTOI7DpswNqIAgnuSiZ2g8gGzajVLm+DWiQE7AqsW5Xvg1LBRk\nWftEub5DE0aKvTOp4DhIy27ZNqUb06uXvZE7KOJut5q33ViGPkgPJeSatcgbJh8a\nLChN8b5znuHNQmZEIDr7JoAR4fm/0hAPNcON6JxCiDFIGVApt8mNDI7OiccYjpwD\nqBT3h0IcXmQZ9CNICv5QpInw0mnGDdNgSr4SZpcMPMNLlyOiR2cBFO2Qc89sDlpr\nwCzNNs5dF1ovU6uFvbZvN15pQBje2GTB7nAjYigPCQKBgQDgi98T/lGiS9XDTpZE\nx0FwNsegThjG8xcopDmF6ghkJAx+xWgNwQAESX58Rg695vm6gMQckIdZGuK6Hbgu\nmNXkiYTN5FVyzJAwerGAXoH5iSqIDAawLaWsy9qXaO2ImsZwejNMXQoZ84UBNZOq\nRZWzp9zuMZNoOL/yXisKgIJ5IwKBgQC4G+Fjc4R+2npq1+pEv/yUysuTE7l2W3hG\n0h1X2mSfqvBm+tHBBr+zjGMSpajzdYLQ2QYQvOhInKkswhxhqfPflL1iZ++0T5G8\nGq/9mpBKG2yT1qluMfvFLfGLh75Tb0swgeScX9K8lzULBlS3fNkNg5+9naAnwlfS\n3wuWzFfh9wKBgQDcEJjnela9LX9pcwqYi4OZm0ZX2FI2ISXwQcrScIQayK2qTIPm\n/uCqUvDwkKR//u9+lhYdPJQ5grzz1I6etFDkMtaCBqar5MnniUeO3JCbY4/YV5jy\nbzowuHUZ8M7jE3Up5MmDrKdquZv/jGeU9694rCo9Ez85ZGzR9vJNz5aPawKBgQCQ\nzJy/8yLKAls1nQuLdtPY0oa57lF3XQmD6c1aQ1HQokjhNXOzNPOg61EgYVo34Lw6\nNfYnQ+wM7+m+YgygY2KC/iDVPJmyXsJoBzVTaDUDk/4ZaENpf7Zcpn3LF8ABLw8b\n341Fz7eWy/XT7e7DQVYU4ujH4SkNHDSmjPY4bA7SkQKBgQDD7yIssS1OIHBBphgV\ng7meYovN9XLeyDT41ZiIzC5YQoyxC5ZkXZE6bS8z/LEFCg5y9eI45l4fu4cd+R4z\ng8Z7hjmsPFkfh1C6iYJJ85rqiS0o6eG9o2HfFSfZb8u5XNcJqwVesQbFeXBT2KCH\nIj+Qhb+URYIUJKdLJuAbmGzNOQ==',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(() => {
    // Call the function to load the data
    loadSheetData();
  });
}

// Function to load data from Google Sheets
function loadSheetData() {
  gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: '1lkBDiWV8zLEw5IP6J71npqJSLwpoK9ZyNYFPk0W-hIg',
      range: 'Sheet1!A2:C' // Assuming the data is in columns A, B, and C starting from row 2
    })
    .then(response => {
      const data = response.result.values;
      const tbody = document.getElementById('dataBody');

      // Loop through the data and create table rows
      data.forEach(row => {
        const timestamp = row[0];
        const temperature = row[1];
        const humidity = row[2];

        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${timestamp}</td><td>${temperature}</td><td>${humidity}</td>`;
        tbody.appendChild(newRow);
      });
    })
    .catch(error => {
      console.error('Error loading Google Sheets data:', error);
    });
}