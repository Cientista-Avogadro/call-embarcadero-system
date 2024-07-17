var btnSpeak = document.querySelector('#btnSpeak');
var btnFinalizar = document.querySelector('#btnFinish');
var btnReset = document.querySelector('#btnReset');
var balcon = document.querySelector('#balcon');
var service = document.querySelector('#service');
var password = document.querySelector('#password');
var callCellTotal = document.querySelectorAll('#callsTableBody tr td');

var serviceUser = document.querySelector('#service-user');
var subServiceUser = document.querySelector('#sub-service-user');
var btnBook = document.querySelector('#btnBook');


var serviceList = [
    {
        password: 1,
        serviceId: 1,
        balconId: 1,
    },
    {
        password: 1,
        serviceId: 1,
        balconId: 1,
    },
    {
        password: 1,
        serviceId: 2,
        balconId: 2,
    },
    {
        password: 1,
        serviceId: 3,
        balconId: 3,
    },
    {
        password: 1,
        serviceId: 4,
        balconId: 4,
    },
    {
        password: 1,
        serviceId: 1,
        balconId: 1,
    },
    {
        password: 1,
        serviceId: 2,
        balconId: 2,
    },
    {
        password: 1,
        serviceId: 3,
        balconId: 3,
    },
    {
        password: 1,
        serviceId: 4,
        balconId: 4,
    },
    {
        password: 1,
        serviceId: 1,
        balconId: 1,
    },
    {
        password: 1,
        serviceId: 2,
        balconId: 2,
    },
    {
        password: 1,
        serviceId: 3,
        balconId: 3,
    },
    {
        password: 1,
        serviceId: 4,
        balconId: 4,
    },
    {
        password: 1,
        serviceId: 1,
        balconId: 1,
    },
    {
        password: 1,
        serviceId: 2,
        balconId: 2,
    },
    {
        password: 1,
        serviceId: 3,
        balconId: 3,
    },
    {
        password: 1,
        serviceId: 4,
        balconId: 4,
    },
    {
        password: 1,
        serviceId: 1,
        balconId: 1,
    },
    {
        password: 1,
        serviceId: 2,
        balconId: 2,
    },
    {
        password: 1,
        serviceId: 3,
        balconId: 3,
    },
    {
        password: 1,
        serviceId: 4,
        balconId: 4,
    },
    {
        password: 1,
        serviceId: 1,
        balconId: 1,
    },
    {
        password: 1,
        serviceId: 2,
        balconId: 2,
    },
    {
        password: 1,
        serviceId: 3,
        balconId: 3,
    },
    {
        password: 1,
        serviceId: 4,
        balconId: 4,
    }

]




resetAll()

function getTotalServiceByid(serviceId) {
    var total = 0;
    serviceList.forEach(service => {
        if (service.serviceId === serviceId) {
            total++;
        }
    });
    return total;
}


function LoadData() {
    callCellTotal[0].innerHTML = getTotalServiceByid(1);
    callCellTotal[1].innerHTML = getTotalServiceByid(2);
    callCellTotal[2].innerHTML = getTotalServiceByid(3);
    callCellTotal[3].innerHTML = getTotalServiceByid(4);
}


function getAutoIncrementId(serviceId) {
    var maxId = 0;
    serviceList.forEach(service => {
        if (service.serviceId === serviceId) {
            if (service.password > maxId) {
                maxId = service.password;
            }
        }
    });
    return maxId + 1;
}


