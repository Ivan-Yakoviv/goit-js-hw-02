function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return "File extension matches";
  }
  else {
    return "File extension does not match";
  }
}

// checkFileExtension("index.html", ".css");
console.log(checkFileExtension("index.html", ".html"));