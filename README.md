# gogoro_demo

# Usage
1. Clone the gogoro_demo repository from github through the command below
```
git clone https://github.com/o60816/gogoro_demo.git
```
2. Clone the gogoro_demo_ci repository from github through the command below and then put it inside the gogoro_demo
```
git clone https://github.com/o60816/gogoro_demo_ci.git
```
3. cd into the gogoro_demo_ci
4. Type command below to start the mariadb
```
docker-compose up -d
```
5. npm start the server

# APIs
## User
- Path: /users

## API document
- Path: /api-docs

# Params
There are 5 query params can be used for query users
## _page
- Type: number
```
The minimum value of _page should be 1, otherwise you will get 400 error 
```
e.g.  
/users?_limit=1

## _limit
- Type: number
```
The minimum value of _limit should be 1, otherwise you will get 400 error 
```
e.g.  
/users?_limit=1

## createdFrom
- Type: timestamp
```
The minimum value of createdFrom should be 1, otherwise you will get 400 error 
```
e.g.  
/users?createdFrom=1

## createdTo
- Type: timestamp
```
The minimum value of createdFrom should be 1, otherwise you will get 400 error 
```
e.g.  
/users?createdTo=1

## jobType
- Type: string
e.g.  
/users?jobType=Planner

