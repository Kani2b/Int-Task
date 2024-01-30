pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build("kani2b/simple-web-app:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
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
            echo "Pipeline succeeded! Docker image pushed to Docker Hub."
        }
        failure {
            echo "Pipeline failed."
        }
    }
}


