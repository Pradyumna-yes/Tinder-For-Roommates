from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('https://scintillating-crumble-534fd3.netlify.app/predict', methods=['POST'])
def predict():
    # Dummy processing logic for demonstration
    try:
        # Example of extracting and converting form data
        fruits_veggies_1 = float(request.form['fruits_veggies_1'])
        daily_stress_1 = float(request.form['daily_stress_1'])
        fruits_veggies_2 = float(request.form['fruits_veggies_2'])
        daily_stress_2 = float(request.form['daily_stress_2'])
        
        # Simulate some processing (e.g., using differences in inputs)
        diff_fruits_veggies = abs(fruits_veggies_1 - fruits_veggies_2)
        diff_daily_stress = abs(daily_stress_1 - daily_stress_2)
        
        # Dummy prediction logic
        prediction = (diff_fruits_veggies + diff_daily_stress) / 2  # Simplified example
        
        output = 100 - prediction  # Dummy compatibility score
    except Exception as e:
        return jsonify({'error': str(e)})

    return render_template('index.html', prediction_text='Predicted Compatibility Score: {:.2f}'.format(output))

if __name__ == "__main__":
    app.run(debug=True)
