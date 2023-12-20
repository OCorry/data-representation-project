# <span style = "color: darkred"> Data Representation Project </span>
*** 

## <span style = "color: darkred">Introduction</span>
***
This repository contains my project submission for *Data Representation* module as part of the Higher Diploma in Science in Data Analytics course at [ATU Galway](https://www.atu.ie/about-atu/campus-locations/atu-galway-city). 

The objective of this project is to write a program using ``Python`` which consumes RESTful Application Programming Interfaces [(or RESTful APIs)](https://www.ibm.com/topics/rest-apis) using Create, Read, Update and Delete (CRUD) operations.

The repository consists of the following:
1. A *[Flask](https://flask.palletsprojects.com/en/3.0.x/) server*
2. A *staticpages* folder which contains the following:
    - *candles.html* & *frames.html* which are the two web interfaces
    - *images* folder which contains images for the web interface 
    - *candlesAjax.js* & *framesAjax.js* which are the two javascript files containing the AJAX calls
3. *candlesDAO.py* & *framesDAO.py* files which contain code for connection to the [MySQL](https://dev.mysql.com/) database table and CRUD operations using MySQL commands.
4. *config.py* file which contains the login details for the Database. This file added to the [.gitignore](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files) so that the login details are ignored and do not appear in GitHub.
5. *requirements.txt* file which contains the imported framworks and interfaces required for the successful implementation of the Flask server and CRUD operations on the database tables.






## <span style = "color: darkred">Issues Encountered</span>
***
*line 190, in get_auth_plugin raise errors.NotSupportedError(mysql.connector.errors.NotSupportedError: Authentication plugin 'caching_sha2_password' is not supported*

https://www.askpython.com/python/examples/fix-caching_sha2_password-is-not-supported
https://www.askpython.com/python/examples/fix-caching_sha2_password-is-not-supported
