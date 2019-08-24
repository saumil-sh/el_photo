---
title: About
layout: default
type: home
order: 2
---

<div class="section">
	<div class="container">
		<h3 class="section-heading">{{ page.title }}</h3>
		<p class="section-description">
			My secrets.
		</p>
		{% assign mypages = site.pages | where: "type", "home" | sort: "order" %}
		{% for page in mypages %}
		<a class="button button-primary" href="{{ page.url | relative_url }}">{{ page.title }}</a>
		{% endfor %}
	</div>
</div>
<div class="section">
	<div class="container">
		<p markdown="1">
			Hi, I am _italic_.  
			You must be __bold__.  
			`A robot, I am!`
		</p>
	</div>
</div>