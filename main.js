(() => {
    const startBtn = document.querySelector('#start');
    const output = document.querySelector('#output');
    function start() {
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = "pt-BR";
      recognition.continuous = true;
      recognition.start();
      recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            const content = event.results[i][0].transcript.trim();
            output.textContent = content;
            if (content == "computador") {
                console.log("palavra chave reconhecida")
                console.log("enviando alertas de segurança para Vander - Apolinario - ForteGPS")
                console.log("Ativando gravação")
                console.log(".........monitoramento...........")
            } else {
                console.log("Sistema inativo")
            }
          }
        }
      };
    };
    startBtn.addEventListener('click', () => start());
  })();