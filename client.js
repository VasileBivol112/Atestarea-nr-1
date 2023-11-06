const axios = require('axios');

const serverURL = 'http://localhost:8070';

// Funcție pentru a efectua o cerere către server și afișa rezultatul
async function calculate(operation, first, second, three) {
  try {
    const response = await axios.post(`${serverURL}/${operation}`, { first, second, three });
    if (response.status === 200) {
      console.log(`Success: ${response.data.result}`);
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log(`Fail: ${error.response.data.message}`);
    } else {
      console.error('A apărut o eroare la cererea către server.');
    }
  }
}

// Exemple de utilizare
calculate('add', 5, 3, 9);
calculate('subtract', 8, 2, 6);
calculate('multiply', 4, 6, 5);
calculate('divide', 10, 0, 3);
