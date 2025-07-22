module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [0],

    "type-enum": [
      2,
      "always",
      ["init", "feat", "fix", "refactor", "test", "chore", "docs", "design", "rename", "remove"]
    ]
  }
};
