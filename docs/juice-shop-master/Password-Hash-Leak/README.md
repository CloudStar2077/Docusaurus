# Password Hash Leak

The "Password Hash Leak" challenge from OWASP Juice Shop was successfully completed by identifying exposed password hashes and analyzing the resulting security risks.

To identify the password hash run `burpsuite` on your Kali VM, its a Tool for intercepting, analyzing, and testing web traffic for security vulnerabilities.
It functions as a kind of "man-in-the-middle" proxy between your browser and the website. This allows it to capture, display, and modify all data traffic.

Log in to the OWASP Juice Shop using the built in webbrowser from burpsuite and search for the JWT (Jason Web Token) in the Login Response.

<img width="1464" height="898" alt="burp1" src="https://github.com/user-attachments/assets/62ed4787-9745-4ed1-a271-0cb47b45b42a" />

Anyone familiar with Base64 encoded strings will notice that the JWT looks very similar.
To decode base64 to plain text you can use Cyberchef ```https://gchq.github.io/CyberChef/```. Copy the JWT into cyberchef then analyze the plain text output.

<img width="1717" height="873" alt="cyberchef" src="https://github.com/user-attachments/assets/ee81ccd8-66cf-4ce9-84f9-549e2e95150f" />

You will notice something like this: ```"email":"admin@juice-sh.op","password":"0192023a7bbd73250516f069df18b500"```.
Based on its length and format (32 hexadecimal characters), the password value is consistent with an MD5 hash. However, the format alone does not prove that MD5 was used, as other data can have the same representation.

For decoding the Hash run `hashcat` using the rockyou.txt
```bash
hashcat -m 0 -a 0 0192023a7bbd73250516f069df18b500 /usr/share/wordlists/rockyou.txt
```

<img width="782" height="549" alt="hashcat" src="https://github.com/user-attachments/assets/70937fc2-c01a-4db6-ba99-582ab668819c" />

Look at the Output and you will see that Hashcat successfully cracked the MD5 hash and recovered the original plaintext password.








