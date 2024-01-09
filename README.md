# Kazon

## This is an e-commerce site built with the PERN stack. 
### It lets users create an account, add and remove items from their cart, make reports, and, search for products. 

## To Run, there are two options

## 1. Use docker compose
```
docker-compose up
```
## Access at http://localhost:3000

## 2. Run the backend and the frontend seperately

### 2a. Run the backend first
https://github.com/ShashiSugrim/kazonbackend

### 2b. Run the front end either with docker or with node
#### (must have the backend running for the website to function)

### With docker
```
docker run -p 3000:3000 clasher/kazon-frontend
```

### Without docker aka using Node
```
npm install
npm start
```

## Create account and cart functionality
![](public/createAccountCart.gif)

## Continuing cart functionality, search, and sign in
![](public/signOutCartSearch.gif)

## Make a report
![](public/reportFunction.gif)
