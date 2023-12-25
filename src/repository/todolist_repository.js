class TodolistRepository {
    constructor(todolistModel) {
        this.todolistmodel = todolistModel
    }

    async CreateTodolist(todolist) {
        return this.todolistmodel.create({
            tags: todolist.tags,
            body: todolist.body
        })
    }

    async GetTodolist() {
        return this.todolistmodel.findAll()
    }

    async GetTodolistByID(id) {
        return this.todolistmodel.findOne({
            where: {
                id: id
            }
        })
    }

    async UpdateTodolist(id, data) {
        return this.todolistmodel.update(data, {
            where: { 
                id: id
            }
        })
    }

    async DeleteTodolist(id) {
        return this.todolistmodel.destroy({
            where: { 
                id: id
            }
        })
    }
}

module.exports = TodolistRepository
