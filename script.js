```javascript
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  message.textContent = "Message sent successfully! ✅";
  message.style.color = "#38bdf8";

  form.reset();
});
```
