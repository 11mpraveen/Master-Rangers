var canvas = new fabric.Canvas('myCanvas'); 

var block_x;
var block_y;

//var block_x_g = 30;
//var block_y_g = 30;

window.addEventListener("keydown", keydown_function);

function insert_img(img,keydown){
    //alert(keydown);
    if (keydown == 82){
        block_x = 0;
        block_y = 0;
    }
    else if(keydown == 71){
        block_x = 0;
        block_y = 250;
    }
    else if(keydown == 89){
        block_x = 0;
        block_y = 450;
    }
    else if(keydown == 80){
        block_x = 0;
        block_y = 650;
    }
    else if(keydown == 66){
        block_x = 0;
        block_y = 750;
    }
    fabric.Image.fromURL(img, function(get_image){
      
        block_image_object =  get_image;

        block_image_object.scaleToWidth(300);
        block_image_object.scaleToHeight(300);
        block_image_object.set({
            top:block_x,
            left:block_y
        });
        canvas.add(block_image_object);
    })
}

function keydown_function(e){
    //alert("I am called");
    keydown = e.keyCode;
    //console.log(keydown);

    if(keydown == 82){
        insert_img('rr1.png',keydown);
        console.log("r");
    } 
    else if(keydown == 71 ){
        insert_img('gr.png',keydown);
        console.log("g");
    }
    else if(keydown == 89){
        insert_img('yr.png',keydown);
        console.log("y"); 
    }
    else if(keydown == 80){
        insert_img('pr.png',keydown);
        console.log("p");
    }
    else if(keydown == 66){
        insert_img('br.png',keydown);
        console.log("b"); 
    }
    else{
        window.alert("Please press only one of the following keys: r, g, y, p, or b")
    }   
}

