# Books Repository

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Generates the JS output in `dist` folder.

### `yarn start`

Runs the js code from `dist` folder.

## Endpoints

### Create new book entry

- `POST` `/api/v1/books/create`

- `body`

```json
{
    "title": "To Kill a Mokingbird",
    "author": "Harper Lee",
    "datePublished": "1960",
    "genre": "Thriller",
}
```

### Get all books from database

- `GET` `/api/v1/books`

### Get specific entry from database

- `GET` `/api/v1/books/:id`

### Update the specific entry on database


- `PUT` `/api/v1/books/update/:id`

- `body`

```json
{
    "title": "To Kill a Mokingbird again",
    "author": "Harper Lee",
    "datePublished": "1962",
    "genre": "Thriller",
}
```

### Delete the entry

- `DEL` `/api/v1/books/delete/:id`

> Note: we get id from the response
