import React from "react";

import Button from '../components/Button';

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
                    <TableCell>15%</TableCell>
                </tr>
                <tr>
                    <TableCell>4th</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>12%</TableCell>
                    <TableCell>11%</TableCell>
                </tr>
                <tr>
                    <TableCell>5th</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>8%</TableCell>
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
        <RuleDetails>Underaises are considered calls unless it is 50% or more than the current raise. In which case the player must make the minimum raise.</RuleDetails>
 
        <div className="flex p-4">
            <Button text="Structures" link="structures" />
        </div>
      </main>
    </div>
  );
};

export default rules;