function verifyPasswordId(item) {

    switch (item.serviceId) {
        case 1:
            password1Id = (password1Id && password1Id < getTotalServiceByid(1)) ? password1Id + 1 : 1;
            document.querySelector(".A #callA").innerHTML = getServiceLetterById(item.serviceId);
            document.querySelector(".A #callB").innerHTML = formatPassword(item);
            document.querySelector(".A #callC").innerHTML = balcon.value;

            break;
        case 2:
            password2Id = (password2Id && password2Id < getTotalServiceByid(2)) ? password2Id + 1 : 1;
            document.querySelector(".B #callA").innerHTML = getServiceLetterById(item.serviceId);
            document.querySelector(".B #callB").innerHTML = formatPassword(item);
            document.querySelector(".B #callC").innerHTML = balcon.value;

            break;
        case 3:
            password3Id = (password3Id && password3Id < getTotalServiceByid(3)) ? password3Id + 1 : 1;
            document.querySelector(".C #callA").innerHTML = getServiceLetterById(item.serviceId);
            document.querySelector(".C #callB").innerHTML = formatPassword(item);
            document.querySelector(".C #callC").innerHTML = balcon.value;

            break;
        case 4:
            password4Id = (password4Id && password4Id < getTotalServiceByid(4)) ? password4Id + 1 : 1;
            document.querySelector(".D #callA").innerHTML = getServiceLetterById(item.serviceId);
            document.querySelector(".D #callB").innerHTML = formatPassword(item);
            document.querySelector(".D #callC").innerHTML = balcon.value;

            break;
        default:
            break;

    }
}

service.addEventListener('change', () => {
    verifyAndDisableSpeakBtnBytotal();
});

function verifyAndDisableSpeakBtnBytotal() {
    switch (parseInt(service.value)) {
        case 1:
            if (getTotalServiceByid(1) <= 0 || getTotalServiceByid(1) === password1Id) {
                btnSpeak.disabled = true;
            } else {
                btnSpeak.disabled = false;
            }
            break;
        case 2:
            if (getTotalServiceByid(2) <= 0 || getTotalServiceByid(2) === password2Id) {
                btnSpeak.disabled = true;
            } else {
                btnSpeak.disabled = false;
            }
            break;
        case 3:
            if (getTotalServiceByid(3) <= 0 || getTotalServiceByid(3) === password3Id) {
                btnSpeak.disabled = true;
            } else {
                btnSpeak.disabled = false;
            }
            break;
        case 4:
            if (getTotalServiceByid(4) <= 0 || getTotalServiceByid(4) === password4Id) {
                btnSpeak.disabled = true;
            } else {
                btnSpeak.disabled = false;
            }
            break;
        default:
            return 0;
    }
}


var speaks = [
    {
        "name": "Clarinha",
        "lang": "pt-BR"
    }
]

btnFinalizar.addEventListener('click', () => {
    speechSynthesis.cancel(); //cancela a fala
});

btnReset.addEventListener('click', () => {
    resetAll();
});


function resetAll() {
    serviceList = []
    currentCall = null;
    LoadData();
    verifyAndDisableSpeakBtnBytotal();
    document.querySelector(".resultCall").innerHTML = `
        <tr class="A">
                  <td id="callA" class="call">A</td>
                  <td id="callB" class="call">000</td>
                  <td id="callC" class="call">0</td>
                </tr>
                <tr class="B">
                  <td id="callA" class="call">B</td>
                  <td id="callB" class="call">000</td>
                  <td id="callC" class="call">0</td>
                </tr>
                <tr class="C">
                  <td id="callA" class="call">C</td>
                  <td id="callB" class="call">000</td>
                  <td id="callC" class="call">0</td>
                </tr>
                <tr class="D">
                  <td id="callA" class="call">D</td>
                  <td id="callB" class="call">000</td>
                  <td id="callC" class="call">0</td>
                </tr>
    `;
}


btnSpeak.addEventListener('click', () => {

    if (verifyItem()) {

        LoadData();
        verifyPasswordId(currentCall);
        verifyAndDisableSpeakBtnBytotal();
        fillCurrentCall();

        const msg = new SpeechSynthesisUtterance();
        msg.volume = 1; //define o volume do áudio (de 0 a 1)
        msg.rate = 0.8; // define a velocidade do áudio (0.1 a 1)
        msg.pitch = 1; // define o tom em que o áudio é falado (de 0 a 2)
        msg.text = formatMessageToSpeech(currentCall); //Pega o valor do input e passa para o objeto sintetizar


        const voice = speaks[0]; //pegamos o objeto que queremos que seja a nossa fala. [0], pois nosso array speaks só possui uma posição, que é a que queremos (Clarinha pt-BR)
        voice.voiceURI = voice.name; //voiceURI busca o servidor da voz escolhida, no caso, pt-BR defnido em voice.name
        msg.lang = voice.lang; // Define o idioma a ser utilizado para a fala, no caso, o que foi definido para voice.lang

        speechSynthesis.speak(msg); //executa a voz
    }

    currentCall = null;

});

