# friends-api

https://acevedo-friendsapi.herokuapp.com/api/episodes

## Get by Season and Episode:

- Endpoint: /episode/:season/:episode
- Method: GET

### Example:

https://acevedo-friendsapi.herokuapp.com/api/episodes/episode/10/5

```
{
    "_id": "5e928012eaa74a05ab23b5d3",
    "season": 10,
    "episode": 5,
    "name": "The One Where Rachel's Sister Babysits",
    "year": 2003
}
```

## Get by episode name:

- Endpoint: /name/:name
- Method: GET

### Example:

https://acevedo-friendsapi.herokuapp.com/api/episodes/name/The Pilot


## List by year:

- Endpoint: /year/:year
- Method: GET

### Example:

https://acevedo-friendsapi.herokuapp.com/api/episodes/year/1995

## List by season:

- Endpoint: /season/:season
- Method: GET

### Example:

https://acevedo-friendsapi.herokuapp.com/api/episodes/season/1


# Author

Created by Ruben Acevedo.



