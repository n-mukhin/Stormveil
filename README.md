# Stormveil

A cutting-edge Node.js GraphQL application that provides system metrics, packaged in Docker and deployed in Kubernetes with support for autoscaling. Integrated with CI/CD using GitHub Actions.

## Features

- **GraphQL API**: Fetch live system metrics such as CPU load, memory usage, and uptime.
- **Dockerized Deployment**: Built using a multi-stage Dockerfile for optimized image size.
- **Kubernetes Ready**: Includes Deployment, Service, Ingress, and Horizontal Pod Autoscaler manifests.
- **Autoscaling**: Kubernetes HPA dynamically adjusts the number of pods based on CPU usage.
- **CI/CD Pipeline**: GitHub Actions automate building, pushing Docker images, and deploying to Kubernetes.

## Instructions

```bash
# Build the Docker image
docker build -t <username>/stormveil:latest .

# Run the container locally
docker run -p 3000:3000 <username>/stormveil:latest

# Open the application in your browser
# http://localhost:3000/graphql

# Deploy to Kubernetes
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml

# Configure CI/CD
# Set the following secrets in your GitHub repository:
# CR_PAT: Personal Access Token for container registry authentication
# KUBECONFIG: Base64-encoded kubeconfig file for your cluster
