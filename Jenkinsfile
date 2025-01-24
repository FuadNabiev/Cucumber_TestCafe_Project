pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh './node_modules/.bin/cucumber-js.cmd'
            }
        }
    }
}