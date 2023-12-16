// Ajax Functions
// These are imported to the frames.html page using <script src="framesAjax.js"></script>
    //https://www.w3schools.com/tags/att_script_src.asp



    function getAllAjax(){
        $.ajax({
            "url": "http://127.0.0.1:5000/frames",
            "method":"GET",
            "data":"",
            "dataType": "JSON",
            "success":function(result){
                console.log("Showing all frames")
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
    function createFrameAjax(frame){
        
        console.log(JSON.stringify(frame));
        $.ajax({
            "url": "http://127.0.0.1:5000/frames",
            "method":"POST",
            "data":JSON.stringify(frame),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success":function(result){
                console.log("New frame created")
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
    function updateFrameAjax(frame){
        
        console.log(JSON.stringify(frame));
        $.ajax({
            "url": "http://127.0.0.1:5000/frames/"+encodeURI(frame.id),
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

    function deleteFrameAjax(id){
        
        console.log(JSON.stringify('deleting '+id));
        $.ajax({
            "url": "http://127.0.0.1:5000/frames/"+encodeURI(id),
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
    getAllAjax();