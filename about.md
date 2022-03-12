---
layout: page
title: Che cos'è EmergenzaHelp? La risposta all'emergenza del civic hacking
subtitle: Scopri come funziona la piattaforma, come e da chi viene sviluppata
permalink: /about/
lang: it
---
  
## Il Progetto

Questo è un progetto non profit di civic hacking, organizzato e diretto interamente da volontarie e volontari. È nato per condividere informazioni utili e verificate a supporto della popolazione dell’Ucraina sottoposta nel febbraio 2022 ad un attacco militare da parte della Russia.

Lo scopo del progetto è raccogliere, verificare, aggregare e diffondere informazioni utili che possano essere di aiuto agli e alle ucraine in difficoltà per la guerra, in particolare alle persone costrette a lasciare il proprio Paese. 

La piattaforma raccoglie richieste di aiuto e segnalazioni di vario tipo, dalle iniziative solidali di enti e associazioni ai servizi di supporto e assistenza per i rifugiati, dalle raccolte di beni di prima necessità alle offerte di ospitalità e trasporto. E poi informazioni istituzionali, raccolte fondi (solo se finanziano iniziative civili e non operazioni belliche o acquisto di forniture militari) e fake news prodotte dalla propaganda militare o relative a false azioni di solidarietà (ad esempio truffe ai danni di rifugiati, false raccolte fondi, ecc.).  

Il progetto non intende in alcun modo sostituirsi a fonti istituzionali di informazione e supporto.

Il progetto si rivolge a tutte le persone che sono interessate a ciò che sta accadendo in Ucraina e che vogliono attivarsi (anche da casa), in modo pacifico e solidale, per dare una mano al popolo ucraino.


## Statistiche

{% assign labels = "Servizi e iniziative solidali private,Servizi e iniziative solidali pubbliche,Consegne e commissioni,Fake News,Donne,Raccolte fondi,Supporto psicologico,Didattica a distanza e-learning,Fonti istituzionali,Informazioni utili,Notizie" | split: ',' %}

Fino ad ora, abbiamo gestito
{% for valore in site.data.statisticheSegnalazioni %} {% if valore.Tipo == "Segnalazioni totali" %} <b>{{valore.Valore}}</b> {% endif %} {% endfor %} segnalazioni, accettandone e verificandone {% for valore in site.data.statisticheSegnalazioni %} {% if valore.Tipo == "Accettate" %} <b>{{valore.Valore}}</b>{% endif %}{% endfor %}, così distribuite:
{% for valore in site.data.statisticheSegnalazioni %} {% if labels contains valore.Tipo %}
- {{ valore.Valore }} {{ valore.Tipo }} {% endif %} {% endfor %}

## Riuso

Ogni componente software che sviluppiamo è rilasciato con una licenza Open Source che ne permette il riuso e ne promuove lo sviluppo pubblicamente.

I dati che raccogliamo e produciamo vengono pubblicati e tenuti aggiornati come [Open Data]({{ site.url }}/opendata/).

Laddove lo si ritenga utile, tutta l’infrastruttura è ri-usabile da organizzazioni, associazioni, gruppi informali ed anche governi e pubbliche amministrazioni che avessero bisogno di un servizio per informare e promuovere la partecipazione dei cittadini per rispondere ad una emergenza di qualsiasi tipo e in qualsiasi parte dell’Europa e del mondo.

Il progetto è descritto tramite il nostro [wiki](https://github.com/emergenzeHack/europehelp.info/wiki).

L'idea e buona parte del progetto è del gruppo di civic hacker [emergenzeHack](https://emergenzehack.github.io), la stessa squadra che ha sviluppato nel 2016 il progetto [TerremotoCentroItalia](https://www.terremotocentroitalia.info) e nel 2020 [Covid19Italia.help](https://www.covid19italia.help)

## Chi siamo

Ecco la squadra di volontari che lavora a questo progetto:

### Sviluppo

<div class="row contributorRow">
	{% for contributore in site.data.contributorsCore %}
		<div class="col-md-2 col-sm-2 col-xs-3" style="text-align: center">
			<img src="{{ contributore.avatarUrl }}" alt="Avatar" class="contributorImage img-circle">
			<br>
			<p class="contributorName">{{ contributore.name }}</p>
		</div>
	{% endfor %}
</div>

### Editors

<div class="row contributorRow">
	{% for contributore in site.data.contributorsEditors %}
		<div class="col-md-2 col-sm-2 col-xs-3" style="text-align: center">
			<img src="{{ contributore.avatarUrl }}" alt="Avatar" class="contributorImage img-circle">
			<br>
			<p class="contributorName">{{ contributore.name }}</p>
		</div>
	{% endfor %}
</div>

### Media e comunicazione

<div class="row contributorRow">
	{% for contributore in site.data.contributorsMedia %}
		<div class="col-md-2 col-sm-2 col-xs-3" style="text-align: center">
			<img src="{{ contributore.avatarUrl }}" alt="Avatar" class="contributorImage img-circle">
			<br>
			<p class="contributorName">{{ contributore.name }}</p>
		</div>
	{% endfor %}
</div>

### Partners

<div>
	{% for partner in site.data.partners %}
		<img height="80px" src="{{ partner.Logo }}"> <br>
		<a href="{{ partner.Link }}"> {{ partner.Nome }} </a> {{ partner.Descrizione }} <br> <br>

	{% endfor %}
</div>

### Network

<div>
	{% for network in site.data.network %}
		<a href="{{ network.Link }}"> {{ network.Nome }} </a> {{ network.Descrizione }} <br> <br>
	{% endfor %}
</div>

### Contatti

- [Email](mailto:europehelp.info@gmail.com)
- [Repository Github](https://github.com/emergenzeHack/europehelp.info)

### Tecnologie e Progetti Riusati

- [Beautiful Jekyll](https://deanattali.com/beautiful-jekyll/)
- [Maptune](https://github.com/gjrichter/maptune)
- [Mapstraction](http://mapstraction.com)
- [Leaflet](http://leafletjs.com)
- [Mapicons](http://mapicons.nicolasmollet.com)
- [Bootstrap](http://getbootstrap.com/)
- [Glyphicons](http://glyphicons.com)
- [Jekyll](https://jekyllrb.com/)
- [Github](http://www.github.com)
- [Formio](https://formio.github.io/formio.js/#)
- [TerremotoCentroItalia](http://www.terremotocentroitalia.info)

