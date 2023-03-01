// syntactic sugar

class Instructor{
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;

    constructor(name, location)
    {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time)
    {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module)
    {
        console.log(`please create quiz for module ${module}`);
    }

}

const data = new Instructor('almas', 'badda');
console.log(data);
data.startSupportSession('3 am');
data.createQuiz(30);