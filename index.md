---
title: Home
layout: default
order: 1
---

<div class="section">
	<div class="container">
		<img src="{{ "/assets/images/logo.png" | relative_url }}">
		<h3 class="section-heading">Photoraphy</h3>
		<p class="section-description">
			Discovering the world with my vision.
		</p>
		{% assign mypages = site.pages | sort: "order" %}
		{% for page in mypages %}
		<a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
		{% endfor %}
	</div>
</div>

<div class="section">
	<div class="container">
		<div class="row">
				{% assign images = site.static_files | where: "image", true %}
				{% for image in images limit:2 %}
				<div class="one-half column">
					<img class="u-max-full-width" src="{{ image.path }}" alt="{{ image.basename }}">
				</div>
				{% endfor %}
		</div>
	</div>
</div>