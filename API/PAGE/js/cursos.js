const postList = document.querySelector('.post-list');
let output = '';

const renderCursos = (cursos) => {
    cursos.forEach(curso => {
        output += `
        <div class="card" style="width: 18rem;">
        <div class="card-body" data-id=${curso.id}>
        <span class="material-icons" href="#" class="card-link" id="delete-curso">
        delete
        </span>
          <h4 class="card-title" id="disciplina">${curso.disciplina}</h4>
          <h6 class="card-subtitle mb-2 text-muted" id="prof">${curso.professor}</h6>
          <span class="card-text" id="sala">Sala ${curso.sala}</span>
          <br>
          <div id="horarios">
          <span class="card-link" id="horai">${curso.hora_i} às</span>
          <span id="horaf">  ${curso.hora_f}</span>
          </div>
          
          
        </div>
        </div>`
    });
    postList.innerHTML = output;
}

const url = 'http://localhost:3000/cursos';

//Get - Read the cursos
// Method: GET 
fetch(url)
    .then(res => res.json())
    .then(data => renderCursos(data))

postList.addEventListener('click', (e) => {
    e.preventDefault();
    let delButtonIsPressed = e.target.id == 'delete-curso';

    console.log(e.target.parentElement.dataset.id);
    let id = e.target.parentElement.dataset.id;
    // Delete - remove o curso existente
    // method: DELETE 
    if (delButtonIsPressed) {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => location.reload())
           
    }
})