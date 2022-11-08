if (window.matchMedia('(max-width: 768px)').matches) {
    document.querySelectorAll('li.target-audience__solution-list-item.solution-item details').forEach(solutionItem => {
        solutionItem.open = false
    })
}
