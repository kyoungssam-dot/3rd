import { HolidayFood, QuizQuestion } from '../types';

export const HOLIDAY_FOODS: HolidayFood[] = [
  // ==========================================
  // [PART 1] 새해 명절 음식 (1번 ~ 7번)
  // ==========================================
  {
    id: 'korea-tteokguk',
    category: 'new_year',
    orderNumber: 1,
    countryName: '대한민국',
    countryCode: 'KR',
    flagEmoji: '🇰🇷',
    continent: '아시아',
    holidayName: '설날 (음력 1월 1일)',
    holidayDateInfo: '새해의 첫날을 축하하는 한국 최대의 명절',
    foodName: '떡국',
    foodOriginalName: 'Tteokguk',
    imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '뽀얗고 따뜻한 쇠고기 국물에 쫄깃한 떡을 띄운 한국의 전통 떡국',
    summaryHeadline: '"한 살 더 먹고, 하얗고 깨끗하게 새해를 시작해요!"',
    reasons: [
      '새해 첫날 아침, 온 가족이 모여 하얀 가래떡을 얇게 썰어 넣은 따뜻한 떡국을 먹어요.',
      '길고 긴 가래떡은 아프지 않고 건강하게 오래 살기를 바라는 마음(무병장수)을 담고 있어요.',
      '가래떡을 엽전(옛날 둥근 동전) 모양으로 둥글넓적하게 썬 것은, 새해에 돈을 많이 벌고 집안에 복이 가득하기를 비는 뜻이에요.',
      '또한 하얀 떡은 지난 한 해의 묵은 때를 씻어내고, 깨끗하고 순수한 마음으로 새해를 시작하자는 의미도 담겨 있답니다.'
    ],
    keySymbols: [
      { badge: '건강과 장수', title: '길쭉한 가래떡', desc: '끈기 있게 건강하게 오래오래 살기를 바라요.' },
      { badge: '재물과 행운', title: '동전 모양 썰기', desc: '옛날 동전인 엽전처럼 풍요로워지기를 빌어요.' },
      { badge: '새로운 시작', title: '순백의 흰 떡', desc: '지난해의 걱정을 털고 맑고 깨끗하게 시작해요.' }
    ],
    funFact: '우리나라에서는 어른들이 "떡국 몇 그릇 먹었니?" 하고 물어보시죠? 떡국 한 그릇을 먹어야 진짜로 나이를 한 살 더 먹는다고 생각했기 때문이에요!',
    greetingPhrase: {
      original: '새해 복 많이 받으세요!',
      pronunciation: 'Saehae bok mani badeuseyo!',
      meaning: '새해에 건강과 행복이 가득하길 바라는 인사예요.'
    }
  },
  {
    id: 'japan-soba',
    category: 'new_year',
    orderNumber: 2,
    countryName: '일본',
    countryCode: 'JP',
    flagEmoji: '🇯🇵',
    continent: '아시아',
    holidayName: '오미소카 (12월 31일 새해 전날)',
    holidayDateInfo: '묵은해를 보내고 새해를 맞이하는 밤',
    foodName: '토시코시 소바',
    foodOriginalName: '年越し蕎麦 (Toshikoshi Soba)',
    pronunciation: '토-시-코-시 소-바 (해넘이 메밀국수)',
    imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '따끈한 장국에 길쭉한 메밀면과 고명을 올린 토시코시 소바',
    summaryHeadline: '"길쭉한 면처럼 장수하고, 나쁜 일은 뚝 끊어내요!"',
    reasons: [
      '일본에서는 12월 31일 밤 자정이 되기 전에 가족들이 둘러앉아 따뜻한 메밀국수인 ‘토시코시 소바’를 먹어요.',
      '‘토시코시’는 ‘해를 넘긴다’는 뜻이에요. 길고 가느다란 메밀면처럼 건강하게 오래 살기를(장수) 기원하는 마음이에요.',
      '특히 메밀면은 다른 국수보다 이빨로 가볍게 ‘뚝’ 잘 끊어져요. 그래서 지난 한 해 동안 겪었던 나쁜 일, 슬픈 일, 액운을 싹 끊어버리고 새해를 맞이하자는 특별한 뜻이 담겨 있답니다.',
      '또 메밀은 비바람에도 잘 꺾이지 않고 꿋꿋하게 자라나기 때문에 새해에 튼튼하게 자라길 바라는 마음도 있어요.'
    ],
    keySymbols: [
      { badge: '장수 기원', title: '길고 긴 국숫발', desc: '길쭉한 면발처럼 가늘고 길게 건강하게 살아요.' },
      { badge: '액운 끊기', title: '뚝 끊어지는 메밀', desc: '지난해의 나쁜 기억과 질병을 시원하게 끊어내요.' },
      { badge: '재물 운', title: '금세공사의 전설', desc: '옛날 금세공사가 흩어진 금가루를 메밀가루 반죽으로 모았다는 이야기에서 부를 기원해요.' }
    ],
    funFact: '토시코시 소바는 12월 31일 밤 12시(자정)가 넘어가기 전에 다 먹어야 해요! 자정을 넘겨서 먹으면 새해에 나쁜 기운이 넘어온다고 생각해서 후루룩 재빨리 먹는답니다.',
    greetingPhrase: {
      original: 'あけましておめでとうございます',
      pronunciation: '아케마시테 오메데토- 고자이마스',
      meaning: '새해가 밝은 것을 축하드려요!'
    }
  },
  {
    id: 'china-jiaozi',
    category: 'new_year',
    orderNumber: 3,
    countryName: '중국',
    countryCode: 'CN',
    flagEmoji: '🇨🇳',
    continent: '아시아',
    holidayName: '춘절 (음력 설날)',
    holidayDateInfo: '중국에서 가장 크고 성대하게 치르는 명절',
    foodName: '자오쯔 (물만두)',
    foodOriginalName: '饺子 (Jiǎozi)',
    pronunciation: '자-오-쯔 (중국식 교자 만두)',
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '금은보화(원보) 모양으로 복을 가득 싸서 빚은 춘절 전통 자오쯔 만두',
    summaryHeadline: '"금은보화 동전을 닮은 만두로 큰 복과 재물을 빌어요!"',
    reasons: [
      '중국 북부 지방에서는 춘절 전날 밤 온 가족이 옹기종기 모여 피를 밀고 소를 채워 자오쯔(만두)를 빚어요.',
      '자오쯔의 모양을 자세히 보면, 옛날 중국에서 쓰던 은괴나 금괴 모양의 화폐인 ‘원보(元寶)’와 아주 똑같이 생겼어요!',
      '그래서 만두를 많이 먹을수록 새해에 돈을 많이 벌고 집안에 재물이 넉넉해진다고 굳게 믿었답니다.',
      '또한 만두소를 둥근 피 속에 꽁꽁 싸매는 모습은 ‘새해의 복(福)을 집안에 가두어 지킨다’는 예쁜 의미도 있어요.'
    ],
    keySymbols: [
      { badge: '재물 번창', title: '원보(옛날 금괴) 모양', desc: '금괴 모양을 닮아 새해에 큰 부자가 되길 빌어요.' },
      { badge: '화목한 가족', title: '온 가족이 함께 빚기', desc: '온 가족이 모여 이야기를 나누며 정을 다져요.' },
      { badge: '복 가두기', title: '속을 꽉 채운 만두', desc: '만두피 속에 행운과 건강을 듬뿍 담아 봉해요.' }
    ],
    funFact: '만두를 빚을 때 특별한 보물(깨끗하게 소독한 동전이나 대추, 사탕)을 몰래 하나 넣어두기도 해요! 식사 중에 동전이 든 만두를 먹은 사람은 1년 내내 가장 큰 대박 행운을 누린다고 좋아한답니다.',
    greetingPhrase: {
      original: '新年快乐, 恭喜发财',
      pronunciation: '신니엔 콰이러, 꽁시파차이',
      meaning: '새해 복 많이 받으시고 큰 부자 되세요!'
    }
  },
  {
    id: 'spain-grapes',
    category: 'new_year',
    orderNumber: 4,
    countryName: '스페인',
    countryCode: 'ES',
    flagEmoji: '🇪🇸',
    continent: '유럽',
    holidayName: '노체비에하 (12월 31일 새해 전야)',
    holidayDateInfo: '새해를 맞이하는 밤의 화려한 카운트다운 축제',
    foodName: '12알의 행운 포도',
    foodOriginalName: 'Las doce uvas de la suerte',
    pronunciation: '라스 도세 우바스 데 라 수에르테',
    imageUrl: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '12번의 시계탑 종소리에 맞춰 하나씩 먹는 스페인의 12알 행운 포도',
    summaryHeadline: '"12번 댕댕 울리는 종소리에 맞춰 포도 12알 쏙!"',
    reasons: [
      '스페인에서는 12월 31일 밤 11시 59분이 되면 광장이나 TV 앞에 모여 시계탑을 바라봐요.',
      '밤 12시를 알리는 시계탑 종이 "댕~ 댕~" 하고 1초에 한 번씩 총 12번 울릴 때마다, 종소리에 딱 맞춰 포도 한 알씩 총 12알을 먹어요.',
      '포도 12알은 새해의 1월부터 12월까지 열두 달을 뜻해요.',
      '종소리에 맞춰 포도를 다 먹으면, 1년 12달 내내 매달마다 행운과 행복이 깃든다고 믿는 재미있는 풍습이에요.'
    ],
    keySymbols: [
      { badge: '12달의 축복', title: '포도 12알', desc: '1월부터 12월까지 매달 행운이 넘치길 바라요.' },
      { badge: '타이밍 맞추기', title: '12번의 종소리', desc: '새해 첫 12초 동안 신나게 웃으며 즐겨요.' },
      { badge: '농부들의 나눔', title: '풍년의 선물', desc: '옛날 포도 풍년이 들어 이웃들과 함께 나누던 따뜻한 정에서 시작되었어요.' }
    ],
    funFact: '종소리가 울리는 12초 안에 포도 12알을 씹어서 삼키기가 생각보다 엄청 바빠요! 아이들도 어른들도 볼이 햄스터처럼 빵빵해져서 서로를 보며 낄낄 웃는 신나는 시간이 된답니다.',
    greetingPhrase: {
      original: '¡Feliz Año Nuevo!',
      pronunciation: '펠리스 아뇨 누에보!',
      meaning: '행복하고 기쁜 새해 되세요!'
    }
  },
  {
    id: 'greece-vasilopita',
    category: 'new_year',
    orderNumber: 5,
    countryName: '그리스',
    countryCode: 'GR',
    flagEmoji: '🇬🇷',
    continent: '유럽',
    holidayName: '성 바실리오의 날 (1월 1일)',
    holidayDateInfo: '가난한 사람을 도운 성 바실리오를 기리는 새해 첫날',
    foodName: '바실로피타 (새해 케이크)',
    foodOriginalName: 'Βασιλόπιτα (Vasilopita)',
    pronunciation: '바-실-로-피-타',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '향긋한 오렌지 향과 슈거파우더로 장식한 그리스의 전통 케이크 바실로피타',
    summaryHeadline: '"케이크 조각 속에 반짝이는 행운의 동전을 찾아라!"',
    reasons: [
      '그리스 사람들은 새해 첫날 온 가족이 모여 향긋하고 달콤한 빵인 ‘바실로피타’를 잘라 나누어 먹어요.',
      '이 빵을 구울 때 가장 중요한 비밀이 있어요! 바로 반죽 속에 깨끗한 동전 하나를 쏙 숨겨 넣는 것이에요.',
      '가족들이 한 조각씩 나누어 먹다가 자기 빵 조각 속에서 동전을 발견한 사람은 "와! 찾았다!" 외치며 환호해요.',
      '동전을 찾은 사람은 새해 1년 동안 가장 큰 행운과 축복을 받게 된다고 믿는답니다.'
    ],
    keySymbols: [
      { badge: '최고의 행운', title: '숨겨진 동전', desc: '동전을 발견한 사람은 한 해 동안 행운의 주인공이 돼요.' },
      { badge: '나눔과 사랑', title: '성 바실리오의 마음', desc: '가난한 사람들에게 빵 속에 금화를 숨겨 나누어 준 따뜻한 전설이 있어요.' },
      { badge: '달콤한 시작', title: '오렌지와 바닐라', desc: '달콤한 향기처럼 달콤하고 화목한 한 해를 기원해요.' }
    ],
    funFact: '바실로피타를 자를 때 순서가 정해져 있어요! 첫 번째 조각은 신(하느님)을 위해, 두 번째 조각은 집을 위해, 그 다음 조각은 할아버지부터 막내까지 차례대로 나누어 주어요.',
    greetingPhrase: {
      original: 'Καλή Χρονιά!',
      pronunciation: '칼리 흐로니아!',
      meaning: '좋고 축복받은 한 해 되세요!'
    }
  },
  {
    id: 'italy-cotechino',
    category: 'new_year',
    orderNumber: 6,
    countryName: '이탈리아',
    countryCode: 'IT',
    flagEmoji: '🇮🇹',
    continent: '유럽',
    holidayName: '카포단노 (1월 1일 새해 첫날)',
    holidayDateInfo: '새해를 맞이하는 이탈리아의 활기찬 축제',
    foodName: '코테키노 콘 렌티키에',
    foodOriginalName: 'Cotechino con lenticchie',
    pronunciation: '코-테-키-노 콘 렌-티-키-에 (렌틸콩과 돼지고기 요리)',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '동전을 닮은 렌틸콩을 듬뿍 깔고 썰어 올린 이탈리아의 새해 음식',
    summaryHeadline: '"동글납작한 렌틸콩은 금화, 돼지고기는 풍요의 상징!"',
    reasons: [
      '이탈리아 사람들은 12월 31일 밤부터 1월 1일 새해 식탁에 렌틸콩과 큼직한 돼지고기 소시지 요리를 올려요.',
      '작고 둥글넓적한 ‘렌틸콩’은 옛날 로마 시대의 동전(금화)과 아주 비슷하게 생겼어요. 물에 삶으면 콩이 통통하게 부풀어 오르는데, 이것은 돈이 점점 불어난다는 뜻이에요!',
      '그래서 렌틸콩을 많이 먹으면 새해에 돈을 많이 벌고 부자가 된다고 여겼답니다.',
      '또 돼지는 앞만 보고 땅을 파헤치며 나아가는 동물이라, 후퇴하지 않고 미래를 향해 풍성하게 나아가는 ‘풍요’를 상징해요.'
    ],
    keySymbols: [
      { badge: '불어나는 재물', title: '부풀어 오르는 렌틸콩', desc: '동전 모양 콩이 불어나듯 재산과 행복이 쑥쑥 커져요.' },
      { badge: '풍요와 전진', title: '돼지고기 소시지', desc: '앞으로 씩씩하게 나아가며 먹을 것이 넘쳐나길 바라요.' },
      { badge: '따뜻한 영양', title: '단백질 가득', desc: '추운 겨울 온 가족이 든든하게 힘을 내요.' }
    ],
    funFact: '이탈리아 사람들은 새해 전날 빨간색 속옷을 입고 렌틸콩을 먹으면 행운이 두 배가 된다고 믿는 귀여운 미신도 있답니다!',
    greetingPhrase: {
      original: 'Buon Anno!',
      pronunciation: '부온 안노!',
      meaning: '좋은 새해를 보내세요!'
    }
  },
  {
    id: 'france-galette',
    category: 'new_year',
    orderNumber: 7,
    countryName: '프랑스',
    countryCode: 'FR',
    flagEmoji: '🇫🇷',
    continent: '유럽',
    holidayName: '에피파니 / 주현절 (1월 첫 주)',
    holidayDateInfo: '새해를 맞이하고 동방박사의 축하를 기리는 날',
    foodName: '갈레트 데 루아 (왕의 파이)',
    foodOriginalName: 'Galette des rois',
    pronunciation: '갈-레트 데 루-아',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '바삭한 페이스트리 속에 아몬드 크림과 작은 도자기 인형이 숨겨진 왕의 파이',
    summaryHeadline: '"파이 속 작은 도자기 인형을 찾아 오늘의 왕이 되어보자!"',
    reasons: [
      '프랑스에서는 1월 새해가 시작되면 바삭바삭하고 고소한 아몬드 크림 파이인 ‘갈레트 데 루아’를 나누어 먹어요.',
      '‘갈레트 데 루아’는 ‘왕들의 파이’라는 뜻이에요.',
      '파이 안에는 ‘페브(Fève)’라고 부르는 작고 귀여운 도자기 인형이 하나 숨겨져 있어요.',
      '자신의 파이 조각 속에서 이 작은 인형을 발견한 사람은 함께 들어있는 황금 종이 왕관을 머리에 쓰고 ‘오늘의 왕(또는 여왕)’이 되어 하루 종일 축하를 받는답니다.'
    ],
    keySymbols: [
      { badge: '행운의 주인공', title: '작은 인형 페브', desc: '도자기 인형을 발견한 사람은 1년 내내 행운의 왕이 돼요.' },
      { badge: '공평한 나눔', title: '막내의 조각 나누기', desc: '테이블 밑에 들어간 가장 어린 아이가 공평하게 조각을 지정해요.' },
      { badge: '황금빛 번영', title: '빛나는 종이 왕관', desc: '반짝이는 왕관처럼 빛나는 한 해가 되기를 응원해요.' }
    ],
    funFact: '누구에게 인형이 갈지 모르게 하려고, 가족 중에 제일 어린 아이가 식탁 밑에 쏙 들어가서 "이 조각은 누구 거예요?" 하고 눈을 감고 공평하게 정해주는 귀여운 전통이 있어요!',
    greetingPhrase: {
      original: 'Bonne Année!',
      pronunciation: '본 아네!',
      meaning: '새해 복 많이 받으세요!'
    }
  },

  // ==========================================
  // [PART 2] 추수 명절 음식 (8번 ~ 12번)
  // ==========================================
  {
    id: 'korea-songpyeon',
    category: 'harvest',
    orderNumber: 8,
    countryName: '대한민국',
    countryCode: 'KR',
    flagEmoji: '🇰🇷',
    continent: '아시아',
    holidayName: '추석 (음력 8월 15일 한가위)',
    holidayDateInfo: '가을의 풍성한 수확을 감사하는 한국의 대표적인 추수 명절',
    foodName: '송편',
    foodOriginalName: 'Songpyeon',
    imageUrl: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '솔잎을 깔아 쪄내 향긋하고 고운 빛깔을 뽐내는 가을 햇곡식 송편',
    summaryHeadline: '"햇곡식으로 빚은 반달 모양 떡! 더 밝고 크게 번창하길 바라요"',
    reasons: [
      '가을 추석에는 봄과 여름 동안 정성껏 농사지어 새로 수확한 햅쌀과 햇곡식(깨, 콩, 밤, 팥)으로 송편을 빚어요.',
      '조상님들께 "올해도 농사가 잘되게 보살펴 주셔서 감사합니다" 하고 감사의 마음을 담아 차례상에 올린 뒤 온 가족이 나누어 먹어요.',
      '송편은 보통 ‘반달 모양’으로 빚어요. 보름달은 이미 다 차서 앞으로 작아질 일만 남았지만, 반달은 앞으로 점점 커져서 밝은 보름달이 되잖아요? 그래서 우리 집안과 나라가 앞으로 더욱 번창하고 발전하기를 바라는 뜻이 담겨 있답니다.',
      '또한 솔잎(소나무 잎)을 깔고 쪄서 솔잎 향이 배어 떡이 쉽게 쉬지 않고 오래가도록 지혜를 더했어요.'
    ],
    keySymbols: [
      { badge: '발전과 번창', title: '희망찬 반달 모양', desc: '점점 차올라 둥근 보름달이 되듯 희망차게 발전해요.' },
      { badge: '수확의 감사', title: '햅쌀과 햇곡식', desc: '새로 거둔 깨, 콩, 밤으로 자연의 풍요에 감사드려요.' },
      { badge: '조상의 지혜', title: '향긋한 솔잎', desc: '솔잎 향을 입히고 떡이 상하지 않게 돕는 과학적 지혜예요.' }
    ],
    funFact: '옛날 어른들은 "송편을 예쁘게 빚으면 나중에 예쁜 딸이나 멋진 아이를 낳고, 솜씨 좋은 사람이 된다"고 하셔서 아이들이 정성을 다해 빚었답니다!',
    greetingPhrase: {
      original: '풍성한 한가위 보내세요!',
      pronunciation: 'Pungseonghan Hangawi bonaeseyo!',
      meaning: '더도 말고 덜도 말고 늘 가윗날만 같기를 바라는 인사예요.'
    }
  },
  {
    id: 'usa-thanksgiving',
    category: 'harvest',
    orderNumber: 9,
    countryName: '미국 & 캐나다',
    countryCode: 'US',
    flagEmoji: '🇺🇸',
    continent: '북아메리카',
    holidayName: '추수감사절 (Thanksgiving Day)',
    holidayDateInfo: '11월 넷째 목요일(캐나다는 10월 둘째 월요일)에 치르는 감사 축제',
    foodName: '칠면조 구이와 호박 파이',
    foodOriginalName: 'Roast Turkey & Pumpkin Pie',
    pronunciation: '로스트 터키 & 펌킨 파이',
    imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '황금빛으로 노릇하게 구워낸 칠면조 구이와 달콤한 호박 파이',
    summaryHeadline: '"추운 겨울을 날 수 있게 도와준 자연과 이웃에게 감사해요!"',
    reasons: [
      '옛날 1621년, 영국에서 신대륙(지금의 미국 땅)으로 건너온 이주민들이 낯선 땅에서 몹시 춥고 배고픈 첫 겨울을 보냈어요.',
      '그때 원주민(인디언)들이 옥수수 농사짓는 법과 칠면조 잡는 법을 친절하게 가르쳐 주어 무사히 첫 가을 추수를 마칠 수 있었어요.',
      '가을에 곡식을 넉넉히 수확하자, 이주민들은 도와준 원주민들을 초대하여 들판에서 잡은 칠면조를 굽고 밭에서 거둔 호박으로 달콤한 파이를 구워 3일 동안 함께 감사의 축제를 열었답니다.',
      '지금도 미국 사람들은 멀리 사는 가족들이 모두 모여 큰 칠면조를 썰어 나누며 "올 한 해도 감사했습니다" 하고 서로 고마움을 나누어요.'
    ],
    keySymbols: [
      { badge: '이웃 사랑과 감사', title: '함께 나눈 식탁', desc: '어려울 때 도와준 이웃과 따뜻한 정을 나누었던 역사예요.' },
      { badge: '가을의 풍요', title: '노란 호박 파이', desc: '밭에서 거둔 커다란 햇호박으로 달콤한 디저트를 만들어요.' },
      { badge: '가족의 재회', title: '한자리에 모인 식탁', desc: '흩어져 살던 온 가족이 모여 감사한 일을 이야기해요.' }
    ],
    funFact: '미국 대통령은 매년 추수감사절이 되면 백악관 마당에서 살아있는 칠면조 한 마리를 요리하지 않고 살려주는 특별한 행사(칠면조 사면식)를 연답니다!',
    greetingPhrase: {
      original: 'Happy Thanksgiving!',
      pronunciation: '해피 땡스기빙!',
      meaning: '풍요롭고 감사 가득한 추수감사절 보내세요!'
    }
  },
  {
    id: 'china-mooncake',
    category: 'harvest',
    orderNumber: 10,
    countryName: '중국',
    countryCode: 'CN',
    flagEmoji: '🇨🇳',
    continent: '아시아',
    holidayName: '중추절 (음력 8월 15일)',
    holidayDateInfo: '가을밤 둥근 보름달을 보며 가족의 화목을 다지는 명절',
    foodName: '월병 (문케이크)',
    foodOriginalName: '月饼 (Yuèbǐng)',
    pronunciation: '웨-빙 (달 모양 과자)',
    imageUrl: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '보름달처럼 둥글고 정교한 무늬가 새겨진 중추절의 대표 전통 과자 월병',
    summaryHeadline: '"둥근 보름달처럼 우리 가족도 둥글게 모여 화목하길 바라요!"',
    reasons: [
      '중국에서는 음력 8월 15일 가을밤이 되면 둥근 보름달을 보며 ‘달에 바치는 과자’라는 뜻의 ‘월병’을 먹어요.',
      '월병은 하늘에 뜬 밝고 둥근 보름달을 본떠서 둥글넓적하게 만들어요.',
      '둥근 모양은 중국어로 ‘원만(圓滿)’과 ‘단란(團欒)’을 뜻해요. 즉 모나지 않고 둥글둥글하게, 온 가족이 한자리에 둥글게 모여 화목하게 지내자는 뜻이에요.',
      '가을 추수를 마친 뒤 달콤한 팥, 연꽃 씨앗, 밤, 견과류를 꽉 채워 굽고, 가까운 친척과 이웃에게 선물하며 건강을 빌어준답니다.'
    ],
    keySymbols: [
      { badge: '가족의 단란함', title: '둥근 보름달 모양', desc: '떨어져 있던 가족이 달처럼 둥글게 다시 모여요.' },
      { badge: '풍성한 가을 맛', title: '견과류와 달콤한 소', desc: '가을 햇견과류와 단팥으로 속을 가득 채워요.' },
      { badge: '복을 비는 무늬', title: '정교한 글자 도장', desc: '월병 겉면에 장수와 복(福)을 기원하는 한자를 새겨요.' }
    ],
    funFact: '월병 안에는 가끔 소금에 절인 짭조름한 오리알 노른자가 통째로 들어있기도 해요! 월병을 반으로 쪼갰을 때 나타나는 둥근 노른자가 마치 밤하늘의 노란 보름달 같답니다.',
    greetingPhrase: {
      original: '中秋节快乐, 合家团圆',
      pronunciation: '중치우지에 콰이러, 허지아 투안위안',
      meaning: '즐거운 중추절 되시고 온 가족이 화목하게 모이길 바랍니다!'
    }
  },
  {
    id: 'germany-erntedankfest',
    category: 'harvest',
    orderNumber: 11,
    countryName: '독일',
    countryCode: 'DE',
    flagEmoji: '🇩🇪',
    continent: '유럽',
    holidayName: '에른테당크페스트 (추수감사제)',
    holidayDateInfo: '10월 첫째 일요일, 대지의 풍요와 수확에 감사하는 축제',
    foodName: '로스트치킨과 사과 케이크',
    foodOriginalName: 'Erntedankfest Brathähnchen & Apfelkuchen',
    pronunciation: '브라트헨헨 & 아펠쿠헨 (닭구이와 햇사과 케이크)',
    imageUrl: 'https://images.unsplash.com/photo-1514944298352-f4728514125b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '가을에 갓 수확한 사과를 듬뿍 올려 구운 독일식 아펠쿠헨(사과 케이크)',
    summaryHeadline: '"황금빛 밀밭과 알찬 사과 열매에 감사하는 가을 축제!"',
    reasons: [
      '독일에서는 10월 첫째 일요일이 되면 마을 사람들이 교회와 광장에 모여 ‘에른테당크페스트’라는 추수 축제를 열어요.',
      '‘에른테(Ernte)’는 추수, ‘당크(Dank)’는 감사, ‘페스트(Fest)’는 축제라는 뜻이에요.',
      '마을 사람들은 들판에서 거둔 황금빛 밀짚으로 커다란 화환(추수관)을 엮고, 밭에서 수확한 햇감자, 양배추, 호박, 그리고 달콤한 햇사과를 제단에 올려 감사 기도를 드려요.',
      '예배가 끝나면 이웃들과 모여 겉은 바삭하고 속은 촉촉한 닭고기나 거위 요리를 먹고, 갓 딴 햇사과를 듬뿍 넣은 따뜻한 ‘사과 케이크(아펠쿠헨)’를 함께 나누어 먹는답니다.'
    ],
    keySymbols: [
      { badge: '대지의 열매', title: '달콤한 햇사과', desc: '가을 과수원에서 갓 딴 신선한 사과로 달콤함을 더해요.' },
      { badge: '추수의 화환', title: '밀 이삭 관', desc: '밀과 보리 이삭을 엮어 풍년을 상징하는 관을 만들어요.' },
      { badge: '이웃과의 나눔', title: '나눔 바구니', desc: '형편이 어려운 이웃에게 수확한 곡식과 과일을 나누어 주어요.' }
    ],
    funFact: '독일 사람들은 축제가 끝나면 제단에 장식했던 신선한 과일과 채소를 모아서 혼자 사시는 할머니, 할아버지나 음식이 필요한 이웃들에게 나누어 주는 따뜻한 마음을 실천해요.',
    greetingPhrase: {
      original: 'Frohes Erntedankfest!',
      pronunciation: '프로에스 에른테당크페스트!',
      meaning: '기쁘고 복된 추수감사제 되세요!'
    }
  },
  {
    id: 'vietnam-mooncake',
    category: 'harvest',
    orderNumber: 12,
    countryName: '베트남',
    countryCode: 'VN',
    flagEmoji: '🇻🇳',
    continent: '아시아',
    holidayName: '뗏 쭝투 (음력 8월 15일)',
    holidayDateInfo: '가을 추수를 축하하며 어린이를 가장 귀하게 여기는 명절',
    foodName: '바인 뜨엉 & 바인 데오',
    foodOriginalName: 'Bánh nướng & Bánh dẻo',
    pronunciation: '바인 느엉 & 바인 제오 (베트남 쭝투 떡과 구운 과자)',
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1200&q=80',
    imageCaption: '흰 찹쌀로 만든 쫄깃한 바인 제오와 노릇하게 구운 바인 느엉',
    summaryHeadline: '"가을 추수를 끝내고 아이들을 사랑하는 마음으로 빚은 달콤한 과자!"',
    reasons: [
      '베트남에서는 음력 8월 15일을 ‘뗏 쭝투’라고 부르는데, 가을 추수 명절이자 동시에 신나는 ‘어린이날’이기도 해요!',
      '농부 부모님들이 봄부터 여름까지 너무 바빠서 아이들과 많은 시간을 보내지 못했던 미안함과 고마움을 담아, 수확을 마친 뒤 아이들을 위한 성대한 잔치를 열어주던 데서 유래했어요.',
      '이날은 갈색빛으로 고소하게 구운 과자 ‘바인 느엉’과, 하얀 찹쌀로 쫄깃하고 달콤하게 빚은 ‘바인 제오’라는 두 가지 특별한 과자를 먹어요.',
      '아이들은 알록달록한 별 모양 잉어 등불을 들고 거리에서 사자춤을 구경하며 이 맛있는 과자를 신나게 먹는답니다.'
    ],
    keySymbols: [
      { badge: '어린이 사랑', title: '아이들을 위한 선물', desc: '바쁜 농사철이 지나고 아이들에게 사랑을 듬뿍 표현해요.' },
      { badge: '두 가지 달콤함', title: '구운 과자와 찹쌀떡', desc: '노릇한 바인 느엉과 하얀 찹쌀 바인 제오를 함께 즐겨요.' },
      { badge: '희망의 등불', title: '별 모양 등불 행진', desc: '별과 잉어 모양 등불을 들고 밝은 미래를 밝혀요.' }
    ],
    funFact: '베트남에서는 달 속에 우리나라처럼 토끼가 방아를 찧는 게 아니라, 마법의 나무를 잡고 달나라로 올라간 ‘꾸오이(Cuội)’ 아저씨가 살고 있다고 믿는답니다!',
    greetingPhrase: {
      original: 'Tết Trung Thu vui vẻ!',
      pronunciation: '뗏 쭝 투 부이 베!',
      meaning: '즐겁고 행복한 추석 명절 보내렴!'
    }
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '우리나라에서는 설날에 엽전(동전) 모양처럼 둥글게 썬 떡으로 끓인 어떤 음식을 먹을까요?',
    options: ['송편', '떡국', '비빔밥', '김밥'],
    correctIndex: 1,
    explanation: '설날에 먹는 떡국은 하얀 가래떡을 엽전처럼 둥글게 썰어 부자가 되고 건강하게 오래 살기를 바라는 마음이 담겨 있어요.',
    foodId: 'korea-tteokguk'
  },
  {
    id: 2,
    question: '스페인에서는 새해 자정 시계탑 종이 12번 울릴 때마다 무엇을 12알 먹을까요?',
    options: ['사과', '딸기', '포도', '방울토마토'],
    correctIndex: 2,
    explanation: '스페인 사람들은 1월부터 12월까지 매달 행운이 넘치길 바라며 12번의 종소리에 맞춰 포도 12알을 먹어요!',
    foodId: 'spain-grapes'
  },
  {
    id: 3,
    question: '우리나라 추석에 햇곡식으로 빚는 "송편"은 왜 보름달이 아니라 반달 모양으로 빚을까요?',
    options: [
      '동그랗게 만들기 귀찮아서',
      '반달은 앞으로 점점 차올라 보름달처럼 번창하길 바라는 마음 때문에',
      '반달이 쟁반에 더 많이 들어가서',
      '솔잎에 올려놓기 편해서'
    ],
    correctIndex: 1,
    explanation: '보름달은 작아질 일만 남았지만, 반달은 점점 커져서 밝은 보름달이 되기 때문에 앞으로 더 번창하길 바라는 뜻이 담겨 있어요.',
    foodId: 'korea-songpyeon'
  },
  {
    id: 4,
    question: '그리스의 새해 케이크 "바실로피타" 속에는 무엇이 하나 숨겨져 있어 찾는 사람에게 큰 행운을 줄까요?',
    options: ['초콜릿', '동전', '열쇠', '반지'],
    correctIndex: 1,
    explanation: '바실로피타 반죽 속에 동전을 하나 숨겨 굽는데, 동전을 찾은 사람은 새해 1년 동안 최고의 행운을 얻는다고 믿어요!',
    foodId: 'greece-vasilopita'
  },
  {
    id: 5,
    question: '중국의 중추절에 먹는 둥근 달 모양 과자로, 온 가족의 화목과 단란함을 상징하는 음식은 무엇일까요?',
    options: ['월병', '춘권', '짜장면', '탕후루'],
    correctIndex: 0,
    explanation: '월병은 보름달처럼 둥글어서 온 가족이 둥글게 모여 화목하게 지내기를 바라는 뜻(원만함)이 담겨 있어요.',
    foodId: 'china-mooncake'
  }
];
