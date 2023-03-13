1. Prototype Pattern: The Prototype Pattern is a creational pattern that allows us to create new objects by cloning existing objects. Here's an example in JavaScript:

   ```javascript
   class Shape {
     constructor() {
       this.type = "";
     }

     clone() {}
   }

   class Rectangle extends Shape {
     constructor() {
       super();
       this.type = "rectangle";
     }

     clone() {
       return new Rectangle();
     }
   }

   class Circle extends Shape {
     constructor() {
       super();
       this.type = "circle";
     }

     clone() {
       return new Circle();
     }
   }

   // Usage
   const rectangle = new Rectangle();
   const rectangleClone = rectangle.clone();

   const circle = new Circle();
   const circleClone = circle.clone();
   ```

   In this example, Shape is the abstract prototype class that defines the interface for cloning objects. Rectangle and Circle are the concrete prototype classes that implement the Shape interface and provide implementations for cloning themselves. By using the prototype pattern, we can easily create new objects by cloning existing ones without having to create new objects from scratch.

1. Builder Pattern: The Builder Pattern is a creational pattern that separates the construction of a complex object from its representation, allowing the same construction process to create different representations. Here's an example in JavaScript:

   ```javascript
   class PizzaBuilder {
     constructor() {
       this.pizza = {};
     }

     setCrust(crust) {
       this.pizza.crust = crust;
       return this;
     }

     setSauce(sauce) {
       this.pizza.sauce = sauce;
       return this;
     }

     setToppings(toppings) {
       this.pizza.toppings = toppings;
       return this;
     }

     build() {
       return new Pizza(this.pizza);
     }
   }

   class Pizza {
     constructor({ crust, sauce, toppings }) {
       this.crust = crust;
       this.sauce = sauce;
       this.toppings = toppings;
     }

     describe() {
       console.log(
         `A ${this.crust}-crust pizza with ${
           this.sauce
         } sauce and ${this.toppings.join(", ")} toppings.`
       );
     }
   }

   // Usage
   const myPizza = new PizzaBuilder()
     .setCrust("thin")
     .setSauce("tomato")
     .setToppings(["cheese", "mushrooms", "olives"])
     .build();

   myPizza.describe(); // "A thin-crust pizza with tomato sauce and cheese, mushrooms, olives toppings."
   ```

1. **Singleton Pattern:** The Singleton pattern ensures that only one instance of a class is created and provides a global point of access to that instance. A common example of this is a logger that is used throughout an application to log events to a file or console. Here's an example implementation of the Singleton pattern in JavaScript:

   ```javascript
   class Logger {
     constructor() {
       if (Logger.instance) {
         return Logger.instance;
       }

       Logger.instance = this;
       this.logEntries = [];
     }

     log(message) {
       this.logEntries.push(message);
       console.log(`[${new Date().toISOString()}] - ${message}`);
     }

     printLogs() {
       console.log(this.logEntries.join("\n"));
     }
   }

   const logger1 = new Logger();
   logger1.log("This is a log message");
   const logger2 = new Logger();
   logger2.log("This is another log message");

   console.log(logger1 === logger2); // Output: true
   logger1.printLogs();
   ```

   In this example, PizzaBuilder is the builder class that provides a fluent interface for building pizzas. The setCrust, setSauce, and setToppings methods allow the client to set the properties of the pizza, and the build method creates a new Pizza object with the specified properties. The Pizza class is the complex object that is created by the builder. By using the builder pattern, we can easily create different types of pizzas by changing the builder's implementation without modifying the client code.

1. **Factory Pattern:** The Factory pattern provides an interface for creating objects without specifying the exact class of object that will be created. A common example of this is a car factory that produces different types of cars (sedans, SUVs, trucks) based on customer specifications. Here's an example implementation of the Factory pattern in JavaScript:

   ```javascript
   class Car {
     constructor(make, model, year) {
       this.make = make;
       this.model = model;
       this.year = year;
     }

     getInfo() {
       return `${this.make} ${this.model} (${this.year})`;
     }
   }

   class CarFactory {
     static createCar(type) {
       switch (type.toLowerCase()) {
         case "sedan":
           return new Car("Toyota", "Corolla", 2021);
         case "suv":
           return new Car("Ford", "Explorer", 2022);
         case "truck":
           return new Car("Chevrolet", "Silverado", 2023);
         default:
           throw new Error(`Invalid car type: ${type}`);
       }
     }
   }

   const sedan = CarFactory.createCar("sedan");
   console.log(sedan.getInfo()); // Output: Toyota Corolla (2021)

   const suv = CarFactory.createCar("suv");
   console.log(suv.getInfo()); // Output: Ford Explorer (2022)

   const truck = CarFactory.createCar("truck");
   console.log(truck.getInfo()); // Output: Chevrolet Silverado (2023)
   ```

