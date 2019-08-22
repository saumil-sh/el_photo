---
title: Pondicherry
layout: default
order: 2
---

<div class="section">
	<div class="container">
		<h3 class="section-heading">Pondicherry</h3>
		<p class="section-description">
			My travelg from days in Pondicherry, India.
		</p>
	</div>
</div>

<figure>
	<img src="assets/images/pondi/Pondicherry-1.JPG" alt="" />
	<article>
		<h2>Image Title</h2>
		<p>Image description goes here!</p>
	</article>
</figure>

{% assign images = site.static_files | where: "image", true %}
{% for image in images %}
<figure>
	<img src="{{ image.path | relative_url }}" alt="{{ image.basename }}" />
</figure>
{% endfor %}