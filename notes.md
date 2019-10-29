Page 17: <em>Firebase in React</em>

"The simple approach is to create a Firebase instance with the Firebase class, and then import the instance (or class) in every React component where it's needed.  That's not the best approach though, for two reasons:

<ul>
    <li>It is more difficult to test your react components</li>
    <li>It is more error prone, because Firebase should only be initialized once in your application (singleton) and by exposing the Firebase class to every React component you could end up by mistake with multiple Firebase instances.</li>
</ul>