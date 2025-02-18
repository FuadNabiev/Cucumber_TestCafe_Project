
const {setWorldConstructor} = require('cucumber');
const testControllerHolder = require('./testControllerHolder');

function CustomWorld() {

    this.waitForTestController = testControllerHolder.get()
        .then(function(tc) {
            return testController = tc;
        });
}
setWorldConstructor(CustomWorld);