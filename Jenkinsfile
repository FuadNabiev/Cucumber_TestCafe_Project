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
                        // Clean and reinstall node_modules
                        sh 'rm -rf node_modules package-lock.json'
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    dir("${WORK_DIR}") {
                        // Run the tests with npx
                        sh 'npx cucumber-js features/example_page.feature'
                    }
                }
            }
        }
    }
}
