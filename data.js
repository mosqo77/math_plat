/**
 * 고등학교 1학년 통합과학 탐구용 118개 원소 데이터베이스
 * 
 * 각 원소의 기본 정보(원자 번호, 기호, 한글명, 영문명, 원자량)와
 * 주기율표 위치(주기, 족), 화학적 분류, 상온 상태,
 * 보어 원자 모형(Bohr model)용 전자 껍질(K, L, M, N...) 전자 수,
 * 원자가 전자(Valence electrons) 수 및 고1 통합과학 핵심 학습 팁을 포함합니다.
 */

const CATEGORIES = {
    'alkali-metal': { name: '알칼리 금속', color: '#ff5376', desc: '1족 금속(수소 제외). 반응성이 매우 커 물, 산소와 격렬히 반응' },
    'alkaline-earth': { name: '알칼리 토금속', color: '#ff9248', desc: '2족 금속. 알칼리 금속보다는 반응성이 작지만 물과 반응하여 염기성' },
    'transition-metal': { name: '전이 금속', color: '#f3c74d', desc: '3~12족 원소. 단단하고 녹는점이 높으며 다양한 산화수를 가짐' },
    'post-transition': { name: '전이후 금속', color: '#4ade80', desc: '전이 금속보다 연하고 녹는점이 상대적으로 낮은 금속' },
    'metalloid': { name: '준금속', color: '#2dd4bf', desc: '금속과 비금속의 중간 성질. 반도체(Si, Ge 등)로 널리 활용' },
    'reactive-nonmetal': { name: '비금속(반응성)', color: '#38bdf8', desc: '전자를 얻어 음이온이 되기 쉬운 비금속 원소' },
    'halogen': { name: '할로젠', color: '#818cf8', desc: '17족 원소. 원자가 전자가 7개로 반응성이 매우 크며 1가 음이온 형성' },
    'noble-gas': { name: '비활성 기체', color: '#c084fc', desc: '18족 원소. 가장 바깥 전자 껍질이 꽉 차 화학적으로 매우 안정' },
    'lanthanide': { name: '란타넘족', color: '#f472b6', desc: '원자번호 57~71번 원소군. 희토류 원소로 첨단 산업에 필수' },
    'actinide': { name: '악티늄족', color: '#fb7185', desc: '원자번호 89~103번 원소군. 모두 방사성 원소' }
};

