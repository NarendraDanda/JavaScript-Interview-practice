class EventEmitter {
    constructor() {
        // Dictionary to store event topics and their corresponding listeners
        this.listeners = {};
    }

    on(topic, listener) {
        // Check if the topic already exists in the dictionary
        if (this.listeners[topic]) {
            // Append the new listener to the existing list of listeners for the topic
            this.listeners[topic].push(listener);
        } else {
            // Create a new list with the listener and associate it with the topic
            this.listeners[topic] = [listener];
        }
    }

    off(topic, listener) {
        // Check if the topic exists in the dictionary
        if (this.listeners[topic]) {
            // Remove the listener from the list of listeners for the topic
            this.listeners[topic] = this.listeners[topic].filter((l) => l !== listener);
            // If the list becomes empty, remove the topic from the dictionary
            if (this.listeners[topic].length === 0) {
                delete this.listeners[topic];
            }
        }
    }

    emit(topic, data) {
        // Check if the topic exists in the dictionary
        if (this.listeners[topic]) {
            // Iterate through the listeners and invoke each one with the provided data
            this.listeners[topic].forEach((listener) => {
                listener(data);
            });
        }
    }

    once(topic, listener) {
        // Create a wrapper function that removes the listener after it's called once
        const onceListener = (data) => {
            // Call the original listener
            listener(data);
            // Remove the listener
            this.off(topic, onceListener);
        };
        // Add the wrapper function as a listener
        this.on(topic, onceListener);
    }
}

// Initialize eventEmitter with an instance of EventEmitter
var eventEmitter = new EventEmitter();

// Add listeners to events
eventEmitter.on('pramp', function(msg) { console.log(msg); });
eventEmitter.once('pramp', function(msg) { console.log(msg + ' just once!'); });

// Emit events with data
eventEmitter.emit('pramp', '1st');
eventEmitter.emit('pramp', '2nd');

// Remove a listener
eventEmitter.off('pramp', responseToEvent);

// Emit events after removing a listener
eventEmitter.emit('pramp', '3rd');
eventEmitter.emit('pramp', '1st');
