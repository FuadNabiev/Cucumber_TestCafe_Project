pipeline {
    agent any
    environment {
        WORK_DIR = 'Cucumber_TestCafe_Project'
    }
    stages {
        stage('Build') { 
            steps {
                script {
                    dir("${WORK_DIR}") {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    dir("${WORK_DIR}") {
                        // Use npx to ensure cucumber-js is executed correctly
                        sh 'npx cucumber-js'
                    }
                }
            }
        }
    }
}