1. Abstract Factory Pattern: The Abstract Factory Pattern is a creational pattern that provides an interface for creating related objects without specifying their concrete classes. Here's an example in JavaScript:

   ```javascript
   class CarFactory {
     createSedan() {}
     createSUV() {}
   }
   class ToyotaFactory extends CarFactory {
     createSedan() {
       return new Corolla();
     }

     createSUV() {
       return new RAV4();
     }
   }

   class HondaFactory extends CarFactory {
     createSedan() {
       return new Civic();
     }

     createSUV() {
       return new CRV();
     }
   }

   class Corolla {}
   class RAV4 {}
   class Civic {}
   class CRV {}

   // Usage
   const toyota = new ToyotaFactory();
   const honda = new HondaFactory();

   const myToyotaSedan = toyota.createSedan();
   const myHondaSUV = honda.createSUV();
   ```

   In this example, CarFactory is the abstract factory that defines the interface for creating related car objects. ToyotaFactory and HondaFactory are the concrete factories that implement the CarFactory interface and provide implementations for creating Toyota and Honda cars, respectively. The Corolla, RAV4, Civic, and CRV classes are the related car objects that are created by the factories.

1. **Observer Pattern:** The Observer pattern defines a one-to-many dependency between objects, so that when one object changes state, all of its dependents are notified and updated automatically. A common example of this is a news agency that broadcasts news to multiple subscribers who have opted to receive updates. Here's an example implementation of the Observer pattern in JavaScript:

   ```javascript
   class NewsAgency {
     constructor() {
       this.subscribers = new Set();
     }

     subscribe(subscriber) {
       this.subscribers.add(subscriber);
     }

     unsubscribe(subscriber) {
       this.subscribers.delete(subscriber);
     }

     broadcastNews(news) {
       console.log(`Broadcasting news: ${news}`);
       this.subscribers.forEach((subscriber) => {
         subscriber.receiveNews(news);
       });
     }
   }

   class Subscriber {
     constructor(name) {
       this.name = name;
     }

     receiveNews(news) {
       console.log(`${this.name} received news: ${news}`);
     }
   }

   const agency = new NewsAgency();

   const subscriber1 = new Subscriber("John");
   const subscriber2 = new Subscriber("Jane");

   agency.subscribe(subscriber1);
   agency.subscribe(subscriber2);

   agency.broadcastNews("Breaking news: a new vaccine has been developed!");
   // Output:
   // Broadcasting news: Breaking news: a new vaccine has been developed!
   // John received news: Breaking news: a new vaccine has been developed!
   // Jane received news: Breaking news: a new vaccine has been developed!

   agency.unsubscribe(subscriber2);

   agency.broadcastNews("Sports news: the home team wins!");
   // Output:
   // Broadcasting news: Sports news: the home team wins!
   // John received news: Sports news: the home team wins!
   ```

1. **Decorator Pattern:** The Decorator pattern allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. A common example of this is a coffee shop that offers a variety of add-ons (like whipped cream, caramel, or chocolate) to basic coffee orders. Here's an example implementation of the Decorator pattern in JavaScript:

   ```javascript
   class Coffee {
     constructor() {
       this.price = 2.5;
       this.description = "Coffee";
     }

     getPrice() {
       return this.price;
     }

     getDescription() {
       return this.description;
     }
   }

   class CoffeeAddOnDecorator {
     constructor(coffee) {
       this.coffee = coffee;
     }

     getPrice() {
       return this.coffee.getPrice() + this.price;
     }

     getDescription() {
       return `${this.coffee.getDescription()}, ${this.description}`;
     }
   }

   class WhippedCreamDecorator extends CoffeeAddOnDecorator {
     constructor(coffee) {
       super(coffee);
       this.price = 0.5;
       this.description = "Whipped Cream";
     }
   }

   class CaramelDecorator extends CoffeeAddOnDecorator {
     constructor(coffee) {
       super(coffee);
       this.price = 0.75;
       this.description = "Caramel";
     }
   }

   const coffee = new Coffee();
   console.log(coffee.getDescription()); // Output: Coffee
   console.log(`Price: $${coffee.getPrice()}`); // Output: Price: $2.5

   const coffeeWithWhippedCream = new WhippedCreamDecorator(coffee);
   console.log(coffeeWithWhippedCream.getDescription()); // Output: Coffee, Whipped Cream
   console.log(`Price: $${coffeeWithWhippedCream.getPrice()}`); // Output: Price: $3

   const coffeeWithCaramelAndWhippedCream = new CaramelDecorator(
     coffeeWithWhippedCream
   );
   console.log(coffeeWithCaramelAndWhippedCream.getDescription()); // Output: Coffee, Wh
   ```

