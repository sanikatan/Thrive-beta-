//Screens
const startScreen = document.querySelector(".startScreen");
const choosePlayerScreen = document.querySelector(".choosePlayerScreen");
const Arena1Screen = document.querySelector(".Arena1Screen");
const fightScreen = document.querySelector(".fightScreen");

//Audio
var backgroundMusic = document.getElementById("background_music");
var fightMusic = document.getElementById("fight_music");
var win_music = document.getElementById("win_music");
var ufc1 = document.getElementById("ufc1");
var ufc2 = document.getElementById("ufc2");
backgroundMusic.currentTime = 0.5;
win_music.volume = 0.55;
ufc1.volume = 0.5;
ufc2.volume = 0.5;
backgroundMusic.volume = 0.4;
fightMusic.volume = 0.55;

//Player
var player1_healthbar = document.getElementById("player1_HP");
var player2_healthbar = document.getElementById("player2_HP");
var player1_width = 50, player1_height = 80, player1_v = 0,  player1_jump = true;
var player2_width = 50, player2_height = 80, player2_v = 0,  player2_jump = true;
var goLeft1, goRight1, goUp1, goDown1, goLeft2, goRight2, goUp2, goDown2, gravity = 0.5, movementspeed = 10;
var movementspeed1=0, movementspeed2=0, shooting1 = false, shooting2 = false;

var player_attackSpeed = 0.25;

var player1_right = true;
var player2_right = false;

var player1;
var player2;

//Platforms
var platform1, platform1_X = 400, platform1_Y = 400, platform1_height = 200, platform1_width = 350;
var platform2, platform2_X = 800, platform2_Y = 650, platform2_height = 80, platform2_width = 550;
var platform3, platform3_X = 1450, platform3_Y = 520, platform3_height = 170, platform3_width = 370;
var distance = 30;

//Interval & canvas/context
var interval1, interval2, interval3, seconds=0;
var canvas = document.getElementById("gamebox");
var context = canvas.getContext("2d");

//Button
var button_restart = document.getElementById("button_restart");
var button_restart_img = document.getElementById("button_restart_img");

//Weapons
var bullets = [], bullat_img, bullet_time1 = 0, bullet_time2 = 0, bullet1_right = false, bullet2_right = false, bullet_img_right, bullet_img_left;

window.onload = setTimeout(initDivMouseOver_Start, 3600);

function initDivMouseOver_Start()   {
const a_top = document.querySelector ("a span:nth-child(1)");
const a_right = document.querySelector ("a span:nth-child(2)");
const a_bottom = document.querySelector ("a span:nth-child(3)");
const a_left = document.querySelector ("a span:nth-child(4)");
var buttonStart = document.getElementById("buttonStart");
buttonStart.style.display = "flex";
    buttonStart.mouseIsOver = false;

    buttonStart.onmouseover = function()   {
      this.mouseIsOver = true;
      a_top.style.left = '100%';
      a_top.style.transition = '1s';
      a_right.style.top = '100%';
      a_right.style.transition = '1s';
      a_right.style.transitionDelay = '0.25s';
      a_bottom.style.a_right = '100%';
      a_bottom.style.transition = '1s';
      a_bottom.style.transitionDelay = '0.5s';
      a_left.style.bottom = '100%';
      a_left.style.transition = '1s';
      a_left.style.transitionDelay = '0.75s';
   }
   
   buttonStart.onmouseout = function()   {
      this.mouseIsOver = false;
      a_top.style.left = '-100%';
      a_top.style.transition = '0.5s';
      a_top.style.transitionDelay = '0.75s';
      a_right.style.top = '-100%';
      a_right.style.transition = '0.5s';
      a_right.style.transitionDelay = '0.5s';
      a_bottom.style.a_right = '-100%';
      a_bottom.style.transition = '0.5s';
      a_bottom.style.transitionDelay = '0.25s';
      a_left.style.bottom = '-100%';
      a_left.style.transition = '0.5s';
   }
   buttonStart.onclick = function()   {
      if (this.mouseIsOver)   {
        backgroundMusic.play();
        startScreen.style.display = 'none';
        choosePlayerScreen.style.display = 'flex';
        SubmitPlayer1();
    }
      }
   }
