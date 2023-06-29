function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
  
    if (message.trim() !== '') {
      displayMessage(message, 'user');
      messageInput.value = '';
  
      // Send message to chatbot API for processing
      // You can use AJAX, fetch, or any other method to send the message
  
      // Assuming you receive a response from the chatbot API
      const response = getChatbotResponse(message);
  
      displayMessage(response, 'chatbot');
    }
  }
  
  function getChatbotResponse(message) {
    // Placeholder logic for the chatbot's response
    // You should replace this with your own implementation or connect to an NLP service
    const programmingQuestion = message.toLowerCase();
    let response = '';
  
    if (programmingQuestion.includes('javascript')) {
      response = 'JavaScript, often abbreviated as JS, is a dynamic, versatile, and powerful programming language that revolutionized web development. Developed by Brendan Eich in 1995, JavaScript quickly became a fundamental technology for creating interactive and dynamic web pages. In this essay, we will explore the history, features, and significance of JavaScript.Initially conceived as a simple scripting language to add interactivity to web pages, JavaScript has grown into a full-fledged programming language with wide-ranging capabilities. It is primarily used for client-side web development, allowing developers to enhance the functionality and interactivity of websites by manipulating the Document Object Model (DOM) and responding to user interactions.One of JavaScripts most notable features is its ability to be interpreted and executed directly within web browsers. This enables developers to write code that runs on the clients machine, reducing the need for frequent server requests and providing a more seamless user experience. JavaScript can be embedded directly into HTML documents using the <script> tag or loaded from external files, offering flexibility in how it is integrated into web pages.JavaScript is an event-driven language, meaning that it responds to user actions and events, such as clicks, mouse movements, and keystrokes. Through event handlers, developers can attach JavaScript code to specific events and define how the web page should react when those events occur. This allows for the creation of interactive forms, dynamic content updates, and engaging user experiences.'; // Provide relevant information about JavaScript
    } else if (programmingQuestion.includes('html')) {
      response = "HTML (Hypertext Markup Language) is the foundational language of the World Wide Web, allowing the creation and structure of web pages. Since its inception, HTML has played a crucial role in shaping the online landscape and has become an essential tool for web developers worldwide. In this essay, we will delve into the history, key concepts, and significance of HTML. HTML emerged in the early 1990s as a means to structure and present documents on the internet. It was initially developed by Sir Tim Berners-Lee and his team at CERN, the European Organization for Nuclear Research. The first version of HTML, known as HTML 1.0, provided a basic set of tags for marking up elements like headings, paragraphs, and links. Over time, HTML has evolved through various versions, with HTML5 being the latest and most comprehensive iteration.At its core, HTML is a markup language that uses a set of predefined tags to define the structure and content of web pages. HTML documents are composed of elements enclosed within angled brackets (< >) called tags. These tags define the purpose and behavior of different elements within the document. For example, the h1 tag represents a top-level heading, while the p tag signifies a paragraph.HTML tags can also include attributes, which provide additional information about an element. Attributes are added within the opening tag and consist of a name and a value. For instance, the href attribute in an anchor (a) tag specifies the URL that the link should navigate to. Attributes allow developers to customize the behavior and appearance of elements."; // Provide relevant information about HTML
    } else if (programmingQuestion.includes('css')) {
      response = 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and layout of HTML (Hypertext Markup Language) documents. It provides a set of rules that define how elements in a web page should be displayed, including their appearance, positioning, and behavior.CSS is an essential part of web development and is widely supported by modern web browsers. It allows developers to separate the presentation layer from the structure and content of a web page, resulting in more maintainable and flexible code. By applying CSS styles, designers can customize the appearance of websites and create visually appealing and consistent user interfaces.'; // Provide relevant information about CSS

    } else if (programmingQuestion.includes('java')) {
      response = "Java, a robust and versatile programming language, has emerged as one of the most popular choices for software development. Developed by James Gosling and his team at Sun Microsystems in the mid-1990s, Java has since evolved into a language renowned for its platform independence, scalability, and wide range of applications. This essay explores the key features and benefits of Java, as well as its impact on various domains.One of Java most prominent features is its platform independence.Java code can be compiled into bytecode that runs on any platform with a Java Virtual Machine (JVM). This portability has greatly simplified software development, as developers are no longer restricted to a specific operating system or hardware architecture. The JVM acts as an intermediary between the Java code and the underlying platform, ensuring consistent execution and allowing Java applications to be seamlessly deployed across diverse environments.";}
      else if (programmingQuestion.includes('python')) {
      response = "Python is a versatile and powerful programming language that has gained immense popularity and widespread adoption across various domains. Known for its simplicity, readability, and vast ecosystem, Python has become a go-to language for beginners and experienced developers alike. In this essay, we will explore the key features, applications, and advantages of Python.One of the defining features of Python is its clear and concise syntax, which emphasizes code readability. The language was designed with the philosophy of Readability counts,as stated in the Zen of Python. Python's syntax uses indentation and whitespace to delimit code blocks, resulting in clean and visually appealing code. This makes it easier for developers to understand and maintain Python programs, leading to increased productivity and reduced debugging time.Python is an interpreted language, which means that it does not require explicit compilation. Instead, the Python interpreter executes the code directly, allowing for rapid development and testing. This interpreted nature, combined with Python's dynamic typing, provides flexibility and quick feedback during the development process.Python has a comprehensive standard library that offers a wide range of modules and packages for various tasks. These modules provide ready-to-use functionality for tasks such as file I/O, networking, web development, database access, and more. The availability of such a rich standard library allows developers to accomplish complex tasks with minimal effort, boosting productivity and reducing development time";}
      else if (programmingQuestion.includes('react')) {
      response = "React is a popular JavaScript library that has transformed the landscape of web development. Developed and maintained by Facebook, React has gained significant traction due to its efficient and declarative approach to building user interfaces. In this essay, we will delve into the key features, benefits, and applications of React.At the core of React's philosophy is the concept of component-based development. React allows developers to create reusable UI components, encapsulating the logic and rendering of each element. These components are self-contained, making it easier to manage and maintain complex user interfaces. With React, developers can build modular and scalable applications by composing these components together.One of the fundamental aspects of React is its use of a virtual DOM (Document Object Model). The virtual DOM is an in-memory representation of the actual DOM, which allows React to efficiently update and render only the necessary parts of the UI when there are changes. This approach significantly improves performance, as it minimizes the number of actual DOM manipulations and re-renders, resulting in faster and more responsive user interfaces.React adopts a declarative programming model, where developers describe what they want the UI to look like based on the application's state. This makes it easier to reason about the application's behavior and enables efficient debugging and testing. React handles the underlying logic of updating the UI in response to state changes, reducing the complexity of managing UI updates manually.";}
      else {
      response = 'I am sorry, I cannot answer that question at the moment.'; // Default response for unrecognized queries
    }
  
    return response;
  }
  
  function displayMessage(message, sender) {
    const chatLog = document.getElementById('chatLog');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    if (sender === 'user') {
      messageElement.innerHTML = `<strong>User:</strong> ${message}`;
    } else {
      messageElement.innerHTML = `<strong>Chatbot:</strong> ${message}`;
    }
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  