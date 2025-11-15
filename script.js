/* ==========================
   Blog Post Comments
=========================== */
function addComment() {
    let input = document.getElementById("comment-input");
    let box = document.getElementById("comments-box");
    let text = input.value.trim();

    if(text === "") return;

    let p = document.createElement("p");
    p.textContent = text;
    box.appendChild(p);

    input.value = "";
}

/* ==========================
   Newsletter Subscription
=========================== */
function subscribe() {
    let emailInput = document.querySelector(".newsletter input[type='email']");
    let email = emailInput.value.trim();
    if(email === "") {
        alert("Please enter your email to subscribe.");
        return;
    }
    alert("Thank you for subscribing with " + email + "!");
    emailInput.value = "";
}