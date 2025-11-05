import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function FundingRounds() {
  const rounds = [
    { round: "GR12", date: "Dec. 2021", crowdfunded: 403425, matchPool: 300000, total: 703425, projects: 26 },
    { round: "GR13", date: "March 2022", crowdfunded: 176322, matchPool: 465000, total: 641322, projects: 97 },
    { round: "GR14", date: "June 2022", crowdfunded: 98548, matchPool: 500000, total: 598548, projects: 145 },
    { round: "GR15", date: "Sept 2022", crowdfunded: 114667, matchPool: 350000, total: 464667, projects: 199 },
    { round: "GG16", date: "Jan 2023", crowdfunded: 76422, matchPool: 333333, total: 409755, projects: 50 },
    { round: "GG17", date: "May 2023", crowdfunded: 40613, matchPool: 350000, total: 390613, projects: 104 },
    { round: "GG18", date: "Aug 2023", crowdfunded: 34438, matchPool: 350000, total: 384438, projects: 89 },
    { round: "GG19", date: "Nov 2023", crowdfunded: 35313, matchPool: 250000, total: 285313, projects: 100 },
    { round: "GG20", date: "April 2024", crowdfunded: 58010, matchPool: 300000, total: 358010, projects: 129 },
    { round: "GG21", date: "Aug 2024", crowdfunded: 22069, matchPool: 250000, total: 272069, projects: 71 },
    { round: "GIV-Earth", date: "June 2024", crowdfunded: 44735, matchPool: 40000, total: 84735, projects: 75 },
    { round: "Jokerace", date: "Sept 2024", crowdfunded: 0, matchPool: 25000, total: 25000, projects: 10 },
    { round: "Octant Ep7", date: "April 2025", crowdfunded: 0, matchPool: 1000000, total: 1000000, projects: 20 },
  ]

  const totals = {
    crowdfunded: 1104562,
    matchPool: 4513333,
    total: 5617895,
    grants: 1115,
    uniqueProjects: 389,
  }

  return (
    <section className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Funding Rounds</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Three years of consistent support for climate innovation
          </p>
        </div>

        <Card className="p-6 bg-card border-primary/10 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-primary/20">
                  <TableHead className="font-semibold">Round</TableHead>
                  <TableHead className="font-semibold">Dates</TableHead>
                  <TableHead className="text-right font-semibold">Crowdfunded</TableHead>
                  <TableHead className="text-right font-semibold">Match Pool</TableHead>
                  <TableHead className="text-right font-semibold">Total Deployed</TableHead>
                  <TableHead className="text-right font-semibold">Projects</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rounds.map((round, index) => (
                  <TableRow key={index} className="border-primary/10 hover:bg-primary/5">
                    <TableCell className="font-mono font-semibold text-primary">{round.round}</TableCell>
                    <TableCell className="text-muted-foreground">{round.date}</TableCell>
                    <TableCell className="text-right font-mono">${round.crowdfunded.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-mono">${round.matchPool.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-mono font-semibold">
                      ${round.total.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-mono">{round.projects}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-t-2 border-primary/30 bg-primary/5 font-bold">
                  <TableCell className="font-semibold">TOTAL</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right font-mono">${totals.crowdfunded.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-mono">${totals.matchPool.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-mono text-primary text-lg">
                    ${totals.total.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-mono">{totals.grants}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-center text-sm text-muted-foreground">
              <span className="font-semibold text-primary">{totals.uniqueProjects} unique projects</span> funded across
              all rounds
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
