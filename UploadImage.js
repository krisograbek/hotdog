diff --git a/package-lock.json b/package-lock.json
index 4fd9fea..5f20067 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -1203,6 +1203,11 @@
       "resolved": "https://registry.npmjs.org/@csstools/normalize.css/-/normalize.css-10.1.0.tgz",
       "integrity": "sha512-ij4wRiunFfaJxjB0BdrYHIH8FxBJpOwNPhhAcunlmPdXudL1WQV1qoP9un6JsEBAgQH+7UXyyjh0g7jTxXK6tg=="
     },
+    "@emotion/hash": {
+      "version": "0.8.0",
+      "resolved": "https://registry.npmjs.org/@emotion/hash/-/hash-0.8.0.tgz",
+      "integrity": "sha512-kBJtf7PH6aWwZ6fka3zQ0p6SBYzx4fl1LoZXE2RrnYST9Xljm7WfKJrU4g/Xr3Beg72MLrp1AWNUmuYJTL7Cow=="
+    },
     "@eslint/eslintrc": {
       "version": "0.4.3",
       "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-0.4.3.tgz",
@@ -1836,6 +1841,74 @@
         }
       }
     },
+    "@material-ui/core": {
+      "version": "4.12.3",
+      "resolved": "https://registry.npmjs.org/@material-ui/core/-/core-4.12.3.tgz",
+      "integrity": "sha512-sdpgI/PL56QVsEJldwEe4FFaFTLUqN+rd7sSZiRCdx2E/C7z5yK0y/khAWVBH24tXwto7I1hCzNWfJGZIYJKnw==",
+      "requires": {
+        "@babel/runtime": "^7.4.4",
+        "@material-ui/styles": "^4.11.4",
+        "@material-ui/system": "^4.12.1",
+        "@material-ui/types": "5.1.0",
+        "@material-ui/utils": "^4.11.2",
+        "@types/react-transition-group": "^4.2.0",
+        "clsx": "^1.0.4",
+        "hoist-non-react-statics": "^3.3.2",
+        "popper.js": "1.16.1-lts",
+        "prop-types": "^15.7.2",
+        "react-is": "^16.8.0 || ^17.0.0",
+        "react-transition-group": "^4.4.0"
+      }
+    },
+    "@material-ui/styles": {
+      "version": "4.11.4",
+      "resolved": "https://registry.npmjs.org/@material-ui/styles/-/styles-4.11.4.tgz",
+      "integrity": "sha512-KNTIZcnj/zprG5LW0Sao7zw+yG3O35pviHzejMdcSGCdWbiO8qzRgOYL8JAxAsWBKOKYwVZxXtHWaB5T2Kvxew==",
+      "requires": {
+        "@babel/runtime": "^7.4.4",
+        "@emotion/hash": "^0.8.0",
+        "@material-ui/types": "5.1.0",
+        "@material-ui/utils": "^4.11.2",
+        "clsx": "^1.0.4",
+        "csstype": "^2.5.2",
+        "hoist-non-react-statics": "^3.3.2",
+        "jss": "^10.5.1",
+        "jss-plugin-camel-case": "^10.5.1",
+        "jss-plugin-default-unit": "^10.5.1",
+        "jss-plugin-global": "^10.5.1",
+        "jss-plugin-nested": "^10.5.1",
+        "jss-plugin-props-sort": "^10.5.1",
+        "jss-plugin-rule-value-function": "^10.5.1",
+        "jss-plugin-vendor-prefixer": "^10.5.1",
+        "prop-types": "^15.7.2"
+      }
+    },
+    "@material-ui/system": {
+      "version": "4.12.1",
+      "resolved": "https://registry.npmjs.org/@material-ui/system/-/system-4.12.1.tgz",
+      "integrity": "sha512-lUdzs4q9kEXZGhbN7BptyiS1rLNHe6kG9o8Y307HCvF4sQxbCgpL2qi+gUk+yI8a2DNk48gISEQxoxpgph0xIw==",
+      "requires": {
+        "@babel/runtime": "^7.4.4",
+        "@material-ui/utils": "^4.11.2",
+        "csstype": "^2.5.2",
+        "prop-types": "^15.7.2"
+      }
+    },
+    "@material-ui/types": {
+      "version": "5.1.0",
+      "resolved": "https://registry.npmjs.org/@material-ui/types/-/types-5.1.0.tgz",
+      "integrity": "sha512-7cqRjrY50b8QzRSYyhSpx4WRw2YuO0KKIGQEVk5J8uoz2BanawykgZGoWEqKm7pVIbzFDN0SpPcVV4IhOFkl8A=="
+    },
+    "@material-ui/utils": {
+      "version": "4.11.2",
+      "resolved": "https://registry.npmjs.org/@material-ui/utils/-/utils-4.11.2.tgz",
+      "integrity": "sha512-Uul8w38u+PICe2Fg2pDKCaIG7kOyhowZ9vjiC1FsVwPABTW8vPPKfF6OvxRq3IiBaI1faOJmgdvMG7rMJARBhA==",
+      "requires": {
+        "@babel/runtime": "^7.4.4",
+        "prop-types": "^15.7.2",
+        "react-is": "^16.8.0 || ^17.0.0"
+      }
+    },
     "@nodelib/fs.scandir": {
       "version": "2.1.5",
       "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
@@ -2505,11 +2578,41 @@
       "resolved": "https://registry.npmjs.org/@types/prettier/-/prettier-2.3.2.tgz",
       "integrity": "sha512-eI5Yrz3Qv4KPUa/nSIAi0h+qX0XyewOliug5F2QAtuRg6Kjg6jfmxe1GIwoIRhZspD1A0RP8ANrPwvEXXtRFog=="
     },
