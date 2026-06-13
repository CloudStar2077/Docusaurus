# Juice Shop Master 

This guide focuses on the analysis and demonstration of typical web vulnerabilities in the OWASP Juice Shop.
> [!NOTE] 
> This repo is for educational purposes.

> [!IMPORTANT]
> Run only on approved machines.


# Table of Contents
 
1.[Quickstart](#Quickstart) 
2.[Password Hash Leak](#Password-Hash-Leak) 


## Quickstart

- Download and install VirtualBox
```bash
sudo apt update && sudo apt install -y virtualbox
``` 

- Create a virtual machine running Kali Linux and Setup the Juice Shop on this VM.

- Clone the Juice-Shop Repository
```bash
git clone https://github.com/juice-shop/juice-shop && cd juice-shop 
```

- Download and install Dependencies
```bash
sudo apt update && sudo apt install -y nodejs npm
```

- Install and start the Juice-Shop 
```bash
npm install && npm start
```

- Open Webbrowser and enter the Destination
```bash
127.0.0.1:3000 
``` 

- Check out the Juice-Shop and try to solve some challenges.

## Password Hash Leak

This challenge demonstrates how to intercept and analyze the password hash of a logged-in user with Burpsuite.
 
