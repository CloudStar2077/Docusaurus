# Extracting user login credentials via SQL injection

As part of this project, the "SQL injection" vulnerability in the OWASP Juice Shop application was investigated. The goal of the challenge was to gain access to 
stored user credentials by exploiting an insecure database query.

To solve this Challenge run `burpsuite` on your Kali VM, its a Tool for intercepting, analyzing, and testing web traffic for security vulnerabilities. It functions as a kind of "man-in-the-middle" proxy between your browser and the website. This allows it to capture, display, and modify all data traffic.

The first step was to find a vulnerable endpoint where SQL could be injected. Any field that retrieves data from the database is a potential candidate. Login forms and search bars are common targets. For this challenge the login endpoint doesnt solved the challenge so it made sense to take advantage of the search bar. Search for a product e.g. "apple" then look into the `burpsuite`
http-history to find the request and send it to the burpsuite repeater.

<img width="1532" height="913" alt="burpsuite" src="https://github.com/user-attachments/assets/dd85098c-6b1c-4128-b0c9-dabd81e50068" />

To retrieve data from multiple tables, SQL provides the UNION operator. Its required because it is the only SQL operator that allows combining results from different tables into a single query response. Without it, the endpoint would only return data from the intended table (e.g., products) and not from other tables such as user data. For a UNION query to work, both SELECT statements must return the same number of columns and compatible data types.
To find out the number of columns, edit the search request located in the repeater by appending "appel" after `GET /rest/products/search?q=` and then send the request. 

<img width="1332" height="958" alt="burpsuite2" src="https://github.com/user-attachments/assets/586bfa09-fee1-4a63-9a66-53bbb751786d" />

Looking at the response, you can see a JSON array containing several objects, each with 9 fields. This suggests that the underlying SQL query returns 9 columns. With this information, we can prepare the SQL payload.
