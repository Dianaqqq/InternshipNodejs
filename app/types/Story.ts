import {Task} from "./Task";
import {Entity} from './Entity';

export class Story extends Entity {
    private _finished: boolean;
    private _responsible: string;
    private _tasks: Array<Task>;

    constructor(id: number, title: string, finished: boolean, responsible: string, tasks: Array<Task>) {
        super(id, title);
        this._finished = finished;
        this._responsible = responsible;
        this._tasks = tasks;
    }

    isFinished(): boolean {
        if (this._finished == true) {
            return true;
        }
        else
            return false;
    }

    get tasks () {
        return this._tasks;
    }

    set finished (finished: boolean) {
        this._finished = finished;
    }

    get responsible () : string {
        return this._responsible;
    }

    set responsible (responsible: string) {
        this._responsible = responsible;
    }

    removeTask (task: Task) : void {
        let index = this._tasks.indexOf(task);
        this._tasks.splice(index, 1);
    }
}