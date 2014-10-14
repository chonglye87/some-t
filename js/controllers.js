var davControllers = angular.module('davControllers', []);

davControllers.controller('LandingController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.sideview = 'sidebar-left';
    $rootScope.container = 'landing-container';

    angular.element(document).ready(function () {
      $('#fullpage').fullpage({
        continuousVertical: true,
        navigation: true,
        navigationPosition: 'right'

      });
    });
  }
]);

davControllers.controller('AboutController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.sideview = 'sidebar-right';
    $rootScope.container = 'about-container';
  }
]);

davControllers.controller('VolunteersController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $scope.responces = [
      {
        id: "resp-5345",
        author: 'Tom Waits',
        photo: 'http://skyethelimit.files.wordpress.com/2012/03/389202_tomwaits-2portrait.jpg',
        content: 'Waits\' lyrics frequently present atmospheric portraits of grotesque, often seedy characters and places—although he has also shown a penchant for more conventional ballads. He has a cult following and has influenced subsequent songwriters despite having little radio or music video support. His songs are best-known through cover versions by more commercial artists: "Jersey Girl", performed by Bruce Springsteen, "Ol\' \'55", performed by the Eagles, and "Downtown Train", performed by Rod Stewart. Although Waits\' albums have met with mixed commercial success in his native United States, they have occasionally achieved gold album sales status in other countries. He has been nominated for a number of major music awards and has won Grammy Awards for two albums, Bone Machine and Mule Variations. In 2011, Waits was inducted into the Rock and Roll Hall of Fame'
      },
      {
        id: "rsep-5346",
        author: 'Leon Trotsky',
        photo: 'http://img.timeinc.net/time/photoessays/2010/top10_assassinations/leon_trotsky.jpg',
        content: 'Trotsky was initially a supporter of the Menshevik Internationalists faction of the Russian Social Democratic Labour Party. He joined the Bolsheviks immediately prior to the 1917 October Revolution, and eventually became a leader within the Party. During the early days of the Soviet Union, he served first as People\'s Commissar for Foreign Affairs and later as the founder and commander of the Red Army as People\'s Commissar of Military and Naval Affairs. He was a major figure in the Bolshevik victory in the Russian Civil War (1918–23). He was also among the first members of the Politburo.'
      },
      {
        id: "rsep-5347",
        author: 'David Lynch',
        photo: 'http://www.interviewmagazine.com/files/2012/01/08/img-david-lynch-01-_184117216071.jpg',
        content: 'Born to a middle-class family in Missoula, Montana, Lynch spent his childhood traveling around the United States, before going on to study painting at the Pennsylvania Academy of Fine Arts in Philadelphia, where he first made the transition to producing short films. Deciding to devote himself more fully to this medium, he moved to Los Angeles, where he produced his first motion picture, the surrealist horror Eraserhead (1977). After Eraserhead became a cult classic on the midnight movie circuit, Lynch was employed to direct The Elephant Man (1980), from which he gained mainstream success. Then being employed by the De Laurentiis Entertainment Group, he proceeded to make two films: the science-fiction epic Dune (1984), which proved to be a critical and commercial failure, and then a neo-noir crime film, Blue Velvet (1986), which was critically acclaimed.'
      },
      {
        id: "rsep-5348",
        author: 'Nick Cave',
        photo: 'http://galeri12.uludagsozluk.com/506/nick-cave_607880.jpg',
        content: 'He is best known for his work as lead singer of the rock band Nick Cave and the Bad Seeds, established in 1983, a group known for its eclectic influences and musical styles. Before that, he fronted the post-punk group The Birthday Party in the early 1980s, a band renowned for its confrontational live shows and violent sound influenced by blues and free jazz. In 2006, he formed the garage rock band Grinderman, releasing its debut album the following year. Cave\'s music is generally characterised by emotional intensity, a wide variety of influences, and lyrical obsessions with religion, death, love and violence'
      },
      {
        id: "rsep-5349",
        author: 'Tim Burton',
        photo: 'http://www.peterguber.com/telltowin/ssp/tim-burton/public/assets/62/00/92/esq_tim_burton_063009_lg_63999350.jpg',
        content: 'Burton has worked repeatedly with Johnny Depp, who has become a close friend of Burton since their first film together. He has also worked with musician Danny Elfman, who has composed scores for all but two of the films Burton has directed. Actress Helena Bonham Carter, Burton\'s domestic partner, has appeared in many of his films. He also wrote and illustrated the poetry book The Melancholy Death of Oyster Boy & Other Stories, published in 1997, and a compilation of his drawings, sketches and other artwork, entitled The Art of Tim Burton, was released in 2009.'
      },
      {
        id: "rsep-5350",
        author: 'Patrick Carney',
        photo: 'https://pbs.twimg.com/profile_images/378800000127363548/e27916b28df38790c3ddb8b0473d09e0.jpeg',
        content: 'Carney\'s father, Jim, and stepmother, Katie Byard, are reporters for the Akron Beacon Journal in Ohio. His mother, Mary Stormer, is an Akron Municipal Court deputy clerk and is a former member of the Akron Board of Education. His stepfather, Barry Stormer, owns B. A. Stormer Construction Services. His uncle, Ralph Carney, is a professional sax player, and has played with Tom Waits, among others. After Carney\'s parents divorced when he was 8, he lived part of the time with his mother, Mary Stormer, and part of the time with his father, Jim Carney, who had moved to a different neighborhood on the west side of Akron, Ohio. Dan Auerbach also lived in this neighborhood, and the two met and played tag football with Auerbach\'s friends, although they did not become friends until high school. As a teenager, Carney was musically influenced by bands such as Pavement, Captain Beefheart and fellow Akron band Devo'
      }

    ];

    $rootScope.sideview = 'sidebar-right';
    $rootScope.container = 'volunteers-container';
  }
]);

