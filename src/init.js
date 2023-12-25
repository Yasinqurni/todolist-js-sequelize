const todolistModel = require('./repository/model/todolist_model')
const { TodolistRepository } = require('./repository')
const { TodolistService } = require('./service')
const { TodolistHandler, TodolistRoutes } = require('./handler')

const todolistRepository = new TodolistRepository(todolistModel)
const todolistService = new TodolistService(todolistRepository)
const todolistHandler = new TodolistHandler(todolistService)
const todolistRoutes = new TodolistRoutes(todolistHandler)

module.exports = todolistRoutes