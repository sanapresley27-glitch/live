
const chatForm = document.getElementById("chatForm");
const messages = document.getElementById("messages");
const questionForm = document.getElementById("questionForm");
const questionList = document.getElementById("questionList");

function addTextMessage(container, title, content) {
  const card = document.createElement("div");
  card.className = "message";

  const author = document.createElement("strong");
  author.textContent = title;

  const text = document.createElement("p");
  text.textContent = content;

  card.append(author, text);
  container.appendChild(card);
}

chatForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("nameInput");
  const input = document.getElementById("messageInput");

  if (!name.value.trim() || !input.value.trim()) return;

  const notice = messages.querySelector(".notice");
  if (notice) notice.remove();

  addTextMessage(
    messages,
    name.value.trim(),
    input.value.trim()
  );

  messages.scrollTop = messages.scrollHeight;
  input.value = "";
});

questionForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const input = document.getElementById("questionInput");

  if (!input.value.trim()) return;

  addTextMessage(
    questionList,
    "Question du public",
    input.value.trim()
  );

  input.value = "";
});
