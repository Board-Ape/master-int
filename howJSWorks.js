// How does JavaScript work?

// JavaScript Engine

// JS has two components
    // 1) Memory Heap
    // 2) Call Stack

// JS is single threaded but can be non-blocking
    // We can achieve that through asynchronous coding
    // setTimeout() is an API available to JS

// When setTimeout() executes
    // Brought to the Call Stack
    // Popped off after execution to API
    // Sent to the Callback Queue
    // Event Loop Checks to see whether the Call Stack is clear
    // Places the Callback function onto the Call Stack
    // Executes
