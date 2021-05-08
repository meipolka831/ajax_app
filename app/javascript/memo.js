const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div>
        投稿日時:${item.created_at}
      </div>
      <div>
        ${item.content}
      </div>
    </div>`;
  return html
}

function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const item = XHR.response.post;
      list.insertAdjacentHTML("afterend", buildHTML(xHR));
      formText.value = "";
    };
  });
}

window.addEventListener('load', post);
