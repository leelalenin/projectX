function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('/register', {
      method: 'POST',
      body: new URLSearchParams({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => console.error('Error:', error));
  }
  
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('/login', {
      method: 'POST',
      body: new URLSearchParams({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user_id) {
          alert(data.message);
          document.getElementById('auth-section').style.display = 'none';
          document.getElementById('trade-section').style.display = 'block';
          document.getElementById('user-name').textContent = username;
          localStorage.setItem('user_id', data.user_id);
        } else {
          alert('Invalid credentials');
        }
      })
      .catch((error) => console.error('Error:', error));
  }
  
  function trade() {
    const user_id = localStorage.getItem('user_id');
    const stock_symbol = document.getElementById('stock-symbol').value;
    const quantity = document.getElementById('quantity').value;
    const transaction_type = document.getElementById('transaction-type').value;
    const price = document.getElementById('price').value;
  
    fetch('/trade', {
      method: 'POST',
      body: new URLSearchParams({ user_id, stock_symbol, quantity, transaction_type, price }),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => console.error('Error:', error));
  }
  