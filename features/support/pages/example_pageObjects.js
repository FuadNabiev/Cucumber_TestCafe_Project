
const {Selector} = require('testcafe');

exports.elements = {
    nameTxtBox: function() {
        return Selector('#developer-name').with({ boundTestRun: testController });
    },
    interfaceMenu: function() {
        return Selector('#preferred-interface').with({ boundTestRun: testController });
    },
    testCafeCheckBox: function() {
        return Selector('#tried-test-cafe').with({ boundTestRun: testController });
    },
    descriptionTxtBox: function() {
        return Selector('#comments').with({ boundTestRun: testController });
    },
    submitBtn: function() {
        return Selector('#submit-button').with({ boundTestRun: testController });
    },
    messageElement: function() {
        return Selector('#article-header').with({ boundTestRun: testController });
    }
}