1. **Facade Pattern:** The Facade pattern provides a simplified interface to a complex system, making it easier to use and understand. A common example of this is a software library that provides a high-level interface for a complex API, so that users can accomplish common tasks with minimal effort. Here's an example implementation of the Facade pattern in JavaScript:

   ```javascript
   class ComplexSystem {
     constructor() {
       this.subsystem1 = new Subsystem1();
       this.subsystem2 = new Subsystem2();
       this.subsystem3 = new Subsystem3();
     }

     operation1() {
       console.log("ComplexSystem: doing operation1...");
       this.subsystem1.doSomething();
       this.subsystem3.doSomething();
     }

     operation2() {
       console.log("ComplexSystem: doing operation2...");
       this.subsystem2.doSomething();
       this.subsystem3.doSomething();
     }
   }

   class Subsystem1 {
     doSomething() {
       console.log("Subsystem1: doing something...");
     }
   }

   class Subsystem2 {
     doSomething() {
       console.log("Subsystem2: doing something...");
     }
   }

   class Subsystem3 {
     doSomething() {
       console.log("Subsystem3: doing something...");
     }
   }

   class SimpleInterface {
     constructor() {
       this.system = new ComplexSystem();
     }

     doOperation() {
       console.log("SimpleInterface: doing operation...");
       this.system.operation1();
       this.system.operation2();
     }
   }

   const simpleInterface = new SimpleInterface();
   simpleInterface.doOperation();
   ```

1. Flyweight Pattern: The Flyweight pattern is used to minimize the memory usage of large numbers of objects by sharing common data between them. A common example of this is a text editor that has a limited number of fonts available, but needs to display large amounts of text in different styles. Here's an example implementation of the Flyweight pattern in JavaScript:

   ```javascript
   class Text {
     constructor(content, font) {
       this.content = content;
       this.font = font;
     }

     getContent() {
       return this.content;
     }

     getFont() {
       return this.font;
     }
   }

   class TextFactory {
     constructor() {
       this.texts = {};
     }

     createText(content, font) {
       if (!this.texts[font]) {
         this.texts[font] = new Text(content, font);
       }
       return this.texts[font];
     }
   }

   const factory = new TextFactory();
   const text1 = factory.createText("Hello, world!", "Arial");
   const text2 = factory.createText("Lorem ipsum", "Times New Roman");
   const text3 = factory.createText("Dolor sit amet", "Arial");
   console.log(text1.getContent(), text1.getFont()); // Output: Hello, world! Arial
   console.log(text2.getContent(), text2.getFont()); // Output: Lorem ipsum Times New Roman
   console.log(text3.getContent(), text3.getFont()); // Output: Dolor sit amet Arial
   console.log(text1 === text3); // Output: true
   ```

   In this example, the Text class represents a text object with a content and a font property. The TextFactory class provides a flyweight interface to create text objects with different contents but the same font. When a new text object is requested with a specific font, the factory checks if a text object with the same font already exists, and returns it if it does, or creates a new one if it doesn't. This way, text objects with the same font share the same memory space, and the memory usage is minimized.

1. Proxy Pattern: The Proxy pattern is used to provide a placeholder or surrogate for another object to control access to it. A common example of this is a virtual proxy that delays the creation of expensive objects until they are actually needed. Here's an example implementation of the Proxy pattern in JavaScript:

   ```javascript
   class RealImage {
     constructor(filename) {
       this.filename = filename;
       this.loadFromDisk();
     }

     display() {
       console.log(`Displaying ${this.filename}`);
     }

     loadFromDisk() {
       console.log(`Loading ${this.filename} from disk`);
     }
   }

   class ProxyImage {
     constructor(filename) {
       this.filename = filename;
     }

     display() {
       if (!this.image) {
         this.image = new RealImage(this.filename);
       }
       this.image.display();
     }
   }

   const image1 = new ProxyImage("image1.jpg");
   const image2 = new ProxyImage("image2.jpg");
   image1.display(); // Output: Loading image1.jpg from disk\nDisplaying image1.jpg
   image1.display(); // Output: Displaying image1.jpg
   image2.display(); // Output: Loading image2.jpg from disk\nDisplaying image2.jpg
   ```

   In this example, the RealImage class represents a real image object that is loaded from disk when it is created. The ProxyImage class provides a proxy interface to the real image object, delaying the creation of the real image until it is actually needed. When the display method is called on the proxy object, it first checks if the real image object has been created. If it hasn't, it

