import {Router, Request, Response} from "express";
import {Initialize} from "../initialize/Initialize";
import {Project, Story} from "../types";

const router: Router =  Router();

router.get('/', (req: Request, res: Response) => {

    const stories = Initialize.initializeStories();
    return res.json(stories);

});

router.get('/:storyId', (req: Request, res: Response) => {
    console.log('Path Params ', req.params);


    const storyId = parseInt(req.params.storyId);

    const story = Initialize.initializeStories().filter(story => story.id === storyId)[0];

    console.log(story);
    res.json(story);
});


router.get('/:storyId/tasks', (req: Request, res: Response) => {
    console.log('Path Params ', req.params);

    const storyId = parseInt(req.params.storyId);
    const story = Initialize.initializeStories().filter(story => story.id === storyId)[0];

    const tasks = story.tasks;

    console.log(tasks);
    res.json(tasks);
});

export const StoriesController = router;
