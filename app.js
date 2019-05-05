
const controller=()=>{
    const base={
        player1:0,
        player2:0,
        numberDraw:0,
        allDraw:0,
        active:1,
        canPlay:'yes'
    }
    const listeners=()=>{
        document.getElementById('btn1').addEventListener('click',newGame);
        document.getElementById('btn2').addEventListener('click',draw);
        document.getElementById('btn3').addEventListener('click',add);
    };
    const reset=()=>{
        base.player1=0;
        base.player2=0;
        base.numberDraw=0;
        base.allDraw=0;
        base.active=1;
        base.canPlay="yes";
    }
    const smallReset=()=>{
        base.numberDraw=0;
        base.allDraw=0;
    }
    const newGame=()=>{
        document.querySelector('.img').style.display="none";
        reset();
        displayActive();
        displayAdd();
    };
    const draw=()=>{
        document.querySelector('.img').style.display="block";
        if(base.canPlay==="yes"){
        let number= Math.floor((Math.random()*6)+1);
        if(number>1){
        base.numberDraw=number;
        base.allDraw+=number
        document.querySelector('.img').src="./img/dice-"+number+".png"
        displayDraw();
        }else{
        changeDisplayActive();
        smallReset();
        displayAdd();
        }
    }
    };
    const add=()=>{
       if(base.canPlay==="yes")
       { base['player'+base.active]+=base.allDraw;
       displayAdd();
        if(base['player'+base.active]<100){
        displayAdd();
        smallReset();
        changeDisplayActive();
        }
        else{
            document.querySelector('.img').style.display="none";
            document.querySelector('.h-'+base.active).textContent="Wygrana!!!"
            base.canPlay="no";
        }}
    };
    const displayDraw=()=>{
        document.getElementById('draw-'+base.active).textContent=base.allDraw;
    }
    const displayAdd=()=>{
        document.getElementById('player-1').textContent=base.player1;
        document.getElementById('player-2').textContent=base.player2;
        document.getElementById('draw-1').textContent=0;
        document.getElementById('draw-2').textContent=0;
        document.querySelector('.left__h-1').textContent='Player 1';
        document.querySelector('.right__h-1').textContent='Player 2';
    }
    const changeDisplayActive=()=>{
        if(base.active===1){
            document.querySelector('.left').classList.remove('active');
        }else{
            document.querySelector('.right').classList.remove('active');
        }
        base.active===1 ? base.active=2 : base.active=1;
        if(base.active===1){
            document.querySelector('.left').classList.add('active');
        }else{
            document.querySelector('.right').classList.add('active');
        }
    }
    const displayActive=()=>{
        document.querySelector('.left').classList.remove('active');
        document.querySelector('.right').classList.remove('active');
        document.querySelector('.left').classList.add('active');

    }

    const init=()=>{
        listeners();
        document.querySelector('.img').style.display="none";
    }
    init();
};
controller();