+    "@types/prop-types": {
+      "version": "15.7.4",
+      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.4.tgz",
+      "integrity": "sha512-rZ5drC/jWjrArrS8BR6SIr4cWpW09RNTYt9AMZo3Jwwif+iacXAqgVjm0B0Bv/S1jhDXKHqRVNCbACkJ89RAnQ=="
+    },
     "@types/q": {
       "version": "1.5.5",
       "resolved": "https://registry.npmjs.org/@types/q/-/q-1.5.5.tgz",
       "integrity": "sha512-L28j2FcJfSZOnL1WBjDYp2vUHCeIFlyYI/53EwD/rKUBQ7MtUUfbQWiyKJGpcnv4/WgrhWsFKrcPstcAt/J0tQ=="
     },
+    "@types/react": {
+      "version": "17.0.24",
+      "resolved": "https://registry.npmjs.org/@types/react/-/react-17.0.24.tgz",
+      "integrity": "sha512-eIpyco99gTH+FTI3J7Oi/OH8MZoFMJuztNRimDOJwH4iGIsKV2qkGnk4M9VzlaVWeEEWLWSQRy0FEA0Kz218cg==",
+      "requires": {
+        "@types/prop-types": "*",
+        "@types/scheduler": "*",
+        "csstype": "^3.0.2"
+      },
+      "dependencies": {
+        "csstype": {
+          "version": "3.0.9",
+          "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.0.9.tgz",
+          "integrity": "sha512-rpw6JPxK6Rfg1zLOYCSwle2GFOOsnjmDYDaBwEcwoOg4qlsIVCN789VkBZDJAGi4T07gI4YSutR43t9Zz4Lzuw=="
+        }
+      }
+    },
+    "@types/react-transition-group": {
+      "version": "4.4.3",
+      "resolved": "https://registry.npmjs.org/@types/react-transition-group/-/react-transition-group-4.4.3.tgz",
+      "integrity": "sha512-fUx5muOWSYP8Bw2BUQ9M9RK9+W1XBK/7FLJ8PTQpnpTEkn0ccyMffyEQvan4C3h53gHdx7KE5Qrxi/LnUGQtdg==",
+      "requires": {
+        "@types/react": "*"
+      }
+    },
     "@types/resolve": {
       "version": "0.0.8",
       "resolved": "https://registry.npmjs.org/@types/resolve/-/resolve-0.0.8.tgz",
@@ -2518,6 +2621,11 @@
         "@types/node": "*"
       }
     },
