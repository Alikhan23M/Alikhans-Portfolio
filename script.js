//Make the cross initialy invisible
document.querySelector('.cross').style.display = 'none';

document.querySelector('.icons').addEventListener('click', ()=>{

    //Toggle the class to show side bar when meny icon is clicked

    document.querySelector('.sidebar').classList.toggle('sidebarShow');

    // if sidebar is present make the menu sign invisible and vice versa

    if(document.querySelector('.sidebar').classList.contains('sidebarShow')){
        
        document.querySelector('.menu').style.display = 'none';

        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 400);
    }

    else{
        document.querySelector('.cross').style.display = 'none';

        setTimeout(() => {
            document.querySelector('.menu').style.display = 'inline';
        }, 400);
       
    }
});


document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('.icons').classList.toggle('flexEnd');
})

document.querySelector('.cross').addEventListener('click',()=>{
    document.querySelector('.icons').classList.toggle('flexEnd');
})


