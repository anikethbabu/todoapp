# Todo App

## Prerequisites
For this course you will have to have [python](https://www.python.org/) (3.8 or higher), postgresql database(docker or local), and an ability to create virtual environments (I am using [venv](https://docs.python.org/3/library/venv.html)).

## Setup
First you want to create a virtual environment to store your dependencies. I store them in a folder called PythonEnvironments. When you are in the directory you would like to be in run:
```
python -m venv todoapp
```
This command will create a venv named todoapp. 

In linux you can activate the virtual environment using:
```
source todoapp/bin/activate
```
After that go to where you cloned the git repo and go to the directory backend then run 
```
pip install -r requirements.txt
```


