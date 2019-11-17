"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = {
  "types": {
    "feat": {
      "description": "Adding new functionality"
    },
    "fix": {
      "description": "Fixing something"
    },
    "refactor": {
      "description": "A code change that neither fixes a bug nor adds a feature"
    },
    "test": {
      "description": "Adding missing tests or correcting existing tests"
    },
    "docs": {
      "description": "Documentation only changes"
    },
    "build": {
      "description": "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)"
    }
  }
};

module.exports = engine({
  types: conventionalCommitTypes.types
});
