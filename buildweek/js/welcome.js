function ctrlcheckbox(){
    let giulio=document.getElementById('franco')
    let link=document.getElementById('link')
    if(giulio.checked){
        link.setAttribute('href', 'benchmark.html')
    }else{
        link.setAttribute('href', '#')
    }
}
ctrlcheckbox()