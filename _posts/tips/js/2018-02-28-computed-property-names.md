---
categories:
- tip
- js
tags: 
- tip-js
---

Let's say we had a function called ‘objecty’ which has two parameters called ‘key’ and ‘value’. This function is going to return a new object with the key being the key on the object and value being the value (obviously). Before ES6, this is how we would achieve this:

{% highlight javascript %}
const objecty = (key, value) => {
  let obj = {};
  obj[key] = value;
  return obj;
};
{% endhighlight %}

With ES6 we now have computed property names. Instead of having to create a new object and add properties to it with bracket notation, we can now return a new object using literal notation but put brackets around the key:

{% highlight javascript %}
const objecty = (key, value) => {
  return {
    [key]: value
  }
};
{% endhighlight %}

These two functions are essentially identical and if we invoke either of them we will get back the same object.

This becomes really useful when updating state in React.

Have fun!