itteration = 0;


function generate_random_glitch_number(){
    return Math.floor(Math.random() * 180);
}

function glitch_cycle_background(glitch_number){
    glitch_name = "./resources/graphics/glitches/glitch_" + glitch_number + "/" + generate_random_glitch_number() + ".png";

    $("#background_graphics_wrapepr").css("background-image","url(" + glitch_name + ")");

    // console.log(glitch_name);  
}

function generate_glitch_cycle_bot(glitch_size, glitch_name){
    
    if(itteration > glitch_size){
        itteration = 0;
        glitch_name = "./resources/graphics/glitches/" + glitch_name + "/" + itteration + ".png";
        $("#background_graphics_wrapepr").css("background-image","url(" + glitch_name + ")");
        console.log(glitch_name); 
    }else{
        itteration++;
        glitch_name = "./resources/graphics/glitches/" + glitch_name + "/" + itteration + ".png";
        $("#background_graphics_wrapepr").css("background-image","url(" + glitch_name + ")");
        console.log(glitch_name); 
    }

}

function glitch_cycle_top(glitch_number){
    glitch_name = "./resources/graphics/glitches/glitch_" + glitch_number + "/" + generate_random_glitch_number() + ".png";

    $("#top_graphics").css("background-image","url(" + glitch_name + ")");

    // console.log(glitch_name);  
}

function generate_glitch_cycle_top(glitch_size, glitch_name){
    
    if(itteration > glitch_size){
        itteration = 0;
        glitch_name = "./resources/graphics/glitches/" + glitch_name + "/" + itteration + ".png";
        $("#top_graphics").css("background-image","url(" + glitch_name + ")");
        console.log(glitch_name); 
    }else{
        itteration++;
        glitch_name = "./resources/graphics/glitches/" + glitch_name + "/" + itteration + ".png";
        $("#top_graphics").css("background-image","url(" + glitch_name + ")");
        console.log(glitch_name); 
    }

}




$(document).ready(function() {

    (function() {
        function updateCounter() {
            var timeout = 500 * Math.random() + 50;
            setTimeout(function() {
                // glitch_cycle_background(1);
                generate_glitch_cycle_bot(180, "glitch_1");
                updateCounter();
            }, timeout);
          }
        updateCounter();
    })();

    (function() {
        function updateCounter() {
            var timeout = 300 * Math.random() + 50;
            setTimeout(function() {
                glitch_cycle_top(1);
                // generate_glitch_cycle_top(180, "glitch_1");
                updateCounter();
            }, timeout);
          }
        updateCounter();
    })();

    


});



