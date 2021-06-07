class user{
    constructor(){
        this.image1 = loadImage("Hack.jpg")
        this.image2 = loadImage("cyber bully.jpg")
        this.image3 = loadImage("Silent Cyberhacking.jpg")
        this.image4 = loadImage("msg1cyb.png")
        this.image5 = loadImage("msg2cybe.jpg")
        this.image6 = loadImage("msg3cyb.jpg")
        this.info1 = createInput("My Name is:")
        this.info2 = createInput("My content is:")
        this.info3 = createInput("My feedback is:")
   }

  getName(){
    NameRef = database.ref('Name')
    NameRef.on("value",function(data){
      Name = data.val();
    })
  }

 

  getContent(){
    ContentRef = database.ref('Content')
    ContentRef.on("value",function(data){
      Content = data.val();
    })
  }

  

  getFeedback(){
    FeedRef = database.ref('Feedback')
    FeedRef.on("value",function(data){
      Feedback = data.val()
    })
  }

  

   
  

   display(){
       imageMode(CENTER);
       strokeWeight(6)
       stroke("blue")
       fill(240)
       image(this.image1,x,y,150,350)
       image(this.image2,x,130,400,530)
       image(this.image3,70,y,120,60)
   }

  }

