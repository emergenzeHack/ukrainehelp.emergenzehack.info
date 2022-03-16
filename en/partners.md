---
lang: en
layout: page
title: Partners
subtitle: 
permalink: /partners/
---


{: .table .table-striped #opendata}
Name            |Logo            |Description           
:---------------------------------------------|:-------------|:---------------|:---------------|:---------------|:---------------|:---------------
{% for member in site.data.partners %} [{{member.Nome}}]({{member.Link}}) | ![]({{member.Logo}}) | {{member.Descrizione}}
{% endfor %}


<style>
table th:first-of-type {
    width: 10%;
}
table th:nth-of-type(2) {
    width: 10%;
}
table th:nth-of-type(3) {
    width: 50%;
}
table th:nth-of-type(4) {
    width: 30%;
}
</style>

