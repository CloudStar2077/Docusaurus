# Password Hash Leak

The "Password Hash Leak" challenge from OWASP Juice Shop was successfully completed by identifying exposed password hashes and analyzing the resulting security risks.

To identify the password hash open a terminal on your Kali VM and start burpsuite.
```bash
burpsuite
``` 
Login to the OWASP Juice Shop using the built in webbrowser from burpsuite and then search for the JWT (Jason Web Token) in the Login Response.

<img width="1718" height="986" alt="burp1" src="https://github.com/user-attachments/assets/dcfe68be-87c7-442c-96f4-02aa3c4f1cd5" />


