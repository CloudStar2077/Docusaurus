# Password Hash Leak

The "Password Hash Leak" challenge from OWASP Juice Shop was successfully completed by identifying exposed password hashes and analyzing the resulting security risks.

To identify the password hash open a terminal on your Kali VM and start burpsuite.
```bash
burpsuite
``` 
Login to the OWASP Juice Shop using the built in webbrowser from burpsuite and then search for the JWT (Jason Web Token) in the Login Response.

<img width="1464" height="898" alt="burp1" src="https://github.com/user-attachments/assets/62ed4787-9745-4ed1-a271-0cb47b45b42a" />

Anyone familiar with Base64 encoded strings will notice that a JWT looks very similar.
To decode base64 to plain text you can use Cyberchef ```https://gchq.github.io/CyberChef/```. Copy the JWT into cyberchef then analyze the plain text output.

<img width="1717" height="873" alt="cyberchef" src="https://github.com/user-attachments/assets/ee81ccd8-66cf-4ce9-84f9-549e2e95150f" />

You will notice something like this: ```"email":"admin@juice-sh.op","password":"0192023a7bbd73250516f069df18b500"```.
Based on its length (32 hexadecimal characters) and format, the password value is consistent with an MD5 hash. However, the format alone does not prove that MD5 was used, as other data can have the same representation.

For decoding the Hash run hashcat using a Wordlist.txt
```bash
hashcat -m 0 -a 0 0192023a7bbd73250516f069df18b500 wordlist.txt
```

<img width="810" height="544" alt="hashcat" src="https://github.com/user-attachments/assets/eb93c95a-66c7-44fe-9934-0bb2fb08bd40" />

Look at the Output and you will see that Hashcat successfully cracked the MD5 hash and recovered the original plaintext password.






