const search = document.getElementById("search");
const matchList = document.getElementById('search_results');


// search json with serach value and filter

const searchResults = async (searchText) => {
    const res = await fetch('../../assets/data/index.json');
    const results = await res.json();

    // console.log(results)
    let searchMatches = results.filter(result => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return result.name.match(regex) || result.title.match(regex);
    });

    if (searchText.length === 0) {
        searchMatches = [];
        matchList.innerHTML = '';
    }
    displayOutput(searchMatches)
}

const displayOutput = (matches) => {
    if (matches.length > 0) {
        const html = matches.map(match =>
            `<div class="card card-body border-0 py-2 result-card">
                <h4>
                    ${match.name} (${match.abbr}) ${match.title}
                </h4>
            </div>`
        ).join('');
        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchResults(search.value));



const showResultsPage = (ev) => {
    const resultCard = document.getElementsByClassName('result-card');
    console.log(ev.target);



    for (let i = 0; i <= resultCard.length; i++) {
        console.log(resultCard[i])
        //resultCard[i].addEventListener('click', showResultsPage)
    }
}



search.addEventListener('input', showResultsPage);