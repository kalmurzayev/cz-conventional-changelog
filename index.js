"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = {
  "types": {
    "feat": {
      "description": "A new feature"
    },
    "fix": {
      "description": "A bug fix"
    },
    "docs": {
      "description": "Documentation only changes"
    },
    "refactor": {
      "description": "A code change that neither fixes a bug nor adds a feature"
    },
    "test": {
      "description": "Adding missing tests or correcting existing tests"
    },
    "build": {
      "description": "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)"
    },
    "misc": {
      "description": "Other changes that don't modify src or test files"
    }
  }
};

module.exports = engine({
  types: conventionalCommitTypes.types
});
