require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('./src/App').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://lilgreekkitchen.com')
          .save('./public/sitemap.txt')
  );