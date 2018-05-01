document.getElementById("completeOrder").addEventListener('click', (e) => {
    let payBtns = document.getElementsByClassName('toggleMe');
    let order = document.getElementById('completeOrder');
    for (i = 0; i < payBtns.length; i++) {
        payBtns[i].classList.toggle('isHidden');
    }
    order.classList.toggle('isHidden');
});


let buttons = (document.getElementsByClassName("payClick"));
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let id = +e.target.id;
        $.ajax({
            url: `${location.origin}/payment/${id}`,
            type: 'patch',
            data: {}
        });
    });
};