# gogoro_demo

# Prerequisites
1. Git
2. Docker and Compose
   
# Usage
1. Clone the gogoro_demo repository from github through the command below
```
git clone https://github.com/o60816/gogoro_demo.git
```
2. cd into gogoro_demo through the command below
```
cd gogoro_demo
```
3. Execute build.sh to download configuration and start the service through the command below
```
sh ./build.sh
```

# APIs
## User
- Path: /api/v1/users
- Path: /api/v1/users/:id

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

## _createdFrom
- Type: timestamp
```
The minimum value of createdFrom should be 1, otherwise you will get 400 error 
```
e.g.  
/users?createdFrom=1

## _createdTo
- Type: timestamp
```
The minimum value of createdFrom should be 1, otherwise you will get 400 error 
```
e.g.  
/users?createdTo=1

## _jobType
- Type: string  

e.g.  
/users?jobType=Planner

# Test
- Run unit tests through command below
```
npm test
```