1. Iterator Pattern: The Iterator pattern is used to provide a standard way to iterate over a collection of items. This pattern is commonly used in JavaScript when working with arrays or other iterable objects. Here's an example implementation of the Iterator pattern in JavaScript:

   ```javascript
   class Iterator {
     constructor(items) {
       this.index = 0;
       this.items = items;
     }

     hasNext() {
       return this.index < this.items.length;
     }

     next() {
       return this.items[this.index++];
     }
   }

   const colors = ["red", "green", "blue"];
   const iterator = new Iterator(colors);

   while (iterator.hasNext()) {
     console.log(iterator.next());
   }
   // Output:
   // red
   // green
   // blue
   ```

1. Strategy Pattern: The Strategy pattern is used to define a family of algorithms, encapsulate each one, and make them interchangeable. This pattern is commonly used in JavaScript when different algorithms need to be applied to the same data. Here's an example implementation of the Strategy pattern in JavaScript:

   ```javascript
   class Context {
     constructor(strategy) {
       this.strategy = strategy;
     }

     executeStrategy(data) {
       return this.strategy.execute(data);
     }
   }

   class StrategyA {
     execute(data) {
       return data.toUpperCase();
     }
   }

   class StrategyB {
     execute(data) {
       return data.toLowerCase();
     }
   }

   const contextA = new Context(new StrategyA());
   console.log(contextA.executeStrategy("Hello World")); // Output: HELLO WORLD

   const contextB = new Context(new StrategyB());
   console.log(contextB.executeStrategy("Hello World")); // Output: hello world
   ```

1. Mediator Pattern: The Mediator pattern is used to define an object that encapsulates how a set of objects interact with each other. This pattern is commonly used in JavaScript when multiple objects need to communicate with each other in a complex way. Here's an example implementation of the Mediator pattern in JavaScript:

   ```javascript
   class Mediator {
     constructor() {
       this.colleagueA = null;
       this.colleagueB = null;
     }

     setColleagueA(colleagueA) {
       this.colleagueA = colleagueA;
     }

     setColleagueB(colleagueB) {
       this.colleagueB = colleagueB;
     }

     send(message, sender) {
       if (sender === this.colleagueA) {
         this.colleagueB.receive(message);
       } else {
         this.colleagueA.receive(message);
       }
     }
   }

   class ColleagueA {
     constructor(mediator) {
       this.mediator = mediator;
     }

     send(message) {
       this.mediator.send(message, this);
     }

     receive(message) {
       console.log(`Colleague A received message: ${message}`);
     }
   }

   class ColleagueB {
     constructor(mediator) {
       this.mediator = mediator;
     }

     send(message) {
       this.mediator.send(message, this);
     }

     receive(message) {
       console.log(`Colleague B received message: ${message}`);
     }
   }

   const mediator = new Mediator();
   const colleagueA = new ColleagueA(mediator);
   const colleagueB = new ColleagueB(mediator);

   mediator.setColleagueA(colleagueA);
   mediator.setColleagueB(colleagueB);

   colleagueA.send("Hello from Colleague A");
   colleagueB.send("Hi there, Colleague A!");
   // Output:
   // Colleague B received message: Hello from Colleague A
   // Colleague A received message: Hi there, Colleague A!
   ```
   In this example, Shape is the abstract prototype class that defines the interface for cloning objects. Rectangle and Circle are the concrete prototype classes that implement the Shape interface and provide implementations for cloning themselves. By using the prototype pattern, we can easily create new objects by cloning existing ones without having to create new objects from scratch.

