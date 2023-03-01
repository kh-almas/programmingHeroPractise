// syntactic sugar

/*
* Prototypical inheritance refers to the ability to access object
* properties from another object. we use a  js prototype to add
* new properties and methods to an existing object constructor.
*/

/*
* The prototype chain?
* _proto_:
*
* prototypal inheritance uses the concept of prototype chaining.
* Let's explore that concept. Every object created contains [[Prototype]]. Which
* points either to another object or null. Envision an object C with a [[Prototype]]
*  property that points to object B. Object B's [[Prototype]] property points to prototype
* object A. this continues onward, forming a kind of chain called the prototype chain.
*
* This concept is used when searching our code. when we need to find a property in an
* object, it is first searched for in the object, and if not found, it is searched for
* on that object's prototype, and so on. Thus, the entire prototype chain is traversed
* until the property is found or null is reached.
 */


class teamMember
{
    name;
    location;
    constructor(name, location)
    {
        this.name = name;
        this.location = location;
    }
    //method
    feedback()
    {
        console.log(`${this.name} thank you for your feedback`)
    }
}
class Instructor extends teamMember{

    designation = 'web course instructor';
    team = 'web team';
    constructor(name, location)
    {
        // pass the value in parent class by super keyword
        super(name, location);
    }
    //method
    startSupportSession(time)
    {
        console.log(`start the support session at ${time}`);
    }
    //method
    createQuiz(module)
    {
        console.log(`please create quiz for module ${module}`);
    }
}

class developer extends teamMember{
    designation = 'web course instructor';
    team = 'web team';
    tech;
    constructor(name, location, tech)
    {
        super(name, location);
        this.tech = tech;
    }
    //method
    developFeature(frature)
    {
        console.log(`please develop the ${frature}`);
    }
    //method
    release(version)
    {
        console.log(`please release the version ${version}`);
    }
}

const data = new Instructor('almas', 'badda');
console.log(data);
data.startSupportSession('3 am');
data.createQuiz(30);
data.feedback();

const data2 = new developer('dalia', 'kuril');
console.log(data2);
data2.developFeature('laravel');
data2.release(10);
data2.feedback();