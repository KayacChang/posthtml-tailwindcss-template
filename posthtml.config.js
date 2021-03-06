const headElements = {
  meta: [
    {
      charset: "utf-8",
    },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge",
    },
    {
      name: "description",
      content:
        "A front-end template that helps you build fast, modern mobile web apps.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  title: "Web Starter Kit",
};

module.exports = {
  plugins: [
    require("posthtml-include")({ root: "src" }),
    require("posthtml-expressions")({}),
    require("posthtml-head-elements")({ headElements }),
  ],
};
