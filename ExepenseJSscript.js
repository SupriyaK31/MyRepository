const myForm=document.querySelector('#my-form');
const AmtIn=document.querySelector('#amount');
const DescIn=document.querySelector('#Description');
const CategoryIn=document.querySelector('#SelectCat');
const ExpenseList=document.querySelector('#Expense');
const msg=document.querySelector('.msg');
myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(AmtIn.value=='' || DescIn.value=='' || CategoryIn.value==''){
        msg.innerHTML="Enter All data";
    }
    else{
        const li=document.createElement('li');
        const btn=document.createElement('input');
        const editBtn=document.createElement('input');
        btn.type="button";
        editBtn.type="button";
        btn.value="Delete"
        editBtn.value="Edit";
        editBtn.className="btn1";
        btn.className="btn1";
        li.appendChild(document.createTextNode(`${AmtIn.value} - ${DescIn.value} - ${CategoryIn.value}`));
        li.appendChild(btn);
        li.appendChild(editBtn);
        ExpenseList.appendChild(li);

        btn.addEventListener('click',onclick);
        editBtn.addEventListener('click',onclickEdit);
        let data={
            Amount:AmtIn.value,
            Description:DescIn.value,
            Category:CategoryIn.value
        };
        let data1=JSON.stringify(data);
        localStorage.setItem(DescIn.value,data1);
        let Amount=AmtIn.value;
        let desc=DescIn.value;
        let category=CategoryIn.value;

        function onclick(e){
            e.preventDefault();
            ExpenseList.removeChild(li);
            localStorage.removeItem(desc);
        }
        function onclickEdit(e){
            e.preventDefault();
            AmtIn.value=Amount;
            DescIn.value=desc;
            CategoryIn.value=category;
            ExpenseList.removeChild(li);
            localStorage.removeItem(DescIn.value);
        }
         AmtIn.value='';
         DescIn.value='';
         CategoryIn.value='';
    }
}
