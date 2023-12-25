class TodolistRepository {
    constructor(todolistModel) {
        this.todolistModel = todolistModel
    }

    async CreateTodolist(todolist) {
        return this.todolistModel.create({
            tags: todolist.tags,
            body: todolist.body
        })
    }

    async GetTodolist() {
        return this.todolistModel.findAll()
    }

    async GetTodolistByID(id) {
        return this.todolistModel.findOne({
            where: {
                id: id
            }
        })
    }

    async UpdateTodolist(id, data) {
        return this.todolistModel.update(data, {
            where: { 
                id: id
            }
        })
    }

    async DeleteTodolist(id) {
        return this.todolistModel.destroy({
            where: { 
                id: id
            }
        })
    }
}

module.exports = TodolistRepository
