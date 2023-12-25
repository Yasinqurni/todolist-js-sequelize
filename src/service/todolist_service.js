class TodolistService {
    constructor(todolistRepository) {
        this.todolistRepository = todolistRepository
    }

    async CreateTodolist(todolist) {
        return await this.todolistRepository.CreateTodolist(todolist)
    }

    async GetTodolist() {
        return await this.todolistRepository.GetTodolist()
    }

    async GetTodolistByID(id) {
        return await this.todolistRepository.GetTodolistByID(id)
    }

    async UpdateTodolist(id, data) {
        return await this.todolistRepository.UpdateTodolist(id, data)
    }

    async DeleteTodolist(id) {
        return await this.todolistRepository.DeleteTodolist(id)
    }
}

module.exports = TodolistService