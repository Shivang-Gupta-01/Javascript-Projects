const url = '../docs/pdf.pdf';

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumisPending = null;

const scale = 1,
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

// Render the Page

const renderpage = num => {
    pageIsRendering = true;

    // Get Page
    pdfDoc.getPage(num).then(page => {

        // Set Scale
        //console.log(page);
        const viewport = page.getViewport({ scale });
        canvas.hieght = viewport.height;
        canvas.width = viewport.width;
        //console.log(canvas);
        console.log(viewport);

        const renderCtx = {
            canvasContext : ctx,
            viewport
        }
        page.render(renderCtx).promise.then(()=> {
            pageIsRendering = false;

            if(pageNumisPending!==null)
            {
                renderpage(pageNumisPending);
                pageNumisPending = null;
            }
        });

        // output current page
        document.querySelector('#page-num').textContent = num;
    });

};

// check page rendering

 const queueRenderPage = num => {

    if(pageIsRendering)
    {
        pageNumisPending = num;
    }else
    {
        renderpage(num);
    }
}

// Show pervious page

const showPrevPage = () =>
{
    if(pageNum<=1)
    {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}


// Show next page

const showNextPage = () =>
{
    if(pageNum>=pdfDoc.numPages)
    {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

// Get Document

pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {

    pdfDoc = pdfDoc_;
    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderpage(pageNum);
})
.catch( err=>{
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div,canvas);
    // remove top bar

    document.querySelector('.top-bar').style.display = 'none';
})
// Button Events

document.querySelector('#prev-page').addEventListener('click',showPrevPage);
document.querySelector('#next-page').addEventListener('click',showNextPage);


