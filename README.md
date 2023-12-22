# Data Representation Project
</br>

## Introduction

This repository contains my project submission for *Data Representation* module as part of the Higher Diploma in Science in Data Analytics course at [ATU Galway](https://www.atu.ie/about-atu/campus-locations/atu-galway-city). 

The objective of this project is to write a program using ``Python`` which consumes RESTful Application Programming Interfaces [(or RESTful APIs)](https://www.ibm.com/topics/rest-apis) using Create, Read, Update and Delete (CRUD) operations.

I have carried this out on my local machine and I have also hosted my work to *PythonAnywhere*. The links to my two html pages hosted on *PythonAnywhere* are <mark>[https://orlacorry1.pythonanywhere.com/candles.html](https://orlacorry1.pythonanywhere.com/candles.html)</mark> and <mark>[https://orlacorry1.pythonanywhere.com/frames.html](https://orlacorry1.pythonanywhere.com/frames.html)</mark>. 
</br>

## Contents of the Repository

The repository consists of the following:
1. A *[Flask](https://flask.palletsprojects.com/en/3.0.x/) server*
2. A *staticpages* folder which contains the following:
    - *candles.html* & *frames.html* which are the two web interfaces
    - *images* folder which contains images for the web interface 
    - *candlesAjax.js* & *framesAjax.js* which are the two javascript files containing the AJAX calls
3. *candlesDAO.py* & *framesDAO.py* files which contain code for connection to the [MySQL](https://dev.mysql.com/) database table and CRUD operations using MySQL commands.
4. *config.py* file which contains the login details for the Database. This file added to the [.gitignore](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files) so that the login details are ignored and do not appear in GitHub.
5. *requirements.txt* file which contains the imported framworks and interfaces required for the successful implementation of the Flask server and CRUD operations on the database tables.
</br>

## Setup of the Environment:

1. Download and install [anaconda](https://www.anaconda.com/download) programming Language to carry out Python code 
2. Download and install [cmder](https://cmder.app/) console for Windows
    - For navigating through folders on my machine, 
    - To use as a terminal for starting the Flask server, 
    - For carrying out [curl](https://curl.se/) on the server code.
    - For creating and activate a Virtual Environment (venv)
    - For installing packages in the venv
3. Download and install [Visual Studio Code](https://code.visualstudio.com/download) code editor on which I have ran my Python code
4. Set up an account with [PythonAnywhere](www.pythonanywhere.com) to host the web application.
</br>

## Set up of GitHub Repository

I have set up this repository titled **Data-Representationon-Project** on [GitHub](https://github.com/) and kept it public so that the content can be accessed publically - I included this *README.md* file and a *.gitignore* file in which any files I do not want to be shown on my GitHub are stored. I then cloned the repository down to my own machine so I can work on it on my own machine. I have made regular commits back up to GitHub on new pieces of work I have added to the project.
</br>

## Use of Python Virtual Environment 

I have used a virtual environment (venv) on my machine for this project. Using a venv allows the user to restrict the number of Python packages available on the environment to just the ones required. This is important when it comes to Hosting so that unnecessary Python packages are not pushed to the Hosting site.

To do this, inside the Repository folder on my machine I type ``python -m venv venv`` and hit return to create the environment and then type ``.\venv\Scripts\activate.bat`` and hit return to activate the environment.

Using the ``pip install`` command in Cmdr the required packages are installed. For this project, I installed **Flask** and **mysql-connector**. Using the ``pip freeze > requirements.txt`` command, this pushes the installed packages into the requirements.txt file. This means that if another user wants to run the project on another machine, all the required libraries/packages stored in the file so the next user knows that is needed to run it.

To run the server in the venv, type ``python rest_server.py`` and hit return. This will bring up a local host *http://127.0.0.1:5000*. When this link is searched on it's own **Not Found** will show as it is not directed to any endpoint. To direct it add [/candles](http://127.0.0.1:5000/candles) or [/frames](http://127.0.0.1:5000/frames) to show the JSON content. Adding [/candles.html](http://127.0.0.1:5000/candles.html) or [/frames.html](http://127.0.0.1:5000/frames.html) will bring you to the html pages.
</br>

## Setting up MySql Database

Using [MySql](https://www.mysql.com/) I have set up a database and created two tables in the database called *candles* and *frames*. These database tables are linked to the server through the *candlesDAO.py* and *frames.DAO.py* using``mysql.connector``.
</br>

## Hosting the Server

I have hosted the server on [PythonAnywhere](www.pythonanywhere.com). This involved creating a new account on the PythonAnywhere website. I then created a new repository on GitHub - I have called it *deploytopythonanywhere* which can be found [here](https://github.com/OCorry/deploytopythonanywhere). I cloned the repository to my machine and copied and pasted all of my files & folders from this repository to it. On PythonAnywhere, I created a new database with different login details so these had to be changed on my *config.py* file so that the program would work on the host. Using the bash consol on PythonAnywhere, I then pulled the code down. This has allowed me to host my server. 
</br>

## References:
For this project, I have sourced the majority of my code from my Lecturer Andrew Beatty's Lectures, code and notes. These can be found on his [GitHub repository](https://github.com/andrewbeattycourseware/datarepresentation/tree/main).
</br>

#### Other references I have used for this project 

* Bootstrap:
    * https://getbootstrap.com/

* CSS:
    * W3schools CSS Backgrounds. https://www.w3schools.com/css/css_background.asp
    * W3schools CSS Layout - Horizontal & Vertical Align. https://www.w3schools.com/css/css_align.asp 
    * W3schools. CSS Table Alignment. https://www.w3schools.com/css/css_table_align.asp
    * W3schools. How TO - Center Tables. https://www.w3schools.com/howto/howto_css_table_center.asp
    * W3schools. CSS Text. https://www.w3schools.com/css/css_text.asp 
    * W3schools. How TO - Center a Button in DIV. https://www.w3schools.com/howto/howto_css_center_button.asp 
    * W3schools. CSS Buttons .https://www.w3schools.com/css/css3_buttons.asp 


* Italics: 
    * W3schools. HTML Text Formatting. https://www.w3schools.com/html/html_formatting.asp 


* Underline: 
    * W3schools. HTML <u> Tag. https://www.w3schools.com/tags/tag_u.asp 


* Images:
   * w3schools. How TO - Center Images. https://www.w3schools.com/howto/howto_css_image_center.asp 
   * https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOaoJ2jzpNqJKPO2FM7BGtlbc8g92ymkvuA&usqp=CAU
   * https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhJkwfjyVBV75w2IDv_gKwMzlbZmZ9dVD7w&usqp=CAU

* File Paths:
    * w3schools. HTML File Paths. https://www.w3schools.com/html/html_filepaths.asp

* HTML links:
    * w3schools HTML Links. https://www.w3schools.com/html/html_links.asp

* Importing Javascript files to the HTML files 
    * w3schools. ``HTML <script> src Attribute`` https://www.w3schools.com/tags/att_script_src.asp

* MySql Connector error
    * Kaur. Gurpreet. Ask Python. Fix Error “Authentication plugin ‘caching_sha2_password’ is not supported”(27/11/2023) </br> 
    https://www.askpython.com/python/examples/fix-caching_sha2_password-is-not-supported
    

    * Jaju. Anupriya stackoverflow. Authentication plugin 'caching_sha2_password' is not supported (30/01/2019) 
    </br>
    https://stackoverflow.com/questions/50557234/authentication-plugin-caching-sha2-password-is-not-supported

