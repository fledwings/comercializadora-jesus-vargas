const fetch = require('node-fetch'); // wait, I can use built-in fetch in node 18+

async function test() {
  const res = await fetch("https://formsubmit.co/ajax/fledwings9@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "Test User",
        message: "Hello this is a test"
    })
  });
  console.log(await res.json());
}
test();
