import {Initialize} from "./initialize/Initialize";
import {Project, Story} from "./types";

export function findProject(projectId: number): Project{
    return Initialize.initializeProjects().filter(project => project.id === projectId)[0];
}

export function findStoryforProject (project: Project, storyId: number) : Story {
    //caut story-ul in functie de id-ul project-ului

    let story : Story;
    story = project.stories.filter(story => story.id === storyId)[0];
    return story;
}