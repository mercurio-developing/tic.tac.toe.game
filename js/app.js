
const tictactoe = !function game () { // I use the module pattern to wrap all

  //i declare all variables!
    var target;
    var x1;
    var x2;
    var x3;
    var modulate;
    var module1;
    var checking;
    var computer;
    var c;
    var playerO;
    var playerX;
    var initGame;
    var check = 0;
    var check1 = 0;

  //delacration of html staff
    var startScreen = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="buttonStart">Start game</a></header></div>';
    var boardScreen = '<div class="board" id="board"></div>';
    var win1 = '<div class="screen screen-win  screen-win-one" id="finish1"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a> </header> </div>';
    var win2 = '<div class="screen screen-win screen-win-two" id="finish2"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a> </header> </div>';
    var tie = '<div class="screen screen-tie" id="tie"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a> </header> </div>';
    var playerName = '<p><span class="playerName1"></span><span1 class="playerName2"></span1></p>';


    var firstGame = function () {
    $("body").append(boardScreen); //i add boardScreen variable
    $('body').children().appendTo('.board'); // and all in the body put inside of .board
    $('.board ul').next().append(playerName); // i add the message who contain the respawn to finish the game and all the screens..
    $("body").append(startScreen);
    $("body").append(tie);
    $("body").append(win1);
    $("body").append(win2);
    };
    firstGame();

    initGame = function() {   //i reset and hideen all variables ...that function run when the game is over, we not append all the html later...
      $('.playerName1').text("");
      $('.playerName2').text("");
      $('.message').text("");
      $("#screen").hide();
      $('#board').hide();
      $("#finish1").hide();
      $("#finish2").hide();
      $("#tie").hide();
      $(".boxes li").removeClass('box-filled-1 box-filled-2');
      $('#player1').removeClass('active');
      $('#player2').removeClass('active');
      $('#player2').removeClass('computer');
      $('#start').show();
      $('#tie').removeClass('screen-win-tie');
      $("#finish1").removeClass('screen-win-one');
      $("#finish2").removeClass('screen-win-two');
          $(window).on('load', function(){
              $('#start').show();
          });
        };

  initGame();
    check1 = 0;
    check = 0;
    counter = 0;
    playerO = "";
    playerX = "";
    $('#start').show(); // i show the start screent
    $('.buttonStart').click(function(){ //when the user click in the botton the star,
        playerO = prompt("Player 1 - please enter your name");// the program asking the names
        playerX = prompt("Player 2 - please enter your name or if you want a computer challenger write computer");
        while (playerO === "" ||  playerO  === null){ //if the user not complete the field or put cancel....the message apper again and again..
          playerO = prompt("Player 1 - please enter your name");
        }
        while (playerX  === "" ||  playerX  === null){
          playerX = prompt("Player 2 - please enter your name or if you want a computer challenger write computer");
        }
          if (playerX === "computer"){ //if the user choose the computer mode
              $('#player2'). addClass('computer'); //i put the class
              if (check === 0){  //and advice about the dondition for play alone,
                alert('When the computers first turn is active you need to click on the board!!');
                check = 1;
              }
            }
          $('.playerName1').append(playerO);  // i add the values of the name in the final screen...
          $('.playerName2').append(playerX);
          $('#start').hide(); //i hide the show and put the board
          $('.board').show();
          var init1 = Math.floor(Math.random() * 20) + 1; //the program run the equation for decide how know is first...
          var init2 = Math.floor(Math.random() * 20) + 1;
          if (init1 > init2){ // dependes how have the most high number begin.
            $('#player1').addClass('active');
          }else {
            $('#player2').addClass('active');
          }
        });

    $(".boxes").mouseover(function() { //when the user put the mouse over the boxes the image of the playect active is showed in the board
        if(!$(event.target).is(".box-filled-1, .box-filled-2")){
            if ($("#player1").hasClass('active')){
                $(event.target).css('background-image', "url(img/o.svg)");
            } else if ($("#player2").hasClass('active')){
                $(event.target).css('background-image', "url(img/x.svg)");
            }
        $(this).mouseout(function(e) {
            $(event.target).css('background-image', '');
        });
      }
    });

  $('.boxes li').click(function(e) { // whe the player clicked in the board depends how is active the image is writed
    target = e.target; //target is the event target
   if($(target).hasClass('box-filled-1') || $(target).hasClass('box-filled-2')) { //if the target is filled nothing happen
    } else {
      if ( $('#player1' ).hasClass("active") ) { // if the target is empty and the player1 is active, the program add the the style and remove the class...
                $(target).addClass('box-filled-1');
                $('#player1').removeClass('active');
                counter += 1;
                if ( $('#player2' ).hasClass("computer") ) { // if the computer mode is on...
                        if(counter === 9 || $('#finish1').hasClass('screen-win-one')){ //this counter is for finish the math random when the player one is win, and solve the eternal loop
                        }else{
                         c = Math.floor(Math.random() * $('.boxes li').length); //random number
                         while ($('.boxes li').eq(c).hasClass('box-filled-1') || $('.boxes li').eq(c).hasClass('box-filled-2')){
                         c = Math.floor(Math.random() * $('.boxes li').length); ///if the box with this number is filled the randome run again
                        }
                         $('.boxes li').eq(c).addClass('box-filled-2'); // the box is filled and remove class and add class because change the turn...
                         $('#player2').removeClass('active');
                         $('#player1').addClass('active');
                         counter += 1;
                       }
                      }
                      $('#player2').addClass('active'); // and the turn change..
                    } else if( $('#player2' ).hasClass("active") ) {//if the player2 is active
                          if ($('#player2' ).hasClass("computer")){ //i explain what is necessary for run the decision of the computer..
                            if(counter === 9 || $('#finish1').hasClass('screen-win-one')){ //this counter is for finish the math random when the player one is win, and solve the eternal loop
                            }else {  c = Math.floor(Math.random() * $('.boxes li').length); //random number
                              while ($('.boxes li').eq(c).hasClass('box-filled-1') || $('.boxes li').eq(c).hasClass('box-filled-2')){
                                c = Math.floor(Math.random() * $('.boxes li').length); ///if the box with this number is filled the random run again
                              }
                              $('.boxes li').eq(c).addClass('box-filled-2'); // the box is filled and remove class and add class because change the turn...
                              $('#player2').removeClass('active');
                              $('#player1').addClass('active');
                              counter += 1;
                            }
                          }
                      else {
                                   $(target).addClass('box-filled-2'); //if the computer is not active you run the normal playing tha player use the target!
                                   $('#player2').removeClass('active');
                                   $('#player1').addClass('active');
                                   counter += 1;
                                  }
                                }
                              }

  modulate = function(x1 ,x2 ,x3) { /// whit this patterns the program check the diferrent resolution of the game///
        module1 = {
            pattern1 : $('.boxes li').eq(x1).hasClass("box-filled-1"),
            pattern2 : $('.boxes li').eq(x2).hasClass("box-filled-1"),
            pattern3 : $('.boxes li').eq(x3).hasClass("box-filled-1"),
            pattern4 : $('.boxes li').eq(x1).hasClass("box-filled-2"),
            pattern5 : $('.boxes li').eq(x2).hasClass("box-filled-2"),
            pattern6 : $('.boxes li').eq(x3).hasClass("box-filled-2")
        };
      };

  checking = function() { // the program compare the properties of the objects if all is true in the module1 player1 is win...
          if (JSON.stringify(module1.pattern1) === "true" && JSON.stringify(module1.pattern2) === "true" && JSON.stringify(module1.pattern3) === "true" ){
                  if ($('#finish1').hasClass('screen-win-two')){

                  }else {
                    $('#finish1').addClass('screen-win-one');
                    $('#finish1').show(); // the program show the final screen
                    if(check1 ===  0){
                    $('.message').append(playerO  + ' WINNER'); // with the name of the player1
                    check1 = 1;
                    }
                     counter = 0; // and reset the couter of tie games
                     check1 = 0;
                     $('#finish1 .button').click(function(){
                       initGame(); // the program call the function play again
                     });   // the program compare the properties of the objects if all is true in the module1 player1 is win...
                   }
                 } else if (JSON.stringify(module1.pattern4) === "true" && JSON.stringify(module1.pattern5) === "true" && JSON.stringify(module1.pattern6) === "true" ){
                      if ($('#finish1').hasClass('screen-win-one')){
                      }
                      else {
                        if (playerX === computer){/// if the player2 is computer and the patters correct
                          $('#finish2').addClass('screen-win-two');
                          $('#finish2').show();// the program show the final screen..
                          if(check1 ===  0){
                                $('.message').append(playerX + ' WINNER');
                                check1 = 1;
                                }
                                $('#finish2 .button').click(function(){
                                counter = 0;
                                initGame();
                               });
                             } else {// but isnt the computer mode on. the program show the other final screen for player2
                          if(check1 === 0){
                          $('.message').append(playerX + ' WINNER');
                          check1 = 1;
                          }
                          $('#finish2').addClass('screen-win-two');
                          $('#finish2').show();
                          counter = 0;
                          check1 = 0;
                            $('#finish2 .button').click(function(){
                              initGame();
                              });
                            }
                          }
                      }
                 else {  //if any happen in the other conditionals. and the gamers filled  the board is the tie, and program show the screen tie
                  if (counter === 9 ){
                    $('#tie').addClass('screen-win-tie');
                     $('#tie').show();
                     $('#tie .message').append("It's a Tie");
                     counter = 0;
                     $('#tie .button').click(function(){
                       initGame();
                      });
                     }
                  }
                };
                                          ///te program run al this function who have the values necessary for win,
                                        //when one of this is the same of the box filled for one player he win
                    modulate(0,1,2);
                    checking();
                    modulate(0,3,6);
                    checking();
                    modulate(4,0,8);
                    checking();
                    modulate(4,1,7);
                    checking();
                    modulate(5,2,8);
                    checking();
                    modulate(4,2,6);
                    checking();
                    modulate(4,3,5);
                    checking();
                    modulate(6,7,8);
                    checking();

          });
    }();
