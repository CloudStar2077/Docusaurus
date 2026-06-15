# Password Hash Leak

The "Password Hash Leak" challenge from OWASP Juice Shop was successfully completed by identifying exposed password hashes and analyzing the resulting security risks.

To identify the password hash open a terminal on your Kali VM and start burpsuite.
```bash
burpsuite
``` 
Login to the OWASP Juice Shop using the built in webbrowser from burpsuite and then search for the JWT (Jason Web Token) in the Login Response.

<img width="1464" height="898" alt="burp1" src="https://github.com/user-attachments/assets/62ed4787-9745-4ed1-a271-0cb47b45b42a" />



