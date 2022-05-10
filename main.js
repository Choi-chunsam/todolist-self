const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const itemList = document.querySelector(".itemList");

id = 0;
function addList() {
    const addLi = document.createElement("li");
    addLi.setAttribute("class","item")
    addLi.setAttribute("data-id",id)
    const addDiv = document.createElement("div");
    addDiv.setAttribute("class","itemBox");
    const span = document.createElement("span");
    span.addEventListener('click',()=>{
        span.classList.toggle('itemText');
    })
    span.innerText = input.value
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "삭제"
    deleteBtn.setAttribute("data-id",id);
    id++;
    deleteBtn.addEventListener('click',(e)=>{
        const li = e.target.parentNode
        if(e.target.dataset.id){
            itemList.removeChild(li.parentNode)
        }
    })
    

    
    addDiv.appendChild(span);
    addDiv.appendChild(deleteBtn);
    addLi.appendChild(addDiv)
    itemList.appendChild(addLi);
    input.value=""
    input.focus();
}

addBtn.addEventListener('click',addList)
input.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
        addList()
    }
})