---
lang: it
layout: page
title: Usa i nostri dati 
subtitle: Gli open data con le segnalazioni in emergenza da riutilizzare
permalink: /opendata/
---

Se usi i nostri dati non scordare di citarci come fonte (grazie!) e segnalacelo [scrivendoci una mail](mailto:ukrainehelpit@gmail.com) in modo che potremmo citarti tra gli utilizzatori di questo progetto!

## DATASET

In tabella trovi tutti i riferimenti ai dati raccolti e ridistribuiti da questo progetto assieme alla loro licenza di riuso.

{: .table .table-striped #opendata}
Nome            |Dataset         |Licenza         |Link Licenza    |Fonte           |Formato         |Note
:---------------|:---------------|:---------------|:---------------|:---------------|:---------------|:---------------
{% for member in site.data.opendata %} {{member.Nome}} | [Dataset]({{member.Dataset}}) | {{member.Licenza}} | [Link Licenza]({{member.Linklicenza}}) | [Fonte]({{member.Fonte}}) | {{member.Formato}} | {{member.Note}}
{% endfor %}

## Feed RSS

Puoi visualizzare tutti i nostri Feed RSS suddivisi per regione o per categoria di segnalazione [in questa pagina](/rss).
