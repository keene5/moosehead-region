// tests/example.test.js
test('Check if the homepage loads', () => {
  const secret = process.env.MY_SECRET; // Access the environment variable
  console.log('The secret is:', secret.length);


    // Here you can use a library like jsdom to simulate the DOM
    // For this example, we can just pass a true condition.
    expect(true).toBe(true);
  });

  test('Check if Secret is Present', () => {
    const secret = process.env.MY_SECRET; // Access the environment variable
  
    expect(secret.length).toBe(11); 
      // Here you can use a library like jsdom to simulate the DOM
      // For this example, we can just pass a true condition.

    });
  