/* Authors: Ali Villegas, 
*  Alister Estrada, 
*  Ana Guerrero
*  21/04/2017
*/

if(store.get("totalUsers") == null)
    {
                    store.set("totalUsers", 0);
                    store.set('currentUser', null);
    }
var currentDate = new Date();
var currentPassword = "";
var currentUsername = "";
var currentPets= 0; 
var currentDispenser= 0;
var currentColor= "";
var tempDispenserVal = 0;
var currentDispenserValue= 0;
var currentTotalPets = 0; 
var currentPetName = [];
var currentPetWeight = [];
var currentPetAge = [];
var currentAnimal = [];
var currentDailyFood = [];
var currentPetExistance = [];
var currentPetSchedule = [];
var currentPetLimit = [];
var currentPetLastFed = [];
var currentTimeSinceFed = [];

if(store.get('dailyFood') == null)
    {
       var dailyFood = 0; 
    }
if(store.get('totalpets') == null)
    {
        store.set('totalpets',0);
    }
if(store.get('currentPets') == null)
    {
        store.set('currentPets',0);
    }
if(store.get('currentUser') != null)
{
    switch(store.get("user-" + store.get('currentUser')).themeColor)
        {
     case "color1":
         {  
            store.set('interfacecolorRGB','orange');
            $('.petListBox').css("border-color","orange");
            $('#addPet').css("border-color","orange");
            $('.refilledButton').css("border-color","orange");
            $('#feed').css("border-color","orange");
            $('#username').css("background-color","orange");
            $('#password').css("background-color","orange");
            $('#petName').css("background-color","orange");
            $('#petAge').css("background-color","orange");
            $('#petWeight').css("background-color","orange");
            $('#lastFed').css("color","orange");
             $('#feedHistory li').css("border-bottom-color","orange");
         }
         break;
     case "color2":
         {
            store.set('interfacecolorRGB','cornflowerblue');
            $('.petListBox').css("border-color","cornflowerblue");
            $('#addPet').css("border-color","cornflowerblue");
            $('.refilledButton').css("border-color","cornflowerblue");
            $('#feed').css("border-color","cornflowerblue");
            $('#username').css("background-color","cornflowerblue");
            $('#password').css("background-color","cornflowerblue");
             $('#petName').css("background-color","cornflowerblue");
            $('#petAge').css("background-color","cornflowerblue");
            $('#petWeight').css("background-color","cornflowerblue");
            $('#lastFed').css("color","cornflowerblue");
             $('#feedHistory li').css("border-bottom-color","cornflowerblue");

         }
         break;
     case "color3":
         {
            store.set('interfacecolorRGB','darkred');
            $('.petListBox').css("border-color","darkred");
            $('#addPet').css("border-color","darkred");
            $('.refilledButton').css("border-color","darkred");
            $('#feed').css("border-color","darkred");
            $('#username').css("background-color","darkred");
            $('#password').css("background-color","darkred");
             $('#petName').css("background-color","darkred");
            $('#petAge').css("background-color","darkred");
            $('#petWeight').css("background-color","darkred");
             $('#lastFed').css("color","darkred");
             $('#feedHistory li').css("border-bottom-color","darkred");
         }
         break;
     case "color4":
         {
            store.set('interfacecolorRGB','green');
            $('.petListBox').css("border-color","green");
            $('#addPet').css("border-color","green");
            $('.refilledButton').css("border-color","green");
            $('#feed').css("border-color","green");
             $('#username').css("background-color","green");
            $('#password').css("background-color","green");
             $('#petName').css("background-color","green");
            $('#petAge').css("background-color","green");
            $('#petWeight').css("background-color","green");
             $('#lastFed').css("color","green");
             $('#feedHistory li').css("border-bottom-color","green");
         }
         break;
     case "color5":
         {
            store.set('interfacecolorRGB','mediumpurple');
            $('.petListBox').css("border-color","mediumpurple");
            $('#addPet').css("border-color","mediumpurple");
            $('.refilledButton').css("border-color","mediumpurple");
            $('#feed').css("border-color","mediumpurple");
             $('#username').css("background-color","mediumpurple");
            $('#password').css("background-color","mediumpurple");
             $('#petName').css("background-color","mediumpurple");
            $('#petAge').css("background-color","mediumpurple");
            $('#petWeight').css("background-color","mediumpurple");
             $('#lastFed').css("color","mediumpurple");
             $('#feedHistory li').css("border-bottom-color","mediumpurple");
         }
         break;
    } 
}
            // SLIDE 1 LOGIN *****************************
            $('.nextButton, .signIn').on('click', function(){
                $('#myPetList').html("");
                 var username = $("#username").val();
                 var password = $("#password").val();
                 var validation = false;
                 var userExists = false;
                $('#myPetList').html("");
                for(var x = 1; validation == false && x<= store.get('totalUsers'); x++)
                    {
                         currentPetName.length = 0;
                         currentPetWeight.length = 0;
                         currentPetAge.length = 0;
                         currentAnimal.length = 0;
                         currentPetExistance.length = 0;
                         currentPetSchedule.length = 0;
                         currentDailyFood.length = 0;
                         currentPetLimit.length = 0;
                         currentPetLastFed.length = 0;
                        if(username == store.get("user-"+x).username)
                        {
                            userExists = true;
                            if((username == store.get("user-" +x).username) && (password == store.get("user-"+x).password) )
                            {
                                store.set('currentUser',x);
                                currentTotalPets = store.get('totalpets');
                                currentPassword = store.get("user-"+x).password;
                                currentUsername = store.get("user-"+x).username;
                                currentPets = store.get("user-"+store.get("currentUser")).pets;
                                store.set('currentPets',store.get("user-"+store.get("currentUser")).pets);
                                currentDispenser = store.get("user-"+store.get("currentUser")).dispenser;
                                currentDispenserValue = store.get("user-"+store.get("currentUser")).dispenserValue;
                                currentColor = store.get("user-"+store.get("currentUser")).themeColor;  
                                if(store.get("dailyFood") == null)
                                {
                                        store.set("dailyFood", 0);
                                }   
                                dailyFood = store.get('dailyFood');
                                    
                                if((store.get('currentPets') > 0))
                                    {
                                        for(var x = 1; x <= currentTotalPets; x++)
                                            {
                                                
                                              currentPetName.push(store.get("pet-" + x).name); 
                                              currentPetWeight.push(store.get("pet-" + x).weight);
                                              currentPetAge.push(store.get("pet-" + x).age);
                                              currentAnimal.push(store.get("pet-" + x).animal);
                                              currentPetExistance.push(store.get("pet-" + x).exists);
                                              currentPetSchedule.push(store.get("pet-" + x).scheduleData);
                                              currentDailyFood.push(store.get("pet-" + x).dailyFood);
                                              currentPetLimit.push(store.get("pet-" + x).limit);
                                              currentPetLastFed.push(store.get("pet-" + x).lastFed);
                                              currentTimeSinceFed.push(store.get("pet-" + x).timeSinceFed);
                                              JSON.stringify(currentPetName);
                                              JSON.stringify(currentPetWeight);
                                              JSON.stringify(currentPetAge);
                                              JSON.stringify(currentAnimal);
                                              JSON.stringify(currentPetExistance);
                                              JSON.stringify(currentPetSchedule);
                                              JSON.stringify(currentDailyFood);
                                              JSON.stringify(currentPetLimit);
                                              JSON.stringify(currentTimeSinceFed);
                                                
                                            } 
                                    }
                                $('#loginAlert').hide(500);
                                $('.nextButton').css({'background-image':'url(img/Icons/ic_radio_button_checked_black_24dp_2x.png)'});
                                
                                setTimeout(function() {
                                    
                                    $('#slide1').hide();
                                    $('#slide2').fadeIn(1000); 
                                }, 1000);
                                $('.petListBox').animate({opacity: 1},200);
                                validation = true;
                                
                            }
                            else if((username != store.get("user-" +x).username) || (password != store.get("user-"+x).password) )
                            {
                                $('#loginAlert').fadeOut(100).fadeIn(500);
                            }
                        } 
                    }
                for(var x = 1; x <=store.get('totalpets');x++)
                {
                    if((store.get("pet-" +x).user == store.get("currentUser")) && (store.get("pet-" +x).exists == true))
                    {
                            
                        $(
                            '<div class="petListBox" id="' + 'pet-'+ x +'">' +
                            '<div class="petBoxImg" id="'+ store.get("pet-" +x).animal +'"></div>' +
                            '<div class="petBoxName">' + store.get("pet-" +x).name + '</div>'  +
                            '</div>').appendTo($('#myPetList'));
                    }
                }
                if(userExists!=true)
                    {
                        $('#loginAlert').fadeOut(100).fadeIn(500);
                    }
                
                    if(store.get('currentUser') != null)
                    {
                           switch(store.get("user-" + store.get('currentUser')).themeColor)
                        {
                     case "color1":
                         {  
                            store.set('interfacecolorRGB','orange');
                            $('.petListBox').css("border-color","orange");
                            $('#addPet').css("border-color","orange");
                            $('.refilledButton').css("border-color","orange");
                            $('#feed').css("border-color","orange");
                            $('#username').css("background-color","orange");
                            $('#password').css("background-color","orange");
                            $('#petName').css("background-color","orange");
                            $('#petAge').css("background-color","orange");
                            $('#petWeight').css("background-color","orange");
                            $('#lastFed').css("color","orange");
                             $('#feedHistory li').css("border-bottom-color","orange");
                         }
                         break;
                     case "color2":
                         {
                            store.set('interfacecolorRGB','cornflowerblue');
                            $('.petListBox').css("border-color","cornflowerblue");
                            $('#addPet').css("border-color","cornflowerblue");
                            $('.refilledButton').css("border-color","cornflowerblue");
                            $('#feed').css("border-color","cornflowerblue");
                            $('#username').css("background-color","cornflowerblue");
                            $('#password').css("background-color","cornflowerblue");
                             $('#petName').css("background-color","cornflowerblue");
                            $('#petAge').css("background-color","cornflowerblue");
                            $('#petWeight').css("background-color","cornflowerblue");
                            $('#lastFed').css("color","cornflowerblue");
                             $('#feedHistory li').css("border-bottom-color","cornflowerblue");

                         }
                         break;
                     case "color3":
                         {
                            store.set('interfacecolorRGB','darkred');
                            $('.petListBox').css("border-color","darkred");
                            $('#addPet').css("border-color","darkred");
                            $('.refilledButton').css("border-color","darkred");
                            $('#feed').css("border-color","darkred");
                            $('#username').css("background-color","darkred");
                            $('#password').css("background-color","darkred");
                             $('#petName').css("background-color","darkred");
                            $('#petAge').css("background-color","darkred");
                            $('#petWeight').css("background-color","darkred");
                             $('#lastFed').css("color","darkred");
                             $('#feedHistory li').css("border-bottom-color","darkred");
                         }
                         break;
                     case "color4":
                         {
                            store.set('interfacecolorRGB','green');
                            $('.petListBox').css("border-color","green");
                            $('#addPet').css("border-color","green");
                            $('.refilledButton').css("border-color","green");
                            $('#feed').css("border-color","green");
                             $('#username').css("background-color","green");
                            $('#password').css("background-color","green");
                             $('#petName').css("background-color","green");
                            $('#petAge').css("background-color","green");
                            $('#petWeight').css("background-color","green");
                             $('#lastFed').css("color","green");
                             $('#feedHistory li').css("border-bottom-color","green");
                         }
                         break;
                     case "color5":
                         {
                            store.set('interfacecolorRGB','mediumpurple');
                            $('.petListBox').css("border-color","mediumpurple");
                            $('#addPet').css("border-color","mediumpurple");
                            $('.refilledButton').css("border-color","mediumpurple");
                            $('#feed').css("border-color","mediumpurple");
                             $('#username').css("background-color","mediumpurple");
                            $('#password').css("background-color","mediumpurple");
                             $('#petName').css("background-color","mediumpurple");
                            $('#petAge').css("background-color","mediumpurple");
                            $('#petWeight').css("background-color","mediumpurple");
                             $('#lastFed').css("color","mediumpurple");
                             $('#feedHistory li').css("border-bottom-color","mediumpurple");
                         }
                         break;
                    } 
        }
                if(username == "" || password =="")
                    {
                        $('#loginAlert').fadeOut(100).fadeIn(500);
                    }
                switch(currentDispenser)
                    {
                        case "dispenserIconS":
                                tempDispenserVal = 4000;
                            break;
                        case "dispenserIconM":
                                tempDispenserVal = 6000;
                            break;
                        case "dispenserIconL":
                                tempDispenserVal = 8000;
                            break;
                    }
                var calDispenserPecentage = currentDispenserValue*100;
                calDispenserPecentage = calDispenserPecentage/tempDispenserVal;
                
                if(calDispenserPecentage > 50)
                    {
                        $('.dispenserStatusColor').css("background-color","green");
                        $('#dispenserSMessage').html("full");
                        $('.refilledButton').hide();
                    }
                else if(calDispenserPecentage < 50 && calDispenserPecentage > 25 )
                    {
                        $('.dispenserStatusColor').css("background-color","yellow");
                        $('#dispenserSMessage').html("Halfway down");
                        $('.refilledButton').hide();
                    }
                else if(calDispenserPecentage <= 25)
                    {
                        $('.dispenserStatusColor').css("background-color","red");
                        $('#dispenserSMessage').html("Almost empty");
                        $('.refilledButton').show();
                    }
            });
            
            // SLIDE 1 LOGIN *****************************

            // SLIDE 2 MAIN SCREEN ***********************
             var selectedPet = 0;
            $('#addPetImg').on('click', function(){
                 
                
                setTimeout(function() {
                    $('#slide2').hide();
                    $('#slide3').fadeIn(800);
                    $('.petSelectImg').css("border", "4px solid white");
                    selectedPet = 0; 
                }, 200);
                window.scrollTo(0,0);

            });
            $('#settingsIcon').on('click', function(){

                    setTimeout(function() {
                        $('#slide2').hide();
                        $('#slide6').fadeIn(800);
                    }, 200);
                    window.scrollTo(0,0);

            });
            $('.refilledButton').on('click', function(){
                
                     store.set("user-" + store.get('currentUser'),{id: store.get('currentUser'), password: currentPassword,username: currentUsername,themeColor: currentColor,pets: store.get("user-" + store.get('currentUser')).pets + 1,dispenser:currentDispenser,dispenserValue: tempDispenserVal}); 
                    var calDispenserPecentage = store.get('user-'+ store.get('currentUser')).dispenserValue *100;
                    calDispenserPecentage = calDispenserPecentage/tempDispenserVal;

                     if(calDispenserPecentage > 50)
                        {
                            $('.dispenserStatusColor').css("background-color","green");
                            $('#dispenserSMessage').html("full");
                            $('.refilledButton').hide();
                        }
                    else if(calDispenserPecentage < 50 && calDispenserPecentage > 25 )
                        {
                            $('.dispenserStatusColor').css("background-color","yellow");
                            $('#dispenserSMessage').html("Halfway down");
                            $('.refilledButton').hide();
                        }
                    else if(calDispenserPecentage <= 25)
                        {
                            $('.dispenserStatusColor').css("background-color","red");
                            $('#dispenserSMessage').html("Almost empty");
                            $('.refilledButton').show();
                        }

                });
            
            /*$('#feedIcon').on('click', function(){

                    setTimeout(function() {
                        $('#slide2').hide();
                        $('#slide7').fadeIn(800);
                    }, 200);
                    window.scrollTo(0,0);

            });*/

            // SLIDE 2 MAIN SCREEN ***********************
            
            // SLIDE 3 Add Pet ***************************
            
            $('#return1').on('click', function(){
                 
                
                setTimeout(function() {
                    $('#slide3').hide();
                    $('#slide2').fadeIn(800);      
                }, 200);
                $('.petListBox').animate({opacity: 1},200);
                window.scrollTo(0,0);

            });
            
            // SLIDE 3 Add Pet ***************************
            var animalIcon = "DogIcon";
            $('.petSelectImg').on('click', function(){
                animalIcon = $(this).attr("id");
                $('.petSelectImg').css("border", "4px solid white");
                $(this).css("border", "4px solid");
                $(this).css("border-color", store.get('interfacecolorRGB'));
                selectedPet = 1; 
                $('#nextSlide3').css("background-color","green");

            });
            $('#nextSlide3').on('click', function(){
                if(selectedPet == 1)
                {
                        setTimeout(function() {
                        $('#slide3').hide();
                            $('#nextSlide5').css("background-color","dodgerblue");
                            $('#petName').val("");
                            $('#petWeight').val("");
                            $('#petAge').val("");
                        $('#slide4').fadeIn(800); 
                            
                    }, 200);
                    window.scrollTo(0,0);
                }
                else
                {
                    $('#nextSlide3').css("background-color","red").fadeOut(100).fadeIn(100);    
                }
            });
            
            // SLIDE 3 Add Pet ***************************
            
            // SLIDE 4 Pet Creation Profile***************
            $('#return2').on('click', function(){
                 
                
                setTimeout(function() {
                    $('#slide4').hide();
                    $('.petSelectImg').css("border", "4px solid white");
                    $('#nextSlide5').css("background-color","dodgerblue");
                    selectedPet = 0;
                    $('#slide3').fadeIn(800);      
                }, 200);
                window.scrollTo(0,0);

            });

            var petName = null;
            var petWeight = null;
            var petAge = null;
            var totPets = 0;
            var totPetsString = "";
            var createdProfileIsValid = false;
            $('#nextSlide4').on('click', function(){
                petName = $('#petName').val();
                petWeight = $('#petWeight').val();
                petAge = $('#petAge').val();
                
                if((petName != "" && petWeight != "" && petAge != "" ))
                    {
                         currentPetName.length = 0;
                         currentPetWeight.length = 0;
                         currentPetAge.length = 0;
                         currentAnimal.length = 0;
                         currentPetExistance.length = 0;
                         currentPetSchedule.length = 0;
                         currentDailyFood.length = 0;
                         currentPetLimit.length = 0;
                         currentPetLastFed.length = 0;
                        var currentMaxPets = store.get('totalpets');
                        store.set('totalpets',currentMaxPets + 1);
                        totPets = currentMaxPets + 1;
                        totPetsString = "pet-" + totPets;
                        $('#nextSlide4').css("background-color","green");
                        $('#petDetailsAlert').fadeOut(500);
                        store.set('currentPets', store.get("user-" + store.get('currentUser')).pets + 1);
                        
                        store.set("pet-" + store.get('totalpets'),{user:store.get('currentUser'),name:petName,weight:petWeight,age:petAge,animal:animalIcon,dailyFood: 0, scheduleData: "", exists: true, limit:false,lastFed:"",timeSinceFed:0});
                        
                        for(var x = 1; x <= totPets; x++)
                        {

                          currentPetName.push(store.get("pet-" + x).name); 
                          currentPetWeight.push(store.get("pet-" + x).weight);
                          currentPetAge.push(store.get("pet-" + x).age);
                          currentAnimal.push(store.get("pet-" + x).animal);
                          currentPetExistance.push(store.get("pet-" + x).exists);
                          currentPetSchedule.push(store.get("pet-" + x).scheduleData);
                          currentDailyFood.push(store.get("pet-" + x).dailyFood);
                          currentPetLimit.push(store.get("pet-" + x).limit);
                          currentPetLastFed.push(store.get("pet-" + x).lastFed);
                          currentTimeSinceFed.push(store.get("pet-" + x).timeSinceFed);
                          JSON.stringify(currentPetName);
                          JSON.stringify(currentPetWeight);
                          JSON.stringify(currentPetAge);
                          JSON.stringify(currentAnimal);
                          JSON.stringify(currentPetExistance);
                          JSON.stringify(currentPetSchedule);
                          JSON.stringify(currentDailyFood);
                          JSON.stringify(currentPetLimit);
                          JSON.stringify(currentPetLastFed);
                          JSON.stringify(currentTimeSinceFed);

                        } 
                        
                        store.set("user-" + store.get('currentUser'),{id: store.get('currentUser'), password: currentPassword,username: currentUsername,themeColor: currentColor,pets: store.get("user-" + store.get('currentUser')).pets + 1,dispenser:currentDispenser,dispenserValue: store.get("user-" + store.get('currentUser')).dispenserValue}); 
                        createdProfileIsValid = true;
                        setTimeout(function() {
                        $('#slide4').hide();
                        $('#slide2').fadeIn(800);      
                            }, 200);
                        $('.petListBox').animate({opacity: 1},200);
                        window.scrollTo(0,0);
                        
                        $(
                        '<div class="petListBox" id="' + totPetsString +'">' +
                        '<div class="petBoxImg" id="'+ animalIcon +'"></div>' +
                        '<div class="petBoxName">' + petName + '</div>'  +
                        '</div>').appendTo($('#myPetList'));  
                            switch(store.get("user-" + store.get('currentUser')).themeColor)
                                {
                             case "color1":
                                 {  
                                    store.set('interfacecolorRGB','orange');
                                    $('.petListBox').css("border-color","orange");
                                    $('#addPet').css("border-color","orange");
                                    $('.refilledButton').css("border-color","orange");
                                    $('#feed').css("border-color","orange");
                                    $('#username').css("background-color","orange");
                                    $('#password').css("background-color","orange");
                                    $('#petName').css("background-color","orange");
                                    $('#petAge').css("background-color","orange");
                                    $('#petWeight').css("background-color","orange");
                                    $('#lastFed').css("color","orange");
                                     $('#feedHistory li').css("border-bottom-color","orange");
                                 }
                                 break;
                             case "color2":
                                 {
                                    store.set('interfacecolorRGB','cornflowerblue');
                                    $('.petListBox').css("border-color","cornflowerblue");
                                    $('#addPet').css("border-color","cornflowerblue");
                                    $('.refilledButton').css("border-color","cornflowerblue");
                                    $('#feed').css("border-color","cornflowerblue");
                                    $('#username').css("background-color","cornflowerblue");
                                    $('#password').css("background-color","cornflowerblue");
                                     $('#petName').css("background-color","cornflowerblue");
                                    $('#petAge').css("background-color","cornflowerblue");
                                    $('#petWeight').css("background-color","cornflowerblue");
                                    $('#lastFed').css("color","cornflowerblue");
                                     $('#feedHistory li').css("border-bottom-color","cornflowerblue");

                                 }
                                 break;
                             case "color3":
                                 {
                                    store.set('interfacecolorRGB','darkred');
                                    $('.petListBox').css("border-color","darkred");
                                    $('#addPet').css("border-color","darkred");
                                    $('.refilledButton').css("border-color","darkred");
                                    $('#feed').css("border-color","darkred");
                                    $('#username').css("background-color","darkred");
                                    $('#password').css("background-color","darkred");
                                     $('#petName').css("background-color","darkred");
                                    $('#petAge').css("background-color","darkred");
                                    $('#petWeight').css("background-color","darkred");
                                     $('#lastFed').css("color","darkred");
                                     $('#feedHistory li').css("border-bottom-color","darkred");
                                 }
                                 break;
                             case "color4":
                                 {
                                    store.set('interfacecolorRGB','green');
                                    $('.petListBox').css("border-color","green");
                                    $('#addPet').css("border-color","green");
                                    $('.refilledButton').css("border-color","green");
                                    $('#feed').css("border-color","green");
                                     $('#username').css("background-color","green");
                                    $('#password').css("background-color","green");
                                     $('#petName').css("background-color","green");
                                    $('#petAge').css("background-color","green");
                                    $('#petWeight').css("background-color","green");
                                     $('#lastFed').css("color","green");
                                     $('#feedHistory li').css("border-bottom-color","green");
                                 }
                                 break;
                             case "color5":
                                 {
                                    store.set('interfacecolorRGB','mediumpurple');
                                    $('.petListBox').css("border-color","mediumpurple");
                                    $('#addPet').css("border-color","mediumpurple");
                                    $('.refilledButton').css("border-color","mediumpurple");
                                    $('#feed').css("border-color","mediumpurple");
                                     $('#username').css("background-color","mediumpurple");
                                    $('#password').css("background-color","mediumpurple");
                                     $('#petName').css("background-color","mediumpurple");
                                    $('#petAge').css("background-color","mediumpurple");
                                    $('#petWeight').css("background-color","mediumpurple");
                                     $('#lastFed').css("color","mediumpurple");
                                     $('#feedHistory li').css("border-bottom-color","mediumpurple");
                                 }
                                 break;
                            } 
                    }
                else
                    {   
                        $('#petDetailsAlert').fadeIn(500);
                        $('#nextSlide4').css("background-color","red");
                    }
            

            });
            // SLIDE 4 Pet Creation Profile***************
            
            // SLIDE 5 User Profile***********************
            
            
            $('#noProfile').on('click', function(){
                
                setTimeout(function() {
                    $('#slide1').hide();
                    $('#slide5').fadeIn(800);   
                    $('#nextSlide5').css("background-color","green");
                    $('#slide5 input').val("");
                }, 200);
                window.scrollTo(0,0);

            });
            $('#return3').on('click', function(){
                setTimeout(function() {
                    $('#slide5').hide();
                    $('#loginAlert').hide();
                    $('#slide1').fadeIn(800);      
                }, 200);
                window.scrollTo(0,0);

            });
            
            var dispenser = "dispenserIconS";
            var dispenserNum = 4000;
            $('.dispenserSelect').on('click', function(){
                
                $('.dispenserSelect').css("border", "4px solid white");
                $(this).css("border", "4px solid green");
                dispenser = $(this).attr('id');
                switch(dispenser)
                    {
                        case "dispenserIconS":
                            
                            dispenserNum = 4000;
                            
                        break;
                            
                        case "dispenserIconM":
                            
                            dispenserNum = 6000;
                            
                        break;
                            
                        case "dispenserIconL":
                            
                            dispenserNum = 8000;
                            
                        break;
                    }
                
            });
            $('#nextSlide5').on('click', function(){
                var alreadyExists = false;
                userProfile = $('#userProfileName').val();
                userMail = $('#userMail').val();
                userPassword = $('#userPassWord').val();
                for(var x = 1; x <= store.get("totalUsers");x++ )
                    {
                        if(store.get("user-" + x).username == userProfile )
                            {
                                alreadyExists = true; 
                                $('#createProfileAlert').html("User taken");
                            }
                    }
                if((userProfile == "" || userMail == "" || userPassword == ""))
                {
                    $('#nextSlide5').css("background-color","red").fadeOut(100).fadeIn(100);
                    $('#createProfileAlert').html("*Fill each box");
                    $('#createProfileAlert').fadeIn(500);
                }
                if((userProfile != "" && userMail != "" && userPassword != "") && alreadyExists == false )
                    {
                       
                        var numberOfUsers = store.get("totalUsers");
                            numberOfUsers++;
                            store.set("totalUsers", numberOfUsers); 
                            store.set("user-" + numberOfUsers,{id: numberOfUsers, password: userPassword,username: userProfile,themeColor:"color1",pets:0,dispenser:dispenser,dispenserValue: dispenserNum});  
                       $('#nextSlide5').css("background-color","green").fadeOut(500).fadeIn(500);
                        setTimeout(function() {
                            $('#slide5').hide();    
                            $('#loginAlert').hide();
                            $('#slide1 input').val("");
                            $('#slide1').fadeIn(800); 
                            
                            
                        },1200);
                        
                    }
                else if((userProfile != "" && userMail != "" && userPassword != "") && alreadyExists == true )
                {
                    $('#createProfileAlert').html("User taken");
                    $('#nextSlide5').css("background-color","red").fadeOut(100).fadeIn(100);
                    $('#createProfileAlert').fadeIn(500);
                    
                }
            });
            // SLIDE 5 User Profile***********************


            // SLIDE 6 Settings Profile*******************
            $('#return4').on('click', function(){
                
                    setTimeout(function() {
                        $('#slide6').hide();
                        $('#slide2').fadeIn(800);      
                        
                    }, 200);
                $('.petListBox').animate({opacity: 1},200);
                    window.scrollTo(0,0);

            });
            $('#signOut').on('click', function(){
                
                    setTimeout(function() {
                         window.location.reload();
                    }, 200);

            });
                                                 
            $('.color').on('click', function(){
                $('.color').css("border","4px solid white")
                $(this).css("border","4px solid black");
                store.set("user-" + store.get('currentUser'),{id: store.get('currentUser'), password: currentPassword,username: currentUsername,themeColor:$(this).attr('id'),pets: store.get('currentPets'), dispenser: currentDispenser, dispenserValue: currentDispenserValue});
                if($(this).attr('id') == "color2")
                {
                    store.set('interfacecolor','color2');
                store.set('interfacecolorRGB','cornflowerblue');
                    $('.petListBox').css("border-color","cornflowerblue");
                    $('#addPet').css("border-color","cornflowerblue");
                    $('.refilledButton').css("border-color","cornflowerblue");
                    $('#feed').css("border-color","cornflowerblue");
                    $('#petName').css("background-color","cornflowerblue");
                    $('#petAge').css("background-color","cornflowerblue");
                    $('#petWeight').css("background-color","cornflowerblue");
                    $('#lastFed').css("color","cornflowerblue");
                    $('#feedHistory li').css("border-bottom-color","cornflowerblue");
                    currentColor = "color2"
                    }
                else if($(this).attr('id') == 'color3')
                {
                    store.set('interfacecolor','color3');
                store.set('interfacecolorRGB','darkred');
                    $('.petListBox').css("border-color","darkred");
                    $('#addPet').css("border-color","darkred");
                    $('.refilledButton').css("border-color","darkred");
                    $('#feed').css("border-color","darkred");
                    $('#petName').css("background-color","darkred");
                    $('#petAge').css("background-color","darkred");
                    $('#petWeight').css("background-color","darkred");
                    $('#lastFed').css("color","darkred");
                    $('#feedHistory li').css("border-bottom-color","darkred");
                    currentColor = "color3";
                    
                }
                else if($(this).attr('id') == "color4")
                {
                    store.set('interfacecolor','color4');
                    store.set('interfacecolorRGB','green');
                    $('.petListBox').css("border-color","green");
                    $('#addPet').css("border-color","green");
                    $('.refilledButton').css("border-color","green");
                    $('#feed').css("border-color","green");
                    $('#petName').css("background-color","green");
                    $('#petAge').css("background-color","green");
                    $('#petWeight').css("background-color","green");
                    $('#lastFed').css("color","green");
                    $('#feedHistory li').css("border-bottom-color","green");
                    currentColor = "color4";
                }
                else if($(this).attr('id') == "color5")
                {
                    store.set('interfacecolor','color5');
                    store.set('interfacecolorRGB','mediumpurple');
                    $('.petListBox').css("border-color","mediumpurple");
                    $('#addPet').css("border-color","mediumpurple");
                    $('.refilledButton').css("border-color","mediumpurple");
                    $('#feed').css("border-color","mediumpurple");
                    $('#petName').css("background-color","mediumpurple");
                    $('#petAge').css("background-color","mediumpurple");
                    $('#petWeight').css("background-color","mediumpurple");
                    $('#lastFed').css("color","mediumpurple");
                    $('#feedHistory li').css("border-bottom-color","mediumpurple");

                    currentColor = "color5";
                }
                else if($(this).attr('id') == "color1")
                {
                    store.set('interfacecolor','color1');
                    store.set('interfacecolorRGB','orange');
                    $('.petListBox').css("border-color","orange");
                    $('#addPet').css("border-color","orange");
                    $('.refilledButton').css("border-color","orange");
                    $('#feed').css("border-color","orange");
                    $('#petName').css("background-color","orange");
                    $('#petAge').css("background-color","orange");
                    $('#petWeight').css("background-color","orange");
                    $('#lastFed').css("color","orange");
                    $('#feedHistory li').css("border-bottom-color","orange");
                    currentColor = "color1";
                    }
                
                    setTimeout(function() {
                                $('#slide6').hide();
                                $('#slide2').fadeIn(800); 
                            }, 600);
            });

            // SLIDE 6 Settings Profile*******************
            var dayOfWeek = 1; 
            var limitReached = false;
            var petID = "";
            var petIDNum = 0;
            var cm1 = 0;
            var today = "";
            var petNeedsThisAmountFood = 0.0;
            var eliminateCounter = 0;
            // SLIDE 7 Feed pet *************************
                $('#myPetList').on('click','.petListBox',function(e){
                    petID = "";
                    eliminateCounter = 0;
                    $('#eliminatePet').html("Erase Pet");
                    var temporalDate = new Date();
                    limitReached = false; 
                    $('#scheduleAlert').hide();
                    $('.alertMessage2').hide();
                    $('.petImg').attr('id',store.get($(this).attr('id')).animal);
                    $('#petDetailName').html(store.get($(this).attr('id')).name);
                    $('#petDetailAge').html("Age: " + store.get($(this).attr('id')).age + " yrs");
                    $('#petDetailWeight').html("Weight: " + store.get($(this).attr('id')).weight +" kg");
                    $(this).animate({opacity: 0.25},200);
                    petID = $(this).attr('id');
                    var petIDNumObtain = petID.split('-');
                    petIDNum = parseInt(petIDNumObtain[1]);
                    switch(temporalDate.getDay())
                        {
                            case 0:
                                
                                    today = "Sunday"
                                    
                            break;
                                
                            case 1:
                                
                                    today = "Monday"
                                    
                            break;
                                
                            case 2:
                                
                                    today = "Tuesday"
                                    
                            break;
                                
                            case 3:
                                
                                    today = "Wednesday"
                                    
                            break;
                                
                            case 4:
                                
                                    today = "Thursday"
                                    
                            break;
                            
                            case 5:
                                
                                    today = "Friday"
                                    
                            break;
                            
                            case 6:
                                
                                    today = "Saturday"
                                    
                            break;
                     }
                    
                    /* give html values */
                    cm1 = (petIDNum -1);
                    if(store.get(petID).timeSinceFed == 6 && temporalDate.getDay() == 0)
                        {
                            store.set(petID,{user:store.get('currentUser'),name:currentPetName[cm1],weight:currentPetWeight[cm1],age:currentPetAge[cm1],animal:currentAnimal[cm1],dailyFood: 0,scheduleData:"",exists:currentPetExistance[cm1],limit: false,lastFed:"",timeSinceFed:temporalDate.getDay() - 1});
                           currentDailyFood[cm1] = 0; 
                        }
                    else if(temporalDate.getDay()  > store.get(petID).timeSinceFed)
                        {
                           store.set(petID,{user:store.get('currentUser'),name:currentPetName[cm1],weight:currentPetWeight[cm1],age:currentPetAge[cm1],animal:currentAnimal[cm1],dailyFood: 0,scheduleData:"",exists:currentPetExistance[cm1],limit: false,lastFed:"",timeSinceFed:temporalDate.getDay() - 1});
                           currentDailyFood[cm1] = 0; 
                            
                        }
                    for(var x = 1; x <= totPets; x++)
                        {

                          currentPetName.push(store.get("pet-" + x).name); 
                          currentPetWeight.push(store.get("pet-" + x).weight);
                          currentPetAge.push(store.get("pet-" + x).age);
                          currentAnimal.push(store.get("pet-" + x).animal);
                          currentPetExistance.push(store.get("pet-" + x).exists);
                          currentPetSchedule.push(store.get("pet-" + x).scheduleData);
                          currentDailyFood.push(store.get("pet-" + x).dailyFood);
                          currentPetLimit.push(store.get("pet-" + x).limit);
                          currentPetLastFed.push(store.get("pet-" + x).lastFed);
                          currentTimeSinceFed.push(store.get("pet-" + x).timeSinceFed);
                          JSON.stringify(currentPetName);
                          JSON.stringify(currentPetWeight);
                          JSON.stringify(currentPetAge);
                          JSON.stringify(currentAnimal);
                          JSON.stringify(currentPetExistance);
                          JSON.stringify(currentPetSchedule);
                          JSON.stringify(currentDailyFood);
                          JSON.stringify(currentPetLimit);
                          JSON.stringify(currentPetLastFed);
                          JSON.stringify(currentTimeSinceFed);

                        } 
                    $('#lastFed').html(store.get(petID).lastFed);
                    $('#' + today).html("");
                    $('#' + today.substr(0,2)).css("background-color","rgba(0,0,0,0.1)");
                    var splittedHoursPerDay = store.get(petID).scheduleData.split(",");
                    for(var x = 0; x < splittedHoursPerDay.length;x++)
                        {
                            $('#' + today).append("<div id='customTimes" + currentDailyFood[cm1] + "'>" + splittedHoursPerDay[x] + "</div");
                        }
                   
                    
                         
                 setTimeout(function() {
                        $('#slide2').hide();
                        $('#slide7').fadeIn(800);   
                     $('#eliminatePet').animate({opacity: 1},200);
                    }, 800);
                    window.scrollTo(0,0);
                });
                $('#feed').on('click', function(){
                        
                        petNeedsThisAmountFood = 300*0.0687*((store.get(petID).weight)*0.822);
                        var newDate = new Date();
                        var petSchedule = "";
                        dayOfWeek = 1;
                        var date = newDate.toLocaleString('en-US');
                        var date1 = date.split(",");
                        var dateDay = date1[0];
                        var dateHours = date1[1];
                        var dateMin = dateHours.substr(4,6);
                        var dateMinNum = parseInt(dateMin); /* 12:34:65  = = =  minuto 34*/ 
                    if(store.get(petID).dailyFood < 5)
                        {
                            $('#lastFed').html(dateHours);
                            store.set('lastFed', dateHours);
                        }  
                        
                    store.set('lastFedDay', newDate.getDay());
                    if(dayOfWeek == 8)
                        {
                            dayOfWeek = 1; 
                        }
                     $('#' + today.substr(0,2)).css("background-color","rgba(0,0,0,0.1)");      
                        if($('#' + today).html() == "No data for this day")
                            {
                                $('#' + today).html("");
                            }
                        if(store.get(petID).dailyFood < 5)
                            {
                                $('#' + today).append("<div id='schedule-" + currentDailyFood[cm1] + "'>" + store.get('lastFed') + "</div");
                            }
                    dailyFood++; 
                    currentDailyFood[cm1]++;
                    store.set(petID,{user:store.get('currentUser'),name:currentPetName[cm1],weight:currentPetWeight[cm1],age:currentPetAge[cm1],animal:currentAnimal[cm1],dailyFood: currentDailyFood[cm1], scheduleData: currentPetSchedule[cm1], exists: currentPetExistance[cm1],limit: currentPetLimit[cm1], lastFed: "", timeSinceFed: 0});
                
                    
                    if(store.get(petID).dailyFood == 5 || limitReached == true || store.get(petID).dailyFood  > 5)
                        {
                            
                            limitReached = true;
                        }   
                    if(limitReached == true)
                        {
                            dailyFood = 5;
                            currentDailyFood[cm1] = 5;
                            store.set(petID,{user:store.get('currentUser'),name:currentPetName[cm1],weight:currentPetWeight[cm1],age:currentPetAge[cm1],animal:currentAnimal[cm1],dailyFood:5,scheduleData:currentPetSchedule[cm1], exists:currentPetExistance[cm1],limit: true,lastFed: ""});
                            currentPetLimit[cm1] = true;
                            if(store.get(petID).limit == true)
                                {
                                    $('#scheduleAlert').fadeIn();
                                }
  
                        }
                    for(var x = 0; x < 5; x++)
                    {   
                        if($('#schedule-' + x).html() != undefined)
                        { 
                            petSchedule += $('#schedule-' + x).html() +",";
                        }
                    } 
                    
                    store.set('petSchedule', petSchedule);
                    store.set('dailyFood', dailyFood);
                    
                    store.set(petID,{user:store.get('currentUser'),name:currentPetName[cm1],weight:currentPetWeight[cm1],age:currentPetAge[cm1],animal:currentAnimal[cm1],dailyFood:currentDailyFood[cm1],scheduleData: store.get(petID).scheduleData + petSchedule, exists:currentPetExistance[cm1],limit: store.get(petID).limit,lastFed: store.get('lastFed'),timeSinceFed: newDate.getDay() });
                    
                    if((store.get('user-'+ store.get('currentUser')).dispenserValue - petNeedsThisAmountFood > 0) && store.get(petID).limit != true)
                        {
                            store.set("user-" + store.get('currentUser'),{id: store.get('currentUser'), password: currentPassword,username: currentUsername,themeColor: currentColor,pets: store.get("user-" + store.get('currentUser')).pets,dispenser:currentDispenser,dispenserValue: store.get('user-'+ store.get('currentUser')).dispenserValue - petNeedsThisAmountFood }); 
                        }
                    else if(store.get('user-'+ store.get('currentUser')).dispenserValue - petNeedsThisAmountFood <= 0)
                        {
                            $('.alertMessage2').fadeIn();
                            store.set("user-" + store.get('currentUser'),{id: store.get('currentUser'), password: currentPassword,username: currentUsername,themeColor: currentColor,pets: store.get("user-" + store.get('currentUser')).pets,dispenser:currentDispenser,dispenserValue: 5 }); 
                        }
                var calDispenserPecentage = store.get('user-'+ store.get('currentUser')).dispenserValue *100;
                calDispenserPecentage = calDispenserPecentage/tempDispenserVal;
                    
                 if(calDispenserPecentage > 50)
                    {
                        $('.dispenserStatusColor').css("background-color","green");
                        $('#dispenserSMessage').html("full");
                        $('.refilledButton').hide();
                    }
                else if(calDispenserPecentage < 50 && calDispenserPecentage > 25 )
                    {
                        $('.dispenserStatusColor').css("background-color","yellow");
                        $('#dispenserSMessage').html("Halfway down");
                        $('.refilledButton').hide();
                    }
                else if(calDispenserPecentage <= 25)
                    {
                        $('.dispenserStatusColor').css("background-color","red");
                        $('#dispenserSMessage').html("Almost empty");
                        $('.refilledButton').show();
                    }
                    
                });


                $('#return5').on('click', function(){
                
                    setTimeout(function() {
                        $('#slide7').hide();
                        $('#slide2').fadeIn(800); 
                    }, 200);
                    $('.petListBox').animate({opacity: 1},200);
                    window.scrollTo(0,0);

            });
           $('#eliminatePet').on('click', function(){
               eliminateCounter++;
               $('#eliminatePet').html("Confirm");
               if(eliminateCounter == 2)
                   {
                       
                   
                        $(this).animate({opacity: 0.25},200);
                                store.set(petID,{user:store.get('currentUser'),name:currentPetName[cm1],weight:currentPetWeight[cm1],age:currentPetAge[cm1],animal:currentAnimal[cm1],dailyFood:currentDailyFood[cm1],scheduleData: store.get(petID).scheduleData, exists:false,limit: store.get(petID).limit,lastFed: store.get('lastFed'),timeSinceFed: store.get(petID).timeSinceFed });
                       $('#myPetList').html("");
                           for(var x = 1; x <=store.get('totalpets');x++)
                            {
                                if((store.get("pet-" +x).user == store.get("currentUser")) && (store.get("pet-" +x).exists == true))
                                {

                                    $(
                                        '<div class="petListBox" id="' + 'pet-'+ x +'">' +
                                        '<div class="petBoxImg" id="'+ store.get("pet-" +x).animal +'"></div>' +
                                        '<div class="petBoxName">' + store.get("pet-" +x).name + '</div>'  +
                                        '</div>').appendTo($('#myPetList'));
                                }
                                switch(store.get("user-" + store.get('currentUser')).themeColor)
                                        {
                                     case "color1":
                                         {  
                                            store.set('interfacecolorRGB','orange');
                                            $('.petListBox').css("border-color","orange");
                                            $('#addPet').css("border-color","orange");
                                            $('.refilledButton').css("border-color","orange");
                                            $('#feed').css("border-color","orange");
                                            $('#username').css("background-color","orange");
                                            $('#password').css("background-color","orange");
                                            $('#petName').css("background-color","orange");
                                            $('#petAge').css("background-color","orange");
                                            $('#petWeight').css("background-color","orange");
                                            $('#lastFed').css("color","orange");
                                             $('#feedHistory li').css("border-bottom-color","orange");
                                         }
                                         break;
                                     case "color2":
                                         {
                                            store.set('interfacecolorRGB','cornflowerblue');
                                            $('.petListBox').css("border-color","cornflowerblue");
                                            $('#addPet').css("border-color","cornflowerblue");
                                            $('.refilledButton').css("border-color","cornflowerblue");
                                            $('#feed').css("border-color","cornflowerblue");
                                            $('#username').css("background-color","cornflowerblue");
                                            $('#password').css("background-color","cornflowerblue");
                                             $('#petName').css("background-color","cornflowerblue");
                                            $('#petAge').css("background-color","cornflowerblue");
                                            $('#petWeight').css("background-color","cornflowerblue");
                                            $('#lastFed').css("color","cornflowerblue");
                                             $('#feedHistory li').css("border-bottom-color","cornflowerblue");

                                         }
                                         break;
                                     case "color3":
                                         {
                                            store.set('interfacecolorRGB','darkred');
                                            $('.petListBox').css("border-color","darkred");
                                            $('#addPet').css("border-color","darkred");
                                            $('.refilledButton').css("border-color","darkred");
                                            $('#feed').css("border-color","darkred");
                                            $('#username').css("background-color","darkred");
                                            $('#password').css("background-color","darkred");
                                             $('#petName').css("background-color","darkred");
                                            $('#petAge').css("background-color","darkred");
                                            $('#petWeight').css("background-color","darkred");
                                             $('#lastFed').css("color","darkred");
                                             $('#feedHistory li').css("border-bottom-color","darkred");
                                         }
                                         break;
                                     case "color4":
                                         {
                                            store.set('interfacecolorRGB','green');
                                            $('.petListBox').css("border-color","green");
                                            $('#addPet').css("border-color","green");
                                            $('.refilledButton').css("border-color","green");
                                            $('#feed').css("border-color","green");
                                             $('#username').css("background-color","green");
                                            $('#password').css("background-color","green");
                                             $('#petName').css("background-color","green");
                                            $('#petAge').css("background-color","green");
                                            $('#petWeight').css("background-color","green");
                                             $('#lastFed').css("color","green");
                                             $('#feedHistory li').css("border-bottom-color","green");
                                         }
                                         break;
                                     case "color5":
                                         {
                                            store.set('interfacecolorRGB','mediumpurple');
                                            $('.petListBox').css("border-color","mediumpurple");
                                            $('#addPet').css("border-color","mediumpurple");
                                            $('.refilledButton').css("border-color","mediumpurple");
                                            $('#feed').css("border-color","mediumpurple");
                                             $('#username').css("background-color","mediumpurple");
                                            $('#password').css("background-color","mediumpurple");
                                             $('#petName').css("background-color","mediumpurple");
                                            $('#petAge').css("background-color","mediumpurple");
                                            $('#petWeight').css("background-color","mediumpurple");
                                             $('#lastFed').css("color","mediumpurple");
                                             $('#feedHistory li').css("border-bottom-color","mediumpurple");
                                         }
                                         break;
                                    } 
                            }

                            setTimeout(function() {
                                $('#slide7').hide();
                                $('#slide2').fadeIn(800); 
                            }, 200);
                    }
                });

            // SLIDE 7 Feed pet **************************




