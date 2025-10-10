pipeline {
    agent any

    environment {
        FRONTEND_REPO = 'https://github.com/Noorulain-annie/resturnant-miletap.git'
        CYPRESS_REPO = 'https://github.com/SabeehNoshad/hotelManagmentcypress.git'
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
                    bat 'npm install -f'  
                }
            }
        }

        stage('Start Frontend Server') {
            steps {
                dir("${FRONTEND_DIR}") {
                    echo 'Starting frontend server in background...'
                    bat 'start /B cmd /C "npm start"'
                    // Wait for app to boot
                    sleep(time: 50, unit: 'SECONDS')
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
                    bat 'npm ci'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                dir("${CYPRESS_DIR}") {
                       bat 'rmdir /s /q allure-results || exit 0'
                     bat 'mkdir allure-results'
                    echo 'Running Cypress tests...'
                    bat "npx cypress run --config baseUrl=http://localhost:${FRONTEND_PORT}  --env allure=true --headless --reporter mocha-allure-reporter || exit 0"
                }
            }
        }
         stage('Publish Allure Report') {
            steps {
              //  bat 'npx allure generate --clean'
                //  bat 'npx allure generate allure-results --clean '
                  bat 'allure generate allure-results --clean -o allure-report'
               //   bat 'allure generate allure-results --clean -o allure-report'
               //   bat 'allure open allure-report'
                script {
                    // Ensure this method is approved in Script Approval
                    allure([
                        includeProperties: false,
                        jdk: '',
                        results: [[path: 'allure-results']]
                    ])
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
