Jenkinsfile (Declarative Pipeline)

pipeline {
    agent { docker { image 'node:8.10' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm install'
            }
        }
    }
}


