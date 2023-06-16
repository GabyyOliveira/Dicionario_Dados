
// function Dados() {

//     let name = document.querySelector('.name-table')
//     let rotina = document.querySelector('#rotina')
//     let chave = document.querySelector('#chave')

//     name.innerText = json.nome
//     rotina.innerHTML = `<span class="fw-bolder">Rotina: </span> ` + json.sysobj
//     chave.innerHTML  = `<span class="fw-bolder">Chave Única: </span> ` + json.unico

//     Campos()
//     relacionamentos()
//     indices()
// }

// function Campos() {
//     let bodyTable = document.querySelector('#bdCampos')

//     bodyTable.innerHTML = ''
    
//     let campos = json.campos

//     campos.map((item, nI) => {

//         bodyTable.innerHTML += `
//                 <tr class="teste">
//                   <th scope="row" class="link" onclick="modal(this)" id="${nI}">${item.campo}</th>
//                   <td>${item.titulo}</td>
//                   <td>${item.descricao}</td>
//                   <td align="center">${item.tipo}</td>
//                   <td align="center">${item.contexto}</td>
//                   <td align="center">${item.tamanho}</td>
//                 </tr>
//             `
//     })

// }

// function relacionamentos() {
//     let bodyTable = document.querySelector('#bdRel')

//     bodyTable.innerHTML = ''

//     let campos = json.relacionamentos

//     campos.map((item, nI) => {
//         bodyTable.innerHTML += `
//                 <tr>
//                   <th>${item.dominio}</th>
//                   <td>${item.cdominio}</td>
//                   <td>${item.expdom}</td>
//                   <td>${item.expcdom}</td>
//                   <td>${item.relac}</td>
//                 </tr>
//             `
//     })

    
// }

// function indices() {
//     let bodyTable = document.querySelector('#bdIndices')

//     bodyTable.innerHTML = ''

//     let campos = json.indices

//     campos.map((item, nI) => {
//         bodyTable.innerHTML += `
//                 <tr>
//                   <th>${item.ordem}</th>
//                   <td>${item.chave}</td>
//                   <td>${item.descricao}</td>
//                   <td>${item.nickname}</td>
//                 </tr>
//             `
//     })

// }

function modal(el){
    let modal = document.querySelector('.modal')
    let my_modal = new bootstrap.Modal(modal)

    let campo = document.querySelector('.modal-title')
    let ordem = document.querySelector('#ordem')
    let tipo = document.querySelector('#tipo')
    let tamanho = document.querySelector('#tamanho')
    let titulo  = document.querySelector('#titulo')
    let desc = document.querySelector('#desc')
    let valid = document.querySelector('#valid')
    let relac = document.querySelector('#relac')
    let f3 = document.querySelector('#f3')
    let visual = document.querySelector('#visu')
    let contexto = document.querySelector('#context')
    let valUser = document.querySelector('#valUser')
    let combo = document.querySelector('#combo')
    let when = document.querySelector('#when')
    let iniBrw = document.querySelector('#ini')
    let sxg = document.querySelector('#sxg')
    let folder = document.querySelector('#folder')

    let campos_modal = json.campos[el.id]
    
    campo.innerText = campos_modal.campo
    ordem.innerText = campos_modal.ordem
    tipo.innerText = campos_modal.tipo
    tamanho.innerText = campos_modal.tamanho
    titulo.innerText = campos_modal.titulo
    desc.innerText = campos_modal.descricao
    valid.innerText = campos_modal.validacao
    relac.innerText = campos_modal.relacao
    f3.innerText = campos_modal.f3
    visual.innerText = campos_modal.visual
    contexto.innerText = campos_modal.contexto
    valUser.innerText = campos_modal.validuser
    combo.innerText = campos_modal.combo
    when.innerText = campos_modal.when
    iniBrw.innerText = campos_modal.inibrw
    sxg.innerText = campos_modal.sxg
    folder.innerText = campos_modal.folder

    my_modal.show()
}

const btn = document.querySelector('.theme-toggler')
const body = document.querySelector('.bd')
const table = document.querySelector('.table')
const tablein = document.querySelector('.table-in')
const tablerel = document.querySelector('.table-rel')


btn.onclick = function(){
  this.classList.toggle('active')
  body.classList.toggle('active')
  table.classList.toggle('table-dark')
  tablein.classList.toggle('table-dark')
  tablerel.classList.toggle('table-dark')
}