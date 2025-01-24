pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm i firefox'
            }
        }
        stage('Test') {
            steps {
                sh 'npx cucumber-js features/example_page.feature'
            }
        }
    }
}