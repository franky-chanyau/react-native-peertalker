const fs = require("fs");
const path = require("path");
const {
  androidManifestPath,
  iosProjectPath,
  windowsProjectPath,
} = require("react-native-test-app");

module.exports = {
  project: {
    android: {
      sourceDir: "android",
      manifestPath: androidManifestPath(path.join(__dirname, "android")),
    },
    ios: {
      project: iosProjectPath("ios"),
    },
    windows: fs.existsSync("windows/PeertalkerExample.sln") && {
      sourceDir: "windows",
      solutionFile: "PeertalkerExample.sln",
      project: windowsProjectPath(path.join(__dirname, "windows")),
    },
  },
};