+    "@types/scheduler": {
+      "version": "0.16.2",
+      "resolved": "https://registry.npmjs.org/@types/scheduler/-/scheduler-0.16.2.tgz",
+      "integrity": "sha512-hppQEBDmlwhFAXKJX2KnWLYu5yMfi91yazPb2l+lbJiwW+wdo1gNeRA+3RgNSO39WYX2euey41KEwnqesU2Jew=="
+    },
     "@types/source-list-map": {
       "version": "0.1.2",
       "resolved": "https://registry.npmjs.org/@types/source-list-map/-/source-list-map-0.1.2.tgz",
@@ -4259,6 +4367,11 @@
         "wrap-ansi": "^6.2.0"
       }
     },
+    "clsx": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/clsx/-/clsx-1.1.1.tgz",
+      "integrity": "sha512-6/bPho624p3S2pMyvP5kKBPXnI3ufHLObBFCfgx+LkeR5lg2XYy2hqZqUf45ypD8COn2bhgGJSUE+l5dhNBieA=="
+    },
     "co": {
       "version": "4.6.0",
       "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
@@ -4743,6 +4856,15 @@
         }
       }
     },
+    "css-vendor": {
+      "version": "2.0.8",
+      "resolved": "https://registry.npmjs.org/css-vendor/-/css-vendor-2.0.8.tgz",
+      "integrity": "sha512-x9Aq0XTInxrkuFeHKbYC7zWY8ai7qJ04Kxd9MnvbC1uO5DagxoHQjm4JvG+vCdXOoFtCjbL2XSZfxmoYa9uQVQ==",
+      "requires": {
+        "@babel/runtime": "^7.8.3",
+        "is-in-browser": "^1.0.2"
+      }
+    },
     "css-what": {
       "version": "3.4.2",
       "resolved": "https://registry.npmjs.org/css-what/-/css-what-3.4.2.tgz",
@@ -4919,6 +5041,11 @@
         }
       }
     },
+    "csstype": {
+      "version": "2.6.18",
+      "resolved": "https://registry.npmjs.org/csstype/-/csstype-2.6.18.tgz",
+      "integrity": "sha512-RSU6Hyeg14am3Ah4VZEmeX8H7kLwEEirXe6aU2IPfKNvhXwTflK5HQRDNI0ypQXoqmm+QPyG2IaPuQE5zMwSIQ=="
+    },
     "cyclist": {
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/cyclist/-/cyclist-1.0.1.tgz",
@@ -5240,6 +5367,22 @@
         "utila": "~0.4"
       }
     },
+    "dom-helpers": {
+      "version": "5.2.1",
+      "resolved": "https://registry.npmjs.org/dom-helpers/-/dom-helpers-5.2.1.tgz",
+      "integrity": "sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==",
+      "requires": {
+        "@babel/runtime": "^7.8.7",
+        "csstype": "^3.0.2"
+      },
+      "dependencies": {
+        "csstype": {
+          "version": "3.0.9",
+          "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.0.9.tgz",
+          "integrity": "sha512-rpw6JPxK6Rfg1zLOYCSwle2GFOOsnjmDYDaBwEcwoOg4qlsIVCN789VkBZDJAGi4T07gI4YSutR43t9Zz4Lzuw=="
+        }
+      }
+    },
     "dom-serializer": {
       "version": "0.2.2",
       "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
@@ -7204,6 +7347,14 @@
         "minimalistic-crypto-utils": "^1.0.1"
       }
     },
+    "hoist-non-react-statics": {
+      "version": "3.3.2",
+      "resolved": "https://registry.npmjs.org/hoist-non-react-statics/-/hoist-non-react-statics-3.3.2.tgz",
+      "integrity": "sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==",
+      "requires": {
+        "react-is": "^16.7.0"
+      }
+    },
     "hoopy": {
       "version": "0.1.4",
       "resolved": "https://registry.npmjs.org/hoopy/-/hoopy-0.1.4.tgz",
@@ -7526,6 +7677,11 @@
       "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-1.1.1.tgz",
       "integrity": "sha512-SEQu7vl8KjNL2eoGBLF3+wAjpsNfA9XMlXAYj/3EdaNfAlxKthD1xjEQfGOUhllCGGJVNY34bRr6lPINhNjyZw=="
     },
