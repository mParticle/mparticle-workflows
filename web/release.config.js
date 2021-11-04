// This is a semantic-release config file that the mParticle JS SDK ecosystem uses as part of its release process.

module.exports = {
  branches: ["master"],
  tagFormat: "v${version}",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "angular",
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    ["@semantic-release/npm"],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "sh generate-bundle-and-commit.sh",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: ["dist"],
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
