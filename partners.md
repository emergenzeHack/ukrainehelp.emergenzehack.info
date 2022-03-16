---
lang: it
layout: page
title: Partners
subtitle: 
permalink: /partners/
---


{: .table .table-striped #opendata}
Nome            |Logo            |Descrizione           
:---------------|:---------------|:---------------|:---------------|:---------------|:---------------|:---------------
{% for member in site.data.partners %} [{{member.Nome}}]({{member.Link}}) | ![]({{member.Logo}}) | {{member.Descrizione}}
{% endfor %}
