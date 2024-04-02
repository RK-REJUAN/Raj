const download = document.querySelector('.download-btn');
const process = document.querySelector('.process');
const countdown = document.querySelector('.countdown');

const pleaseWaitText = document.querySelector('.pleaseWait-text');



const manualDownloadText = document.querySelector('.manualDownload-text');


const manualDownloadLink = document.querySelector('.manualDownload-link');


download.addEventListener('click', () => {
  download.style.display = "none";
  countdown.innerHTML = `<span>${timeLeft}</span> %`;
process.style.display = "block";
  var downloadTimer = setInterval(function timeCount() {
    timeLeft--;
    countdown.innerHTML = ` <span class="percentage">${timeLeft}</span> %`;

    if (timeLeft <= 0) {
      clearInterval(downloadTimer); 
      
      
      
      pleaseWaitText.style.display = "block";

      let download_href = "#";
      countdown.style.display = "none";
      
      process.style.display = "none";
      window.location.href = download_href;
      
      manualDownloadLink.href = download_href;


      setTimeout(() => {
            
       
        pleaseWaitText.style.display = "none";
     manualDownloadText.style.display = "block";
        
      }, 1000);
    }
  }, 1000);
  
});
