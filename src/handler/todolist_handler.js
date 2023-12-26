const { todolistDecoratorList, todolistDecorator } = require('../decorator/todolist_decorator')

class TodolistHandler {

    constructor(todolistService) {
        this.todolistservice = todolistService

        this.CreateTodolist = this.CreateTodolist.bind(this);
        this.GetTodolist = this.GetTodolist.bind(this);
        this.GetTodolistByID = this.GetTodolistByID.bind(this);
        this.UpdateTodolist = this.UpdateTodolist.bind(this);
        this.DeleteTodolist = this.DeleteTodolist.bind(this);
    }
    
    async CreateTodolist(request, h) {
        try {
            const payload = request.payload

            if (Object.keys(payload).length === 0) {
                throw new Error('please insert body') 
            }

            const isCreate = await this.todolistservice.CreateTodolist(payload)

            if(!isCreate) {
                throw new Error('Failed to create todolist');
            }
            return h.response({ status: 'success', message: 'Todolist created successfully' }).code(201);

        } catch(err) {

            console.error(err)
            return h.response({ status: 'error', message: err.message}).code(500);

        }
    }

    async GetTodolist(request, h)  {
        try {
            const todolists = await this.todolistservice.GetTodolist()

            const result = await todolistDecoratorList(todolists)

            return h.response({ status: 'success', message: 'Get todolist successfully', data: result }).code(200);


        } catch(err) {

            console.error(err)
            return h.response({ status: 'error', message: err.message}).code(500);

        }
    }

    async GetTodolistByID(request, h) {
        try {

            const id = request.params.id

            console.log(id)

            if(id == undefined) {
                throw new Error("Params not found")
            }

            const todolist = await this.todolistservice.GetTodolistByID(id)

            if (todolist == null) {
                throw new Error("Todolist not found")
            }

            const result =  await todolistDecorator(todolist)

            return h.response({ status: 'success', message: 'Get todolist successfully', data: result }).code(200);

        } catch(err) {

            console.error(err)
            return h.response({ status: 'error', message: err.message}).code(500);

        }
    }

    async UpdateTodolist(request, h) {
        try {

            const id = request.params.id
            const data = request.payload

            if(id == undefined || data.length == 0) {
                throw new Error("Params or body not found")
            }

            const isUpdate = this.todolistservice.UpdateTodolist(id, data)

            if(!isUpdate) {
                throw new Error('Failed to update todolist');
            }

            return h.response({ status: 'success', message: 'Todolist update successfully' }).code(200);


        } catch(err) {

            console.error(err)
            return h.response({ status: 'error', message: err.message}).code(500);

        }
    }

    async DeleteTodolist(request, h) {
        try {

            const id = request.params.id

            if(id == undefined) {
                throw new Error("Params not found")
            }

            const isDelete = this.todolistservice.DeleteTodolist(id) 

            if(!isDelete) {
                throw new Error('Failed to delete todolist');
            }

            return h.response({ status: 'success', message: 'Todolist delete successfully' }).code(200);


        } catch(err) {

            console.error(err)
            return h.response({ status: 'error', message: err.message}).code(500);

        }
    }
}

module.exports = TodolistHandler