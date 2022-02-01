        var rocket,asteroid
        var gameState = "play",gameState = "end"
        var rocketImg,asteroidImg,score = 0;
        var gameOverImg;
        function preload(){
            rocketImg = loadImage("rocket.png");
            asteroidImg = loadImage("asteroid.png");
           // gameOver = loadImage("back.png")
        }

        function setup() {
                createCanvas(600, 600);
                asteroid = createSprite(300,200)
                asteroid.velocityY = 4;
            asteroid.scale = 0.2
            
            asteroid.addImage(asteroidImg);
                      
               // gameOverImg = addImage("back.png")
                rocket = createSprite(150,550,20,50);
                rocket.addImage(rocketImg);
                rocket.scale = 0.1;    
            asteroid.lifetime = 600;

        }

        function draw() {
            background("black")
            drawSprites()
            rocket.velocityY = rocket.velocityY+0.7
        
        if(keyDown(RIGHT_ARROW)){
        rocket.x = rocket.x +3
        }
        if(keyDown(LEFT_ARROW)){
        rocket.x = rocket.x -3
        }
        if(keyDown(UP_ARROW)){
        rocket.velocityY = rocket.velocityY -0.8
        }
        if(keyDown("space")){
                    reset()

            }
            if(asteroid.isTouching(rocket)||rocket>=600){
            textSize(20)
            fill("yellow")
            text("GAME OVER!!! Press Spacbar to Restart",200,200)
            gameState = "end"
            rocket.visible = false
            asteroid.visible = false
          rocket.destroy()
          asteroid.destroy()
            }
            createEdgeSprites()
            if(gameState === "play"){
            //gameOverImg.visible = false
            score = score + Math.round(getFramerate()/50) 
            fill(white)
            
            

            }
            if(gameState === "end"){
                    //asteroid.visible = false
            // rocket.visible = false
            //score = 0;
            }
            if(frameCount%80 === 0){
                asteroid = createSprite(300,200);
                asteroid.x = Math.round(random(0,600))
                asteroid.addImage(asteroidImg);
                asteroid.scale = 0.2
                asteroid.velocityY = 4;


            }

            text("score:"+ score,50,350)   

                
        if(rocket.y>10){
        score = score+1
        }







            }

function reset(){





}



















