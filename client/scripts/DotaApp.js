import React, { Component } from 'react';
import HeroCardsView from './components/HeroCardsView';

class DotaApp extends Component {
    constructor() {
        super();
        this.state = {
            heroes:
                [
                    {
                        name: "Zeus",
                        image: "./images/zeus.PNG",
                        imageStats: "./images/zeus_stats.PNG",
                        description: "Zeus, o Senhor dos Céus e pai dos deuses, considera todos os heróis como filhos indisciplinados e rebeldes. Depois de ter sido apanhado inúmeras vezes no meio de encontros com incontáveis mulheres mortais, a sua esposa divina deu-lhe finalmente um ultimato: 'Se gostas de mortais assim tanto, então vai e torna-te num deles. Se conseguires provar-te fiel, então regressa para mim como o meu marido imortal. Caso contrário, vai e morre entre as tuas criaturas.' Zeus achou a sua lógica (e a sua magia) irrefutável, e concordou com o seu plano. Ele tem-se portado extremamente bem desde então, provando gostar mais da imortalidade do que de mortais. Mas para se provar a si mesmo digno da sua esposa eterna, tem de continuar a perseguir a vitória no campo de batalha."
                    },
                    {
                        name: "Clockwerk",
                        image: "./images/clock.PNG",
                        imageStats: "./images/clock_stats.PNG",
                        description: "Rattletrap pertence à raça Keen, a mesma que a de Sniper e Tinker, e tal como muitos dessa raça, soube compensar a sua baixa estatura através da combinação de engenhocas com esperteza. Sendo filho do filho de um relojoeiro, Rattletrap foi durante muitos anos aprendiz desse ofício, até que a guerra veio das montanhas e varreu as aldeias das planícies de tais vocações tão inocentes. 'O teu novo ofício é a guerra', disse-lhe o seu pai, moribundo, enquanto a aldeia dos seus antepassados jazia em ruínas e cinzas fumegantes. Só os maus artesãos culpam as suas ferramentas, e Rattletrap nunca foi daqueles de inventar desculpas. Depois de enterrar o seu pai nas ruínas da sua aldeia, ele decidiu tornar-se na maior e mais poderosa ferramenta de combate que o mundo alguma vez viu. Ele prometeu a si mesmo que nunca voltaria a ser apanhado desprevenido, e para tal, tirou proveito dos seus talentos para criar a poderosa armadura Clockwerk, que fazia com que os cavaleiros de outras terras se parecessem com latas de conserva. Agora, Rattletrap vive em simbiose com os seus aparelhos; um guerreiro pequeno, mas mortífero, cujas habilidades para emboscar e destruir chegaram a níveis de eficácia típicos de uma máquina. Sendo um autêntico artesão da morte, as suas engenhocas são letais para os desprevenidos, anunciando uma nova aurora nesta era da guerra. Que horas são? São horas do Clockwerk!	"
                    },
                    {
                        name: "Axe",
                        image: "./images/axe.PNG",
                        imageStats: "./images/axe_stats.PNG",
                        description: "Como um recruta no Exército da Névoa Vermelha, Mogul Khan colocou como objetivo chegar a General. Batalha após batalha ele provou o seu valor através de ações sangrentas. A sua subida pelas fileiras foi influenciada pelo facto de ele nunca ter hesitado em decapitar um superior. Ao longo dos sete anos da Campanha dos Mil Lagos, ele destacou-se dos outros em massacres gloriosos, com a sua estrela da fama brilhando cada vez mais, enquanto que o número de camaradas diminuía constantemente. Na noite da sua vitória derradeira, ele declarou-se o novo General da Névoa Vermelha, e intitulou-se de Axe. Mas as suas tropas estavam agora reduzidas a zero. Claro que, muitos morreram em batalha, mas um número significante caiu perante a lâmina de Axe. Escusado será dizer que agora a maioria dos soldados evita a sua liderança. Mas isto não interessa nada a Axe, pois ele sabe que um exército de um só homem é, sem dúvida, o melhor.	"
                    },
                    {
                        name: "Bane",
                        image: "./images/bane.PNG",
                        imageStats: "./images/bane_stats.PNG",
                        description: "Quando os deuses têm pesadelos, é o Bane Elemental que os traz. Também conhecido como Atropos, Bane nasceu dos pesadelos da deusa Nyctasha. Um terror demasiado poderoso para ser contido pelo sono, ele emergiu dos seus sonhos, alimentou-se da sua imortalidade, e roubou a sua forma gasosa do seu sangue escuro. Ele é a essência do medo. Os mortais que ouvem a sua voz ouvem os seus segredos mais tenebrosos serem-lhes sussurrados ao ouvido. Ele apela ao medo escondido nos corações dos Heróis. A insónia não serve de proteção, pois o sangue negro do Bane, continuamente a escorrer, é o asfalto que rodeia os seus inimigos de pesadelos. Na presença de Bane, qualquer Herói se relembra do medo da escuridão."
                    },
                    {
                        name: "Batrider",
                        image: "./images/batrider.PNG",
                        imageStats: "./images/batrider_stats.PNG",
                        description: "Não existe tal coisa como a harmonia por entre as criaturas da selva de Yama Raskav. Dentadas, garras, pinças ou cascos, até o mais pequeno sinal de fraqueza significa uma morte rápida. Diz-se que o Rider era apenas um moço a cortar palha no terreno da sua família quando foi agarrado por um morde-bat gigante e esfomeado que procurava por presas. Mas como ser comido não estava nos planos deste rapaz, ele retorceu-se até conseguir sair das garras do seu raptor e trepou para as costas da criatura e esfaqueou-a com as suas ferramentas. Depois de se despenhar, o rapaz levantou-se, ensanguentado e sobrecarregado de emoções - foi aí que ele se apercebeu que tinha encontrado a sua vocação. O rapaz cresceu e a cada verão ele regressava aos terrenos da sua família, indo regularmente para os baldios à procura daquela primeira emoção de encarar a morte na forma de mandíbulas ou de uma queda fatal. Os anos passaram, mas o seu fulgor apenas aumentou. Ele estudou a selva, explorando cada vez mais profundamente com cada expedição, até que finalmente descobriu como chegar às cavernas no pleno coração da hostilidade. Diz-se que o Rider, na véspera de uma noite tórrida de verão, não tinha nada senão uma corda, uma garrafa de coragem líquida e uma determinação ardente de voltar a sentir os céus mais uma vez, quando ele entrou lá pela primeira vez...	"
                    },
                    {
                        name: "Rexxar",
                        image: "./images/rexxar.PNG",
                        imageStats: "./images/rexxar_stats.PNG",
                        description: "Karroch cresceu sem família. A sua mãe morreu ao dar à luz; o seu pai, um ferrador ao serviço do Último Rei de Slom, foi espezinhado até à morte quando Karroch tinha cinco anos. Mais tarde, Karroch foi obrigado a trabalhar como tratador na coleção de animais do rei, onde cresceu no meio das feras da corte: leões, gorilas, veados demoníacos e coisas menos conhecidas, coisas em que quase ninguém acreditava existirem. Quando o rapaz tinha sete anos, um explorador trouxe uma fera nunca antes vista. Arrastada até ao Rei, acorrentada, a criatura falou, porém, a sua boca não se tinha mexido. As suas palavras: um apelo à liberdade. O Rei apenas se riu e ordenou que a fera atuasse para o seu entretenimento, e quando ela recusou, o rei bateu-lhe com o seu Cetro da Loucura e ordenou que fosse arrastada para os estábulos. Ao longo dos meses, Karroch levava comida e ervas medicinais às escondidas para a criatura ferida, mas apenas conseguia atrasar o inevitável. Sem utilizar palavras, a criatura falava com o rapaz, e ao longo do tempo o laço de amizade entre eles foi fortalecendo até que o rapaz se apercebeu de que podia comunicar de volta. Na verdade, agora conseguia falar com todas as criaturas da coleção do Rei. Na noite em que a criatura morreu, uma fúria tomou conta do rapaz. Ele incentivou os animais da corte a rebelarem-se e abriu as suas jaulas para que se libertassem e deixassem o palácio em alvoroço. s"
                    }
                ]
        }
    }
    render() {
        return (
            <div>
                <HeroCardsView selectedHero={this.state.heroes[0]} heroes={this.state.heroes} />
            </div>
        );
    }
}
export default DotaApp;