module.exports = {
  scripts: {
    serve: {
      default: "vite --open",
      description: "start development server",
    },
    build: {
      default: "tsc && vite build",
      description: "build production files",
    },
    test: {
      default: "vitest",
      description: "run unit tests",
    },
    preview: {
      default: "vite preview --open",
      description: "start development server and preview production files",
    },
    lint: {
      default: "eslint .",
      description: "lint source code",
    },
    stylelint: {
      default: "stylelint '**/*.{css,scss}'",
      description: "lint style files CSS and SCSS",
    },
    format: {
      default:
        "prettier --write . && eslint --fix . && stylelint --fix '**/*.{css,scss}'",
      description:
        "format source code with prettier and fix fixable lint rules",
    },
  },
};
