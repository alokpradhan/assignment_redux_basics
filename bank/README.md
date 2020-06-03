This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Bank data model

#### users

- id
- name
- address
- phone

#### accounts

- id
- balance
  user_accounts
- user_id
- account_id

## Redux store

```
bank {
  users: [{
    id
    name
    address
    phone
  }]

  accounts: [{
    id
    balance
    userId
  }]
}
```
