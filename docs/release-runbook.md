# Release Runbook

## Pull request

1. Run application tests.
2. Build the Docker image.
3. Run Terraform formatting and validation.
4. Review the proposed infrastructure changes.

## Release

Images should be tagged with the Git commit SHA so every deployment is traceable to source code.

## Rollback

1. Identify the last known-good image SHA.
2. Update the deployment to that immutable image.
3. Verify the service health endpoint.
4. Inspect CloudWatch logs for errors.
5. Record the incident and follow up with a corrective change.

## Security

Use GitHub Actions OIDC and short-lived AWS credentials. Do not add long-lived AWS access keys to repository secrets.
