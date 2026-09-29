---
layout: homepage
title: About
seo_title: Avery Researcher | Academic Homepage Demo
---

<p class="demo-notice"><strong>Template demo.</strong> Avery Researcher, Example University, and all research, news, and activities below are fictional examples.</p>

<div class="about-heading">
  <h1 id="about-me">{{ site.title }}</h1>
  <p class="about-tagline">Open science, thoughtful experiments, and useful models</p>
</div>

<div class="about-intro" markdown="1">

{% if site.avatar and site.avatar != "" %}
<figure class="about-portrait">
  <img src="{{ site.avatar | relative_url }}" alt="Illustrated placeholder portrait for Avery Researcher" />
  <figcaption>Example University · Demo profile</figcaption>
</figure>
{% endif %}

{% include scholar-stats.html %}

Hello! I am **Avery Researcher**, a fictional doctoral researcher at **Example University**. This academic homepage demonstrates a place to introduce your research, share publications, and keep a record of teaching and service.

My example research connects **scientific modeling**, **data analysis**, and **open research practices**. I am interested in building understandable models and sharing the tools that make scientific work reproducible.

Outside the lab, I enjoy hiking, photography, and learning new things. Replace this introduction with your own background, research questions, and interests.

</div>

<div class="about-mentoring" style="border: 1px solid var(--site-border); padding: 11px; background-color: var(--site-surface); color: var(--site-card-text); border-radius: 5px;">
  <strong>Example announcement:</strong> Use this space for an opportunity, a recent project, or an invitation to collaborate.
</div>

{% include news.md %}

{% include publications.md selected_only=true %}
