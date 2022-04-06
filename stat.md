---
lang: it
layout: page
title: Statistiche
subtitle: Statistiche sulle segnalazioni
permalink: /stat/
---

<script src="//cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js"></script>

<div id="statplot"></div>


<script>
    Bokeh.set_log_level("debug");
    Bokeh.embed.embed_item({{ site.data.plot.plot | jsonify }})
</script>

