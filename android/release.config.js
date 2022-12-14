module.exports = {
  branches: ["main"],
  tagFormat: "v${version}",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
            {type: 'feat', release: 'minor'},
            {type: 'build', release: 'minor'},
            {type: 'chore', release: 'patch'},
            {type: 'ci', release: 'patch'},
            {type: 'docs', release: 'patch'},
            {type: 'fix', release: 'patch'},
            {type: 'refactor', release: 'patch'},
            {type: 'revert', release: 'patch'},
            {type: 'test', release: 'patch'}
       ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              "type": "feat",
              "section": "Features",
              "hidden": false
            },
            {
              "type": "build",
              "section": "Features",
              "hidden": false
            },
            {
              "type": "chore",
              "section": "Updates & Maintenance",
              "hidden": false
            },
            {
              "type": "ci",
              "section": "Updates & Maintenance",
              "hidden": false
            },
            {
              "type": "docs",
              "section": "Documentation",
              "hidden": false
            },
            {
              "type": "fix",
              "section": "Bug Fixes",
              "hidden": false
            },
            {
              "type": "refactor",
              "section": "Updates & Maintenance",
              "hidden": false
            },
            {
              "type": "revert",
              "section": "Updates & Maintenance",
              "hidden": false
            },
            {
              "type": "test",
              "section": "Updates & Maintenance",
              "hidden": false
            }
          ]
        }
      }
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "sh ./scripts/release.sh ${nextRelease.version}",
      },
    ],
    ["@semantic-release/github"],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "build.gradle", "README.md"],
        message:
          "chore: ${nextRelease.version} (release) \n\n${nextRelease.notes}",
      },
    ],
  ],
};