1. Command Pattern: The Command Pattern is a behavioral pattern that allows us to encapsulate requests or operations as objects, allowing us to parameterize clients with different requests and queue or log requests for later execution. Here's an example in JavaScript:

   ```javascript
   class Command {
     execute() {}
   }

   class TurnOnCommand extends Command {
     constructor(light) {
       super();
       this.light = light;
     }

     execute() {
       this.light.turnOn();
     }
   }

   class TurnOffCommand extends Command {
     constructor(light) {
       super();
       this.light = light;
     }

     execute() {
       this.light.turnOff();
     }
   }

   class Light {
     turnOn() {
       console.log("Turning light on...");
     }

     turnOff() {
       console.log("Turning light off...");
     }
   }

   class RemoteControl {
     constructor() {
       this.commands = [];
     }

     addCommand(command) {
       this.commands.push(command);
     }

     pressButton(index) {
       this.commands[index].execute();
     }
   }

   // Usage
   const light = new Light();
   const turnOnCommand = new TurnOnCommand(light);
   const turnOffCommand = new TurnOffCommand(light);

   const remoteControl = new RemoteControl();
   remoteControl.addCommand(turnOnCommand);
   remoteControl.addCommand(turnOffCommand);

   remoteControl.pressButton(0); // "Turning light on..."
   remoteControl.pressButton(1); // "Turning light off..."
   ```
   In this example, Command is the abstract command class that defines the interface for executing commands. TurnOnCommand and TurnOffCommand are the concrete command classes that implement the Command interface and provide implementations for turning a light on and off, respectively. Light is the receiver object that carries out the commands. RemoteControl is the invoker object that stores and executes the commands. By using the command pattern, we can easily parameterize clients with different requests and queue or log requests for later execution.

1. The Chain of Responsibility Pattern: is a behavioral pattern that allows us to chain together a series of handlers or processors to handle requests or events. Here's an example in JavaScript:

   ```javascript
   class Handler {
     setNext(handler) {}

     handle(request) {}
   }

   class ConcreteHandler1 extends Handler {
     setNext(handler) {
       this.nextHandler = handler;
     }

     handle(request) {
       if (request === "request1") {
         console.log("ConcreteHandler1 handling request1");
       } else {
         this.nextHandler.handle(request);
       }
     }
   }

   class ConcreteHandler2 extends Handler {
     setNext(handler) {
       this.nextHandler = handler;
     }

     handle(request) {
       if (request === "request2") {
         console.log("ConcreteHandler2 handling request2");
       } else {
         this.nextHandler.handle(request);
       }
     }
   }

   class ConcreteHandler3 extends Handler {
     setNext(handler) {
       this.nextHandler = handler;
     }

     handle(request) {
       console.log("ConcreteHandler3 handling any request");
     }
   }

   // Usage
   const handler1 = new ConcreteHandler1();
   const handler2 = new ConcreteHandler2();
   const handler3 = new ConcreteHandler3();

   handler1.setNext(handler2);
   handler2.setNext(handler3);

   handler1.handle("request1"); // "ConcreteHandler1 handling request1"
   handler1.handle("request2"); // "ConcreteHandler2 handling request2"
   handler1.handle("request3"); // "ConcreteHandler3 handling any request"
   ```
   In this example, Handler is the abstract handler class that defines the interface for handling requests. ConcreteHandler1, ConcreteHandler2, and ConcreteHandler3 are the concrete handler classes that implement the Handler interface and handle requests based on their respective conditions. By chaining together the handlers using the setNext() method, we can create a chain of responsibility for handling requests.

1. The Visitor Pattern is a behavioral pattern that allows us to add new operations to existing object structures without modifying those structures. Here's an example in JavaScript:

   ```javascript
   class Visitor {
     visitConcreteElement1(concreteElement1) {}

     visitConcreteElement2(concreteElement2) {}
   }

   class ConcreteVisitor extends Visitor {
     visitConcreteElement1(concreteElement1) {
       console.log("ConcreteVisitor visiting ConcreteElement1");
     }

     visitConcreteElement2(concreteElement2) {
       console.log("ConcreteVisitor visiting ConcreteElement2");
     }
   }

   class Element {
     accept(visitor) {}
   }

   class ConcreteElement1 extends Element {
     accept(visitor) {
       visitor.visitConcreteElement1(this);
     }
   }

   class ConcreteElement2 extends Element {
     accept(visitor) {
       visitor.visitConcreteElement2(this);
     }
   }

   // Usage
   const visitor = new ConcreteVisitor();
   const element1 = new ConcreteElement1();
   const element2 = new ConcreteElement2();

   element1.accept(visitor); // "ConcreteVisitor visiting ConcreteElement1"
   element2.accept(visitor); // "ConcreteVisitor visiting ConcreteElement2"
   ```
   In this example, Visitor is the abstract visitor class that defines the interface for visiting concrete elements. ConcreteVisitor is the concrete visitor class that implements the Visitor interface and provides implementations for visiting concrete elements. Element is the abstract element class that defines the interface for accepting visitors. ConcreteElement1 and ConcreteElement2 are the concrete element classes that implement the Element interface and accept visitors based on their respective types. By using the visitor pattern, we can easily add new operations to existing object structures without modifying those structures.
