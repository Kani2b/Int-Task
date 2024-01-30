pipeline {
    agent any

    environment {
        // Define environment variables if needed
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from version control
                script {
                    checkout scm
                }
            }
        }

        stage('Build') {
            steps {
                // Build the Docker image
                script {
                    docker.build("kani2b/simple-web-app:${env.BUILD_NUMBER}")
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                // Push the Docker image to Docker Hub
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("kani2b/simple-web-app:${env.BUILD_NUMBER}").push()
                    }
                }
            }
        }
    }

    post {
        success {
            // Notify on success, you can add additional steps here
            echo "Pipeline succeeded! Docker image pushed to Docker Hub."
        }
        failure {
            // Notify on failure, you can add additional steps here
            echo "Pipeline failed."
        }
    }
}

