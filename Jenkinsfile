pipeline {
    agent any
    stages {
        stage('Firefox') { 
            steps {
                sh 'sudo apt-get update'
                sh 'sudo apt-get install -y firefox'
            }
        }
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