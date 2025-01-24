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
                // Install Firefox on Jenkins agent (if it's not already installed)
                sh 'sudo apt-get update && sudo apt-get install -y firefox'
                // Alternatively, install Chrome if you prefer:
                // sh 'sudo apt-get install -y google-chrome-stable'

                // Run the tests with npx cucumber-js (use the appropriate browser)
                sh 'npx cucumber-js features/example_page.feature'
            }
        }
    }
}