+    "hyphenate-style-name": {
+      "version": "1.0.4",
+      "resolved": "https://registry.npmjs.org/hyphenate-style-name/-/hyphenate-style-name-1.0.4.tgz",
+      "integrity": "sha512-ygGZLjmXfPHj+ZWh6LwbC37l43MhfztxetbFCoYTM2VjkIUpeHgSNn7QIyVFj7YQ1Wl9Cbw5sholVJPzWvC2MQ=="
+    },
     "iconv-lite": {
       "version": "0.4.24",
       "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
@@ -7877,6 +8033,11 @@
         "is-extglob": "^2.1.1"
       }
     },
+    "is-in-browser": {
+      "version": "1.1.3",
+      "resolved": "https://registry.npmjs.org/is-in-browser/-/is-in-browser-1.1.3.tgz",
+      "integrity": "sha1-Vv9NtoOgeMYILrldrX3GLh0E+DU="
+    },
     "is-module": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/is-module/-/is-module-1.0.0.tgz",
@@ -9690,6 +9851,91 @@
         "universalify": "^2.0.0"
       }
     },
+    "jss": {
+      "version": "10.8.0",
+      "resolved": "https://registry.npmjs.org/jss/-/jss-10.8.0.tgz",
+      "integrity": "sha512-6fAMLJrVQ8epM5ghghxWqCwRR0ZamP2cKbOAtzPudcCMSNdAqtvmzQvljUZYR8OXJIeb/IpZeOXA1sDXms4R1w==",
+      "requires": {
+        "@babel/runtime": "^7.3.1",
+        "csstype": "^3.0.2",
+        "is-in-browser": "^1.1.3",
+        "tiny-warning": "^1.0.2"
+      },
+      "dependencies": {
+        "csstype": {
+          "version": "3.0.9",
+          "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.0.9.tgz",
+          "integrity": "sha512-rpw6JPxK6Rfg1zLOYCSwle2GFOOsnjmDYDaBwEcwoOg4qlsIVCN789VkBZDJAGi4T07gI4YSutR43t9Zz4Lzuw=="
+        }
+      }
+    },
+    "jss-plugin-camel-case": {
+      "version": "10.8.0",
+      "resolved": "https://registry.npmjs.org/jss-plugin-camel-case/-/jss-plugin-camel-case-10.8.0.tgz",
+      "integrity": "sha512-yxlXrXwcCdGw+H4BC187dEu/RFyW8joMcWfj8Rk9UPgWTKu2Xh7Sib4iW3xXjHe/t5phOHF1rBsHleHykWix7g==",
+      "requires": {
+        "@babel/runtime": "^7.3.1",
+        "hyphenate-style-name": "^1.0.3",
+        "jss": "10.8.0"
+      }
+    },
+    "jss-plugin-default-unit": {
+      "version": "10.8.0",
+      "resolved": "https://registry.npmjs.org/jss-plugin-default-unit/-/jss-plugin-default-unit-10.8.0.tgz",
+      "integrity": "sha512-9XJV546cY9zV9OvIE/v/dOaxSi4062VfYQQfwbplRExcsU2a79Yn+qDz/4ciw6P4LV1Naq90U+OffAGRHfNq/Q==",
+      "requires": {
+        "@babel/runtime": "^7.3.1",
+        "jss": "10.8.0"
+      }
+    },
+    "jss-plugin-global": {
+      "version": "10.8.0",
+      "resolved": "https://registry.npmjs.org/jss-plugin-global/-/jss-plugin-global-10.8.0.tgz",
+      "integrity": "sha512-H/8h/bHd4e7P0MpZ9zaUG8NQSB2ie9rWo/vcCP6bHVerbKLGzj+dsY22IY3+/FNRS8zDmUyqdZx3rD8k4nmH4w==",
+      "requires": {
+        "@babel/runtime": "^7.3.1",
+        "jss": "10.8.0"
+      }
+    },
+    "jss-plugin-nested": {
+      "version": "10.8.0",
+      "resolved": "https://registry.npmjs.org/jss-plugin-nested/-/jss-plugin-nested-10.8.0.tgz",
+      "integrity": "sha512-MhmINZkSxyFILcFBuDoZmP1+wj9fik/b9SsjoaggkGjdvMQCES21mj4K5ZnRGVm448gIXyi9j/eZjtDzhaHUYQ==",
+      "requires": {
+        "@babel/runtime": "^7.3.1",
+        "jss": "10.8.0",
+        "tiny-warning": "^1.0.2"
+      }
+    },
+    "jss-plugin-props-sort": {
+      "version": "10.8.0",
+      "resolved": "https://registry.npmjs.org/jss-plugin-props-sort/-/jss-plugin-props-sort-10.8.0.tgz",
+      "integrity": "sha512-VY+Wt5WX5GMsXDmd+Ts8+O16fpiCM81svbox++U3LDbJSM/g9FoMx3HPhwUiDfmgHL9jWdqEuvSl/JAk+mh6mQ==",
+      "requires": {
+        "@babel/runtime": "^7.3.1",
+        "jss": "10.8.0"
+      }
+    },
+    "jss-plugin-rule-value-function": {
+      "version": "10.8.0",
+      "resolved": "https://registry.npmjs.org/jss-plugin-rule-value-function/-/jss-plugin-rule-value-function-10.8.0.tgz",
+      "integrity": "sha512-R8N8Ma6Oye1F9HroiUuHhVjpPsVq97uAh+rMI6XwKLqirIu2KFb5x33hPj+vNBMxSHc9jakhf5wG0BbQ7fSDOg==",
+      "requires": {
+        "@babel/runtime": "^7.3.1",
+        "jss": "10.8.0",
+        "tiny-warning": "^1.0.2"
+      }
+    },
+    "jss-plugin-vendor-prefixer": {
+      "version": "10.8.0",
+      "resolved": "https://registry.npmjs.org/jss-plugin-vendor-prefixer/-/jss-plugin-vendor-prefixer-10.8.0.tgz",
+      "integrity": "sha512-G1zD0J8dFwKZQ+GaZaay7A/Tg7lhDw0iEkJ/iFFA5UPuvZFpMprCMQttXcTBhLlhhWnyZ8YPn4yqp+amrhQekw==",
+      "requires": {
+        "@babel/runtime": "^7.3.1",
+        "css-vendor": "^2.0.8",
+        "jss": "10.8.0"
+      }
+    },
     "jsx-ast-utils": {
       "version": "3.2.0",
       "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.2.0.tgz",
@@ -11017,6 +11263,11 @@
         "ts-pnp": "^1.1.6"
       }
     },
