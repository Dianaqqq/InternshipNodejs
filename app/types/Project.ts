import {Story} from "./Story";
import {Entity} from "./Entity";

export class Project extends Entity {
    private _archived: boolean;
    private _stories: Array<Story>; //S

    constructor (id:number, title:string, archived: boolean, stories: Array<Story>) {
        super(id, title);
        this._archived = archived;
        this._stories = stories;
    }

    isArchived(): boolean {
        if (this._archived == true) {
            return true;
        }
        else
            return false;
    }


    set archived(archived: boolean) {
        this._archived = archived;
    }

    addStory(story: Story) : void{
        this._stories.push(story);
    }

    get stories() : Array<Story> {
        return this._stories;
    }

    removeStory(story: Story) {
        //remove from Array from Story
        let index = this._stories.indexOf(story);
        this._stories.splice(index, 1);
    }
}