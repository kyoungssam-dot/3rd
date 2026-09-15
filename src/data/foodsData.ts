import { HolidayFood, QuizQuestion } from '../types';

import koreanTteokgukImg from '../assets/images/korean_tteokguk_1789450787732.jpg';
import japaneseOsechiImg from '../assets/images/japanese_osechi_1789450816880.jpg';
import chinaJiaoziImg from '../assets/images/china_jiaozi_1789451041754.jpg';
import frenchGaletteImg from '../assets/images/french_galette_1789450829380.jpg';
import vietnamBanhChungImg from '../assets/images/vietnam_banh_chung_1789450843888.jpg';
import germanMarzipanPigImg from '../assets/images/marzipan_pig_real_1789451716472.jpg';
import dutchOliebollenImg from '../assets/images/dutch_oliebollen_1789450880100.jpg';
import usHoppinJohnImg from '../assets/images/us_hoppin_john_1789450899015.jpg';
import spainGrapesImg from '../assets/images/spain_grapes_1789451001715.jpg';
import greeceVasilopitaImg from '../assets/images/vasilopita_2026_1789451731009.jpg';
import italyCotechinoImg from '../assets/images/italy_cotechino_1789451025922.jpg';

import koreanSongpyeonImg from '../assets/images/korean_songpyeon_1789450915723.jpg';
import thanksgivingFeastImg from '../assets/images/thanksgiving_feast_1789450932814.jpg';
import chineseMooncakeImg from '../assets/images/chinese_mooncake_1789450944599.jpg';
import germanHarvestMealImg from '../assets/images/german_harvest_meal_1789450957019.jpg';
import vietnamBanhTrungThuImg from '../assets/images/vietnam_banh_trung_thu_1789450967521.jpg';
import japaneseTsukimiDangoImg from '../assets/images/tsukimi_dango_closeup_1789451743512.jpg';