davControllers.controller('CompaniesController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $scope.companies = [
      {
        id: "visa",
        title: "Visa to Home",
        description: "Проект, который помогает оформить визы не выходя из дома",
        logo: "/img/icons/com_visa.svg",
        url: "https://www.visatohome.ru/",
        is_promoed: true
      },
      {
        id: "datravel",
        title: "Da! Travel",
        description: "Купите отель или билет в интернете",
        logo: "/img/icons/com_datravel.png",
        url: "http://www.datravel.com/",
        is_promoed: true
      },
      {
        id: "rosneft",
        title: "Rosneft",
        description: "А чего добился ты?",
        logo: "http://seeker401.files.wordpress.com/2014/05/rosneftlogov.png?w=497",
        url: "http://www.rosneft.ru/",
        is_promoed: true
      },
      {
        id: "heinz",
        title: "Heinz",
        description: "Наш непатриотичный томатный спонсор",
        logo: "http://home-sweet-home.ru/shops/img/brands/53b.gif",
        url: "http://www.heinz.ru/",
        is_promoed: false
      },
      {
        id: "rocketbank",
        title: "Rocketbank",
        description: "Просто какие-то знакомые чуваки мимо проходили",
        logo: "http://futurebanking.ru/upload/posts/images/show/x5165629f70b59.png.pagespeed.ic.Qhqyke42CO.png",
        url: "https://rocketbank.ru/",
        is_promoed: false
      },
      {
        id: "jameson",
        title: "Jameson",
        description: "Питкий виски на всякий случай жизни. True Detective одобряет.",
        logo: "http://www.spirituosentheke.de/media/jameson-logo.jpg",
        url: "http://www.jamesonwhiskey.com/",
        is_promoed: false
      }
    ];

    $rootScope.sideview = 'sidebar-right';
    $rootScope.container = 'companies-container';
  }
]);

