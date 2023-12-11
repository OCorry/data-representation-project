# Create a flask application server to implement RESTful API
# Carry out CRUD (Create, Read, Update & Delete) operations on the API
# Code Adapted from Topic 8 lectures and labs 


# Import candlesDAO from the candlesDAO file 
from candlesDAO import candlesDAO

from flask import Flask, url_for, request, redirect, abort, jsonify
app = Flask(__name__, static_url_path='', static_folder='.')


#Implement the requests:

# Get ALL request
# curl http://127.0.0.1:5000/candles
# using the /candles URL 
@app.route('/candles')
def getall():
    #print("in getall")
    results = candlesDAO.getAll()
    return jsonify(results)


# Find By Id
# curl http://127.0.0.1:5000/candles/1
@app.route('/candles/<int:id>')
def findById(id):
    findCandle= candlesDAO.findByID(id)
    return jsonify(findCandle)

    

# create a new candle
# can only use curl to check this as browser only does get and post
# curl -i -H "Content-Type:application/json" -X POST -d "{\"Name\":\"Orchard\", \"Colour\":\"Light Green\", \"Height\":16, \"Width\":10, \"Scent\":\"Apple\", \"Price\":13}" http://127.0.0.1:5000/candles
@app.route('/candles', methods=['POST'])
#Create the candle 
def create():

    if not request.json:
        abort(400)
    newCandle ={
        "Name": request.json["Name"],
        "Colour":request.json["Colour"],
        "Height": request.json["Height"],
        "Width": request.json["Width"],
        "Scent": request.json["Scent"],
        "Price": request.json["Price"],

    }
    values =(newCandle['Name'],newCandle['Colour'],newCandle['Height'],newCandle['Width'],newCandle['Scent'],newCandle['Price'])
    newId = candlesDAO.create(values)
    newCandle['id'] = newId
    return jsonify(newCandle)
    


# update an existing candle
# curl -i -H "Content-Type:application/json" -X PUT -d "{\"Name\":\"orange\",\"Colour\":\"Orange\"}" http://127.0.0.1:5000/candles/5
@app.route('/candles/<int:id>', methods=['PUT'])
def update(id):
    findCandle = candlesDAO.findByID(id)
    if not findCandle:
        abort(404)
    
    if not request.json:
        abort(400)
    reqJson = request.json

    if 'Price' in reqJson and type(reqJson['Price']) is not int:
        abort(400)
    
    if 'Height' in reqJson and type(reqJson['Height']) is not int:
        abort(400)

    if 'Width' in reqJson and type(reqJson['Width']) is not int:
        abort(400)

    if 'Name' in reqJson:
        findCandle['Name'] = reqJson['Name']
    if 'Colour' in reqJson:
        findCandle['Colour'] = reqJson['Colour']
    if 'Height' in reqJson:
        findCandle['Height'] = reqJson['Height']
    if 'Width' in reqJson:
        findCandle['Width'] = reqJson['Width']
    if 'Scent' in reqJson:
        findCandle['Scent'] = reqJson['Scent']
    if 'Price' in reqJson:
        findCandle['Price'] = reqJson['Price']

    values = (findCandle['Name'],findCandle['Colour'],findCandle['Height'],findCandle['Width'],findCandle['Scent'], findCandle['Price'],findCandle['id'])
    candlesDAO.update(values)
    return jsonify(findCandle)


# Delete a candle
# curl -X "DELETE" http://127.0.0.1:5000/candles/1
@app.route('/candles/<int:id>', methods =['DELETE'])
def delete(id):
    candlesDAO.delete(id)

    return jsonify({"done":True})


# main function to execute all of the above 
if __name__ == "__main__":
    app.run(debug=True)