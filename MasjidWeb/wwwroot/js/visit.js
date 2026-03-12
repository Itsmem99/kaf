<script>
document.addEventListener("DOMContentLoaded", () => {

        let visits = localStorage.getItem("kaf_visits");

    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }

    localStorage.setItem("kaf_visits", visits);

    const visitorText = document.getElementById("visitorText");

    visitorText.innerText = `مرّ من هنا ${visits} قلبًا 🤍`;
});
</script>
