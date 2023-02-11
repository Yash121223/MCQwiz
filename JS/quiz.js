const options = document.querySelectorAll('.option');
const qu = document.querySelector('.question');
const opt=document.querySelector('.options')
const container = document.querySelector('.container')
var index = 0;
var choice = 0;
var answer = 'Dennis Ritchie';
var marks = 0;
var choosed_option;
for (i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function (e) {
        if (choice == 1) {
            alert('Cannot choose option again');
        } else {
            choice = 1;
            if (answer == e.target.innerText) {
                e.target.style.backgroundColor = 'green';
                e.target.style.color = 'white';
                marks += 4;
            } else {
                e.target.style.backgroundColor = 'red';
                e.target.style.color = 'white';
                marks -= 1;
            }
            choosed_option = e.target;
        }

    })
}

const question = [
    {
        ques: 'Q.2 Which of the following statements is correct?',
        opt: ['Base class pointer cannot point to derived class.', 'Derived class pointer cannot point to base class.', 'Pointer to derived class cannot be created.', 'Pointer to base class cannot be created.'],
        ans: 'Derived class pointer cannot point to base class.'
    },
    {
        ques: 'Q.3 Which of the following is not the member of class?',
        opt: ['Static function.', 'Friend function.', 'Const function.', 'Virtual function.'],
        ans: 'Friend function.'
    },
    {
        ques: 'Q.4 Which of the following type of class allows only one object of it to be created?',
        opt: ['Virtual class.', 'Abstract class.', 'Singleton class.', 'Friend class.'],
        ans: 'Singleton class.'
    },
    {
        ques: 'Q.5 Which of the following concepts means determining at runtime what method to invoke?',
        opt: ['Data hiding.', 'Dynamic typing.', 'Dynamic binding.', 'Dynamic loading.'],
        ans: 'Dynamic binding.'
    },
    {
        ques: 'Q.6 Which of the following cannot be friend?',
        opt: ['Function.', 'Class.', 'Object.', 'Operator function.'],
        ans: 'Object.'
    },
    {
        ques: 'Q.7 cout is a/an...',
        opt: ['Operator.', 'Function.', 'Object.', 'Macro.'],
        ans: 'Object.'
    },
    {
        ques: 'Q.8 Which of the following operator is overloaded for object cout?',
        opt: ['>>.', '<<.', '+.', '=.'],
        ans: '<<.'
    },
    {
        ques: 'Q.9 Which of the following is not a type of inheritance?',
        opt: ['Multiple.', 'Multilevel.', 'Distributive.', 'Heirarchial.'],
        ans: 'Distributive.'
    },
    {
        ques: 'Q.10 Which of the following operators cannot be overloaded?',
        opt: ['?:.', '[].', '->.', '*.'],
        ans: '?:.'
    }
]
function normalise() {
    choosed_option.style.backgroundColor = 'aliceblue';
    choosed_option.style.color = 'black';
}
const next = document.querySelector('.btn');
next.addEventListener('click', function () {
    if (choice == 0) {
        alert('Please choose any answer first.');
    } else {
        container.style.animationName = "animate";

        setTimeout(()=>{
           container.style.animationName="";
        }, 500)
        if (index == 8) {
            next.innerHTML = `Go To Result`;
        }
        if (index==9){
            choice=1;
            show_result();
        }
        choice = 0;
        normalise();
        qu.innerText = question[index].ques;
        for (j = 0; j < options.length; j++) {
            options[j].innerText = question[index].opt[j];
        }
        answer = question[index].ans;
        index++;
    }
    console.log(marks);
})
function show_result(){
    qu.innerText='Test is Over!!!';
    if(marks<=13){
        opt.innerHTML="Your marks obtained are: "+marks+" Sorry! but you failed!";
    }else if(marks<27&&marks>13){
        opt.innerHTML="Your marks obtained are: "+marks+" You did well better luck next time!";
    }
    else{
        opt.innerHTML="Your marks obtained are: "+marks+" Wow! you did exceptionally well";
    }
    next.innerHTML=`<a href='index.html'>Return to Home</a>`;
}

