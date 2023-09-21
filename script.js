const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function HideButtons(){
    const MoreButton = document.getElementById("MoreButton");
    const LessButton = document.getElementById("LessButton");

    MoreButton.style.opacity = 0
    LessButton.style.opacity = 0
}

function ShowButtons(){
    const MoreButton = document.getElementById("MoreButton");
    const LessButton = document.getElementById("LessButton");

    MoreButton.style.opacity = 1
    LessButton.style.opacity = 1

    if ($('#MoreButton').css('cursor') == 'pointer')
    {
        MoreButton.style.opacity = 1
        LessButton.style.opacity = 0
    }
        else if ($('#MoreButton').css('cursor') == 'auto')
        {
            MoreButton.style.opacity = 0
            LessButton.style.opacity = 1
        }
}


function moreAbout(){
    const aboutText1 = document.getElementById("AboutText1");
    const aboutText2 = document.getElementById("AboutText2");
    const MoreButton = document.getElementById("MoreButton")
    const LessButton = document.getElementById("LessButton")

    if ($('#AboutText1').css('opacity') == 1)
    {
        aboutText1.style.opacity = 0
        aboutText1.style.zIndex = 1
        aboutText2.style.opacity = 1
        aboutText2.style.zIndex = 2
    }
        else if ($('#AboutText1').css('opacity') == 0)
        {
            aboutText1.style.opacity = 1
            aboutText1.style.zIndex = 2
            aboutText2.style.opacity = 0
            aboutText2.style.zIndex = 1
        }

            if ($('#MoreButton').css('opacity') == 1)
            {
                MoreButton.style.opacity = 0
                MoreButton.style.cursor = 'auto'
                LessButton.style.opacity = 1
                LessButton.style.cursor = 'pointer' 
            }
                else if ($('#MoreButton').css('opacity') == 0)
                {
                    MoreButton.style.opacity = 1
                    MoreButton.style.cursor = 'pointer'
                    LessButton.style.opacity = 0
                    LessButton.style.cursor = 'auto'
                }

}

function sendEmail(){
    (function(){
        emailjs.init("wBjhi1w_f84WuOyYQ");
    })();

    var params = {
    EMAIL: document.getElementById("email").value,
    NAME: document.getElementById("name").value,
    MESSAGE: document.getElementById("message").value,
    };   
    
    var serviceID = "service_3edfeev"
    var templateID = "template_ircrqhm"

    const EmailMessage = document.getElementById("EmailAlert")
    const EmailText1 = document.getElementById("blobtext1")
    const EmailText2 = document.getElementById("blobtext2")

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        EmailMessage.style.opacity = 1
        EmailText1.style.opacity = 0
        EmailText2.style.opacity = 0
    })
    .catch();
}

setTimeout(() => {
    document.getElementById("MainContainer").style.opacity = 1;document.getElementById("MainContainer").style.opacity = 1;
    console.log("Delayed for 2.9 seconds.");
  }, 2900);