---
title: Travel
layout: default
order: 3
---
<div class="section">
	<div class="container">
		<h3 class="section-heading">Travel</h3>
		<p class="section-description">
			Would you like to see some?
		</p>
	</div>
</div>

<figure>
	<img src="assets/images/pondi/Pondicherry-1.JPG" fit="cover" alt="" />
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