module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-enum": [
        2,
        "always",
        [
          // bug fix ve ya yeni feature olmadiqda
          "refactor",
          // build system-e ve dependencylere deyishiklikler olduqda
          "build",
          // bug fix olunduqda
          "fix",
          // yeni feature olduqda
          "feat",
          // bashqa deyishiklikler
          "chore",
        ],
      ],
      "scope-enum": [
        2,
        "always",
        [
          // umumi deishiklikler
          "common",
          // melumatlandirma
        ]
      ],
      "scope-empty": [1, "never"],
    },
  };
  