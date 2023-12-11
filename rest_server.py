# Create a flask application server to implement RESTful API
# Carry out CRUD (Create, Read, Update & Delete) operations on the API
# Code Adapted from Topic 8 lectures and labs 

from flask import Flask, url_for, request, redirect, abort, jsonify

app = Flask(__name__, static_url_path='', static_folder='staticpages')


#make a dict object as we are not linking to a database yet 
candles =[
    {"id":1, "Name": "Classic", "Colour": "White", "Height": 16, "Width": 10, "Scent":"Vanilla",  "Price":10},
    {"id":2, "Name": "Tropical", "Colour": "Aqua", "Height": 16, "Width": 10, "Scent":"Mango",  "Price":12},
    {"id":3, "Name": "Forest", "Colour": "Green", "Height": 16, "Width": 10, "Scent":"Pine Tree",  "Price":15},
    {"id":4, "Name": "Flower Garden", "Colour": "Yellow", "Height": 16, "Scent":"Floral",  "Width": 10, "Price":15},
    {"id":5, "Name": "Cotton Fresh", "Colour": "Light Blue", "Height": 16, "Scent":"Fresh Linen",  "Width": 10, "Price":20}
]
#For creating a new candle
nextId= 6

#This is just to test the server is running
# check this by running the program in the VE using curl or in the browser
# http://127.0.0.1:5000
@app.route('/')
def index():
    return "hello"

#Implement the requests:

# Get ALL request
# curl http://127.0.0.1:5000/candles
# using the /candles URL 
@app.route('/candles')
def getall():
    # to get a json back 
    return jsonify(candles)


# Find By Id
# curl http://127.0.0.1:5000/candles/1
@app.route('/candles/<int:id>')
def findById(id):
    findCandle= list(filter (lambda t : t["id"]==id, candles))
    #print(findCandles) #this just prints the array of the candle in the server
    if len(findCandle)==0:
        return jsonify({}), 204
    return jsonify(findCandle[0])
    

# create a new candle
# can only use curl to check this as browser only does get and post
# curl -X "POST" -H "content-type:application/json" -d "{\"Name\":\"Orchard\", \"Colour\":\"Light Green\", \"Height\":16, \"Width\":10, \"Scent\":\"Apple\", \"Price\":13}" http://127.0.0.1:5000/candles
@app.route('/candles', methods=['POST'])
#Create the candle 
def create():
    global nextId
    #if there is no json request, return error code 400
    if not request.json:
        abort(400)
    newCandle ={
        "id":nextId,
        "Name": request.json["Name"],
        "Colour":request.json["Colour"],
        "Height": request.json["Height"],
        "Width": request.json["Width"],
        "Scent": request.json["Scent"],
        "Price": request.json["Price"],

    }
    #Append the new candle to the candles
    candles.append(newCandle)
    #Increment the Id by 1
    nextId += 1
    #return the updated json object 
    return jsonify(newCandle)


# update and existing candle
# curl -X "PUT" -d "{\"Name\":\"Sun Kissed\",\"Colour\":\"Rose\", \"Price\":15}" -H "content-type:application/json" http://127.0.0.1:5000/candles/2
@app.route('/candles/<int:id>', methods =['PUT'])
def update(id):
    findCandle= list(filter (lambda t : t["id"]==id, candles))
    #print(findCandle) #this just prints the array of the candles in the server
    if len(findCandle)==0:
        return jsonify({}), 404
    currentCandle = findCandle[0]
    if 'Name' in request.json:
        currentCandle['Name'] = request.json['Name']

    if 'Colour' in request.json:
        currentCandle['Colour'] = request.json['Colour']

    if 'Height' in request.json:
        currentCandle['Height'] = request.json['Height']

    if 'Width' in request.json:
        currentCandle['Width'] = request.json['Width']

    if 'Scent' in request.json:
        currentCandle['Scent'] = request.json['Scent']

    if 'Price' in request.json:
        currentCandle['Price'] = request.json['Price']
    
    return jsonify(currentCandle)


# Delete a candle
# curl -X "DELETE" http://127.0.0.1:5000/candles/1
@app.route('/candles/<int:id>', methods =['DELETE'])
def delete(id):
    findCandle= list(filter (lambda t : t["id"]==id, candles))
    #print(findCandle) #this just prints the array of the candles in the server
    if len(findCandle)==0:
        return jsonify({}), 404
    candles.remove(findCandle[0])
    return jsonify({"done":True})


# main function to execute all of the above 
if __name__ == "__main__":
    app.run(debug=True)