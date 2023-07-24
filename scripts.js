/*let pdfContainer = document.getElementById("pdf-container");

pdfjsLib.getDocument("poson1.pdf").promise.then(pdf => {
    let pageNumber = 1;

    function renderPage(pageNumber) {
        pdf.getPage(pageNumber).then(page => {
            let scale = 1.5;
            let viewport = page.getViewport({ scale: scale });

            // Prepare canvas using PDF page dimensions
            let canvas = document.createElement("canvas");
            let context = canvas.getContext("2d");
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            // Render PDF page into canvas context
            let renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            let renderTask = page.render(renderContext);

            renderTask.promise.then(() => {
                pdfContainer.appendChild(canvas);

                // If there are more pages, render them
                if (pdf.numPages > pageNumber) {
                    renderPage(pageNumber + 1);
                }
            });
        });
    }

    // Start rendering the first page
    renderPage(pageNumber);
});*/


$(document).ready(function() {

    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('#scrollToTopBtn').fadeIn();
      } else {
        $('#scrollToTopBtn').fadeOut();
      }
    });
  
  
    $('#scrollToTopBtn').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
