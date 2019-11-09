# todo-api

Dummy REST API for testing purposes.

## Usage

1. Clone the repo!
1. Enter the cloned directory and run `npm install` to install the required dependencies.
1. Run `npm run start` to launch the server.

## Endpoints

### (GET) `/api/v1/todos`

**Gets all** the todos. The TODO Object has the following structure:

| Key           | Type    | Description                                                        |
| ------------- | ------- | ------------------------------------------------------------------ |
| `id`          | String  | The TODO unique identifier                                         |
| `title`       | String  | The TODO title                                                     |
| `description` | String  | The long description of the TODO                                   |
| `done`        | Boolean | the completion indicator                                           |
| `doneDate`    | Number  | The date of completion in the time format (`new Date().getTime()`) |

### (GET) `/api/v1/todos/:ID`

**Reads** the TODO with the specified _ID_. If the ID cannot be found a 404 error will be replied.

### (POST) `/api/v1/todos`

**Creates** a new TODO.

Example:

```JSON
{
	"title": "My Todo",
	"description": "My todo description"
}
```

### (PUT) `/api/v1/todos/:ID`

**Updates** the TODO with the specified _ID_. If the ID cannot be found a 404 error will be replied.

### (DELETE) `/api/v1/todos/:ID`

**Deletes** the TODO with the specified _ID_. If the ID cannot be found a 404 error will be replied.

### (PUT) `/api/v1/todos/:ID/done`

**Marks** the TODO with the specified _ID_ **as done**. If the ID cannot be found a 404 error will be replied. If the TODO was already marked as done a 400 error will be replied.
