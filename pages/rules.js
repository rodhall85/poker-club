import React from "react";

const RuleHeading = ({ children }) => {
    return (
        <div className="text-xl font-bold mt-2">
            {children}
        </div>
    );
};

const RuleDetails = ({ children }) => {
    return (
        <li className="ml-6">
            {children}
        </li>
    );
};

const TableHeader = ({ children }) => {
    return (
        <th className="text-right font-bold px-1">
            {children}
        </th>
    );
};

const TableCell = ({ children }) => {
    return (
        <td className="text-right">
            {children}
        </td>
    );
};

const rules = () => {
  return (
    <div>
      <main className="mx-auto w-11/12 sm:w-9/12 lg:w-7/12 xl:w-6/12 px-4 mt-4 pb-4">
        <h2 className="text-2xl font-bold">Rules</h2>
        <div>We follow the <a className="underline text-primary hover:text-secondary" href="https://www.internationalpokerrules.com/poker-rules/" target="_blank" rel="noreferrer">International Poker Rules.</a> with only 1 notable exception:</div>
        <RuleDetails>2 cards are required to claim a pot at showdown, even if the other player(s) mucks their hand(s). Rule 62.6 - The last man standing rule does not apply.</RuleDetails>
        <RuleHeading>
            Dealers
        </RuleHeading>
        <div>
            Dealers are also players. We assign dedicated dealers to each table to provide a better experience to the players, to manage the hands and to ensure fair play. Therefore, there are a number of rules that all players should be aware of.
        </div>
        <ul className="list-disc my-2">
            <RuleDetails>Dealers will ensure fair play and will enforce rulings. Any player has a right to dispute this ruling and can do so by calling the floor (this will just be another dealer so use sparingly but should definitely be used in the event the dealer is also in the disputed hand)</RuleDetails>
            <RuleDetails>No 2 dealers shall be assigned to the same table, they are removed from the seat draw. As tables are broken, dealers may retire and join another table.</RuleDetails>
            <RuleDetails>Dealers cannot be moved due to table balancing. In the event a dealer should move, the player to his left will move instead.</RuleDetails>
            <RuleDetails>At the start of the tournament, the dealer button is decided by high card.</RuleDetails>
            <RuleDetails>At the final table, if more than 1 dealer still remains in the tournament, the one with the highest stack is assigned dealer. If he/she is eliminated, then another active dealer may take over.</RuleDetails>
            <RuleDetails>Dealers will shuffle and offer the cut to the dealer button. To prevent disputes, players must cut the deck and at least 5 from the top.</RuleDetails>
            <RuleDetails>Dealers receive reduced entry to the tournament of up to &pound;30. This applies only to the entrance fee, rebuys and addons are not discounted.</RuleDetails>
            <RuleDetails>If you can deal and would like to join our pool of dealers, please make this known! We are always on the lookout for more!</RuleDetails>
        </ul>

        <RuleHeading>
            Payouts
        </RuleHeading>
        <div>
            Number of places paid is 1 place per table plus 1. e.g. if there are 4 tables in play, then 5 places will be paid. Any changes to the payouts are at the discretion of the remaining players.
        </div>
        <table className="w-full border-y-2 py-2 my-4 border-secondary">
            <thead>
                <tr>
                    <TableHeader>Place</TableHeader>
                    <TableHeader>Up to 8 players</TableHeader>
                    <TableHeader>9-16 players</TableHeader>
                    <TableHeader>17-24 players</TableHeader>
                    <TableHeader>24-32 players</TableHeader>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <TableCell>1st</TableCell>
                    <TableCell>65%</TableCell>
                    <TableCell>50%</TableCell>
                    <TableCell>46%</TableCell>
                    <TableCell>43%</TableCell>
                </tr>
                <tr>
                    <TableCell>2nd</TableCell>
                    <TableCell>35%</TableCell>
                    <TableCell>30%</TableCell>
                    <TableCell>26%</TableCell>
                    <TableCell>23%</TableCell>
                </tr>
                <tr>
                    <TableCell>3rd</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>20%</TableCell>
                    <TableCell>16%</TableCell>
                    <TableCell>13%</TableCell>
                </tr>
                <tr>
                    <TableCell>4th</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>12%</TableCell>
                    <TableCell>12%</TableCell>
                </tr>
                <tr>
                    <TableCell>5th</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>9%</TableCell>
                </tr>
            </tbody>
        </table>


        <RuleHeading>
            Table Balancing
        </RuleHeading>
        <div>Tables will be balanced as necessary and broken in reversed order, leaving table no.1 as the final table.</div>

        <RuleHeading>
            General
        </RuleHeading>
        <RuleDetails>When the chime goes off for blinds up, the cut-off is the dealers first rifle shuffle. It does not matter if your blind was already in.</RuleDetails>
        <RuleDetails>It is the players responsibility to protect their hole cards. If your hole cards touch the muck, they are dead. We recommend using a card protector or single chip for this.</RuleDetails>

      </main>
    </div>
  );
};

export default rules;
