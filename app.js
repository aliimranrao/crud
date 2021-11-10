// User Add
document.getElementById('addUser').addEventListener('click', async event => {
    event.preventDefault();  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    axios.post('https://crud-server-1.herokuapp.com//user', {
      "name": name,
      "email": email,
      "address": address,
    }).then(function (response) {
      console.log(response)
      document.getElementById('addUserRes').innerHTML = response.data;
    })
      .catch(function (error) {
        document.getElementById('addUserRes').innerHTML = error
      });
  });  
  // Search all users
  document.getElementById('searchAllUsers').addEventListener('click', async event => {
    event.preventDefault();
    axios.get('https://crud-server-1.herokuapp.com/users').then(function (response) {
      // console.log(response.data)
      response.data.map((eachUserRes, index) => {
        console.log(eachUserRes)
        document.getElementById(`allUserRes${index + 1}`).innerHTML = `name: ${eachUserRes.name}, email: ${eachUserRes.email}, address: ${eachUserRes.address}`;
      })
  
    })
      .catch(function (error) {
        // console.log(error)
        document.getElementById('allUserRes').innerHTML = error
      });
  
  });
  
  // Individual user
  
  document.getElementById('searchIndUser').addEventListener('click', async event => {
    event.preventDefault();
    let userId = document.getElementById('Id').value;
    userId = Number(userId);
    axios.get(`https://crud-server-1.herokuapp.com/user/${userId ? userId - 1 : 0}`)
      .then(function (response) {
        console.log(response.data)
        document.getElementById(`indUserRes`).innerHTML = `name: ${response.data.name}, email: ${response.data.email}, address: ${response.data.address}`;
      })
      .catch(function (error) {
        document.getElementById('indUserRes').innerHTML = error
      });
  
  });
  
  
  // Update Individual User Name
  
  document.getElementById('updateIndUserName').addEventListener('click', async event => {
    event.preventDefault();
  
    document.getElementById("userId1").style.display = "block";
    document.getElementById("updateNameFeild").style.display = "block";
    document.getElementById("updateName").style.display = "block";
    document.getElementById("updateIndUserName").style.display = "none";
  });
  
  document.getElementById('updateName').addEventListener('click', async event => {
    let userId = document.getElementById('userId1').value;
    userId = Number(userId);
    let name = document.getElementById('updateNameFeild').value;
    console.log(name)
    axios.put(`https://crud-server-1.herokuapp.com/user/${userId}`, {
      "name": name,
    })
      .then(function (response) {
        // console.log(response)
        document.getElementById(`indUserResName`).innerHTML= `name: ${response.data.name}, email: ${response.data.email}, address: ${response.data.address}`;
      })
      .catch(function (error) {
        // console.log(error)
        document.getElementById('indUserResName').innerHTML=error
      });
  });
  
  // Update Individual User Email
  
  document.getElementById('updateIndUserEmail').addEventListener('click', async event => {
    event.preventDefault();  
    document.getElementById("userId2").style.display = "block";
    document.getElementById("updateEmailFeild").style.display = "block";
    document.getElementById("updateEmail").style.display = "block";
    document.getElementById("updateIndUserEmail").style.display = "none";
  });
  
  document.getElementById('updateEmail').addEventListener('click', async event => {
    let userId = document.getElementById('userId2').value;
    userId = Number(userId);
    let email = document.getElementById('updateEmailFeild').value;
    axios.put(`https://crud-server-1.herokuapp.com/user/${userId}`, {
      "email": email,
    })
      .then(function (response) {
        console.log(response)
        document.getElementById(`indUserResEmail`).innerHTML= `name: ${response.data.name}, email: ${response.data.email}, address: ${response.data.address}`;
      })
      .catch(function (error) {
        console.log(error)
        document.getElementById('indUserResEmail').innerHTML=error
      });
  });
  
  // Update Individual User Address
  
  document.getElementById('updateIndUserAddress').addEventListener('click', async event => {
    event.preventDefault();
  
    document.getElementById("userId3").style.display = "block";
    document.getElementById("updateAddressFeild").style.display = "block";
    document.getElementById("updateAddress").style.display = "block";
    document.getElementById("updateIndUserAddress").style.display = "none";
  });
  
  document.getElementById('updateAddress').addEventListener('click', async event => {
    let userId = document.getElementById('userId3').value;
    userId = Number(userId);
    let address = document.getElementById('updateAddressFeild').value;
    axios.put(`https://crud-server-1.herokuapp.com/user/${userId}`, {
      "address": address,
    })
      .then(function (response) {
        console.log(response)
        document.getElementById(`indUserResAddress`).innerHTML= `name: ${response.data.name}, email: ${response.data.email}, address: ${response.data.address}`;
      })
      .catch(function (error) {
        console.log(error)
        document.getElementById('indUserResAddress').innerHTML=error
      });
  });
  
  // Delete user
  document.getElementById('deleteIndUser').addEventListener('click', async event => {
    event.preventDefault();
    let userId = document.getElementById('deleteId').value;
    userId = Number(userId);
    axios.delete(`https://crud-server-1.herokuapp.com/user/${userId}`)
      .then(function (response) {
        console.log(response.data)
        document.getElementById(`deleteUserRes`).innerHTML = response.data;
      })
      .catch(function (error) {
        document.getElementById('deleteUserRes').innerHTML = error
      });
  
  });
  