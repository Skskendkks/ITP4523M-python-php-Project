import random
from flask import Flask
app = Flask("price converter")

@app.route("/cost_convert/<amount>/<currency>/<rate>")
def convert(amount, currency, rate):
    
    amount = float(amount)
    rate = float(rate)
    
    if (amount < 0):
        return {"result": "rejected",
                "reason": "Amount must be a positive number"}
    
    if (currency != "HKD" and currency != "EUR" and currency != "JPY"):
        return {"result": "rejected",
                "reason": "Error : Currency must be 'HKD' or 'EUR' or 'JPY'"}
        
    if (rate < 0):
        return {"result": "rejected",
                "reason": "Rate must be a positive number"}
        
    return {
        "result": "accepted",
        "converted_amount": str(amount * rate)
    }

if __name__ == "__main__":
    
    try:
        app.run(debug = True,
              host = '0.0.0.0',
              port = 8080)
        input("Press Enter to close...")
    except Exception as e:
        print(e)
        
    

