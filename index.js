const grpc = require('grpc')
const notesProto = grpc.load('notes.proto')

const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1' },
    { id: '2', title: 'Note 2', content: 'Content 2' }
]
const server = new grpc.Server();

server.addService(notesProto.NoteService.service, {
    store: (params, callback) => {
      // console.log(params)
      // notes.push({
      //   id: params.request.id,
      //   title: params.request.title,
      //   content: params.request.content
      // })
      notes.push(params.request)
      callback(null, notes)
    },
    list: (_, callback) => {
        callback(null, notes)
    },
})
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()