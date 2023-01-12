function parent(){
    const message = 'Hello World';

    function child(){
        alert (message);
    }

    child();
}

function parent2(){
    const message = 'Hello World2';

    function child(){
        alert (message);
    }
    return child;
}

parent();

const childFn = parent2();
childFn();

