# Password Hash Leak

The "Password Hash Leak" challenge from OWASP Juice Shop was successfully completed by identifying exposed password hashes and analyzing the resulting security risks.

To identify the password hash open a terminal on your Kali VM and start burpsuite.
```bash
burpsuite
``` 
Login to the OWASP Juice Shop and then search for the JWT (Jason Web Token) in the Login Response.


