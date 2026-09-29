<h2 id="contact">Contact</h2>

{% if site.email and site.email != '' %}
<p>Email: <a href="mailto:{{ site.email | escape }}">{{ site.email | escape }}</a></p>
{% endif %}
{% if site.affiliation and site.affiliation != '' %}
<p>{% if site.affiliation_link and site.affiliation_link != '' %}<a href="{{ site.affiliation_link | relative_url | escape }}">{{ site.affiliation | escape }}</a>{% else %}{{ site.affiliation | escape }}{% endif %}</p>
{% endif %}
