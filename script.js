const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');

const qrcontainer = document.querySelector('.qr-body');

let size = sizes.value;

generatebtn.addEventListener('click', (b)=>{
    b.preventDefault();
    isempty();
})

sizes.addEventListener('change', (b)=>{
    size = b.target.value;
    isempty();
});

downloadbtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img!== null){
        let imgatr = img.getAttribute('src');
        downloadbtn.setAttribute("href", imgatr);
    }else{
        downloadbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});

function isempty(){
    // if(qrText.value.length > 0){
    //     generateQRcode();
    // }else{
    //     alert("Please enter a text or URL to generate a QR code ")
    // }
    qrText.value.length > 0 ? generateQRcode():alert("Please enter a text or URL to generate a QR code ")
}



function generateQRcode(){
    qrcontainer.innerHTML='';
    new QRCode(qrcontainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}