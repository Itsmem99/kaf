// Pl/* 🤖 Typing Effect */
const text = "مرحبًا… أنا كاف 🤖";
let index = 0;
const title = document.querySelector(".ai-title");

function typeText() {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 120);
    }
}
typeText();

/* 👀 Eyes Follow Mouse */
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".robot-eye").forEach(eye => {
        const x = (eye.getBoundingClientRect().left + eye.clientWidth / 2);
        const y = (eye.getBoundingClientRect().top + eye.clientHeight / 2);
        const rad = Math.atan2(e.pageX - x, e.pageY - y);
        const rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.style.transform = `rotate(${rot}deg)`;
    });
});
let commentCount = 0;

function addComment() {
    const input = document.getElementById("commentInput");
    const list = document.getElementById("commentsList");
    const count = document.getElementById("commentCount");

    if (input.value.trim() === "") return;

    const div = document.createElement("div");
    div.className = "comment";
    div.innerText = input.value;

    list.prepend(div);

    commentCount++;
    count.innerText = commentCount;

    input.value = "";
}
<script>
    const dailyQuotes = [
    "أنت أقوى مما تظن، حتى في أيامك الهادئة.",
    "لا بأس أن تتعب… المهم أنك لم تتوقف.",
    "كل خطوة صغيرة تُحسب.",
    "ما تشعر به الآن لن يدوم.",
    "أحيانًا النجاة بحد ذاتها إنجاز."
    ];

document.addEventListener("DOMContentLoaded", () => {
    const quote = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
    document.getElementById("dailyQuote").innerText = `🪞 ${quote}`;
});
</script>
