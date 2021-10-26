<img src="https://static.mparticle.com/sdk/mp_logo_black.svg" width="280">

## mparticle-workflows

Hello! This is a public repository for mParticle's reusable GitHub workflows that we share across our SDKs and Kits for our CI builds.

More info on GitHub reusable workflows: https://github.blog/changelog/2021-10-05-github-actions-dry-your-github-actions-configuration-by-reusing-workflows/

#### Usage

In a child repository, you can reference the shared reusable workflow like this:

```yaml
job-name:
    name: "Check PR for correct target branch"
    uses: mParticle/mparticle-workflows/.github/workflows/pr-branch-target-gitflow.yml@stable
```
    
#### 1) Please bump up the stable git tag when appropiate.  We use alpha/beta tags for testing. 
#### 2) New yml/yaml workflow files need to be created in .github/workflows folder in order to function. 
