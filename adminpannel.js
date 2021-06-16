const SIDE_BAR_INIT = {
    position: 'absolute',
    top: '6rem',
    right: '-310px',
    display: 'flex',
    direction: 'rtl',
    flexDirection: 'column',
    width: '0px',
    hight: '0px',
    backgroundColor: '#000',
    opacity: 0,
    // padding: '1rem',
    color: '#fff',
    overflowX: 'hidden',
    overflowY: 'scroll',
    transition: 'all .3s ease-out'
}

const SIDE_BAR = {
    // display: 'flex',
    width: '350px',
    height: 'calc(100vh - 6rem)',
    right: 0,
    opacity: .95,
    transition: 'all .3s ease-out'
}



$('#chkSidebar').on('change', function(e) {
    openCloseSideBar();
});

$('.app').on('click', function(e) {
    let $sidebar = $('#chkSidebar');
    if ($sidebar.is(':checked')) {
        $sidebar.prop('checked', false);
        $sidebar.trigger('change');
    }
});


function openCloseSideBar() {
    let $sidebar = $('.sidebar').css(SIDE_BAR_INIT);
    if ($('#chkSidebar').is(':checked'))
        $sidebar.css(SIDE_BAR);
}



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {

    //rotate line 1,2
    hamburger.classList.toggle("toggle");

    // open menu circle like
    navLinks.classList.toggle("open");

    // open links animated
    links.forEach(link => {
        link.classList.toggle("showlinks");
    });


});