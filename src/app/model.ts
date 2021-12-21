export class Model {
    user;
    items;
    title;
    constructor(){
        this.user = "Aybuke";
        this.items = [
            new TodoItem("Sport", true),
            new TodoItem("Breakfast", false),
            new TodoItem("Cinema", false),
            new TodoItem("Reading", false)
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