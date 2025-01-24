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
                        // Specify the feature file to run
                        sh 'npx cucumber-js features/example_page.feature'
                    }
                }
            }
        }
    }
}
