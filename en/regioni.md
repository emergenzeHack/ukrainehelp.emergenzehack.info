---
lang: en
layout: page
title: "Emergency: reports in italian regions"
subtitle: Reports for every Italian Region
permalink: en/issues/region/
---


<div class="row">
{%- for regione in site.data.geo.regioni -%}
<div class="col-md-6 col-sm-12 col-xs-12 mb-15">
	  <a href="{{site.url}}/issues/regione/{{regione.nome_regione | replace: "'", "" | slugify}}/" class="btn btn-primary btn-block" title="See all reports for italian region {{regione.nome_regione}}">{{regione.nome_regione}}</a>
</div>
{%- endfor -%}
</div>

