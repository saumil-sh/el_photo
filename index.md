---
title: Home
layout: home
type: home
order: 1
---

<div class="section header">
	<div class="container">
		<img src="{{ "/assets/images/logo.png" | relative_url }}">
		<h3 class="section-heading">photography</h3>
		<p class="section-description">
			Discovering the world with my vision.
		</p>
		<div id="navbar">
			<img id="brand" class="hide" src="{{ "/assets/images/logo.png" | relative_url }}">
			{% assign mypages = site.pages | where: "type", "home" | sort: "order" %}
			{% for page in mypages %}
			<a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
			{% endfor %}
		</div>
	</div>
</div>

<div class="section main">
	<div class="container">
		<div class="row">
			<div class="one-half column">
				{% assign coll = site.collections | where: "label", "home" | first %}
				{% assign l = coll.files.size | divided_by: 2 | ceil %}
				{% for image in coll.files limit: l %}
				<article class="thumb">
					<img class="lozad u-max-full-width" data-src="{{ coll.label | append: '/' | append: image.name }}" alt="{{ image.basename }}" />
				</article>
				{% endfor %}
			</div>
			<div class="one-half column">
				{% for image in coll.files offset: l %}
				<article class="thumb">
					<img class="lozad u-max-full-width" data-src="{{ coll.label | append: '/' | append: image.name }}" alt="{{ image.basename }}" />
				</article>
				{% endfor %}
			</div>
		</div>
	</div>
</div>
<div id="Fullscreen">
	<img src="" alt="" />
</div>