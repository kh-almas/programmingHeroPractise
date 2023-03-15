monitor(functionName); // function called list
unmonitor(functionName); //stop monitoring

monitorEvents(htmlClassOrIdName); // for monitor everything
unmonitorEvents(htmlClassOrIdName); //stop monitoring

monitorEvents(htmlClassOrIdName, ['click', 'mouseout']); // for monitor click ank hover
unmonitorEvents(htmlClassOrIdName); //stop monitoring

const products = [
    {id: 1, name: 'mobile', price: 40000},
    {id: 1, name: 'tablet', price: 60000},
    {id: 1, name: 'laptop', price: 80000},
    {id: 1, name: 'desktop', price: 90000}

];
console.table(products) // array of object view in table format
console.table(products, ['id', 'name']);

// see run time
console.time()
console.timeEnd()