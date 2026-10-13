// Vercel 서버리스 함수: 응원 문장 하나를 골라 이름과 함께 돌려준다.
const MESSAGES = [
  "오늘도 여기까지 온 것만으로 충분히 잘하고 있어요.",
  "작은 한 걸음이 모여 큰 길이 됩니다.",
  "천천히 가도 괜찮아요. 멈추지만 않으면 돼요.",
  "당신의 노력은 분명히 누군가에게 힘이 되고 있어요.",
  "오늘 하루, 스스로에게 칭찬 한마디 해 주세요.",
  "실수해도 괜찮아요. 그만큼 배우고 있다는 뜻이니까요.",
  "지금의 고민도 언젠가 든든한 경험이 될 거예요.",
  "당신은 생각보다 훨씬 강한 사람이에요.",
  "잠깐 쉬어 가도 괜찮아요. 쉬는 것도 실력이에요.",
  "오늘의 당신을 응원하는 사람이 여기 있어요.",
  "어제보다 조금 나아졌다면 그걸로 충분해요.",
  "좋은 일이 곧 찾아올 거예요. 기대해도 좋아요.",
  "당신의 웃음은 주변을 밝게 만들어요.",
  "포기하지 않는 마음이 가장 멋진 재능이에요.",
  "오늘도 당신답게, 당신의 속도로 가면 돼요.",
];

module.exports = (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "GET 요청만 받아요." });
  }

  const raw = typeof req.query.name === "string" ? req.query.name.trim() : "";
  const name = raw ? raw.slice(0, 20) : "여러분";
  const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ name, message });
};
