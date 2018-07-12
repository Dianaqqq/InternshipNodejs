import {Router, Request, Response} from "express";
import {Initialize} from "../initialize/Initialize";
import {Project, Story, Task} from "../types";
import * as utils from '../utils';


const router: Router =  Router();

router.get('/', (req: Request, res: Response) => {

    const projects = Initialize.initializeProjects();
    return res.json(projects);

});

router.get('/:projectId', (req: Request, res: Response) => {
    console.log('Path Params ', req.params);


    const projectId = parseInt(req.params.projectId);

    const project: Project = Initialize.initializeProjects().filter(project => project.id === projectId)[0];

    console.log(project);
    res.json(project);
});


router.get('/:projectId/stories', (req: Request, res: Response) => {
    console.log('Path Params ', req.params);

    const projectId = parseInt(req.params.projectId);
    const project: Project = Initialize.initializeProjects().filter(project => project.id === projectId)[0];

    const stories = project.stories;

    console.log(stories);
    res.json(stories);
});

router.post('/:projectId/stories/:storyId/finished', (req: Request, res: Response) => {
    console.log('Path Params ', req.params);

    const projectId = parseInt(req.params.projectId);
    const storyId = parseInt(req.params.storyId);
    const finished = req.body.finished;

    console.log(req.body.finished);
    let project: Project;
    let story: Story;
    let tasks: Task[];
    project = utils.findProject(projectId); //proiectul dorit
    story = utils.findStoryforProject(project, storyId);
    tasks = story.tasks;

    tasks.forEach(task => {
        task.finished = finished;
    });

    //changing story status cf storyId
    story.finished = finished;

    console.log(tasks);
    console.log(story);

    res.json(story);

    // console.log(story);

});

router.post('/:projectId/stories/delete', (req: Request, res: Response) => {
    console.log('Path Params ', req.params);

    const projectId = parseInt(req.params.projectId);
    const storyId = req.body.storyId;

    console.log(req.body.storyId);

    //delete story by the id from the the project (projectId)

    let project = utils.findProject(projectId);

    let story = utils.findStoryforProject(project, storyId);

    let index = project.stories.indexOf(story);
    project.stories.splice(index, 1);
    console.log(project.stories);
    console.log(project);
    res.json(project.stories);
});






export const ProjectsController = router;
