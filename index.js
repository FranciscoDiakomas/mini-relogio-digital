// @ts-nocheck

//activando o relogio
function pegarData () {
        
        //inicializando o objecto Date
                const data = new Date()

         //pegando dados do tempo
        let hora = data.getHours()
        let minuto = data.getMinutes()
        let segundo = data.getSeconds()
        let diaSemana = data.getDay()
        let mes = data.getMonth() + 1
        let ano = data.getFullYear()
        let dia = data.getDate()

        switch (diaSemana) {
                case 0:
                        diaSemana = 'Domingo'
                        break;
                case 1:
                        diaSemana = 'Segunda-Feira'
                        break;
                case 2:
                        diaSemana = 'Terça-Feira'
                        break;
                case 3:
                        diaSemana = 'Quarta-Feira'
                        break;
                case 4:
                        diaSemana = 'Quinta-Feira'
                        break;
                case 5:
                        diaSemana = 'Sexta-Feira'
                        break;
                case 6:
                        diaSemana = 'Sábado'
                        break;
                default:
                        break;
        }
        
        //inserindo dados
        let diaRes = document.querySelector('.diaSemana')
        let dataRes = document.querySelector('.data')
        let tempoRes = document.querySelector('.tempo')

        
          if (String(hora).length === 1 && String(minuto).length === 1) {
                tempoRes.textContent = `0${hora} : 0${minuto} : ${segundo}`
        } else {
                 tempoRes.textContent = `${hora} : ${minuto} : ${segundo}`
          }
        

        if (String(mes).length === 1 && String(dia).length === 1) {
                dataRes.textContent = `0${dia} / 0${mes} / ${ano}`
        } else {
                 dataRes.textContent = `${dia} / ${mes} / ${ano}`
        }

        diaRes.textContent = diaSemana
        
}
setInterval(pegarData,1000)