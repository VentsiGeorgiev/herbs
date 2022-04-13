import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  herbsDetails = [
    {
      id: '1f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Бял равнец',
      herbDetails: 'Белият равнец е една от най-често срещаните билки из земите на България. Има характерни бели плоски цветчета, струпани близо едни до други и приличащи на пита. В Древността е наричан мъжка билка, заради силните му кръвоспиращи свойства. Войниците използвали белия равнец след битка, налагайки го върху раните си, и оттам идва и прозвището му. Други пък го назовават като женска билка, защото спира вътрематочни кръвотечения, облекчава менструалните болки, дисменорея и хиперменорея, повлиява добре на жени в менопауза. Можем да обобщим, че ако имате нужда от кръвоспираща билка, белият равнец е това, което търсите.',
      herbImg: '../../assets/images/byal-ravnets.jpg'
    },
    {
      id: '2f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Маточина',
      herbDetails: 'ова многогодишно тревисто растение има характерен мирис на лимон и го прави билка, която не може да сбъркате. Листата на маточината са мъхести, със заоблени форми и леко заострено връхче. Има мощно успокоително действие, което превръща лечебната билка в природно средство за понижаване на стреса и безпокойството, за облекчаване на стомашно-чревни неразположения и в борбата с безсънието. Само 1 чаша чай от маточина е достатъчна да ви отпусне и да ви пренесе в обятията на съня.Маточината помага и в борбата с холестерола, като го регулира и така предпазва сърцето и кръвоносната система от различни болести и нарушения. Други важни свойства на билката са регулиране действието на щитовидната жлеза и защитаване от различни вирусни заболявания, като херпесния.',
      herbImg: '../../../assets/images/matochina.jpg'
    },
    {
      id: '3f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Мащерка',
      herbDetails: 'Още една билка, добре позната в България със своите силни ароматни качества, които я правят и ценена в кулинарията. Дребните твърди тъмнозелени листенца са струпани по много на всяко разклонение. Мащерка може да откриете по скалистите места в страната ни, огрени целодневно от слънцето, защото тя не обича твърде много влагата. Ароматната лековита билка е мощен антиоксидант, защото съдържа ценните за организма флавоноиди, терпинен и бета каротин. Освен това мащерката съдържа антимикробни и противовирусни съставки, които повишават имунитета, при възпаления в устната кухина и при проблеми с горните дихателни пътища.',
      herbImg: '../../../assets/images/mashterka.jpg'
    },
    {
      id: '4f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Коприва',
      herbDetails: 'Известна с парливото усещане, което оставя след допир, копривата е друга изключително полезна и лековита билка у нас, а за почитателите на зеленолистни храни – питателна и вкусна. Копривата има широко приложение в различни насоки, включително и в козметиката. Тя притежава кръвоспиращи свойства и помага за всякакви проблеми с кръвта, като анемия, и това я прави най-добрата билка за пречистване на кръвта. Тя намалява кръвната захар и оттам спомага за намаляване риска от заболяване с диабет; повлиява положително на, или напълно премахва проблеми с бъбреците, като песъчинки; действа превантивно срещу развитието на артрит и ревматизъм; помага да се отървем от пърхота и стимулира растежа на косата.',
      herbImg: '../../../assets/images/kopriva.jpg'
    },
    {
      id: '5f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Живовляк',
      herbDetails: 'Живовлякът е многогодишно растение с яйцевидни жилави листа. Има около 250 вида, но в България се срещат само 15, едни от които са теснолист и широколист живовляк. Също като смрадликата, тази билка има мощно антисептично и противовъзпалително действие – ако наложим свежи листа директно върху гнойна рана, те извличат зловредния секрет. Може да консумирате живовлякът суров в салата, заради съдържанието му на фолиева киселина, която е изключително важна за поддържане на жизнените функции на организма. Освен тези свойства, може да използвате живовлякът при ухапвания и ужилвания от насекоми – той ще извлече отровата от засегнатото място. Също, ако имате кашлица или други респираторни проблеми, тази чудна билка ще ви бъде от помощ.',
      herbImg: '../../../assets/images/zhivovlyak.jpg'
    },
    {
      id: '6f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Женско биле',
      herbDetails: 'Познато в България още като сладък корен, женското биле е помощник при справяне с всякакви стомашно-чревни неразположения – хранителн отравяне, язва или киселини. Лековитата билка, освен че стимулира възстановяването на стомашната лигавица, се бори с лошия дъх и възпалени венци. Растението ненапразно носи името си, защото е богато на фитоестрогени. Те облекчават някои симптоми на предменструален синдром, като раздразнителност, подуване на корема и гърдите. Женското биле повлиява много добре и при различни алергични реакции, като бронхиална астма, конюнктивит, алергичен ринит.',
      herbImg: '../../../assets/images/koreni-jensko-bile.jpg'
    },
    {
      id: '7f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Гръмотрън',
      herbDetails: 'Тази билка, приличаща на цвете, освен че е много красива е и много полезна, защото действа диуретично. Затова може да прилагате чай от гръмотрън в борбата с камъни в бъбреците. Освен това притежава и противовъзпалителни свойства, което го прави отлично средство за справяне с хроничен цистит, и една от ефикасните билки за простатата. В българската народна медицина гръмотрънът се използва и като лек срещу подагра.',
      herbImg: '../../../assets/images/tran.jpg'
    },
    {
      id: '8f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Здравец',
      herbDetails: 'Здравецът е друга традиционна за нашите ширини билка, която действа добре при проблеми със сърцето, като понижава кръвното налягане. Също така той намалява стреса и психическото напрежение, защото действа отпускащо на нервната система. Здравецът предотвратява развитието на бактерии и гъбични инфекции при рани и е мощно болкоуспокояващо средство. Здравецът има приложение и в козметиката, тъй като стимулира растежа на косата, бори се с пърхота и бързото омазняване на косата. В България се среща и една разновидност на обикновения здравец – кръвният. Може да използвате както листата, така и корените на растението, за да си правите лапи, запарки и чайове.',
      herbImg: '../../../assets/images/zdravec.jpg'
    },
    {
      id: '9f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Червено подъбиче',
      herbDetails: 'Червеното подъбиче е дребно полухрастче, което расте по сухи, варовити и каменисти места в България. То има силно тонизиращо, кръвоспиращо и диуретично действие. Запарка от билката се използва като възбуждащо за стомашно-чревния тракт средство: повишава апетита, засилва секрецията на жлъчен сок, а това подобрява храносмилането. Червеното подъбиче се прилага също така при диария и хемороиди. Препоръчително е растението да се използва само по лекарско предписание и под лекарски контрол.',
      herbImg: '../../../assets/images/cherveno-podabiche.jpg'
    },
    {
      id: '10f64a869-0642-4d53-aefc-f96d8e1392cf',
      herbName: 'Червено подъбиче',
      herbDetails: 'Известна още у нас като ирис, или цветето на бог Перун, откъдето идва и другото ѝ име, перуниката е билка, която изчиства храчките и помага при стомашно-чревни неразположения. Има противовъзпалително и аналгетично действие. Перуниката се отглежда в България и като декоративно растение, заради красивите си цветове.',
      herbImg: '../../../assets/images/perunika.jpg'
    },
  ]
}
