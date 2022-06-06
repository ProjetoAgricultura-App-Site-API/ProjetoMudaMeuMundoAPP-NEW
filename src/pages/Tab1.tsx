import { IonContent, IonHeader, IonInput, IonPage, IonDatetime, IonTitle, IonToolbar,IonButton, IonItem, IonLabel, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useParams, useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';



const Tab1: React.FC = () => {
  const urlUsers = "http://localhost:5700/api";
  const urlPRODS = "http://localhost:5600/api";
  const [Produto, setProduto] = useState('');
  const [Quantidade, setQuantidade] = useState('');
  const [listOfOptions, setListOfOptions]:any = useState([]);
  const [data, setData] = useState('');
  const history = useHistory();
  const [name, setname] = useState('')
  React.useEffect(() => {
    setname(window.location.href.split("?").slice(-1)[0])
  }, [])


  function procurarProduto(Produto:string){
    const fruitslist = ["Abacate","Abacaxi","Abóbora","Abóbora(flor)","Abobrinha","Acelga","Acelga-Chinesa","Agave-Caribenho","Agrião","Agrião-do-Líbano","Aipim","Aipo","Alcachofra","Alcaparra","Alecrim","Alface","Alfafa(broto)","Alfavaca","Alho","Alho-Poró","Almeirão","Amaranto","Amêndoa","Amendoim","Amendoim-da-Mata","Amora","Andu","Arachachá","Arroz","Arroz-Selvagem","Aspargo","Aveia","Avelã","Azedinha","Azeitona","Açafrão","Açafrão","Bacuri","Banana","Baroa","Batata","Batata-Doce","Batata-Doce(folha)","Beldroega","Beldroega-Grande","Beldroegão","Berdana","Berdana(folha)","Berinjela","Bertalha","Bertalha-Coração","Beterraba","Bredo","Brócolis","Buriti","Cabotchan","Cacau","Café","Caju","Cambuquira","Capeba","Capiçoba","Capuchinha","Cará","Cará-do-Ar","Cará-Moela","Carambola","Carambola","Caruru","Caruru-Manteiga","Castanha-de-Baru","Castanha-de-Caju","Castanha-de-Macaco","Castanha-do-Maranhão","Castanha-do-Pará","Castanheiro-do-Mato","Catalonha","Caxi","Cebola","Cebolinha","Celósia","Celósia(sementes)","Cenoura","Centeio","Cevada","Chalota","Chaya","Chia","Chichá","Chichá-do-Norte","Chicória","Chuchu","Coentro","Colza","Comelina","Couve","Couve-de-Bruxelas","Couve-de-Milão","Couve-de-Saboia","Couve-Flor","Couve-Lombarda","Couve-Nabo","Couve-Nabo(folha)","Couve-Rábano","Couve-Rábano","Couvinha","Cumaru","Dendê","Dill","Echalota","Embaúba","Endívia","Erva-Cidreira","Erva-Doce","Erva-Luísa","Erva-Mate","Ervilha","Ervilha-de-Pombo","Escarola","Escorcioneira","Espinafre","Espinafre-de-Okinawa","Estragão","Fava","Feijão","Feijão(broto)","Feijão-Andu","Feijão-Azuki","Feijão-Boer","Figo","Framboesa","Fruta-Pão","Funcho","Gengibre","Gergelim","Gergelim(broto)","Girassol(semente)","Gobô","Gobô(folha)","Goiaba","Goiaba","Goya","Grão-de-Bico","Grão-de-Bico(broto)","Graviola","Groselha","Grumixama","Guandu","Guasca","Hibisco","Hortelã","Inajá","Ingá","Inhame","Inhame(folha)","Jabuticaba","Jaca Verde","Jalapeño","Jambo","Jasmim-Manga","Jicama","Jiló","Kiwi","Kohlrabi","Kohlrabi(folha)","Labaca","Labaca(folha)","Lambari-da-Horta","Laranja Hamlin","Laranja-Baía","Laranja-da-Terra","Laranja-Lima","Laranja-Natal","Laranja-Pera","Lentilha","Lentilha(broto)","Lichia","Limão","Linhaça","Linhaça(broto)","Lírio-do-Brejo","Louro","Macassá","Maçã","Madressilva","Major-Gomes","Malagueta","Malte","Mamão","Mandioca","Mandioquinha","Manjericão","Manjerona","Maria-Gorda","Marmelo","Maxixe","Melancia","Melão","Mendubiguaçu","Milho","Mitsubá","Mogango","Monguba","Moranga","Morango","Mostarda","Nabo","Nabo-da-Suécia","Nabo-da-Suécia(folha)","Nabo-Mexicano","Nectarina","Nêspera","Noz","Nozes-da-Macadâmia","Olho-de-Boi","Oliva","Ora-Pro-Nobis(Orabrobó)","Orégano","Orelha-de-Coelho","Palma","Palmito","Paru","Pau-Rei","Pé-de-Anta","Peixinho-da-Horta","Pelega","Pepino","Pepino-Japonês","Pequi","Pera","Pêssego","Physalis","Picão","Pimenta","Pimentão","Pinhão","Pistache","Quiabo","Quina","Quinoa","Rabanete","Rábano","Rábano-Silvestre","Radicchio","Raiz-Forte","Repolho","Romã","Rúcula","Ruibarbo","Rutabaga","Rutabaga(folha)","Salsa","Salsão","Sálvia","Sapoti","Seriguela","Serralha","Shissô","Shissô(sementes)","Soja","Soja(broto)","Sorgo","Taioba","Taioba(batata)","Tâmara","Tamarindo","Tangerina","Taro","Taro(folha)","Tingensai","Tomate","Tomate-Cereja","Tomilho","Tonka","Trapoeraba","Trevo(broto)","Trigo","Trigo(broto)","Tupinambo","Umbu","Urtiga","Urucum","Uva","Vagem","Veludo","Vinagreira","Wampee","Wasabi","Wasabi(folha)","Xixá","Xoconostle","Yamamomo","Zimbro","Zizânia"] //Pesquisa e ordenação por Rennan Januario
    console.log(Produto)
    const filteredFruitsList = fruitslist.filter((value) => {
        const lengthWord = Produto.length
        const newWord = value.slice(0, lengthWord)
        if (Produto.toLowerCase() == newWord.toLowerCase()){
            return value
        }
    })
    setListOfOptions(filteredFruitsList)
  }

  let lista = {
    Login: '',
    Senha:'',
    Nome:'',
    Sobrenome: '',
    Email: '',
    Telefone: ''
  };
  axios.get(urlUsers)
    .then(response => {
    var listaUser = response.data.userlogado;
    lista = listaUser; //PEGA OS DADOS DO USUÁRIO LOGADO NA API DE USERS DO APP PARA MANDAR PARA A API DE PRODUTOS
    }).catch(error => error)



  //AQUI DÁ PRA ADICIONAR O PRODUTO NA API FAZENDO UM POST
  function venderProduto(){
    let formProduto = { //ADICIONA A RESPOSTA DO FORM JUNTO COM DADOS DE USUÁRIO NA API DE PRODUTOS 
      Nome: lista.Nome,
      Sobrenome: lista.Sobrenome,
      Email: lista.Email,
      Numero: lista.Telefone,
      Produto: Produto,
      Quantidade: Quantidade,
      Data: data
    }

    axios.post(urlPRODS, formProduto) //POST DA API DE PRODUTOS 
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    
    <IonPage className='TelasInternas'>
      <IonHeader>
        <IonToolbar>
          <IonTitle id="TITULOTAB1">Vender Produtos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonTitle id="TITULOTAB1" size="large">O que deseja vender hoje?</IonTitle>
      
        <div id='login-container'>
      <form onSubmit={venderProduto}>
        <IonItem class='ionItem'>
          <IonLabel position="fixed">Item</IonLabel>
            <input list='browsers' type='text' value={Produto} placeholder="Vender o que?" onChange={e => {setProduto(e.target.value!);procurarProduto(e.target.value)}}required>
            </input>
            <datalist id="browsers">
              {listOfOptions.map((value: string, index: number) => {
                return <option value={`${value}`}></option>
              })}
            </datalist>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Quantidade</IonLabel>
            <IonInput type='text' value={Quantidade} placeholder="Digite em KG." onIonChange={e => setQuantidade(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Data</IonLabel>
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} required></input>
        </IonItem>

        
        <IonButton color="primary" type='submit'>Vender!</IonButton>
      </form>
    </div>



        <div id="botao-retornar">
        <IonButton color="success" routerLink='/tab2'>Retornar</IonButton>
        </div>

        <div id="footer">
       <p>Ecomp 2022.1</p>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
