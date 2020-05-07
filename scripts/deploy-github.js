const ghpages = require("gh-pages")

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/Pravash2/cvrce",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
