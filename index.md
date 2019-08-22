---
title: Home
layout: default
order: 1
---

<div class="section">
	<div class="container">
		<img src="{{ "/assets/images/logo.png" | relative_url }}">
		<h3 class="section-heading">photoraphy</h3>
		<p class="section-description">
			Discovering the world with my vision.
		</p>
	</div>
</div>

<div class="section">
	<div class="container">
		<h3 class="section-heading">About</h3>
		<p class="section-description">
			My secrets.
		</p>
		<p markdown="1">
			Hi, I am _italic_.  
			You must be __bold__.  
			`A robot, I am!`
		</p>
	</div>
</div>

<div class="section">
	<div class="container">
		<h3 class="section-heading">Travel</h3>
		<p class="section-description">
			Would you like to see some?
		</p>
		{% assign mypages = site.pages | where: "order", 2 %}
		{% for page in mypages %}
		<a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
		{% endfor %} 
	</div>
</div>