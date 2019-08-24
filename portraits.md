---
title: Portraits
layout: default
type: home
order: 3
---

<div class="section">
	<div class="container">
		<h3 class="section-heading">{{ page.title }}</h3>
		<p class="section-description">
			I try to make people pose sometimes.
		</p>
		{% assign mypages = site.pages | where: "type", "home" | sort: "order" %}
		{% for page in mypages %}
		<a class="button button-primary" href="{{ page.url | relative_url }}">{{ page.title }}</a>
		{% endfor %}
	</div>
</div>
<div class="section">
	<div class="container">
		{% assign mypages = site.pages | where: "type", "portrait" %}
		{% for page in mypages %}
		<a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
		{% endfor %}
	</div>
</div>