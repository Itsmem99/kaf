@page
@model kaf.wwwroot.js.commentCountModel
@{
}
<script>
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
</script>
