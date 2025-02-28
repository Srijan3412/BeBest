from flask import Flask, render_template
import threading

# Create Flask applications
app1 = Flask(__name__)
app2 = Flask(__name__)
app3 = Flask(__name__)
app4 = Flask(__name__)
app5 = Flask(__name__)
app6 = Flask(__name__)
app7 = Flask(__name__)
app8 = Flask(__name__)
app9 = Flask(__name__)
app10 = Flask(__name__)
app11 = Flask(__name__)
app12 = Flask(__name__)

# Define routes for the first app (index.html)
@app1.route('/')
def home():
    return render_template('home.html')  # Serve the index.html file

# Define routes for the second app (about.html)
@app2.route('/')
def about():
    return render_template('courses.html')  # Serve the about.html file

# Define routes for the third app (contact.html)
@app3.route('/')
def contact():
    return render_template('f1.html')  # Serve the contact.html file

@app4.route('/')
def home():
    return render_template('s1.html')  # Serve the index.html file

# Define routes for the second app (about.html)
@app5.route('/')
def about():
    return render_template('s1(1).html')  # Serve the about.html file

# Define routes for the third app (contact.html)
@app6.route('/')
def contact():
    return render_template('s1(2).html')  # Serve the contact.html file

@app7.route('/')
def home():
    return render_template('s1(3).html')  # Serve the index.html file

# Define routes for the second app (about.html)
@app8.route('/')
def about():
    return render_template('s1(4).html')  # Serve the about.html file

# Define routes for the third app (contact.html)
@app9.route('/')
def contact():
    return render_template('s1(5).html')  # Serve the contact.html file

@app10.route('/')
def home():
    return render_template('s1(6).html')  # Serve the index.html file

@app11.route('/')
def about1():
    return render_template('s1(7).html')  # Serve the about.html file

# Define routes for the third app (contact.html)
@app12.route('/')
def contact1():
    return render_template('s1(8).html')  # Serve the contact.html file



# Function to run the first app
def run_app1():
    app1.run(port=5001)

# Function to run the second app
def run_app2():
    app2.run(port=5002)

# Function to run the third app
def run_app3():
    app3.run(port=5003)

# Function to run the first app
def run_app4():
    app4.run(port=5004)

# Function to run the second app
def run_app5():
    app5.run(port=5005)

# Function to run the third app
def run_app6():
    app6.run(port=5006)

# Functin to run the first app
def run_app7():
    app7.run(port=5007)

# Function to run the second app
def run_app8():
    app8.run(port=5008)

# Function to run the third app
def run_app9():
    app9.run(port=5009)

# Function to run the first app
def run_app10():
    app10.run(port=5010)

# Function to run the third app
def run_app11():
    app11.run(port=5011)

# Function to run the first app
def run_app12():
    app12.run(port=5012)

if __name__ == '__main__':
    # Create threads for each app
    thread1 = threading.Thread(target=run_app1)
    thread2 = threading.Thread(target=run_app2)
    thread3 = threading.Thread(target=run_app3)
    thread4 = threading.Thread(target=run_app4)
    thread5 = threading.Thread(target=run_app5)
    thread6 = threading.Thread(target=run_app6)
    thread7 = threading.Thread(target=run_app7)
    thread8 = threading.Thread(target=run_app8)
    thread9 = threading.Thread(target=run_app9)
    thread10 = threading.Thread(target=run_app10)
    thread11 = threading.Thread(target=run_app11)
    thread12 = threading.Thread(target=run_app12)



    # Start the threads
    thread1.start()
    thread2.start()
    thread3.start()
    thread4.start()
    thread5.start()
    thread6.start()
    thread7.start()
    thread8.start()
    thread9.start()
    thread10.start()
    thread11.start()
    thread12.start()