const todolistModel = require('./repository/model/todolist_model')
const { TodolistRepository } = require('./repository/index')
const { TodolistService } = require('./service/index')
const { TodolistHandler, TodolistRoutes } = require('./handler/index')

const todolistRepository = new TodolistRepository(todolistModel)
const todolistService = new TodolistService(todolistRepository)
const todolistHandler = new TodolistHandler(todolistService)
const todolistRoutes = new TodolistRoutes(todolistHandler)

module.exports = todolistRoutes.getRoutes()