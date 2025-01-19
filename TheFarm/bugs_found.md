## authentication 
- can generate auth token for ANY user
- can change country of any user
- can change Nickname of any user
- can access multiple endpoints without a token
- 500 error instead of appropriate errors when trying to leave off token
- exposed old api endpoints

## Information Disclosure
- Exposed userlist linking users to wallet addresses
- Exposed combat stats and mechanics in the JS
- Insecure JWT
- Insecure api calls (using unencoded params right in the URL instead of embedding encoded in the headers)
- Can view number of tickets someone has purchased

## Denial of service
- Can request large volumes of information from user reading endpoint, can cause db to go down

## Spoofing
- Can mock another user's logged in session and view assigned teams + stats

## Unresearched, but likely to exist

- DB SQL Injection Attack