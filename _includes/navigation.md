{% assign current_nav_title = page.nav_title | default: page.title %}
{% for link in site.data.navigation.main reversed %}
  {% if link.right %}
    <a class="normal right" href="{{ link.url | relative_url | escape }}"{% if current_nav_title == link.title %} aria-current="page"{% endif %}>{{ link.title | escape }}</a>
    {% else %}
    <a class="normal" href="{{ link.url | relative_url | escape }}"{% if current_nav_title == link.title %} aria-current="page"{% endif %}>{{ link.title | escape }}</a>
  {% endif %}
{% endfor %}
