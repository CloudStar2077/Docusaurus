---
sidebar_position: 5
---

# Minecraft-Gaming-Server

Setup and host your own Java based Minecraft Gaming Server in a Docker Container 

# Table of Contents

1. [Prerequisites](#prerequisites) 
2. [Quickstart](#quickstart) 
3. [Usage](#usage)

## PREREQUISITES

- Docker (version 20.10 or higher) installed
- Git installed
- python 3 installed

## Quickstart

- Clone Repository then Rename 

```bash
git clone git@github.com:CloudStar2077/Minecraft-Gaming-Server.git
cd Minecraft-Gaming-Server
mv example.env .env  # rename the example.env to .env
 ```
:::caution
Keep in mind not to commit your .env file.
:::

- Build docker image
```bash
docker compose build
```  
- Run the Container
```bash
docker compose up -d
```

## Usage

For this Setup a default Minecraft base image doesn't make sense, because we want to have more control over the environment. The `Dockerfile` pulls the Base Image an Open-Source Java-Distribution. The Minecraft Server Core is downloaded by the `entrypoint.sh` which also accepts the End User License Agreement and starts the server on port 8888 with no graphical user interface. Since this is for documentation purpose and the system hardware is limited the server runs with min 1G and max 2G RAM. For more memory You can adjust the RAM Variables in the `.env`.
```bash
JAVA_MIN_RAM=4G
JAVA_MAX_RAM=8G
 ```   
Get the latest download version:
Go to ```https://www.minecraft.net/de-de/download``` and copy the Minecraft Java Download URL into the `.env`
```bash
MC_URL=<Download_URL>
 ```
To prevent game data loss, a volume is created in the `docker-compose.yml` for persistent storage.

As usually there is a `.gitignore` and `.dockerignore` to ignore all files which doesn't belong into the container image or the git repository.

You can either build the image with the regular Docker command or use Docker Compose. If you want to use just docker for the image then go by:
```bash
docker build -t minecraft-server /Minecraft-Gaming-Server  # -t for tag the image with a name
 ```
otherwise
```bash
docker compose build # for building the image with compose
 ```
Run the Container
```bash
docker run -d \              # WITHOUT COMPOSE 
  --name mc-server \
  --env-file .env \
  -p 8888:8888 \
  -v minecraft-data:/app \
  --restart on-failure \
  minecraft-server
 ```
or 
```bash
docker compose up -d # -d for detached mode, runs container in backgound with compose
  ```   

Download and start McStatus to check the server status 
```bash
python3 -m pip install mcstatus

mcstatus <YourHostIP>:8888 status
 ```