const ELEMENTS_DATA = [
    // 1주기
    {
        number: 1, symbol: 'H', nameKr: '수소', nameEn: 'Hydrogen', weight: '1.008',
        period: 1, group: 1, category: 'reactive-nonmetal', state: '기체',
        shells: [1], valenceElectrons: 1,
        gridRow: 1, gridCol: 1,
        summary: '우주에서 가장 풍부한 원소입니다. 1족에 위치하지만 비금속이며 전자를 1개 잃어 H+가 되거나 공유 결합을 형성합니다.'
    },
    {
        number: 2, symbol: 'He', nameKr: '헬륨', nameEn: 'Helium', weight: '4.003',
        period: 1, group: 18, category: 'noble-gas', state: '기체',
        shells: [2], valenceElectrons: 0,
        gridRow: 1, gridCol: 18,
        summary: '18족 비활성 기체로 전자 2개가 첫 번째 껍질(K)을 완전히 채워 화학적으로 매우 안정합니다. 폭발성이 없어 기구용 기체로 쓰입니다.'
    },

    // 2주기
    {
        number: 3, symbol: 'Li', nameKr: '리튬', nameEn: 'Lithium', weight: '6.94',
        period: 2, group: 1, category: 'alkali-metal', state: '고체',
        shells: [2, 1], valenceElectrons: 1,
        gridRow: 2, gridCol: 1,
        summary: '1족 알칼리 금속의 첫 번째 원소. 칼로 잘릴 정도로 무르며 물과 격렬하게 반응해 수소 기체(H₂)를 발생시킵니다. 스마트폰 배터리에 쓰입니다.'
    },
    {
        number: 4, symbol: 'Be', nameKr: '베릴륨', nameEn: 'Beryllium', weight: '9.012',
        period: 2, group: 2, category: 'alkaline-earth', state: '고체',
        shells: [2, 2], valenceElectrons: 2,
        gridRow: 2, gridCol: 2,
        summary: '2족 알칼리 토금속. 가볍고 단단하여 우주 항공 및 특수 합금 재료로 사용됩니다.'
    },
    {
        number: 5, symbol: 'B', nameKr: '붕소', nameEn: 'Boron', weight: '10.81',
        period: 2, group: 13, category: 'metalloid', state: '고체',
        shells: [2, 3], valenceElectrons: 3,
        gridRow: 2, gridCol: 13,
        summary: '준금속 원소. 내열 유리(파이렉스)나 반도체 도핑제로 사용됩니다.'
    },
    {
        number: 6, symbol: 'C', nameKr: '탄소', nameEn: 'Carbon', weight: '12.011',
        period: 2, group: 14, category: 'reactive-nonmetal', state: '고체',
        shells: [2, 4], valenceElectrons: 4,
        gridRow: 2, gridCol: 14,
        summary: '생명체의 기본 뼈대를 이루는 필수 원소! 최대 4개의 공유 결합을 형성할 수 있어 수많은 유기 화합물을 만듭니다. (흑연, 다이아몬드, 탄소나노튜브)'
    },
    {
        number: 7, symbol: 'N', nameKr: '질소', nameEn: 'Nitrogen', weight: '14.007',
        period: 2, group: 15, category: 'reactive-nonmetal', state: '기체',
        shells: [2, 5], valenceElectrons: 5,
        gridRow: 2, gridCol: 15,
        summary: '대기 부피의 약 78%를 차지합니다. 질소 분자(N₂)는 강력한 3중 결합을 하고 있어 반응성이 매우 낮고 과자 포장 충전재로 쓰입니다.'
    },
    {
        number: 8, symbol: 'O', nameKr: '산소', nameEn: 'Oxygen', weight: '15.999',
        period: 2, group: 16, category: 'reactive-nonmetal', state: '기체',
        shells: [2, 6], valenceElectrons: 6,
        gridRow: 2, gridCol: 16,
        summary: '생물 호흡과 연소에 필수적인 기체. 전기 음성도가 커서 다른 물질을 산화시키기 쉽습니다. 지구 지각과 생명체에 가장 풍부한 원소 중 하나입니다.'
    },
    {
        number: 9, symbol: 'F', nameKr: '플루오린', nameEn: 'Fluorine', weight: '18.998',
        period: 2, group: 17, category: 'halogen', state: '기체',
        shells: [2, 7], valenceElectrons: 7,
        gridRow: 2, gridCol: 17,
        summary: '17족 할로젠 원소. 전자를 끌어당기는 힘(전기 음성도)이 모든 원소 중 가장 강하며, 반응성이 극도로 큽니다. 치약(충치 예방 불소)에 이용됩니다.'
    },
    {
        number: 10, symbol: 'Ne', nameKr: '네온', nameEn: 'Neon', weight: '20.180',
        period: 2, group: 18, category: 'noble-gas', state: '기체',
        shells: [2, 8], valenceElectrons: 0,
        gridRow: 2, gridCol: 18,
        summary: '18족 비활성 기체. 옥텟 규칙(가장 바깥 껍질 전자 8개)을 만족하여 매우 안정합니다. 방전관에 넣으면 붉은 주황빛을 내어 네온사인에 쓰입니다.'
    },

    // 3주기
    {
        number: 11, symbol: 'Na', nameKr: '나트륨', nameEn: 'Sodium', weight: '22.990',
        period: 3, group: 1, category: 'alkali-metal', state: '고체',
        shells: [2, 8, 1], valenceElectrons: 1,
        gridRow: 3, gridCol: 1,
        summary: '대표적인 1족 알칼리 금속. 물과 반응하여 수소 기체를 방출하며 수용액은 페놀프탈레인을 붉게 변화시킵니다(염기성). 소금(NaCl)의 구성 성분입니다.'
    },
    {
        number: 12, symbol: 'Mg', nameKr: '마그네슘', nameEn: 'Magnesium', weight: '24.305',
        period: 3, group: 2, category: 'alkaline-earth', state: '고체',
        shells: [2, 8, 2], valenceElectrons: 2,
        gridRow: 3, gridCol: 2,
        summary: '2족 알칼리 토금속. 불꽃 반응 시 눈부신 백색 빛을 내며 연소합니다. 엽록소의 중심 금속 이온이며 가볍고 튼튼한 경합금 재료입니다.'
    },
    {
        number: 13, symbol: 'Al', nameKr: '알루미늄', nameEn: 'Aluminium', weight: '26.982',
        period: 3, group: 13, category: 'post-transition', state: '고체',
        shells: [2, 8, 3], valenceElectrons: 3,
        gridRow: 3, gridCol: 13,
        summary: '지구 지각에서 철보다 많은 금속 원소 1위! 가볍고 산화 피막을 형성해 부식에 강하며 알루미늄 포일, 비행기 동체, 캔 등에 널리 쓰입니다.'
    },
    {
        number: 14, symbol: 'Si', nameKr: '규소', nameEn: 'Silicon', weight: '28.085',
        period: 3, group: 14, category: 'metalloid', state: '고체',
        shells: [2, 8, 4], valenceElectrons: 4,
        gridRow: 3, gridCol: 14,
        summary: '현대 디지털 시대를 이끈 반도체의 핵심 원소! 암석과 모래(석영, SiO₂)의 주성분으로 지각 질량의 약 28%를 차지합니다.'
    },
    {
        number: 15, symbol: 'P', nameKr: '인', nameEn: 'Phosphorus', weight: '30.974',
        period: 3, group: 15, category: 'reactive-nonmetal', state: '고체',
        shells: [2, 8, 5], valenceElectrons: 5,
        gridRow: 3, gridCol: 15,
        summary: '생체 내 DNA, RNA 및 세포 에너지 화폐인 ATP의 핵심 성분. 성냥의 마찰면이나 비료의 필수 요소로 사용됩니다.'
    },
    {
        number: 16, symbol: 'S', nameKr: '황', nameEn: 'Sulfur', weight: '32.06',
        period: 3, group: 16, category: 'reactive-nonmetal', state: '고체',
        shells: [2, 8, 6], valenceElectrons: 6,
        gridRow: 3, gridCol: 16,
        summary: '노란색 비금속 결정. 단백질 아미노산의 구성 성분이며, 고무를 단단하게 가황하는 공정이나 황산(H₂SO₄) 제조에 쓰입니다.'
    },
    {
        number: 17, symbol: 'Cl', nameKr: '염소', nameEn: 'Chlorine', weight: '35.45',
        period: 3, group: 17, category: 'halogen', state: '기체',
        shells: [2, 8, 7], valenceElectrons: 7,
        gridRow: 3, gridCol: 17,
        summary: '황록색의 자극적인 기체로 17족 할로젠 원소입니다. 수돗물 소독, 표백제, 소금(NaCl)과 PVC 플라스틱 원료로 널리 쓰입니다.'
    },
    {
        number: 18, symbol: 'Ar', nameKr: '아르곤', nameEn: 'Argon', weight: '39.948',
        period: 3, group: 18, category: 'noble-gas', state: '기체',
        shells: [2, 8, 8], valenceElectrons: 0,
        gridRow: 3, gridCol: 18,
        summary: '대기 중에 질소, 산소 다음으로 3번째로 많은 기체(약 0.93%). 18족 비활성 기체로 반응을 하지 않아 백열전구 충전 가스, 특수 용접용 불활성 기체로 쓰입니다.'
    },

    // 4주기
    {
        number: 19, symbol: 'K', nameKr: '칼륨', nameEn: 'Potassium', weight: '39.098',
        period: 4, group: 1, category: 'alkali-metal', state: '고체',
        shells: [2, 8, 8, 1], valenceElectrons: 1,
        gridRow: 4, gridCol: 1,
        summary: '1족 알칼리 금속. 나트륨보다 원자 반지름이 커 전자를 더 쉽게 잃어 반응성이 훨씬 큽니다. 생명체 신경 신호 전달에 필수 이온(K+)입니다.'
    },
    {
        number: 20, symbol: 'Ca', nameKr: '칼슘', nameEn: 'Calcium', weight: '40.078',
        period: 4, group: 2, category: 'alkaline-earth', state: '고체',
        shells: [2, 8, 8, 2], valenceElectrons: 2,
        gridRow: 4, gridCol: 2,
        summary: '뼈와 치아의 주성분(수산화인회석)이자 조개껍데기, 석회석(CaCO₃)의 핵심 원소입니다. 전자를 2개 잃어 Ca²⁺ 양이온이 됩니다.'
    },
    {
        number: 21, symbol: 'Sc', nameKr: '스칸듐', nameEn: 'Scandium', weight: '44.956',
        period: 4, group: 3, category: 'transition-metal', state: '고체',
        shells: [2, 8, 9, 2], valenceElectrons: 2,
        gridRow: 4, gridCol: 3,
        summary: '첫 번째 전이 금속. 알루미늄과 합금하여 항공기 부품, 고급 스포츠 용품(자전거 프레임)에 쓰입니다.'
    },
    {
        number: 22, symbol: 'Ti', nameKr: '타이타늄', nameEn: 'Titanium', weight: '47.867',
        period: 4, group: 4, category: 'transition-metal', state: '고체',
        shells: [2, 8, 10, 2], valenceElectrons: 2,
        gridRow: 4, gridCol: 4,
        summary: '강철만큼 강하지만 무게는 훨씬 가볍고 부식되지 않으며 생체 적합성이 뛰어나 인공관절, 임플란트, 안경테에 애용됩니다.'
    },
    {
        number: 23, symbol: 'V', nameKr: '바나듐', nameEn: 'Vanadium', weight: '50.942',
        period: 4, group: 5, category: 'transition-metal', state: '고체',
        shells: [2, 8, 11, 2], valenceElectrons: 2,
        gridRow: 4, gridCol: 5,
        summary: '강철에 소량 첨가하면 강도와 탄성이 비약적으로 증가하여 자동차 스프링, 공구강으로 사용됩니다.'
    },
    {
        number: 24, symbol: 'Cr', nameKr: '크로뮴', nameEn: 'Chromium', weight: '51.996',
        period: 4, group: 6, category: 'transition-metal', state: '고체',
        shells: [2, 8, 13, 1], valenceElectrons: 1,
        gridRow: 4, gridCol: 6,
        summary: '반짝이는 은빛 광택과 내부식성을 부여하는 금속. 철과 합금하여 녹슬지 않는 스테인리스강을 만듭니다.'
    },
    {
        number: 25, symbol: 'Mn', nameKr: '망가니즈', nameEn: 'Manganese', weight: '54.938',
        period: 4, group: 7, category: 'transition-metal', state: '고체',
        shells: [2, 8, 13, 2], valenceElectrons: 2,
        gridRow: 4, gridCol: 7,
        summary: '철강 제조의 탈황제 및 강도 강화제로 필수적이며, 건전지의 이산화 망가니즈(MnO₂)로 사용됩니다.'
    },
    {
        number: 26, symbol: 'Fe', nameKr: '철', nameEn: 'Iron', weight: '55.845',
        period: 4, group: 8, category: 'transition-metal', state: '고체',
        shells: [2, 8, 14, 2], valenceElectrons: 2,
        gridRow: 4, gridCol: 8,
        summary: '인류 문명을 지탱해 온 가장 중요한 금속! 지구 전체 질량의 1위를 차지(지구 핵)하며 혈액의 헤모글로빈 중심 원소입니다.'
    },
    {
        number: 27, symbol: 'Co', nameKr: '코발트', nameEn: 'Cobalt', weight: '58.933',
        period: 4, group: 9, category: 'transition-metal', state: '고체',
        shells: [2, 8, 15, 2], valenceElectrons: 2,
        gridRow: 4, gridCol: 9,
        summary: '아름다운 파란색 안료(코발트 블루)의 기원. 리튬 이온 배터리의 양극재 핵심 원소이자 강력한 영구자석 재료입니다.'
    },
    {
        number: 28, symbol: 'Ni', nameKr: '니켈', nameEn: 'Nickel', weight: '58.693',
        period: 4, group: 10, category: 'transition-metal', state: '고체',
        shells: [2, 8, 16, 2], valenceElectrons: 2,
        gridRow: 4, gridCol: 10,
        summary: '녹이 슬지 않고 은백색 광택을 지녀 동전(백동화), 충전지(니켈-수소), 스테인리스 합금의 주재료입니다.'
    },
    {
        number: 29, symbol: 'Cu', nameKr: '구리', nameEn: 'Copper', weight: '63.546',
        period: 4, group: 11, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 1], valenceElectrons: 1,
        gridRow: 4, gridCol: 11,
        summary: '인류가 최초로 사용한 금속 중 하나. 전기 전도성과 열전도성이 은 다음으로 뛰어나 전선과 전자 기판의 기본 소재입니다.'
    },
    {
        number: 30, symbol: 'Zn', nameKr: '아연', nameEn: 'Zinc', weight: '65.38',
        period: 4, group: 12, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 2], valenceElectrons: 2,
        gridRow: 4, gridCol: 12,
        summary: '철 표면에 도금하여 녹을 방지하는 아연 도금 강판(함석)에 쓰이며 황동(구리+아연)의 성분입니다.'
    },
    {
        number: 31, symbol: 'Ga', nameKr: '갈륨', nameEn: 'Gallium', weight: '69.723',
        period: 4, group: 13, category: 'post-transition', state: '고체',
        shells: [2, 8, 18, 3], valenceElectrons: 3,
        gridRow: 4, gridCol: 13,
        summary: '녹는점이 29.8℃로 손바닥 체온 위에서 액체로 녹아내리는 신기한 금속! 질화갈륨(GaN) 반도체 및 고속 충전기에 쓰입니다.'
    },
    {
        number: 32, symbol: 'Ge', nameKr: '저마늄', nameEn: 'Germanium', weight: '72.630',
        period: 4, group: 14, category: 'metalloid', state: '고체',
        shells: [2, 8, 18, 4], valenceElectrons: 4,
        gridRow: 4, gridCol: 14,
        summary: '초기 트랜지스터에 사용된 준금속. 적외선 광학 렌즈 및 광섬유 통신 분야에 이용됩니다.'
    },
    {
        number: 33, symbol: 'As', nameKr: '비소', nameEn: 'Arsenic', weight: '74.922',
        period: 4, group: 15, category: 'metalloid', state: '고체',
        shells: [2, 8, 18, 5], valenceElectrons: 5,
        gridRow: 4, gridCol: 15,
        summary: '과거 사약의 원료(비상)로 유명한 독성 준금속. 화합물 반도체(GaAs)로 고속 레이저와 우주 태양전지에 쓰입니다.'
    },
    {
        number: 34, symbol: 'Se', nameKr: '셀레늄', nameEn: 'Selenium', weight: '78.971',
        period: 4, group: 16, category: 'reactive-nonmetal', state: '고체',
        shells: [2, 8, 18, 6], valenceElectrons: 6,
        gridRow: 4, gridCol: 16,
        summary: '빛을 받으면 전기가 통하는 광전도성을 지녀 복사기 감광 드럼과 태양전지에 활용됩니다.'
    },
    {
        number: 35, symbol: 'Br', nameKr: '브로민', nameEn: 'Bromine', weight: '79.904',
        period: 4, group: 17, category: 'halogen', state: '액체',
        shells: [2, 8, 18, 7], valenceElectrons: 7,
        gridRow: 4, gridCol: 17,
        summary: '상온에서 유일하게 액체 상태인 비금속 원소! 붉은 갈색의 자극적인 냄새가 나는 액체로 17족 할로젠 원소입니다.'
    },
    {
        number: 36, symbol: 'Kr', nameKr: '크립톤', nameEn: 'Krypton', weight: '83.798',
        period: 4, group: 18, category: 'noble-gas', state: '기체',
        shells: [2, 8, 18, 8], valenceElectrons: 0,
        gridRow: 4, gridCol: 18,
        summary: '18족 비활성 기체. 고속 카메라 플래시 램프와 고효율 형광등 충전 기체로 쓰입니다.'
    },

    // 5주기
    {
        number: 37, symbol: 'Rb', nameKr: '루비듐', nameEn: 'Rubidium', weight: '85.468',
        period: 5, group: 1, category: 'alkali-metal', state: '고체',
        shells: [2, 8, 18, 8, 1], valenceElectrons: 1,
        gridRow: 5, gridCol: 1,
        summary: '물과 접촉하자마자 폭발적으로 반응하는 고반응성 알칼리 금속. 원자시계 정밀 기준에 쓰입니다.'
    },
    {
        number: 38, symbol: 'Sr', nameKr: '스트론튬', nameEn: 'Strontium', weight: '87.62',
        period: 5, group: 2, category: 'alkaline-earth', state: '고체',
        shells: [2, 8, 18, 8, 2], valenceElectrons: 2,
        gridRow: 5, gridCol: 2,
        summary: '불꽃 반응 시 눈부신 진홍색(빨간색)을 내어 불꽃놀이의 빨간 섬광에 필수적입니다.'
    },
    {
        number: 39, symbol: 'Y', nameKr: '이트륨', nameEn: 'Yttrium', weight: '88.906',
        period: 5, group: 3, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 9, 2], valenceElectrons: 2,
        gridRow: 5, gridCol: 3,
        summary: '고온 초전도체(YBCO)와 레이저(YAG 레이저), LED 형광체에 쓰이는 전이 금속입니다.'
    },
    {
        number: 40, symbol: 'Zr', nameKr: '지르코늄', nameEn: 'Zirconium', weight: '91.224',
        period: 5, group: 4, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 10, 2], valenceElectrons: 2,
        gridRow: 5, gridCol: 4,
        summary: '중성자를 잘 흡수하지 않아 원자력 발전소의 핵연료 피복관으로 활용되며 인조 다이아몬드(큐빅)로 유명합니다.'
    },
    {
        number: 41, symbol: 'Nb', nameKr: '나이오븀', nameEn: 'Niobium', weight: '92.906',
        period: 5, group: 5, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 12, 1], valenceElectrons: 1,
        gridRow: 5, gridCol: 5,
        summary: 'MRI(자기공명영상) 장치 등의 강력한 초전도 전자석 자석 코일 합금에 쓰입니다.'
    },
    {
        number: 42, symbol: 'Mo', nameKr: '몰리브데넘', nameEn: 'Molybdenum', weight: '95.95',
        period: 5, group: 6, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 13, 1], valenceElectrons: 1,
        gridRow: 5, gridCol: 6,
        summary: '녹는점이 2623℃로 매우 높아 고온 내열 합금 및 고성능 항공기 엔진 부품에 쓰입니다.'
    },
    {
        number: 43, symbol: 'Tc', nameKr: '테크네튬', nameEn: 'Technetium', weight: '[98]',
        period: 5, group: 7, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 13, 2], valenceElectrons: 2,
        gridRow: 5, gridCol: 7,
        summary: '인류가 최초로 인공 합성한 원소! 의료용 감마선 핵의학 영상 진단에 필수적으로 쓰입니다.'
    },
    {
        number: 44, symbol: 'Ru', nameKr: '루테늄', nameEn: 'Ruthenium', weight: '101.07',
        period: 5, group: 8, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 15, 1], valenceElectrons: 1,
        gridRow: 5, gridCol: 8,
        summary: '백금족 원소 중 하나로 하드디스크의 자기 기록 밀도를 비약적으로 높이는 데 기여했습니다.'
    },
    {
        number: 45, symbol: 'Rh', nameKr: '로듐', nameEn: 'Rhodium', weight: '102.91',
        period: 5, group: 9, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 16, 1], valenceElectrons: 1,
        gridRow: 5, gridCol: 9,
        summary: '금보다 훨씬 비싼 귀금속 중 하나. 자동차 배기가스 정화 촉매와 고급 보석 도금에 쓰입니다.'
    },
    {
        number: 46, symbol: 'Pd', nameKr: '팔라듐', nameEn: 'Palladium', weight: '106.42',
        period: 5, group: 10, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 18], valenceElectrons: 0,
        gridRow: 5, gridCol: 10,
        summary: '자신 부피의 900배에 달하는 수소 기체를 흡수할 수 있어 수소 저장 및 정제에 유망한 촉매입니다.'
    },
    {
        number: 47, symbol: 'Ag', nameKr: '은', nameEn: 'Silver', weight: '107.87',
        period: 5, group: 11, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 18, 1], valenceElectrons: 1,
        gridRow: 5, gridCol: 11,
        summary: '모든 금속 중 전기 전도도와 열전도도, 빛 반사율이 1위인 원소! 장신구뿐 아니라 태양광 패널에 쓰입니다.'
    },
    {
        number: 48, symbol: 'Cd', nameKr: '카드뮴', nameEn: 'Cadmium', weight: '112.41',
        period: 5, group: 12, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 18, 2], valenceElectrons: 2,
        gridRow: 5, gridCol: 12,
        summary: '유명한 공해병인 이타이이타이병의 원인 중금속. 니카드 충전지와 노란색 안료에 쓰였으나 환경 규제로 대체 중입니다.'
    },
    {
        number: 49, symbol: 'In', nameKr: '인듐', nameEn: 'Indium', weight: '114.82',
        period: 5, group: 13, category: 'post-transition', state: '고체',
        shells: [2, 8, 18, 18, 3], valenceElectrons: 3,
        gridRow: 5, gridCol: 13,
        summary: '스마트폰 화면 터치스크린과 디스플레이의 투명 전극(ITO)에 없어서는 안 될 핵심 원소입니다.'
    },
    {
        number: 50, symbol: 'Sn', nameKr: '주석', nameEn: 'Tin', weight: '118.71',
        period: 5, group: 14, category: 'post-transition', state: '고체',
        shells: [2, 8, 18, 18, 4], valenceElectrons: 4,
        gridRow: 5, gridCol: 14,
        summary: '인류 청동기 시대를 연 원소(구리+주석). 부식에 강해 통조림 안쪽 도금(양철) 및 전자 회로 땜납으로 쓰입니다.'
    },
    {
        number: 51, symbol: 'Sb', nameKr: '안티모니', nameEn: 'Antimony', weight: '121.76',
        period: 5, group: 15, category: 'metalloid', state: '고체',
        shells: [2, 8, 18, 18, 5], valenceElectrons: 5,
        gridRow: 5, gridCol: 15,
        summary: '난연제(불에 타지 않게 하는 첨가제)와 납축전지 극판 합금에 사용되는 준금속입니다.'
    },
    {
        number: 52, symbol: 'Te', nameKr: '텔루륨', nameEn: 'Tellurium', weight: '127.60',
        period: 5, group: 16, category: 'metalloid', state: '고체',
        shells: [2, 8, 18, 18, 6], valenceElectrons: 6,
        gridRow: 5, gridCol: 16,
        summary: '열전 소자(온도차로 전기를 생산하거나 전기로 냉각하는 소자)의 핵심 재료입니다.'
    },
    {
        number: 53, symbol: 'I', nameKr: '아이오딘', nameEn: 'Iodine', weight: '126.90',
        period: 5, group: 17, category: 'halogen', state: '고체',
        shells: [2, 8, 18, 18, 7], valenceElectrons: 7,
        gridRow: 5, gridCol: 17,
        summary: '보라색 증기로 승화하는 17족 할로젠 원소. 녹말과 만나 청남색을 띠며 갑상샘 호르몬의 필수 구성 요소입니다.'
    },
    {
        number: 54, symbol: 'Xe', nameKr: '제논', nameEn: 'Xenon', weight: '131.29',
        period: 5, group: 18, category: 'noble-gas', state: '기체',
        shells: [2, 8, 18, 18, 8], valenceElectrons: 0,
        gridRow: 5, gridCol: 18,
        summary: '18족 비활성 기체이지만 특수 조건에서 플루오린 등과 화합물을 만듭니다. 우주선 이온 엔진의 추진제로 쓰입니다.'
    },

    // 6주기
    {
        number: 55, symbol: 'Cs', nameKr: '세슘', nameEn: 'Caesium', weight: '132.91',
        period: 6, group: 1, category: 'alkali-metal', state: '고체',
        shells: [2, 8, 18, 18, 8, 1], valenceElectrons: 1,
        gridRow: 6, gridCol: 1,
        summary: '국제 표준 ‘1초’의 정의 기준이 되는 원소! 알칼리 금속 중 반응성이 극도로 격렬합니다.'
    },
    {
        number: 56, symbol: 'Ba', nameKr: '바륨', nameEn: 'Barium', weight: '137.33',
        period: 6, group: 2, category: 'alkaline-earth', state: '고체',
        shells: [2, 8, 18, 18, 8, 2], valenceElectrons: 2,
        gridRow: 6, gridCol: 2,
        summary: 'X선 조영제(바륨 삼킴 검사)와 불꽃놀이의 녹색 불꽃을 만드는 알칼리 토금속입니다.'
    },

    // 란타넘족 (원자번호 57~71, 별도 행 표시 row 9, col 4~18)
    {
        number: 57, symbol: 'La', nameKr: '란타넘', nameEn: 'Lanthanum', weight: '138.91',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 18, 9, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 4,
        summary: '란타넘족의 시작 원소. 광학 카메라 렌즈와 하이브리드 자동차 배터리 전극에 쓰입니다.'
    },
    {
        number: 58, symbol: 'Ce', nameKr: '세륨', nameEn: 'Cerium', weight: '140.12',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 19, 9, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 5,
        summary: '란타넘족 중 가장 흔한 희토류 원소. 반도체 웨이퍼 연마제(CMP 슬러리)로 필수적입니다.'
    },
    {
        number: 59, symbol: 'Pr', nameKr: '프라세오디뮴', nameEn: 'Praseodymium', weight: '140.91',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 21, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 6,
        summary: '노란색 형광체 및 초강력 네오디뮴 자석의 첨가 원소로 사용됩니다.'
    },
    {
        number: 60, symbol: 'Nd', nameKr: '네오디뮴', nameEn: 'Neodymium', weight: '144.24',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 22, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 7,
        summary: '현재 인류가 만든 가장 강력한 영구자석(네오디뮴 자석)의 핵심 원소! 전기차 모터와 풍력 발전에 필수적입니다.'
    },
    {
        number: 61, symbol: 'Pm', nameKr: '프로메튬', nameEn: 'Promethium', weight: '[145]',
        period: 6, group: 3, category: 'lanthanide', state: '인공 합성',
        shells: [2, 8, 18, 23, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 8,
        summary: '란타넘족 유일의 방사성 원소. 원자력 전지(우주 탐사선) 등에 소량 사용됩니다.'
    },
    {
        number: 62, symbol: 'Sm', nameKr: '사마륨', nameEn: 'Samarium', weight: '150.36',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 24, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 9,
        summary: '고온에서도 자기력을 잃지 않는 사마륨-코발트 자석과 항암 치료제에 사용됩니다.'
    },
    {
        number: 63, symbol: 'Eu', nameKr: '유로퓸', nameEn: 'Europium', weight: '151.96',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 25, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 10,
        summary: '브라운관 TV와 형광등, 유로화 지폐의 위조 방지 적색 형광체로 유명합니다.'
    },
    {
        number: 64, symbol: 'Gd', nameKr: '가돌리늄', nameEn: 'Gadolinium', weight: '157.25',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 25, 9, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 11,
        summary: '상자성을 띠어 병원 MRI 촬영 시 혈관을 또렷하게 해주는 조영제 성분입니다.'
    },
    {
        number: 65, symbol: 'Tb', nameKr: '터븀', nameEn: 'Terbium', weight: '158.93',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 27, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 12,
        summary: '초록색 형광체와 자기장에 반응해 모양이 변하는 자기변형 소자에 쓰입니다.'
    },
    {
        number: 66, symbol: 'Dy', nameKr: '디스프로슘', nameEn: 'Dysprosium', weight: '162.50',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 28, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 13,
        summary: '전기차 모터용 자석의 고온 내열성을 높여주는 핵심 전략 희토류입니다.'
    },
    {
        number: 67, symbol: 'Ho', nameKr: '홀뮴', nameEn: 'Holmium', weight: '164.93',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 29, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 14,
        summary: '자연계 물질 중 가장 큰 자기 모멘트를 지니며 외과 수술용 레이저에 쓰입니다.'
    },
    {
        number: 68, symbol: 'Er', nameKr: '어븀', nameEn: 'Erbium', weight: '167.26',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 30, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 15,
        summary: '해저 광섬유 케이블의 광증폭기(EDFA)에 첨가되어 대륙 간 인터넷 신호를 증폭합니다.'
    },
    {
        number: 69, symbol: 'Tm', nameKr: '툴륨', nameEn: 'Thulium', weight: '168.93',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 31, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 16,
        summary: '희토류 중 가장 희귀한 축에 들며 휴대용 X선 장치 등에 활용됩니다.'
    },
    {
        number: 70, symbol: 'Yb', nameKr: '이터븀', nameEn: 'Ytterbium', weight: '173.05',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 32, 8, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 17,
        summary: '초정밀 광격자 원자시계 및 고출력 광섬유 레이저에 응용됩니다.'
    },
    {
        number: 71, symbol: 'Lu', nameKr: '루테튬', nameEn: 'Lutetium', weight: '174.97',
        period: 6, group: 3, category: 'lanthanide', state: '고체',
        shells: [2, 8, 18, 32, 9, 2], valenceElectrons: 2,
        gridRow: 9, gridCol: 18,
        summary: '란타넘족의 마지막 원소로 암 진단용 양전자 단층촬영(PET) 검출기에 쓰입니다.'
    },

    // 6주기 전이금속 및 후반부 (원자번호 72~86)
    {
        number: 72, symbol: 'Hf', nameKr: '하프늄', nameEn: 'Hafnium', weight: '178.49',
        period: 6, group: 4, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 32, 10, 2], valenceElectrons: 2,
        gridRow: 6, gridCol: 4,
        summary: '원자력 잠수함의 제어봉과 최첨단 CPU 트랜지스터의 고유전율(High-k) 절연막에 쓰입니다.'
    },
    {
        number: 73, symbol: 'Ta', nameKr: '탄탈럼', nameEn: 'Tantalum', weight: '180.95',
        period: 6, group: 5, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 32, 11, 2], valenceElectrons: 2,
        gridRow: 6, gridCol: 5,
        summary: '스마트폰 내부의 초소형 탄탈럼 커패시터(축전기) 제작에 없어서는 안 되는 귀한 금속입니다.'
    },
    {
        number: 74, symbol: 'W', nameKr: '텅스텐', nameEn: 'Tungsten', weight: '183.84',
        period: 6, group: 6, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 32, 12, 2], valenceElectrons: 2,
        gridRow: 6, gridCol: 6,
        summary: '모든 금속 원소 중 녹는점이 1위(약 3422℃)! 고온 필라멘트와 초경합금 절삭 공구에 쓰입니다.'
    },
    {
        number: 75, symbol: 'Re', nameKr: '레늄', nameEn: 'Rhenium', weight: '186.21',
        period: 6, group: 7, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 32, 13, 2], valenceElectrons: 2,
        gridRow: 6, gridCol: 8,
        summary: '제트 엔진 터빈 블레이드의 초내열 합금에 사용되는 극희귀 금속입니다.'
    },
    {
        number: 76, symbol: 'Os', nameKr: '오스뮴', nameEn: 'Osmium', weight: '190.23',
        period: 6, group: 8, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 32, 14, 2], valenceElectrons: 2,
        gridRow: 6, gridCol: 8,
        summary: '모든 원소 중 밀도가 가장 높습니다(물의 약 22.6배!). 내마모성이 강해 만년필 펜촉에 쓰입니다.'
    },
    {
        number: 77, symbol: 'Ir', nameKr: '이리듐', nameEn: 'Iridium', weight: '192.22',
        period: 6, group: 9, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 32, 15, 2], valenceElectrons: 2,
        gridRow: 6, gridCol: 9,
        summary: '공룡 멸종 당시 운석 충돌 지층에서 고농도로 발견된 원소. 부식에 가장 강한 금속 중 하나입니다.'
    },
    {
        number: 78, symbol: 'Pt', nameKr: '백금', nameEn: 'Platinum', weight: '195.08',
        period: 6, group: 10, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 32, 17, 1], valenceElectrons: 1,
        gridRow: 6, gridCol: 10,
        summary: '반응성이 매우 낮아 변색되지 않는 귀금속이자 수소연료전지의 최고의 촉매입니다.'
    },
    {
        number: 79, symbol: 'Au', nameKr: '금', nameEn: 'Gold', weight: '196.97',
        period: 6, group: 11, category: 'transition-metal', state: '고체',
        shells: [2, 8, 18, 32, 18, 1], valenceElectrons: 1,
        gridRow: 6, gridCol: 11,
        summary: '인류 역사의 상징적 귀금속. 얇게 펴지는 전성이 최고이며 반도체 칩 와이어 본딩에 필수적입니다.'
    },
    {
        number: 80, symbol: 'Hg', nameKr: '수은', nameEn: 'Mercury', weight: '200.59',
        period: 6, group: 12, category: 'transition-metal', state: '액체',
        shells: [2, 8, 18, 32, 18, 2], valenceElectrons: 2,
        gridRow: 6, gridCol: 12,
        summary: '상온에서 액체 상태로 존재하는 유일한 금속 원소! 밀도가 높아 쇠구슬도 수은 위에 뜹니다.'
    },
    {
        number: 81, symbol: 'Tl', nameKr: '탈륨', nameEn: 'Thallium', weight: '204.38',
        period: 6, group: 13, category: 'post-transition', state: '고체',
        shells: [2, 8, 18, 32, 18, 3], valenceElectrons: 3,
        gridRow: 6, gridCol: 13,
        summary: '무미무취의 맹독성 금속으로 추리소설의 독약 소재로 자주 등장했습니다.'
    },
    {
        number: 82, symbol: 'Pb', nameKr: '납', nameEn: 'Lead', weight: '207.2',
        period: 6, group: 14, category: 'post-transition', state: '고체',
        shells: [2, 8, 18, 32, 18, 4], valenceElectrons: 4,
        gridRow: 6, gridCol: 14,
        summary: '무겁고 방사선 차폐력이 뛰어나 X선 검사실 방어벽 및 자동차 납축전지에 쓰입니다.'
    },
    {
        number: 83, symbol: 'Bi', nameKr: '비스무트', nameEn: 'Bismuth', weight: '208.98',
        period: 6, group: 15, category: 'post-transition', state: '고체',
        shells: [2, 8, 18, 32, 18, 5], valenceElectrons: 5,
        gridRow: 6, gridCol: 15,
        summary: '중금속 중 독성이 거의 없어 위장약 성분 및 저융점 퓨즈 합금에 쓰입니다.'
    },
    {
        number: 84, symbol: 'Po', nameKr: '폴로늄', nameEn: 'Polonium', weight: '[209]',
        period: 6, group: 16, category: 'post-transition', state: '고체',
        shells: [2, 8, 18, 32, 18, 6], valenceElectrons: 6,
        gridRow: 6, gridCol: 16,
        summary: '마리 퀴리가 조국 폴란드의 이름을 따서 명명한 강력한 알파선 방출 방사성 원소입니다.'
    },
    {
        number: 85, symbol: 'At', nameKr: '아스타틴', nameEn: 'Astatine', weight: '[210]',
        period: 6, group: 17, category: 'halogen', state: '고체',
        shells: [2, 8, 18, 32, 18, 7], valenceElectrons: 7,
        gridRow: 6, gridCol: 17,
        summary: '지구 지각 전체에 30g도 안 될 정도로 극히 희귀한 방사성 할로젠 원소입니다.'
    },
    {
        number: 86, symbol: 'Rn', nameKr: '라돈', nameEn: 'Radon', weight: '[222]',
        period: 6, group: 18, category: 'noble-gas', state: '기체',
        shells: [2, 8, 18, 32, 18, 8], valenceElectrons: 0,
        gridRow: 6, gridCol: 18,
        summary: '자연 방사성 붕괴로 암석이나 토양에서 방출되는 무색무취의 기체. 실내 환기가 중요한 이유입니다.'
    },

    // 7주기
    {
        number: 87, symbol: 'Fr', nameKr: '프랑슘', nameEn: 'Francium', weight: '[223]',
        period: 7, group: 1, category: 'alkali-metal', state: '고체',
        shells: [2, 8, 18, 32, 18, 8, 1], valenceElectrons: 1,
        gridRow: 7, gridCol: 1,
        summary: '극도로 불안정하고 방사능이 강한 알칼리 금속으로 지각에 극미량만 존재합니다.'
    },
    {
        number: 88, symbol: 'Ra', nameKr: '라듐', nameEn: 'Radium', weight: '[226]',
        period: 7, group: 2, category: 'alkaline-earth', state: '고체',
        shells: [2, 8, 18, 32, 18, 8, 2], valenceElectrons: 2,
        gridRow: 7, gridCol: 2,
        summary: '퀴리 부부가 발견한 대표적인 방사성 원소로 과거 야광 시계 도료에 쓰였습니다.'
    },

    // 악티늄족 (원자번호 89~103, row 10, col 4~18)
    {
        number: 89, symbol: 'Ac', nameKr: '악티늄', nameEn: 'Actinium', weight: '[227]',
        period: 7, group: 3, category: 'actinide', state: '고체',
        shells: [2, 8, 18, 32, 18, 9, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 4,
        summary: '어둠 속에서 푸른빛을 내는 강력한 방사성 악티늄족 시작 원소입니다.'
    },
    {
        number: 90, symbol: 'Th', nameKr: '토륨', nameEn: 'Thorium', weight: '232.04',
        period: 7, group: 3, category: 'actinide', state: '고체',
        shells: [2, 8, 18, 32, 18, 10, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 5,
        summary: '우라늄보다 매장량이 풍부하여 차세대 원자력(토륨 원자로) 연료로 주목받습니다.'
    },
    {
        number: 91, symbol: 'Pa', nameKr: '프로트악티늄', nameEn: 'Protactinium', weight: '231.04',
        period: 7, group: 3, category: 'actinide', state: '고체',
        shells: [2, 8, 18, 32, 20, 9, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 6,
        summary: '우라늄 붕괴 사슬에서 생성되는 희귀한 방사성 원소입니다.'
    },
    {
        number: 92, symbol: 'U', nameKr: '우라늄', nameEn: 'Uranium', weight: '238.03',
        period: 7, group: 3, category: 'actinide', state: '고체',
        shells: [2, 8, 18, 32, 21, 9, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 7,
        summary: '자연계에 존재하는 가장 무거운 원소. 우라늄-235는 원자력 발전의 핵심 핵연료입니다.'
    },
    {
        number: 93, symbol: 'Np', nameKr: '넵투늄', nameEn: 'Neptunium', weight: '[237]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 22, 9, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 8,
        summary: '우라늄 이후의 초우라늄 원소 중 최초로 인공 합성된 원소입니다.'
    },
    {
        number: 94, symbol: 'Pu', nameKr: '플루토늄', nameEn: 'Plutonium', weight: '[244]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 24, 8, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 9,
        summary: '원자로에서 우라늄이 중성자를 흡수해 생성되며 원자력 전지(우주선 탐사용)에 쓰입니다.'
    },
    {
        number: 95, symbol: 'Am', nameKr: '아메리슘', nameEn: 'Americium', weight: '[243]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 25, 8, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 10,
        summary: '가정용 화재 연기 감지기에 소량 들어 있는 유용한 방사성 원소입니다.'
    },
    {
        number: 96, symbol: 'Cm', nameKr: '퀴륨', nameEn: 'Curium', weight: '[247]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 25, 9, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 11,
        summary: '퀴리 부부의 업적을 기리기 위해 명명된 알파선 방출 초우라늄 원소입니다.'
    },
    {
        number: 97, symbol: 'Bk', nameKr: '버클륨', nameEn: 'Berkelium', weight: '[247]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 27, 8, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 12,
        summary: '발견된 장소인 미국 UC 버클리 대학의 이름을 딴 원소입니다.'
    },
    {
        number: 98, symbol: 'Cf', nameKr: '캘리포늄', nameEn: 'Californium', weight: '[251]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 28, 8, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 13,
        summary: '강력한 중성자 방출원으로 유전 탐사, 지뢰 탐지, 암 치료에 쓰입니다.'
    },
    {
        number: 99, symbol: 'Es', nameKr: '아인슈타이늄', nameEn: 'Einsteinium', weight: '[252]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 29, 8, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 14,
        summary: '알베르트 아인슈타인을 기려 수소폭탄 실험 잔해에서 발견된 원소입니다.'
    },
    {
        number: 100, symbol: 'Fm', nameKr: '페르뮴', nameEn: 'Fermium', weight: '[257]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 30, 8, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 15,
        summary: '핵물리학의 거장 엔리코 페르미를 기리기 위해 이름 붙여진 원소입니다.'
    },
    {
        number: 101, symbol: 'Md', nameKr: '멘델레븀', nameEn: 'Mendelevium', weight: '[258]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 31, 8, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 16,
        summary: '주기율표를 처음 고안한 드미트리 멘델레예프를 기려 명명되었습니다.'
    },
    {
        number: 102, symbol: 'No', nameKr: '노벨륨', nameEn: 'Nobelium', weight: '[259]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 8, 2], valenceElectrons: 2,
        gridRow: 10, gridCol: 17,
        summary: '노벨상을 제정한 알프레드 노벨을 기려 이름 지어진 인공 원소입니다.'
    },
    {
        number: 103, symbol: 'Lr', nameKr: '로렌슘', nameEn: 'Lawrencium', weight: '[266]',
        period: 7, group: 3, category: 'actinide', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 8, 3], valenceElectrons: 3,
        gridRow: 10, gridCol: 18,
        summary: '사이클로트론 입자가속기를 발명한 어니스트 로렌스를 기려 악티늄족의 마지막을 장식합니다.'
    },

    // 7주기 초중원소 (104~118)
    {
        number: 104, symbol: 'Rf', nameKr: '러더포듐', nameEn: 'Rutherfordium', weight: '[267]',
        period: 7, group: 4, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 10, 2], valenceElectrons: 2,
        gridRow: 7, gridCol: 4,
        summary: '원자핵을 발견한 어니스트 러더퍼드를 기려 명명된 초중원소입니다.'
    },
    {
        number: 105, symbol: 'Db', nameKr: '더브늄', nameEn: 'Dubnium', weight: '[268]',
        period: 7, group: 5, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 11, 2], valenceElectrons: 2,
        gridRow: 7, gridCol: 5,
        summary: '러시아의 핵물리 연구소 도시 두브나(Dubna)의 지명에서 유래했습니다.'
    },
    {
        number: 106, symbol: 'Sg', nameKr: '시보귬', nameEn: 'Seaborgium', weight: '[269]',
        period: 7, group: 6, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 12, 2], valenceElectrons: 2,
        gridRow: 7, gridCol: 6,
        summary: '초우라늄 원소 탐구의 개척자 글렌 시보그가 살아있을 때 이름 붙여진 최초의 원소입니다.'
    },
    {
        number: 107, symbol: 'Bh', nameKr: '보륨', nameEn: 'Bohrium', weight: '[270]',
        period: 7, group: 7, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 13, 2], valenceElectrons: 2,
        gridRow: 7, gridCol: 7,
        summary: '양자역학의 아버지 닐스 보어를 기리기 위해 명명되었습니다.'
    },
    {
        number: 108, symbol: 'Hs', nameKr: '하슘', nameEn: 'Hassium', weight: '[270]',
        period: 7, group: 8, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 14, 2], valenceElectrons: 2,
        gridRow: 7, gridCol: 8,
        summary: '독일 헤센(Hesse) 주의 라틴어 지명에서 유래한 인공 초중원소입니다.'
    },
    {
        number: 109, symbol: 'Mt', nameKr: '마이트너륨', nameEn: 'Meitnerium', weight: '[278]',
        period: 7, group: 9, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 15, 2], valenceElectrons: 2,
        gridRow: 7, gridCol: 9,
        summary: '핵분열을 규명한 물리학자 리제 마이트너를 기려 명명되었습니다.'
    },
    {
        number: 110, symbol: 'Ds', nameKr: '다름슈타튬', nameEn: 'Darmstadtium', weight: '[281]',
        period: 7, group: 10, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 17, 1], valenceElectrons: 1,
        gridRow: 7, gridCol: 10,
        summary: '독일 중이온연구소(GSI)가 위치한 다름슈타트 도시의 이름에서 유래했습니다.'
    },
    {
        number: 111, symbol: 'Rg', nameKr: '뢴트게늄', nameEn: 'Roentgenium', weight: '[282]',
        period: 7, group: 11, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 18, 1], valenceElectrons: 1,
        gridRow: 7, gridCol: 11,
        summary: 'X선을 최초로 발견한 빌헬름 뢴트겐을 기리기 위해 명명되었습니다.'
    },
    {
        number: 112, symbol: 'Cn', nameKr: '코페르니슘', nameEn: 'Copernicus', weight: '[285]',
        period: 7, group: 12, category: 'transition-metal', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 18, 2], valenceElectrons: 2,
        gridRow: 7, gridCol: 12,
        summary: '지동설을 주장한 천문학자 니콜라우스 코페르니쿠스를 기리기 위해 이름 붙였습니다.'
    },
    {
        number: 113, symbol: 'Nh', nameKr: '니호늄', nameEn: 'Nihonium', weight: '[286]',
        period: 7, group: 13, category: 'post-transition', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 18, 3], valenceElectrons: 3,
        gridRow: 7, gridCol: 13,
        summary: '아시아 최초로 일본 이화학연구소(RIKEN)에서 합성되어 명명된 원소입니다.'
    },
    {
        number: 114, symbol: 'Fl', nameKr: '플레로븀', nameEn: 'Flerovium', weight: '[289]',
        period: 7, group: 14, category: 'post-transition', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 18, 4], valenceElectrons: 4,
        gridRow: 7, gridCol: 14,
        summary: '러시아의 플레로프 핵반응연구소 설립자를 기리기 위해 이름 붙였습니다.'
    },
    {
        number: 115, symbol: 'Mc', nameKr: '모스코븀', nameEn: 'Moscovium', weight: '[290]',
        period: 7, group: 15, category: 'post-transition', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 18, 5], valenceElectrons: 5,
        gridRow: 7, gridCol: 15,
        summary: '러시아 모스크바 지역의 이름을 따서 명명된 초중원소입니다.'
    },
    {
        number: 116, symbol: 'Lv', nameKr: '리버모륨', nameEn: 'Livermorium', weight: '[293]',
        period: 7, group: 16, category: 'post-transition', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 18, 6], valenceElectrons: 6,
        gridRow: 7, gridCol: 16,
        summary: '미국 로렌스 리버모어 국립연구소의 이름을 기려 명명되었습니다.'
    },
    {
        number: 117, symbol: 'Ts', nameKr: '테네신', nameEn: 'Tennessine', weight: '[294]',
        period: 7, group: 17, category: 'halogen', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 18, 7], valenceElectrons: 7,
        gridRow: 7, gridCol: 17,
        summary: '오크리지 국립연구소가 위치한 미국 테네시주의 이름을 딴 17족 할로젠 족 원소입니다.'
    },
    {
        number: 118, symbol: 'Og', nameKr: '오가네손', nameEn: 'Oganesson', weight: '[294]',
        period: 7, group: 18, category: 'noble-gas', state: '인공 합성',
        shells: [2, 8, 18, 32, 32, 18, 8], valenceElectrons: 0,
        gridRow: 7, gridCol: 18,
        summary: '주기율표의 마지막 118번 원소! 러시아 핵물리학자 유리 오가네시안 교수를 기려 명명된 비활성 기체 족 원소입니다.'
    }
];
