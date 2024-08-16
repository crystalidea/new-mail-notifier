// background.js

// Add a listener for new emails
browser.messages.onNewMailReceived.addListener((folder, messages) => {
  for (let message of messages.messages) {
    // Fetch the full message details
    browser.messages.getFull(message.id).then(fullMessage => {
      // Log the subject of the new email to the console
      console.log("New email received with subject:", fullMessage.headers.subject);
    });
  }
});