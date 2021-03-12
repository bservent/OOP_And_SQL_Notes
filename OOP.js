//Object Oriented Programming
//data before action (data types or structures made before functions)
//procedural programming = opposite (actions or funcitons before data)

//OOP languages = (static) Java, C#, C++, (Dynamic) javascript, python, ruby
//javascript uses prototypical inheritance where most other languages use class base inheritance
// class = data type definition
//class is made up of fields and methods = blueprint for instance or objects or piece of data(hence OOP)
//fields = data members = data that makes up type = ex: cat weight
//methods = function assoc with class, one copy of method used in class (instances have own copy of fields but share methods universally with class they were instantiated from)


//Encapsulation
//feilds of object should only be read by thus instance by invoking methods
//methods encapsulate all knowledge of data that makes up class = easily modularized code
//sphagetti code = code not encapsulized therefore is being invoked from different places = hard to work with
//public (visible anywhere) vs. private (visible only to methods of own type)
//all fields should be private, methods can be either


//Inheritance
//data type may inlcude all other members from another type
//ex: animal, mammal, cat = cat inherits from mammal, mammal inheritance from animal 
//benefits of inheritance come when you have to extend a class functionality and dont have to create the entire class with methods/fields because you already have inherited class functionality

//is-a vs has-a = ex of is-a = cat is a mammal, has-a = car has a steering wheel
//is-a then use inheritance
//has-a then don't use inheritance

//multiple inheritance = simplicity vs. complexity (not all languages have the capability)
//circular inheritance = NOT ALLOWED
//every class inherits from another class or object

//Overriding = redifining an inherited method
//object.method(args)
//methods refer to specific class therefore type of object is used to find method that needs to be changed
//x.foo() = polymorphism: depends upon type of x

//Class Member = member of class itself, not its instances
//class.field = global variable within class (not OOP but procedural)
//class.method(args) = procedural function within class (not OOP but procedural)

//Constructor= sets up an instance at its creation

//Interface = two differenct classes share methods
//interact with object in same way

//Abstract Class = ex: mammal extend to dog and cat
//a class which cannot be instatiated

//Prototypical inheritance = OOP w/o classes: producing child instances form parent instances

