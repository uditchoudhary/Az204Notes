const topics = [
    {
      title: 'Queue',
      description: 'A Queue is a messaging structure where messages are stored and delivered in a First-In-First-Out (FIFO) order.\n' +
                   'Messages in a queue are typically processed by a single consumer—once a message is read, it is removed from the queue.\n' +
                   'Ideal for workloads where each message should only be processed once, such as task processing in background jobs.'
    },
    {
      title: 'Topic',
      description: 'A Topic is a publish-subscribe (pub-sub) messaging structure, enabling multiple consumers (subscribers) to receive messages.\n' +
                   'Unlike a queue, messages published to a topic can reach multiple subscribers.\n' +
                   'Useful for scenarios where you need to broadcast messages to multiple receivers, like stock price updates in a trading system.'
    },
    {
      title: 'Message',
      description: 'A Message is a piece of data transferred between applications, typically containing specific information that instructs the recipient on what to do (e.g., process an order).\n' +
                   'Messages are often directional (from a sender to a specific receiver) and are usually designed to trigger specific actions.\n' +
                   'Useful in scenarios like order processing, where each order (message) needs to be acted upon.'
    },
    {
      title: 'Event',
      description: 'An Event is a notification indicating that something of interest has happened in the system, without requiring any action by the receiver.\n' +
                   'Events are often broadcasted to notify interested applications or systems of changes in state or system conditions.\n' +
                   'Examples include events about file uploads or new user registrations.'
    },
    {
      title: 'Pub-Sub (Publish-Subscribe)',
      description: 'Pub-Sub is a messaging pattern where publishers send messages (or events) to a topic rather than directly to specific consumers.\n' +
                   'Subscribers who are interested in those topics receive the messages automatically.\n' +
                   'This reduces the need for direct connections between services, allowing multiple consumers to process the same message independently.'
    },
    {
      title: 'De-coupling',
      description: 'De-coupling refers to designing systems so that different components or services operate independently of each other.\n' +
                   'In de-coupled systems, each component can function without requiring another component to be available, enhancing flexibility and resilience.'
    },
    {
      title: 'Throughput',
      description: 'Throughput is the amount of data or the number of messages that a system can handle over a specific period (e.g., messages per second).\n' +
                   'High throughput systems are capable of processing a large number of requests or messages quickly, which is critical in scenarios with high data volumes.'
    },
    {
      title: 'Azure Event Grid',
      description: 'Azure Event Grid is an event routing service for high-frequency, one-time notifications of changes in state.\n' +
                   'It distributes events to multiple subscribers and is designed for serverless applications where you only need to send event notifications.\n' +
                   'Ideal for reactive events, like resource creation or deletion events, and integration with other Azure services.'
    },
    {
      title: 'Azure Event Hub',
      description: 'Azure Event Hub is a big-data streaming service primarily for telemetry and event stream ingestion.\n' +
                   'It is optimized for high-throughput scenarios, supporting real-time and batch processing.\n' +
                   'Designed for large-scale data ingestion from sources like IoT devices or application logs, where capturing and processing high-throughput data is crucial.'
    },
    {
      title: 'Azure Service Bus',
      description: 'Azure Service Bus is a fully managed enterprise message broker designed for high-reliability message delivery.\n' +
                   'It supports complex message handling (like sessions or dead-lettering) and is suitable for enterprise-level applications needing reliable communication,\n' +
                   'such as banking or e-commerce platforms, and applications with complex workflows like order processing systems.'
    },
    {
      title: 'Azure Storage Queue',
      description: 'Azure Storage Queue is a simpler queue for basic, cost-effective message queuing.\n' +
                   'It is mainly used for decoupling services in cloud applications and provides scalable message storage with basic FIFO ordering.\n' +
                   'Suitable for lightweight message queuing between microservices or applications that don’t require strict ordering or reliability guarantees.'
    }
  ];

  export default topics;