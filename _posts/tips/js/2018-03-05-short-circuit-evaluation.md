---
categories:
- tip
- js
tags: 
- tip-js
---

Short-circuiting in Javascript is a way for the Javascript engine to increase performance. Before we get into some examples. let's first review how the logical AND (&&) and logical OR (\|\|) work.

Logical AND (&&)

The logical AND (&&) operator is used to evaluate if both it's operands are true, if both operands are true, then true is returned. False is returned for any other scenario:

{% highlight javascript %}
true && true // true
true && false // false
false && false // false
{% endhighlight %}

Logical OR (\|\|)

The logical OR (\|\|) operator is used to evaluate if any of its operands are true, if any operands are true, then true is returned. False is returned for any other scenario.

{% highlight javascript %}
true && true // true
true && false // true
false && false // false
{% endhighlight %}

In Javascript the && and \|\| short-circuit evaluations and behave in an unorthodox way, they return the last evaluated value which may not necessarily be true or false.

With the logicl AND (&&), if the first operand is evaluated to false, the second operand will not be evaluated as the result will always be false.

This behavior also applied to the logical OR (\|\|) operator. When the first operand evaluates to true, the second operand is not evaluated because the results will always be true.

Example using the logical AND (&&).

Let's say we want to run a function but only run the function if a certain variable is true:

{% highlight javascript %}
function run() {
  console.log('yay');
}

const x = true;
{% endhighlight %}

We would typically write do this in the following way:

{% highlight javascript %}
If (x) {
  run();
}
{% endhighlight %}

Great, this code works as expected and we get 'yay' in the console.

With short-circuiting we can actually write:

{% highlight javascript %}
x && run(); // console.log('yay');
{% endhighlight %}

Since x is evaluated to true, the && operator runs the proceeding function and we get 'yay' logged to the console. If x was set to false our equation would short-circuit and the run function would never run.

Example using the logical OR (\|\|).

Lets create a car object with two properties on it:

{% highlight javascript %}
const car = {
  make: 'ford',
  model: 'focus'
};
{% endhighlight %}

If we were to now try and log the color of the car we would get 'undefined', as you can see the car object does not contain a color property:

{% highlight javascript %}
console.log(car.color); // undefined
{% endhighlight %}

What if we wanted to log the string 'unknown', if there was no color property:

{% highlight javascript %}
if (car.color === undefined) {
  console.log('unknown')
}
{% endhighlight %}

Well, with short-circuiting we can actually write:

{% highlight javascript %}
console.log(car.color || 'unknown');
{% endhighlight %}

Since our car.color value does not exist, it's 'undefined' which is falsy, so Javascript will go to the other side of our OR equation and evaluate whatever is there.

If the car did have a color property:

{% highlight javascript %}
const car = {
  make: 'ford',
  model: 'focus'
  color: 'orange'
};
{% endhighlight %}

Now if we run the same as above we would get the value returned from the object:

{% highlight javascript %}
console.log(car.color || 'unknown'); // orange;
{% endhighlight %}

A popular OR example

{% highlight javascript %}
const a;
const b = null;
const c = undefined;
const d = 10;
const e = 'bar';

const f =  a || b || c || d || e;

console.log(f); ??
{% endhighlight %}

Look at this above code and think about what will be logged to the console.

Let's break this down:

Variables a, b and c all evaluate the falsy values.
Variables d and e are both truthy.

Remember that when the logical OR sees a falsy value in continues evaluating, once it reaches a truthy value it short-circuits. In this example the variable d is the first truthy, meaning variable e never gets evaluated and the value of 10 is assigned to the f variable.

I hope the above makes sense and you find it helpful. Try to think about situations when this may be useful. In a lot of circumstances you may just want to stick to the regular if statement due to making your code more readable.

I tend to use short-circuiting quite a bit now when working with React and I want to conditionally render a component such as:

{% highlight javascript %}
{!isLoggedIn &&
<Login />}
{% endhighlight %}

Have fun!