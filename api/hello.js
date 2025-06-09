const carMaintenanceTips = {
  "engine noise": {
    tip: "Check engine oil level and quality. If low or dirty, change it.",
    consultMechanic: true,
  },
  "flat tire": {
    tip: "Replace the flat tire with the spare or repair it at home if you have the tools.",
    consultMechanic: false,
  },
  "brake squeaking": {
    tip: "Inspect brake pads for wear and clean brake components.",
    consultMechanic: true,
  },
  "battery problem": {
    tip: "Check battery terminals for corrosion and clean them.",
    consultMechanic: true,
  },
  "overheating": {
    tip: "Check coolant level and radiator for leaks.",
    consultMechanic: true,
  },
  "headlight not working": {
    tip: "Check the bulb and fuse. Replace if necessary.",
    consultMechanic: false,
  },
  "air conditioner not cooling": {
    tip: "Check refrigerant levels and clean AC filters.",
    consultMechanic: true,
  },
  "check engine light": {
    tip: "Use an OBD-II scanner to read error codes.",
    consultMechanic: true,
  },
  "oil leak": {
    tip: "Locate leak source and check oil gasket and seals.",
    consultMechanic: true,
  },
  "steering vibration": {
    tip: "Check wheel alignment and tire balance.",
    consultMechanic: true,
  },
  "transmission slipping": {
    tip: "Check transmission fluid level and condition.",
    consultMechanic: true,
  },
  "strange smell": {
    tip: "Inspect for fluid leaks or burnt components.",
    consultMechanic: true,
  },
  "excessive smoke from exhaust": {
    tip: "Check engine tuning and oil level.",
    consultMechanic: true,
  },
  "car pulling to one side": {
    tip: "Check tire pressure and alignment.",
    consultMechanic: true,
  },
  "fuel smell": {
    tip: "Inspect fuel lines and tank for leaks.",
    consultMechanic: true,
  },
  "windshield wipers not working": {
    tip: "Check fuse and wiper motor.",
    consultMechanic: false,
  },
  "car won't start": {
    tip: "Check battery charge and starter motor.",
    consultMechanic: true,
  },
  "engine stalling": {
    tip: "Inspect fuel filter and air intake.",
    consultMechanic: true,
  },
  "excessive vibration": {
    tip: "Check engine mounts and tires.",
    consultMechanic: true,
  },
  "warning lights flashing": {
    tip: "Immediately stop and have your car checked.",
    consultMechanic: true,
  },
};

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(carMaintenanceTips);
  }

  if (req.method === "POST") {
    const { issue } = req.body;
    if (!issue) {
      return res.status(400).json({ error: "Please provide 'issue' in request body." });
    }

    const key = issue.toLowerCase();

    if (carMaintenanceTips[key]) {
      return res.status(200).json({
        issue: key,
        tip: carMaintenanceTips[key].tip,
        consultMechanic: carMaintenanceTips[key].consultMechanic,
      });
    } else {
      return res.status(404).json({
        error: "Issue not found in database. Please try another query.",
      });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