davControllers.controller('ActionsController', ['$scope', '$rootScope', '$state', '$stateParams', '$timeout',
  function($scope, $rootScope, $state, $stateParams, $timeout) {
    $scope.actions = [
      {
        id: "act0341",
        title: "В Сосновом бору спасли упитанного лисенка",
        preview: "http://99px.ru/sstorage/56/2013/11/image_560311131412465044460.jpg",
        description: "ЧП с рыжим хитрюгой произошло 6 октября в Сосновом бору под Питером. Лисенок прибежал поближе к людям в поисках пищи и начал везде совать любопытный нос. Шестимесячный лисенок засунул голову в ржавый тормозной диск и уже не смог самостоятельно выбраться обратно.",
        archived: true,
        helpCount: 26
      },
      {
        id: "act0342",
        title: "Нижего­родский монастырь открыл прием заказов через iPhone",
        preview: "http://www.pecherskiy.nne.ru/upload/images/news/814421f21073c3aa620f9f026ad308a3.jpg",
        description: "Нижегородский Вознесенский Печерский мужской монастырь предложил прихожанам заказывать требы с помощью специального приложения для iPhone, которое можно скачать в App Store. Пользователи приложения могут выбрать нужные требы из предложенных 14 треб «о здравии» и 10 «об упокоении».",
        archived: false,
        helpCount: 19
      },
      {
        id: "act0343",
        title: "В Смоленске енот Веня прятался в кинотеатре",
        preview: "http://static.beautyinsider.ru/2010/09/bd871b4a2971.jpg",
        description: "Енот Веня, сбежавший с передвижной выставки животных в Смоленске, две недели прятался над экраном в кинозале, сообщают местные СМИ.",
        archived: false,
        helpCount: 89
      },
      {
        id: "act0344",
        title: "Милонов назвал гомосексу­альное откровение Депардье покаянием",
        preview: "http://img1.liveinternet.ru/images/attach/c/9/105/843/105843447_deputatvitalijmilonovlatentnyjpr.jpg",
        description: "Виталий Милонов назвал гомосексуальное откровение актёра Жерара Депардье покаянием. Депутат Заксобрания Санкт-Петербурга сказал «Русской службе новостей», что французский актёр, признавшийся в связях с мужчинами, специально переехал в Россию, чтобы навсегда распрощаться со своим порочным прошлым.",
        archived: true,
        helpCount: 127
      },
      {
        id: "act0345",
        title: "В Госдуме предложили запретить школьные тетради с черепами и монстрами",
        preview: "http://nokstv.ru/media/k2/items/cache/befa985e958e3e848891e9484e1e3f3c_Generic.jpg",
        description: "Член комитета Госдумы по вопросам семьи, женщин и детей, член ЛДПР Константин Субботин обратился к правительству с просьбой проработать вопрос о введении контроля за производством школьной продукции, пишут «Известия». По словам депутата, в погоне за модными тенденциями представители бизнеса часто пренебрегают моральными принципами, продавая детям предметы школьного обихода с изображением сцен насилия и образов смерти.",
        archived: true,
        helpCount: 79
      },
      {
        id: "act0346",
        title: "Чарли Шин под кокаином напал с ножом на дантиста",
        preview: "http://v1.popcorn-news.ru/upload/_500_600_80_gpYt5z.jpg",
        description: "Источники в полиции Лос-Анджелеса сообщили, что Шин обратился к врачу для лечения абсцесса. Однако когда медсестра попыталась надеть на него маску, Шин ударил ее. Зубной врач сообщил, что после этого Шин преследовал его с ножом в руке. ",
        archived: false,
        helpCount: 125
      },
      {
        id: "act0347",
        title: "В Вашингтоне пожарные спасли хомячков",
        preview: "http://media.vorotila.ru/ru/items/t1@3244a68c-4abe-4076-9e7c-3f22ffeb0f63/Dzhungarskiy-homyachok-.jpg",
        description: "Пожарные вынесли из горящего дома в городе Лейси (штат Вашингтон) пятерых хомяков. Для спасения животных пришлось использовать самодельные кислородные маски. В результате четверым хомякам удалось сохранить жизнь.",
        archived: true,
        helpCount: 20
      },
      {
        id: "act0348",
        title: "Владелец ресторана в Китае приправлял лапшу опиумом",
        preview: "http://daokedao.ru/blog/wp-content/uploads/2009/06/rest.jpg",
        description: "Полиция китайского города Яньань задержала владельца лапшичной, который добавлял в блюда частицы опийного мака. С помощью дурманящего ингредиента он пытался подсадить посетителей на свое фирменное кушанье и сделать его популярным.",
        archived: false,
        helpCount: 38
      },
      {
        id: "act0349",
        title: "Саратовец пять лет хранил у себя урановый контейнер",
        preview: "http://topwar.ru/uploads/posts/2011-11/1320228563_391704.jpg",
        description: "Мужчина рассказал, что пять лет назад, летом 2009 года, нашел его и закопал в землю рядом со своим гаражом. И лишь недавно, когда в его руки случайно попал дозиметр, решил «просветить» находку. Дозиметр показал значительное превышение радиационного фона.",
        archived: true,
        helpCount: 40
      },
      {
        id: "act0350",
        title: "Алина Кабаева возглавит совет «Нацио­нальной Медиа Группы»",
        preview: "http://www.uznayvse.ru/person/kabaeva/kabaeva01.jpg",
        description: "Олимпийская чемпионка Алина Кабаева решила продолжить карьеру в одном из крупнейших медиахолдингов страны — «Национальной Медиа Группе» (НМГ) Юрия Ковальчука, управляющей «Пятым каналом», РЕН ТВ и газетой «Известия».",
        archived: false,
        helpCount: 66
      }

    ]

    $scope.companies = [
      {
        id: "visa",
        title: "Visa to Home",
        description: "Проект, который помогает оформить визы не выходя из дома",
        logo: "/img/icons/com_visa.svg",
        url: "https://www.visatohome.ru/",
        is_promoed: true
      },
      {
        id: "datravel",
        title: "Da! Travel",
        description: "Купите отель или билет в интернете",
        logo: "/img/icons/com_datravel.png",
        url: "http://www.datravel.com/",
        is_promoed: true
      },
      {
        id: "rosneft",
        title: "Rosneft",
        description: "А чего добился ты?",
        logo: "http://seeker401.files.wordpress.com/2014/05/rosneftlogov.png?w=497",
        url: "http://www.rosneft.ru/",
        is_promoed: true
      },
      {
        id: "heinz",
        title: "Heinz",
        description: "Наш непатриотичный томатный спонсор",
        logo: "http://home-sweet-home.ru/shops/img/brands/53b.gif",
        url: "http://www.heinz.ru/",
        is_promoed: false
      },
      {
        id: "rocketbank",
        title: "Rocketbank",
        description: "Просто какие-то знакомые чуваки мимо проходили",
        logo: "http://futurebanking.ru/upload/posts/images/show/x5165629f70b59.png.pagespeed.ic.Qhqyke42CO.png",
        url: "https://rocketbank.ru/",
        is_promoed: false
      },
      {
        id: "jameson",
        title: "Jameson",
        description: "Питкий виски на всякий случай жизни. True Detective одобряет.",
        logo: "http://www.spirituosentheke.de/media/jameson-logo.jpg",
        url: "http://www.jamesonwhiskey.com/",
        is_promoed: false
      }
    ];

    $scope.actioncards = [
      {
        id: "clothes",
        title: "Одежда",
        description: "Нам нужна детская одежда любых размеров",
        logo: "/img/icons/act_01.svg"
      },
      {
        id: "books",
        title: "Учебники",
        description: "Учебники нужны разные для всех классов",
        logo: "/img/icons/act_02.svg"
      },
      {
         id: "computers",
        title: "Компьютеры",
        description: "Для современного образования нужна современная техника",
        logo: "/img/icons/act_03.svg"
      },
      {
        id: "people",
        title: "Волонтеры",
        description: "Нам нужны не только вещи, но и волонтеры, которые нам помогут",
        logo: "/img/icons/act_04.svg"
      }
    ];


    $scope.arch = ($state.$current.name == 'archive');
    $scope.selectedAct = null;

    if ($stateParams.id) {
      for (var i = 0; i < $scope.actions.length; i++) {
        if ($scope.actions[i].id === $stateParams.id) {
          $scope.selectedAct = $scope.actions[i];
          $scope.arch = $scope.selectedAct.archived;
        }
      }
    }

    if ($state.$current.name == "action") {
      $rootScope.sideview = 'sidebar-hidden';
      $rootScope.container = 'action-container';
    }
    else {
      $rootScope.sideview = 'sidebar-right';
      $rootScope.container = 'actions-container';
    }

    $scope.onMouseEnter = function(a) {
      a.hovered = true;

      $timeout(function() {
        a.showDescription = a.hovered;
      }, 500);
    };
    $scope.onMouseLeave = function(a) {
      a.hovered = false;
      a.showDescription = false;
    };



  }
]);

