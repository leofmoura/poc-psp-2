export const covenants = [
  {
    id: 1,
    company: "Company 1 - ABC",
    initialNonCompliance: "30-Jun-19",
    definition: "Major droughts deseases of Country A impacting = NO",
    result: "YES as of 29-Apr-19 (Bla bla bla)",
    calculatedStatusId: 3,
    overrideStatusId: 3,
    waivedUntil: new Date(),
    rmgComment: "Testing comment of status for asset class",
    lastModified: "30-Apr-19 by Leo",
    editable: 1,
    statuses: [
      {
        assetClass: "PO",
        result: "",
        calculatedStatusId: 1,
      },
      {
        assetClass: "INFRA",
        result: "YES as of 29-Apr-19 (Bla bla bla)",
        calculatedStatusId: 3,
      },
      {
        assetClass: "PE",
        result: "NO as of 29-Apr-19 (Bla bla bla)",
        calculatedStatusId: 2,
      },
      {
        assetClass: "BE",
        result: "",
        calculatedStatusId: 1,
      },
    ],
    PS:
      "[EDITABLE] This is the global status of a covenant with 2 asset classes"
  },
  {
    id: 2,
    company: "Company 2 - ASIA",
    initialNonCompliance: "30-Jun-19",
    definition: "ROI > 10",
    result: "11.45 as of 15-Apr-19 (Test big comment, again Test big comment, again Test big comment, again Test big comment, again Test big comment, again ... )",
    calculatedStatusId: 2,
    waivedUntil: null,
    rmgComment: "Testing comment of status for asset class",
    lastModified: "30-Apr-19 by Leo",
    editable: 1,
    statuses: [
      {
        assetClass: "NR",
        result: "",
        calculatedStatusId: 1,
      },
    ],
    PS:
      "[EDITABLE] This is the global status of a covenant with 2 asset classes"
  }
]