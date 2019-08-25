---
title: Venice
layout: default
description: romantic city, indeed!
type: travel
order: 4
---

<div class="section main">
	<div class="container">
		<div class="row">
			<div class="one-half column">
				{% assign coll = site.collections | where: "label", "venice" | first %}
				{% assign l = coll.files.size | divided_by: 2 | floor %}
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