function formatPasswordByService(item) {
    switch (item.serviceId) {
        case 1:
            return `A${item.password < 10 ? `00${item.password}` : (item.password > 10 && item.password < 100 ? `0${item.password}` : item.password)}`;
        case 2:
            return `B${item.password < 10 ? `00${item.password}` : (item.password > 10 && item.password < 100 ? `0${item.password}` : item.password)}`;
        case 3:
            return `C${item.password < 10 ? `00${item.password}` : (item.password > 10 && item.password < 100 ? `0${item.password}` : item.password)}`;
        case 4:
            return `D${item.password < 10 ? `00${item.password}` : (item.password > 10 && item.password < 100 ? `0${item.password}` : item.password)}`;
        default:
            return "";

    }
}

function formatPassword(item) {
    switch (item.serviceId) {
        case 1:
            return `${password1Id < 10 ? `00${password1Id}` : (password1Id > 10 && password1Id < 100 ? `0${password1Id}` : password1Id)}`;
        case 2:
            return `${password2Id < 10 ? `00${password2Id}` : (password2Id > 10 && password2Id < 100 ? `0${password2Id}` : password2Id)}`;
        case 3:
            return `${password3Id < 10 ? `00${password3Id}` : (password3Id > 10 && password3Id < 100 ? `0${password3Id}` : password3Id)}`;
        case 4:
            return `${password4Id < 10 ? `00${password4Id}` : (password4Id > 10 && password4Id < 100 ? `0${password4Id}` : password4Id)}`;
        default:
            return "";
    }
}

function getServiceLetterById(id) {
    switch (id) {
        case 1:
            return "A";
        case 2:
            return "B";
        case 3:
            return "C";
        case 4:
            return "D";
        default:
            return "";
    }
}

function formatMessageToSpeech(item) {

    switch (item.serviceId) {
        case 1:
            return `Serviço ${getServiceLetterById(item.serviceId)}, Senha ${password1Id}, Balcão ${balcon.value}!`;
        case 2:
            return `Serviço ${getServiceLetterById(item.serviceId)}, Senha ${password2Id}, Balcão ${balcon.value}!`;
        case 3:
            return `Serviço ${getServiceLetterById(item.serviceId)}, Senha ${password3Id}, Balcão ${balcon.value}!`;
        case 4:
            return `Serviço ${getServiceLetterById(item.serviceId)}, Senha ${password4Id}, Balcão ${balcon.value}!`;
        default:
            return "";
    }


}

function verifyItem() {
    if (service.value && balcon.value) {

        const item = serviceList.find(x => x.serviceId === parseInt(service.value));

        if (item) {
            currentCall = item;
            return true;
        } else {
            alert('Chamada não encontrada!');
            return false;
        }
    } else {
        return false;
    }
}


function fillCurrentCall() {
    if (currentCall) {
        password.innerHTML = `Serviço:${getServiceLetterById(currentCall.serviceId)} - Senha: ${formatPassword(currentCall)} - Balcão:${balcon.value}`;
    } else {
        password.innerHTML = `Nenhuma chamada ativa`;
    }
}

function AddNewService() {
    const serviceId = parseInt(serviceUser.value);
    const subServiceId = parseInt(subServiceUser.value);

    if (serviceId && subServiceId) {

        serviceList.push({
            password: getAutoIncrementId(serviceId),
            serviceId: serviceId,
            balconId: subServiceId
        });
        LoadData();

    }
}

btnBook.addEventListener('click', () => {
    AddNewService();
    verifyAndDisableSpeakBtnBytotal();
});

LoadData();