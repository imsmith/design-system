/* data.js — synthetic telemetry for the Operations Console UI kit. Not real:
 * a fixed, deterministic snapshot so the kit reads like a live grid console.
 * Exposed as window.OPS_DATA.
 */
(function () {
  const SECTORS = ["01", "04", "07", "12"];
  const rand = (seed) => {
    // deterministic pseudo-random from a seed
    let x = Math.sin(seed * 99.13) * 10000;
    return x - Math.floor(x);
  };
  const series = (seed, n, base, amp) =>
    Array.from({ length: n }, (_, i) =>
      Math.round(base + Math.sin(i * 0.6 + seed) * amp + (rand(seed + i) - 0.5) * amp)
    );

  const nodes = Array.from({ length: 48 }, (_, i) => {
    const sector = SECTORS[i % SECTORS.length];
    const r = rand(i + 1);
    // a few hot nodes
    let dev, step, cpu, mem, disk, p99, uplink;
    if (i === 13) { dev = 5; step = "critical"; cpu = 97; mem = 94; disk = 88; p99 = 312; uplink = "down"; }
    else if (i === 4 || i === 27) { dev = 4; step = "high"; cpu = 88; mem = 81; disk = 72; p99 = 154; uplink = "degraded"; }
    else if (r > 0.82) { dev = 2; step = "medium"; cpu = 74; mem = 69; disk = 63; p99 = 61; uplink = "up"; }
    else if (r < 0.12) { dev = -3; step = "unknown"; cpu = 0; mem = 0; disk = 0; p99 = 0; uplink = "unknown"; }
    else { dev = Math.round((r - 0.5) * 4); step = "low"; cpu = 30 + Math.round(r * 30); mem = 28 + Math.round(r * 34); disk = 40 + Math.round(r * 25); p99 = 18 + Math.round(r * 18); uplink = "up"; }
    return {
      id: "node-" + String(i).padStart(2, "0"),
      sector,
      region: i % 2 ? "us-east" : "eu-west",
      step,
      dev,
      cpu,
      mem,
      disk,
      p99,
      uplink,
      reqs: step === "unknown" ? 0 : 200 + Math.round(r * 1400),
      p99series: series(i, 16, p99 * 0.7, Math.max(4, p99 * 0.25)),
      cpuseries: series(i + 5, 16, cpu, 8),
      tlp: i === 13 ? "tlp:red" : i === 4 ? "tlp:amber" : "tlp:green",
      uptime: step === "unknown" ? "—" : (90 + Math.round(r * 600)) + "h",
    };
  });

  const byStep = (s) => nodes.filter((n) => n.step === s).length;

  const alerts = [
    {
      id: "A-1042", severity: "critical", node: "node-13", sector: "12",
      title: "Uplink down — sector 12.",
      body: "4 nodes unreachable for 4m. Reroute traffic or restore the uplink.",
      ts: "02:14:08Z", age: "4m",
    },
    {
      id: "A-1041", severity: "high", node: "node-04", sector: "01",
      title: "p99 154ms on node-04, above 120ms threshold.",
      body: "Sustained for 9m. Shed load or raise the threshold.",
      ts: "02:09:51Z", age: "9m",
    },
    {
      id: "A-1039", severity: "high", node: "node-27", sector: "07",
      title: "Uplink degraded on node-27.",
      body: "Packet loss 3.2%. Failover armed; no action yet.",
      ts: "02:08:22Z", age: "11m",
    },
    {
      id: "A-1037", severity: "medium", node: "node-19", sector: "04",
      title: "Memory 69% on node-19, above 65% threshold.",
      body: "Trending up 2%/h. Watch or scale.",
      ts: "01:58:40Z", age: "20m",
    },
    {
      id: "A-1033", severity: "low", node: "node-12", sector: "12",
      title: "Rebooted node-12. Telemetry nominal.",
      body: "Recovered after 38s. No further action.",
      ts: "01:41:12Z", age: "38m",
    },
  ];

  window.OPS_DATA = {
    nodes,
    alerts,
    summary: {
      total: nodes.length,
      down: byStep("critical"),
      alert: byStep("high"),
      warn: byStep("medium"),
      ok: byStep("low"),
      unk: byStep("unknown"),
    },
  };
})();
