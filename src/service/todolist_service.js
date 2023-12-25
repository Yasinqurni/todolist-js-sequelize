class TodolistService {
    constructor(todolistRepository) {
        this.todolistrepository = todolistRepository
    }

    async CreateTodolist(todolist) {
        return await this.todolistrepository.CreateTodolist(todolist)
    }

    async GetTodolist() {
        return await this.todolistrepository.GetTodolist()
    }

    async GetTodolistByID(id) {
        return await this.todolistrepository.GetTodolistByID(id)
    }

    async UpdateTodolist(id, data) {
        return await this.todolistrepository.UpdateTodolist(id, data)
    }

    async DeleteTodolist(id) {
        return await this.todolistrepository.DeleteTodolist(id)
    }
}

module.exports = TodolistService