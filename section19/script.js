async function fetchUserData() {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';  // Clear existing table content
  
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = response.data;
  
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
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  