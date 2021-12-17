export class Model {
    user;
    items;
    title;
    constructor(){
        this.user = "Aybuke";
        this.items = [
            new TodoItem("Sport", false),
            new TodoItem("Breakfast", false)
        ];
        this.title = 'angular-first-education-project';
    }
}



export class TodoItem {
    description;
    action;

    constructor(description : any, action : any){
        this.description = description;
        this.action = action;
    }
}