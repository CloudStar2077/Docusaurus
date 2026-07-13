---
sidebar_position: 1
---

# Docker Container Setup for an E-Commerce Web-App

Setup a docker container to run a Django Web App, this will be implementet by generating a predefined docker image.

# Table of Contents

1. [Prerequisites](#prerequisites) 
2. [Quickstart](#quickstart) 
3. [Usage](#usage)

## PREREQUISITES

- Docker (version 20.10 or higher) installed
- Git installed

## Quickstart

- Clone Repository
```bash
git clone git@github.com:CloudStar2077/baby-tools-shop.git
cd /baby-tools-shop
mv example.env .env  # rename the example.env to .env
```
Replace the Values in the `.env` with yours, you can generate the secret key by 
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
  ```
- Build docker image
```bash
docker build -t bts-app -f Dockerfile .
```  
- Run the Container
```bash
docker run --env-file .env \                                 
-d \                                                         
-p 8025:8025 \                                               
-v /home/docker_volume_maps/data:/app/babyshop_app/data \    
-v /home/docker_volume_maps/media:/app/babyshop_app/media \
--name bts-app \                                             
--restart unless-stopped \                                   
bts-app:latest 
```
Open a web browser then enter the target destination to check accessibility
```bash
<HostIP>:8025
  ```

## Usage

Clone the Repository from Github.

```bash 
git clone git@github.com:CloudStar2077/baby-tools-shop.git
  ```
```bash 
cd baby-tools-shop
  ```


The `Dockerfile` describes the predefined docker image like a building plan for the container to start it within seconds without
doing any configurations. This begins with the first line in the Dockerfile which pulls the base image for the Container, a lighweight linux operating system including python3. Then set the working directory to copy it into the container. After the container is up running it will execute some commands for installing the requirements, open port 8025 and start a shell in the working directory to run the app.

In order for the app to know where to store and load the database and the variables, changes had been made to the `settings.py`
```bash
import environ

env = environ.Env(
    DEBUG=(bool, False)
)

environ.Env.read_env()

SECRET_KEY = env('DJANGO_SECRET_KEY')
DEBUG = env('DEBUG')
ALLOWED_HOSTS = env.list('DJANGO_ALLOWED_HOSTS', default=['localhost'])


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'data', 'db.sqlite3'),  
    }
}
   ```


Because unnecessary files in the container would consume resources they should be ignored in the container build by setting up the `.dockerignore` file. This includes the Dockerfile, Git, temporary files, logs, environment variables etc.

For a simular purpose create the `.gitignore`. This contains everything to ignore uploading into the Git repository. Basicly files which are automatically generated, local (database, settings), secret or doesn't belong in the repository.

In the `èxamples.env` are the placeholders for the envoirement variables, replace it with yours and rename the file in `.env` before building the image.


Build the image by typing 
```bash
docker build -t bts-app -f Dockerfile .  # "-t" for tag the image with a name
                                         # "-f" input file
 ```
This should finish without any errors ...

Then start the Container
```bash
docker run --env-file .env \                                 # "--env-file" to pass the .env file when starting the container
-d \                                                         # "-d" for detatch mode to run container in background
-p 8025:8025 \                                               # "-p" for port mapping <HostPort>:<ContainerPort>
-v /home/docker_volume_maps/data:/app/babyshop_app/data \    # "-v" for volume mapping <HostPath>:<ContainerPath>
-v /home/docker_volume_maps/media:/app/babyshop_app/media \
--name bts-app \                                             # "--name" for naming the container
--restart unless-stopped \                                   # "--restart unless-stopped" for restarting the container after an error or crash
bts-app:latest 
                                       
   ```
 
Visit the baby-tools-shop in a web-browser
```bash
<HostIp>:<HostPort>
 ```
You will see an empty Website without any products.
```bash
cd babyshop_app
python manage.py createsuperuser
 ```
Create a admin user & password then login to the website `<hostip>:<hostport>/admin` to add your products.

![Baby Tools Shop](https://github.com/user-attachments/assets/86354315-0de9-4fae-9d8a-bf7f91d74521)





