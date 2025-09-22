function calcularIntervalo() {
    const resultado = document.querySelector("#Resultado")

    // inicio do intervalo
    const horaEntrada = document.querySelector("#horaEntrada").value
    const intervalo = document.querySelector("#intervalo").value

    if (!horaEntrada || !intervalo) {
        resultado.textContent = "Preencha todos os campos!"
        return
    }

    const total = somarHoras(horaEntrada, intervalo)

    resultado.textContent = total

}

function somarHoras(hora1, hora2) {

    // separar em hora e minutos
    const [h1, m1] = hora1.split(":").map(Number)
    const [h2, m2] = hora2.split(":").map(Number)

    // Converter para munitos
    const totalMinutos = (h1 * 60 + m1) + (h2 * 60 + m2)

    // Converter para horas
    const horas = Math.floor(totalMinutos / 60)
    const minutos = totalMinutos % 60

    return `Você deve voltar: ${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`
}