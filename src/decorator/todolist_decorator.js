
const todolistDecoratorList = async (todolists) => {

    return todolists.map((todolist) => {
        return {
           id: todolist.id,
           tags: todolist.tags,
           body: todolist.body,
           createdAt: todolist.createdAt
        }
    })
}

const todolistDecorator = async (todolist) => {

    return {
        id: todolist.id,
        tags: todolist.tags,
        body: todolist.body,
        createdAt: todolist.createdAt
    }
    
}


module.exports = {
    todolistDecoratorList,
    todolistDecorator
}