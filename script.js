// Simulated inbox data

let inbox = [
    { id: 1, recipient: "john@example.com", subject: "Meeting Tomorrow", message: "Hi team, Just a reminder that we have a meeting scheduled for tomorrow at 10 AM. See you there!" },
    { id: 2, recipient: "jane@example.com", subject: "Project Update", message: "Hello everyone, I've completed the first phase of our project. Let's discuss the next steps during our meeting next week." }
];
let dInbox=[
    { id: 1, sender: "abcd@example.com",recipient:"raju" ,subject: "Meeting Tomorrow", message: "Hi team, Just a reminder that we have a meeting scheduled for tomorrow at 10 AM. See you there!" },
    { id: 2, sender: "efg@example.com",recipient:"ramu", subject: "Project Update", message: "Hello everyone, I've completed the first phase of our project. Let's discuss the next steps during our meeting next week." }
];

// Function to display emails in the inbox
function displayInbox() {
    var a=document.getElementById("b1")
    a.style.display="block"
    var b=document.getElementById("b2")
    b.style.display="none"
    const element=document.getElementById("draftHead");
    element.innerHTML="Inbox"
    const emailList = document.getElementById('emailList');
    emailList.innerHTML = '';
    inbox.forEach(email => {
        const emailItem = document.createElement('li');
        emailItem.classList.add('emailItem');
        emailItem.innerHTML = `
            <strong>To:</strong> ${email.recipient}<br>
            <strong>Subject:</strong> ${email.subject}<br>
            <button onclick="viewEmail(${email.id})">View</button>
        `;
        emailList.appendChild(emailItem);
    });
    
}

// Function to view a specific email
function viewEmail(id) {
    const email = inbox.find(email => email.id === id);
    if (email) {
        alert(`From: ${email.sender}\nSubject: ${email.subject}\nMessage: ${email.message}`);
    } else {
        alert('Email not found!');
    }
}

// Function to send an email
function sendEmail() {
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (recipient.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate sending email (in a real app, this would involve sending data to a server)
    const newEmail = {
        id: inbox.length + 1,
        recipient: recipient,
        subject: subject,
        message: message
    };
    inbox.push(newEmail);

    // Clear form fields and update inbox
    document.getElementById('recipient').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    displayInbox();

    alert('Email sent successfully!');
}
function displayDbox() {
    var a=document.getElementById("b2")
    a.style.display="block"
    var b=document.getElementById("b1")
    b.style.display="none"
     const element=document.getElementById("draftHead");
    element.innerHTML="Draft"
    const emailList = document.getElementById('emailList');
    emailList.innerHTML = '';
    dInbox.forEach(email => {
        const emailItem = document.createElement('li');
        emailItem.classList.add('emailItem');
        emailItem.innerHTML = `
            <strong>To
            :</strong> ${email.recipient}<br>
            <strong>Subject:</strong> ${email.subject}<br>
            <button onclick="edit(${email.id})">Edit</button>
        `;
        emailList.appendChild(emailItem);
    });
    
}
function saveEmail() {
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (recipient.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate sending email (in a real app, this would involve sending data to a server)
    const newEmail = {
        id: inbox.length + 1,
        recipient:recipient,
        sender: "you@example.com",
        subject: subject,
        message: message
    };
    dInbox.push(newEmail);

    // Clear form fields and update inbox
    document.getElementById('recipient').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    displayInbox();

    alert('Saved draft');
}
function edit(id) {
    const email = dInbox.find(email => email.id === id);
    if (email) {
        document.getElementById('recipient').value =email.recipient ;
        document.getElementById('subject').value = email.subject;
        document.getElementById('message').value = email.message;
        
    } else {
        alert('Email not found!');
    }
}
// Display inbox on page load
displayInbox();
