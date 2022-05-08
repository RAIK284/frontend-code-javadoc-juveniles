import {
  Underline,
  Underline_0001,
  AllTimeCoinsEarned,
  AllTimeXpUsed,
  SendMessageButton,
} from "../PageElements";
import {
  getCoinButton,
  getXpButton,
  getReceivedButton,
  getSentButton,
  parseMessageForEmojis,
  showCorrectButton,
  loadButton,
} from "../Logic";
import React from "react";

test("getCoinButton should return blue button when true", () => {
  const expected = (
    <>
      <Underline />
      <AllTimeCoinsEarned>ALL-TIME COINS EARNED</AllTimeCoinsEarned>
    </>
  );

  expect(getCoinButton(true)).toStrictEqual(expected);
});

test("getCoinButton should return grey button when false", () => {
  const expected = (
    <>
      <Underline style={{ backgroundColor: "rgb(128, 128, 128)" }} />
      <AllTimeXpUsed>ALL-TIME COINS EARNED</AllTimeXpUsed>
    </>
  );

  expect(getCoinButton(false)).toStrictEqual(expected);
});

test("getXpButton should return blue button when true", () => {
  const expected = (
    <>
      <Underline_0001 />
      <AllTimeXpUsed>ALL-TIME XP USED</AllTimeXpUsed>
    </>
  );

  expect(getXpButton(true)).toStrictEqual(expected);
});

test("getXpButton should return grey button when false", () => {
  const expected = (
    <>
      <Underline_0001 style={{ backgroundColor: "rgb(24, 120, 208)" }} />
      <AllTimeCoinsEarned>ALL-TIME XP USED</AllTimeCoinsEarned>
    </>
  );

  expect(getXpButton(false)).toStrictEqual(expected);
});

test("getReceivedButton should return blue button when true", () => {
  const expected = (
    <>
      <Underline />
      <AllTimeCoinsEarned>RECEIVED MESSAGES</AllTimeCoinsEarned>
    </>
  );

  expect(getReceivedButton(true)).toStrictEqual(expected);
});

test("getReceivedButton should return grey button when false", () => {
  const expected = (
    <>
      <Underline style={{ backgroundColor: "rgb(128, 128, 128)" }} />
      <AllTimeXpUsed>RECEIVED MESSAGES</AllTimeXpUsed>
    </>
  );

  expect(getReceivedButton(false)).toStrictEqual(expected);
});

test("getSentButton should return blue button when true", () => {
  const expected = (
    <>
      <Underline_0001 />
      <AllTimeXpUsed>SENT MESSAGES</AllTimeXpUsed>
    </>
  );

  expect(getSentButton(true)).toStrictEqual(expected);
});

test("getSentButton should return grey button when false", () => {
  const expected = (
    <>
      <Underline_0001 style={{ backgroundColor: "rgb(24, 120, 208)" }} />
      <AllTimeCoinsEarned>SENT MESSAGES</AllTimeCoinsEarned>
    </>
  );

  expect(getSentButton(false)).toStrictEqual(expected);
});

test("parseMessageForEmojis empty string", () => {
  const expected = 0;

  expect(parseMessageForEmojis("")).toBe(expected);
});

test("parseMessageForEmojis no emojis", () => {
  const expected = 0;

  expect(parseMessageForEmojis("Hi, no emojis here!")).toBe(expected);
});

test("parseMessageForEmojis emoji not in list", () => {
  const expected = 0;

  expect(parseMessageForEmojis("This emoji is not in the list 🥺")).toBe(
    expected
  );
});

test("parseMessageForEmojis one emoji", () => {
  const expected = 20;

  expect(parseMessageForEmojis("🍪")).toBe(expected);
});

test("parseMessageForEmojis duplicate emojis", () => {
  const expected = 60;

  expect(parseMessageForEmojis("🍪🍪🍪")).toBe(expected);
});

test("parseMessageForEmojis all emojis", () => {
  const expected = 3 + 5 + 10 + 20 + 100;

  expect(parseMessageForEmojis("😊🎁😎🍪💯")).toBe(expected);
});

test("showCorrectButton 0 cost", () => {
  const expected = (
    <div className="ownedButton">
      <div className="ownbuttonwords">{0} coins</div>
    </div>
  );

  expect(showCorrectButton(0, "Test", -1, () => {})).toStrictEqual(expected);
});

test("showCorrectButton 0 cost with enough coins", () => {
  const onClick = () => {
    return "Testing";
  };
  const expected = (
    <div className="blueBuyButton" onClick={onClick}>
      <div className="buybuttonwords">{0} coins</div>
    </div>
  );

  expect(
    JSON.stringify(showCorrectButton(0, "Test", 1, onClick))
  ).toStrictEqual(JSON.stringify(expected));
});

test("showCorrectButton large cost with enough coins", () => {
  const onClick = () => {
    return "Testing";
  };
  const expected = (
    <div className="blueBuyButton" onClick={onClick}>
      <div className="buybuttonwords">{30} coins</div>
    </div>
  );

  expect(
    JSON.stringify(showCorrectButton(30, "Test", 130, onClick))
  ).toStrictEqual(JSON.stringify(expected));
});

test("showCorrectButton same amount of coins as cost", () => {
  const onClick = () => {
    return "Testing";
  };
  const expected = (
    <div className="blueBuyButton" onClick={onClick}>
      <div className="buybuttonwords">{30} coins</div>
    </div>
  );

  expect(
    JSON.stringify(showCorrectButton(30, "Test", 30, onClick))
  ).toStrictEqual(JSON.stringify(expected));
});

test("showCorrectButton not enough coins", () => {
  const expected = (
    <div className="ownedButton">
      <div className="ownbuttonwords">{30} coins</div>
    </div>
  );

  expect(showCorrectButton(30, "Test", 29, () => {})).toStrictEqual(expected);
});

test("loadButton empty text and user", () => {
  const expected = (
    <SendMessageButton onClick={() => handleSubmit(xpInMessage)}>
      Send Message
    </SendMessageButton>
  );

  expect(
    JSON.stringify(
      loadButton(
        "",
        true,
        () => {},
        "test",
        () => {},
        () => {},
        0
      )
    )
  ).toStrictEqual(JSON.stringify(expected));
});

test("loadButton text with enough XP", () => {
  const expected = (
    <SendMessageButton onClick={() => handleSubmit(xpInMessage)}>
      Send Message
    </SendMessageButton>
  );

  expect(
    JSON.stringify(
      loadButton(
        "😊", // Cost 3 XP
        true,
        () => {},
        "test",
        () => {},
        () => {},
        10
      )
    )
  ).toStrictEqual(JSON.stringify(expected));
});

test("loadButton text with not enough XP", () => {
  const expected = (
    <SendMessageButton
      style={{
        backgroundColor: "#555555",
        border: "2px solid rgba(200, 200, 200, 0.5)",
        cursor: "default",
      }}
    >
      Send Message
    </SendMessageButton>
  );

  expect(
    JSON.stringify(
      loadButton(
        "😊", // Cost 3 XP
        false,
        () => {},
        "test",
        () => {},
        () => {},
        2
      )
    )
  ).toStrictEqual(JSON.stringify(expected));
});

test("loadButton text with just enough XP", () => {
    const expected = (
        <SendMessageButton onClick={() => handleSubmit(xpInMessage)}>
          Send Message
        </SendMessageButton>
      );
    
      expect(
        JSON.stringify(
          loadButton(
            "😊", // Cost 3 XP
            true,
            () => {},
            "test",
            () => {},
            () => {},
            3
          )
        )
      ).toStrictEqual(JSON.stringify(expected));
});
