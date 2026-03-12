<script>
    const moods = {
        sad: {
        book: "ما أحد قال لي كذا",
    quote: "ليس كل حزن ضعف… أحيانًا هو عمق."
    },
    lost: {
        book: "المدينة التي لا تناديني باسمي",
    quote: "الضياع مرحلة، وليس نهاية."
    },
    miss: {
        book: "القهوة التي لا تُشرب وحدها",
    quote: "نشتاق لأن بعض الذكريات كانت وطنًا."
    },
    strong: {
        book: "الشفاء بعد علاقة مؤلمة…",
    quote: "القوة لا تعني أنك لم تنكسر، بل أنك وقفت."
    }
};

    function showMood(type) {
    const data = moods[type];

    document.getElementById("moodBook").innerText = `📖 ${data.book}`;
    document.getElementById("moodQuote").innerText = `"${data.quote}"`;

    const box = document.getElementById("moodResult");
    box.style.display = "block";
    box.style.animation = "none";
    box.offsetHeight;
    box.style.animation = "fadeIn .4s ease-in-out";
}
</script>
