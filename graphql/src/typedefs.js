const typeDefs = `
type Query {
    TodoTasks:[ToDoTask]!
    ToDoTask(id:Int!):ToDoTask!
}

type ToDoTask{
    createdAt:Float!
    updatedAt:Float!
    id:Int!
    taskName:String!
    taskDetail:String!
    taskDate:String!
}

input ToDoTaskUnit{
    taskName:String!
    taskDetail:String!
    taskDate:String!
}

type Mutation{
    removeToDoTask(id:Int!):[ToDoTask]
    addToDoTask(unit:ToDoTaskUnit):ToDoTask
}
`;

module.exports.typeDefs = typeDefs;
