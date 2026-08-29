# AWS CI/CD with GitHub Actions

A production-style CI/CD pipeline that builds, tests, containerizes, and prepares an application for deployment to AWS.

## Pipeline

```text
Developer
   |
   v
GitHub Pull Request
   |
   +--> Terraform validation
   |
   +--> Application tests
   |
   v
Merge to main
   |
   v
Docker Build
   |
   v
Amazon ECR
   |
   v
Amazon ECS / Fargate
   |
   v
CloudWatch
```

## What this demonstrates

- GitHub Actions CI/CD
- Pull-request quality gates
- Docker image builds
- Amazon ECR image registry
- ECS/Fargate deployment pattern
- AWS OIDC authentication pattern
- Terraform validation
- Environment variables and secrets management
- CloudWatch-oriented operational monitoring

## Repository Structure

```text
.
├── app/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── versions.tf
├── .github/workflows/
│   ├── ci.yml
│   └── deploy.yml
├── docs/
│   └── pipeline.md
├── .dockerignore
├── .gitignore
└── README.md
```

## Security

The workflow is designed around GitHub Actions OIDC rather than storing long-lived AWS access keys as GitHub secrets. Deployment permissions should be scoped to only the AWS resources required by the pipeline.

Never commit AWS credentials or application secrets.

## Local application test

```bash
cd app
npm install
npm test
npm start
```

## Deployment design

The pipeline validates code on pull requests. A merge to `main` triggers the production deployment workflow. The image is tagged with the commit SHA so releases are traceable and rollback can target a known immutable image.

Before enabling real AWS deployment, configure an AWS IAM OIDC trust relationship for GitHub Actions and repository/environment variables with least-privilege permissions.

## Production Improvements

- Add staging and production environments
- Require reviewer approval for production
- Add vulnerability scanning for container images
- Add Terraform plan comments to pull requests
- Use ECS blue/green or rolling deployments
- Add automated rollback on failed health checks
- Add CloudWatch alarms and dashboards

## Technologies

GitHub Actions · Docker · AWS ECR · AWS ECS/Fargate · Terraform · Node.js · CloudWatch · OIDC
