import {Entity} from './Entity';

export class Task extends Entity {
    private _finished: boolean;
    private _priority: number;

    constructor(id: number, title: string, finished: boolean, priority: number) {
        super(id, title);
        this._finished = finished;
        this._priority = priority;
    }


    isFinished(): boolean {
        if (this._finished == true) {
            return true;
        }
        else
            return false;
    }


    set finished (finished: boolean){
        this._finished = finished;
    }

    get priority (): number {
        return this._priority;
    }

    set priority (priority: number){
        this._priority = priority;
    }




}