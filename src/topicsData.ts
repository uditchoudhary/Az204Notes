const topics = [
    {
      title: 'Queue',
      description:
        'A Queue is a messaging structure where messages are stored and delivered in a First-In-First-Out (FIFO) order. Messages in a queue are typically processed by a single consumer—once a message is read, it is removed from the queue. Ideal for workloads where each message should only be processed once, such as task processing in background jobs.',
    },
    {
      title: 'Topic',
      description:
        'A Topic is a publish-subscribe (pub-sub) messaging structure, enabling multiple consumers (subscribers) to receive messages. Unlike a queue, messages published to a topic can reach multiple subscribers. Useful for scenarios where you need to broadcast messages to multiple receivers, like stock price updates in a trading system.',
    },
    {
      title: 'Message',
      description:
        'A Message is a piece of data transferred between applications, typically containing specific information that instructs the recipient on what to do (e.g., process an order). Messages are often directional (from a sender to a specific receiver) and are usually designed to trigger specific actions. Useful in scenarios like order processing, where each order (message) needs to be acted upon.',
    },
    {
      title: 'Event',
      description:
        'An Event is a notification indicating that something of interest has happened in the system, without requiring any action by the receiver. Events are often broadcasted to notify interested applications or systems of changes in state or system conditions. Examples include events about file uploads or new user registrations.',
    },
    {
      title: 'Pub-Sub (Publish-Subscribe)',
      description:
        'Pub-Sub is a messaging pattern where publishers send messages (or events) to a topic rather than directly to specific consumers. Subscribers who are interested in those topics receive the messages automatically. This reduces the need for direct connections between services, allowing multiple consumers to process the same message independently.',
    },
    {
      title: 'De-coupling',
      description:
        'De-coupling refers to designing systems so that different components or services operate independently of each other. In de-coupled systems, each component can function without requiring another component to be available, enhancing flexibility and resilience.',
    },
    {
      title: 'Throughput',
      description:
        'Throughput is the amount of data or the number of messages that a system can handle over a specific period (e.g., messages per second). High throughput systems are capable of processing a large number of requests or messages quickly, which is critical in scenarios with high data volumes.'
    },
  ];
  
  export default topics;
  