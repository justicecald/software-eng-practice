============================================
============================================
## EXAMPLE DOCUMENTATION
### Ask for the Home Page
#### Step 1
Predicted Request components:
- Method: GET
- URL: /
- Headers: none
- Body: none

Predicted Response components:
- Status Code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page with navigation links to other pages

#### Step 2
In your browser open the chrome dev tools, navigate to [http://localhost:5000] and make a GET request for the Home Page (type "/" into the URL after 5000 and hit "enter").
Explore the "network" tab and find where you can compare your predicted request/response components to the actual components.

#### Step 3
If your prediction was wrong, try to understand why it was incorrect and then update your documentation to the correct request/response components.

Congratulations! You have performed a GET request to / showing the home page of our e-commerce
website. Move on to the next request/response documentation.

* Note
    - Headers contain many keys, but for this exercise focus on **Content-Type** and **Location**.
 
=============================================
=============================================

### Ask for a page that doesn't exist

Request components:
- Method: 
- URL:
- Headers:
- Body:

Response components:
- Status code:
- Headers: 
- Body:

### Ask for the products list page

Request components:
- Method: GET
- URL: /products
- Headers:
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Connection: keep-alive
    Host: localhost:3030
    Referer: http://localhost:3030/
    Sec-Ch-Ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
    Sec-Ch-Ua-Mobile: ?0
    Sec-Ch-Ua-Platform: "macOS"
    Sec-Fetch-Dest: document
    Sec-Fetch-Mode: navigate
    Sec-Fetch-Site: same-origin
    Sec-Fetch-User: ?1
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
- Body: None

Response components:
- Status code: 200 OK
- Headers:
    Connection: keep-alive
    Content-Length: 888
    Content-Type: text/html; charset=utf-8
    Date: <Date>
    Keep-Alive: timeout=5
    X-Powered-By: Express
- Body: <HTML Webpage>

### Ask for the product detail page

Here's an example product on the server:

| detail      | value                                                      |
| ----------- | ---------------------------------------------------------- |
| productId   | 1                                                          |
| name        | "Facial Cleansing Brush"                                   |
| description | "Reaches deep pores to cleanse oil, dirt, and blackheads." |
| price       | 23.99                                                      |
| categories  | "beauty", "electronics"                                    |

Request components:
- Method: GET
- URL: /products/:productID
- Headers: 
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Connection: keep-alive
    Host: localhost:3030
    Referer: http://localhost:3030/products
    Sec-Ch-Ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
    Sec-Ch-Ua-Mobile: ?0
    Sec-Ch-Ua-Platform: "macOS"
    Sec-Fetch-Dest: document
    Sec-Fetch-Mode: navigate
    Sec-Fetch-Site: same-origin
    Sec-Fetch-User: ?1
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
- Body: None

Response components:
- Status code: 200 OK
- Headers: 
    Connection: keep-alive
    Content-Length: 1674
    Content-Type: text/html; charset=utf-8
    Date: <Date>
    Keep-Alive: timeout=5
    X-Powered-By: Express
- Body: <HTML Webpage>

### Ask for the create new product page

Request components:
- Method: GET
- URL: /products/new
- Headers:
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Connection: keep-alive
    Host: localhost:3030
    Referer: http://localhost:3030/products/1
    Sec-Ch-Ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
    Sec-Ch-Ua-Mobile: ?0
    Sec-Ch-Ua-Platform: "macOS"
    Sec-Fetch-Dest: document
    Sec-Fetch-Mode: navigate
    Sec-Fetch-Site: same-origin
    Sec-Fetch-User: ?1
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
- Body: None

Response components:
- Status code: 200 OK
- Headers: 
    X-Powered-By: Express
    Content-Type: text/html; charset=utf-8
    Content-Length: 1449
    Date: <Date>
    Connection: keep-alive
    Keep-Alive: timeout=5
- Body: <HTML Webpage>

### Submit a new product

Remember, for a traditional HTML web server, whenever a successful `POST`
request is sent to the server, the server should respond with a redirection to
a page.

After successful submission, user should be looking at the product detail page.

Here are the categories on the server:

| tag         | name           |
| ----------- | -------------- |
| grocery     | Grocery        |
| electronics | Electronics    |
| beauty      | Beauty         |
| toys-games  | Toys and Games |
| health      | Health         |
| furniture   | Furniture      |
| clothing    | Clothing       |

* Note: In Chome dev tools, if the "body" of a request exists, it will appear 
in the network tab as "payload".

Request components:
- Method: POST
- URL: /products
- Headers: 
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Cache-Control: max-age=0
    Connection: keep-alive
    Content-Length: 98
    Content-Type: application/x-www-form-urlencoded
    Host: localhost:3030
    Origin: http://localhost:3030
    Referer: http://localhost:3030/products/new
    Sec-Fetch-Dest: document
    Sec-Fetch-Mode: navigate
    Sec-Fetch-Site: same-origin
    Sec-Fetch-User: ?1
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
    sec-ch-ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
    sec-ch-ua-mobile: ?0
    sec-ch-ua-platform: "macOS"
- Body: name=Test+Product&description=New+cleaning+product+by+Company+A&price=10.99&categories=electronics

Response components:
- Status code: 302 Found
- Headers:
    X-Powered-By: Express
    Location: /products/2
    Vary: Accept
    Content-Type: text/html; charset=utf-8
    Content-Length: 66
    Date: Tue, 30 May 2023 02:46:03 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
- Body: None

### Ask for the edit product page

Request components:
- Method: GET
- URL: /products/:productID/edit
- Headers: 
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Connection: keep-alive
    Host: localhost:3030
    Referer: http://localhost:3030/products/2
    Sec-Fetch-Dest: document
    Sec-Fetch-Mode: navigate
    Sec-Fetch-Site: same-origin
    Sec-Fetch-User: ?1
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
    sec-ch-ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
    sec-ch-ua-mobile: ?0
    sec-ch-ua-platform: "macOS"
- Body: None

Response components:
- Status code: 200 OK
- Headers: 
    X-Powered-By: Express
    Content-Type: text/html; charset=utf-8
    Content-Length: 1559
    Date: Tue, 30 May 2023 02:48:58 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
- Body: <HTML Webpage>

### Submit an edit for an existing product

After successful submission, user should be looking at the product detail page.

Request components:
- Method: POST
- URL: /products/:poroductID
- Headers: 
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Cache-Control: max-age=0
    Connection: keep-alive
    Content-Length: 101
    Content-Type: application/x-www-form-urlencoded
    Host: localhost:3030
    Origin: http://localhost:3030
    Referer: http://localhost:3030/products/2/edit
    Sec-Fetch-Dest: document
    Sec-Fetch-Mode: navigate
    Sec-Fetch-Site: same-origin
    Sec-Fetch-User: ?1
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
    sec-ch-ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
    sec-ch-ua-mobile: ?0
    sec-ch-ua-platform: "macOS"
- Body: None

Response components:
- Status code: 302 Found
- Headers:
    X-Powered-By: Express
    Location: /products/:productID
    Vary: Accept
    Content-Type: text/html; charset=utf-8
    Content-Length: 66
    Date: Tue, 30 May 2023 02:50:24 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
- Body: Webpage

### Submit a delete for an existing product

After successful submission, user should be looking at the products list page.

Request components:
- Method: POST
- URL: /products/:productID/delete
- Headers: 
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Cache-Control: max-age=0
    Connection: keep-alive
    Content-Length: 0
    Content-Type: application/x-www-form-urlencoded
    Host: localhost:3030
    Origin: http://localhost:3030
    Referer: http://localhost:3030/products/2
    Sec-Fetch-Dest: document
    Sec-Fetch-Mode: navigate
    Sec-Fetch-Site: same-origin
    Sec-Fetch-User: ?1
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
    sec-ch-ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
    sec-ch-ua-mobile: ?0
    sec-ch-ua-platform: "macOS"
- Body: None

Response components:
- Status code: 302 Found
- Headers:
    X-Powered-By: Express
    Location: /products
    Vary: Accept
    Content-Type: text/html; charset=utf-8
    Content-Length: 62
    Date: <Date>
    Connection: keep-alive
    Keep-Alive: timeout=5
- Body: Webpage

### Submit a new review for a product

After successful submission, user should be looking at the product detail page.

Here's an example review on the server:

| detail     | value                  |
| ---------- | ---------------------- |
| reviewId   | 1                      |
| comment    | "I love this product!" |
| starRating | 5                      |
| productId  | 1                      |

Request components:
- Method: 
- URL: 
- Headers:
- Body:

Response components:
- Status code: 
- Headers: 
- Body: 

### Ask for the edit review page for a product

Request components:
- Method: 
- URL: 
- Headers: 
- Body: 

Response components:
- Status code: 
- Headers:
- Body: 

### Submit an edit for an existing review

After successful submission, user should be looking at the product detail page.

Request components:
- Method: 
- URL: 
- Headers:
- Body: 

Response components:
- Status code: 
- Headers: 
- Body:

### Submit a delete for an existing review

After successful submission, user should be looking at the product detail page.

Request components:
- Method:
- URL: 
- Headers: 
- Body: 

Response components:
- Status code: 
- Headers: 
- Body: 

### Ask for all the products in a particular category by tag of the category

Request components:
- Method: 
- URL: 
- Headers: 
- Body: 

Response components:
- Status code: 
- Headers:
- Body: 

### Ask for the best-selling product

Look for clues in the HTML pages from the prior responses for what the route should be.

Request components:
- Method: 
- URL: 
- Headers: 
- Body: 

Response components:
- Status code: 
- Headers:
- Body: 