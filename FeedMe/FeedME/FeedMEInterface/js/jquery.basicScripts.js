
if(store.get("totalUsers") == null)
                {
                    store.set("totalUsers", 0);
                    store.set('currentUser',null);
                }
var currentPassword = "";
var currentUsername = "";
var currentPets= 0;

if(store.get('totalpets') == null)
    {
        store.set('totalpets',0);
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
            $('#username').css("background-color","orange");
            $('#password').css("background-color","orange");
            $('#petName').css("background-color","orange");
            $('#petAge').css("background-color","orange");
            $('#petWeight').css("background-color","orange");
         }
         break;
     case "color2":
         {
            store.set('interfacecolorRGB','cornflowerblue');
            $('.petListBox').css("border-color","cornflowerblue");
            $('#addPet').css("border-color","cornflowerblue");
            $('#username').css("background-color","cornflowerblue");
            $('#password').css("background-color","cornflowerblue");
             $('#petName').css("background-color","cornflowerblue");
            $('#petAge').css("background-color","cornflowerblue");
            $('#petWeight').css("background-color","cornflowerblue");

         }
         break;
     case "color3":
         {
            store.set('interfacecolorRGB','darkred');
            $('.petListBox').css("border-color","darkred");
            $('#addPet').css("border-color","darkred");
            $('#username').css("background-color","darkred");
            $('#password').css("background-color","darkred");
             $('#petName').css("background-color","darkred");
            $('#petAge').css("background-color","darkred");
            $('#petWeight').css("background-color","darkred");
         }
         break;
     case "color4":
         {
            store.set('interfacecolorRGB','green');
            $('.petListBox').css("border-color","green");
            $('#addPet').css("border-color","green");
             $('#username').css("background-color","green");
            $('#password').css("background-color","green");
             $('#petName').css("background-color","green");
            $('#petAge').css("background-color","green");
            $('#petWeight').css("background-color","green");
         }
         break;
     case "color5":
         {
            store.set('interfacecolorRGB','mediumpurple');
            $('.petListBox').css("border-color","mediumpurple");
            $('#addPet').css("border-color","mediumpurple");
             $('#username').css("background-color","mediumpurple");
            $('#password').css("background-color","mediumpurple");
             $('#petName').css("background-color","mediumpurple");
            $('#petAge').css("background-color","mediumpurple");
            $('#petWeight').css("background-color","mediumpurple");
         }
         break;
    } 
}
            // SLIDE 1 LOGIN *****************************
            $('.nextButton').on('click', function(){
                $('#myPetList').html("");
                 var username = $("#username").val();
                 var password = $("#password").val();
                 var validation = false;
                 var userExists = false;
                $('#myPetList').html("");
                for(var x = 1; validation == false && x<= store.get('totalUsers'); x++)
                    {
                        if(username == store.get("user-"+x).username)
                        {
                            userExists = true;
                            if((username == store.get("user-" +x).username) && (password == store.get("user-"+x).password) )
                            {
                                store.set('currentUser',x);
                                currentPassword = store.get("user-"+x).password;
                                currentUsername = store.get("user-"+x).username;
                                currentPets = store.get("user-"+store.get("currentUser")).pets;
                                $('#loginAlert').hide(500);
                                $('.nextButton').css({'background-image':'url(/img/Icons/ic_radio_button_checked_black_24dp_2x.png)'});
                                

                                setTimeout(function() {
                                    $('#slide1').hide();
                                    $('#slide2').fadeIn(1000); 
                                }, 1000);
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
                    if(store.get("pet-" +x).user == store.get("currentUser"))
                    {
                            
                        $(
                            '<div class="petListBox">' +
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
                            $('#username').css("background-color","orange");
                            $('#password').css("background-color","orange");
                            $('#petName').css("background-color","orange");
                            $('#petAge').css("background-color","orange");
                            $('#petWeight').css("background-color","orange");
                         }
                         break;
                     case "color2":
                         {
                            store.set('interfacecolorRGB','cornflowerblue');
                            $('.petListBox').css("border-color","cornflowerblue");
                            $('#addPet').css("border-color","cornflowerblue");
                            $('#username').css("background-color","cornflowerblue");
                            $('#password').css("background-color","cornflowerblue");
                             $('#petName').css("background-color","cornflowerblue");
                            $('#petAge').css("background-color","cornflowerblue");
                            $('#petWeight').css("background-color","cornflowerblue");

                         }
                         break;
                     case "color3":
                         {
                            store.set('interfacecolorRGB','darkred');
                            $('.petListBox').css("border-color","darkred");
                            $('#addPet').css("border-color","darkred");
                            $('#username').css("background-color","darkred");
                            $('#password').css("background-color","darkred");
                             $('#petName').css("background-color","darkred");
                            $('#petAge').css("background-color","darkred");
                            $('#petWeight').css("background-color","darkred");
                         }
                         break;
                     case "color4":
                         {
                            store.set('interfacecolorRGB','green');
                            $('.petListBox').css("border-color","green");
                            $('#addPet').css("border-color","green");
                             $('#username').css("background-color","green");
                            $('#password').css("background-color","green");
                             $('#petName').css("background-color","green");
                            $('#petAge').css("background-color","green");
                            $('#petWeight').css("background-color","green");
                         }
                         break;
                     case "color5":
                         {
                            store.set('interfacecolorRGB','mediumpurple');
                            $('.petListBox').css("border-color","mediumpurple");
                            $('#addPet').css("border-color","mediumpurple");
                             $('#username').css("background-color","mediumpurple");
                            $('#password').css("background-color","mediumpurple");
                             $('#petName').css("background-color","mediumpurple");
                            $('#petAge').css("background-color","mediumpurple");
                            $('#petWeight').css("background-color","mediumpurple");
                         }
                         break;
                 } 
        }
                if(username == "" || password =="")
                    {
                        $('#loginAlert').fadeOut(100).fadeIn(500);
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
            
            $('#feedIcon').on('click', function(){

                    setTimeout(function() {
                        $('#slide2').hide();
                        $('#slide7').fadeIn(800);
                    }, 200);
                    window.scrollTo(0,0);

            });
            // SLIDE 2 MAIN SCREEN ***********************
            
            // SLIDE 3 Add Pet ***************************
            
            $('#return1').on('click', function(){
                 
                
                setTimeout(function() {
                    $('#slide3').hide();
                    $('#slide2').fadeIn(800);      
                }, 200);
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
            $('#nextSlide4').on('click', function(){
                petName = $('#petName').val();
                petWeight = $('#petWeight').val();
                petAge = $('#petAge').val();
                
                if((petName != "" && petWeight != "" && petAge != "" ))
                    {
                        var currentMaxPets = store.get('totalpets');
                        store.set('totalpets',currentMaxPets + 1);
                        $('#nextSlide4').css("background-color","green");
                        $('#petDetailsAlert').fadeOut(500);
                        store.set("pet-" + store.get('totalpets'),{user:store.get('currentUser'),name:petName,weight:petWeight,age:petAge,animal:animalIcon});
                        store.set("user-" + store.get('currentUser'),{id: store.get('currentUser'), password: currentPassword,username: currentUsername,themeColor:"color1",pets: store.get("user-" + store.get('currentUser')).pets + 1}); 
                        setTimeout(function() {
                        $('#slide4').hide();
                        $('#slide2').fadeIn(800);      
                            }, 200);
                        window.scrollTo(0,0);
                    }
                else
                    {   
                        $('#petDetailsAlert').fadeIn(500);
                        $('#nextSlide4').css("background-color","red");
                    }
            

            });
            // SLIDE 4 Pet Creation Profile***************

             // SLIDE 2 Pet Profiles **********************
            $('#nextSlide4').on('click', function(){
                $(
                '<div class="petListBox">' +
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
                    $('#username').css("background-color","orange");
                    $('#password').css("background-color","orange");
                    $('#petName').css("background-color","orange");
                    $('#petAge').css("background-color","orange");
                    $('#petWeight').css("background-color","orange");
                 }
                 break;
             case "color2":
                 {
                    store.set('interfacecolorRGB','cornflowerblue');
                    $('.petListBox').css("border-color","cornflowerblue");
                    $('#addPet').css("border-color","cornflowerblue");
                    $('#username').css("background-color","cornflowerblue");
                    $('#password').css("background-color","cornflowerblue");
                     $('#petName').css("background-color","cornflowerblue");
                    $('#petAge').css("background-color","cornflowerblue");
                    $('#petWeight').css("background-color","cornflowerblue");

                 }
                 break;
             case "color3":
                 {
                    store.set('interfacecolorRGB','darkred');
                    $('.petListBox').css("border-color","darkred");
                    $('#addPet').css("border-color","darkred");
                    $('#username').css("background-color","darkred");
                    $('#password').css("background-color","darkred");
                     $('#petName').css("background-color","darkred");
                    $('#petAge').css("background-color","darkred");
                    $('#petWeight').css("background-color","darkred");
                 }
                 break;
             case "color4":
                 {
                    store.set('interfacecolorRGB','green');
                    $('.petListBox').css("border-color","green");
                    $('#addPet').css("border-color","green");
                     $('#username').css("background-color","green");
                    $('#password').css("background-color","green");
                     $('#petName').css("background-color","green");
                    $('#petAge').css("background-color","green");
                    $('#petWeight').css("background-color","green");
                 }
                 break;
             case "color5":
                 {
                    store.set('interfacecolorRGB','mediumpurple');
                    $('.petListBox').css("border-color","mediumpurple");
                    $('#addPet').css("border-color","mediumpurple");
                     $('#username').css("background-color","mediumpurple");
                    $('#password').css("background-color","mediumpurple");
                     $('#petName').css("background-color","mediumpurple");
                    $('#petAge').css("background-color","mediumpurple");
                    $('#petWeight').css("background-color","mediumpurple");
                 }
                 break;
            } 
                
            });
            // SLIDE 2 Pet Profiles **********************
            
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
            
            $('#nextSlide5').on('click', function(){
                userProfile = $('#userProfileName').val();
                userMail = $('#userMail').val();
                userPassword = $('#userPassWord').val();
                if((userProfile != "" && userMail != "" && userPassword != "" ))
                    {
                       
                        var numberOfUsers = store.get("totalUsers");
                            numberOfUsers++;
                            store.set("totalUsers", numberOfUsers); 
                            store.set("user-" + numberOfUsers,{id: numberOfUsers, password: userPassword,username: userProfile,themeColor:"color1",pets:0});  
                       $('#nextSlide5').css("background-color","green").fadeOut(500).fadeIn(500);
                        setTimeout(function() {
                            $('#slide5').hide();    
                            $('#loginAlert').hide();
                            $('#slide1').fadeIn(800); 
                            
                            
                        },1200);
                        
                    }
                else
                {
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
                store.set("user-" + store.get('currentUser'),{id: store.get('currentUser'), password: currentPassword,username: currentUsername,themeColor:$(this).attr('id'),pets:store.get('currentPets')});
                if($(this).attr('id') == "color2")
                {
                    store.set('interfacecolor','color2');
                store.set('interfacecolorRGB','cornflowerblue');
                    $('.petListBox').css("border-color","cornflowerblue");
                    $('#addPet').css("border-color","cornflowerblue");
                    $('#petName').css("background-color","cornflowerblue");
                    $('#petAge').css("background-color","cornflowerblue");
                    $('#petWeight').css("background-color","cornflowerblue");
                    }
                else if($(this).attr('id') == 'color3')
                {
                    store.set('interfacecolor','color3');
                store.set('interfacecolorRGB','darkred');
                    $('.petListBox').css("border-color","darkred");
                    $('#addPet').css("border-color","darkred");
                    $('#petName').css("background-color","darkred");
                    $('#petAge').css("background-color","darkred");
                    $('#petWeight').css("background-color","darkred");
                    
                }
                else if($(this).attr('id') == "color4")
                {
                    store.set('interfacecolor','color4');
                    store.set('interfacecolorRGB','green');
                    $('.petListBox').css("border-color","green");
                    $('#addPet').css("border-color","green");
                    $('#petName').css("background-color","green");
                    $('#petAge').css("background-color","green");
                    $('#petWeight').css("background-color","green");
                }
                else if($(this).attr('id') == "color5")
                {
                    store.set('interfacecolor','color5');
                    store.set('interfacecolorRGB','mediumpurple');
                    $('.petListBox').css("border-color","mediumpurple");
                    $('#addPet').css("border-color","mediumpurple");
                    $('#petName').css("background-color","mediumpurple");
                    $('#petAge').css("background-color","mediumpurple");
                    $('#petWeight').css("background-color","mediumpurple");
                }
                else if($(this).attr('id') == "color1")
                {
                    store.set('interfacecolor','color1');
                    store.set('interfacecolorRGB','orange');
                    $('.petListBox').css("border-color","orange");
                    $('#addPet').css("border-color","orange");
                    $('#petName').css("background-color","orange");
                    $('#petAge').css("background-color","orange");
                    $('#petWeight').css("background-color","orange");
                    }
                

            });

            // SLIDE 6 Settings Profile*******************

            // SLIDE 6 Feed pet **************************

                $('#return5').on('click', function(){
                
                    setTimeout(function() {
                        $('#slide7').hide();
                        $('#slide2').fadeIn(800);      
                    }, 200);
                    window.scrollTo(0,0);

            });

            // SLIDE 6 Feed pet **************************




