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
Creating a postgres database in docker
```
docker run -d --name postgresTodo -p 5431:5432 -e POSTGRES_PASSWORD=pass123 -e POSTGRES_USER=testuser postgres
```
The -d means detached so it will run in the background and -p means port we are mapping it to the host port of 5431. The -e flag specifies the environment variable.

Then you need to create postgres the databse postgres will need to use. First exec in the container using:
```
docker exec -it postgresTodo bash
```
then once you are in the container bash run
```
psql -h localhost -U testuser
``` 