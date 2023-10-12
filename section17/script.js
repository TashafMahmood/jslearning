function fetchUserData() {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';  // Clear existing table content
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data.forEach(user => {
          const row = table.insertRow();
          const nameCell = row.insertCell(0);
          const emailCell = row.insertCell(1);
          const phoneCell = row.insertCell(2);
          const websiteCell = row.insertCell(3);
  
          nameCell.innerText = user.name;
          emailCell.innerText = user.email;
          phoneCell.innerText = user.phone;
          websiteCell.innerText = user.website;
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  