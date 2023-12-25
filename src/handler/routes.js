
class TodolistRoutes {
    
    constructor(todolistHandler) {
      
        this.routes = [
            {
                method: 'GET',
                path: '/todolist',
                handler: todolistHandler.GetTodolist
            },
            {
                method: 'GET',
                path: '/todolist/{id}',
                handler: todolistHandler.GetTodolistByID
            },
            {
                method: 'POST',
                path: '/todolist',
                handler: todolistHandler.CreateTodolist
            },
            {
                method: 'PUT',
                path: '/todolist/{id}',
                handler: todolistHandler.UpdateTodolist
            },
            {
                method: 'DELETE',
                path: '/todolist/{id}',
                handler: todolistHandler.DeleteTodolist
            }
        ];
    }

    getRoutes() {
        return this.routes;
    }
}

module.exports = TodolistRoutes