+    "popper.js": {
+      "version": "1.16.1-lts",
+      "resolved": "https://registry.npmjs.org/popper.js/-/popper.js-1.16.1-lts.tgz",
+      "integrity": "sha512-Kjw8nKRl1m+VrSFCoVGPph93W/qrSO7ZkqPpTf7F4bk/sqcfWK019dWBUpE/fBOsOQY1dks/Bmcbfn1heM/IsA=="
+    },
     "portfinder": {
       "version": "1.0.28",
       "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.28.tgz",
@@ -12560,6 +12811,17 @@
         "workbox-webpack-plugin": "5.1.4"
       }
     },
+    "react-transition-group": {
+      "version": "4.4.2",
+      "resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-4.4.2.tgz",
+      "integrity": "sha512-/RNYfRAMlZwDSr6z4zNKV6xu53/e2BuaBbGhbyYIXTrmgu/bGHzmqOs7mJSJBHy9Ud+ApHx3QjrkKSp1pxvlFg==",
+      "requires": {
+        "@babel/runtime": "^7.5.5",
+        "dom-helpers": "^5.0.1",
+        "loose-envify": "^1.4.0",
+        "prop-types": "^15.6.2"
+      }
+    },
     "read-pkg": {
       "version": "3.0.0",
       "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
@@ -14470,6 +14732,11 @@
       "resolved": "https://registry.npmjs.org/timsort/-/timsort-0.3.0.tgz",
       "integrity": "sha1-QFQRqOfmM5/mTbmiNN4R3DHgK9Q="
     },
