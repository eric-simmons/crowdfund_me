const router = require('express').Router()
const { Project, User } = require('../models')

router.get('/', async (req, res) => {

    try {
        let projects = await Project.findAll()
        //update projects variable
        projects = projects.map(project => project.get({ plain: true }))
        res.render('home', { projects: projects })
    }
    catch (error) { res.status(500).json(error) }

})

router.get('/project/:id', async (req, res) => {

    try {
        let project = await Project.findByPk(req.params.id)
        project = project.get({ plain: true })

        res.render('project', { project })
    }
    catch (error) { res.status(500).json(error) }



})

module.exports = router