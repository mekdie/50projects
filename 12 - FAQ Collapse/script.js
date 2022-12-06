const toggleButtons = document.querySelectorAll(".faq-toggle");

toggleButtons.forEach((e) => {
    e.addEventListener("click", () => {
        let parentNodeClass = e.parentNode.classList;

        //alternative
        // parentNodeClass.contains("active")
        //     ? parentNodeClass.remove("active")
        //     : parentNodeClass.add("active");
        parentNodeClass.toggle("active");
    });
});
