class form{
    constructor(){
        this.input = createInput("Name");
        this.input2 = createInput("Content");
        this.title = createElement('h2');
        this.userExperience = createInput('UE');
        this.submit = createButton('Submit');
    }

    hide(){
        this.userExperience.hide();
        this.input.hide();
        this.input2.hide();
        this.submit.hide();
        this.title.hide();
    }

    display(){
        this.title.html("CybeSec Solutions");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'red');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'magenta');
        this.input2.position(560,410)
        this.input2.style('width', '250px');
        this.input2.style('height', '70px');
        this.input2.style('background', 'orange');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        
        this.submit.mousePressed(()=>{
            this.input.hide();
            this.input2.hide();
            this.userExperience.hide();
            this.display(text("Thank You for writing your opinion and feedback",350,700))
    
        });
   } 
   
   updateName(Name){
        database.ref('/').update({
           Name:Name
        })
    }

    updateContent(Content){
           database.ref('/').update({
              Content:Content
       })
    }
    
    updateFeedback(Feedback){
        database.ref('/').update({
            Feedback:Feedback
        })
    }

    
}

   
    


