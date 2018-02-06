# Mock Server

## Requirements

- Node.js >= v6.10.0
- npm >= 3.10.10

## Installation

1. Install dependencies

  ```
  $ npm install
  ```

## Run

```
$ npm start
```

## How to force server to re-lunch if files were modified?

1. Install [Nodemon](https://github.com/remy/nodemon)
  ```
  $ npm install -g nodemon
  ```

2. Run script
  ```
  $ nodemon app.js
  ```

# Example Mocks

- **Get** `/ping`
- **Get** `/users`
