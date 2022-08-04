function CreateTodo(data) {
    return fetch('/.netlify/functions/hello', {
      body: JSON.stringify(data),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }
  export default CreateTodo