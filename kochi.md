---
title: Kochi
layout: default
description: Kochi was hot and humid.
type: travel
order: 4
---

<div class="section main">
	<div class="container">
		<div class="row">
			<div class="one-half column">
				{% assign coll = site.collections | where: "label", "kochi" | first %}
				{% assign l = coll.files.size | divided_by: 2 | floor %}
				{% for image in coll.files limit: l %}
				<img class="u-max-full-width" src="{{ coll.label | append: '/' | append: image.name }}" alt="{{ image.basename }}" />
				{% endfor %}
			</div>
			<div class="one-half column">
				{% for image in coll.files offset: l %}
				<img class="u-max-full-width" src="{{ coll.label | append: '/' | append: image.name }}" alt="{{ image.basename }}" />
				{% endfor %}
			</div>
		</div>
	</div>
</div>