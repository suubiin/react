// --------------------------------------------------------------------------
// New Operators (nullish, optional chaining)
// - null, undefined 처리 조건 연산자 활용
// - 선택적 연결 구문 활용
// --------------------------------------------------------------------------

function nullish() {
  let value = 0; // 개발자의 의도!!!!

  let result = value || 100;
  console.log({ '||': result });

  // nullish: Web Native
  function isNullOrUndefined(value) {
    return value === null || value === undefined ? true : false;
  }

  function isNotNullOrUndefined(value) {
    return !isNullOrUndefined(value);
  }

  result = isNotNullOrUndefined(value) ? value : 100;
  console.log({ isNullOrUndefined: result });

  // 🔶 null 병합 연산자 코드를 작성합니다.
  // 참고: https://mzl.la/3vQUYin | https://mzl.la/3PXiOQ9
  result = value ?? 100;
  console.log({ '??': result });
}

function optionalChaining() {
  const topic = {
    _title: '매년 업데이트 되는 ECMAScript',
    // GETTER
    getTitle() {
      return this._title;
    },
    // SETTER
    setTitle(value) {
      this._title = value;
    },
  };

  if (topic && typeof topic === 'object' && !Array.isArray(topic)) {
    let title = undefined, name = undefined;

    if (typeof topic.getTitle === 'function') {
      title = topic.getTitle();
    }

    if (typeof topic.getName === 'function') {
      name = topic.getName();
    }

    console.log({ titleValue: title });
    console.log({ nameValue: name });
  }

  // 🔶 optional chaining 코드를 사용해 조건 처리하세요.
  // 참고: https://mzl.la/3xx6Arc

  console.log(topic?.getTitle?.());
  console.log(topic?.getName?.());
}

function run() {a
  nullish();
  optionalChaining();
}

run();
