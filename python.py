from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/resume/education', methods=['POST'])
def add_education():
    data = request.json
    # Process the data and save it (e.g., to a database)
    
    # For demonstration, we just return a fixed ID
    return jsonify({"id": 1})

if __name__ == '__main__':
    app.run(debug=True)
