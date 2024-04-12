document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.text();
      document.getElementById('message').innerText = data;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });
  