import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する（inputTextの内容を空にする""）
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODOテキスト内容を取得
    const text = addTarget.firstElementChild.innerText;

    //liタグ生成
    const li = document.createElement("li");

    //div以下を初期化
    addTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    li.appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    console.log(addTarget.parentNode);
    //完了リストの追加
    document.getElementById("complete-list").appendChild(addTarget.parentNode);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //divタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
