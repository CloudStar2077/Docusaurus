# Password Hash Leak

The "Password Hash Leak" challenge from the OWASP Juice Shop was successfully completed by identifying exposed password hashes and analyzing the resulting security risks.

To identify the password hash run burpsuite on your Kali VM, It lets you monitor and analyze web traffic and check websites for security weaknesses. It acts as an intermediary proxy between your browser and the target website, allowing you to inspect, capture, and modify HTTP and HTTPS traffic.

Log in to the OWASP Juice Shop using the built in webbrowser from burpsuite and search for the JWT (Jason Web Token) in the Login Response.

<img width="1464" height="898" alt="burp1" src="https://github.com/user-attachments/assets/62ed4787-9745-4ed1-a271-0cb47b45b42a" />

Anyone familiar with Base64 encoded strings will notice that the JWT looks very similar.
To decode base64 to plain text you can use Cyberchef ```https://gchq.github.io/CyberChef/```. Copy the JWT into cyberchef then analyze the plain text output.

:::important
A JWT is not encrypted—only encoded. Anyone who has the token can read the payload.
:::

<img width="1717" height="873" alt="cyberchef" src="https://github.com/user-attachments/assets/ee81ccd8-66cf-4ce9-84f9-549e2e95150f" />

You will notice something like this: ```"email":"admin@juice-sh.op","password":"0192023a7bbd73250516f069df18b500"```.
Based on its length and format (32 hexadecimal characters), the password value is consistent with an MD5 hash. However, the format alone does not prove that MD5 was used, as other data can have the same representation.

Use Hashcat with the rockyou.txt wordlist to perform a dictionary attack on the hash.
```bash
hashcat -m 0 -a 0 0192023a7bbd73250516f069df18b500 /usr/share/wordlists/rockyou.txt
```

<img width="782" height="549" alt="hashcat" src="https://github.com/user-attachments/assets/70937fc2-c01a-4db6-ba99-582ab668819c" />

Look at the Output and you will see that Hashcat successfully cracked the MD5 hash and recovered the original plaintext password (admin123).

This challenge taught us: Never write a password or password hash into a JWT. Never return password hashes to clients. The hash remains exclusively on the server side in the database. API responses contain only status and user information, without security data. Do not use MD5 anymore, as it is outdated and insecure. A best practice nowadays is to use a modern Key Derivation Function (KDF) like Argon2, which incorporates a unique salt for each password, ensuring that even identical passwords will always produce different hashes. But keep in mind that even a unique hash provides little protection if the original password is weak, use passwords that are long, complex, and truly random, combining uppercase and lowercase letters, numbers, and special characters. Furthermore, all communication must be encrypted via HTTPS/TLS. Without it, even a strong password is exposed in plaintext during transmission !

Edit the `juice-shop/lib/insecurity.ts` to close this vulnerbility

```bash
## comment out the insecure line ##
// jwt.sign(user, privateKey, { expiresIn: '6h', algorithm: 'RS256' })

## new more save line ##
jwt.sign({ id: user.id, email: user.email, role: user.role, isActive: user.isActive }, privateKey, { expiresIn: '6h', algorithm: 'RS256' })
```


https://www.loom.com/share/2e35d08b591f478da23e5687627a5a50











