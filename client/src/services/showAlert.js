import Swal from 'sweetalert2'

export const showAlertSuccess = (text) => {
    Swal.fire({
        width: "400px",
        title: `<span style="color: #ffffff; font-size: 30px">Informacion</span>`,
        html: `<span style="color: #ffffff; font-size: 14.5px">${text}</span>`,
        icon: "success",
        background: '#191919',
        confirmButtonColor: '#ffd300',
        confirmButtonText: `<span style="color: #000000"; "font-size: 20px"><b>Ok</b></span>`
      })
}  

export const showAlertError = (text) => {
  Swal.fire({
    width: "400px",
    title: `<span style="color: #ffffff; font-size: 30px">Error</span>`,
    html: `<span style="color: #ffffff; font-size: 14.5px">${text}</span>`,
    icon: "error",
    background: '#191919',
    confirmButtonColor: '#ffd300',
    confirmButtonText: `<span style="color: #000000"; "font-size: 20px"><b>Ok</b></span>`
  })
} 

export const showAlertRedirectHome = (text) => {
  Swal.fire({
    width: "400px",
    title: `<span style="color: #ffffff; font-size: 30px">Error</span>`,
    html: `<span style="color: #ffffff; font-size: 14.5px">${text}</span>`,
    icon: "info",
    background: '#191919',
    confirmButtonColor: '#ffd300',
    confirmButtonText: `<span style="color: #000000"; "font-size: 20px"><b>Ok</b></span>`
  })
} 