+    "tiny-warning": {
+      "version": "1.0.3",
+      "resolved": "https://registry.npmjs.org/tiny-warning/-/tiny-warning-1.0.3.tgz",
+      "integrity": "sha512-lBN9zLN/oAf68o3zNXYrdCt1kP8WsiGW8Oo2ka41b2IM5JL/S1CTyX1rW0mb/zSuJun0ZUrDxx4sqvYS2FWzPA=="
+    },
     "tmpl": {
       "version": "1.0.5",
       "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz",
diff --git a/package.json b/package.json
index 18489d1..49cb873 100644
--- a/package.json
+++ b/package.json
@@ -3,6 +3,8 @@
   "version": "0.1.0",
   "private": true,
   "dependencies": {
+    "@material-ui/core": "^4.12.3",
+    "@material-ui/styles": "^4.11.4",
     "@testing-library/jest-dom": "^5.14.1",
     "@testing-library/react": "^11.2.7",
     "@testing-library/user-event": "^12.8.3",
diff --git a/src/components/UploadImage.js b/src/components/UploadImage.js
index 039e52c..e3eb00d 100644
--- a/src/components/UploadImage.js
+++ b/src/components/UploadImage.js
@@ -1,14 +1,27 @@
+import { Button, Input, makeStyles } from '@material-ui/core';
 import React, { useEffect, useState } from 'react';
 import { convertImage } from '../helpers/image';
 
+const resultHeight = 224;
+const resultWidth = 224;
+
+const useStyles = makeStyles((theme) => ({
+  input: {
+    color: 'white',
+    display: 'none'
+  },
+  button: {
+    backgroundColor: theme.palette.info.main,
+    color: 'white'
+  }
+}))
 
 function UploadImage() {
   const [selectedImage, setSelectedImage] = useState(null);
   const [result, setResult] = useState([])
   const [proba, setProba] = useState(-1)
+  const classes = useStyles();
 
-  const resultHeight = 224;
-  const resultWidth = 224;
 
   useEffect(() => {
     console.log("Result: ", result)
@@ -45,23 +58,37 @@ function UploadImage() {
 
   return (
     <div>
-      <input
-        type="file"
-        name="myImage"
-        onChange={(event) => {
-          console.log(event.target.files[0]);
-          setSelectedImage(URL.createObjectURL(event.target.files[0]));
-          // setResult([]);
-        }}
-      />
+      <label
+        htmlFor="contained-button-file">
+        <Input
+          className={classes.input}
+          accept="image/*"
+          id="contained-button-file"
+          multiple type="file"
+          onChange={(event) => {
+            console.log(event.target.files[0]);
+            setSelectedImage(URL.createObjectURL(event.target.files[0]));
+          }}
+        />
+        <Button
+          variant="contained"
+          component="span"
+          className={classes.button}
+        >
+          Upload Image
+        </Button>
+      </label>
       {selectedImage && (
         <div>
           <br />
-          <button onClick={() => {
-            setSelectedImage(null);
-            setResult([]);
-            setProba(-1)
-          }}>Remove</button>
+          <Button
+            variant="outlined"
+            className={classes.button}
+            onClick={() => {
+              setSelectedImage(null);
+              setResult([]);
+              setProba(-1)
+            }}>Remove</Button>
           <br />
           <img id="img" alt="not found" width={"450px"} src={selectedImage} />
           <br />
@@ -79,7 +106,14 @@ function UploadImage() {
             }
             </div>
           }
-          <button style={{ fontSize: "24px" }} onClick={() => handleImg()}>Hot dog or not?</button>
+          <Button
+            variant="contained"
+            className={classes.button}
+            style={{ fontSize: "24px" }}
+            onClick={() => handleImg()}
+          >
+            Hot dog or not?
+          </Button>
         </div>
       )}
     </div>
