var array = [{ value: 1200303 }, { value: 0 }, { value: 0 }];
array.reduce((pre, cur) => pre + cur.value, 0);

var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
);


// 原始数据
const menuList = [
  {
    key: "/developer/blocklets",
    group: "developer",
    component: "SettingsBlockletListPage",
  },
  {
    key: "/developer/access-tokens",
    group: "developer",
    component: "SettingsAccessTokenPage",
  },
  {
    key: "/admin/apply",
    group: "admin",
    component: "AdminApplyPage",
  },
  {
    key: "/admin/developers",
    group: "admin",
    component: "AdminDeveloperPage",
  },
];
// 期望得到的
finalList = [
  {
    group: "developer",
    children: [
      {
        key: "/developer/blocklets",
        group: "developer",
        component: "SettingsBlockletListPage",
      },
      {
        key: "/developer/access-tokens",
        group: "developer",
        component: "SettingsAccessTokenPage",
      },
    ],
  },
];


// 验证是否全部含有 meta 字段

const tabList=[
  {
    "did": "z8iZxKtyeGLaXH4LkQ7Dxk7D86i1M1gQvfjVx",
    "meta": {
      "author": {
        "email": "zhanghan@arcblock.io",
        "name": "zhanghan"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [],
      "community": "",
      "description": "Helps users clean their DID WALLET backup file of unwanted data",
      "did": "z8iZxKtyeGLaXH4LkQ7Dxk7D86i1M1gQvfjVx",
      "dist": {
        "integrity": "sha512-2gFOEZDttHI0Kc+TXI1Mj0DKI3xatYvd+xOA7+Gq+x9Uk/0v0r+2JSDJo+VCm/djZa1ZvvUlgfq+hQtHCdWfdw==",
        "tarball": "clean-wallet-web-1.2.6.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "https://beta.abtnetwork.io/api/",
          "description": "What's endpoint of the chain?",
          "name": "CHAIN_HOST",
          "required": true,
          "secure": false
        }
      ],
      "files": [
        "build",
        "logo.png",
        "README.md",
        "blocklet.md",
        "screenshots",
        "server/hooks/pre-start.js"
      ],
      "gitHash": "10def476a0baf05a5438d59f36f7c0bb696418ac",
      "group": "dapp",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "type": "web"
        }
      ],
      "keywords": [
        "blocklet",
        "react"
      ],
      "license": "",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "clean-wallet-web",
      "nftFactory": "",
      "path": "/dapp/clean-wallet-web",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/blocklet/create-blocklet.git"
      },
      "requirements": {
        "abtnode": ">=1.4.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "upload.png",
        "password.png",
        "download.png"
      ],
      "scripts": {
        "dev": "npm run start"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-07T09:21:19.052Z",
          "sig": "z4iK3QRaw8sWKNCwvjC9eVWTtgXsAJkE4DuWgWhkFJagpY3z6AQZKx2jomXg2U14fNHP1MdYkh6eU1uprW1D9iCen"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-07T09:21:18.012Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "clean-wallet-web",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z2Y82QhW4EJ8VJMF8Tyj2Q153d3cNRjQLJtHkd52PLK5vEY6HrE32ZHb6VDPnJXwzy8i9n8iMggxwYsUEEKT7LJ5i"
        },
        {
          "created": "2022-03-07T06:42:55.157Z",
          "name": "clean-wallet-web",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z5LctdKmeYqTdK1HHxHFktkDffxJunWVSpJAJ3JudTn8mR3HvWKY2j2HRV8cPKRiFLuWuyYfiLE2G8FchLcgNWXnf",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "timeout": {
        "start": 60
      },
      "title": "Clean Wallet",
      "version": "1.2.6"
    },
    "owner": {
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "draftVersion": null,
    "currentVersion": {
      "did": "z8iZxKtyeGLaXH4LkQ7Dxk7D86i1M1gQvfjVx",
      "version": "1.2.6",
      "uploadedAt": "2022-03-07T06:42:56.993Z",
      "_id": "ljlXQBv9PkrZPXCA",
      "createdAt": "2022-03-07T06:42:56.996Z",
      "updatedAt": "2022-03-07T06:42:56.996Z"
    },
    "latestVersion": {
      "did": "z8iZxKtyeGLaXH4LkQ7Dxk7D86i1M1gQvfjVx",
      "version": "1.2.6",
      "uploadedAt": "2022-03-07T06:42:56.993Z",
      "_id": "ljlXQBv9PkrZPXCA",
      "createdAt": "2022-03-07T06:42:56.996Z",
      "updatedAt": "2022-03-07T06:42:56.996Z"
    },
    "status": "normal",
    "_id": "ZIQQgzPsk9Vu3AJU",
    "createdAt": "2022-03-01T03:52:39.241Z",
    "updatedAt": "2022-03-18T01:32:17.817Z",
    "lastPublishedAt": "2022-03-07T09:21:19.071Z",
    "category": {
      "name": "productivity",
      "locales": {
        "zh": "生产工具",
        "en": "Productivity"
      },
      "_id": "Rke1R5ffuAuDhZJ6",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "stats": {
      "downloads": 19
    },
    "permission": "Public"
  },
  {
    "did": "z8iZjxpWYaUfvrHPY1uYe6m7a3L6ZY3V4EYgQ",
    "meta": {
      "name": "clean-wallet",
      "title": "clean-wallet"
    },
    "owner": {
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "draftVersion": {
      "did": "z8iZjxpWYaUfvrHPY1uYe6m7a3L6ZY3V4EYgQ",
      "version": "1.0.2",
      "uploadedAt": "2022-02-26T09:44:32.618Z",
      "_id": "WqgtrSnzcAeisgUm",
      "createdAt": "2022-02-26T09:44:32.638Z",
      "updatedAt": "2022-02-26T09:44:32.638Z"
    },
    "currentVersion": null,
    "latestVersion": {
      "did": "z8iZjxpWYaUfvrHPY1uYe6m7a3L6ZY3V4EYgQ",
      "version": "1.0.2",
      "uploadedAt": "2022-02-26T09:44:32.618Z",
      "_id": "WqgtrSnzcAeisgUm",
      "createdAt": "2022-02-26T09:44:32.638Z",
      "updatedAt": "2022-02-26T09:44:32.638Z"
    },
    "status": "blocked",
    "_id": "ktELGS2jKacYSCgr",
    "createdAt": "2022-02-25T10:55:31.857Z",
    "updatedAt": "2022-03-01T22:40:58.162Z",
    "category": null,
    "permission": "Public"
  },
  {
    "did": "z8ia1Qx3edFD1ju6U7usk6wR8QBWoc6VUkmRQ",
    "meta": {
      "author": {
        "email": "xwgu007@gmail.com",
        "name": "NateRobinson"
      },
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "",
      "description": "一款基于 Blocklet Server 打造的去中心化薪资发放管理工具",
      "did": "z8ia1Qx3edFD1ju6U7usk6wR8QBWoc6VUkmRQ",
      "dist": {
        "integrity": "sha512-qSyKgyEIOfEaz9r7ibfWnvonrCfkCQIWzb1i1+7bGMzNsBGx9+OmMuOsZVZIrd2MsNN6x77vJVDypXqkWnh61g==",
        "tarball": "wage-assistant-0.1.1.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "beta",
          "description": "What's endpoint of the chain id?",
          "name": "CHAIN_ID",
          "required": true,
          "secure": false
        },
        {
          "default": "https://beta.abtnetwork.io/api/",
          "description": "What's endpoint of the chain?",
          "name": "CHAIN_HOST",
          "required": true,
          "secure": false
        },
        {
          "default": "eth",
          "description": "Blocklet wallet type must be set to eth",
          "name": "BLOCKLET_WALLET_TYPE",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "evm chain id, mainnet is 1, rinkeby is 4...",
          "name": "EVMCHAIN_ID",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "RPC url for web3 provider",
          "name": "RPC_URL",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "ERC20 Token Address",
          "name": "ERC20_TOKEN_ADDRESS",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "ERC20 Token Symbol",
          "name": "ERC20_TOKEN_SYMBOL",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "ERC20 Token Decimal",
          "name": "ERC20_TOKEN_DECIMAL",
          "required": true,
          "secure": false
        }
      ],
      "files": [
        "build",
        "logo.png",
        "README.md",
        "blocklet.md",
        "screenshots",
        "server/hooks/pre-start.js"
      ],
      "gitHash": "268b95c67f4c0f7adab65b0896fad279e46a5ab9",
      "group": "dapp",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "services": [
            {
              "config": {
                "blockUnauthenticated": true,
                "ignoreUrls": [
                  "/api/**"
                ],
                "invitedUserOnly": "not-first"
              },
              "name": "@abtnode/auth-service"
            }
          ],
          "type": "web"
        }
      ],
      "keywords": [
        "blocklet",
        "react"
      ],
      "license": "",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "wage-assistant",
      "nftFactory": "z3CtLcXGB3eDzMgBby6LrEd3Lwcc2YMBsUoiC",
      "path": "/dapp/wage-assistant",
      "payment": {
        "price": [
          {
            "address": "z35nNRvYxBoHitx9yZ5ATS88psfShzPPBLxYD",
            "value": 6.66,
            "symbol": "ABT"
          }
        ],
        "share": [
          {
            "address": "z1gShFYDsiMfGtaerBTh2ydu75768xMYPQU",
            "name": "developer",
            "value": 0.7
          },
          {
            "address": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
            "name": "store",
            "value": 0.3
          }
        ]
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/NateRobinson/wage-assistant.git"
      },
      "requirements": {
        "abtnode": ">=1.4.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [],
      "scripts": {
        "dev": "npm run start",
        "preStart": "node server/hooks/pre-start.js"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-02-05T07:30:55.166Z",
          "sig": "z2eUWJFu3KS5EKKaVEbwq53jGMJ2dMCTCY3e1SCZwSzWdTzGZXVaNuzywbiV4JjwtjCBL8Scddnjy76u3VhvEM3Cq"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-02-05T07:30:49.899Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "wage-assistant",
          "pk": "z2UJYKL1BwBEn1mYCZGRbzRXzv28JAzoPBr7cUzkn8ih7",
          "signer": "z1gShFYDsiMfGtaerBTh2ydu75768xMYPQU",
          "type": "ED25519",
          "sig": "z3u1qvcqBbyHZEhUdgujApWBFgUHTdrR4UudrLk41RYCEttcARZBMvtqK793NVuEGrT3vw2SaHaCeq6dwprSZGFV8"
        },
        {
          "created": "2022-02-05T07:28:11.565Z",
          "name": "wage-assistant",
          "pk": "zDidzr4wuHHxGa5doLCQiWthGVgQfTUZDwyrqWoGcJyE",
          "sig": "z3bFbkVW6TLnTWbWhcSwcfTZg5zWRXHqmNCBWV2yVDkstJSNGksJabj1D5Ei3n9xRF9dWmiQZFRrmyX2RZWf4k7FP",
          "signer": "z1VQizXhZcU7W4JyPmg33FLNMEGbB8xtKHu",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.1",
      "timeout": {
        "start": 60
      },
      "title": "薪资助手",
      "version": "0.1.1"
    },
    "owner": {
      "did": "z1gShFYDsiMfGtaerBTh2ydu75768xMYPQU"
    },
    "draftVersion": null,
    "currentVersion": {
      "did": "z8ia1Qx3edFD1ju6U7usk6wR8QBWoc6VUkmRQ",
      "version": "0.1.1",
      "uploadedAt": "2022-02-05T07:28:23.814Z",
      "_id": "femZ0lgKBJTJi3n4",
      "createdAt": "2022-02-05T07:28:23.820Z",
      "updatedAt": "2022-02-05T07:28:23.820Z"
    },
    "latestVersion": {
      "did": "z8ia1Qx3edFD1ju6U7usk6wR8QBWoc6VUkmRQ",
      "version": "0.1.1",
      "uploadedAt": "2022-02-05T07:28:23.814Z",
      "_id": "femZ0lgKBJTJi3n4",
      "createdAt": "2022-02-05T07:28:23.820Z",
      "updatedAt": "2022-02-05T07:28:23.820Z"
    },
    "status": "normal",
    "_id": "sSAHVAR7YHYqjCeU",
    "createdAt": "2022-02-05T07:28:23.845Z",
    "updatedAt": "2022-03-18T10:42:31.699Z",
    "lastPublishedAt": "2022-02-05T07:30:55.178Z",
    "category": {
      "name": "productivity",
      "locales": {
        "zh": "生产工具",
        "en": "Productivity"
      },
      "_id": "Rke1R5ffuAuDhZJ6",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "stats": {
      "downloads": 44
    },
    "permission": "Public"
  },
  {
    "did": "z8ia2a9WXPTtbhedVaihXhKBJucCeyuuTx7v1",
    "meta": {
      "author": {
        "email": "lipeng@arcblock.io",
        "name": "lipeng"
      },
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "",
      "description": "Provider based on Blocklet Server is used to verify applications by switch wallet",
      "did": "z8ia2a9WXPTtbhedVaihXhKBJucCeyuuTx7v1",
      "dist": {
        "integrity": "sha512-6GswHl2h2Xr+aINlKOdaxRUqFnxXycXG1OU56hGyUtjRlD1uPiuxB38SqVE9BB82iQrRFFNnFss09cwuWVTRAg==",
        "tarball": "wallet-provider-1.2.0.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "https://web.abtwallet.io/,https://wallet.staging.arcblock.io/",
          "description": "wallet provider list",
          "name": "WALLET_PROVIDERS",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "logo.png",
        "README.md",
        "blocklet.md",
        "screenshots"
      ],
      "gitHash": "9ba7de7b240a929b5aac3b8e2b47a94d6da00fc3",
      "group": "static",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "type": "web"
        }
      ],
      "keywords": [
        "blocklet",
        "react"
      ],
      "license": "",
      "logo": "logo.png",
      "main": "build",
      "name": "wallet-provider",
      "nftFactory": "",
      "path": "/static/wallet-provider",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+ssh://git@github.com/blocklet/wallet-provider.git"
      },
      "requirements": {
        "abtnode": ">=1.4.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "3-install-list.png",
        "5-mount.png",
        "6-visit.png",
        "1-add.png"
      ],
      "scripts": {
        "dev": "npm run start"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-13T04:25:49.322Z",
          "sig": "z35uXUjVXcEyWv5m9NZQYVfW2b3SVqh8FHZN4opZZw2UT8mj56XAYcn6E2kHvSDeCmPzpycGiRYG1wJCLGkoKutRj"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-13T04:25:46.707Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "wallet-provider",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "ztjBNazHTg3wHT45R4NA8pCimXeqhzN9zSJLvvyMqhumSahvPqq3KJjnw3GsvegbGmNbssc49FH1DMBkEctu2U46"
        },
        {
          "created": "2022-01-13T04:24:36.738Z",
          "name": "wallet-provider",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z5hvP1G61vfpTxnAUr8RSTno3adzq5mLpt1Mu4fm1TZLedsmstigX2g1AHYbGUGdcPdxew3nU6SPomzmrSzYXxUxm",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.1",
      "timeout": {
        "start": 60
      },
      "title": "Wallet Provider",
      "version": "1.2.0"
    },
    "owner": {
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "draftVersion": null,
    "currentVersion": {
      "did": "z8ia2a9WXPTtbhedVaihXhKBJucCeyuuTx7v1",
      "version": "1.2.0",
      "uploadedAt": "2022-01-13T04:24:38.471Z",
      "_id": "YDZfkSl9eOMsse01",
      "createdAt": "2022-01-13T04:24:38.475Z",
      "updatedAt": "2022-01-13T04:24:38.475Z"
    },
    "latestVersion": {
      "did": "z8ia2a9WXPTtbhedVaihXhKBJucCeyuuTx7v1",
      "version": "1.2.0",
      "uploadedAt": "2022-01-13T04:24:38.471Z",
      "_id": "YDZfkSl9eOMsse01",
      "createdAt": "2022-01-13T04:24:38.475Z",
      "updatedAt": "2022-01-13T04:24:38.475Z"
    },
    "status": "normal",
    "_id": "JRRnLg5EATQ473bV",
    "createdAt": "2022-01-13T02:34:46.421Z",
    "updatedAt": "2022-03-10T08:57:52.937Z",
    "lastPublishedAt": "2022-01-13T04:25:49.332Z",
    "category": {
      "name": "developer-tools",
      "locales": {
        "en": "Developer Tools",
        "zh": "开发者工具"
      },
      "_id": "UXLwYKl1wa1qAhVe",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:45.576Z"
    },
    "stats": {
      "downloads": 67
    },
    "permission": "Public"
  },
  {
    "did": "z8iZpNnc48qcmdMYtvnHFQqroFikNG1AVTmfC",
    "meta": {
      "author": {
        "email": "wangqi@arcblock.io",
        "name": "wangqi"
      },
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "",
      "description": "A static dapp that supports connecting to any graphql endpoint",
      "did": "z8iZpNnc48qcmdMYtvnHFQqroFikNG1AVTmfC",
      "dist": {
        "integrity": "sha512-ZbvpczCICSTARFekTtl/auuRxtldBPXPwO0kSIkjCdPYeBKhH82AeBtWYPyxrmnb/C/tYd4Ibu7P8xXMEFWfVA==",
        "tarball": "graphql-playground-1.0.4.tgz"
      },
      "documentation": "",
      "environments": [],
      "files": [
        "logo.png",
        "README.md",
        "blocklet.md",
        "screenshots"
      ],
      "gitHash": "212e9615c94f7f6b246c6f6ff69fab083c08fb52",
      "group": "static",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "type": "web"
        }
      ],
      "keywords": [
        "blocklet",
        "react"
      ],
      "license": "",
      "logo": "logo.png",
      "main": "build",
      "name": "graphql-playground",
      "nftFactory": "",
      "path": "/static/graphql-playground",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/blocklet/graphql-playground.git"
      },
      "requirements": {
        "abtnode": ">=1.4.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-home.png",
        "1-docs.png",
        "2-history.png"
      ],
      "scripts": {
        "dev": "npm run start"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-12T09:05:55.489Z",
          "sig": "z4t6S8fRvsAc2jY73SrnVAmjMjnB6U4zmTv1fLwLUJM7SkxttruqG3fEzRSTvt1RX78YPLQRd9Wf5si1FFteQMgr8"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-12T09:05:53.083Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "graphql-playground",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z545ttx3T3N1jfkwAcXfKfeHJddyrDDc4Vby5nAmWW9NGhmTRyrpwot3CKqoKQYxQzFz7biBxqi4Kqm1Lc2mSjsak"
        },
        {
          "created": "2022-01-12T02:57:31.829Z",
          "name": "graphql-playground",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z3SDsqnVsa9YsL8mWyjJwwJHs1kERTfqpw8KnL8KWURGFag3d9ZkUfdiMnXPxef6qje81SgqRWFX5QeiN3kXjk3kp",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.1",
      "timeout": {
        "start": 60
      },
      "title": "GraphQL Playground",
      "version": "1.0.4"
    },
    "owner": {
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "draftVersion": null,
    "currentVersion": {
      "did": "z8iZpNnc48qcmdMYtvnHFQqroFikNG1AVTmfC",
      "version": "1.0.4",
      "uploadedAt": "2022-01-12T02:57:33.146Z",
      "_id": "RTV1EKT8m8Ozd3Rh",
      "createdAt": "2022-01-12T02:57:33.151Z",
      "updatedAt": "2022-01-12T02:57:33.151Z"
    },
    "latestVersion": {
      "did": "z8iZpNnc48qcmdMYtvnHFQqroFikNG1AVTmfC",
      "version": "1.0.4",
      "uploadedAt": "2022-01-12T02:57:33.146Z",
      "_id": "RTV1EKT8m8Ozd3Rh",
      "createdAt": "2022-01-12T02:57:33.151Z",
      "updatedAt": "2022-01-12T02:57:33.151Z"
    },
    "status": "normal",
    "_id": "lRNAD433vHVox7QD",
    "createdAt": "2022-01-11T08:55:03.168Z",
    "updatedAt": "2022-03-18T02:19:32.771Z",
    "category": {
      "name": "developer-tools",
      "locales": {
        "en": "Developer Tools",
        "zh": "开发者工具"
      },
      "_id": "UXLwYKl1wa1qAhVe",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:45.576Z"
    },
    "stats": {
      "downloads": 105
    },
    "permission": "Public",
    "lastPublishedAt": "2022-01-12T02:57:33.146Z"
  },
  {
    "_id": "7x7RQpaR0dDxRtux",
    "did": "z8iZqeUACK955YaBWqEd8aKg3tTki1GpvE2Wu",
    "owner": {
      "pk": "zEqG8kmXukvaX4QFC6wZ1JGTdNFTrEJ2LjJMbnkgsovqn",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-10-27T07:06:05.489Z",
    "updatedAt": "2022-03-18T19:59:36.714Z",
    "status": "normal",
    "stats": {
      "downloads": 330
    },
    "currentVersion": {
      "did": "z8iZqeUACK955YaBWqEd8aKg3tTki1GpvE2Wu",
      "version": "1.2.33",
      "uploadedAt": "2022-03-04T06:38:39.356Z",
      "_id": "4D7W4kfayool7C2f",
      "createdAt": "2022-03-04T06:38:39.361Z",
      "updatedAt": "2022-03-04T06:38:39.361Z"
    },
    "latestVersion": {
      "did": "z8iZqeUACK955YaBWqEd8aKg3tTki1GpvE2Wu",
      "version": "1.2.33",
      "uploadedAt": "2022-03-04T06:38:39.356Z",
      "_id": "4D7W4kfayool7C2f",
      "createdAt": "2022-03-04T06:38:39.361Z",
      "updatedAt": "2022-03-04T06:38:39.361Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "engineer@arcblock.io",
        "name": "arcblock"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [],
      "community": "",
      "description": "Ethereum Layer2 & Rollup Solution by ArcBlock",
      "did": "z8iZqeUACK955YaBWqEd8aKg3tTki1GpvE2Wu",
      "dist": {
        "integrity": "sha512-hmAorvBAq9d3i6NuBmQ0YcDMRoOFLvn9es0sL5aOiH35ATXYhQC1hZtxHST6oZDurDxZPfX72nA+EMZqYaDmnw==",
        "tarball": "did-rollup-1.2.33.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "",
          "description": "OCAP chain host",
          "name": "CHAIN_HOST",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "Foreign chain host",
          "name": "FOREIGN_CHAIN_HOST",
          "required": true,
          "secure": false
        },
        {
          "default": "eth",
          "description": "Blocklet wallet type must be set to eth",
          "name": "BLOCKLET_WALLET_TYPE",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "Send important activities to the webhook, currently only slack is supported",
          "name": "INTEGRATION_WEBHOOK",
          "required": false,
          "secure": true
        }
      ],
      "files": [
        "build",
        "logo.png",
        "README.md",
        "blocklet.md",
        "screenshots",
        "migration/*.js",
        "server/hooks/pre-start.js"
      ],
      "gitHash": "1468fa37a04941d4792954789212d785ddbeb3e1",
      "group": "dapp",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "services": [
            {
              "config": {
                "blockUnauthenticated": true,
                "ignoreUrls": [
                  "/api/**"
                ],
                "invitedUserOnly": "not-first"
              },
              "name": "@abtnode/auth-service"
            }
          ],
          "type": "web"
        }
      ],
      "keywords": [
        "blocklet",
        "react"
      ],
      "license": "",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "did-rollup",
      "nftFactory": "",
      "path": "/dapp/did-rollup",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/blocklet/arc-bridge.git"
      },
      "requirements": {
        "abtnode": ">=1.4.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-dashboard.png",
        "1-jobs.png",
        "2-stake.png"
      ],
      "scripts": {
        "dev": "npm run start",
        "preStart": "node server/hooks/pre-start.js"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-04T06:40:17.992Z",
          "sig": "z2i4MvdeBg5yak75FQLHRftrmbXW2FWgkF1HG4Mbar7vZ4LdFicp4cYu1CuG2SifyTkpuYXMPXQYcCcUNgyocZuw8"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-04T06:40:16.481Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "did-rollup",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "zDWnPraxjXYb4xaf2bqrdGuPwuEPHdwvyCfdqvw1w4ckB5ASGvqU28zg5khmg1A9vR3dx6cqRgkUqrKRBNxs5LzL"
        },
        {
          "created": "2022-03-04T06:38:37.519Z",
          "name": "did-rollup",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z41686PooetJ4vqByNx1MbbX4AkavDtYMJ15S7JEQutvQRWzJDgwcuKHPKSSYeNhf8qVQd2Ybj1eceAmK8B5tAmDF",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "timeout": {
        "start": 60
      },
      "title": "ArcBridge Node",
      "version": "1.2.33"
    },
    "category": {
      "name": "blockchain",
      "locales": {
        "zh": "区块链",
        "en": "Blockchain"
      },
      "_id": "ehbHn3Ceu9UQHRtQ",
      "createdAt": "2022-01-11T01:49:44.009Z",
      "updatedAt": "2022-01-11T01:49:44.009Z"
    },
    "lastPublishedAt": "2022-03-04T06:40:18.007Z",
    "permission": "Public"
  },
  {
    "_id": "yPY2cllYylC48sRL",
    "did": "z8iZqkCjLP6TZpR12tT3jESWxB8SGzNsx8nZa",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-07-22T10:41:43.272Z",
    "updatedAt": "2022-03-21T02:35:56.249Z",
    "status": "normal",
    "stats": {
      "downloads": 4211
    },
    "currentVersion": {
      "did": "z8iZqkCjLP6TZpR12tT3jESWxB8SGzNsx8nZa",
      "version": "0.5.43",
      "uploadedAt": "2022-02-24T22:44:16.671Z",
      "_id": "1zoc9BbnQoLKwxi0",
      "createdAt": "2022-02-24T22:44:16.679Z",
      "updatedAt": "2022-02-24T22:44:16.679Z"
    },
    "latestVersion": {
      "did": "z8iZqkCjLP6TZpR12tT3jESWxB8SGzNsx8nZa",
      "version": "0.5.43",
      "uploadedAt": "2022-02-24T22:44:16.671Z",
      "_id": "1zoc9BbnQoLKwxi0",
      "createdAt": "2022-02-24T22:44:16.679Z",
      "updatedAt": "2022-02-24T22:44:16.679Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "zhanghan@arcblock.io",
        "name": "zhanghan"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [],
      "community": "https://community.arcblockio.cn",
      "description": "A simple NFT Store",
      "did": "z8iZqkCjLP6TZpR12tT3jESWxB8SGzNsx8nZa",
      "dist": {
        "integrity": "sha512-FRR83KvPawlnecsRs1dICJTD61tr4o0DsQ7SdFgg3B6Wy/qVYyNaPLm/lvVPP0LrTVu7U+Vvn8uqlDsfvy7vXQ==",
        "tarball": "nft-store-0.5.43.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "",
          "description": "Please provide endpoint of chain",
          "name": "CHAIN_HOST",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "Please provide factory owner of factory list",
          "name": "FACTORY_OWNER_DID",
          "required": false,
          "secure": false
        },
        {
          "default": "",
          "description": "Hide some factory, they will not show in the factory list page (Use ',' as separator if there are multiple values)",
          "name": "DISABLED_FACTORY_ADDRESS",
          "required": false,
          "secure": false
        },
        {
          "default": "",
          "description": "Get a config object to set nft-store for a url",
          "name": "CONFIG_API",
          "required": false,
          "secure": false
        },
        {
          "default": "",
          "description": "Home path of the application",
          "name": "HOME_PATH",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "screenshots",
        "server/hooks/pre-start.js",
        "logo.png",
        "blocklet.md",
        "README.md",
        "build"
      ],
      "gitHash": "66f75977363054ff53dc5d513714eb746e4470ea",
      "group": "dapp",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "tcp",
          "services": [
            {
              "config": {
                "blockUnauthenticated": false
              },
              "name": "@abtnode/auth-service"
            }
          ],
          "type": "web"
        }
      ],
      "keywords": [
        "dapp",
        "nft",
        "store"
      ],
      "license": "Apache-2.0",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "nft-store",
      "nftFactory": "",
      "path": "/dapp/nft-store",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/Blocklet/nft-store.git"
      },
      "requirements": {
        "abtnode": ">=1.2.3",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "screenshot-0.png",
        "screenshot-1.png",
        "screenshot-2.png",
        "screenshot-3.png"
      ],
      "scripts": {
        "dev": "npm run start",
        "preStart": "node server/hooks/pre-start.js"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-02-25T03:15:01.653Z",
          "sig": "z3ofwQkG5fyhkTGSwc1bjxB49g5GYzAGutkcV1XuebPG9zEoW8BTdggZyQYVYgxX4T2M5ho9d95eFbwVxAeTdwGFD"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-02-25T03:15:00.393Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "nft-store",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "zTdMSFYWRZwqaDjwDFvJozX6uv7seTp93RcmpVUreMpiMFQp39aC3hk3BS3D5E9qkpGFEeGEZXQYQrhTTqYeNx2U"
        },
        {
          "created": "2022-02-24T22:44:14.124Z",
          "name": "nft-store",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z3FCAHRyKExERjerdaNLEYmuZBzNwBdVn23TEiRkP9mjbAfr7wiu5W9pyJD6d1VKF9u4zWCX8iDGP4neH77bemPgp",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "timeout": {
        "start": 30
      },
      "title": "NFT Store",
      "version": "0.5.43"
    },
    "category": {
      "name": "shopping",
      "locales": {
        "zh": "购物",
        "en": "Shopping"
      },
      "_id": "ZQS3G72gIY02XUsD",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "lastPublishedAt": "2022-02-25T03:15:01.702Z",
    "permission": "Public"
  },
  {
    "_id": "8WszYI7DK6WRHqJg",
    "did": "z8iZnxpWdP8jMNDhZSJ2SPg3Lg9Yh6rGMEard",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-07-13T00:55:04.473Z",
    "updatedAt": "2022-03-18T07:55:01.913Z",
    "status": "normal",
    "stats": {
      "downloads": 105
    },
    "currentVersion": {
      "did": "z8iZnxpWdP8jMNDhZSJ2SPg3Lg9Yh6rGMEard",
      "version": "2.4.2",
      "uploadedAt": "2022-03-18T07:12:58.479Z",
      "_id": "ONwZqnmFNwcXtz14",
      "createdAt": "2022-03-18T07:12:58.485Z",
      "updatedAt": "2022-03-18T07:12:58.485Z"
    },
    "latestVersion": {
      "did": "z8iZnxpWdP8jMNDhZSJ2SPg3Lg9Yh6rGMEard",
      "version": "2.4.2",
      "uploadedAt": "2022-03-18T07:12:58.479Z",
      "_id": "ONwZqnmFNwcXtz14",
      "createdAt": "2022-03-18T07:12:58.485Z",
      "updatedAt": "2022-03-18T07:12:58.485Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "paper@arcblock.io",
        "name": "paper"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [],
      "community": "https://community.arcblockio.cn",
      "description": "A sort of API for user to query ERC20 fiat price",
      "did": "z8iZnxpWdP8jMNDhZSJ2SPg3Lg9Yh6rGMEard",
      "dist": {
        "integrity": "sha512-9UvVVO4GFO42ZbQJcMekHrlxH1jf0DuTnErigkxY7K2kcuxGEAtF5T6PogfLX16PqIaLJ2OBy4Pbw/JmDwAh+g==",
        "tarball": "token-data-2.4.2.tgz"
      },
      "documentation": "https://docs.arcblock.io",
      "environments": [
        {
          "default": "",
          "description": "Crypto Market Cap API Key",
          "name": "CMC_KEY",
          "required": true,
          "secure": true
        },
        {
          "default": "",
          "description": "INFURA API Key",
          "name": "INFURA_KEY",
          "required": true,
          "secure": true
        },
        {
          "default": "",
          "description": "ETHERSCAN API Key",
          "name": "ETHERSCAN_KEY",
          "required": true,
          "secure": true
        },
        {
          "default": "false",
          "description": "refresh DB token list",
          "name": "NEED_REFRESH_TOKEN",
          "required": false,
          "secure": false
        },
        {
          "default": "",
          "description": "web hook to slack",
          "name": "SLACK_WEBHOOK",
          "required": false,
          "secure": false
        },
        {
          "default": "false",
          "description": "allow external user to access",
          "name": "ALLOW_EXTERNAL",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "screenshots",
        "public",
        "logo.png",
        "blocklet.md",
        "README.md",
        "build"
      ],
      "gitHash": "aba2f25530b7614a321da0e0a15fa5a45d516f8f",
      "group": "dapp",
      "homepage": "https://github.com/blocklet/token-data",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "services": [
            {
              "config": {
                "blockUnauthenticated": true,
                "ignoreUrls": [
                  "/api/**",
                  "/home"
                ]
              },
              "name": "@abtnode/auth-service"
            }
          ],
          "type": "web"
        }
      ],
      "keywords": [
        "blocklet",
        "registry"
      ],
      "license": "Apache-2.0",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "token-data",
      "nftFactory": "",
      "path": "/dapp/token-data",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+ssh://git@github.com/blocklet/token-data.git"
      },
      "requirements": {
        "abtnode": ">=1.2.6",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "list.png",
        "api.png"
      ],
      "scripts": {
        "dev": "npm run start"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:53:56.388Z",
          "sig": "z2DFvkQa5BkjCGQVpbJJXYxrsYbeqa96yNTgZ1Tb4ZXmzNmEB7vrQd9rqbd3HVFTgPJYns9wgbRHDWUEuX9H4W3Tj"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:53:54.576Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "token-data",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z5FmdauqAcvEpXpGf5p2hZyFQ9CKKKRP9u5bTDL34F6bgkHz6Sr7i6mRLaNH5tCF6J6SAu5fkZiqrvf2BmZwZRUyK"
        },
        {
          "created": "2022-03-18T07:12:56.538Z",
          "name": "token-data",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z67AhEreVoJbcziMGc6zyN1DEHLVkYkPPS4JsgSqZeWSGeCPiNVjwhMDL5aefTirjNtmq6U3fniPmgYCKwhvMmxvH",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "support": "support@arcblock.io",
      "timeout": {
        "start": 60
      },
      "title": "Token Data",
      "version": "2.4.2"
    },
    "category": {
      "name": "blockchain",
      "locales": {
        "zh": "区块链",
        "en": "Blockchain"
      },
      "_id": "ehbHn3Ceu9UQHRtQ",
      "createdAt": "2022-01-11T01:49:44.009Z",
      "updatedAt": "2022-01-11T01:49:44.009Z"
    },
    "lastPublishedAt": "2022-03-18T07:53:56.403Z",
    "permission": "Public"
  },
  {
    "_id": "gNC9jPJFd5MzWD5j",
    "did": "z8iZoRt7UQDg6nPT6zPD76XJZ2fWoaDckDL17",
    "owner": {
      "pk": "zBupzkjK4gMrbiy9Wg8oDVoP1S3rNLV4aUyktuKqXJnQ1",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-07-04T02:42:30.415Z",
    "updatedAt": "2022-02-18T03:58:52.353Z",
    "status": "blocked",
    "stats": {
      "downloads": 29
    },
    "currentVersion": {
      "did": "z8iZoRt7UQDg6nPT6zPD76XJZ2fWoaDckDL17",
      "version": "0.0.13",
      "uploadedAt": "2021-07-23T10:26:46.501Z",
      "_id": "elckbcGwLKbodgpX",
      "createdAt": "2021-11-01T04:09:59.561Z",
      "updatedAt": "2021-11-01T04:09:59.561Z"
    },
    "latestVersion": {
      "did": "z8iZoRt7UQDg6nPT6zPD76XJZ2fWoaDckDL17",
      "version": "0.0.13",
      "uploadedAt": "2021-07-23T10:26:46.501Z",
      "_id": "elckbcGwLKbodgpX",
      "createdAt": "2021-11-01T04:09:59.561Z",
      "updatedAt": "2021-11-01T04:09:59.561Z"
    },
    "draftVersion": null,
    "meta": {
      "name": "hash-express",
      "version": "0.0.13",
      "author": {
        "name": "wuwei"
      },
      "main": "blocklet.zip",
      "license": "",
      "files": [
        "blocklet.md",
        "README.md",
        "build"
      ],
      "title": "哈希社区",
      "description": "去中心化社区，任何人都可以通过安装快速生成自己的社区",
      "group": "dapp",
      "specVersion": "1.1.1",
      "keywords": [
        "社区",
        "去中心化"
      ],
      "interfaces": [
        {
          "type": "web",
          "name": "publicUrl",
          "path": "/",
          "prefix": "*",
          "port": "BLOCKLET_PORT",
          "protocol": "http",
          "services": [
            {
              "name": "@abtnode/auth-service",
              "config": {
                "blockUnauthenticated": false
              }
            }
          ]
        }
      ],
      "did": "z8iZoRt7UQDg6nPT6zPD76XJZ2fWoaDckDL17",
      "community": "",
      "documentation": "",
      "homepage": "",
      "timeout": {
        "start": 60
      },
      "requirements": {
        "abtnode": ">=1.2.5",
        "os": "*",
        "cpu": "*"
      },
      "environments": [
        {
          "name": "CHAIN_HOST",
          "description": "Please provide endpoint of chain",
          "required": true,
          "default": "https://beta.abtnetwork.io/api/",
          "secure": false
        },
        {
          "name": "SERVER_URL",
          "description": "Please provide server url of dapp",
          "required": true,
          "default": "",
          "secure": false
        }
      ],
      "scripts": {
        "dev": "npm run start"
      },
      "screenshots": [],
      "children": [],
      "gitHash": "e4a297db85b0bc8e561edc242529f536c341c9b0",
      "path": "/dapp/hash-express",
      "nftFactory": "",
      "dist": {
        "tarball": "hash-express-0.0.13.tgz",
        "integrity": "sha512-bYmUuxHxngCge9kFj6gXRjwuXEstFDiG6LHIpPxazuh2pj5Q8WQ/vZCtssOS4Pnbzi5cAUuNlUXUytKgHeZrUg=="
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Official Registry",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2021-07-23T10:26:46.503Z",
          "sig": "zeYFxXCq14jykyA9CBzxBp7pYyEK3M1RJQz5RUFrGnUoUrLzdPS6yiRVZkK21uwuBEBnqtikDVtqHibPff2yUt9w"
        },
        {
          "type": "ED25519",
          "name": "hash-express",
          "signer": "z1dkUpbXUPjumygMzSwT6z35c9wpKmjeAf9",
          "pk": "zBupzkjK4gMrbiy9Wg8oDVoP1S3rNLV4aUyktuKqXJnQ1",
          "created": "2021-07-23T10:26:36.895Z",
          "sig": "zcG98ze61Bb3Ntjx1K8f77tTFX9abKz7cAb1aVkWSuUJPP54WYZM92m7ktUE3c6WE4vDYdRx8dbtdnpc8kjvuxe1"
        }
      ],
      "lastPublishedAt": "2021-07-23T10:26:46.501Z",
      "payment": {
        "price": [],
        "share": []
      }
    },
    "category": {
      "name": "communication",
      "locales": {
        "zh": "社交与通讯",
        "en": "Communication"
      },
      "_id": "ujcAUmWn8rtyG8yy",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "permission": "Public",
    "lastPublishedAt": "2021-07-23T10:26:46.501Z"
  },
  {
    "_id": "w4W3MlUy5lN98EyT",
    "did": "z8ia5AUWNBoc5Jw6Zf2ru97W1y6PZVFiFa7h9",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-06-15T22:14:09.035Z",
    "updatedAt": "2022-03-18T23:25:29.315Z",
    "status": "normal",
    "stats": {
      "downloads": 741
    },
    "currentVersion": {
      "did": "z8ia5AUWNBoc5Jw6Zf2ru97W1y6PZVFiFa7h9",
      "version": "0.4.2",
      "uploadedAt": "2021-12-28T13:24:46.153Z",
      "_id": "31WEqudMWRulDQ3R",
      "createdAt": "2021-12-28T13:24:46.157Z",
      "updatedAt": "2021-12-28T13:24:46.157Z"
    },
    "latestVersion": {
      "did": "z8ia5AUWNBoc5Jw6Zf2ru97W1y6PZVFiFa7h9",
      "version": "0.4.2",
      "uploadedAt": "2021-12-28T13:24:46.153Z",
      "_id": "31WEqudMWRulDQ3R",
      "createdAt": "2021-12-28T13:24:46.157Z",
      "updatedAt": "2021-12-28T13:24:46.157Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "name": "wangshijun"
      },
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "",
      "description": "A simple coming soon page implementation that can be used to serve sites that are under construction",
      "did": "z8ia5AUWNBoc5Jw6Zf2ru97W1y6PZVFiFa7h9",
      "dist": {
        "integrity": "sha512-QCC232lLWS86jt1LfbaFtjcLaccGgLtQ6dmaBmE7iZeikkLl6VaxdyZSo0ySkreNYHiiKUCHNidE6F6lZRBlng==",
        "tarball": "coming-soon-page-0.4.2.tgz"
      },
      "documentation": "",
      "environments": [],
      "files": [
        "blocklet.md",
        "screenshots"
      ],
      "gitHash": "b9f1ee1f886deb64c9366072620e1d59db463773",
      "group": "static",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "type": "web"
        }
      ],
      "keywords": [
        "demo",
        "blocklet"
      ],
      "license": "",
      "logo": "logo.png",
      "main": "app",
      "name": "coming-soon-page",
      "nftFactory": "",
      "path": "/static/coming-soon-page",
      "payment": {
        "price": [],
        "share": []
      },
      "requirements": {
        "abtnode": ">=1.2.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "home.png"
      ],
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2021-12-29T02:01:29.363Z",
          "sig": "z3XMbyYw2GCxqJgZAW38mfndEtvJwBfRPSKHjm7VCAWAb3Xy6T4sKeYTzjKsiAjNzgzcYaAS6amu4ey3Ly2nTbPMY"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2021-12-29T02:01:24.868Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "coming-soon-page",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z2gQjdCLGuEEN3VMxDgm5NkdrD8n8ktQGJgeLgo8X1WyWrMRB5xFBPG7fRuYdJKM6LDowCMUJxu9yu95P8XDAPCm3"
        },
        {
          "created": "2021-12-28T13:24:44.807Z",
          "name": "coming-soon-page",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z5WDDFz3P1iFSiwJvSu5Ei1FW9Wb7vzoh8RKwMmoopSvYuTYKnzQWbJ1R8Mdzv9M8xnZdku5jMEV1DogvVKCFjJkJ",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.0",
      "timeout": {
        "start": 60
      },
      "title": "Coming Soon Page",
      "version": "0.4.2"
    },
    "category": {
      "name": "blog",
      "locales": {
        "zh": "博客",
        "en": "Blog"
      },
      "_id": "moa7XOIdvLpI3m49",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "permission": "Public",
    "lastPublishedAt": "2021-12-28T13:24:46.153Z"
  },
  {
    "_id": "gjo76B9kYj23eviI",
    "did": "z8iZvmERrWxqReWe1HZmkAaZvFeRpkXutfKDk",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-06-11T07:49:45.682Z",
    "updatedAt": "2022-03-18T10:08:35.826Z",
    "status": "normal",
    "stats": {
      "downloads": 78
    },
    "currentVersion": {
      "did": "z8iZvmERrWxqReWe1HZmkAaZvFeRpkXutfKDk",
      "version": "0.6.25",
      "uploadedAt": "2022-03-18T09:50:46.585Z",
      "_id": "vICWdmh0gtqC5EgC",
      "createdAt": "2022-03-18T09:50:46.590Z",
      "updatedAt": "2022-03-18T09:50:46.590Z"
    },
    "latestVersion": {
      "did": "z8iZvmERrWxqReWe1HZmkAaZvFeRpkXutfKDk",
      "version": "0.6.25",
      "uploadedAt": "2022-03-18T09:50:46.585Z",
      "_id": "vICWdmh0gtqC5EgC",
      "createdAt": "2022-03-18T09:50:46.590Z",
      "updatedAt": "2022-03-18T09:50:46.590Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "shijun@arcblock.io",
        "name": "shijun"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [],
      "community": "https://community.arcblockio.cn",
      "description": "Marketplace to buy and sell NFT on ABT Network",
      "did": "z8iZvmERrWxqReWe1HZmkAaZvFeRpkXutfKDk",
      "dist": {
        "integrity": "sha512-cYZv6t/t5bghBy4AQv3uWAx3AxCbxtea3SDMOinG9fY8UduUBMGxdoGyQSkEUrNXVXce3o0cC1ScHdXqK11TLQ==",
        "tarball": "nft-marketplace-0.6.25.tgz"
      },
      "documentation": "https://docs.arcblock.io",
      "environments": [
        {
          "default": "https://beta.abtnetwork.io/api/",
          "description": "What's endpoint of the chain?",
          "name": "CHAIN_HOST",
          "required": true,
          "secure": false
        },
        {
          "default": "z35n6UoHSi9MED4uaQy6ozFgKPaZj2UKrurBG",
          "description": "Which token does this marketplace accept as payment?",
          "name": "PAYMENT_TOKEN_ID",
          "required": true,
          "secure": false
        },
        {
          "default": "0.02",
          "description": "How much the marketplace will preserve on deal?",
          "name": "DEAL_FEE_RATIO",
          "required": true,
          "secure": false
        },
        {
          "default": "30",
          "description": "How long to wait in minutes before consider a bid final?",
          "name": "DEAL_DELAY_SINCE_LAST_BID",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "Tags allowed when list auction?",
          "name": "ALLOWED_TAGS",
          "required": false,
          "secure": false
        },
        {
          "default": "1",
          "description": "Price step in bid auction",
          "name": "PRICE_STEP",
          "required": true,
          "secure": false
        },
        {
          "default": "1",
          "description": "Min bid delta amount in bid auction",
          "name": "MIN_BID_DELTA_AMOUNT",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "Google Analytics measurement id",
          "name": "GOOGLE_ANALYTICS_ID",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "screenshots",
        "public",
        "logo.png",
        "blocklet.md",
        "README.md",
        "build",
        "api/hooks/pre-start.js"
      ],
      "gitHash": "184400e5ba843c6a5723677f505e3a392b0e34d7",
      "group": "dapp",
      "homepage": "https://github.com/blocklet/nft-marketplace",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "services": [
            {
              "config": {
                "blockUnauthenticated": false
              },
              "name": "@abtnode/auth-service"
            }
          ],
          "type": "web"
        }
      ],
      "keywords": [
        "nft",
        "marketplace"
      ],
      "license": "Apache-2.0",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "nft-marketplace",
      "nftFactory": "",
      "path": "/dapp/nft-marketplace",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/blocklet/nft-marketplace.git"
      },
      "requirements": {
        "abtnode": ">=1.3.12",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-list.png",
        "1-detail.png",
        "2-detail-bidding.png"
      ],
      "scripts": {
        "dev": "npm run start",
        "preStart": "node api/hooks/pre-start.js"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T10:07:40.130Z",
          "sig": "z2pd265Www2KVhcKEWUtgSqE582aPmmeDMy4xt3bC1UmhTSnf73X4DWyrfg7AGcHq8fJF5rasQKvKmib533gQn4FV"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T10:07:37.443Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "nft-marketplace",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z3vhqY41aBedcsdPGJGGXNRwLXfkxQ8hyzC2ASxDTCXzn2wAPgSK26TA5PDFee99FEqxbXgtXtRTyoFFLk9StiVBb"
        },
        {
          "created": "2022-03-18T09:50:43.944Z",
          "name": "nft-marketplace",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z6Dfy4AJ7wstXsj2659Pwd1CcxCtxqDpgDQoabwn7WxCB9ok12oQiGNFPYZQYTMeVAvaUEY4syqFU6aEvNHogxVu",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "support": "support@arcblock.io",
      "timeout": {
        "start": 60
      },
      "title": "NFT Marketplace",
      "version": "0.6.25"
    },
    "category": {
      "name": "shopping",
      "locales": {
        "zh": "购物",
        "en": "Shopping"
      },
      "_id": "ZQS3G72gIY02XUsD",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "lastPublishedAt": "2022-03-18T10:07:40.141Z",
    "permission": "Public"
  },
  {
    "_id": "09xpmFBM9kxXegbr",
    "did": "z8iZzjfRix3FewZbMxNwcRp1TdUBa32VoLtps",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-05-25T23:22:42.430Z",
    "updatedAt": "2022-03-06T13:22:43.110Z",
    "status": "normal",
    "stats": {
      "downloads": 71
    },
    "currentVersion": {
      "did": "z8iZzjfRix3FewZbMxNwcRp1TdUBa32VoLtps",
      "version": "0.2.17",
      "uploadedAt": "2022-01-13T07:05:05.779Z",
      "_id": "U2VcywyGfnxFGZyB",
      "createdAt": "2022-01-13T07:05:05.785Z",
      "updatedAt": "2022-01-13T07:05:05.785Z"
    },
    "latestVersion": {
      "did": "z8iZzjfRix3FewZbMxNwcRp1TdUBa32VoLtps",
      "version": "0.2.17",
      "uploadedAt": "2022-01-13T07:05:05.779Z",
      "_id": "U2VcywyGfnxFGZyB",
      "createdAt": "2022-01-13T07:05:05.785Z",
      "updatedAt": "2022-01-13T07:05:05.785Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "shijun@arcblock.io",
        "name": "shijun"
      },
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "https://community.arcblockio.cn",
      "description": "A faucet to help users to get test token on arcblock blockchain network",
      "did": "z8iZzjfRix3FewZbMxNwcRp1TdUBa32VoLtps",
      "dist": {
        "integrity": "sha512-C6wz7w1msVWTnsdipAKl+jczr6wq8UV6U2PxKtsX/UovTAGlP/sJFthNY6I3qw36+GgVJrWQ3iZexqibng6oNg==",
        "tarball": "faucet-webapp-0.2.17.tgz"
      },
      "documentation": "https://docs.arcblock.io",
      "environments": [],
      "files": [
        "screenshots",
        "public",
        "logo.png",
        "blocklet.md",
        "README.md",
        "build"
      ],
      "gitHash": "69a0f3aa7e6cbede25589bad5cd7eec22277681f",
      "group": "dapp",
      "homepage": "https://github.com/blocklet/faucet-webapp",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "type": "web"
        }
      ],
      "keywords": [
        "blocklet",
        "registry"
      ],
      "license": "Apache-2.0",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "faucet-webapp",
      "nftFactory": "",
      "path": "/dapp/faucet-webapp",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/blocklet/faucet-webapp.git"
      },
      "requirements": {
        "abtnode": ">=1.2.6",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "add.png",
        "claim.png",
        "donate.png",
        "list.png"
      ],
      "scripts": {
        "dev": "npm run start"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-14T06:43:49.264Z",
          "sig": "zeWDRZrmdkdSqmrhqmP8HKhWMLx7wG4eQ9cvbSYwmKRS1P3QDTB7heQnA3AfNTcF3jaEj66grXFnA1H5JGW9SXzb"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-14T06:43:47.370Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "faucet-webapp",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z3onPf4qdwhSoq9TTjM7SDjVPftGaBHeCxSPd36ny6KH7PJVVcVm15TFDqP2S1ippNNL6JaDbL9Ytgg31q1CCZY62"
        },
        {
          "created": "2022-01-13T07:05:03.617Z",
          "name": "faucet-webapp",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z29ErvDZwgqxotUMEtcraoE35s9kLK6qkBpKFf9HAV5PdTj42VPdaMQpLhzA1VADRiuTERYUma4CTWW5cpNTa3AQn",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.1",
      "support": "support@arcblock.io",
      "timeout": {
        "start": 60
      },
      "title": "ABT Network Faucet",
      "version": "0.2.17"
    },
    "category": {
      "name": "developer-tools",
      "locales": {
        "en": "Developer Tools",
        "zh": "开发者工具"
      },
      "_id": "UXLwYKl1wa1qAhVe",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:45.576Z"
    },
    "lastPublishedAt": "2022-01-14T06:43:49.274Z",
    "permission": "Public"
  },
  {
    "_id": "aq63hb9971zMRsj2",
    "did": "z8iZjySpAu4jzbMochL9k1okuji1GcS7RRRDM",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-05-04T00:46:58.244Z",
    "updatedAt": "2022-03-18T07:54:47.365Z",
    "status": "normal",
    "stats": {
      "downloads": 107
    },
    "currentVersion": {
      "did": "z8iZjySpAu4jzbMochL9k1okuji1GcS7RRRDM",
      "version": "0.25.0",
      "uploadedAt": "2022-03-18T07:16:33.737Z",
      "_id": "szYv636GliUVzHr8",
      "createdAt": "2022-03-18T07:16:33.746Z",
      "updatedAt": "2022-03-18T07:16:33.746Z"
    },
    "latestVersion": {
      "did": "z8iZjySpAu4jzbMochL9k1okuji1GcS7RRRDM",
      "version": "0.25.0",
      "uploadedAt": "2022-03-18T07:16:33.737Z",
      "_id": "szYv636GliUVzHr8",
      "createdAt": "2022-03-18T07:16:33.746Z",
      "updatedAt": "2022-03-18T07:16:33.746Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "shijun@arcblock.io",
        "name": "wangshijun"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [
        {
          "mountPoints": [
            {
              "child": {
                "interfaceName": "publicUrl"
              },
              "root": {
                "interfaceName": "publicUrl",
                "prefix": "/promotion-tool"
              }
            }
          ],
          "name": "promotion-tool",
          "resolved": "https://dev.store.blocklet.dev/api/blocklets/z8iZk7PZ3guu3biYGUJRYpAwRnMZkvQ1ENA1z/blocklet.json"
        }
      ],
      "community": "https://community.arcblockio.cn",
      "description": "A simple playground that shows the potential of OCAP powered blockchain and DID Wallet V2",
      "did": "z8iZjySpAu4jzbMochL9k1okuji1GcS7RRRDM",
      "dist": {
        "integrity": "sha512-Kw6kS/m7BO5FyrVYVZTjIeBKcdVaE36rj+ngxJB0DmxGXGtl4OTHsQQpa0hZ7KzDqdCxoOZ/iW+wYLcvhko9Fw==",
        "tarball": "ocap-playground-0.25.0.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "https://beta.abtnetwork.io/api/",
          "description": "Please provide endpoint of local chain",
          "name": "CHAIN_HOST",
          "required": true,
          "secure": false
        },
        {
          "default": "z35n6UoHSi9MED4uaQy6ozFgKPaZj2UKrurBG",
          "description": "Please provide local token for the playground",
          "name": "LOCAL_TOKEN_ID",
          "required": true,
          "secure": false
        },
        {
          "default": "z35n3WVTnN7KrR4gXn3szR6oneVefkBBx78Fc",
          "description": "Please provide foreign token for the playground",
          "name": "FOREIGN_TOKEN_ID",
          "required": true,
          "secure": false
        }
      ],
      "files": [
        "api/libs/hooks/pre-start.js",
        "screenshots",
        "logo.png",
        "blocklet.md",
        "README.md",
        "build"
      ],
      "gitHash": "914fcc57a5d1b1b710f5e9525a1756a0bbfce2ca",
      "group": "dapp",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "tcp",
          "services": [
            {
              "config": {
                "blockUnauthenticated": true,
                "ignoreUrls": [
                  "/api/did/**",
                  "/api/agent/**",
                  "/api/nft/**",
                  "/blocklet/**",
                  "/instance/**"
                ]
              },
              "name": "auth"
            }
          ],
          "type": "web"
        }
      ],
      "keywords": [
        "dapp",
        "playground",
        "wallet"
      ],
      "license": "Apache-2.0",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "ocap-playground",
      "nftFactory": "",
      "path": "/dapp/ocap-playground",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/blocklet/ocap-playground.git"
      },
      "requirements": {
        "abtnode": ">=1.3.5",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-home.png",
        "1-profile.png",
        "2-everything.png"
      ],
      "scripts": {
        "dev": "npm run start",
        "preStart": "node api/libs/hooks/pre-start.js"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:47.346Z",
          "sig": "zjfcb9oJcShk5pzrzydJ7LVs6vy2YJR2ADe2VxbncE8bWeXY2Fe2vNoyciakRZCSYjUocPk2eWbjLtJE76BiybBm"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:45.686Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "ocap-playground",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z4Z5oNJqm1N18WY7ZAgxfpjSE64dLKS5721DPsm2jWELCvNeEfHZXUHS9YdeQznuyxeya8wW12Cgw8MjT98TiF8D"
        },
        {
          "created": "2022-03-18T07:16:32.144Z",
          "name": "ocap-playground",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z53ht3AVsvVmp3Rn2ZGawYz21nJhRdDT7CuqtRzNYHgK5PGEuzMuZQHRErAfF7SgMdgDYqQpvbt5eq5ViCT9WGDUB",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "timeout": {
        "start": 15
      },
      "title": "Wallet Playground",
      "version": "0.25.0"
    },
    "category": {
      "name": "developer-tools",
      "locales": {
        "en": "Developer Tools",
        "zh": "开发者工具"
      },
      "_id": "UXLwYKl1wa1qAhVe",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:45.576Z"
    },
    "lastPublishedAt": "2022-03-18T07:54:47.365Z",
    "permission": "Public"
  },
  {
    "_id": "iAYgEkRIv3PQWFjc",
    "did": "z8iZpnScvjjeeyYZQoHSdXm4GQTqcfTTGkyPP",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-04-27T00:41:29.048Z",
    "updatedAt": "2022-02-25T09:06:34.110Z",
    "status": "normal",
    "stats": {
      "downloads": 111
    },
    "currentVersion": {
      "did": "z8iZpnScvjjeeyYZQoHSdXm4GQTqcfTTGkyPP",
      "version": "3.10.0",
      "uploadedAt": "2022-01-25T01:41:11.869Z",
      "_id": "TitR3psXVPHf6vvn",
      "createdAt": "2022-01-25T01:41:11.877Z",
      "updatedAt": "2022-01-25T01:41:11.877Z"
    },
    "latestVersion": {
      "did": "z8iZpnScvjjeeyYZQoHSdXm4GQTqcfTTGkyPP",
      "version": "3.10.0",
      "uploadedAt": "2022-01-25T01:41:11.869Z",
      "_id": "TitR3psXVPHf6vvn",
      "createdAt": "2022-01-25T01:41:11.877Z",
      "updatedAt": "2022-01-25T01:41:11.877Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "name": "leermao"
      },
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "",
      "description": "Official DID Wallet webapp implementation that makes it possible to manage your digital identities and assets from the browser.",
      "did": "z8iZpnScvjjeeyYZQoHSdXm4GQTqcfTTGkyPP",
      "dist": {
        "integrity": "sha512-RNL1Z7Rn/mhKxJHVTcjtHBUvmK/uEiQfxv8iw0rry/TFUWzXHfKP3tVjOvnbykl4YC0+vG8F+LyW0rDC8PAO7g==",
        "tarball": "abt-wallet-3.10.0.tgz"
      },
      "documentation": "",
      "environments": [],
      "files": [
        "blocklet.md",
        "screenshots",
        "build",
        "wallet.png"
      ],
      "gitHash": "6558d04c89e7c1abdfd05e7c8931ac2ccc5f91ab",
      "group": "static",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "/",
          "protocol": "tcp",
          "type": "web"
        }
      ],
      "keywords": [
        "Wallet"
      ],
      "license": "Apache-2.0",
      "logo": "wallet.png",
      "main": "build",
      "name": "abt-wallet",
      "nftFactory": "",
      "path": "/static/abt-wallet",
      "payment": {
        "price": [],
        "share": []
      },
      "requirements": {
        "abtnode": ">=1.2.5",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-login.png",
        "1-assets.png",
        "2-balance.png",
        "3-txs.png",
        "4-nft.png",
        "5-bridge-move.png",
        "6-move-history.png"
      ],
      "scripts": {
        "dev": "npm run start"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-25T04:06:10.044Z",
          "sig": "z3PRDByqy3njtFJstStTWmmvZkYjkrBj7Ce1ki5bdZxYm2B9tuBMGF3VraFEXgY6TGYEbLDj1aJqUyDnJqu36iVAT"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-25T04:06:08.539Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "abt-wallet",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z2SPE1i4dRuCZbm4LMXmsrgck586ZpkjEbcBfiCoCBSfe6BTGAAqjyXCrP2hBnGbTtjm479LvTkawR2QorHNfWedY"
        },
        {
          "created": "2022-01-25T01:41:09.981Z",
          "name": "abt-wallet",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z5coEs9hceL2as1ydFGdzf6G2zz1an364AH9FhfHhqAFPKrK6XNTXrRCtmLi4ptnBPiaCHCZepjfmQ74mpT4KMbK6",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.1",
      "timeout": {
        "start": 10
      },
      "title": "DID Wallet",
      "version": "3.10.0"
    },
    "category": {
      "name": "blockchain",
      "locales": {
        "zh": "区块链",
        "en": "Blockchain"
      },
      "_id": "ehbHn3Ceu9UQHRtQ",
      "createdAt": "2022-01-11T01:49:44.009Z",
      "updatedAt": "2022-01-11T01:49:44.009Z"
    },
    "lastPublishedAt": "2022-01-25T04:06:10.054Z",
    "permission": "Public"
  },
  {
    "_id": "4EgmBLEyhZBuYVW9",
    "did": "z8iZyP8q92ehxgvn93PHyF1euqiP4bXVtryjh",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-04-20T09:36:53.024Z",
    "updatedAt": "2022-03-18T07:54:37.918Z",
    "status": "normal",
    "stats": {
      "downloads": 181
    },
    "currentVersion": {
      "did": "z8iZyP8q92ehxgvn93PHyF1euqiP4bXVtryjh",
      "version": "1.14.25",
      "uploadedAt": "2022-03-18T06:45:18.684Z",
      "_id": "upQ6POpNcNLp6bhL",
      "createdAt": "2022-03-18T06:45:18.685Z",
      "updatedAt": "2022-03-18T06:45:18.685Z"
    },
    "latestVersion": {
      "did": "z8iZyP8q92ehxgvn93PHyF1euqiP4bXVtryjh",
      "version": "1.14.25",
      "uploadedAt": "2022-03-18T06:45:18.684Z",
      "_id": "upQ6POpNcNLp6bhL",
      "createdAt": "2022-03-18T06:45:18.685Z",
      "updatedAt": "2022-03-18T06:45:18.685Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "wangshijun2010@gmail.com",
        "name": "wangshijun",
        "url": "http://github.com/wangshijun"
      },
      "capabilities": {
        "clusterMode": true,
        "component": false
      },
      "children": [
        {
          "mountPoints": [
            {
              "child": {
                "interfaceName": "publicUrl"
              },
              "root": {
                "interfaceName": "publicUrl",
                "prefix": "/api"
              }
            }
          ],
          "name": "@ocap/qldb-chain-api",
          "resolved": "https://registry.arcblock.io/api/blocklets/z8iZuohP9o6jfKeHgZK1gxke6usvrgK8Vw7B6/blocklet.json"
        },
        {
          "mountPoints": [
            {
              "child": {
                "interfaceName": "publicUrl"
              },
              "root": {
                "interfaceName": "publicUrl",
                "prefix": "/"
              }
            }
          ],
          "name": "@arcblock/block-explorer",
          "resolved": "https://registry.arcblock.io/api/blocklets/z8iZyVVn6XsvcuiYhtdw3GoasMbtqR9BjvJz3/blocklet.json"
        }
      ],
      "community": "",
      "description": "Blockchain manager blocklet that combines QLDB chain API and block explorer blocklet",
      "did": "z8iZyP8q92ehxgvn93PHyF1euqiP4bXVtryjh",
      "dist": {
        "integrity": "sha512-Iu2/Ke8aeH7IrdaZQ8G9ZwPbBkWPlokt2F7QvNgavb+Y+1wSWvFYV236ACppsFL1AuBsh3VHgEyN80tnGCgjEw==",
        "tarball": "@ocapqldb-chain-manager-1.14.25.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "/api",
          "description": "Default chain endpoint of explorer",
          "name": "EXPLORER_CHAIN_ENDPOINT",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "blocklet.md",
        "screenshots/"
      ],
      "gitHash": "52a5499e4794af7f973a6e61dea78cb2e61c10a4",
      "group": "gateway",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "type": "web"
        }
      ],
      "license": "",
      "name": "@ocap/qldb-chain-manager",
      "nftFactory": "",
      "path": "/gateway/@ocap/qldb-chain-manager",
      "payment": {
        "price": [],
        "share": []
      },
      "requirements": {
        "abtnode": ">=1.2.5",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-home.png",
        "1-txs.png",
        "2-account.png",
        "3-asset.png",
        "4-bridge.png",
        "5-bridge-move.png",
        "6-transfer.png"
      ],
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:37.901Z",
          "sig": "z4jDPPHQe5H5ucdGRaQ7x1v2tNNneFmJy82Wu7s62SSKNo9QsBzYVAFZjzHo1whanMzD19QErqn6MvqzjTjNvmix6"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:35.903Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "@ocap/qldb-chain-manager",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z614BEKBNnoVWBBRZnjKxENaxHTHbXqfK2nnwt2VLNLF78ktwRsdt8YCGYAY7vsS3x8EiKEKskBdmd3GYHNuPam7x"
        },
        {
          "created": "2022-03-18T06:45:18.422Z",
          "name": "@ocap/qldb-chain-manager",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z5xdnZWuUQDA4Xt8XxuR3FKyMTdDtLW3nA46z9goZ7Hb7gNhEhbFEkecQwqvBHSG7mgdb4dyJAnwTkNQ6SwFbHnFg",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "timeout": {
        "start": 60
      },
      "title": "QLDB Chain Manager",
      "version": "1.14.25"
    },
    "category": {
      "name": "blockchain",
      "locales": {
        "zh": "区块链",
        "en": "Blockchain"
      },
      "_id": "ehbHn3Ceu9UQHRtQ",
      "createdAt": "2022-01-11T01:49:44.009Z",
      "updatedAt": "2022-01-11T01:49:44.009Z"
    },
    "lastPublishedAt": "2022-03-18T07:54:37.918Z",
    "permission": "Public"
  },
  {
    "_id": "FX6mviSt6m3QmIZ6",
    "did": "z8iZuohP9o6jfKeHgZK1gxke6usvrgK8Vw7B6",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-04-20T09:36:47.747Z",
    "updatedAt": "2022-03-18T07:54:27.307Z",
    "status": "normal",
    "stats": {
      "downloads": 458
    },
    "currentVersion": {
      "did": "z8iZuohP9o6jfKeHgZK1gxke6usvrgK8Vw7B6",
      "version": "1.14.25",
      "uploadedAt": "2022-03-18T06:45:11.324Z",
      "_id": "qbTIBmhRMqMjLNgn",
      "createdAt": "2022-03-18T06:45:11.325Z",
      "updatedAt": "2022-03-18T06:45:11.325Z"
    },
    "latestVersion": {
      "did": "z8iZuohP9o6jfKeHgZK1gxke6usvrgK8Vw7B6",
      "version": "1.14.25",
      "uploadedAt": "2022-03-18T06:45:11.324Z",
      "_id": "qbTIBmhRMqMjLNgn",
      "createdAt": "2022-03-18T06:45:11.325Z",
      "updatedAt": "2022-03-18T06:45:11.325Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "wangshijun2010@gmail.com",
        "name": "wangshijun",
        "url": "http://github.com/wangshijun"
      },
      "capabilities": {
        "clusterMode": true,
        "component": true
      },
      "children": [],
      "community": "",
      "description": "Blockchain api built upon OCAP SDK that uses QLDB and elasticsearch as storage",
      "did": "z8iZuohP9o6jfKeHgZK1gxke6usvrgK8Vw7B6",
      "dist": {
        "integrity": "sha512-CmR/plywyZ8d5AbVfIr9Xkqsz85JP37LQol5sWP49/mighO3kGh9bLU1RhmAGOO7O4ZTUj+eL1rVcKMqproVgA==",
        "tarball": "@ocapqldb-chain-api-1.14.25.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "",
          "description": "Please provide AWS QLDB access key",
          "name": "AWS_ACCESS_KEY_ID",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "Please provide AWS QLDB access secret",
          "name": "AWS_ACCESS_KEY_SECRET",
          "required": true,
          "secure": true
        },
        {
          "default": "",
          "description": "Please provide AWS QLDB ledger region",
          "name": "AWS_QLDB_REGION",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "Please provide AWS QLDB ledger name",
          "name": "AWS_QLDB_LEDGER",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "Please provide elastic search endpoint",
          "name": "ELASTIC_SEARCH_ENDPOINT",
          "required": true,
          "secure": true
        },
        {
          "default": "",
          "description": "Please provide elastic search username for authentication",
          "name": "ELASTIC_SEARCH_USERNAME",
          "required": false,
          "secure": true
        },
        {
          "default": "",
          "description": "Please provide elastic search password for authentication",
          "name": "ELASTIC_SEARCH_PASSWORD",
          "required": false,
          "secure": true
        },
        {
          "default": "",
          "description": "Please provide elastic search table prefix",
          "name": "ELASTIC_SEARCH_INDEX_PREFIX",
          "required": false,
          "secure": false
        },
        {
          "default": "test-chain",
          "description": "Please provide id of the chain",
          "name": "CHAIN_ID",
          "required": true,
          "secure": false
        },
        {
          "default": "TestChainToken",
          "description": "Please provide name of the chain token",
          "name": "CHAIN_TOKEN_NAME",
          "required": false,
          "secure": false
        },
        {
          "default": "18",
          "description": "Please provide decimal of then chain token",
          "name": "CHAIN_TOKEN_DECIMAL",
          "required": false,
          "secure": false
        },
        {
          "default": "MYT",
          "description": "Please provide symbol of the chain token",
          "name": "CHAIN_TOKEN_SYMBOL",
          "required": false,
          "secure": false
        },
        {
          "default": "1000000000",
          "description": "Please provide supply of the chain token",
          "name": "CHAIN_TOKEN_SUPPLY",
          "required": false,
          "secure": false
        },
        {
          "default": "",
          "description": "Please provide preferred address of chain token",
          "name": "CHAIN_TOKEN_ADDRESS",
          "required": false,
          "secure": false
        },
        {
          "default": "",
          "description": "Please provide contract address of the foreign chain token",
          "name": "CHAIN_TOKEN_FOREIGN_CONTRACT_ADDRESS",
          "required": false,
          "secure": false
        },
        {
          "default": "eth",
          "description": "Please provide type of the foreign chain",
          "name": "CHAIN_TOKEN_FOREIGN_CHAIN_TYPE",
          "required": false,
          "secure": false
        },
        {
          "default": "rinkeby",
          "description": "Please provide name of the foreign chain",
          "name": "CHAIN_TOKEN_FOREIGN_CHAIN_NAME",
          "required": false,
          "secure": false
        },
        {
          "default": "4",
          "description": "Please provide id of the foreign chain",
          "name": "CHAIN_TOKEN_FOREIGN_CHAIN_ID",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "blocklet.md",
        "screenshots/"
      ],
      "gitHash": "52a5499e4794af7f973a6e61dea78cb2e61c10a4",
      "group": "dapp",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "type": "web"
        }
      ],
      "keywords": [],
      "license": "",
      "main": "blocklet.zip",
      "name": "@ocap/qldb-chain-api",
      "nftFactory": "",
      "path": "/dapp/@ocap/qldb-chain-api",
      "payment": {
        "price": [],
        "share": []
      },
      "requirements": {
        "abtnode": ">=1.1.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-home.png",
        "1-txs.png",
        "2-account.png",
        "3-asset.png",
        "4-bridge.png",
        "5-bridge-move.png",
        "6-transfer.png"
      ],
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:27.285Z",
          "sig": "z2z8Qs6d4LAvigTgdWiHiNhN5voSw5kvHK9CBxh37nChcYUvtVrAk2nWxkGZb6vDPHZ2SBokdyQm6o8YeG4B6RvmB"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:23.991Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "@ocap/qldb-chain-api",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z5Ct6UAN414SHqGKW5tYmWMSogUbT2XiDUjx53H87BFWFd7a8G17AYaZrYihAAEv7EsdYoA3JxPSn55K2qTbMFmWW"
        },
        {
          "created": "2022-03-18T06:45:10.756Z",
          "name": "@ocap/qldb-chain-api",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z5NxEyEMwtg3jSTSUqwhwqrZQ3w5EBxCwHwyqcVS4fBxLQ3TnC7iybDgbtV1Xa57sFinZrj1q2N2qGgvsSJQu3EoP",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "timeout": {
        "start": 60
      },
      "title": "QLDB Chain API",
      "version": "1.14.25"
    },
    "category": {
      "name": "blockchain",
      "locales": {
        "zh": "区块链",
        "en": "Blockchain"
      },
      "_id": "ehbHn3Ceu9UQHRtQ",
      "createdAt": "2022-01-11T01:49:44.009Z",
      "updatedAt": "2022-01-11T01:49:44.009Z"
    },
    "lastPublishedAt": "2022-03-18T07:54:27.307Z",
    "permission": "Public"
  },
  {
    "_id": "Xqk7zifU5INWvhts",
    "did": "z8ia2KGe3icfgRcVc9C1qCbWTBbpP2TrfPu7T",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-04-20T09:36:10.976Z",
    "updatedAt": "2022-03-18T07:54:16.537Z",
    "status": "normal",
    "stats": {
      "downloads": 232
    },
    "currentVersion": {
      "did": "z8ia2KGe3icfgRcVc9C1qCbWTBbpP2TrfPu7T",
      "version": "1.14.25",
      "uploadedAt": "2022-03-18T06:44:49.256Z",
      "_id": "Lk0GNapAWMCNev1r",
      "createdAt": "2022-03-18T06:44:49.257Z",
      "updatedAt": "2022-03-18T06:44:49.257Z"
    },
    "latestVersion": {
      "did": "z8ia2KGe3icfgRcVc9C1qCbWTBbpP2TrfPu7T",
      "version": "1.14.25",
      "uploadedAt": "2022-03-18T06:44:49.256Z",
      "_id": "Lk0GNapAWMCNev1r",
      "createdAt": "2022-03-18T06:44:49.257Z",
      "updatedAt": "2022-03-18T06:44:49.257Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "wangshijun2010@gmail.com",
        "name": "wangshijun",
        "url": "http://github.com/wangshijun"
      },
      "capabilities": {
        "clusterMode": false,
        "component": false
      },
      "children": [
        {
          "mountPoints": [
            {
              "child": {
                "interfaceName": "publicUrl"
              },
              "root": {
                "interfaceName": "publicUrl",
                "prefix": "/api"
              }
            }
          ],
          "name": "@ocap/fs-chain-api",
          "resolved": "https://registry.arcblock.io/api/blocklets/z8iZzecBVDH2M8kW5hrQ4wRubVksjtjNxH63z/blocklet.json"
        },
        {
          "mountPoints": [
            {
              "child": {
                "interfaceName": "publicUrl"
              },
              "root": {
                "interfaceName": "publicUrl",
                "prefix": "/"
              }
            }
          ],
          "name": "@arcblock/block-explorer",
          "resolved": "https://registry.arcblock.io/api/blocklets/z8iZyVVn6XsvcuiYhtdw3GoasMbtqR9BjvJz3/blocklet.json"
        }
      ],
      "community": "",
      "description": "Blockchain manager blocklet that combines FS chain API and block explorer blocklet",
      "did": "z8ia2KGe3icfgRcVc9C1qCbWTBbpP2TrfPu7T",
      "dist": {
        "integrity": "sha512-FBBegARymv9yqBRlikY3FEJAilBQvYZjr4rEgib9k8Yj1XwHTtrmWaPSNWQNXZIHYfWXfZmTxEvpu+mzC+iQ6w==",
        "tarball": "@ocapfs-chain-manager-1.14.25.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "/api",
          "description": "Default chain endpoint of explorer",
          "name": "EXPLORER_CHAIN_ENDPOINT",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "blocklet.md",
        "screenshots/"
      ],
      "gitHash": "52a5499e4794af7f973a6e61dea78cb2e61c10a4",
      "group": "gateway",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "type": "web"
        }
      ],
      "license": "",
      "name": "@ocap/fs-chain-manager",
      "nftFactory": "",
      "path": "/gateway/@ocap/fs-chain-manager",
      "payment": {
        "price": [],
        "share": []
      },
      "requirements": {
        "abtnode": ">=1.2.5",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-home.png",
        "1-txs.png",
        "2-account.png",
        "3-asset.png",
        "4-bridge.png",
        "5-bridge-move.png",
        "6-transfer.png"
      ],
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:16.525Z",
          "sig": "z5RqCRHxeenjwc8BAV6XVt9CrazDXwq6QSQFjuRe3fnqUuu4PA7YR97amp2zyNxo42GJivrNc7bd7UTgGnYXtZpKm"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:14.016Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "@ocap/fs-chain-manager",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z2UG4Ayw2ReKLqv2BY8S3ug8iqYHWRG4w2Nvrc7GgHUKewQasBB3YkhMFk5oUfLDY4KvHih77ocYXLc35sL4mUDSV"
        },
        {
          "created": "2022-03-18T06:44:47.741Z",
          "name": "@ocap/fs-chain-manager",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z3jc6rYst67823edCaYTAyk3M89XYbcZyNHVdRshGHsvNqbaGCEo78tDs6Zg2Qm1WUtM5rkzXPj57NuTtcKd18dnt",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "timeout": {
        "start": 60
      },
      "title": "FS Chain Manager",
      "version": "1.14.25"
    },
    "category": {
      "name": "developer-tools",
      "locales": {
        "en": "Developer Tools",
        "zh": "开发者工具"
      },
      "_id": "UXLwYKl1wa1qAhVe",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:45.576Z"
    },
    "lastPublishedAt": "2022-03-18T07:54:16.536Z",
    "permission": "Public"
  },
  {
    "_id": "UAEPuEC072n7qJMc",
    "did": "z8ia29UsENBg6tLZUKi2HABj38Cw1LmHZocbQ",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-04-16T02:54:19.567Z",
    "updatedAt": "2022-03-18T12:28:06.522Z",
    "status": "normal",
    "stats": {
      "downloads": 205
    },
    "currentVersion": {
      "did": "z8ia29UsENBg6tLZUKi2HABj38Cw1LmHZocbQ",
      "version": "0.5.38",
      "uploadedAt": "2022-03-17T07:36:16.676Z",
      "_id": "yb9EjZ7WOXl5Fvua",
      "createdAt": "2022-03-17T07:36:16.680Z",
      "updatedAt": "2022-03-17T07:36:16.680Z"
    },
    "latestVersion": {
      "did": "z8ia29UsENBg6tLZUKi2HABj38Cw1LmHZocbQ",
      "version": "0.5.39",
      "uploadedAt": "2022-03-18T12:28:06.486Z",
      "_id": "EEzi59lyi7VqZDDh",
      "createdAt": "2022-03-18T12:28:06.504Z",
      "updatedAt": "2022-03-18T12:28:06.504Z"
    },
    "draftVersion": {
      "did": "z8ia29UsENBg6tLZUKi2HABj38Cw1LmHZocbQ",
      "version": "0.5.39",
      "uploadedAt": "2022-03-18T12:28:06.486Z",
      "_id": "EEzi59lyi7VqZDDh",
      "createdAt": "2022-03-18T12:28:06.504Z",
      "updatedAt": "2022-03-18T12:28:06.504Z"
    },
    "meta": {
      "author": {
        "email": "blocklet@arcblock.io",
        "name": "Arcblock"
      },
      "capabilities": {
        "clusterMode": false,
        "component": false
      },
      "children": [
        {
          "mountPoints": [
            {
              "child": {
                "interfaceName": "publicUrl"
              },
              "root": {
                "interfaceName": "publicUrl",
                "prefix": "/store"
              }
            }
          ],
          "name": "nft-store",
          "resolved": "https://store.blocklet.dev/api/blocklets/z8iZqkCjLP6TZpR12tT3jESWxB8SGzNsx8nZa/blocklet.json"
        }
      ],
      "community": "https://community.arcblockio.cn",
      "description": "Serve blocklet store and an embed NFT store for user to purchase blocklets.",
      "did": "z8ia29UsENBg6tLZUKi2HABj38Cw1LmHZocbQ",
      "dist": {
        "integrity": "sha512-+L4n6+25sEGKjFjI+KEe8WO5MyNnuOfI/fjrDt6Rqs6bg7UuqHZqY9e0aOMvO4qzU9/Ow1RKaqwPUN7AbO5WLw==",
        "tarball": "blocklet-registry-service-0.5.38.tgz"
      },
      "documentation": "https://docs.arcblock.io",
      "environments": [
        {
          "default": "",
          "description": "Please provide a logo for the store",
          "name": "STORE_LOGO",
          "required": false,
          "secure": false
        },
        {
          "default": "arcblock",
          "description": "Please provide the maintainer for the store",
          "name": "STORE_MAINTAINER",
          "required": true,
          "secure": false
        },
        {
          "default": "0.3",
          "description": "Minimum requirement of blocklet payment share to accept publish",
          "name": "SHARE_REQUIREMENT",
          "required": false,
          "secure": false
        },
        {
          "default": "https://beta.abtnetwork.io/api/",
          "description": "Please provide endpoint of the chain where NFT factory are stored",
          "name": "CHAIN_HOST",
          "required": true,
          "secure": false
        },
        {
          "default": "https://install.arcblock.io/launch/",
          "description": "Address to launch blocklet",
          "name": "LAUNCH_URL",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "screenshots",
        "public",
        "api/hooks/*.js",
        "migration/*.js",
        "logo.svg",
        "blocklet.md",
        "README.md",
        "build"
      ],
      "gitHash": "e488e35a1ffb2dcb0688aecb5a02ce54fd8a1e6b",
      "group": "dapp",
      "homepage": "https://github.com/blocklet/blocklet-store",
      "interfaces": [
        {
          "endpoints": [
            {
              "meta": {
                "params": [
                  {
                    "description": "Blocklet purchase credential factory address",
                    "name": "factory"
                  }
                ],
                "payable": true,
                "vcType": "BlockletPurchaseCredential"
              },
              "path": "/store/api/did/acquire-asset/token",
              "type": "IssueVc"
            }
          ],
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "services": [
            {
              "config": {
                "blockUnauthenticated": false
              },
              "name": "@abtnode/auth-service"
            }
          ],
          "type": "web"
        }
      ],
      "keywords": [
        "blocklet",
        "registry",
        "store"
      ],
      "license": "Apache-2.0",
      "logo": "logo.svg",
      "main": "blocklet.zip",
      "name": "blocklet-registry-service",
      "nftFactory": "",
      "path": "/dapp/blocklet-registry-service",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/blocklet/blocklet-store.git"
      },
      "requirements": {
        "abtnode": ">=1.2.6",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-home.png",
        "1-detail.png",
        "2-detail-versions.png",
        "3-detail-download.png"
      ],
      "scripts": {
        "dev": "npm run start",
        "preStart": "node api/hooks/pre-start.js"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-17T08:09:58.796Z",
          "sig": "z41uysiY1DT6aFT2cRos5hdv2ZeqzN2Hm1u7BDvbFmCukttPFzKmJmrjdbwiciRnjtAc4wfpwGg5x4EZTrFSz9m2r"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-17T08:09:57.134Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "blocklet-registry-service",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z8e94xHQxzsBcTCEsiTdBe1GMR25XAc1xGe65PFwugbv7Q6Y6BbQTgRY9V4j6tCNKX9oaKdJjXC8gYqi9tUun6G4"
        },
        {
          "created": "2022-03-17T07:36:14.699Z",
          "name": "blocklet-registry-service",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z3x4LEG3WaXjeGtHwjUjem97VLUrYFXpcpsSctr8MkHz7QPdQ95a9Ru2w1XxTB1xZLodRqtunVvVBLZa5Ei3vo17h",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "support": "support@arcblock.io",
      "timeout": {
        "start": 60
      },
      "title": "Blocklet Store",
      "version": "0.5.38"
    },
    "category": {
      "name": "dao",
      "locales": {
        "zh": "DAO",
        "en": "DAO"
      },
      "_id": "aQFpIUzL2vshltnY",
      "createdAt": "2022-01-11T01:52:00.394Z",
      "updatedAt": "2022-01-11T01:52:00.394Z"
    },
    "lastPublishedAt": "2022-03-17T08:09:58.807Z",
    "permission": "Public"
  },
  {
    "_id": "ehMgfSQSLnH4JH7l",
    "did": "z8iZzecBVDH2M8kW5hrQ4wRubVksjtjNxH63z",
    "owner": {
      "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-03-24T04:32:38.055Z",
    "updatedAt": "2022-03-18T07:54:06.373Z",
    "status": "normal",
    "stats": {
      "downloads": 673
    },
    "currentVersion": {
      "did": "z8iZzecBVDH2M8kW5hrQ4wRubVksjtjNxH63z",
      "version": "1.14.25",
      "uploadedAt": "2022-03-18T06:44:40.574Z",
      "_id": "nsKx5UBPteI2vnM6",
      "createdAt": "2022-03-18T06:44:40.584Z",
      "updatedAt": "2022-03-18T06:44:40.584Z"
    },
    "latestVersion": {
      "did": "z8iZzecBVDH2M8kW5hrQ4wRubVksjtjNxH63z",
      "version": "1.14.25",
      "uploadedAt": "2022-03-18T06:44:40.574Z",
      "_id": "nsKx5UBPteI2vnM6",
      "createdAt": "2022-03-18T06:44:40.584Z",
      "updatedAt": "2022-03-18T06:44:40.584Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "wangshijun2010@gmail.com",
        "name": "wangshijun",
        "url": "http://github.com/wangshijun"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [],
      "community": "",
      "description": "Blockchain api built upon OCAP SDK that persists data on the disk",
      "did": "z8iZzecBVDH2M8kW5hrQ4wRubVksjtjNxH63z",
      "dist": {
        "integrity": "sha512-mVEVqEmhUjqgjtjl9dSEck3o553QgNrTTuIT1DfEiP/142C7Ex5EknOkwGoCz1BWXBV3B22GLh3/iNqQF0amUA==",
        "tarball": "@ocapfs-chain-api-1.14.25.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "test-chain",
          "description": "Please provide id of the chain",
          "name": "CHAIN_ID",
          "required": true,
          "secure": false
        },
        {
          "default": "TestChainToken",
          "description": "Please provide name of the chain token",
          "name": "CHAIN_TOKEN_NAME",
          "required": false,
          "secure": false
        },
        {
          "default": "18",
          "description": "Please provide decimal of then chain token",
          "name": "CHAIN_TOKEN_DECIMAL",
          "required": false,
          "secure": false
        },
        {
          "default": "MYT",
          "description": "Please provide symbol of the chain token",
          "name": "CHAIN_TOKEN_SYMBOL",
          "required": false,
          "secure": false
        },
        {
          "default": "1000000000",
          "description": "Please provide supply of the chain token",
          "name": "CHAIN_TOKEN_SUPPLY",
          "required": false,
          "secure": false
        },
        {
          "default": "",
          "description": "Please provide preferred address of chain token",
          "name": "CHAIN_TOKEN_ADDRESS",
          "required": false,
          "secure": false
        },
        {
          "default": "",
          "description": "Please provide contract address of the foreign chain token",
          "name": "CHAIN_TOKEN_FOREIGN_CONTRACT_ADDRESS",
          "required": false,
          "secure": false
        },
        {
          "default": "eth",
          "description": "Please provide type of the foreign chain",
          "name": "CHAIN_TOKEN_FOREIGN_CHAIN_TYPE",
          "required": false,
          "secure": false
        },
        {
          "default": "rinkeby",
          "description": "Please provide name of the foreign chain",
          "name": "CHAIN_TOKEN_FOREIGN_CHAIN_NAME",
          "required": false,
          "secure": false
        },
        {
          "default": "4",
          "description": "Please provide id of the foreign chain",
          "name": "CHAIN_TOKEN_FOREIGN_CHAIN_ID",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "blocklet.md",
        "screenshots/"
      ],
      "gitHash": "52a5499e4794af7f973a6e61dea78cb2e61c10a4",
      "group": "dapp",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "http",
          "type": "web"
        }
      ],
      "keywords": [],
      "license": "",
      "main": "blocklet.zip",
      "name": "@ocap/fs-chain-api",
      "nftFactory": "",
      "path": "/dapp/@ocap/fs-chain-api",
      "payment": {
        "price": [],
        "share": []
      },
      "requirements": {
        "abtnode": ">=1.1.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-home.png",
        "1-txs.png",
        "2-account.png",
        "3-asset.png",
        "4-bridge.png",
        "5-bridge-move.png",
        "6-transfer.png"
      ],
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:06.353Z",
          "sig": "z3FYcJy5nwCqK9xKfsqTct4wFyA1kwd2RftSXx8eMaX1TJTu6DebQX6FwCmJPdmP3zGGNgurdStqPMx393Dgh9ygk"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-18T07:54:04.651Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "@ocap/fs-chain-api",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z5qWHDNakUw2XDq8LaPvvi5fGZUzJtJbiMfV2BYgGjBXPhA7mNzfrorhuzfcK3roexdRwXiGkfspCdgVPC7PgT5F5"
        },
        {
          "created": "2022-03-18T06:44:38.272Z",
          "name": "@ocap/fs-chain-api",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "zp8Vz97TuBGFknrd96oFuhz5UHr2GcNLxEo8m9SSPuYVJyDKb8HEMJWELnZ2XwnkAwVjCQux2uEFAvziLHF1ti5Z",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "timeout": {
        "start": 60
      },
      "title": "File Chain API",
      "version": "1.14.25"
    },
    "category": {
      "name": "developer-tools",
      "locales": {
        "en": "Developer Tools",
        "zh": "开发者工具"
      },
      "_id": "UXLwYKl1wa1qAhVe",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:45.576Z"
    },
    "lastPublishedAt": "2022-03-18T07:54:06.372Z",
    "permission": "Public"
  },
  {
    "_id": "jVX7DzkEU809nZDU",
    "did": "z8iZtvDiFYckxQ6rECTD2bL1p35WGyTDyq1W8",
    "owner": {
      "pk": "0x5a39f65e67a2526a844ebbe2d201e20d11f00331144fa4eb51589e928e7b1fa6",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-01-15T06:25:22.701Z",
    "updatedAt": "2022-03-18T10:56:10.977Z",
    "status": "normal",
    "stats": {
      "downloads": 207
    },
    "currentVersion": {
      "did": "z8iZtvDiFYckxQ6rECTD2bL1p35WGyTDyq1W8",
      "version": "0.20.7",
      "uploadedAt": "2022-03-11T08:50:21.922Z",
      "_id": "9ah5oFLD7mExg5ND",
      "createdAt": "2022-03-11T08:50:21.929Z",
      "updatedAt": "2022-03-11T08:50:21.929Z"
    },
    "latestVersion": {
      "did": "z8iZtvDiFYckxQ6rECTD2bL1p35WGyTDyq1W8",
      "version": "0.20.7",
      "uploadedAt": "2022-03-11T08:50:21.922Z",
      "_id": "9ah5oFLD7mExg5ND",
      "createdAt": "2022-03-11T08:50:21.929Z",
      "updatedAt": "2022-03-11T08:50:21.929Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "shijun@arcblock.io",
        "name": "wangshijun"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [],
      "community": "",
      "description": "Verify once and use everywhere.",
      "did": "z8iZtvDiFYckxQ6rECTD2bL1p35WGyTDyq1W8",
      "dist": {
        "integrity": "sha512-luTKcK2CSg2x1mTwyQ2OumFU/yV22jBK1mC9JxyaacAeDBhQ3Drp295B0tHoEMyhmiMDAq8VfeP0XzybLiOA6A==",
        "tarball": "@arcblockdid-kyc-0.20.7.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "",
          "description": "Please provide a mailgun smtp user name to start",
          "name": "MAILGUN_SMTP_USER",
          "required": true,
          "secure": true
        },
        {
          "default": "",
          "description": "Please provide a mailgun smtp password to start",
          "name": "MAILGUN_SMTP_PASSWORD",
          "required": true,
          "secure": true
        },
        {
          "default": "beta",
          "description": "Please provide id of local chain id",
          "name": "APP_CHAIN_ID",
          "required": true,
          "secure": false
        },
        {
          "default": "https://beta.abtnetwork.io/api/",
          "description": "Please provide endpoint of local chain host",
          "name": "APP_CHAIN_HOST",
          "required": true,
          "secure": false
        }
      ],
      "files": [
        "api/libs/hooks/pre-start.js"
      ],
      "gitHash": "55eb3bdad23e4245b7099b148c01225bfca3c370",
      "group": "dapp",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "tcp",
          "services": [
            {
              "config": {
                "blockUnauthenticated": true,
                "ignoreUrls": [
                  "/api/did/**",
                  "/api/agent/**",
                  "/api/nft/**",
                  "/blocklet/**",
                  "/instance/**"
                ]
              },
              "name": "@abtnode/auth-service"
            }
          ],
          "type": "web"
        }
      ],
      "keywords": [
        "arcblock",
        "forge",
        "starter",
        "react",
        "javascript"
      ],
      "license": "Apache-2.0",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "@arcblock/did-kyc",
      "nftFactory": "",
      "path": "/dapp/@arcblock/did-kyc",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/ArcBlock/forge-dapp-starters.git#master"
      },
      "requirements": {
        "abtnode": ">=1.1.17"
      },
      "screenshots": [],
      "scripts": {
        "dev": "npm run start",
        "preDeploy": "npm run bundle",
        "preStart": "node api/libs/hooks/pre-start.js"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-12T23:22:55.924Z",
          "sig": "z3zEy44KwiizRxYyvLiBaPBmpN8KLzDG9yhXgtA6vZz6qqvdY4u6vVWRgT3HniW9N156RHsBbQuinehrmkp4XCRgX"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-12T23:22:54.864Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "@arcblock/did-kyc",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z5RuTxL8NeeFasmk6LVapnHq9xbvDnYo3PUHMZvxCj1Tm8Uu4FVH8RcJmm5FUUEhcoPEBdJcyQEqp9kiEx4M7Wysi"
        },
        {
          "created": "2022-03-11T08:50:19.928Z",
          "name": "@arcblock/did-kyc",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z4kPnEZa8HRP8ocAWWWrT1ej6aAAHhAbY8Nq7JvQb5u4gSXvBJYxW2BGscNLc2XjU9XVMowQvyYhKuj27TC1SJBH4",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "timeout": {
        "start": 10
      },
      "title": "DID KYC",
      "version": "0.20.7"
    },
    "category": {
      "name": "dao",
      "locales": {
        "zh": "DAO",
        "en": "DAO"
      },
      "_id": "aQFpIUzL2vshltnY",
      "createdAt": "2022-01-11T01:52:00.394Z",
      "updatedAt": "2022-01-11T01:52:00.394Z"
    },
    "permission": "Public",
    "lastPublishedAt": "2022-03-12T23:22:55.945Z"
  },
  {
    "_id": "0TuTgfLKYI3kerPP",
    "did": "z8iZtEerb5YvuaTrkkryeAMexfVTk7EaUnmVU",
    "owner": {
      "pk": "0x5a39f65e67a2526a844ebbe2d201e20d11f00331144fa4eb51589e928e7b1fa6",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-01-14T09:49:29.131Z",
    "updatedAt": "2022-02-18T03:58:52.289Z",
    "status": "blocked",
    "stats": {
      "downloads": 1052
    },
    "currentVersion": {
      "did": "z8iZtEerb5YvuaTrkkryeAMexfVTk7EaUnmVU",
      "version": "0.3.6",
      "uploadedAt": "2021-12-25T00:58:45.442Z",
      "_id": "TLNhCRwsSkgoc400",
      "createdAt": "2021-12-25T00:58:45.449Z",
      "updatedAt": "2021-12-25T00:58:45.449Z"
    },
    "latestVersion": {
      "did": "z8iZtEerb5YvuaTrkkryeAMexfVTk7EaUnmVU",
      "version": "0.3.6",
      "uploadedAt": "2021-12-25T00:58:45.442Z",
      "_id": "TLNhCRwsSkgoc400",
      "createdAt": "2021-12-25T00:58:45.449Z",
      "updatedAt": "2021-12-25T00:58:45.449Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "polunzh@gmail.com",
        "name": "polunzh",
        "url": "http://github.com/polunzh"
      },
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "https://community.arcblockio.cn",
      "description": "Manage Blocklet Server SSL certificates",
      "did": "z8iZtEerb5YvuaTrkkryeAMexfVTk7EaUnmVU",
      "dist": {
        "integrity": "sha512-ITQ2J6O85vGkcZjxkp4qs4E/bJNgysBfwStp7j7MeEDOkdvmezGnJveGjEIdwMzpmHcOQ0+rkONCAvUhWZGzMg==",
        "tarball": "certificates-manager-0.3.6.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "",
          "description": "Access key to manage certificates of the Blocklet Server",
          "name": "NODE_ACCESS_KEY",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "Access secret to manage certificates of the Blocklet Server",
          "name": "NODE_ACCESS_SECRET",
          "required": true,
          "secure": true
        },
        {
          "default": "",
          "description": "Domain name of current production node",
          "name": "NODE_DOMAIN",
          "required": true,
          "secure": false
        },
        {
          "default": "",
          "description": "The maintainer's email",
          "name": "MAINTAINER_EMAIL",
          "required": true,
          "secure": false
        },
        {
          "default": "false",
          "description": "Enable echo dns service or not",
          "name": "ENABLE_ECHO_DNS",
          "required": true,
          "secure": false
        },
        {
          "default": "(\\d{1,3})-(\\d{1,3})-(\\d{1,3})-(\\d{1,3})\\.ip\\.abtnet\\.io",
          "description": "ip regex string",
          "name": "ECHO_DNS_IP_REGEX",
          "required": false,
          "secure": false
        },
        {
          "default": "ip.abtnet.io",
          "description": "ip regex string",
          "name": "ECHO_DNS_DOMAIN",
          "required": false,
          "secure": false
        },
        {
          "default": "30",
          "description": "Days to renew the certificate before expires",
          "name": "DAYS_BEFORE_EXPIRE_TO_RENEWAL",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "build",
        "screenshots",
        "logo.png",
        "blocklet.md",
        "README.md",
        "hooks/*.js"
      ],
      "gitHash": "25997b1f93effe594a8ef4daf2bdd6fd4bf11886",
      "group": "dapp",
      "homepage": "",
      "interfaces": [
        {
          "name": "adminUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "tcp",
          "services": [
            {
              "config": {
                "ignoreUrls": [
                  "/api/dns/health"
                ],
                "invitedUserOnly": "not-first"
              },
              "name": "@abtnode/auth-service"
            }
          ],
          "type": "web"
        },
        {
          "name": "acmeChallenge",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "/.well-known/acme-challenge",
          "protocol": "tcp",
          "type": "wellknown"
        },
        {
          "name": "dns",
          "path": "/",
          "port": {
            "external": 53,
            "internal": "BLOCKLET_DNS_PORT"
          },
          "prefix": "*",
          "protocol": "udp",
          "type": "service"
        }
      ],
      "keywords": [
        "dapp",
        "ssl",
        "certificate",
        "dns"
      ],
      "license": "Apache-2.0",
      "logo": "logo.png",
      "main": "blocklet.zip",
      "name": "certificates-manager",
      "nftFactory": "",
      "path": "/dapp/certificates-manager",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/ArcBlock/abt-node.git#master"
      },
      "requirements": {
        "abtnode": ">=1.1.17"
      },
      "screenshots": [
        "domain_list.png",
        "add-domain.png"
      ],
      "scripts": {
        "dev": "npm run start",
        "preStart": "node hooks/pre-start.js"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2021-12-27T03:05:51.589Z",
          "sig": "z32pzpTqmhUon99LZzFcSwWL4VvNM32CiXHDkfZTbomt9ZbxDyjGCToWLYigq4Z9WNguw3GG1j4WoiUL8EwnwDZ6A"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2021-12-27T03:05:49.684Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "certificates-manager",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z3RZnkJUZ54bMbw7azp6UgQsprpt8gxwQXsxsUBEj19QLY3jyr836g5yPsWAjRiyNQbZ4pGhPABezTKPFzAeY6Kko"
        },
        {
          "created": "2021-12-25T00:58:42.419Z",
          "name": "certificates-manager",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "zFw2iyDRYkLifZGq3iacoC3b2kjuDfQAH3rCXGWK18sforgh6m9hMXDeVyqTHVr3mZptRzsxkC9G8nKJNfoY2ugE",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.0",
      "support": "support@arcblock.io",
      "timeout": {
        "start": 60
      },
      "title": "Certificates Manager",
      "version": "0.3.6"
    },
    "category": {
      "name": "productivity",
      "locales": {
        "zh": "生产工具",
        "en": "Productivity"
      },
      "_id": "Rke1R5ffuAuDhZJ6",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "permission": "Public",
    "lastPublishedAt": "2021-12-25T00:58:45.442Z"
  },
  {
    "_id": "FC3M1cNHCMtRctu2",
    "did": "z8iZtEm3ozV3yhZ3gZ7EXppsseS3bPV8wyPft",
    "owner": {
      "pk": "0x5a39f65e67a2526a844ebbe2d201e20d11f00331144fa4eb51589e928e7b1fa6",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-01-14T02:22:18.267Z",
    "updatedAt": "2022-02-18T03:58:52.299Z",
    "status": "blocked",
    "stats": {
      "downloads": 5279
    },
    "currentVersion": {
      "did": "z8iZtEm3ozV3yhZ3gZ7EXppsseS3bPV8wyPft",
      "version": "1.3.5",
      "uploadedAt": "2021-04-08T04:23:00.498Z",
      "_id": "WQQXizfqRWGwOJVp",
      "createdAt": "2021-11-01T04:09:59.442Z",
      "updatedAt": "2021-11-01T04:09:59.442Z"
    },
    "draftVersion": null,
    "meta": {
      "name": "abt-node-launcher",
      "version": "1.3.5",
      "description": "The blocklet that helps you manage ABT Node instances across cloud providers such as AWS, Azure",
      "keywords": [
        "dapp",
        "launcher"
      ],
      "author": {
        "name": "wangshijun",
        "email": "shijun@arcblock.io"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/ArcBlock/abt-node/tree/master/blocklets/abt-node-launcher"
      },
      "title": "ABT Node Launcher",
      "files": [
        "build",
        "screenshots",
        "logo.png",
        "blocklet.md",
        "README.md"
      ],
      "license": "Apache-2.0",
      "group": "dapp",
      "main": "blocklet.js",
      "logo": "logo.png",
      "community": "https://community.arcblockio.cn",
      "documentation": "",
      "homepage": "",
      "screenshots": [],
      "support": "support@arcblock.io",
      "environments": [
        {
          "name": "AWS_ACCESS_KEY_ID",
          "description": "AWS Access Key ID",
          "required": true,
          "secure": true,
          "default": ""
        },
        {
          "name": "AWS_SECRET_ACCESS_KEY",
          "description": "AWS Access Secret",
          "required": true,
          "secure": true,
          "default": ""
        },
        {
          "name": "AWS_SESSION_TOKEN",
          "description": "AWS Session Token",
          "required": false,
          "secure": true,
          "default": ""
        }
      ],
      "scripts": {
        "preDeploy": "npm run bundle",
        "dev": "npm run start"
      },
      "specVersion": "1.0.1",
      "did": "z8iZtEm3ozV3yhZ3gZ7EXppsseS3bPV8wyPft",
      "interfaces": [
        {
          "type": "web",
          "name": "adminUrl",
          "path": "/",
          "prefix": "*",
          "port": "BLOCKLET_PORT",
          "protocol": "tcp",
          "services": [
            {
              "name": "@abtnode/auth-service",
              "config": {
                "invitedUserOnly": "not-first"
              }
            }
          ]
        }
      ],
      "timeout": {
        "start": 10
      },
      "requirements": {
        "abtnode": ">=1.1.17"
      },
      "children": [],
      "gitHash": "cd1b143873e861994097e1b6f3331be0b8c6d5ce",
      "path": "/dapp/abt-node-launcher",
      "nftFactory": "",
      "dist": {
        "tarball": "abt-node-launcher-1.3.5.tgz",
        "integrity": "sha512-SCvT2w0vRhcTEY4DEyfR/NgUOXd+uMxvlVVFqKOsGy+bmVP8CF3XgW2aftJmDfWuvz7N2ff2Nzme17bKLGcWWQ=="
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Official Registry",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2021-04-08T04:23:00.500Z",
          "sig": "z3RBX9eRJYKwxN4i96CKZJ3NUADK3TWAJRsU1Yiyn5SaBaTVP1mEE1u4yiLTm4HnAMy7f4U3dJ3REij8cKcw4ZwbJ"
        },
        {
          "type": "ED25519",
          "name": "abt-node-launcher",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "created": "2021-04-08T04:22:58.502Z",
          "sig": "z2AH6EgYAmaVuE6jL1L6ZdRxhsDitZQefCoKkj4giKHJPokUrjbpRNBwGkD6wK7noX627qwECDssW7wMqJvPuRN3W"
        }
      ],
      "lastPublishedAt": "2021-04-08T04:23:00.498Z",
      "payment": {
        "price": [],
        "share": []
      }
    },
    "category": {
      "name": "productivity",
      "locales": {
        "zh": "生产工具",
        "en": "Productivity"
      },
      "_id": "Rke1R5ffuAuDhZJ6",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "permission": "Public",
    "lastPublishedAt": "2021-04-08T04:23:00.498Z",
    "latestVersion": {
      "did": "z8iZtEm3ozV3yhZ3gZ7EXppsseS3bPV8wyPft",
      "version": "1.3.5",
      "uploadedAt": "2021-04-08T04:23:00.498Z",
      "_id": "WQQXizfqRWGwOJVp",
      "createdAt": "2021-11-01T04:09:59.442Z",
      "updatedAt": "2021-11-01T04:09:59.442Z"
    }
  },
  {
    "_id": "HxlrWfxV5OynsHcK",
    "did": "z8ia1uD3MKujPYs2m28otbCJuTK6Y494r1xnC",
    "owner": {
      "pk": "0x5a39f65e67a2526a844ebbe2d201e20d11f00331144fa4eb51589e928e7b1fa6",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-01-14T02:17:33.618Z",
    "updatedAt": "2022-02-18T03:58:52.301Z",
    "status": "blocked",
    "stats": {
      "downloads": 3989
    },
    "currentVersion": {
      "did": "z8ia1uD3MKujPYs2m28otbCJuTK6Y494r1xnC",
      "version": "1.10.3",
      "uploadedAt": "2021-06-03T12:55:46.578Z",
      "_id": "GGfZ0Ux2T4JU3iBA",
      "createdAt": "2021-11-01T04:09:59.447Z",
      "updatedAt": "2021-11-01T04:09:59.447Z"
    },
    "latestVersion": {
      "did": "z8ia1uD3MKujPYs2m28otbCJuTK6Y494r1xnC",
      "version": "1.10.3",
      "uploadedAt": "2021-06-03T12:55:46.578Z",
      "_id": "GGfZ0Ux2T4JU3iBA",
      "createdAt": "2021-11-01T04:09:59.447Z",
      "updatedAt": "2021-11-01T04:09:59.447Z"
    },
    "draftVersion": null,
    "meta": {
      "name": "@arcblock/graphql-playground",
      "version": "1.10.3",
      "description": "A static dapp that supports connecting to any graphql endpoint",
      "keywords": [
        "graphql",
        "developer"
      ],
      "author": {
        "name": "wangshijun",
        "email": "shijun@arcblock.io",
        "url": "http://github.com/wangshijun"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/ArcBlock/block-explorer.git"
      },
      "files": [
        "static/",
        "screenshots/",
        "logo.png",
        "blocklet.md",
        "blocklet.js",
        "README.md"
      ],
      "license": "Apache-2.0",
      "homepage": "https://github.com/ArcBlock/block-explorer#readme",
      "group": "static",
      "main": "static",
      "title": "GraphQL Playground",
      "logo": "logo.png",
      "community": "https://gitter.im/ArcBlock/community",
      "documentation": "https://docs.arcblock.io",
      "support": "support@arcblock.io",
      "did": "z8ia1uD3MKujPYs2m28otbCJuTK6Y494r1xnC",
      "specVersion": "1.1.1",
      "interfaces": [
        {
          "type": "web",
          "name": "publicUrl",
          "path": "/",
          "prefix": "*",
          "port": "BLOCKLET_PORT",
          "protocol": "tcp"
        }
      ],
      "environments": [],
      "screenshots": [],
      "scripts": {},
      "capabilities": {
        "clusterMode": false
      },
      "timeout": {
        "start": 60
      },
      "requirements": {
        "abtnode": ">=1.2.0",
        "os": "*",
        "cpu": "*"
      },
      "children": [],
      "gitHash": "00d33b271eb60fa34ebed20dab28a8ef0f0925cc",
      "path": "/static/@arcblock/graphql-playground",
      "nftFactory": "",
      "dist": {
        "tarball": "@arcblockgraphql-playground-1.10.3.tgz",
        "integrity": "sha512-nokHjRUQXko1571o0W7rTXk+IlsLjJ2HIqlNENnF8w5zJ+0YZGHiaUGnDz3hcU2eM+NosKowaWlSAdf6k+0d6Q=="
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Official Registry",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2021-06-03T12:55:46.579Z",
          "sig": "z3NgUBJAHEoJmzQu8q35u8G923kBqBFetXm6JpUjhEAxUZHa32y99NJ519CVd7ZGNrBP7PgMzoLaDQBKgWLFrnj1G"
        },
        {
          "type": "ED25519",
          "name": "@arcblock/graphql-playground",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "created": "2021-06-03T12:55:44.610Z",
          "sig": "z2zrBPb3pz8rLXeFNcVKhpFZXTR4xRnNsU2jqm4VU9jr13dW5vWqBdoxnuh2gzAAS4w9QLEmJvrWHKp3sTrenzGfr"
        }
      ],
      "lastPublishedAt": "2021-06-03T12:55:46.578Z",
      "payment": {
        "price": [],
        "share": []
      }
    },
    "category": {
      "name": "developer-tools",
      "locales": {
        "en": "Developer Tools",
        "zh": "开发者工具"
      },
      "_id": "UXLwYKl1wa1qAhVe",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:45.576Z"
    },
    "permission": "Public",
    "lastPublishedAt": "2021-06-03T12:55:46.578Z"
  },
  {
    "_id": "3THSVoBxX71SBZlz",
    "did": "z8iZyVVn6XsvcuiYhtdw3GoasMbtqR9BjvJz3",
    "owner": {
      "pk": "0x5a39f65e67a2526a844ebbe2d201e20d11f00331144fa4eb51589e928e7b1fa6",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-01-14T02:15:54.551Z",
    "updatedAt": "2022-03-19T14:27:23.229Z",
    "status": "normal",
    "stats": {
      "downloads": 5640
    },
    "currentVersion": {
      "did": "z8iZyVVn6XsvcuiYhtdw3GoasMbtqR9BjvJz3",
      "version": "2.3.49",
      "uploadedAt": "2022-03-06T23:02:13.610Z",
      "_id": "TwQFjLUsiOa8cnKz",
      "createdAt": "2022-03-06T23:02:13.615Z",
      "updatedAt": "2022-03-06T23:02:13.615Z"
    },
    "latestVersion": {
      "did": "z8iZyVVn6XsvcuiYhtdw3GoasMbtqR9BjvJz3",
      "version": "2.3.49",
      "uploadedAt": "2022-03-06T23:02:13.610Z",
      "_id": "TwQFjLUsiOa8cnKz",
      "createdAt": "2022-03-06T23:02:13.615Z",
      "updatedAt": "2022-03-06T23:02:13.615Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "shijun@arcblock.io",
        "name": "wangshijun",
        "url": "http://github.com/wangshijun"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [],
      "community": "https://gitter.im/ArcBlock/community",
      "description": "a static dapp that supports connecting to any forge powered blockchain",
      "did": "z8iZyVVn6XsvcuiYhtdw3GoasMbtqR9BjvJz3",
      "dist": {
        "integrity": "sha512-+VwrDAPP68szuP7cMjSiFCVvqkCSp40PyOMf0KK4PxX1/Z8ktE4BtGh6h1A8qulN5G5jZFmiBLtics9KuqpcTg==",
        "tarball": "@arcblockblock-explorer-2.3.49.tgz"
      },
      "documentation": "https://docs.arcblock.io",
      "environments": [
        {
          "default": "",
          "description": "Default chain endpoint of explorer",
          "name": "EXPLORER_CHAIN_ENDPOINT",
          "required": false,
          "secure": false
        }
      ],
      "files": [
        "static/",
        "screenshots/",
        "logo.png",
        "blocklet.js",
        "blocklet.md",
        "README.md"
      ],
      "gitHash": "fb38e5d6d004e84b159abd021444a6dc7b842542",
      "group": "static",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "tcp",
          "type": "web"
        }
      ],
      "keywords": [
        "blockchain",
        "forge",
        "developer",
        "explorer"
      ],
      "license": "Apache-2.0",
      "logo": "logo.png",
      "main": "static",
      "name": "@arcblock/block-explorer",
      "nftFactory": "",
      "path": "/static/@arcblock/block-explorer",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/ArcBlock/block-explorer.git"
      },
      "requirements": {
        "abtnode": ">=1.2.5"
      },
      "screenshots": [
        "0-home.png",
        "1-txs.png",
        "2-account.png",
        "3-asset.png",
        "4-bridge.png",
        "5-bridge-move.png",
        "6-transfer.png"
      ],
      "scripts": {},
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-07T09:21:39.522Z",
          "sig": "z2SyTVyKbgnyPyQT5ct9fxS1nV1ZerFExHp7jswSK35SceY9VEwzJTfYFv77RNXGudc98TcUJJpSLoLsxFdNW9ZwS"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-07T09:21:38.388Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "@arcblock/block-explorer",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z5LvqHrZ1yqgD5A2mgzCj3DSEwA8yb5XTHd4ajLjAeXfZACLjADZDnuyveWgAuw22UT1AD8GCAB5Y7PwpMzzhLMXT"
        },
        {
          "created": "2022-03-06T23:02:11.917Z",
          "name": "@arcblock/block-explorer",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z2VwKitYjoPbMLFkHB8HudrCzjbZzNfTNSbMFXu1U8kPaEo2PTxET5ZGSYvzStHyNJtuN5UZJRp8BRCF5hxFzMLYi",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "support": "support@arcblock.io",
      "timeout": {
        "start": 60
      },
      "title": "Blockchain Explorer",
      "version": "2.3.49"
    },
    "category": {
      "name": "blockchain",
      "locales": {
        "zh": "区块链",
        "en": "Blockchain"
      },
      "_id": "ehbHn3Ceu9UQHRtQ",
      "createdAt": "2022-01-11T01:49:44.009Z",
      "updatedAt": "2022-01-11T01:49:44.009Z"
    },
    "lastPublishedAt": "2022-03-07T09:21:39.538Z",
    "permission": "Public"
  },
  {
    "_id": "SorZ4fuKd63nKFyA",
    "did": "z8ia4e5vAeDsQEE2P26bQqz9oWR1Lxg9qUMaV",
    "owner": {
      "pk": "0x5a39f65e67a2526a844ebbe2d201e20d11f00331144fa4eb51589e928e7b1fa6",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-01-14T02:00:20.319Z",
    "updatedAt": "2022-03-19T08:33:49.641Z",
    "status": "normal",
    "stats": {
      "downloads": 20855
    },
    "currentVersion": {
      "did": "z8ia4e5vAeDsQEE2P26bQqz9oWR1Lxg9qUMaV",
      "version": "1.1.21",
      "uploadedAt": "2022-01-29T10:02:19.519Z",
      "_id": "sOsvYanZx9eL6GGw",
      "createdAt": "2022-01-29T10:02:19.523Z",
      "updatedAt": "2022-01-29T10:02:19.523Z"
    },
    "latestVersion": {
      "did": "z8ia4e5vAeDsQEE2P26bQqz9oWR1Lxg9qUMaV",
      "version": "1.1.21",
      "uploadedAt": "2022-01-29T10:02:19.519Z",
      "_id": "sOsvYanZx9eL6GGw",
      "createdAt": "2022-01-29T10:02:19.523Z",
      "updatedAt": "2022-01-29T10:02:19.523Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "wangshijun2010@gmail.com",
        "name": "wangshijun",
        "url": "http://github.com/wangshijun"
      },
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "",
      "description": "Demo blocklet that shows how to serve a static html5 game with Blocklet Server",
      "did": "z8ia4e5vAeDsQEE2P26bQqz9oWR1Lxg9qUMaV",
      "dist": {
        "integrity": "sha512-5FE5O6XaPNsGT67kZ0KPaYUOSZ2QrUALzJg3LfUxHgk/IgQX8c+8gccXGCi53sY7AWlOaqP/7DO8FAEZZ4+xnw==",
        "tarball": "static-demo-blocklet-1.1.21.tgz"
      },
      "documentation": "",
      "environments": [],
      "files": [
        "app/",
        "screenshots/",
        "logo.png",
        "blocklet.yml",
        "blocklet.md",
        "README.md"
      ],
      "gitHash": "aefe37a5c7fa4fb24b2f23c5799af7bc9166a2b3",
      "group": "static",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "tcp",
          "type": "web"
        }
      ],
      "keywords": [
        "demo",
        "game",
        "blocklet"
      ],
      "license": "MIT",
      "logo": "logo.png",
      "main": "app",
      "name": "static-demo-blocklet",
      "nftFactory": "",
      "path": "/static/static-demo-blocklet",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/blocklet/html-2048-sample.git"
      },
      "requirements": {
        "abtnode": ">=1.1.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-home.png"
      ],
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-29T10:06:05.473Z",
          "sig": "z4DTXBYUuUksUnHMk1p7EGYV22AZtk65UFoCKX8QfqBQTYBuHV6RELDPfVo1mWEP2PhyJUe8f5Fk9CPenrEQTCuKk"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-29T10:06:03.272Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "static-demo-blocklet",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z3JksViPMfzbNMiuVboMqXkmTrSeB1FL1smtYcVRan1QzbL7T9Ym3v9zcam5VCDYrjhQ4wFXwriYugKAEKA6DCgMt"
        },
        {
          "created": "2022-01-29T10:02:18.346Z",
          "name": "static-demo-blocklet",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z2zqYNnnhtP22pWb6FNw6JGqkVNPZiQ8eLpBNNSvsJXjc9rqGBF7mZVEBjRV6W51Bagh1yMxm1MZfJ8iFoZsadrAg",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.1",
      "timeout": {
        "start": 10
      },
      "title": "Static Demo",
      "version": "1.1.21"
    },
    "category": {
      "name": "fun",
      "locales": {
        "zh": "娱乐",
        "en": "Fun"
      },
      "_id": "6TYF6yIvrVvaNUkw",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "lastPublishedAt": "2022-01-29T10:06:05.483Z",
    "permission": "Public"
  },
  {
    "_id": "J9Ss0pGNDpdYLlMC",
    "did": "z8ia5NLSuFwhPimBJHRdPmp6yx9fG8rcFex4b",
    "owner": {
      "pk": "0x5a39f65e67a2526a844ebbe2d201e20d11f00331144fa4eb51589e928e7b1fa6",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-01-14T01:42:10.797Z",
    "updatedAt": "2022-03-18T10:37:35.875Z",
    "status": "normal",
    "stats": {
      "downloads": 4263
    },
    "currentVersion": {
      "did": "z8ia5NLSuFwhPimBJHRdPmp6yx9fG8rcFex4b",
      "version": "0.5.7",
      "uploadedAt": "2022-03-14T23:39:12.036Z",
      "_id": "g1jDfeGrXo1OvL5v",
      "createdAt": "2022-03-14T23:39:12.040Z",
      "updatedAt": "2022-03-14T23:39:12.040Z"
    },
    "latestVersion": {
      "did": "z8ia5NLSuFwhPimBJHRdPmp6yx9fG8rcFex4b",
      "version": "0.5.7",
      "uploadedAt": "2022-03-14T23:39:12.036Z",
      "_id": "g1jDfeGrXo1OvL5v",
      "createdAt": "2022-03-14T23:39:12.040Z",
      "updatedAt": "2022-03-14T23:39:12.040Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "wangshijun2010@gmail.com",
        "name": "wangshijun",
        "url": "http://github.com/wangshijun"
      },
      "capabilities": {
        "clusterMode": false,
        "component": true
      },
      "children": [],
      "community": "https://gitter.im/ArcBlock/community",
      "description": "Blocklet Server Documentation, a help documentation for quickly get started with Blocklet Server.",
      "did": "z8ia5NLSuFwhPimBJHRdPmp6yx9fG8rcFex4b",
      "dist": {
        "integrity": "sha512-0/3CXvBkpc3oQE9/5r9k3omZL2ZdTigDRREPfuefqGZ5/8lqenFhmLisccrLD0BT3DxRWemNyqAr5UZiEHEHcg==",
        "tarball": "@arcblockabtnode-docs-0.5.7.tgz"
      },
      "documentation": "https://docs.arcblock.io",
      "environments": [],
      "files": [
        "public/",
        "screenshots/",
        "blocklet.md"
      ],
      "gitHash": "3d01734d8eb5ee7d8cb3c5c4f7e936d8803a579b",
      "group": "static",
      "homepage": "https://github.com/ArcBlock/abtnode-docs-power-user#readme",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "/abtnode",
          "protocol": "tcp",
          "type": "web"
        }
      ],
      "keywords": [
        "Docs",
        "ABTNode"
      ],
      "license": "MIT",
      "main": "public",
      "name": "@arcblock/abtnode-docs",
      "nftFactory": "",
      "path": "/static/@arcblock/abtnode-docs",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/ArcBlock/abtnode-docs.git"
      },
      "requirements": {
        "abtnode": ">=1.1.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [
        "0-home.png",
        "1-platform.png",
        "2-developer.png",
        "3-use-cases.png",
        "4-learning.png"
      ],
      "scripts": {},
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-17T03:00:23.829Z",
          "sig": "z3wEYo96h9Kb7f32bAUQCfiHWg4Pgk7JuRmGCvK5KENCYb6Zv8RoJ4Vek3Lhn2NW1rUuMAE8nRknGoHE3PM2nGGr7"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-03-17T03:00:22.233Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "@arcblock/abtnode-docs",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z4NQq6Q2zKJCBFzosYrmoxJSe8KmcZLx4xhBwk2EHTMELkCgo3LPg1hds7cAVdMys1cWcH4JTKCWcdJjr4iA7ooGs"
        },
        {
          "created": "2022-03-14T23:39:09.096Z",
          "name": "@arcblock/abtnode-docs",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "zkDNaGDMRP4DMT5x4VtTBL3zNA6adM8iEcqzGagNipoTBUWL6ETWDzeAvMzt6w1MR99ZkeHBFfZ2XHyPekS3cJYX",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.3",
      "support": "support@arcblock.io",
      "timeout": {
        "start": 10
      },
      "title": "Blocklet Server Docs",
      "version": "0.5.7"
    },
    "category": {
      "name": "developer-tools",
      "locales": {
        "en": "Developer Tools",
        "zh": "开发者工具"
      },
      "_id": "UXLwYKl1wa1qAhVe",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:45.576Z"
    },
    "lastPublishedAt": "2022-03-17T03:00:23.838Z",
    "permission": "Public"
  },
  {
    "_id": "Bb70RheDbSDLiR4K",
    "did": "z8iZqWsTGg48WLuX7jmTnadbhJrMZuhfrNTcY",
    "owner": {
      "pk": "0x5a39f65e67a2526a844ebbe2d201e20d11f00331144fa4eb51589e928e7b1fa6",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-01-13T06:43:11.874Z",
    "updatedAt": "2022-03-19T12:07:25.172Z",
    "status": "normal",
    "stats": {
      "downloads": 1937
    },
    "currentVersion": {
      "did": "z8iZqWsTGg48WLuX7jmTnadbhJrMZuhfrNTcY",
      "version": "2.5.12",
      "uploadedAt": "2022-01-29T13:33:08.332Z",
      "_id": "n8YAJOldD8ExmefL",
      "createdAt": "2022-01-29T13:33:08.398Z",
      "updatedAt": "2022-01-29T13:33:08.398Z"
    },
    "latestVersion": {
      "did": "z8iZqWsTGg48WLuX7jmTnadbhJrMZuhfrNTcY",
      "version": "2.5.12",
      "uploadedAt": "2022-01-29T13:33:08.332Z",
      "_id": "n8YAJOldD8ExmefL",
      "createdAt": "2022-01-29T13:33:08.398Z",
      "updatedAt": "2022-01-29T13:33:08.398Z"
    },
    "draftVersion": null,
    "meta": {
      "author": {
        "email": "shijun@arcblock.io",
        "name": "wangshijun",
        "url": "http://github.com/wangshijun"
      },
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "",
      "description": "Start experiencing your digital world with ABT Wallet",
      "did": "z8iZqWsTGg48WLuX7jmTnadbhJrMZuhfrNTcY",
      "dist": {
        "integrity": "sha512-ZETH9Kk3t3DbBS/4J/VIxgsAnKxriIUPVCwk1SW5/wpPCRTXHhsAyJ/39c0h/NjMbu1W5RaFBSBt2PoT8RZKww==",
        "tarball": "@arcblockwww-wallet-2.5.12.tgz"
      },
      "documentation": "",
      "environments": [
        {
          "default": "beta",
          "description": "Please provide a valid chain id to start",
          "name": "CHAIN_ID",
          "required": true,
          "secure": false
        },
        {
          "default": "https://beta.abtnetwork.io/api",
          "description": "Please provide a valid chain host to start",
          "name": "CHAIN_HOST",
          "required": true,
          "secure": false
        }
      ],
      "files": [
        "api/hooks/pre-start.js"
      ],
      "gitHash": "ac25ec0dc3b5bf96a9b3bd46ceba6e8320289e79",
      "group": "dapp",
      "homepage": "https://github.com/ArcBlock/www-wallet#readme",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "/",
          "protocol": "tcp",
          "type": "web"
        }
      ],
      "keywords": [
        "Dapp",
        "Demo",
        "Wallet"
      ],
      "license": "MIT",
      "main": "blocklet.zip",
      "name": "@arcblock/www-wallet",
      "nftFactory": "",
      "path": "/dapp/@arcblock/www-wallet",
      "payment": {
        "price": [],
        "share": []
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/ArcBlock/www-wallet.git"
      },
      "requirements": {
        "abtnode": ">=1.1.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [],
      "scripts": {
        "preStart": "node api/hooks/pre-start.js"
      },
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-30T00:11:32.409Z",
          "sig": "z4TfvtHoWJxzy1K6NZqnq3YvVXsZTbpvKKk517cWTMiu5obgtGNADuQkjRw2mcTveo2YAg3a7PE3bTAfBgirkWZgK"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-30T00:11:30.175Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "@arcblock/www-wallet",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "z5usg1EHPUynKsBcKjaJKNhRrYYmtWsUAU6KrrJrZZcXc6od4A2MqNgSS3dDY3MLbSYW8txitDfHDrF7NeQVX6XLV"
        },
        {
          "created": "2022-01-29T13:33:05.907Z",
          "name": "@arcblock/www-wallet",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z5jATr3AQ243CFv6BqVUVRWfZySybX8wJ4FZRMParYVA76ocyGhW9sTaPWneLn9TkxGHoGqSZfrU438EbDY2w6yRm",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.1",
      "timeout": {
        "start": 10
      },
      "title": "Wallet Demo",
      "version": "2.5.12"
    },
    "category": {
      "name": "fun",
      "locales": {
        "zh": "娱乐",
        "en": "Fun"
      },
      "_id": "6TYF6yIvrVvaNUkw",
      "createdAt": "2022-01-11T01:48:16.351Z",
      "updatedAt": "2022-01-11T01:48:16.351Z"
    },
    "lastPublishedAt": "2022-01-30T00:11:32.427Z",
    "permission": "Public"
  },
  {
    "_id": "pwklqcBaHKZQyUOK",
    "did": "z8iZsspkkY4AEXqRj8pAWKafC4KM3zN2WfNGA",
    "owner": {
      "pk": "0x5a39f65e67a2526a844ebbe2d201e20d11f00331144fa4eb51589e928e7b1fa6",
      "did": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ"
    },
    "createdAt": "2021-01-13T03:31:19.673Z",
    "updatedAt": "2022-03-15T20:49:31.964Z",
    "status": "normal",
    "stats": {
      "downloads": 1538
    },
    "currentVersion": {
      "did": "z8iZsspkkY4AEXqRj8pAWKafC4KM3zN2WfNGA",
      "version": "0.2.7",
      "uploadedAt": "2021-12-29T03:00:28.591Z",
      "_id": "I08fgpogRPwxYIEk",
      "createdAt": "2021-12-29T03:00:28.611Z",
      "updatedAt": "2021-12-29T03:00:28.611Z"
    },
    "latestVersion": {
      "did": "z8iZsspkkY4AEXqRj8pAWKafC4KM3zN2WfNGA",
      "version": "0.2.7",
      "uploadedAt": "2021-12-29T03:00:28.591Z",
      "_id": "I08fgpogRPwxYIEk",
      "createdAt": "2021-12-29T03:00:28.611Z",
      "updatedAt": "2021-12-29T03:00:28.611Z"
    },
    "draftVersion": null,
    "meta": {
      "capabilities": {
        "clusterMode": false
      },
      "children": [],
      "community": "",
      "description": "A blocklet for uniswap blocklet",
      "did": "z8iZsspkkY4AEXqRj8pAWKafC4KM3zN2WfNGA",
      "dist": {
        "integrity": "sha512-g+2mKXt6ME1E8CCAtQtqYVLq6j+dRXL6ZhrciXR8yJGBSrCVtNtNdO1xo4A6DX2jjh80YCwaMqaOZrbK3kI7kw==",
        "tarball": "uniswap-blocklet-0.2.7.tgz"
      },
      "documentation": "",
      "environments": [],
      "files": [
        "build",
        "screenshots",
        "logo.png",
        "blocklet.md",
        "blocklet.js",
        "README.md"
      ],
      "gitHash": "b3d6a9f4af11922205074d1441965553eaa6a045",
      "group": "static",
      "homepage": "",
      "interfaces": [
        {
          "name": "publicUrl",
          "path": "/",
          "port": "BLOCKLET_PORT",
          "prefix": "*",
          "protocol": "tcp",
          "type": "web"
        }
      ],
      "keywords": [
        "Uniswap",
        "Ethereum"
      ],
      "license": "GPL-3.0-or-later",
      "logo": "logo.png",
      "main": "build",
      "name": "uniswap-blocklet",
      "nftFactory": "",
      "path": "/static/uniswap-blocklet",
      "payment": {
        "price": [],
        "share": []
      },
      "requirements": {
        "abtnode": ">=1.1.0",
        "cpu": "*",
        "os": "*"
      },
      "screenshots": [],
      "scripts": {},
      "signatures": [
        {
          "type": "ED25519",
          "name": "Blocklet Store",
          "signer": "zNKXtdqz6Jbw5mKpojK2nP5gRNiEGJY3mNFF",
          "pk": "z8VahoQa6oS63Ym3rfsmzZEt9Moonbg4JSUiit5J7DRAV",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-01T09:31:51.464Z",
          "sig": "z2p2bpdzpbt11fMrGTZ3FxStrmBfzCA36soc9Jaw3dR8nnDCbJMoJbakBKtQ7YEtJ2J7bppnTRxxoy9VduhzGEDpU"
        },
        {
          "appended": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "created": "2022-01-01T09:31:29.857Z",
          "excludes": [
            "htmlAst",
            "lastPublishedAt",
            "stats"
          ],
          "name": "uniswap-blocklet",
          "pk": "z2eCsEyycLQPvqCRxvGBawGwyTfoZF1UpzocGqvtjdx7J",
          "signer": "z1euigAXVHi9cJfJGo2b9QaeQwxjQynSKoJ",
          "type": "ED25519",
          "sig": "zn9y3mRP5KRTJbkVm9cEh8fRt8GdMHmxwkZsbAWUegP8UwsAfYDx6Qkw3PmK6rsdLxjsJ9MvPgeNz2EAWi5xCagc"
        },
        {
          "created": "2021-12-29T03:00:25.851Z",
          "name": "uniswap-blocklet",
          "pk": "z75CxPgkoiANhn1iCMRHQX2w6fSQPgi2qZiqbhQuy9Xo3",
          "sig": "z3VxpJx4t12qfVCtexKZptBjHaXSpJiDUzrkjcatjuoKYWVsq86RRAqpPkAiEMsPXRUg3mA7NwpydimPMUrm3t3G8",
          "signer": "z1Rq9qSoqvAq1NcJJTzKB1AnM991Cm4JrzW",
          "type": "ED25519"
        }
      ],
      "specVersion": "1.2.0",
      "timeout": {
        "start": 10
      },
      "title": "Uniswap Blocklet",
      "version": "0.2.7"
    },
    "category": {
      "name": "defi",
      "locales": {
        "zh": "去中心化金融",
        "en": "DEFI"
      },
      "_id": "GUjTm9sh6kXqgWWV",
      "createdAt": "2022-01-11T01:52:32.325Z",
      "updatedAt": "2022-01-11T01:52:32.325Z"
    },
    "permission": "Public",
    "lastPublishedAt": "2021-12-29T03:00:28.591Z"
  }
]
const noMeta= tabList.find(item=>!item.meta);
console.log('noMeta==',noMeta)
