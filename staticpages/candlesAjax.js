// Ajax Functions
// These are imported to the candles.html page using <script src="candlesAjax.js"></script>
    //https://www.w3schools.com/tags/att_script_src.asp

function getAllCandlesAjax(){
    $.ajax({
        "url": "/candles",
        "method":"GET",
        "data":"",
        "dataType": "JSON",
        "success":function(result){
            console.log("Getting all")
            console.log(result);
            for (candle of result){
                addCandleToTable(candle);
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
getAllCandlesAjax(processGetAll)



function createCandleAjax(candle){
    
    console.log(JSON.stringify(candle));
    $.ajax({
        "url": "/candles",
        "method":"POST",
        "data":JSON.stringify(candle),
        "dataType": "JSON",
        contentType: "application/json; charset=utf-8",
        "success":function(result){      
            console.log(result);
            candle.id = result.id
            addCandleToTable(candle)
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
}       console.log("Creating Candle")
    candle = {"Name":"Orange Juice", "Colour": "Orange", "Height": 10, "Width": 10, "Scent": "Orange", "Price": 20}  
    createCandleAjax(candle,processCreateresponse)



function updateCandleAjax(id){

    console.log(JSON.stringify(id));
    $.ajax({
        "url": "/candles/"+encodeURI(candle.id),
        "method":"PUT",
        "data":JSON.stringify(candle),
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
    console.log("Updating Candle")
    console.log(result)
}
candle = {id:31,"Price":600, "Colour":"pink"} 
updateCandleAjax(candle,processUpdateResponse) 


function deleteCandleAjax(id){
    
    console.log(JSON.stringify('deleting '+id));
    $.ajax({
        "url": "candles/"+encodeURI(id),
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
    deleteCandleAjax(31,processDeleteResponse)