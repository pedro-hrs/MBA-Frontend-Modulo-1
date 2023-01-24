const countriesPromisse = async () => { 
  
  const url = path => `https://restcountries.com/v2/${path}`

  const countriesArray = []

  countriesArray.push( await fetch(url('all')).then(res => res.json()))
  
  if(!countriesArray.length !== 0){
    
    let countriesLi = ''

    countriesArray[0].forEach(country => {
        const countryLi = `
              <div class="card">
                <div class="card__inner ">
                  <div class="card__front">
                    <img src=" ${country.flags.svg}" alt="${country.name}" class="flag"/>
                  </div>  
                  <div class="card__back ${country.region}">
                  <h3>${country.name}</h3>
                  <p>Nome nativo: ${country.nativeName}</p>
                  <p>Capital: ${country.capital}</p>
                  <p>Região: ${country.region}</p>
                  <p>Sub região: ${country.subregion}</p>
                  </div>  
                </div>
              </div>
              `
        
        countriesLi += countryLi

        const div = document.getElementById('cards__list')
        div.innerHTML = countriesLi
    });
  }
  
}

countriesPromisse()
