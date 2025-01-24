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
                sh 'apt-get update'
                sh 'apt-get install -y firefox'
                sh 'npx cucumber-js features/example_page.feature'
            }
        }
    }
}