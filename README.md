# Camunda Process ROI Brief

Camunda Process ROI Brief is a Kinetic Gain platform-signal repo for **Camunda**. It turns synthetic workflow automation roi signals into a board-ready view of exposure, savings, investment priority, and the story leaders can tell.

## Board question

> Which Camunda workflows have enough exception reduction proof to defend automation investment?

## What it scores

- **Manual exception lane after automation** — roi; owner: Process excellence; next action: Compare post-automation exception volume to baseline
- **Timer drift in approval flow** — latency; owner: Workflow owners; next action: Tune timers and escalation boundaries
- **BPMN version evidence gap** — governance; owner: Automation CoE; next action: Attach model version and release evidence to board packet

## Run locally

`ash
npm test
npm start
npm start -- --json
`

## Example output

`	ext
# Camunda Process ROI Brief
Camunda: watch posture, risk score from synthetic signals, recoverable or protected value surfaced for executive review.
`

## Data posture

This repo uses synthetic demonstration data only. It does not connect to live Camunda tenants, export customer records, or store credentials.

## Portfolio connection

- Platform signal: $(System.Collections.Hashtable.Platform)
- Domain: $(System.Collections.Hashtable.Domain)
- Live surface family: [https://camunda.kineticgain.com/](https://camunda.kineticgain.com/)
- Apex: [https://kineticgain.com/](https://kineticgain.com/)
- Portfolio: [https://portfolio.kineticgain.com/](https://portfolio.kineticgain.com/)
