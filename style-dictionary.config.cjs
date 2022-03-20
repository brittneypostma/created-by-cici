module.exports = {
  "source": ["src/lib/styles/tokens/**/*.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "buildPath": "src/lib/styles/",
      "files": [{
        "destination": "_variables.css",
        "format": "css/variables"
      }]
    }
  }
}