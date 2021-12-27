const client = require('./client-grpc')

const noteToCreate = {
  id: '6',
  title: 'Title 6',
  content: 'Content 6'
}

client.store(noteToCreate, (error, notes) => {
    if (!error) {
        console.log(notes)
    } else {
        console.error(error)
    }
})