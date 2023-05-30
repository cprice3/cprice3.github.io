google.charts.load('current', {
  'packages': ['corechart', 'line'],
});
google.charts.setOnLoadCallback(initialize);

function initialize() {
  var queryString = encodeURIComponent('select B, C, D limit 400 label C "°C", >
  var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1lkBDiWV8zLEw5IP6J71npqJSLwpoK9ZyNY>
  query.send(handleSampleDataQueryResponse);
}

function handleSampleDataQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetail>
    return;
  }

  var data = response.getDataTable();
