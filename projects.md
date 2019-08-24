---
title: Projects
layout: default
description: I try to work sometimes.
logo: false
type: home
order: 3
---

<div class="section">
	<div class="container">
		{% assign mypages = site.pages | where: "type", "project" %}
		{% for page in mypages %}
		<a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
		{% endfor %}
	</div>
</div>