export const HOLIDAY_FOODS: HolidayFood[] = [
  // ==========================================
  // [PART 1] 새해 명절 음식 (1번 ~ 11번)
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
    imageUrl: koreanTteokgukImg,
    imageCaption: '뽀얗고 깊은 소고기 육수에 하얀 가래떡과 오색 지단, 고명을 정갈하게 올린 떡국',
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
    id: 'japan-osechi',
    category: 'new_year',
    orderNumber: 2,
    countryName: '일본',
    countryCode: 'JP',
    flagEmoji: '🇯🇵',
    continent: '아시아',
    holidayName: '쇼가츠 (1월 1일~3일 새해 명절)',
    holidayDateInfo: '새해 신(도시가미)을 맞이하는 일본의 가장 큰 명절',
    foodName: '오세치 요리',
    foodOriginalName: 'おせち料理 (Osechi Ryōri)',
    pronunciation: '오-세-치 요-리',
    imageUrl: japaneseOsechiImg,
    imageCaption: '행운이 겹겹이 쌓이길 바라며 찬합(주바코)에 정갈하게 담은 일본의 대표 새해 음식',
    summaryHeadline: '"찬합 가득 겹겹이 쌓인 행운과 건강의 보물상자!"',
    reasons: [
      '일본에서는 1월 1일 새해를 맞아 ‘주바코’라는 옻칠한 상자에 여러 가지 색색의 음식을 정성껏 담은 ‘오세치 요리’를 먹어요.',
      '음식을 여러 층 찬합에 층층이 담는 것은 "좋은 일과 행복이 겹겹이 쌓여라"라는 소망을 담은 것이에요.',
      '오세치에 들어가는 재료 하나하나마다 특별한 의미가 있어요. 달콤한 달걀말이(다테마키)는 두루마리 책을 닮아 학문과 지혜를, 검은콩(구로마메)은 땀 흘려 부지런히 일하고 건강하길, 굽은 새우는 허리가 휠 때까지 장수하길 바라는 뜻이에요.',
      '또한 새해 첫 사흘 동안은 불의 신을 쉬게 하고, 가족들을 위해 항상 요리하던 어머니도 푹 쉴 수 있도록 오래 두고 먹을 수 있게 조리하는 따뜻한 배려의 음식이랍니다.'
    ],
    keySymbols: [
      { badge: '지혜와 공부', title: '달걀말이(다테마키)', desc: '두루마리 책을 닮아 공부를 잘하고 똑똑해지길 빌어요.' },
      { badge: '건강과 장수', title: '굽은 새우', desc: '허리가 굽을 때까지 아프지 않고 오래 살기를 바라요.' },
      { badge: '자손 번창', title: '청어알(가즈노코)', desc: '알이 많은 청어알처럼 집안에 가족이 번창하길 빌어요.' }
    ],
    funFact: '오세치 요리를 먹을 때는 양쪽 끝이 모두 뾰족한 특별한 나무젓가락을 써요. 한쪽은 사람이 쓰고, 반대쪽은 새해를 찾아온 복의 신이 함께 식사한다는 재미난 믿음 때문이에요!',
    greetingPhrase: {
      original: 'あけましておめでとうございます',
      pronunciation: '아케마시테 오메데토- 고자이마스',
      meaning: '새해가 밝은 것을 축하드립니다!'
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
    imageUrl: chinaJiaoziImg,
    imageCaption: '옛날 금은보화(원보) 모양으로 빚어 복을 가득 채운 춘절 전통 자오쯔 만두',
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
    id: 'france-galette',
    category: 'new_year',
    orderNumber: 4,
    countryName: '프랑스',
    countryCode: 'FR',
    flagEmoji: '🇫🇷',
    continent: '유럽',
    holidayName: '에피파니 / 주현절 (1월 첫 주)',
    holidayDateInfo: '새해를 맞이하고 동방박사의 축하를 기리는 날',
    foodName: '갈레트 데 루아 (왕의 파이)',
    foodOriginalName: 'Galette des rois',
    pronunciation: '갈-레트 데 루-아',
    imageUrl: frenchGaletteImg,
    imageCaption: '파이 위에 황금 종이 왕관이 올려진 바삭하고 달콤한 프랑스의 전통 새해 파이',
    summaryHeadline: '"파이 속 작은 도자기 인형을 찾아 오늘의 왕이 되어보자!"',
    reasons: [
      '프랑스에서는 1월 새해가 시작되면 바삭바삭하고 고소한 아몬드 크림 파이인 ‘갈레트 데 루아’를 나누어 먹어요.',
      '‘갈레트 데 루아’는 ‘왕들의 파이’라는 뜻으로, 파이 위에는 번쩍이는 황금 종이 왕관이 함께 놓여 있어요.',
      '파이 안에는 ‘페브(Fève)’라고 부르는 작고 귀여운 도자기 인형이 하나 숨겨져 있답니다.',
      '자신의 파이 조각 속에서 이 작은 인형을 발견한 사람은 왕관을 머리에 쓰고 ‘오늘의 왕(또는 여왕)’이 되어 하루 종일 축하와 대접을 받아요!'
    ],
    keySymbols: [
      { badge: '행운의 주인공', title: '작은 인형 페브', desc: '도자기 인형을 발견한 사람은 1년 내내 행운의 왕이 돼요.' },
      { badge: '황금 왕관', title: '종이 왕관 쓰기', desc: '인형을 찾은 사람은 왕관을 쓰고 왕이 되어 축하받아요.' },
      { badge: '공평한 나눔', title: '식탁 밑 막내', desc: '가장 어린 아이가 눈을 감고 누구 조각인지 공평하게 정해요.' }
    ],
    funFact: '누구에게 인형이 갈지 모르게 하려고, 가족 중에 제일 어린 아이가 식탁 밑에 쏙 들어가서 "이 조각은 누구 거예요?" 하고 눈을 감고 공평하게 정해주는 귀여운 전통이 있어요!',
    greetingPhrase: {
      original: 'Bonne Année!',
      pronunciation: '본 아네!',
      meaning: '새해 복 많이 받으세요!'
    }
  },
  {
    id: 'vietnam-banh-chung',
    category: 'new_year',
    orderNumber: 5,
    countryName: '베트남',
    countryCode: 'VN',
    flagEmoji: '🇻🇳',
    continent: '아시아',
    holidayName: '뗏 (Tết, 베트남 음력 설날)',
    holidayDateInfo: '새해의 시작을 알리는 베트남 최대의 전통 명절',
    foodName: '반쯩',
    foodOriginalName: 'Bánh chưng',
    pronunciation: '반-쯩 (베트남 새해 사각 찹쌀떡)',
    imageUrl: vietnamBanhChungImg,
    imageCaption: '초록색 잎으로 네모나게 싸서 오랫동안 쪄낸 베트남 설날 전통 찹쌀떡 반쯩',
    summaryHeadline: '"네모난 떡은 대지(땅), 둥근 떡은 하늘! 부모님 은혜에 감사해요"',
    reasons: [
      '베트남에서는 음력 설날인 ‘뗏’이 되면 초록색 잎으로 정성스레 싼 네모난 찹쌀떡 ‘반쯩’을 먹어요.',
      '옛날 베트남 왕이 아들들에게 "가장 뜻깊은 음식을 만들어 온 왕자에게 왕위를 물려주겠다"고 했을 때, 가난했던 막내 왕자가 쌀과 녹두, 돼지고기로 땅(네모)과 하늘(둥근 떡 반자이)을 빚어 왕이 되었다는 아름다운 전설이 있어요.',
      '네모난 모양은 우리에게 곡식을 주는 ‘어머니 대지(땅)’를 상징해요.',
      '가족들이 밤새 모닥불을 피워놓고 10시간 이상 떡을 삶으며, 부모님의 은혜와 자연의 보살핌에 깊이 감사드린답니다.'
    ],
    keySymbols: [
      { badge: '대지의 상징', title: '네모난 사각형', desc: '우리가 살아가는 네모난 땅과 풍요로운 자연을 뜻해요.' },
      { badge: '효도의 전설', title: '부모님의 은혜', desc: '가장 정성 어린 떡을 올려 왕이 된 착한 왕자의 이야기예요.' },
      { badge: '가족의 밤', title: '밤새 삶는 정성', desc: '온 가족이 모닥불에 둘러앉아 옛날이야기를 나누며 쪄요.' }
    ],
    funFact: '반쯩은 바나나 잎이나 라동 잎으로 아주 꽁꽁 묶어서 찌기 때문에, 떡 겉면에 싱그러운 초록색 물이 곱게 들고 방부제 없이도 오랫동안 상하지 않아요!',
    greetingPhrase: {
      original: 'Chúc Mừng Năm Mới!',
      pronunciation: '쭉 믕 남 머이!',
      meaning: '행복하고 번창하는 새해 맞이하세요!'
    }
  },
  {
    id: 'germany-marzipan-pig',
    category: 'new_year',
    orderNumber: 6,
    countryName: '독일',
    countryCode: 'DE',
    flagEmoji: '🇩🇪',
    continent: '유럽',
    holidayName: '질베스터 (12월 31일 새해 전야)',
    holidayDateInfo: '묵은해를 보내고 새해를 맞이하는 독일의 밤 축제',
    foodName: '마지팬 피그 (행운의 돼지 과자)',
    foodOriginalName: 'Glücksschwein / Marzipanschwein',
    pronunciation: '글뤽스슈바인 / 마르치판슈바인',
    imageUrl: germanMarzipanPigImg,
    imageCaption: '행운의 네잎클로버와 금화를 곁들인 독일 전통 분홍빛 마지팬 아몬드 돼지 과자',
    summaryHeadline: '"돼지를 가지면 대박 행운이 펑펑! 달콤한 행운의 돼지 과자"',
    reasons: [
      '독일 사람들은 12월 31일 새해 전날과 1월 1일에 친한 친구나 가족에게 아몬드와 설탕으로 빚은 귀여운 분홍 돼지 과자인 ‘마지팬 피그’를 선물해요.',
      '독일어에는 "Schwein gehabt(돼지를 가졌다)!"라는 유명한 속담이 있는데, "뜻밖의 엄청난 행운을 얻었다"라는 뜻이에요!',
      '옛날 가난했던 시절에 돼지는 온 가족이 겨울을 굶지 않고 풍족하게 보낼 수 있게 해주는 최고의 보물이었기 때문이에요.',
      '그래서 귀여운 돼지가 네잎클로버를 입에 물고 있는 과자를 선물하며 "새해에 큰 행운과 재물이 가득하길!" 하고 응원한답니다.'
    ],
    keySymbols: [
      { badge: '뜻밖의 행운', title: '행운의 상징 돼지', desc: '독일에서 돼지는 커다란 대박 행운을 뜻해요.' },
      { badge: '달콤한 선물', title: '아몬드 마지팬', desc: '고소한 아몬드 반죽으로 빚어 달콤하고 부드러워요.' },
      { badge: '축복의 상징', title: '네잎클로버와 금화', desc: '돼지 입에 클로버나 초콜릿 동전을 물려 선물해요.' }
    ],
    funFact: '독일에서는 이 마지팬 돼지를 책상이나 침대 머리맡에 며칠 동안 두고 행운을 빈 뒤에, 새해 기운을 받으며 기분 좋게 냠냠 먹는답니다!',
    greetingPhrase: {
      original: 'Guten Rutsch ins neue Jahr!',
      pronunciation: '구텐 루치 인스 노이에 야-르!',
      meaning: '새해로 미끄러지듯 건강하고 신나게 들어가세요!'
    }
  },
  {
    id: 'netherlands-oliebollen',
    category: 'new_year',
    orderNumber: 7,
    countryName: '네덜란드',
    countryCode: 'NL',
    flagEmoji: '🇳🇱',
    continent: '유럽',
    holidayName: '아우트엔니우 (새해 전야 축제)',
    holidayDateInfo: '한 해의 마지막 날 온 가족이 모여 즐기는 네덜란드의 명절',
    foodName: '올리볼렌 (네덜란드 새해 도넛)',
    foodOriginalName: 'Oliebollen',
    pronunciation: '올-리-볼-렌 (기름에 튀긴 둥근 공)',
    imageUrl: dutchOliebollenImg,
    imageCaption: '건포도와 사과를 넣어 갓 튀겨낸 뒤 새하얀 눈처럼 슈거파우더를 뿌린 올리볼렌',
    summaryHeadline: '"미끌미끌 기름으로 나쁜 악령을 물리치고 하얀 눈처럼 행복 가득!"',
    reasons: [
      '네덜란드에서는 12월 31일이 되면 집집마다, 그리고 길거리 포장마차마다 기름에 둥글게 튀긴 도넛인 ‘올리볼렌’을 한가득 만들어요.',
      '‘올리(Olie)’는 기름, ‘볼렌(Bollen)’은 둥근 공 모양을 뜻해요.',
      '옛날 네덜란드 전설에 따르면, 겨울철에 사람들을 괴롭히는 무시무시한 악령 ‘페르히타’가 칼을 들고 찾아왔을 때, 기름진 올리볼렌을 먹은 사람들의 몸에는 기름기가 돌아 악령의 칼날이 미끄러져 해를 입지 않았다는 재미있는 이야기가 전해져요.',
      '달콤한 건포도와 사과 조각을 넣고 튀긴 빵 위에 하얀 가루 설탕을 듬뿍 뿌려 먹으며, 추운 겨울을 든든하게 이겨내고 새해의 풍요를 기원한답니다.'
    ],
    keySymbols: [
      { badge: '액운 물리치기', title: '미끄러운 기름 전설', desc: '나쁜 기운과 병이 미끄러져 도망가기를 바라요.' },
      { badge: '달콤한 흰 눈', title: '슈거 파우더', desc: '새하얀 눈꽃처럼 깨끗하고 순수한 새해를 맞이해요.' },
      { badge: '풍성한 겨울', title: '건포도와 사과', desc: '과일과 따뜻한 빵으로 추운 겨울 에너지를 충전해요.' }
    ],
    funFact: '우리가 좋아하는 구멍 뚫린 현대식 도넛의 조상이 바로 이 네덜란드의 올리볼렌이라는 이야기가 있어요! 네덜란드 사람들이 미국으로 건너가면서 오늘날의 도넛이 되었답니다.',
    greetingPhrase: {
      original: 'Gelukkig Nieuwjaar!',
      pronunciation: '헬뤽흭 니우야-르!',
      meaning: '행복하고 건강한 새해 맞으세요!'
    }
  },
  {
    id: 'usa-hoppin-john',
    category: 'new_year',
    orderNumber: 8,
    countryName: '미국 (남부)',
    countryCode: 'US',
    flagEmoji: '🇺🇸',
    continent: '북아메리카',
    holidayName: '뉴 이어스 데이 (1월 1일 새해 첫날)',
    holidayDateInfo: '새해의 첫날 부와 번영을 기원하는 미국의 전통',
    foodName: '호핑 존',
    foodOriginalName: 'Hoppin\' John',
    pronunciation: '호-핑 존 (검은눈콩 쌀밥 요리)',
    imageUrl: usHoppinJohnImg,
    imageCaption: '동전을 닮은 검은눈콩과 쌀, 베이컨을 넣고 끓여 채소와 옥수수빵을 곁들인 호핑 존',
    summaryHeadline: '"콩은 동전, 채소는 지폐, 옥수수빵은 금화! 부자 되는 새해 식탁"',
    reasons: [
      '미국 남부 지방에서는 1월 1일 새해 첫날 점심에 반드시 ‘호핑 존’이라는 콩밥 요리를 먹는 유명한 풍습이 있어요.',
      '가운데 까만 점이 콕 박힌 ‘검은눈콩(동부콩)’은 동글동글 옛날 ‘동전(페니)’을 닮았다고 생각했어요.',
      '여기에 곁들여 먹는 진한 초록색 채소(케일이나 콜라드 그린)는 초록색 ‘달러 지폐’를 상징하고, 황금빛 ‘옥수수빵(콘브레드)’은 반짝이는 ‘금화’를 상징해요.',
      '그래서 호핑 존 한 그릇을 다 먹으면 "새해 1년 동안 돈 걱정 없이 풍족하고 부자가 된다"고 굳게 믿는답니다.'
    ],
    keySymbols: [
      { badge: '동전의 상징', title: '검은눈콩 (동부콩)', desc: '동글납작한 콩이 동전을 닮아 불어나길 바라요.' },
      { badge: '지폐의 상징', title: '푸른 잎 채소', desc: '초록색 배춧잎처럼 달러 지폐가 가득하길 빌어요.' },
      { badge: '금화의 상징', title: '황금 옥수수빵', desc: '노란 콘브레드가 반짝이는 금괴처럼 번영을 뜻해요.' }
    ],
    funFact: '새해 첫날 먹고 남은 호핑 존은 다음 날 ‘스키핑 제니(Skipping Jenny)’라고 불러요! 음식을 버리지 않고 알뜰하게 아껴 먹어야 새해에 진짜 알부자가 된다고 생각했기 때문이랍니다.',
    greetingPhrase: {
      original: 'Happy New Year, Good Fortune!',
      pronunciation: '해피 뉴 이어, 굿 포춘!',
      meaning: '행복한 새해, 큰 행운과 복이 가득하세요!'
    }
  },
  {
    id: 'spain-grapes',
    category: 'new_year',
    orderNumber: 9,
    countryName: '스페인',
    countryCode: 'ES',
    flagEmoji: '🇪🇸',
    continent: '유럽',
    holidayName: '노체비에하 (12월 31일 새해 전야)',
    holidayDateInfo: '새해를 맞이하는 밤의 화려한 카운트다운 축제',
    foodName: '12알의 행운 포도',
    foodOriginalName: 'Las doce uvas de la suerte',
    pronunciation: '라스 도세 우바스 데 라 수에르테',
    imageUrl: spainGrapesImg,
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
    orderNumber: 10,
    countryName: '그리스',
    countryCode: 'GR',
    flagEmoji: '🇬🇷',
    continent: '유럽',
    holidayName: '성 바실리오의 날 (1월 1일)',
    holidayDateInfo: '가난한 사람을 도운 성 바실리오를 기리는 새해 첫날',
    foodName: '바실로피타 (새해 케이크)',
    foodOriginalName: 'Βασιλόπιτα (Vasilopita)',
    pronunciation: '바-실-로-피-타',
    imageUrl: greeceVasilopitaImg,
    imageCaption: '새해를 맞이하는 2026 숫자가 슈거파우더로 장식되어 있고 속에 행운의 동전을 품은 바실로피타 케이크',
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
    orderNumber: 11,
    countryName: '이탈리아',
    countryCode: 'IT',
    flagEmoji: '🇮🇹',
    continent: '유럽',
    holidayName: '카포단노 (1월 1일 새해 첫날)',
    holidayDateInfo: '새해를 맞이하는 이탈리아의 활기찬 축제',
    foodName: '코테키노 콘 렌티키에',
    foodOriginalName: 'Cotechino con lenticchie',
    pronunciation: '코-테-키-노 콘 렌-티-키-에 (렌틸콩과 돼지고기 요리)',
    imageUrl: italyCotechinoImg,
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

  // ==========================================
  // [PART 2] 추수 명절 음식 (12번 ~ 17번)
  // ==========================================
  {
    id: 'korea-songpyeon',
    category: 'harvest',
    orderNumber: 12,
    countryName: '대한민국',
    countryCode: 'KR',
    flagEmoji: '🇰🇷',
    continent: '아시아',
    holidayName: '추석 (음력 8월 15일 한가위)',
    holidayDateInfo: '가을의 풍성한 수확을 감사하는 한국의 대표적인 추수 명절',
    foodName: '송편',
    foodOriginalName: 'Songpyeon',
    imageUrl: koreanSongpyeonImg,
    imageCaption: '솔잎을 깔아 쪄내 향긋하고 참기름이 자르르 흐르는 고운 오색 반달 송편',
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
    orderNumber: 13,
    countryName: '미국 & 캐나다',
    countryCode: 'US',
    flagEmoji: '🇺🇸',
    continent: '북아메리카',
    holidayName: '추수감사절 (Thanksgiving Day)',
    holidayDateInfo: '11월 넷째 목요일(캐나다는 10월 둘째 월요일)에 치르는 감사 축제',
    foodName: '칠면조 구이와 호박 파이',
    foodOriginalName: 'Roast Turkey & Pumpkin Pie',
    pronunciation: '로스트 터키 & 펌킨 파이',
    imageUrl: thanksgivingFeastImg,
    imageCaption: '황금빛으로 노릇하게 구워낸 칠면조 구이와 달콤한 계피향 호박 파이',
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
    orderNumber: 14,
    countryName: '중국',
    countryCode: 'CN',
    flagEmoji: '🇨🇳',
    continent: '아시아',
    holidayName: '중추절 (음력 8월 15일)',
    holidayDateInfo: '가을밤 둥근 보름달을 보며 가족의 화목을 다지는 명절',
    foodName: '월병',
    foodOriginalName: '月饼 (Yuèbǐng)',
    pronunciation: '웨-빙 (달 모양 과자)',
    imageUrl: chineseMooncakeImg,
    imageCaption: '정교한 문양이 새겨진 노릇한 껍질 속에 달콤한 팥과 보름달을 닮은 오리알 노른자를 품은 월병',
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
    orderNumber: 15,
    countryName: '독일',
    countryCode: 'DE',
    flagEmoji: '🇩🇪',
    continent: '유럽',
    holidayName: '에른테당크페스트 (추수감사제)',
    holidayDateInfo: '10월 첫째 일요일, 대지의 풍요와 수확에 감사하는 축제',
    foodName: '로스트치킨과 사과 케이크',
    foodOriginalName: 'Brathähnchen & Apfelkuchen',
    pronunciation: '브라트헨헨 & 아펠쿠헨 (닭구이와 햇사과 케이크)',
    imageUrl: germanHarvestMealImg,
    imageCaption: '바삭하게 구운 브라트헨헨(닭구이)과 가을 햇사과를 듬뿍 올려 구운 독일식 아펠쿠헨',
    summaryHeadline: '"황금빛 밀밭과 알찬 사과 열매에 감사하는 가을 축제!"',
    reasons: [
      '독일에서는 10월 첫째 일요일이 되면 마을 사람들이 교회와 광장에 모여 ‘에른테당크페스트’라는 추수 축제를 열어요.',
      '‘에른테(Ernte)’는 추수, ‘당크(Dank)’는 감사, ‘페스트(Fest)’는 축제라는 뜻이에요.',
      '마을 사람들은 들판에서 거둔 황금빛 밀짚으로 커다란 화환(추수관)을 엮고, 밭에서 수확한 햇감자, 양배추, 호박, 그리고 달콤한 햇사과를 제단에 올려 감사 기도를 드려요.',
      '예배가 끝나면 이웃들과 모여 겉은 바삭하고 속은 촉촉한 닭고기(브라트헨헨) 요리를 먹고, 과수원에서 갓 딴 햇사과를 듬뿍 넣은 따뜻한 ‘사과 케이크(아펠쿠헨)’를 함께 나누어 먹는답니다.'
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
    id: 'vietnam-banh-trung-thu',
    category: 'harvest',
    orderNumber: 16,
    countryName: '베트남',
    countryCode: 'VN',
    flagEmoji: '🇻🇳',
    continent: '아시아',
    holidayName: '뗏 쭝투 (음력 8월 15일 베트남 추석 & 어린이날)',
    holidayDateInfo: '가을 추수를 축하하며 어린이를 가장 귀하게 축복하는 명절',
    foodName: '반쭝투 (Bánh Trung Thu)',
    foodOriginalName: 'Bánh Trung Thu',
    pronunciation: '반-쭝-투 (베트남 중추절 빵)',
    imageUrl: vietnamBanhTrungThuImg,
    imageCaption: '정교한 꽃무늬로 노릇하게 구운 바인 느엉과 하얀 찹쌀 바인 제오가 함께하는 반쭝투',
    summaryHeadline: '"농사일을 마치고 아이들을 사랑하는 마음으로 준비한 달콤한 선물!"',
    reasons: [
      '베트남에서는 음력 8월 15일을 ‘뗏 쭝투’라고 부르는데, 가을 추수 명절이자 아이들이 가장 손꼽아 기다리는 ‘어린이 축제’예요!',
      '부모님들이 봄과 여름 동안 농사일로 너무 바빠서 아이들과 많은 시간을 보내지 못했던 미안함과 고마움을 담아, 추수를 마친 뒤 아이들을 위해 특별한 과자인 ‘반쭝투’를 만들었어요.',
      '반쭝투는 두 가지 종류가 있어요. 갈색빛으로 고소하게 구운 ‘바인 느엉(Bánh nướng)’과, 흰 찹쌀가루로 쫄깃하게 빚은 눈처럼 하얀 ‘바인 제오(Bánh dẻo)’예요.',
      '보름달 밤이 되면 아이들은 알록달록한 잉어 등불과 별 등불을 들고 행진하며, 온 가족이 모여 달콤한 반쭝투를 나누어 먹는답니다.'
    ],
    keySymbols: [
      { badge: '어린이 사랑', title: '아이들을 위한 축제', desc: '바쁜 수확을 마치고 아이들에게 사랑과 감사를 전해요.' },
      { badge: '두 가지 매력', title: '바인 느엉 & 바인 제오', desc: '노릇하게 구운 빵과 쫄깃한 찹쌀떡을 함께 즐겨요.' },
      { badge: '희망의 등불', title: '별 모양 등불 행진', desc: '등불을 밝히며 밝고 건강하게 자라기를 응원해요.' }
    ],
    funFact: '베트남에서는 달 속에 우리나라처럼 토끼가 아니라, 요술 반얀나무를 잡고 달나라로 둥실 떠오른 착한 ‘꾸오이(Cuội)’ 아저씨가 살고 있다고 믿는답니다!',
    greetingPhrase: {
      original: 'Tết Trung Thu vui vẻ!',
      pronunciation: '뗏 쭝 투 부이 베!',
      meaning: '즐겁고 행복한 중추절(추석) 보내렴!'
    }
  },
  {
    id: 'japan-tsukimi-dango',
    category: 'harvest',
    orderNumber: 17,
    countryName: '일본',
    countryCode: 'JP',
    flagEmoji: '🇯🇵',
    continent: '아시아',
    holidayName: '오쓰키미 (음력 8월 15일 달맞이 명절)',
    holidayDateInfo: '가을 보름달을 감상하며 풍성한 쌀 수확에 감사하는 전통 명절',
    foodName: '츠키미당고 (달맞이 경단)',
    foodOriginalName: '月見団子 (Tsukimi Dango)',
    pronunciation: '츠-키-미 당-고',
    imageUrl: japaneseTsukimiDangoImg,
    imageCaption: '보름달을 닮은 15개의 뽀얗고 큼직한 쌀 경단(당고)을 피라미드처럼 쌓아 올린 츠키미당고',
    summaryHeadline: '"보름달처럼 둥근 15개의 경단을 쌓아 가을 쌀 수확에 감사해요!"',
    reasons: [
      '일본에서는 음력 8월 15일 밤을 ‘주고요(15번째 밤)’라고 부르며, 맑은 가을 하늘에 뜬 둥근 보름달을 감상하는 ‘오쓰키미(달맞이)’를 즐겨요.',
      '이때 가을에 새로 수확한 햇쌀 가루로 동글동글 둥근 떡인 ‘츠키미당고’를 정성껏 빚어요.',
      '음력 15일 밤을 기념하여 총 15개의 하얀 경단을 나무로 만든 제단(삼보) 위에 맨 아래 9개, 중간 4개, 맨 위 2개로 예쁜 피라미드 모양으로 차곡차곡 쌓아 올립니다.',
      '둥근 경단은 밝은 보름달을 닮았으며, 창가에 가을 억새풀(스스키)과 함께 달을 향해 올려놓고 "올해도 쌀 농사가 잘되게 해주셔서 감사합니다" 하고 자연에 감사 기도를 드린 뒤 나누어 먹어요.'
    ],
    keySymbols: [
      { badge: '보름달의 상징', title: '15개의 둥근 경단', desc: '음력 15일 보름달을 상징하며 피라미드 모양으로 쌓아요.' },
      { badge: '수확의 기쁨', title: '신선한 햅쌀', desc: '가을에 갓 수확한 소중한 쌀로 떡을 빚어 감사드려요.' },
      { badge: '달맞이 억새', title: '스스키 풀 장식', desc: '나쁜 액운을 쫓고 풍년을 기원하는 억새를 곁들여요.' }
    ],
    funFact: '옛날 일본 마을에서는 아이들이 긴 막대기로 남의 집 제단에 놓인 츠키미당고를 몰래 훔쳐 먹는 재미난 풍습(오쓰키미 도로보)이 있었어요! 떡을 도둑맞은 집은 "달의 신이 음식을 가져가셨다"며 오히려 큰 복이 온다고 기뻐했답니다.',
    greetingPhrase: {
      original: 'お月見を楽しんでください',
      pronunciation: '오츠키미오 타노신데 쿠다사이',
      meaning: '아름다운 보름달과 함께 행복한 달맞이 보내세요!'
    }
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '우리나라 설날에 먹는 떡국에서 가래떡을 엽전(옛날 동전) 모양으로 둥글게 써는 이유는 무엇일까요?',
    options: [
      '빨리 익으라고',
      '새해에 돈을 많이 벌고 집안에 복과 재물이 가득하길 바라서',
      '숟가락으로 뜨기 편해서',
      '냄비가 작아서'
    ],
    correctIndex: 1,
    explanation: '가래떡을 엽전처럼 둥글넓적하게 썬 것은 새해에 집안에 복과 재물이 풍요롭게 넘쳐나기를 기원하는 뜻이에요.',
    foodId: 'korea-tteokguk'
  },
  {
    id: 2,
    question: '일본의 새해 음식 "오세치 요리"에서 허리가 굽은 새우는 무엇을 상징할까요?',
    options: [
      '헤엄을 잘 치기를',
      '허리가 휠 때까지 아프지 않고 오래 살기를(장수)',
      '바다로 여행 가기를',
      '키가 쑥쑥 크기를'
    ],
    correctIndex: 1,
    explanation: '등이 굽은 새우는 나이가 들어 허리가 굽을 때까지 무병장수하기를 바라는 마음을 담고 있어요.',
    foodId: 'japan-osechi'
  },
  {
    id: 3,
    question: '프랑스의 새해 파이 "갈레트 데 루아" 속에 숨겨진 작은 도자기 인형(페브)을 찾은 사람은 무엇을 쓸 수 있을까요?',
    options: ['황금 종이 왕관', '산타 모자', '선글라스', '마법사 망토'],
    correctIndex: 0,
    explanation: '파이 조각 속에서 인형을 발견한 사람은 함께 들어있는 황금 종이 왕관을 쓰고 하루 동안 ‘오늘의 왕’이 되어 축하를 받아요!',
    foodId: 'france-galette'
  },
  {
    id: 4,
    question: '독일에서 새해에 "Schwein gehabt(돼지를 가졌다)!"라는 말과 함께 선물하는 아몬드 돼지 과자의 이름은?',
    options: ['초코 베어', '마지팬 피그 (글뤽스슈바인)', '버터 쿠키', '진저브레드'],
    correctIndex: 1,
    explanation: '독일에서 돼지는 커다란 뜻밖의 행운을 상징해요. 그래서 새해에 아몬드 반죽으로 만든 귀여운 마지팬 피그를 선물한답니다.',
    foodId: 'germany-marzipan-pig'
  },
  {
    id: 5,
    question: '미국 남부에서 새해 첫날 먹는 "호핑 존"에서 검은눈콩(동부콩)은 무엇을 상징할까요?',
    options: ['동전(페니)', '단추', '주사위', '바퀴'],
    correctIndex: 0,
    explanation: '검은눈콩은 동글납작한 동전을 상징해요. 푸른 채소는 지폐, 옥수수빵은 금화를 상징해 새해 부자가 되길 빌어요.',
    foodId: 'usa-hoppin-john'
  },
  {
    id: 6,
    question: '우리나라 추석에 햇곡식으로 빚는 "송편"은 왜 보름달이 아니라 반달 모양으로 빚을까요?',
    options: [
      '둥글게 빚기 어려워서',
      '반달은 앞으로 점점 차올라 보름달처럼 크게 번창하길 바라는 마음 때문에',
      '쟁반에 많이 담으려고',
      '솔잎을 적게 쓰려고'
    ],
    correctIndex: 1,
    explanation: '보름달은 작아질 일만 남았지만, 반달은 점점 커져서 밝은 보름달이 되기 때문에 우리 집안과 나라가 더 번창하길 바라는 뜻이 담겨 있어요.',
    foodId: 'korea-songpyeon'
  },
  {
    id: 7,
    question: '일본의 가을 오쓰키미(달맞이) 때, 음력 8월 15일을 기념하여 보름달 모양으로 몇 개의 경단(츠키미당고)을 쌓아 올릴까요?',
    options: ['3개', '7개', '12개', '15개'],
    correctIndex: 3,
    explanation: '음력 15일 밤의 보름달을 상징하여 총 15개의 하얀 쌀 경단을 피라미드 모양으로 쌓아 달에 감사 기도를 드려요.',
    foodId: 'japan-tsukimi-dango'
  }
];
