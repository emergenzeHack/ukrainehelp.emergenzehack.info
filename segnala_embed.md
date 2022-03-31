---
# AAA Questa pagina potrebbe essere embedded in molti siti (es. ARCI).
# Per favore verificare la funzionalita' prima di fare push su repo
lang: it
layout: bare
title: Segnala
permalink: /segnala_embed/
---

<div class="offset-md-3 col-md-6">

    {%- for type in site.data.i18n.issues.forms -%}
      
      {% if type.path == '/forms/segnala_help_page' %}
    
        <a class="btn btn-success btn-lg btn-block btn-form" href="{{type.path}}">{{type[page.lang]}}</a>
    
      {%- else -%}
    
        <a class="btn btn-outline-dark btn-lg btn-block btn-form" href="{{type.path}}">{{type[page.lang]}}</a>
    
      {% endif %}
    
    {%- endfor -%}

<div class="text-center"><a href="https://ukrainehelp.emergenzehack.info">Maggiori informazioni su ukrainehelp.emergenzehack.info</a></div>
</div>
