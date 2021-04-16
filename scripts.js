function listener(eventName, callback) {
    const clickEventObject = {
        name: 'soy un clic',
        value: 'soy un valor'
    }

    const loadEventObject = {
        name: 'soy un load',
        value: 'soy un valor'
    }

    if (eventName === 'clic') {
        callback(clickEventObject);
    } else if (eventName === 'load') {
        callback(loadEventObject)
    }
}

listener('load', function (pepe) {
    console.log(pepe)
});

listener('clic', function (event) {
    console.log(event);
})

