fetch('http://localhost:62114/App/OrganizationCostCenters/GetCostCenterList?_search=false&nd=1730200416210&rows=10&page=1&sidx=id&sord=desc', { 
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok: ' + response.statusText);
  }
  return response.json();
})
.then(data => {
  alert('success attack!!');
  return fetch('https://6721dd9998bbb4d93caa0a71.mockapi.io/api/v10/CostCenters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 2,
      data: data
    })
  });
})
.then(postResponse => {
  if (!postResponse.ok) {
    throw new Error('Network response was not ok: ' + postResponse.statusText);
  }
  return postResponse.json();
})
.catch(error => {
  console.error('There was a problem with the fetch operation: ', error.message);
});
