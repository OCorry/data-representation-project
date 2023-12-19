// Ajax Functions
// These are imported to the candles.html page using <script src="candlesAjax.js"></script>
    //https://www.w3schools.com/tags/att_script_src.asp
    function getAllAjax(){
        $.ajax({
            "url": "/candles",
            "method":"GET",
            "data":"",
            "dataType": "JSON",
            "success":function(result){
                console.log("Showing all candles")
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
    function createCandleAjax(candle){
        
        console.log(JSON.stringify(candle));
        $.ajax({
            "url": "/candles",
            "method":"POST",
            "data":JSON.stringify(candle),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success":function(result){
                console.log("New candle created")
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

    function updateCandleAjax(candle){
        
        console.log(JSON.stringify(candle));
        $.ajax({
            "url": "/candles/"+encodeURI(candle.id),
            "method":"PUT",
            "data":JSON.stringify(candle),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success":function(result){
               console.log("Candle updated")
               console.log(result);
                  
            },
            "error":function(xhr,status,error){
                console.log("error: "+status+" msg:"+error);
            }
        });
    }

    function deleteCandleAjax(id){
        
        console.log(JSON.stringify('deleting '+id));
        $.ajax({
            "url": "/candles/"+encodeURI(id),
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