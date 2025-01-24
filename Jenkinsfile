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
                sh 'testcafe --list-browsers'
                sh 'npx cucumber-js features/example_page.feature'
            }
        }
    }
}