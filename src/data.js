export const snapshot = {
  platform: "Camunda",
  title: "Camunda Process ROI Brief",
  domain: "Workflow automation ROI",
  boardQuestion: "Which Camunda workflows have enough exception reduction proof to defend automation investment?",
  liveSurface: "https://camunda.kineticgain.com/",
  signals: [
  {
    "Confidence": 86,
    "Owner": "Process excellence",
    "Recoverable": 24000,
    "Severity": 69,
    "Action": "Compare post-automation exception volume to baseline",
    "Name": "Manual exception lane after automation",
    "Area": "roi"
  },
  {
    "Confidence": 81,
    "Owner": "Workflow owners",
    "Recoverable": 11000,
    "Severity": 64,
    "Action": "Tune timers and escalation boundaries",
    "Name": "Timer drift in approval flow",
    "Area": "latency"
  },
  {
    "Confidence": 77,
    "Owner": "Automation CoE",
    "Recoverable": 0,
    "Severity": 58,
    "Action": "Attach model version and release evidence to board packet",
    "Name": "BPMN version evidence gap",
    "Area": "governance"
  }
]
};
