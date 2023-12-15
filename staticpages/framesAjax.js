// Ajax Functions
// These are imported to the frames.html page using <script src="framesAjax.js"></script>
    //https://www.w3schools.com/tags/att_script_src.asp



function getAllFramesAjax(){
    $.ajax({
        "url": "/frames",
        "method":"GET",
        "data":"",
        "dataType": "JSON",
        "success":function(result){
            console.log("Getting all")
            console.log(result);
            for (frame of result){
                addFrameToTable(frame);
            }
            
        },
        "error":function(xhr,status,error){
            console.log("error: "+status+" msg:"+error);
        }
    });

}

function processGetAll(result){
    console.log("in process")
    console.log(result)
}
getAllFramesAjax(processGetAll)



function createFrameAjax(frame){
    
    console.log(JSON.stringify(frame));
    $.ajax({
        "url": "/frames",
        "method":"POST",
        "data":JSON.stringify(frame),
        "dataType": "JSON",
        contentType: "application/json; charset=utf-8",
        "success":function(result){      
            console.log(result);
            frame.id = result.id
            addFrameToTable(frame)
            clearForm()
            showViewAll()
        },
        "error":function(xhr,status,error){
            console.log("error: "+status+" msg:"+error);
        }
    });
}
function processCreateresponse(result){
    console.log(result)
}       console.log("Creating Frame")
    frame = {"Occasion":"50th Wedding Anniversary", "Colour": "Gold", "Height": 15, "Width": 12, "Price": 20}  
    createFrameAjax(frame,processCreateresponse)



function updateFrameAjax(id){

    console.log(JSON.stringify(id));
    $.ajax({
        "url": "/frames/"+encodeURI(frame.id),
        "method":"PUT",
        "data":JSON.stringify(frame),
        "dataType": "JSON",
        contentType: "application/json; charset=utf-8",
        "success":function(result){
           console.log(result);
              
        },
        "error":function(xhr,status,error){
            console.log("error: "+status+" msg:"+error);
        }
    });
}

function processUpdateResponse(result){
    console.log("Updating Frame")
    console.log(result)
}
frame = {id:10,"Colour":"yellow","Price":60,} 
updateFrameAjax(frame,processUpdateResponse) 


function deleteFrameAjax(id){
    
    console.log(JSON.stringify('deleting '+id));
    $.ajax({
        "url": "frames/"+encodeURI(id),
        "method":"DELETE",
        "data":"",
        "dataType": "JSON",
        contentType: "application/json; charset=utf-8",
        "success":function(result){
            console.log(result);
              
        },
        "error":function(xhr,status,error){
            console.log("error: "+status+" msg:"+error);
        }
    });
}


function processDeleteResponse(result){
    
    console.log(result)
    }
    deleteFrameAjax(11,processDeleteResponse)