---
categories:
- tip
- js
- tip-js
---

When working with objects we have a couple of ways we can add properties to them.

Lets first create an empty object and look at the ways we can add properties.

{% highlight javascript %}
const obj = {};
{% endhighlight %}

dot syntax:

{% highlight javascript %}
obj.propOne = 'property one'
{% endhighlight %}

bracket syntax

{% highlight javascript %}
obj['propTwo'] = 'property two'
{% endhighlight %}

The object will now look like this:

{% highlight javascript %}
[object Object] {
  propOne: "property one",
  propTwo: "property two"
}
{% endhighlight %}