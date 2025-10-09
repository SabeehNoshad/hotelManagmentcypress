pipeline {
    agent any

    environment {
        FRONTEND_REPO = 'https://github.com/yourusername/frontend-repo.git'
        CYPRESS_REPO = 'https://github.com/yourusername/cypress-tests.git'
        FRONTEND_DIR = 'frontend'
        CYPRESS_DIR = 'cypress'
        FRONTEND_PORT = '3000'
    }

    stages {
        stage('Checkout Frontend') {
            steps {
                echo 'Cloning frontend repository...'
                dir("${FRONTEND_DIR}") {
                    git branch: 'main', url: "${FRONTEND_REPO}"
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir("${FRONTEND_DIR}") {
                    bat 'npm install'  // use 'sh' instead if Linux
                }
            }
        }

        stage('Start Frontend Server') {
            steps {
                dir("${FRONTEND_DIR}") {
                    echo 'Starting frontend server in background...'
                    bat 'start /B cmd /C "npm start"'
                    // Wait for app to boot
                    sleep(time: 20, unit: 'SECONDS')
                }
            }
        }

        stage('Checkout Cypress Tests') {
            steps {
                echo 'Cloning Cypress test repository...'
                dir("${CYPRESS_DIR}") {
                    git branch: 'main', url: "${CYPRESS_REPO}"
                }
            }
        }

        stage('Install Cypress Dependencies') {
            steps {
                dir("${CYPRESS_DIR}") {
                    bat 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                dir("${CYPRESS_DIR}") {
                    echo 'Running Cypress tests...'
                    bat "npx cypress run --config baseUrl=http://localhost:${FRONTEND_PORT}"
                }
            }
        }
    }

    post {
        always {
            echo 'Killing any Node processes (cleanup)...'
            bat 'taskkill /F /IM node.exe || exit 0'

            echo 'Pipeline finished.'
        }
    }
}
