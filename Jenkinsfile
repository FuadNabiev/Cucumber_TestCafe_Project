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
                // Manually download and install Firefox (without using sudo)
                sh 'wget -qO- https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US | tar xj -C /home/jenkins/firefox'

                // Ensure the Firefox binary is available
                sh 'export PATH=$PATH:/home/jenkins/firefox/firefox'

                // Run the tests with the correct browser
                sh 'npx cucumber-js --browsers "firefox" features/example_page.feature'
            }
        }
    }
}
