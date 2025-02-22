let step = 0; // Tracks the current question
let userData = { qualification: "", field: "", semester: "" }; // Stores user responses

// Function to send a new message and handle chatbot logic
function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();

  // Check if the message is valid and store it
  if (message) {
    displayMessage(message, 'user');
    input.value = ''; // Clear the input field
    input.style.height = '40px'; // Reset height
    handleChatFlow(message); // Continue with the chatbot flow
  } else {
    // Prompt user to enter a valid response
    displayMessage('Please provide a valid response. Type your answer and press Enter.', 'ai');
  }
}

// Function to handle the chatbot flow and guide the user
function handleChatFlow(message) {
  let response = "";

  switch (step) {
    case 0:
      // Validate educational qualification
      if (isValidQualification(message)) {
        userData.qualification = message;
        response = "Great! Which field are you in? (e.g., Computer Science, Mechanical, Civil)";
        step++;
      } else {
        response = "Please enter a valid educational qualification (e.g., High School, B.Tech, M.Tech).";
      }
      break;

    case 1:
      // Validate field
      if (isValidField(message)) {
        userData.field = message;
        response = "Awesome! Which semester are you currently in? (e.g., 1st, 5th, Final)";
        step++;
      } else {
        response = "Please enter a valid field of study (e.g., Computer Science, Mechanical, Civil).";
      }
      break;

    case 2:
      // Validate semester
      if (isValidSemester(message)) {
        userData.semester = message;
        response = generateSuggestionsAndTopics(userData);
        step++;
      } else {
        response = "Please enter a valid semester (e.g., 1st, 5th, Final).";
      }
      break;

    case 3:
      // Final step, thank the user
      response = "Thank you for using the Career Planner chatbot! Feel free to ask more questions.";
      break;

    default:
      response = "Something went wrong. Please start over.";
      break;
  }

  // Update the chat flow
  displayMessage(response, 'ai');
}

// Helper functions to validate user input

// Validates educational qualification
function isValidQualification(input) {
  const validQualifications = ["high school", "b.tech", "m.tech", "undergraduate", "graduate", "postgraduate"];
  return validQualifications.some(qualification => input.toLowerCase().includes(qualification));
}

// Validates field of study
function isValidField(input) {
  const validFields = ["computer science", "mechanical", "civil", "electrical", "electronics", "aerospace"];
  return validFields.some(field => input.toLowerCase().includes(field));
}

// Validates semester input
function isValidSemester(input) {
  const validSemesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "final"];
  return validSemesters.some(semester => input.toLowerCase().includes(semester));
}

// Function to generate career suggestions and topics based on user data
function generateSuggestionsAndTopics(data) {
  const { qualification, field, semester } = data;

  if (qualification.toLowerCase().includes("b.tech")) {
    if (field.toLowerCase() === "computer science") {
      return `
        You're in ${semester} semester of B.Tech Computer Science. 
        <br><strong>Career Paths:</strong> Software Developer, Data Scientist, AI Engineer.
        <br><strong>Topics to Learn:</strong> Data Structures, Algorithms, Machine Learning, Web Development, Cloud Computing.
        <br><br><strong>Suggested Action:</strong> Focus on improving coding skills and exploring internships.
      `;
    } else if (field.toLowerCase() === "mechanical") {
      return `
        You're in ${semester} semester of B.Tech Mechanical Engineering. 
        <br><strong>Career Paths:</strong> Design Engineer, Manufacturing Engineer, Automotive Engineer.
        <br><strong>Topics to Learn:</strong> Thermodynamics, Fluid Mechanics, SolidWorks, AutoCAD, Robotics.
        <br><br><strong>Suggested Action:</strong> Look for internships or research opportunities in mechanical design.
      `;
    }
  } else if (qualification.toLowerCase().includes("m.tech")) {
    if (field.toLowerCase() === "computer science") {
      return `
        You're in ${semester} semester of M.Tech Computer Science. 
        <br><strong>Career Paths:</strong> AI Researcher, Data Engineer, Cloud Architect.
        <br><strong>Topics to Learn:</strong> Advanced AI Techniques, Big Data Analytics, Deep Learning, Quantum Computing.
        <br><br><strong>Suggested Action:</strong> Focus on AI research papers and projects to build expertise.
      `;
    } else if (field.toLowerCase() === "mechanical") {
      return `
        You're in ${semester} semester of M.Tech Mechanical Engineering. 
        <br><strong>Career Paths:</strong> R&D Engineer, Thermal Engineer, Aerospace Designer.
        <br><strong>Topics to Learn:</strong> Computational Fluid Dynamics (CFD), MATLAB, Advanced Robotics, Thermal System Design.
        <br><br><strong>Suggested Action:</strong> Seek internships in aerospace or thermal engineering firms.
      `;
    }
  }

  return `
    Sorry, I don't have specific suggestions for your combination yet. 
    <br><strong>General Advice:</strong> Focus on industry-relevant certifications and internships in your field.
  `;
}

// Function to display messages in the chat window

function displayMessage(message, sender) {
  const chatMessages = document.getElementById('chatMessages');
  const messageElement = document.createElement('div');

  // Add common chat bubble class
  messageElement.classList.add('chat-bubble');

  // Add specific class based on the sender
  if (sender === 'user') {
    messageElement.classList.add('gradient-bubble'); // User bubble styling
  } else if (sender === 'ai') {
    messageElement.classList.add('glassmorphic-bubble', 'ai-message'); // AI bubble styling with new color
  }

  // Set the content and append the message element
  messageElement.innerHTML = message; // Allows HTML for AI responses
  chatMessages.appendChild(messageElement);

  // Auto-scroll to the latest message
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Handle Enter key press to start chat
function handleEnter(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Auto resize input field
function autoResize(input) {
  input.style.height = 'auto';
  input.style.height = (input.scrollHeight) + 'px';
}
