const {prompt} = require('inquirer')
const fs = require('fs')
const {questions} = require('./folder1')
 
function promptTheUser(){
    prompt(questions).then(({feeling}) => {
        console.log(`you are feeling ${feeling} today`)
    })
}

promptTheUser()