function initDivMouseOver_Fight()   {
      const b_top = document.querySelector ("b span:nth-child(1)");
      const b_right = document.querySelector ("b span:nth-child(2)");
      const b_bottom = document.querySelector ("b span:nth-child(3)");
      const b_left = document.querySelector ("b span:nth-child(4)");
      var buttonFight = document.getElementById("buttonFight");
      buttonFight.style.display = 'flex';
      buttonFight.mouseIsOver = false;
      
      buttonFight.onmouseover = function()   {
            this.mouseIsOver = true;
            b_top.style.left = '100%';
            b_top.style.transition = '1s';
            b_right.style.top = '100%';
            b_right.style.transition = '1s';
            b_right.style.transitionDelay = '0.25s';
            b_bottom.style.a_right = '100%';
            b_bottom.style.transition = '1s';
            b_bottom.style.transitionDelay = '0.5s';
            b_left.style.bottom = '100%';
            b_left.style.transition = '1s';
            b_left.style.transitionDelay = '0.75s';
      
         }
         
         buttonFight.onmouseout = function()   {
            this.mouseIsOver = false;
            b_top.style.left = '-100%';
            b_top.style.transition = '0.5s';
            b_top.style.transitionDelay = '0.75s';
            b_right.style.top = '-100%';
            b_right.style.transition = '0.5s';
            b_right.style.transitionDelay = '0.5s';
            b_bottom.style.a_right = '-100%';
            b_bottom.style.transition = '0.5s';
            b_bottom.style.transitionDelay = '0.25s';
            b_left.style.bottom = '-100%';
            b_left.style.transition = '0.5s';
         }
         
         buttonFight.onclick = function()   {
            if (this.mouseIsOver)   {
            loadImg();
            choosePlayerScreen.style.display = 'none';
            fightScreen.style.display = 'flex';
            fightMusic.play();
            setTimeout(function(){
               fightScreen.style.display = 'none';
               Arena1Screen.style.display = 'inline-block';
               StartFight();
            },2500)
            
          }
            }
         }
   function SubmitPlayer1(){
      var buttonFight = document.getElementById("buttonFight");
      var SubmitCharacter1Button =document.getElementById("SubmitCharacter1Button");
      var SubmitCharacter2Button =document.getElementById("SubmitCharacter2Button");
      var CYF =document.getElementById("CYF");
      buttonFight.style.display = 'none';
      player1 = 0;
      player2 = 0;

      SubmitCharacter1Button.onclick = function() {
         Player1Selected.innerHTML ='Player1 chose: Krakhorn the Fanatical';
         CYF.innerHTML ='Choose your Fighter Player2:';
         player1 = 1;
         SubmitPlayer2();
      }
      SubmitCharacter2Button.onclick = function(){
        Player1Selected.innerHTML ='Player1 chose: Murbol the Slayer';
        CYF.innerHTML ='Choose your Fighter Player2:';
        player1 = 2;
        SubmitPlayer2();
      }
   }
   function SubmitPlayer2(){
      player2 = 0;
      SubmitCharacter1Button.onclick = function() {
         Player2Selected.innerHTML ='Player2 chose: Krakhorn the Fanatical';
         player2 = 1;
         initDivMouseOver_Fight();
      }
      SubmitCharacter2Button.onclick = function(){
         Player2Selected.innerHTML ='Player2 chose: Murbol the Slayer';
        player2 = 2;
        initDivMouseOver_Fight();
      }
   }
   function StartFight(){
      player1_healthbar.src = 'pictures/playerHP_4.png', player1_healthbar.height = '31.5', player1_healthbar.width = '286';
      player2_healthbar.src = 'pictures/playerHP_4.png', player2_healthbar.height = '31.5', player2_healthbar.width = '286';
      player1_HP = 4, player1_PosX = 550, player1_PosY = 300;
      player2_HP = 4, player2_PosX = 1600, player2_PosY = 420;
      
      game();
   }
   function loadImg(){

      player_1 = new Image();
      player_2 = new Image();
      platform1 = new Image();
      platform2 = new Image();
      platform3 = new Image();
      player1_win = new Image();
      player2_win = new Image();
      bullet_img_right = new Image();
      bullet_img_left = new Image();
      
      if(player1 == 1){
         player_1.src = 'pictures/Kothug_right.png';
      }
      else if(player1 == 2){
         player_1.src = 'pictures/Murbol_right.png';
      }
      if(player2 == 1){
         player_2.src = 'pictures/Kothug_left.png';
      }
      else if(player2 == 2){
         player_2.src = 'pictures/Murbol_left.png';
      }

      bullet_img_right.src = 'pictures/bullet_right.png';
      bullet_img_left.src = 'pictures/bullet_left.png';

      platform1.src = 'pictures/platform1.png';
      platform2.src = 'pictures/platform3.png';
      platform3.src = 'pictures/platform2.png';

      player1_win.src = 'pictures/player1_win.png';
      player2_win.src = 'pictures/player2_win.png';
   }
   function game(){
      interval1 = setInterval(function(){render();},20);
   }
   function render(){
      draw();
      move();
      collision();
   }
   function draw(){
      context.clearRect(0,0,canvas.width,canvas.height);
      //context.fillRect(player1_PosX,player1_PosY,player1_width,player1_height);
      context.drawImage(player_1,player1_PosX,player1_PosY,player1_width,player1_height);
      context.drawImage(player_2,player2_PosX,player2_PosY,player2_width,player2_height);

      context.drawImage(platform1,platform1_X,platform1_Y,platform1_width,platform1_height);
      context.drawImage(platform2,platform2_X,platform2_Y,platform2_width,platform2_height);
      context.drawImage(platform3,platform3_X,platform3_Y,platform3_width,platform3_height);

      for(var i = 0; i < bullets.length; i++)
      {
         if(bullets[i].bullet_direction)
         context.drawImage(bullet_img_right,bullets[i].bulletPosX,bullets[i].bulletPosY,bullets[i].bulletWidth,bullets[i].bulletHeight,);

         else
         context.drawImage(bullet_img_left,bullets[i].bulletPosX,bullets[i].bulletPosY,bullets[i].bulletWidth,bullets[i].bulletHeight,);   
      }
      seconds = seconds + 0.02;
   }
   function move(){
      movePlayer1();
      movePlayer2();
      check_jump();
      moveBullets();
   }
   function check_jump(){
      if(player1_jump == true){
         movementspeed1 += gravity;
      }
      player1_PosY += movementspeed1;
      if(player1_PosY < canvas.height)
      player1_jump = true;

      if(platform2_X < player1_PosX && player1_PosX < platform2_X + platform2_width && platform2_Y-50 < player1_PosY && player1_PosY < platform2_Y + platform2_height)
      {
      player1_jump = false;
      player1_PosY = platform2_Y - 50;
      }
      if(platform1_X < player1_PosX && player1_PosX < platform1_X + platform1_width && platform1_Y-50 < player1_PosY && player1_PosY < platform1_Y + platform1_height)
      {
         player1_jump = false;
         player1_PosY = platform1_Y - 50;
         }
         if(platform3_X < player1_PosX && player1_PosX < platform3_X + platform3_width && platform3_Y-50 < player1_PosY && player1_PosY < platform3_Y + platform3_height)
      {
         player1_jump = false;
         player1_PosY = platform3_Y - 50;  
      }
      //Player 2
      if(player2_jump == true){
         movementspeed2 += gravity;
      }
      player2_PosY += movementspeed2;
      if(player2_PosY < canvas.height)
      player2_jump = true;

      if(platform2_X < player2_PosX && player2_PosX < platform2_X + platform2_width && platform2_Y-50 < player2_PosY && player2_PosY < platform2_Y + platform2_height)
      {
      player2_jump = false;
      player2_PosY = platform2_Y - 50;
      }
      if(platform1_X < player2_PosX && player2_PosX < platform1_X + platform1_width && platform1_Y-50 < player2_PosY && player2_PosY < platform1_Y + platform1_height)
      {
         player2_jump = false;
         player2_PosY = platform1_Y - 50;
         }
         if(platform3_X < player2_PosX && player2_PosX < platform3_X + platform3_width && platform3_Y-50 < player2_PosY && player2_PosY < platform3_Y + platform3_height)
      {
         player2_jump = false;
         player2_PosY = platform3_Y - 50;  
      }
   }
   function movePlayer1(){
      if(goLeft1 == 1)
      {
          if(player1_PosX > 0 && !(player1_PosY + player1_height - 30 > platform1_Y && player1_PosY < platform1_Y + platform1_height && player1_PosX + player1_height == platform1_X + platform1_width + distance)
         && !(player1_PosY + player1_height > platform2_Y && player1_PosY < platform2_Y + platform2_height && player1_PosX + player1_height == platform2_X + platform2_width + distance + 30)
         && !(player1_PosY + player1_height > platform3_Y && player1_PosY < platform3_Y + platform3_height && player1_PosX + player1_height == platform3_X + platform3_width + distance + 30))
         {
            player1_PosX = player1_PosX - movementspeed;
            if(player1 == 1){
               player_1.src = 'pictures/Kothug_left.png';
            }
            else if(player1 == 2){
               player_1.src = 'pictures/Murbol_left.png';
            }
            player1_right = false;
         }
         
      }
      if(goRight1 == 1)
      {
         if(player1_PosX + player1_width < canvas.width && !(player1_PosY + player1_height - 30 > platform1_Y && player1_PosY < platform1_Y + platform1_height && player1_PosX + player1_height == platform1_X + distance + 30)
         && !(player1_PosY + player1_height > platform2_Y && player1_PosY < platform2_Y + platform2_height && player1_PosX + player1_height == platform2_X + distance + 40)
         && !(player1_PosY + player1_height > platform3_Y && player1_PosY < platform3_Y + platform3_height && player1_PosX + player1_height == platform3_X + distance + 30))
         {
            player1_PosX = player1_PosX + movementspeed;
            if(player1 == 1){
               player_1.src = 'pictures/Kothug_right.png';
            }
            else if(player1 == 2){
               player_1.src = 'pictures/Murbol_right.png';
            }
            player1_right = true;
         }
      }
      if(goDown1 == 1)
      {
         if(player1_PosY + player1_height < canvas.height && !(player1_PosX > platform2_X && player1_PosX < platform2_X + platform2_width && player1_PosY + player1_width == platform2_Y)
         && !(player1_PosX + player1_width - 30 > platform1_X && player1_PosX  < platform1_X + platform1_width && player1_PosY + player1_width == platform1_Y)
         && !(player1_PosX + player1_width > platform3_X && player1_PosX  < platform3_X + platform3_width && player1_PosY + player1_width == platform3_Y))
         player1_PosY = player1_PosY + movementspeed;
      }
   }
   function movePlayer2(){
      if(goLeft2 == 1)
      {
         if(player2_PosX > 0 && !(player2_PosY + player2_height - 30 > platform1_Y && player2_PosY < platform1_Y + platform1_height && player2_PosX + player2_height == platform1_X + platform1_width + distance)
         && !(player2_PosY + player2_height > platform2_Y && player2_PosY < platform2_Y + platform2_height && player2_PosX + player2_height == platform2_X + platform2_width + distance + 30)
         && !(player2_PosY + player2_height > platform3_Y && player2_PosY < platform3_Y + platform3_height && player2_PosX + player2_height == platform3_X + platform3_width + distance + 30))
         {
            player2_PosX = player2_PosX - movementspeed;
            if(player2 == 1){
               player_2.src = 'pictures/Kothug_left.png';
            }
            else if(player2 == 2){
               player_2.src = 'pictures/Murbol_left.png';
            }
            player2_right = false;
         }
      }
      if(goRight2 == 1)
      {
         if(player2_PosX + player2_width < canvas.width && !(player2_PosY + player2_height - 30 > platform1_Y && player2_PosY < platform1_Y + platform1_height && player2_PosX + player2_height == platform1_X + distance + 30)
         && !(player2_PosY + player2_height > platform2_Y && player2_PosY < platform2_Y + platform2_height && player2_PosX + player2_height == platform2_X + distance + 40)
         && !(player2_PosY + player2_height > platform3_Y && player2_PosY < platform3_Y + platform3_height && player2_PosX + player2_height == platform3_X + distance + 30))
         {
         player2_PosX = player2_PosX + movementspeed;
            if(player2 == 1){
               player_2.src = 'pictures/Kothug_right.png';
            }
            else if(player2 == 2){
               player_2.src = 'pictures/Murbol_right.png';
            }
            player2_right = true;
         }
      }
      if(goDown2 == 1)
      {
         if(player2_PosY + player2_height < canvas.height && !(player2_PosX > platform2_X && player2_PosX < platform2_X + platform2_width && player2_PosY + player2_width == platform2_Y)
         && !(player2_PosX + player2_width - 30 > platform1_X && player2_PosX  < platform1_X + platform1_width && player2_PosY + player2_width == platform1_Y)
         && !(player2_PosX + player2_width > platform3_X && player2_PosX  < platform3_X + platform3_width && player2_PosY + player2_width == platform3_Y))
         player2_PosY = player2_PosY + movementspeed;
         
      }
      
   }
   function moveBullets(){
      for(var i = 0; i < bullets.length; i++)
      {
         if(bullets[i].bullet_direction)
         bullets[i].bulletPosX += 14;

         else
         bullets[i].bulletPosX -= 14;

      }
   }
   function spawnBullet1(){

             if(seconds - bullet_time1 >= player_attackSpeed)
             {
                if(player1_right)
                  bullet1_right = true;
                
                else
                   bullet1_right = false;

               if(bullet1_right){

                  var newBullet =
                  {
                     bulletPosX: player1_PosX + player1_width,
                     bulletPosY: player1_PosY + (player1_height / 2),
                     bulletWidth: 25,
                     bulletHeight: 25,
                     bullet_direction: bullet1_right,
                  };
               }
               else{
                  var newBullet =
                  {
                     bulletPosX: player1_PosX - 25,
                     bulletPosY: player1_PosY + (player1_height / 2),
                     bulletWidth: 25,
                     bulletHeight: 25,
                     bullet_direction: bullet1_right,
                  };
               }
               bullet_time1 = seconds;
             bullets.push(newBullet);
            }
   }
   function spawnBullet2(){

      if(seconds - bullet_time2 >= player_attackSpeed)
      {
         if(player2_right)
            bullet2_right = true;
                
         else
            bullet2_right = false;

         if(bullet2_right){
            var newBullet =
            {
               bulletPosX: player2_PosX + player2_width,
               bulletPosY: player2_PosY + (player2_height / 2),
               bulletWidth: 25,
               bulletHeight: 25,
               bullet_direction: bullet2_right,
            };
         }
         else{
            var newBullet =
            {
               bulletPosX: player2_PosX - 25,
               bulletPosY: player2_PosY + (player2_height / 2),
               bulletWidth: 25,
               bulletHeight: 25,
               bullet_direction: bullet2_right,
            };
         }
        bullet_time2 = seconds;
      bullets.push(newBullet);
     }
}

   function collision(){
      collision_ground();
      collision_bullets();
   }
   function collision_ground(){
   
      if(player1_PosY >= canvas.height)
      {
      damagePlayer1();
      player1_PosY = 300;
      player1_PosX = 550;
      }
      if(player2_PosY >= canvas.height)
      {
      damagePlayer2();
      player2_PosX = 1600; 
      player2_PosY = 420;
      }
   }
   function collision_bullets(){
      for(var i = 0; i < bullets.length; i++)
      {
         if(bullets[i].bulletPosX < player1_PosX + player1_width - 10 && bullets[i].bulletPosX + bullets[i].bulletWidth > player1_PosX + 10 && bullets[i].bulletPosY < player1_PosY + player1_height && bullets[i].bulletPosY + bullets[i].bulletHeight > player1_PosY)
         {
            bullets.splice(i,1); 
            damagePlayer1();
         }
         if(bullets[i].bulletPosX < player2_PosX + player2_width - 10 && bullets[i].bulletPosX + bullets[i].bulletWidth > player2_PosX + 10 && bullets[i].bulletPosY < player2_PosY + player2_height && bullets[i].bulletPosY + bullets[i].bulletHeight > player2_PosY)
         {
            bullets.splice(i,1);
            damagePlayer2();
         }

         if(bullets[i].bulletPosX < -40)
         bullets.splice(i,1);

         if(bullets[i].bulletPosX > canvas.width + 100)
         bullets.splice(i,1);
      }
   }
   function damagePlayer1(){
      movementspeed1 = 0;
      player1_HP = player1_HP - 1;
      if(player1_HP == 3)
      player1_healthbar.src = 'pictures/playerHP_3.png';
      else if(player1_HP == 2)
      player1_healthbar.src = 'pictures/playerHP_2.png';
      else if(player1_HP == 1)
      player1_healthbar.src = 'pictures/playerHP_1.png';
      else if(player1_HP == 0)
      {
      player1_healthbar.src = 'pictures/playerHP_0.png';
      player2Win();
      }
   }
   function damagePlayer2(){
      movementspeed2 = 0;
      player2_HP = player2_HP - 1;
      if(player2_HP == 3)
      player2_healthbar.src = 'pictures/playerHP_3.png';
      else if(player2_HP == 2)
      player2_healthbar.src = 'pictures/playerHP_2.png';
      else if(player2_HP == 1)
      player2_healthbar.src = 'pictures/playerHP_1.png';
      else if(player2_HP == 0)
      {
      player2_healthbar.src = 'pictures/playerHP_0.png';
      player1Win();
      }
   }
   function player2Win(){

       context.drawImage(player2_win,0,0,canvas.width, canvas.height);

       backgroundMusic.pause();
       backgroundMusic.currentTime = 0.5;
       win_music.play();
       win_music.currentTime = 19;
       ufc1.play();
       bullets = [];

       button_restart.style.border = 'none';
       button_restart.style.background = 'none';
       button_restart_img.src = 'pictures/restart_button.png';
       button_restart.style.display = 'initial';
       clearInterval(interval1);
   }
   function player1Win(){

      context.drawImage(player1_win,0,0,canvas.width, canvas.height);

      backgroundMusic.pause();
      backgroundMusic.currentTime = 0.5;
      win_music.play();
      win_music.currentTime = 21;
      ufc2.play();

      button_restart.style.border = 'none';
      button_restart.style.background = 'none';
      button_restart_img.src = 'pictures/restart_button.png';
      button_restart.style.display = 'initial';
      clearInterval(interval1);
  }

  function restart(){

     win_music.pause();
     win_music.currentTime = 0;
     ufc1.pause();
     ufc1.currentTime = 0;
     ufc2.pause();
     ufc2.currentTime = 0;

   button_restart.style.display = 'none';
   Arena1Screen.style.display = 'none';
   choosePlayerScreen.style.display = 'flex';

   Player1Selected.innerHTML ='';
   Player2Selected.innerHTML ='';
   CYF.innerHTML ='Choose your Fighter Player1:';

   backgroundMusic.play();
   SubmitPlayer1();
  }

   document.addEventListener('keydown',function(event)
   {
      var key = event.keyCode;

      //Player 1
      if(key === 65)
      goLeft1 = 1;

      if(key === 68)
      goRight1 = 1;

      if(key === 83)
      goDown1 = 1;

      if(key === 87)
         if(player1_jump == false)
         {
            movementspeed1 = -15;
         }
      if(key === 32)
      spawnBullet1();

      //Player 2
      if(key === 37)
      goLeft2 = 1;

      if(key === 39)
      goRight2 = 1;

      if(key === 40)
      goDown2 = 1;

      if(key === 13)
      spawnBullet2();

      if(key === 38)
      if(player2_jump == false)
         {
            movementspeed2 = -15;
         }
   }); 
   document.addEventListener('keyup',function(event)
   {
      var key = event.keyCode;

      //Player 1
      if(key === 65)
      goLeft1 = 0;

      if(key === 68)
      goRight1 = 0;

      if(key === 83)
      goDown1 = 0;

      if(key === 87)
      if(movementspeed1 < -2)
         {
            movementspeed1 = -3;
         }

      //Player 2
      if(key === 37)
      goLeft2 = 0;

      if(key === 39)
      goRight2 = 0;

      if(key === 40)
      goDown2 = 0;

      if(key === 38)
      if(movementspeed2 < -2)
         {
            movementspeed2 = -3;
         }
   });