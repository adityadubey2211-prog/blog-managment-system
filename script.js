const form = document.getElementById("blogForm");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const category = document.getElementById("category").value.trim();
    const description = document.getElementById("description").value.trim();

    if(title === "" || author === "" || category === "" || description === ""){
        alert("Please fill all the fields.");
        return;
    }
    alert("Blog Published Successfully!");
    form.reset();
});