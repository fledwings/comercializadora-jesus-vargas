fetch("https://formsubmit.co/ajax/test@example.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "Test Name",
        message: "Test Message"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
