const settings = [
  {
    "name": "multilanguage-en",
    "state": {
      "frontity": {
        "url": "https://alejandro.inmo.cloud/",
        "title": "Test Frontity Blog ENGLISH",
        "description": "WordPress installation for Frontity development"
      }
    },
    "packages": [
      {
        "name": "@frontity/mars-theme",
        "state": {
          "theme": {
            "lang": "en",
            "menu": [
              {
                "name": "Home ENG",
                "url": "/",
              },
              {
                "name": "Page Test ENG",
                "url": "/page/",
              },
              {
                "name": "Post ENG",
                "url": "/hello-world/"
              },
              {
                "name": "|",
                "url": "#"
              },
              {
                "languages": [{ "lang": "ESP", "url": "/es/" }],
              },
              {
                "name": "|",
                "url": "#"
              },
              {
                "name": "Home ES",
                "url": "/es/"
              },
              {
                "name": "Page Test ES",
                "url": "/es/page/"
              },
              {
                "name": "Post ES",
                "url": "/es/hello-world/"
              },

            ],
            "featured": {
              "showOnList": false,
              "showOnPost": false
            }
          }
        }
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "api": "https://alejandro.inmo.cloud/multilenguage/wp-json",
            "homepage": "homepage",
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react"
    ]
  },

  //SPANISH VERSION
  {
    "name": "multilanguage-es",
    "match": [".*localhost:3000/es(\/.*)?$"],
    "state": {
      "frontity": {
        "url": "https://alejandro.inmo.cloud/es/",
        "title": "Test Frontity Blog ESPAÑOL",
        "description": "WordPress instalacion en frontity"
      }
    },
    "packages": [
      {
        "name": "@frontity/mars-theme",
        "state": {
          "theme": {
            "lang": "es",
            "menu": [

              {
                "name": "Home ENG",
                "url": "/",
              },
              {
                "name": "Page Test ENG",
                "url": "/page/",
              },
              {
                "name": "Post ENG",
                "url": "/hello-world/"
              },
              {
                "name": "|",
                "url": "#"
              },
              {
                "languages": [{ "lang": "ENG", "url": "/en/" }],
              },
              {
                "name": "|",
                "url": "#"
              },
              {
                "name": "Home ES",
                "url": "/es/"
              },
              {
                "name": "Page Test ES",
                "url": "/es/page/"
              },
              {
                "name": "Post ES",
                "url": "/es/hello-world/"
              },


            ],
            "featured": {
              "showOnList": false,
              "showOnPost": false
            }
          }
        }
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "api": "https://alejandro.inmo.cloud/multilenguage/es/wp-json",
            "homepage": "homepage",
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react"
    ]
  }

];

export default settings;
