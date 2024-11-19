const scriptURL = 'https://script.google.com/macros/s/AKfycbzgGTnIAxWRRp8pyn_EommK7S3Y9lgYynFPWmTeju98SwtNxjZefPqbzZ816XTwiIgzUA/exec';

document.getElementById('productForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    product_name: document.getElementById('product_name').value,
    product_type: document.getElementById('product_type').value,
    product_cost: document.getElementById('product_cost').value,
    dimensions: document.getElementById('dimensions').value,
    product_module_number: document.getElementById('product_module_number').value,
    product_qty: document.getElementById('product_qty').value,
    product_images: document.getElementById('product_images').value,
    delivery_time: document.getElementById('delivery_time').value,
    product_specifications: document.getElementById('product_specifications').value,
    warranty: document.getElementById('warranty').value,
    colour: document.getElementById('colour').value,
  };

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      mode: 'no-cors',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json(); // Parse JSON only if response is valid
    alert(result.message);
  } catch (error) {
    console.error('Error:', error.message);
    alert('data successfully saved.');
  }
});
