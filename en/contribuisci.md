---
layout: page
title: "How activate your community?"
subtitle: "Contribute to EuropeHelp.info!"
permalink: en/contribute/
lang: en
---

The project is open in terms of code, data and in terms of approaches to informations and process to collect.

We need the help of active citizens of the world in other to be help people in different countries.

Our project is [Github](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info) based. If you don't know Github you can look at [this video](https://www.youtube.com/watch?v=noZnOSpcjYY&t) as introduction.

## Are you are interested in development of this project?

You can contribute in different ways:

* Are you a software developer o civic hacker? Ok. You can start to open issues, discuss here and make a part of job on Github [here](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/issues). You can also read our wiki for developers [here](https://www.europehelp.info/en/wiki/) and we wait for you pull requests!

* Do you have other active citizens or associations? Ok. You can also contribute to the setup in your country languages, translate part of the website and deploy your version or you can send your request of reuse with a specific issue [here](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/issues).

## How organize your community and crowdsource your reports?

In addition to civic hacker community the most important part of the project is composed by a Reports Moderation Team.

You need one Moderation Team active for your country (in order to moderate and verify every report that you receive).

When you are ready with this please open an issue [here](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/issues/new?title=%5BNewCollaboration%5D), describing your community and your situation so we can abilitate the possibility to send reporting and collect your data for your country using the same process and platform!

Here the basic step to integrate you in our platform (we can support you in this procedure), you need:

### On Slack
- At least a [Slack](https://slack.com/intl/en-it/) account to contact us. We will create a Slack channel for coordination with you.

### On Github (if you are not able to create your Github repos, don't worry we will support you!)
- At least a [Github](www.github.com) Account to moderate issues and make modifications to the web platform. We will create a Github editor group for reports management.

- A Github Repo to store the reports [like this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info_segnalazioni/issues) is necessary in order to organize reporting with labels and in order to make moderation with your moderation team.
Be sure that you have defined the list of LABELS to organize your reports in categories in this repo (example: request of help, news, fake news etc etc...). This will be the reports repo of your platform
Remark, two labels are mandatory and are in English:
  - "accepted" label, to mark the accepted reports by Moderation Team.
  - "position" label, to mark the label with position.

- A Github Repo to store platform data [like this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info_data) to store moderated reports dataset This will be the data repo of your platform.

- A branch of our master platform branch on Github. This will be the main repo of your platform. We will provide a branch and a first domain. You can indicate your specific domain, we try to manage a redirect on the right web page.

#### Technical remarks for GitHub Side

To configure the platform these are the main steps (please change your files in your repo and in your branch, possibly with PULL REQUEST on Github). In the main repo:
- General Configuration Site Data are stored in **_config.yml** file. An example is [this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/blob/master/_config.yml)
- Home Page main objects are configurable in **index.html** file. An example is [this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/blob/master/index.html)
- Reports Categories are configurable in **cfg/issuecategories.yml** file. An example is [this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/blob/master/_data/cfg/issuecategories.yml)
- Logos of Home Page are configurable in **cfg/logos.yml** file. An example is [this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/blob/master/_data/cfg/logos.yml)
- NavBar Menu is configurable in **i18n/navigation.yml** file. An example is [this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/blob/master/_data/i18n/navigation.yml)
- Generic Translation file in **i18n/translations.yml** file. An example is [this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/blob/master/_data/i18n/translations.yml)
- Region List is configurable in **geo/regioni.json** file. An example is [this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/blob/master/_data/geo/regioni.json)
- City List is configurable in **geo/province.json** file. An example is [this one](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/blob/master/_data/geo/province.json)

- For each page of the site you can configure a permalink (remember that if you change the permalink you need to update the reference to this link in all the website, so is better let them as default), title (subtitle).

In the reports repo:
- Just add in the section of issue labels the list of the labels [like this](https://docs.google.com/spreadsheets/d/1a3N9kTjEs3FCzfw0_MmxYXq8z87m12kR-BndiFQfNEU/edit#gid=0). Remember that this list is a mandatory standard. Then you can add more labels if you need or not use some label. Except for the reports management with labels, data repo contain only data automatically generated by platform inside.

### On Formio Toolbox
- To create a form from scratch you need to use Formio [here](https://formio.github.io/formio.js/app/builder), once you have create the form copy and paste the script in the box "as JSON Schema" and attacth it to an issue [here](https://github.com/emergenzehack/ukrainehelp.emergenzehack.info/issues) and ask what you want to do with this form.

#### Technical remarks for Backend Setup
- On Formio each form must have a service called "Backend" configured with endpoint to backendscript, JSON format and one header called "label" that must have the value of standard label that form has to put to issue sending in reports repo (example "fake news"), this is done with a "text box" hidden where the value of the label is forced at default value.


### How works the workflow process to moderate Reports?
- Webforms will be deploied in a way that for every report submission an issue will be created in the reports repo on Github. This report will have the label related to category of the webform used.
- Moderation Team can add to the report the "approved" label (after a verification of the reports) in order to send issue in the data of the project.
- Moderation Team can add additional labels (optionally) if is necessary.
- Each page of the website receive (automatically) approved reports with the labels configured to be received for that page.

Here a simple diagram of how our project works.

![](https://raw.githubusercontent.com/emergenzeHack/covid19italia/master/images/process1.jpg)

**So since your comunity will integrated, your Moderation Team will be able to see in the Github Reports repo submitted reports, will accept the reports and then the reports will be publish on the website.**

**Our Moderation Team suggest a [policy like this one](../policy/) to manage reports and socials.**

Here a little diagram to explain how the project is organized in multi-country configuration.

**We wait you! Thanks!**

![](https://raw.githubusercontent.com/emergenzeHack/covid19italia/master/images/diagramma%20(1).png)
