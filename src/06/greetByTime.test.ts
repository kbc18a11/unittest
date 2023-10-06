import { greetByTime } from "./greetByTime";

describe("greetByTime(", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  // (1) 「おはよう」を返す関数
  test("朝は「おはよう」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 11, 0, 0));
    expect(greetByTime()).toBe("おはよう");
  });
  // (2) 「こんにちは」を返す関数
  xtest("昼は「こんにちは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 17, 0, 0));
    expect(greetByTime()).toBe("こんにちは");
  });
  // (3) 「こんばんは」を返す関数
  xtest("夜は「こんばんは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 18, 0, 0));
    expect(greetByTime()).toBe("こんばんは");
  });
});
